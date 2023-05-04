import "./SignIn.css";
import TextField from "@mui/material/TextField";
import GoogleIcon from "../../images/google.svg";
import Box from "@mui/material/Box";
import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import FilledInput from "@mui/material/FilledInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import AppleIcon from "../../images/apple.ico";
import userApi from "../../api/modules/user.api";
import { Link } from "react-router-dom";
const SignIn = () => {
  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleChange = (prop) => (event) => {
    setPassword(event.target.value);
    setValues({ ...values, [prop]: event.target.value });
  }
  const handleChangeUser = (e) => {
    setUsername(e.target.value);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await userApi.signIn({
        username: username,
        password: password,
      });
      console.log(response);
      localStorage.setItem("username", JSON.stringify(response.username));
      localStorage.setItem("idUser", JSON.stringify(response._id));
      alert("Login success !");
      window.location.reload();
    }
    catch(err) {
      alert("Login fail !");

    }
  }
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div className="login__main" >
        <div className="login__row row ">
          <div className="login__right card">
            <div className="form__login">
              <div className="login__btns">
                <h1 style={{backgroundColor: 'green', color: 'white', padding: 5, borderRadius: 6}}>Login</h1>
                <Box
                  component="form"
                  noValidate
                  sx={{
                    "& .MuiInputBase-input": {
                      m: 1,
                      height: "4ch",
                      width: "35ch",
                    },
                    "& > :not(style)": { m: 1, width: "35ch" },
                    "& .MuiButtonBase-root": {
                      display: "flex",
                      justifyContent: "flex-end",
                      paddingX: "10px",
                      width: "30px",
                    },
                    "& .MuiInputBase-input::after": {
                      color: "red",
                      borderBottom: "2px solid red",

                      "&focus": {
                        color: "pink",
                        borderBottom: "2px solid red",
                      },
                    },
                  }}
                  className="input_all"
                  autoComplete="off"
                >
                  <div className="sign_name">
                    <h5>Username</h5>
                    <FilledInput
                     id="filled-adornment-username"
                     value={username}
                     onChange={handleChangeUser}
                    />
                  </div>
                  <div className="sign_pass">
                    <h5>Password</h5>

                    <FormControl variant="filled" size="small" fullWidth>
                      <FilledInput
                        id="filled-adornment-password"
                        type={values.showPassword ? "text" : "password"}
                        value={values.password}
                        onChange={handleChange("password")}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                            >
                              {values.showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        }
                      />
                    </FormControl>
                  </div>
                  <div className="form-group">
                      <button type="submit" onClick={handleSubmit}style={{width: '100%'}}>Login</button>
                  </div>
                </Box>
                <div className="new__acc">
                  <Link to="/signup">
                    <button>Create An Account</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
