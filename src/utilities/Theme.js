import { createMuiTheme } from "@material-ui/core";
import { purple, teal } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: purple[900]
    },
    secondary: {
      main: teal[500]
    },
    background: {
      default: "#121212",
      paper: "#121212"
    },
    text: {
      primary: "#000"
    }
  },
  overrides: {
    MuiDialog:{
      paper:{
        color: "white"
      }
    },
    MuiDrawer: {
      paperAnchorRight: {
        color: "white"
      }
    },
    MuiMenuItem:{
      root:{
        color: "white"
      }
    }
  }
}, { index: 1 })

export default theme