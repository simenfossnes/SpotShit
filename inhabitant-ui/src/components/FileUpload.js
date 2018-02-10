import React from 'react';
import PropTypes from 'prop-types';
import GoCheck from 'react-icons/lib/go/check';


class ImageUpload extends React.Component {
    constructor(props) {
        super(props);
        this.state = {file: '',imagePreviewUrl: ''};
    }



    _handleImageChange(e) {
        e.preventDefault();

        let reader = new FileReader();
        console.log("e.target.files", e.target.files);
        let file = e.target.files[0];
        console.log("e.target.files[0]", file);


        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
        }

        // IF NO IMAGE FILE IS ADDED, CLEAR THE IMAGE FIELD
        reader.readAsDataURL(file)
    }

    render() {
        let {imagePreviewUrl} = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
            $imagePreview = (<img src={imagePreviewUrl} />);
        } else {
            $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
        }

        return (
            <div className="previewComponent">
                <form onSubmit={(e)=>this._handleSubmit(e)}>
                    <input className="fileInput" type="file" accept="image/*" capture="camera" onChange={(e)=>this._handleImageChange(e)} />
                    <button className="submit-icon" type="submit" onClick={(e)=>this._handleSubmit(e)}>
                        <GoCheck/>
                    </button>
                </form>
                <div className="imgPreview">
                    {$imagePreview}
                </div>
            </div>
        )
    }
}

ImageUpload.propTypes = {
    uploadImage: PropTypes.func,
    file: PropTypes.string,
    imagePreviewUrl: PropTypes.string
};

export default ImageUpload;