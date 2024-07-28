import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import {
  TextField,
  Container,
  Button,
  Typography,
  Modal,
  Box,
  MenuItem,
  FormControl,
  Select,
  InputLabel,
  Paper,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { red } from "@mui/material/colors";
import CloseIcon from "@mui/icons-material/Close";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Link } from "react-router-dom";
import "./Form.css";

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  phonenumber: Yup.string().required("Required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Required"),
  confirmpassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Required"),
  role: Yup.string().required("Required"),
});

function Form() {
  const [apiResponse, setApiResponse] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);
  const [open, setOpen] = useState(true); // Handle modal open/close state locally

  const errorColor = red[800];
  const navigate = useNavigate();

  const handleOpen = () => setOpen(true); // Open modal
  const handleClose = () => setOpen(false); // Close modal

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleClickConfirmPassword = () => {
    setConfirmPassword((prev) => !prev);
  };
  const handleMouseDownConfirmPassword = (event) => {
    event.preventDefault();
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phonenumber: "",
      password: "",
      confirmpassword: "",
      role: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      console.log(values);
      setSubmitting(false);
      try {
        // Mock API response
        const response = { success: true };
        if (response.success) {
          setApiResponse(
            "Registration successful! Please check your email for the OTP."
          );
          navigate("/register-otp");
        } else {
          setApiResponse("Registration failed. Please try again.");
        }
      } catch (error) {
        console.error("Error", error);
        setApiResponse("An error occurred. Please try again.");
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Container
          maxWidth="sm"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            animation: "bounceIn 1s",
          }}
          className=""
        >
          <Paper elevation={3} sx={{ p: 3, mt: 3, borderRadius: 2 }} className="p-5 paper-bg">
            <div className="shadow p-4 card">
        <div className="d-flex"> <Typography variant="h5" align="start"  gutterBottom>
              Authenticate on the platform
            </Typography> <Button
              sx={{
                position: "relative",
               left:70,
               bottom:3,
                zIndex: 20,
               
                color: red[500],
                "&:hover": {
                  outline: "none",
                  border: "none",
                  background:"none",
                },
              }}
              type="button"
              onClick={handleClose}
              startIcon={<CloseIcon className="fs-3" />}
            ></Button></div> 

            

            <Box display="flex" gap={2}>
              <FormControl
                fullWidth
                variant="outlined"
                size="small"
                sx={{ mt: 1, mb: 2 }}
              >
                <InputLabel id="role-label">Role</InputLabel>
                <Select
                  labelId="role-label"
                  id="role"
                  name="role"
                  value={formik.values.role}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  label="Role"
                  size="small"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="user">Customer</MenuItem>
                  <MenuItem value="vendor">Vendor</MenuItem>
                  <MenuItem value="delivery">Delivery boy</MenuItem>
                  <MenuItem value="admin">Admin</MenuItem>
                </Select>
                {formik.touched.role && formik.errors.role && (
                  <Typography variant="body2" color={errorColor}>
                    {formik.errors.role}
                  </Typography>
                )}
              </FormControl>

              <TextField
                variant="outlined"
                name="name"
                type="text"
                label="Name"
                size="small"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                fullWidth
                sx={{
                  mb: 2,
                  mt: 1,
                }}
                helperText={
                  formik.touched.name && formik.errors.name ? (
                    <Typography variant="body2" color={errorColor}>
                      {formik.errors.name}
                    </Typography>
                  ) : null
                }
              />
            </Box>

            <TextField
              variant="outlined"
              name="email"
              type="email"
              label="Email Address"
              size="small"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              fullWidth
              sx={{ mb: 2, width: 350 }}
              helperText={
                formik.touched.email && formik.errors.email ? (
                  <Typography variant="body2" color={errorColor}>
                    {formik.errors.email}
                  </Typography>
                ) : null
              }
            />

            <Box display="flex" gap={2}>
              <TextField
                variant="outlined"
                name="phonenumber"
                type="text"
                label="Phone Number"
                size="small"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phonenumber}
                fullWidth
                sx={{ mb: 2 }}
                helperText={
                  formik.touched.phonenumber && formik.errors.phonenumber ? (
                    <Typography variant="body2" color={errorColor}>
                      {formik.errors.phonenumber}
                    </Typography>
                  ) : null
                }
              />

              <TextField
                variant="outlined"
                name="password"
                type={showPassword ? "text" : "password"}
                label="Password"
                size="small"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                fullWidth
                sx={{ mb: 2 }}
                helperText={
                  formik.touched.password && formik.errors.password ? (
                    <Typography variant="body2" color={errorColor}>
                      {formik.errors.password}
                    </Typography>
                  ) : null
                }
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>

            <TextField
              variant="outlined"
              name="confirmpassword"
              type={confirmPassword ? "text" : "password"}
              label="Confirm Password"
              size="small"
              position="end"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.confirmpassword}
              fullWidth
              sx={{ mb: 2, width: 350 }}
              helperText={
                formik.touched.confirmpassword &&
                formik.errors.confirmpassword ? (
                  <Typography variant="body2" color={errorColor}>
                    {formik.errors.confirmpassword}
                  </Typography>
                ) : null
              }
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickConfirmPassword}
                      onMouseDown={handleMouseDownConfirmPassword}
                      edge="end"
                    >
                      {confirmPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <Button
              type="submit"
              variant="contained"
              //   color="primary"
              fullWidth
              className="commonreg"
              sx={{
                mb: 2,
                "&:hover": {
                  backgroundColor: "#009688",
                },
              }}
              onClick={formik.handleSubmit}
            >
              Register
            </Button>

            {apiResponse && (
              <Typography variant="body2" color="error">
                {apiResponse}
              </Typography>
            )}
            </div>
          </Paper>
        </Container>
      </Modal>
    </>
  );
}

export default Form;
