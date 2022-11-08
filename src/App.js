import { Route, Routes } from "react-router-dom";
import {
  Home,
  Questions,
  Profile,
  Admin,
  SignIn,
  Dashboard,
} from "./components";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/bai" element={<Questions />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/admin/signin" element={<SignIn />} />
      <Route path="/admin/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
