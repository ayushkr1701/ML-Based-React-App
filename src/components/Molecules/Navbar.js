import React from 'react';

import {
Nav,
Bars,
NavMenu,
NavBtnLink,
} from '../Atoms/Navelements';

const Navbar = () => {
return (
	<>
	<Nav>

		<NavMenu>
        <NavBtnLink to='/'>Home</NavBtnLink>
        <NavBtnLink to='/bc'>Breast Cancer Predictor</NavBtnLink>
        <NavBtnLink to='/hd'>Heart Disease Predictor</NavBtnLink>
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;
