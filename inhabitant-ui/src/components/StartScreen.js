import React from 'react';
import PropTypes from 'prop-types';

const StartScreen = (props) => (
    <div style={{position: 'absolute', top:0, left:0, height:'100vh', width:'100vw', zIndex:5, opacity:0}}>
        <div>
            <div>
                ...
            </div>
            <div>
                <input className="fileInput" type="file" accept="image/*" capture="camera" onChange={(e)=>props.handleImageChange(e)} />
            </div>
        </div>
    </div>
);

StartScreen.propTypes = {
    handleImageChange: PropTypes.func.isRequired,

};

export default StartScreen;