import React from "react";
import { AppBar, Box, IconButton, Menu, MenuItem, Toolbar, Typography, useMediaQuery, useTheme } from "@material-ui/core";
import { FaBars } from "react-icons/fa";

import styles from "./NavBar.module.css";

function NavBar({ sections }) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleMenu = event => {
        setAnchorEl(event.currentTarget);
    };
    const handleButtonsClick = section => {
        window.scrollTo({ top: sections[section].ref.current.offsetTop - 64 })
        setAnchorEl(null);
    };
    const NavBarButtons = () => Object.keys(sections).map(
        (section, i) => <IconButton color="inherit" key={i} onClick={() => handleButtonsClick(section)} >{section}</IconButton>
    )

    const MobileNavBarButtons = () =>
        <>
            <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleMenu}
            >
                <FaBars />
            </IconButton>
            <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "right"
                }}
                keepMounted
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right"
                }}
                open={open}
                onClose={() => setAnchorEl(null)}
            >
                {Object.keys(sections).map((section,i) =>
                    <MenuItem key={i} onClick={() => handleButtonsClick(section)}>
                        {section}
                    </MenuItem>
                )}
            </Menu>
        </>

    return (
        <AppBar color="default" style={{ backgroundColor: "#121212", color: "white" }}>
            <Toolbar>
                <Box className={styles.brand}>
                    <Typography display="inline" variant="h4" className={styles.brandText} onClick={() => window.scrollTo({ top: 0 })}>
                        Antonin J.
                    </Typography>
                </Box>
                {isMobile ? MobileNavBarButtons() : NavBarButtons()}
            </Toolbar>
        </AppBar>
    )
}

export default NavBar