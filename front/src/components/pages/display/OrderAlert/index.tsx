import { Box, makeStyles, Theme, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: "fixed",
    top: 0,
    left: 0,
    height: "100vh",
    width: "100vw",
    background: theme.palette.background.paper,
  },
  header: {
    fontSize: "5.25rem",
    textAlign: "center",
    textTransform: "uppercase",
    backgroundColor: "#151515",
    color: "#ffffff",
  },
  alert: {
    fontSize: "4.25rem",
    textAlign: "center",
    textTransform: "uppercase",
  },
}));

export default function OrderAlert() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography className={classes.header}>ATENÇÃO</Typography>
      <Box fontWeight={900}>
        <Typography className={classes.alert}>PEDIDO NUMERO 6821</Typography>
        <Typography className={classes.alert}>FAVOR RETIRAR</Typography>
        <Typography className={classes.alert}>PEDIDO NO BALCÃO</Typography>
      </Box>
    </Box>
  );
}
