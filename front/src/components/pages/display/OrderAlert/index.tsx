import { Box, makeStyles, Theme, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: "fixed",
    top: 0,
    left: 0,
    height: "100vh",
    width: "100vw",
    background: "#F4F2FF",
  },
  header: {
    fontSize: "7.25rem",
    textAlign: "center",
    textTransform: "uppercase",
    backgroundColor: "#000095",
    color: "#F4F2FF",
    borderBottom: "3px solid #333",
    textShadow: "black 1rem 0rem 1rem",
  },
  alert: {
    fontSize: "4.25rem",
    textAlign: "center",
    textTransform: "uppercase",
  },
  ticket: {
    fontSize: "7.25rem",
    paddingTop: "1rem",
    textAlign: "center",
    textTransform: "uppercase",
  },
  number: {
    fontSize: "12rem",
    color: "#ff001e",
    textAlign: "center",
    textTransform: "uppercase",
    textShadow: "black 1rem 0rem 3rem",
    fontWeight: "bold",
  },
  withdraw: {
    fontSize: "5.25rem",
    padding: "0 0 0 5rem",
    textShadow: "black 1rem 0rem 3rem",
    fontWeight: "bold",
    textDecoration: "underline",
  },
}));

export default function OrderAlert() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography className={classes.header}>- ATENÇÃO -</Typography>
      <Box fontWeight={900} display="flex" flexDirection="column">
        <Typography className={classes.ticket}>PEDIDO NÚMERO</Typography>
        <Typography className={classes.number}>5502</Typography>
        <Typography className={classes.withdraw}>FAVOR RETIRAR</Typography>
        <Typography className={classes.withdraw}>PEDIDO NO BALCÃO</Typography>
      </Box>
    </Box>
  );
}
