import styles from './Layout.module.css'

const Layout = ({ children }) => {
    return (
        <>
            <header />
            <main className={styles.container}>{children}</main>
        </>
    )
}
export default Layout