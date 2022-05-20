import styles from '../globallayout.module.css'


export default function Footer ({ children}:React.PropsWithChildren<{}>) {
    return (
        <footer className={styles.footer}>
        © 2022 Sabrina Medwinter
        </footer>
    )
}