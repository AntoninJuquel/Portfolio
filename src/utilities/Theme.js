import { createMuiTheme } from "@material-ui/core";
import { purple, teal } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: purple[900]
    },
    secondary: {
      main: teal[500]
    }
  }
})

export default theme