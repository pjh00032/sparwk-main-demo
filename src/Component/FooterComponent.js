import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faInstagram, faYoutube, faTwitterSquare } from "@fortawesome/free-brands-svg-icons";

const FooterComponent = (props) =>{

    return(
        <footer>
            <div>
                <h3>Terms of service privacy policy</h3>
                <div>sparwk.com © 2021 all rights reserved.</div>
            </div>
            
            <nav className="footer-nav">
                <ul>
                    <li><a href="https://ko-kr.facebook.com/"><FontAwesomeIcon icon={faFacebookSquare} size="2x"/></a></li>
                    <li><a href="https://www.instagram.com/"><FontAwesomeIcon icon={faInstagram} size="2x"/></a></li>
                    <li><a href="https://www.youtube.com/"><FontAwesomeIcon icon={faYoutube} size="2x"/></a></li>
                    <li><a href="https://twitter.com/?lang=ko"><FontAwesomeIcon icon={faTwitterSquare} size="2x"/></a></li>
                </ul>
            </nav>
        </footer>
    );

}
export default FooterComponent;