import React, {Component} from 'react';
import SpotList from '../containers/SpotList';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import './App.css';
import {uploadDocumentRequest, simpleAction} from '../actions/spotActions';
import FileUpload from './FileUpload';


class App extends Component {

    constructor(props){
        super(props);
        this.handleFileUpload = this.handleFileUpload.bind(this);
    }

    handleFileUpload({file}) {
        console.log('HEY...');
        // const file = files[0];
        console.log(file);
        //console.log(files[0]);
        uploadDocumentRequest({
            file,
            name: 'Awesome Cat Pic'
        })
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">ByVarsling</h1>
                    <button onClick={this.props.simpleAction}>dispatch action (test)</button>
                </header>
                <div>
                    <input type="file" accept="image/*" capture="camera" onChange={this.props.uploadDocumentRequest}/>
                </div>
                <div>
                    <p className="App-intro">
                        ...
                    </p>
                    <FileUpload uploadImage={this.props.uploadDocumentRequest}/>
                    <SpotList/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        spots: state.spots
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        uploadDocumentRequest,
        simpleAction
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
