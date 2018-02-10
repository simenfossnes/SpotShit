import React, {Component} from 'react';
import SpotList from './SpotList';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import './App.css';
import {uploadDocumentRequest, simpleAction} from '../actions/spotActions';
import {updateFileAndImagePreview} from '../actions/fileActions';
import FileUpload from '../components/FileUpload';
import StartScreen from "../components/StartScreen";



class App extends Component {

    // Lifecycle Methods
    constructor(props) {
        super(props);
        this._handleImageChange = this._handleImageChange.bind(this);
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
            this.props.updateFileAndImagePreview({
                file: file,
                imagePreviewUrl: reader.result
            });
        };

        // IF NO IMAGE FILE IS ADDED, CLEAR THE IMAGE FIELD
        reader.readAsDataURL(file)
    }

    render() {
        return (
            <div className="App">





                <div className="text-container">
                    <StartScreen handleImageChange={this._handleImageChange}/>
                    <div>
                        <FileUpload uploadImage={this.props.uploadDocumentRequest}/>
                        <SpotList/>
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
        updateFileAndImagePreview
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
