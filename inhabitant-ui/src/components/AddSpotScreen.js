import React from 'react';
import PropTypes from "prop-types";
import GoCheck from 'react-icons/lib/go/check';
import './AddSpotScreen.css';
import FaCameraRetro from 'react-icons/lib/fa/camera-retro';

const AddSpotScreen = (props) => (
    <form onSubmit={props.handleSubmit}>
    {/*<div style={{position: 'relative', top:0, left:0, height:'100vh', width:'100vw', zIndex:5, opacity:1}}>*/}
        <input id="hidden-file-input" className="fileInput" type="file" accept="image/*" capture="camera" onChange={(e)=>props.handleImageChange(e)} style={{display:'none'}}/>
        <FaCameraRetro style={{fontSize: 144}} onClick={() => document.getElementById("hidden-file-input").click()}/>
        <br/>
        <br/>
        <input className="image-tagline" type="text" name="tag line" value={props.tagline} onChange={(e) => props.updateTagline(e.target.value)} placeholder="tag line..."/>
        <br/>
        <button className="submit-icon" type="submit" value="submit">
            <GoCheck style={{fontSize: 144}}/>
        </button>
    </form>
);

AddSpotScreen.propTypes = {
    handleImageChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    updateTagline: PropTypes.func.isRequired
};

export default AddSpotScreen;