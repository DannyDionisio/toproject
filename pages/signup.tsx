import React from "react";
import TextField from "@material-ui/core/TextField";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import Link from "next/link";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        width: "50ch",
      },
    },
  })
);

export default function Form() {
  const classes = useStyles();

  return (
    <section className="container-index">
      <form className={classes.root} noValidate autoComplete="off">
        <div className="container">
          <h1>Sign Up</h1>

          <TextField
            required
            id="outlined-required"
            label="Email"
            variant="outlined"
          />

          <TextField
            required
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="outlined"
          />

          <TextField
            required
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="outlined"
          />

          <Button variant="contained" color="primary" disableElevation>
            Sign Up
          </Button>
          <Link href="/">
            <a>Back to Login</a>
          </Link>
        </div>
      </form>
    </section>
  );
}
