import React from "react";
import ReactDOM from "react-dom";
import Map from "./Map";




import { compose, withStateHandlers } from "recompose";


import { InfoWindow, withGoogleMap, withScriptjs, GoogleMap, Marker } from 'react-google-maps';


const defaultCenter = { lat: 24.4539, lng: 54.3773 };




const App = () => {
    
    return (
        <div>

            <h4>
                Customer Location
      </h4>
            <div className="Original">
                <img src={"http://maps.google.com/mapfiles/ms/icons/yellow-dot.png"} width="50" height="50" />

                <label>

                    <b>Original</b>
                </label>
            </div>

            <div className="Standing at">
                <img src={"http://maps.google.com/mapfiles/ms/icons/green-dot.png"} width="50" height="50" />

                <label>

                    <b>Standing At</b>
                </label>
            </div>

            <div className="Corrected">
                <img src={"http://maps.google.com/mapfiles/ms/icons/red-dot.png"} width="50" height="50" />

                <label>

                    <b>Corrected</b>
                </label>
            </div>

            <Map
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCJn2Pqx6Pe_faA0DLLWUkHo1iXEOBXBvs"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `300px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
                center={{ lat: 24.4539, lng: 54.3773 }}
                zoom={13}
                prelocation={[{

                    id: 1,
                    lat: 24.465931632571458,
                    lng: 54.38462421700376
                },
                {
                    id: 0,
                    lat: 24.45999408740553,
                    lng: 54.37346622750181

                    }
                    //{
                      //  id: 2,
                        //lat: 24.46999418740553,
                        //lng: 54.37846622750181

                //    }
                ]}
        />
        </div>
    );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
