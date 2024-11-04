import { Outlet } from "react-router-dom";
import MyNavBar from "../navbarSec/MyNavBar";

export default function MasterLayout() {
  return (
    <>
    <MyNavBar />
     <Outlet />
    </>
  )
}
