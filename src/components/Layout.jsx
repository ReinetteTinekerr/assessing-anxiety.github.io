import Header from "./Header";
import styles from "../css/Layout.module.css";
import Container from "@mui/material/Container";

function Background({ children }) {
  return (
    <Container>
      <div className={styles.background}>{children}</div>
    </Container>
  );
}

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Container>
        <Background> {children} </Background>
      </Container>
    </>
  );
}
