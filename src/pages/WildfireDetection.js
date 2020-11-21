import React from 'react';
import MapView from '../components/Map.js';
import DetectionDetail from '../components/DetectionDetail.js';
import '../components/WildfireDetection.css';
import DetectionList from '../components/DetectionList.js';

class WildfireDetection extends React.Component {
  state = { 
    fires: [], 
    selectedFire: null,
    selectedFile: null
  };

  onFileChange = (event) => {
    // Update the state
    this.setState({ selectedFile: event.target.files[0]})
  }

  // on file upload (click the upload button)
  onFileUpload = () => {
    const imgData = new FormData();

    imgData.append(
      "myImg",
      this.state.selectedFile,
      this.state.selectedFile.name
    );

    console.log(this.state.selectedFile);

    // Request made to the backend api
    // Send formData object
  }

  // Fire Functions
  onFireSelect = (fire) => {
    this.setState({ selectedFire: fire });
  }

  render() {
    return (
      <div classname="ui container">
        <div className="ui grid">
          <div className="ui row">
            <div className="four wide column"></div>
            <div className="eight wide column">
              
                <div className="ui grid container">
                  <div className="ui fluid segment">
                    <label className="ui primary floated button" for="embedSatImage">
                      <i className="ui upload icon"></i>
                      Satellite Image Upload
                    </label>
                    <input class="inputfile" type="file" id="embedSatImage" onChange={this.onFileChange} />
                    <button className="ui primary button" onClick={this.onFileUpload} >
                      Run Detection
                    </button>
                  </div>
                </div>
                
                
              
            </div>
            <div className="four wide column"></div>
          </div>
          <div className="ui row">
            <div className="four wide column"></div>
            <div className="seven wide column ui card">
              <MapView />
            </div>
            <div className="five wide column">
              <DetectionDetail onFireSelect={this.onFireSelect} fires={this.state.fires}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
};

export default WildfireDetection;
