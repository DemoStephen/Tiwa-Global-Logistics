import { Outlet } from "react-router";
import Navigation from "./UI/Navigation";

export default function Layout() {
  return (
    <>
      <Navigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}
