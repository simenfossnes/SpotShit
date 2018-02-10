import React, {Component} from 'react';
import SpotList from '../containers/SpotList';
import './App.css';
import {uploadDocumentRequest} from '../actions/spotActions';
import FileUpload from './FileUpload';

class App extends Component {

    constructor(props){
        super(props);
        this.handleFileUpload = this.handleFileUpload.bind(this);
    }

    handleFileUpload({file}) {
        console.log('HEYYYYYYYY.....');
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
                    <h1 className="App-title">SpotShit</h1>
                </header>
                <div>
                    <input type="file" accept="image/*" capture="camera" onChange={this.handleFileUpload}/>

                </div>
                <div>
                    <p className="App-intro">
                        ...
                    </p>
                    <FileUpload/>
                    <SpotList/>
                </div>
            </div>
        );
    }
}

export default App;
