import { makeStyles } from "@material-ui/core";
import { purple } from "@material-ui/core/colors";

const useStyles = makeStyles({
  title: {
    fontWeight: 'bold',
    fontSize: 52
  },
  subTitle: {
    fontSize: 32
  },
  container: {
    marginTop: 250,
    marginBottom: 250
  },
  textField: {
    background: 'linear-gradient(90deg, #cccccc,#FFFFFF, #cccccc)',
    border: 0,
    borderRadius: 3,
  },
  buttonWrapper: {
    marginTop: 10
  },
  modal: {
    textAlign: 'center',
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)'
  },
  paper: {
    padding: '6px 16px',
    color: "white",
    width: "100%",
    backgroundColor: purple[900]
  },
  navbar: {
    backgroundColor: "#121212",
    color: "white"
  },
  brand: {
    flexGrow: 1,
    display: "flex"
  },
  brandText: {
    cursor: 'pointer',
    marginBottom: 0,
    display: "inline"
  }
}, { index: 1 });

export default useStyles