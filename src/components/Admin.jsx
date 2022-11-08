import { SignIn } from ".";
import useFirebaseAuthentication from "../hooks/useFirebaseAuthentication";
import Dashboard from "./Dashboard";

export default function Admin() {
  const user = useFirebaseAuthentication();
  return <>{user ? <Dashboard /> : <SignIn />}</>;
}
