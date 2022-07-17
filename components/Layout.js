import styles from "./Layout.module.css";
import Header from "./Header";
import Footer from "./Footer";
import { useEffect } from "react";

import { setIsNavClicked } from "../reducers/isNavClicked";
import { useDispatch } from "react-redux";

const Layout = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    document.querySelector("sitemask").addEventListener("click", (e) => {
      dispatch(setIsNavClicked(false));
      document.querySelector("sitemask").classList.toggle("hide");
    });
  }, []);

  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
      <sitemask className="hide" />
      <Footer />
    </>
  );
};
export default Layout;
