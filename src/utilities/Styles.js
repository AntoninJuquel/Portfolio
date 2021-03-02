import { makeStyles } from "@material-ui/core";

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
    width: "100%"
  },
  navbar: {
    backgroundColor: "#121212",
    color: "white"
  },
  brand: {
    flexGrow: 1
  },
  brandText: {
    cursor: 'pointer'
  }
}, { index: 1 });

export default useStyles