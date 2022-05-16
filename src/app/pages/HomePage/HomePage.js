import { Col, Row, Form, Card, Button, FormCheck, Container, InputGroup } from '@themesberg/react-bootstrap';

import MainHomePage from './MainHomePage';
import WhatsNewPage from './WhatsNewPage';
import ExamSchedule from './ExamSchedule';
const HomePage = () => {
    return ( 
    <>
        <WhatsNewPage />
        <ExamSchedule />
    </> 
    );
}
 
export default HomePage;