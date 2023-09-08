import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ThemeProvider } from "styled-components";

import styles from "./Layout.module.css";
import Header from "./Header";
import Footer from "./Footer";
import { setIsNavClicked } from "../reducers/isNavClicked";
import { theme } from "./ui/theme";

const Layout = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    document.querySelector("sitemask").addEventListener("click", (e) => {
      dispatch(setIsNavClicked(false));
      document.querySelector("sitemask").classList.toggle("hide");
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <main className={styles.main}>{children}</main>
      <sitemask className="hide" />
      <Footer />
    </ThemeProvider>
  );
};
export default Layout;
