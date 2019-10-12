import * as React from 'react';
import { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';

const Navbah: React.FC<NavbahProps> = props => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const toggle = () => setIsOpen(!isOpen);
	return (
		<Navbar color="primary" dark expand="md" fixed="top" className="shadow">
			<NavbarBrand href="/">Pick'em League</NavbarBrand>
			<NavbarToggler onClick={toggle} />
			<Collapse isOpen={isOpen} navbar>
				<Nav className="ml-auto" navbar>
					<NavItem>
						<NavLink tag={RRNavLink} exact to="/" activeClassName="active font-weight-bold">
							Home
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink tag={RRNavLink} exact to="/picks" activeClassName="active font-weight-bold">
							Make Pick
						</NavLink>
					</NavItem>
				</Nav>
			</Collapse>
		</Navbar>
	);
};

interface NavbahProps {}

export default Navbah;
