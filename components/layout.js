import styles from './Layout.module.css'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <main className={styles.main}>{children}</main>
            <sitemask className="hide" />
            <Footer />
        </>
    )
}
export default Layout