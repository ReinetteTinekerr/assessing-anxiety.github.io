import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Box } from "@mui/material";

export default function UserFormDialog({
  open,
  handleClose,
  handleUserInfoChange,
  handleFormSubmit,
  userInfo,
}) {
  const [disabled, setDisabled] = useState(true);
  useEffect(() => {
    let isDisabled = false;
    const length = Object.keys(userInfo).length;
    if (length === 0 || length < 5) {
      isDisabled = true;
    }
    console.log(userInfo, "wew");
    Object.values(userInfo).forEach((value) => {
      if (value.length == 0) {
        isDisabled = true;
      }
    });
    setDisabled(isDisabled);
  }, [userInfo]);
  const handleTextField = (event) => {
    handleUserInfoChange(event);
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <Box component="form">
          <DialogTitle>User Information</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
              sit accusantium. Tempora, fuga laborum? Esse delectus
            </DialogContentText>
            <TextField
              required
              autoFocus
              margin="dense"
              id="name"
              name="name"
              label="Name"
              type="text"
              fullWidth
              variant="standard"
              onChange={handleTextField}
            />
            <TextField
              required
              autoFocus
              margin="dense"
              id="email"
              name="email"
              label="Email Address"
              type="email"
              fullWidth
              variant="standard"
              onChange={handleTextField}
            />
            <TextField
              required
              autoFocus
              margin="dense"
              id="age"
              name="age"
              label="Age"
              type="number"
              fullWidth
              variant="standard"
              onChange={handleTextField}
            />
            <TextField
              required
              autoFocus
              margin="dense"
              id="college"
              name="college"
              label="College"
              type="text"
              fullWidth
              variant="standard"
              onChange={handleTextField}
            />
            <TextField
              required
              autoFocus
              margin="dense"
              id="course"
              name="course"
              label="Course"
              type="text"
              fullWidth
              variant="standard"
              onChange={handleTextField}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button
              disabled={disabled}
              type="submit"
              onClick={handleFormSubmit}
            >
              Submit
            </Button>
          </DialogActions>
        </Box>
      </Dialog>
    </div>
  );
}
