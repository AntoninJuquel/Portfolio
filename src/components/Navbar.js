import React, { useState } from "react";
import { AppBar, Box, ButtonBase, Drawer, Icon, IconButton, Menu, MenuItem, Toolbar } from "@material-ui/core";
import { FaBars } from "react-icons/fa";
import { useLanguage } from "../providers/LanguageContext";
import ReactCountryFlag from "react-country-flag"

function NavBar(props) {
    const { sections, classes, isMobile } = props
    const [drawer, setDrawer] = useState(false);
    const [anchorEl, setAnchorEl] = useState(false);
    const { GetLanguageFile, GetLanguageFlag, GetFlags, setLanguage } = useLanguage()

    const handleLanguageMenu = event => {
        setAnchorEl(event.currentTarget);
    };
    const handleButtonsClick = section => {
        window.scrollTo({ behavior: "smooth", top: sections[section].ref.current.offsetTop - 100 })
        setDrawer(false);
    };

    function NavBarButtons() {
        return (
            Object.keys(sections).map(
                (section, i) => <IconButton color="inherit" key={i} onClick={() => handleButtonsClick(section)} >
                    {GetLanguageFile().navbar[section.toLowerCase()]}
                </IconButton>
            )
        )
    }

    function MobileNavBarButtons() {
        return (
            <>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    onClick={() => setDrawer(true)}
                >
                    <FaBars />
                </IconButton>
                <Drawer
                    anchor="right"
                    open={drawer}
                    onClose={() => setDrawer(false)}
                >
                    {Object.keys(sections).map((section, i) =>
                        <MenuItem key={i} onClick={() => handleButtonsClick(section)}>
                            {section}
                        </MenuItem>
                    )}
                </Drawer>
            </>
        )
    }

    function LanguageMenu() {
        return (
            <Menu open={Boolean(anchorEl)} anchorEl={anchorEl} onClose={() => setAnchorEl(null)} >
                {GetFlags().map((lang, i) =>
                    <MenuItem key={i} onClick={() => { setLanguage(lang.language); setAnchorEl(null) }}>
                        <ReactCountryFlag countryCode={lang.flag} svg />
                    </MenuItem>
                )}
            </Menu>
        )
    }

    return (
        <AppBar color="default" className={classes.navbar}>
            <Toolbar>
                <Box container className={classes.brand} spacing={5}>
                    <h2 className={classes.brandText} onClick={() => window.scrollTo({ behavior: "smooth", top: 0 })}>
                        Antonin J.
                    </h2>
                    <ButtonBase style={{ marginLeft: 25 }} onClick={handleLanguageMenu}>
                        <ReactCountryFlag countryCode={GetLanguageFlag()} svg />
                        <Icon>expand_more</Icon>
                    </ButtonBase>
                    <LanguageMenu />
                </Box>
                {isMobile ? MobileNavBarButtons() : NavBarButtons()}
            </Toolbar>
        </AppBar>
    )
}

export default NavBar