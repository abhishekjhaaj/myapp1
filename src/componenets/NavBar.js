import React, { useState } from 'react';
import logo from './mysite/logo.png';
import {Link, NavLink as ReactLink} from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  
} from 'reactstrap';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

 // const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
    <Navbar color='dark' dark expand='md' fixed='top' >
      {/* <NavbarBrand tag={ReactLink} to='/' className='me-auto'>Exceptional Panacea Solutions</NavbarBrand> */}
    <Link to='/'>  <NavbarBrand  tag={ReactLink}  to='/' className='me-auto'> <img
        alt="logo"
        src={logo}
        // style={{
        //   height:60,
        //   width: 60
        // }}
       />
       {/* Exceptional Panacea Solutions */}
      </NavbarBrand></Link>
     
      <NavbarToggler onClick={()=>setIsOpen(!isOpen)}  />
      <Collapse isOpen={isOpen} navbar >
        <Nav className="me-auto " navbar >
          <NavItem>
            <NavLink tag={ReactLink}  to='/'>Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={ReactLink} to='/about'>
              About Us
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={ReactLink} to='/contact'>
              Contact Us
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={ReactLink} to='/services'>
              Services
            </NavLink>
          </NavItem>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Demo
            </DropdownToggle>
            {/* we use below end instead of right */}
            <DropdownMenu end>
              <DropdownItem tag={ReactLink} to='/'>React</DropdownItem>
              <DropdownItem  href='http://localhost:4200/'>Angular</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Reset</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
        {/* <NavbarText>Simple Text</NavbarText> */}
      </Collapse>
    </Navbar>
  </div>
  );
}

export default NavBar;