import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
export default function Admin() {
  return (
    <>
      {/* <Header /> */}
      <main
        style={{ "marginTop": "calc(var(--header-bar-height) + var(--menu-bar-height))" }}
      >
        <Outlet />
      </main>
      <Footer />
    </>
  );
}