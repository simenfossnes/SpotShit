import React from 'react';

const TagImage = () => (
    <div style={{position: 'absolute', top:0, left:0, height:'100vh', width:'100vw', zIndex:5, opacity:0}}>
        <div className="image-tagline">lorem ipsum dolor sit amet hey ho</div>
        <button className="submit-icon" type="submit" onClick={(e)=>this._handleSubmit(e)}>
            <GoCheck/>
        </button>
    </div>
);

export default TagImage;