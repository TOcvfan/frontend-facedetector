import React from 'react';
import Tilt from 'react-tilt';
import smurf from './smurf.png';
import './Logo.css';

const Logo = () => {
	return (
		<div className='ma4 mt0'>
			<Tilt className="Tilt br2 shadow-2" options={{ max : 75 }} style={{ height: 250, width: 250 }} >
	 			<div className="Tilt-inner pa3">
	 				<img alt='Logo' style={{paddingTop: '33px'}} src={smurf} />
	 			</div>
			</Tilt>
		</div>
	);
}

export default Logo;