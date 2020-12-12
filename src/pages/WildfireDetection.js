import React from 'react';
import DetectionDetail from '../components/DetectionDetail.js';
import '../components/WildfireDetection.css';
import '../resources/example-fire-detection.png';
import DetectionList from '../components/DetectionList.js';
import DetectionImage from '../components/DetectionImage.js';
import '../components/Pages.css'

class WildfireDetection extends React.Component {
  state = {
    selectedFireImg: null,
    bounding_boxes: [],
    detection_scores: [],
    detection_classes: [],
    selectedFile: null,
    loading: false
  };

  onFileChange = (event) => {
    // Update the state
    this.setState({ selectedFile: event.target.files[0]})
  }

  // on file upload (click the upload button)
  onFileUpload = () => {
    // Request made to the backend api
    // Call to fire detection API
    this.detectFire();
    // wait 10 seconds to allow detectFire to process
    setTimeout(() => { this.detectScore(); }, 8000);

  }

  // Makes a call to prediction api results
  // which include detection boxes, scores, and classifications
  async detectScore() {
    // Fetch request to wpp module
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

    })
    .then(stream => new Response(stream))
    .then(response => {
      response.json().then(data => ({
        data: data,
        status: response.status
      }))
      .then(res => {
        const detectionBoxes = res.data.predictions[0].detection_boxes;
        const detectionScores = res.data.predictions[0].detection_scores;
        const detectionClasses = res.data.predictions[0].detection_classes;

        this.setDetectionInfo(detectionBoxes, detectionScores, detectionClasses);
      })
    })
    .catch(error => console.log("ERROR:", error));

  }

  // Set the state for the detection info
  setDetectionInfo = (boxes, scores, classes) => {
    let i = 0,
     realScores = [],
     boundingBoxes = [],
     realClasses = [];
    while(scores[i] > 0.90) {
      realScores.push(scores[i]);
      i++;
    }
    for(let j = 0; j < i; j++) {
      boundingBoxes.push(boxes[j]);
      realClasses.push(classes[j]);
    }

    this.setState({
      bounding_boxes: boundingBoxes,
      detection_scores: realScores,
      detection_classes: realClasses
    })

  }

  // Comsumes the ReadableStream from the Fetch call
  async detectFire() {
    const formData = new FormData();
    formData.append('file', this.state.selectedFile);

    fetch('https://wpp-fire-detection-ml.herokuapp.com/predict', {
      method: 'POST',
      body: formData,

    })
    .then(res => {
      // Start loading
      this.setState({ loading: true });

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

      // set the state of Fire Image URL to the made url
      this.setState({
        fireImgUrl: url,
        loading: false
      });
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
            <div className="seven wide column ui fluid image">
              <DetectionImage url={this.state.fireImgUrl} loading={this.state.loading} />

            </div>
            <div className="five wide column">
              <h2>Detection List</h2>
              <DetectionList
                boxes={this.state.bounding_boxes}
                scores={this.state.detection_scores}
                classes={this.state.detection_classes}
              />

            </div>
          </div>
        </div>
      </div>

    );
  }

};

export default WildfireDetection;
