import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  text: {
    color: "black",
    paddingTop: "15px",
  },
}));

export default function PlataformaSelector(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState("Plataforma");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };
  props.onSetSelect(value);
  return (
    <FormControl component="fieldset">
      <nav>
        <Typography className={classes.text}>Plataforma</Typography>
        <RadioGroup
          aria-label="plataforma"
          name="plataforma"
          value={value}
          onChange={handleChange}
          row={true}
        >
          <dd>
            <FormControlLabel value="IFood" control={<Radio />} label="IFood" />
          </dd>
          <dd>
            <FormControlLabel
              value="UberEats"
              control={<Radio />}
              label="UberEats"
            />
          </dd>
          <dd>
            <FormControlLabel value="Rappi" control={<Radio />} label="Rappi" />
          </dd>
          <dd>
            <FormControlLabel
              value="99Food"
              control={<Radio />}
              label="99Food"
            />
          </dd>
        </RadioGroup>
      </nav>
    </FormControl>
  );
}
