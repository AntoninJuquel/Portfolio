import React from "react";
import { AppBar, Box, Drawer, IconButton, Menu, MenuItem, Toolbar, Typography } from "@material-ui/core";
import { FaBars } from "react-icons/fa";
import { useLanguage } from "../providers/LanguageContext";

function NavBar(props) {
    const { sections, classes, isMobile } = props
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const { GetLanguageFile } = useLanguage()

    const handleMenu = event => {
        setAnchorEl(event.currentTarget);
    };
    const handleButtonsClick = section => {
        window.scrollTo({ behavior: "smooth", top: sections[section].ref.current.offsetTop - 100 })
        setAnchorEl(null);
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
                    onClick={handleMenu}
                >
                    <FaBars />
                </IconButton>
                <Drawer
                    style={{color: "aqua"}}
                    anchor="right"
                    open={open}
                    onClose={() => setAnchorEl(null)}
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

    return (
        <AppBar color="default" className={classes.navbar}>
            <Toolbar>
                <Box className={classes.brand}>
                    <Typography display="inline" variant="h4" className={classes.brandText} onClick={() => window.scrollTo({ behavior: "smooth", top: 0 })}>
                        Antonin J.
                    </Typography>
                </Box>
                {isMobile ? MobileNavBarButtons() : NavBarButtons()}
            </Toolbar>
        </AppBar>
    )
}

export default NavBar