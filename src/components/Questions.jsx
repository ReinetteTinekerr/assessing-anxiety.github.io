import React, { useEffect } from "react";
import {
  Typography,
  Container,
  Button,
  Box,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
  Divider,
} from "@mui/material";
import { useState } from "react";
import UserFormDialog from "./UserFormDialog";
import { useNavigate } from "react-router-dom";
import { doc, collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../firebase/firebaseInit";

let questions = [
  "Numbness or tingling",
  "Feeling hot",
  "Wobbliness in legs",
  "Unable to relax",
  "Fear of worst happening",
  "Dizzy or lightheaded",
  "Heart pounding/racing",
  "Unsteady",
  "Terrified or afraid",
  "Nervous",
  "Feeling of choking",
  "Hands trembling",
  "Shaky/unsteady",
  "Fear of losing control",
  "Difficulty in breathing",
  "Fear of dying",
  "Scared",
  "Indigestion",
  "Faint/lightheaded",
  "Face flushed",
  "Hot/cold sweats",
];
export default function Questions() {
  const responded = localStorage.getItem("submitted");
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({});
  const [userInfo, setUserInfo] = useState({});
  const [error, setError] = useState(false);

  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    if (responded) {
      navigate("/");
    }
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setUserInfo({});
    setOpen(false);
  };

  const handleFormSubmit = (event) => {
    const data = {
      answers: answers,
      user: userInfo,
      createdAt: Timestamp.now(),
    };
    // const responseRef = doc(collection(db, "responses"))
    addDoc(collection(db, "responses"), data).then((res) => {
      console.log(res);
    });
    localStorage.setItem("submitted", true);
    localStorage.setItem("profile", JSON.stringify(userInfo));
    navigate("/");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const length = Object.keys(answers).length;
    if (length != questions.length) {
      setError(true);
      return;
    }
    setError(false);
    handleClickOpen();
  };

  const handleUserInfoChange = (event) => {
    const target = event.target;
    setUserInfo((prev) => ({ ...prev, [target.name]: target.value }));
  };

  const handleRadioChange = (event) => {
    const target = event.target;
    setAnswers((prev) => ({ ...prev, [target.name]: target.value }));
  };

  return (
    <Box
      border={1}
      borderRadius={4}
      sx={{
        height: "80%",
        width: "80%",
        maxWidth: "70%",
        // minWidth: "70%",
        // position: "relative",
        // overflow: "auto",
        display: { sm: "flex", md: "flex" },
        justifyContent: "center",
        maxHeight: "80%",
        backgroundColor: "rgb(248,248,248)",
        overflow: "scroll",
      }}
    >
      <UserFormDialog
        open={open}
        handleClose={handleClose}
        userInfo={userInfo}
        handleUserInfoChange={handleUserInfoChange}
        handleFormSubmit={handleFormSubmit}
      />
      <form onSubmit={handleSubmit}>
        <FormControl component="fieldset" error={error}>
          {questions.map((question, index) => {
            return (
              <RadioGroup
                row
                onChange={handleRadioChange}
                aria-label="position"
                name={index}
                defaultValue="top"
                key={index}
                sx={{
                  p: 2,
                }}
              >
                <FormLabel sx={{ width: "250px" }} component="legend">
                  {question}
                </FormLabel>
                <FormControlLabel
                  value="0"
                  control={<Radio color="primary" />}
                  label="Not At All"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="1"
                  control={<Radio color="primary" />}
                  label="Mild"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="2"
                  control={<Radio color="primary" />}
                  label="Moderately"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="3"
                  control={<Radio color="primary" />}
                  labelPlacement="top"
                  label="Severely"
                />
              </RadioGroup>
            );
          })}
          <Box
            sx={{
              // width: "100px",
              display: { sm: "flex", md: "flex" },
              justifyContent: "center",
            }}
          >
            <Button type="submit" variant="contained">
              Submit
            </Button>
          </Box>
        </FormControl>
      </form>
    </Box>
  );
}
