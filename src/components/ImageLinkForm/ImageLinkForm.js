import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
	return (
		<div className='ma4 mt0'>
			<p className='f3'>
				{'This smurf will detect faces on your pictures. give it a try'}
			</p>
			<div className='center'>
				<div className='center form pa4 br3 shadow-5'>
					<input className='f4 pa2 w-70 center' type='text' onChange={onInputChange}/>
					<button 
					className='f4 w-30 grow link ph3 dib white bg-light-purple'
					onClick={onButtonSubmit}
					>Detect</button>
				</div>
			</div>
		</div>
	);
}

export default ImageLinkForm;