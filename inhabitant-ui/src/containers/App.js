import React, {Component} from 'react';
import SpotList from './SpotList';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import './App.css';
import {uploadDocumentRequest, simpleAction} from '../actions/spotActions';
import {updateFileAndImagePreview, updateTagline} from '../actions/fileActions';
import FileUpload from '../components/FileUpload';
import AddSpotScreen from "../components/AddSpotScreen";



class App extends Component {

    // Lifecycle Methods
    constructor(props) {
        super(props);
        this._handleImageChange = this._handleImageChange.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
        this.state = {
            image: ''
        }
    }

    componentDidMount() {
        if (navigator && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(() => alert('success'), () => alert('error'));
        } else {
            console.log('Geolocation is not supported');
        }
    }

    // Custom Methods
    _handleImageChange(e) {
        e.preventDefault();

        alert('handleImageChange was indeed called!!!');

        let reader = new FileReader();
        console.log("e.target.files", e.target.files);
        let file = e.target.files[0];
        console.log("e.target.files[0]", file);

        reader.onloadend = () => {
            this.setState({image: file});
            this.props.updateFileAndImagePreview({
                file: '',
                imagePreviewUrl: reader.result
            });
        };

        // IF NO IMAGE FILE IS ADDED, CLEAR THE IMAGE FIELD
        reader.readAsDataURL(file)
    }

    _handleSubmit(e) {
        e.preventDefault();
        alert('handlesubmit was called.');
        this.props.uploadDocumentRequest(this.state.image);
        console.log('handle uploading-', this.state.image);
    }


    render() {
        return (
            <div className="App">
                <div className="text-container">
                    <AddSpotScreen
                        handleImageChange={this._handleImageChange}
                        handleSubmit={this._handleSubmit}
                        tagline={this.props.file.tagline}
                        updateTagline={this.props.updateTagline}
                    />
                    <div>
                        {/*<FileUpload uploadImage={this.props.uploadDocumentRequest}/>*/}
                        {/*<SpotList/>*/}
                    </div>
                </div>
                <div className="image-container">
                    {this.props.file.imagePreviewUrl ? <img className="background-image" sizes="100vw" src={this.props.file.imagePreviewUrl}/> : ""}
                    {/*<img className="background-image" sizes="100vw" src="https://s3-eu-west-2.amazonaws.com/lifeinnorway/wp-content/uploads/2014/06/26091245/strandpromenaden2.jpg"/>*/}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        spots: state.spots,
        file: state.file
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        uploadDocumentRequest,
        simpleAction,
        updateFileAndImagePreview,
        updateTagline
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
