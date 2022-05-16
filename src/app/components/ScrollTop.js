import { Button } from "@themesberg/react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUp } from '@fortawesome/free-regular-svg-icons'
const ScrollTop = () => {
    return ( 
        <a href="#root" className='scroll-top'>
            <FontAwesomeIcon icon={faCircleUp}/>
        </a>
    );
}
 
export default ScrollTop;