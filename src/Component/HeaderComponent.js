const HeaderComponent = (props) =>{

    return(
        <header>
            <span className="header-logo">
                <img src="/images/sparwk.PNG"></img>
            </span>
            <nav className="header-nav">
                <ul>
                    <li><button>Log in/Sign up for free</button></li>
                    <li><a>About Services</a></li>
                    <li><a>Partners</a></li>
                    <li><a>Contact</a></li>
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