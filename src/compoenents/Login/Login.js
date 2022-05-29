import { useContext, useRef } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Context from "../common/Context";

const Login = (props) => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const context = useContext(Context);
  const handleClose = () => {
    context.setIsLoginModal(false);
  };

  const handleSubmit = async () => {
    // const payload = {
    //   user: {
    //     email: emailRef.current.value,
    //     password: passwordRef.current.value,
    //   },
    // };
    const payload = {
      user: {
        email: "testz@gmail.com",
        password: "testz",
      },
    };
    console.log("emailRef.current.value,", payload);

    const response = await fetch("https://api.realworld.io/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();
    context.setToken(data.user.token);
    context.setIsLogin(true);
    console.log(data.user.token);
    handleClose();
  };
  return (
    <Dialog open={context.isLoginModal} onClose={handleClose}>
      <DialogTitle>Login to Your Account</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="email"
          label="Email Address"
          type="email"
          fullWidth
          variant="standard"
          inputRef={emailRef}
        />
        <TextField
          autoFocus
          margin="dense"
          id="password"
          label="Password"
          type="password"
          fullWidth
          variant="standard"
          inputRef={passwordRef}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSubmit}>Submit</Button>
      </DialogActions>
    </Dialog>
  );
};

export default Login;
