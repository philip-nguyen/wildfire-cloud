// MyGoogleMaps.js
import React, { Component, useState, useEffect } from 'react';

import GoogleMapReact from 'google-map-react';

import styled from 'styled-components';

import AutoComplete from './Autocomplete';
import Marker from './Marker';
import fireData from '../Data/fire_history_ca.json'

const Wrapper = styled.main`
  width: 102%;
  height: 270%;
`;


class MyGoogleMap extends Component {



    state = {
        mapApiLoaded: false,
        mapInstance: null,
        disableDefaultUI: false,
        mapApi: null,
        geoCoder: null,
        places: [],
        center: [],
        zoom: 7,
        address: '',
        draggable: true,
        lat: null,
        lng: null,
        fire: require('../Data/fire_history_ca.json')
    };

    componentWillMount() {
        this.setCurrentLocation();
    }


    onMarkerInteraction = (childKey, childProps, mouse) => {
        this.setState({
            draggable: false,
            lat: mouse.lat,
            lng: mouse.lng
        });
    }
    onMarkerInteractionMouseUp = (childKey, childProps, mouse) => {
        this.setState({ draggable: true });
        this._generateAddress();
    }


    _onChange = ({ center, zoom }) => {
        this.setState({
            center: center,
            zoom: zoom,
        });

    }

    _onClick = (value) => {
        this.setState({
            lat: value.lat,
            lng: value.lng
        });
    }

    apiHasLoaded = (map, maps) => {
        this.setState({
            mapApiLoaded: true,
            mapInstance: map,
            mapApi: maps,
        });

        this._generateAddress();
    };

    addPlace = (place) => {
        this.setState({
            places: [place],
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng()
        });
        this._generateAddress()
    };

    _generateAddress() {
        const {
            mapApi
        } = this.state;

        const geocoder = new mapApi.Geocoder;

        geocoder.geocode({ 'location': { lat: this.state.lat, lng: this.state.lng } }, (results, status) => {
            console.log(results);
            console.log(status);
            if (status === 'OK') {
                if (results[0]) {
                    this.zoom = 12;
                    this.setState({ address: results[0].formatted_address });
                } else {
                    window.alert('No results found');
                }
            } else {
                window.alert('Geocoder failed due to: ' + status);
            }

        });
    }

    // Get Current Location Coordinates
    setCurrentLocation() {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.setState({
                    center: [position.coords.latitude, position.coords.longitude],
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                });
            });
        }
    }



    render() {


        const {
            places, mapApiLoaded, mapInstance, mapApi,
        } = this.state;


        return (
            <Wrapper>
                {mapApiLoaded && (
                    <div>
                        <AutoComplete map={mapInstance} mapApi={mapApi} addplace={this.addPlace} />
                    </div>
                )}
                <GoogleMapReact
                    center={this.state.center}
                    zoom={this.state.zoom}
                    disableDefaultUI={this.state.disableDefaultUI}
                    draggable={this.state.draggable}
                    onChange={this._onChange}
                    onChildMouseDown={this.onMarkerInteraction}
                    onChildMouseUp={this.onMarkerInteractionMouseUp}
                    onChildMouseMove={this.onMarkerInteraction}
                    onChildClick={() => console.log('child click')}
                    onClick={this._onClick}
                    bootstrapURLKeys={{
                        key: 'AIzaSyDwC72ZOUu3HZreJ4yafJM2ZWIBpHATYVc',
                        libraries: ['places', 'geometry'],
                    }}
                    yesIWantToUseGoogleMapApiInternals
                    onGoogleApiLoaded={({ map, maps }) => this.apiHasLoaded(map, maps)}
                >


                    <Marker
                        text={this.state.address}
                        lat={34.86}
                        lng={-119.16}
                    />

                    <Marker
                        text={this.state.address}
                        lat={36.26472222}
                        lng={-118.77055556}
                    />

                    <Marker
                        text={this.state.address}
                        lat={41.295}
                        lng={-123.56}
                    />

                    <Marker
                        text={this.state.address}
                        lat={38.88861111}
                        lng={-120.02638889}
                    />

                    <Marker
                        text={this.state.address}
                        lat={38.95066667}
                        lng={-119.94280556}
                    />

                    <Marker
                        text={this.state.address}
                        lat={34.62138889}
                        lng={-118.71722222}
                    />

                    <Marker
                        text={this.state.address}
                        lat={32.86025}
                        lng={-116.69955556}
                    />

                    <Marker
                        text={this.state.address}
                        lat={32.861}
                        lng={-116.41711111}
                    />

                    <Marker
                        text={this.state.address}
                        lat={41.4791667}
                        lng={-123.6611111}
                    />

                    <Marker
                        text={this.state.address}
                        lat={41.1055}
                        lng={-122.9677972}
                    />

                    <Marker
                        text={this.state.address}
                        lat={40.7272222}
                        lng={-123.5019444}
                    />

                    <Marker
                        text={this.state.address}
                        lat={40.3058333}
                        lng={-123.4272222}
                    />

                    <Marker
                        text={this.state.address}
                        lat={34.51555556}
                        lng={-119.80055556}
                    />

                    <Marker
                        text={this.state.address}
                        lat={39.8429833}
                        lng={-120.8998}
                    />

                    <Marker
                        text={this.state.address}
                        lat={34.27686667}
                        lng={-118.3046}
                    />

                    <Marker
                        text={this.state.address}
                        lat={41.096267}
                        lng={-121.9071}
                    />

                    <Marker
                        text={this.state.address}
                        lat={37.33305556}
                        lng={-119.10555556}
                    />

                    <Marker
                        text={this.state.address}
                        lat={39.39166667}
                        lng={-120.10722222}
                    />

                    <Marker
                        text={this.state.address}
                        lat={39.5191667}
                        lng={-121.3386111}
                    />

                    <Marker
                        text={this.state.address}
                        lat={36.2294}
                        lng={-118.1060028}
                    />

                    <Marker
                        text={this.state.address}
                        lat={39.43138889}
                        lng={-120.61788889}
                    />

                    <Marker
                        text={this.state.address}
                        lat={34.25061111}
                        lng={-117.4599}
                    />

                    <Marker
                        text={this.state.address}
                        lat={34.33983889}
                        lng={-117.46589722}
                    />


                </GoogleMapReact>

                <div className="info-wrapper">
                    <div className="map-details">Latitude: <span>{this.state.lat}</span>, Longitude: <span>{this.state.lng}</span></div>
                    <div className="map-details">Zoom: <span>{this.state.zoom}</span></div>
                    <div className="map-details">Address: <span>{this.state.address}</span></div>
                </div>


            </Wrapper >
        );
    }
}

export default MyGoogleMap;
