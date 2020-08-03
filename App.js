import React, {Component} from 'react';
 
import {StyleSheet, View} from 'react-native';
 
import MapboxGL from '@react-native-mapbox-gl/maps';
 
MapboxGL.setAccessToken(
  'pk.eyJ1Ijoicm9uYXMiLCJhIjoiY2tjeXN4dnBpMDc0cjJwbW82cnFwMDUwcCJ9.51W2p8jwpAIHuN59aRCiTg',
);
 
// console.disableYellowBox = true;
 
export default class App extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
 
      // Here -122.4324 is Longitude.
      // Here 37.78825 is Latitude.
      coordinates: [110.369492, -7.795580],
    };
  }
 
  render() {
    return (
 
      <View style={styles.MainContainer}>
 
        <View style={styles.SubContainer}>
 
          <MapboxGL.MapView style={styles.Mapbox}>
            <MapboxGL.Camera
              zoomLevel={9}
              centerCoordinate={this.state.coordinates}
            />
 
            <MapboxGL.PointAnnotation id="marker" coordinate={this.state.coordinates} title={"Yogyakarta"} />
 
          </MapboxGL.MapView>
        
        </View>
      
      </View>
    
    );
  }
}
 
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
  },
  SubContainer: {
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
  },
  Mapbox: {
    flex: 1,
  },
});