import React from "react";
import NavCartButton from "./NavCartButton";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-scroll";
import classes from "./TheNavbar.module.css";
import Logo from "../../assets/Icon/logo_transparent.jpg";
// import { CgProfile } from "@react-icons/all-files/fa/CgProfile";
import profileIcon from '../../assets/Icon/user.png'
import styled from 'styled-components';


const TheNavbar = (props) => {
  //Layout and structure of the navbar to be passed to THENAV component
  return (
    <>
      <Navbar
        expand="xl"
        className={`${classes.navbar} fixed-top`}
        data-aos="fade-down"
        data-aos-easing="ease-out"
        data-aos-duration="2000"
      >
        <Navbar.Brand className={classes.navbar_brand}>
          <Link to="hero" spy={true} smooth={true} offset={-50} duration={500}>
            <LogoIcon src={Logo} alt="Flowers in Chania"></LogoIcon>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className={classes.toggle}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={`${classes.nav__linkgroup} ms-auto`}>
            <Nav.Link
              className={`${classes.nav__link} ${classes.firstnav__link} me-4`}
            >
              <Link
                activeClass={classes.active}
                to="hero"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                Home
              </Link>
            </Nav.Link>
            <Nav.Link className={`${classes.nav__link} me-4`}>
              <Link
                activeClass={classes.active}
                to="why"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                Menu
              </Link>
            </Nav.Link>
            <Nav.Link className={`${classes.nav__link} me-4`}>
              <Link
                activeClass={classes.active}
                to="dishes"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                About
              </Link>
            </Nav.Link>
            <Nav.Link className={`${classes.nav__link} me-4`}>
              <Link
                activeClass={classes.active}
                to="about"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                Orders
              </Link>
            </Nav.Link>
            <Nav.Link className={`${classes.nav__link} me-4`}>
              <Link
                activeClass={classes.active}
                to="testimonials"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                Contact
              </Link>
            </Nav.Link>
            
            <Nav.Link href="#buttons" className={`${classes.nav__link}`}>
              <NavCartButton onClick={props.onShowCart} />
            </Nav.Link>
            <Spacing></Spacing>
            <Image src={profileIcon} alt="Flowers in Chania"></Image>
          </Nav>


        </Navbar.Collapse>
      </Navbar>
    </>
  );
  //ENDS
};

export default TheNavbar;

const Spacing = styled.div`
   width: 25px;
 `

const Image = styled.img`
   height: 45px;
   width: 45px;
 `

 const LogoIcon = styled.img`
   height: 60px;
   width: 60px;
 `
