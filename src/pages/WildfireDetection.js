import React from 'react';
import DetectionDetail from '../components/DetectionDetail.js';
import '../components/WildfireDetection.css';
import DetectionList from '../components/DetectionList.js';
import '../resources/example-fire-detection.png';

class WildfireDetection extends React.Component {
  state = {  
    selectedFireImg: null,
    bounding_boxes: [],
    detection_scores: [],
    detection_classes: [],
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
    const response = this.detectFire3(); //this.detectFire1(imgData);
    const resultRes = this.detectScore();
    
    if(response) {
      // set SelectedFire to this response
      // parse the text
      console.log("RESPONSE HERE",response);
    }

  }
  
  // Makes a call to prediction api results
  async detectScore() {
    //const response = detection.post('/result')
    fetch('https://wpp-fire-detection-ml.herokuapp.com/result', {
      method: 'POST'
    })
    .then((response) => {
      const reader = response.body.getReader();
      return new ReadableStream({
        start(controller) {
          // The following function handles each data chunk
          function push() {
            // "done" is a Boolean and value a "Uint8Array"
            reader.read().then(({ done, value }) => {
              // Is there no more data to read?
              if (done) {
                // Tell the browser that we have finished sending data
                controller.close();
                return;
              }
              // Get the data and send it to the browser via the controller
              controller.enqueue(value);
              push();
            });
          };
          
          push();
        }
      })
      //return new Response(stream, { headers: { "Content-Type": "application/json" } });
    })
    .then(stream => new Response(stream))
    .then(response => {
      //console.log(response.json());
      response.json().then(data => ({
        data: data,
        status: response.status
      }))
      .then(res => {
        console.log('Boxes', res.data.predictions[0].detection_boxes);
        console.log('Classes', res.data.predictions[0].detection_classes);
        console.log('Scores', res.data.predictions[0].detection_scores);
      })
    })
    .catch(error => console.log("ERROR:", error));

    
  }

  // Comsumes the ReadableStream from the Fetch call
  async detectFire3() {
    const formData = new FormData();
    formData.append('file', this.state.selectedFile);

    fetch('https://wpp-fire-detection-ml.herokuapp.com/predict', {
      method: 'POST',
      body: formData,
      
    })
    .then(res => {
      console.log('response', res);
      const reader = res.body.getReader();
      if(!res.ok) {
        throw Error("Error getting the predict image")
      }
      return new ReadableStream({
        start(controller) {
          return pump();
          function pump() {
            return reader.read().then(({ done, value }) => {
              // When no more data needs to be consumed, close the stream
              if (done) {
                  controller.close();
                  return;
              }
              // Enqueue the next data chunk into our target stream
              controller.enqueue(value);
              return pump();
            });
          }
        }  
      })
    })
    .then(stream => new Response(stream))
    .then(response => response.blob())
    .then(blob => URL.createObjectURL(blob))
    .then(url => {
      console.log("URL", url);
      // set the state of Fire Image URL to the made url
      this.setState({ fireImgUrl: url});
    })
    .catch(err => console.error(err));
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
                    <h1>Wildfire Detection</h1>
                    <label className="ui primary floated button" htmlFor="embedSatImage">
                      <i className="ui upload icon"></i>
                      Satellite Image Upload
                    </label>
                    <input className="inputfile" type="file" id="embedSatImage" onChange={this.onFileChange} />
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
              <img src={this.state.fireImgUrl} alt="fire prediction"/>
            </div>
            <div className="five wide column">
              <DetectionDetail onFireSelect={this.onFireSelect} bouding_boxes={this.state.bounding_boxes}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
};

export default WildfireDetection;
