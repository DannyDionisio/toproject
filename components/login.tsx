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

export default function Login() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div className="container">
        <h1>Login</h1>
        {/* {inputFields.map(({ type, props }) => {
          let Comp;
          let defaultProps = { variant: undefined };

          switch (type) {
            case "button":
              Comp = Button;
              break;
            case "text":
              Comp = TextField;
              defaultProps.variant = "outlined";
              break;
          }

          return <Comp {...defaultProps} {...props} />;
        })} */}

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

        <Button variant="contained" color="primary" disableElevation>
          <Link href="/table">
            <a>Login</a>
          </Link>
        </Button>

        <Link href="/passwordreset">
          <a>Forgot Password?</a>
        </Link>
        <Link href="/signup">
          <a>Sign Up</a>
        </Link>
      </div>
    </form>
  );
}
