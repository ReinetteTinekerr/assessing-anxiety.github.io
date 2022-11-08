import { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import IconButton from "@mui/material/IconButton";
import CommentIcon from "@mui/icons-material/Comment";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import { Tooltip, Box, Popover, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

export default function ItemList({ responses }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorEl2, setAnchorEl2] = useState(null);
  const [userResponse, setUserResponse] = useState("");
  const [userInfo, setUserInfo] = useState("");

  const handleClickResponse = (event, response) => {
    setAnchorEl(event.currentTarget);
    setUserResponse(JSON.stringify(response.answers));
  };
  const handleClickUser = (event, response) => {
    setAnchorEl2(event.currentTarget);
    setUserInfo(JSON.stringify(response.user));
  };

  const handleClose = () => {
    setAnchorEl(null);
    setAnchorEl2(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const open2 = Boolean(anchorEl2);
  const id2 = open ? "simple-popover" : undefined;
  return (
    <Box display="flex" justifyContent="center" minHeight="100vh">
      <List
        centered
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
        }}
      >
        {responses.map((response, index) => {
          const createdAt = response.createdAt.toDate().toLocaleString("en-US");
          const user = response.user;
          return (
            <div key={index}>
              <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
              >
                <Typography sx={{ p: 2 }}>{userResponse}</Typography>
              </Popover>
              <Popover
                id={id2}
                open={open2}
                anchorEl={anchorEl2}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
              >
                <Typography sx={{ p: 2 }}>{userInfo}</Typography>
              </Popover>
              <ListItem
                secondaryAction={
                  <>
                    <Tooltip title="Response">
                      <IconButton
                        onClick={(event) =>
                          handleClickResponse(event, response)
                        }
                        edge="end"
                        aria-label="comments"
                      >
                        <CommentIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="User">
                      <IconButton
                        onClick={(event) => handleClickUser(event, response)}
                        edge="end"
                        aria-label="comments"
                      >
                        <ContactPageIcon />
                      </IconButton>
                    </Tooltip>
                  </>
                }
              >
                <ListItemAvatar>
                  <Avatar>
                    <PersonIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={user.name}
                  secondary={createdAt.toString()}
                />
              </ListItem>
            </div>
          );
        })}
      </List>
    </Box>
  );
}
