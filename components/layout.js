import styles from './Layout.module.css'
import Header from './Header'

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <main className={styles.main}>{children}</main>
        </>
    )
}
export default Layout