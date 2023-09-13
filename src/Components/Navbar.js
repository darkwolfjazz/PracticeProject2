import styles from "./nav.module.css"


const Navbar=()=>{

return (
    <nav className={styles.navigation}>
        <div className="logo">
            <img src="frame2.png"></img>
        </div>
        <ul >
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)


}

export default Navbar