const HeaderComponent = (props) =>{

    return(
        <header>
            <span className="header-logo">
                <img src={process.env.PUBLIC_URL+'/images/sparwk.PNG'} alt="profile"></img>
            </span>
            <nav className="header-nav">
                <ul>
                    <li><button>Log in/Sign up for free</button></li>
                    <li><a href="/">About Services</a></li>
                    <li><a href="/">Partners</a></li>
                    <li><a href="/">Contact</a></li>
                    <li>
                        <label className="switch-button">
                            <input type="checkbox"/> 
                            <span className="onoff-switch"></span>
                        </label>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
export default HeaderComponent;