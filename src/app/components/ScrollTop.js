import { faCircleUp } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const ScrollTop = () => {
    return ( 
        <a href="#root" className='scroll-top'>
            <FontAwesomeIcon icon={faCircleUp}/>
        </a>
    );
}
 
export default ScrollTop;