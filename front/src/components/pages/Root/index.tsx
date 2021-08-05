import { makeStyles } from "@material-ui/styles";
import react from "react";

const useStyles = makeStyles({
  root: {
    margin: "0.5rem auto",
    width: "45vw",
    height: "75vh",
    boxShadow: "1px 1px 2px #888888",
    justifyContent: "center",
    alignContent: "center",
  },
  img: {
    justifyContent: "center",
    alignContent: "center",
    width: "100%",
    height: "100%",
    margin: "0 auto",
    backgroundColor: "red",
  },
});

function Root() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <img className={classes.img} src="./assets/img/ws.png" alt="Logo WS" />
    </div>
  );
}

export default Root;
