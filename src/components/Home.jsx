import { Link } from "react-router-dom";
import {
  Typography,
  Container,
  Button,
  Box,
  Alert,
  AlertTitle,
} from "@mui/material";
export default function Home() {
  const responded = localStorage.getItem("submitted");
  return (
    <>
      <Container
        sx={{
          display: { xs: "grid", md: "grid" },
          placeItems: "center",
          // justifyContent: "center",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontFamily: "arial",
            fontWeight: 600,
            color: "inherit",
            textDecoration: "none",
            wordWrap: "break-word",
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Typography>
        <Box mt={5} sx={{}}>
          {responded ? (
            <Alert severity="success">
              <AlertTitle>Success</AlertTitle>
              <strong>Your response has been recorded! </strong>
            </Alert>
          ) : (
            <Link to="/bai">
              <Button variant="contained">Get Started</Button>
            </Link>
          )}
        </Box>
      </Container>
    </>
  );
}
