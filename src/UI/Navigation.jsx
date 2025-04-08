import NavAddress from "../Components/NavAddress";
import logo from "/logo.png";
export default function Navigation() {
  return (
    <>
      <NavAddress />
      <img src={logo} alt="logo" />
      <p className="text-2xl">Work in progress. Come Back</p>
    </>
  );
}
