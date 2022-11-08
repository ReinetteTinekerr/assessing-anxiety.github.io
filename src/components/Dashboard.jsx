import React, { useState } from "react";
import useFirebaseAuthentication from "../hooks/useFirebaseAuthentication";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebaseInit";
import ItemList from "./ItemList";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Dashboard() {
  const navigate = useNavigate();
  const user = useFirebaseAuthentication();

  const [value, setValue] = useState(0);
  const [responses, setResponses] = useState();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    if (!user) {
      navigate("/admin");
    }
  }, [user]);

  useEffect(() => {
    getDocs(collection(db, "responses")).then((snapshot) => {
      const allResponses = [];
      snapshot.forEach((doc) => {
        allResponses.push(doc.data());
      });
      // console.log(allResponses.length);
      const res = allResponses.map((res) => res.user);
      console.log(res);
      setResponses(allResponses);
    });
    // const res = allResponses.map((response) => {
    //   console.log(response, ".");
    //   return response;
    // });
    // console.log(responses);
  }, []);
  return (
    <>
      <Box sx={{ width: "100%", backgroundColor: "white", height: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            centered
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Potential Concerning" {...a11yProps(0)} />
            <Tab label="All Responses" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={1}>
          <ItemList responses={responses} />
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
      </Box>
    </>
  );
}
