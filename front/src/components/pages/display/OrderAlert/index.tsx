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
    fontWeight: "bold",
  },
  withdraw: {
    fontSize: "5.25rem",
    padding: "3rem 0 0 5.5rem",
    fontWeight: "bold",
    textDecoration: "underline",
    textAlign: "center",
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
        <Typography className={classes.withdraw}>
          FAVOR RETIRAR PEDIDO NO BALCÃO
        </Typography>
      </Box>
    </Box>
  );
}
