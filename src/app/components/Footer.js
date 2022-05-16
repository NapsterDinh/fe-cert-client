import { Container, Col } from "@themesberg/react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return ( 
    <footer>
        <Container className="d-flex footer-container">
            <Col lg={4}>
                <h4>CONTACT INFORMATION</h4>
                <div className="footer-block">
                    <span>Hotline KHTT</span>
                    <span>0248.890.675</span>
                </div>
                <div className="footer-block">
                    <span>Email</span>
                    <span>tantudinh1@gmail.com</span>
                </div>
                <div className="footer-block">
                    <span>Address</span>
                    <span>19 Tu Xuong, Hiep Phu, TP.Thu Duc</span>
                </div>
            </Col>
            <Col lg={2}>
                <h4>ABOUT US</h4>
                <span>Introduce</span>
                <span>Job opportunity</span>
                <span>Partner</span>
            </Col>
            <Col lg={2}>
                <h4>SUPPORT</h4>
                <span>Contact</span>
                <span>Security</span>
                <span>Rules</span>
            </Col>
            <Col lg={2}>
                <h4>FOLLOW US</h4>
                <div className="icon-container">
                    <a href="https://fb.com/kingj812">
                        <FontAwesomeIcon icon={faFacebook}/>
                    </a>
                    <a href="https://github.com/NapsterDinh">
                        <FontAwesomeIcon icon={faGithub}/>
                    </a>
                    <a href="https://www.instagram.com/jking_812/">
                        <FontAwesomeIcon icon={faInstagram}/>
                    </a>
                </div>
            </Col>
        </Container>
    </footer> 
    );
}
 
export default Footer;