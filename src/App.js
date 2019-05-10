import React, { Component } from 'react';
import MapGL, { Marker } from 'react-map-gl';

import 'mapbox-gl/dist/mapbox-gl.css';

import User from './components/user';

export default class Map extends Component {
  state = {
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
      latitude: -23.5439948,
      longitude: -46.6065452,
      zoom: 14,
      openModal: false,
    },
  };

  componentDidMount() {
    window.addEventListener('resize', this.resize);
    this.resize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  resize = () => {
    const { viewport } = this.state;

    this.setState({
      viewport: {
        ...viewport,
        width: window.innerWidth,
        height: window.innerHeight,
      },
    });
  };

  handleMapClick = (e) => {
    e.preventDefault();

    const { openModal } = this.state;

    this.setState({ openModal: !openModal });
    // const [longitude, latitude] = e.lngLat;
    // alert(`Latitude: ${latitude} \nLongitude: ${longitude}`);
    // return ;
  };

  render() {
    const { openModal } = this.state;

    return (
      <div>
        {openModal && <User onClick={this.handleMapClick} />}
        <MapGL
          {...this.state.viewport}
          onClick={this.handleMapClick}
          mapStyle="mapbox://styles/mapbox/basic-v9"
          mapboxApiAccessToken="pk.eyJ1IjoiZGllZ28zZyIsImEiOiJjamh0aHc4em0wZHdvM2tyc3hqbzNvanhrIn0.3HWnXHy_RCi35opzKo8sHQ"
          onViewportChange={viewport => this.setState({ viewport })}
        >
          <Marker
            latitude={-23.5439948}
            longitude={-46.6065452}
            onClick={this.handleMapClick}
            captureClick
          >
            <img
              style={{
                borderRadius: 100,
                width: 48,
                height: 48,
              }}
              src="https://avatars2.githubusercontent.com/u/2254731?v=4"
            />
          </Marker>
        </MapGL>
      </div>
    );
  }
}
