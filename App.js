import React, { Component } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, Image, StatusBar } from 'react-native';
import Weather from "./Weather";

const API_KEY = "f3d19cbb74190717e951f9f88c778e93";

export default class App extends Component {
  state = {
    isLoaded: false,
    err: null,
    temperature: null,
    name: null

  };
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this._getWeather(position.coords.latitude, position.coords.longitude);
      },
      err => {
        this.setState({
          err: err
        })
      }
    )
  }

  _getWeather = (lat, lon) => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}`)
    .then(response => response.json())
    .then(json => {
      console.log(json);
      this.setState({
        temperature: json.main.temp,
        name: json.weather[0].main,
        isLoaded: true
      })
    })

  }

  render() {
    const { isLoaded, err, temperature, name } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar hidden={true}>
        </StatusBar>
        {/* conditional statement */}
        {isLoaded ? <Weather weatherName={name} temp={Math.floor(temperature * 9/5 - 459.67)} /> : ( 
          <View style={styles.loading}> 
            <Text style={styles.loadingText}> Please wait, Getting the Weather </Text>
            {/* if there is an error show text or else show null */}
            {err ? <Text style={styles.errorText}>{err}</Text> : null} 
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  errorText: {
    color: "red",
    backgroundColor: "transparent"
  },
  loading: {
    flex: 1,
    backgroundColor: '#1B1D26',
    justifyContent: 'flex-end',
    paddingLeft: 45,
    paddingRight: 40
  },
  loadingText: {
    fontSize: 20,
    marginBottom: 350,
    color: "white"
  }
});
