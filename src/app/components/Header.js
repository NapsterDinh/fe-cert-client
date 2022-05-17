// import { Navbar, InputGroup, Nav, Image, Button, FormControl } from "react-bootstrap";
import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Form, Dropdown, ListGroup,
  Navbar, InputGroup, Nav, Image, Button
} from '@themesberg/react-bootstrap';

import NOTIFICATIONS_DATA from "app/data/notifications";
import { updateUser } from 'app/store/userReducer';
import configuration from 'app/configuration';

import { faBell, faCog, faEnvelopeOpen, faSearch, faSignOutAlt, faUserShield } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";
import Profile3 from "app/assets/img/team/profile-picture-3.jpg";
import logo from 'app/assets/icon/Logo.png'
import Notification from './Notification';

import { logout } from 'app/core/apis/user';

const Header = () => {
  const user = useSelector(state => state.user?.user)
  const dispatch = useDispatch()
  const [notifications, setNotifications] = useState(NOTIFICATIONS_DATA);
  const areNotificationsRead = notifications.reduce((acc, notif) => acc && notif.read, true);

  const markNotificationsAsRead = () => {
    setTimeout(() => {
      setNotifications(notifications.map(n => ({ ...n, read: true })));
    }, 300);
  };

  const onHandleLogout = async () => {
    try {
      console.log(configuration.getAPIRequestToken());
      const result = await logout(configuration.getAPIRequestToken().refresh)
      if (result.status === 200) {
        console.log(result);
        dispatch(updateUser({ user: '' }))
        configuration.removeApiRequestToken()
        window.location = '/'
      }
    } catch (error) {
      console.log(error);
    }

  }

  return (
    <Navbar sticky="top" collapseOnSelect expand="lg">
      <div className="container-header">
        <Navbar.Brand href="/">
          <Image src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink exact to={'/'} className='nav-link' activeClassName="active">Home</NavLink>
            <NavLink to={'/studyRoad'} className='nav-link' activeClassName="active">Study Road</NavLink>
            <NavLink to={'/exams'}
              isActive={(match) => {
                return (match?.url?.includes('/exams'))
              }}
              className='nav-link' activeClassName="active">Exam</NavLink>
            <NavLink to={'/blog'} className='nav-link' activeClassName="active">Blog</NavLink>
            <NavLink to={'/discussion'} className='nav-link' activeClassName="active">Discussion</NavLink>
            <NavLink to={'/practice'} className='nav-link' activeClassName="active">Practice</NavLink>
          </Nav>
          <Nav>
            <div className="d-flex justify-content-between w-100">
              {/* <div className="d-flex align-items-center mr-2">
                    <Form className="navbar-search">
                      <Form.Group id="topbarSearch">
                        <InputGroup className="input-group-merge search-bar">
                          <InputGroup.Text><FontAwesomeIcon icon={faSearch} /></InputGroup.Text>
                          <Form.Control type="text" placeholder="Search" />
                        </InputGroup>
                      </Form.Group>
                    </Form>
                  </div> */}
              {
                user === '' ?
                  <>
                    <Button
                      className="mx-3"
                      onClick={() => window.location = '/login'}
                      variant="primary">Sign In</Button>
                    <Button
                      className="mx-3"
                      onClick={() => window.location = '/register'}
                      variant="secondary">Sign up</Button>
                  </>


                  :
                  <Nav className="align-items-center">
                    <Dropdown as={Nav.Item} onToggle={markNotificationsAsRead} >
                      <Dropdown.Toggle as={Nav.Link} className="text-dark icon-notifications me-lg-3">
                        <span className="icon icon-sm">
                          <FontAwesomeIcon icon={faBell} className="bell-shake" />
                          {areNotificationsRead ? null : <span className="icon-badge rounded-circle unread-notifications" />}
                        </span>
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="dashboard-dropdown notifications-dropdown dropdown-menu-lg dropdown-menu-center mt-2 py-0">
                        <ListGroup className="list-group-flush">
                          <Nav.Link href="#" className="text-center text-primary fw-bold border-bottom border-light py-3">
                            Notifications
                          </Nav.Link>

                          {notifications.map(n => <Notification key={`notification-${n.id}`} {...n} />)}

                          <Dropdown.Item className="text-center text-primary fw-bold py-3">
                            View all
                          </Dropdown.Item>
                        </ListGroup>
                      </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown as={Nav.Item}>
                      <Dropdown.Toggle as={Nav.Link} className="pt-1 px-0">
                        <div className="media d-flex align-items-center">
                          <Image src={user?.avatar === undefined ? Profile3 : user?.avatar} className="user-avatar md-avatar rounded-circle" />
                          <div className="media-body ms-2 text-dark align-items-center d-none d-lg-block">
                            <span className="mb-0 font-small fw-bold">{user?.name}</span>
                          </div>
                        </div>
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="user-dropdown dropdown-menu-right mt-2">
                        <Dropdown.Item className="fw-bold">
                          <FontAwesomeIcon icon={faUserCircle} className="me-2" /> My Profile
                        </Dropdown.Item>
                        <Dropdown.Item className="fw-bold">
                          <FontAwesomeIcon icon={faCog} className="me-2" /> Settings
                        </Dropdown.Item>
                        <Dropdown.Item className="fw-bold">
                          <FontAwesomeIcon icon={faEnvelopeOpen} className="me-2" /> Messages
                        </Dropdown.Item>
                        <Dropdown.Item className="fw-bold">
                          <FontAwesomeIcon icon={faUserShield} className="me-2" /> Support
                        </Dropdown.Item>

                        <Dropdown.Divider />

                        <Dropdown.Item className="fw-bold" onClick={onHandleLogout}>
                          <FontAwesomeIcon icon={faSignOutAlt} className="text-danger me-2" /> Logout
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Nav>
              }
            </div>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default Header;



