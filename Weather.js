import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { LinearGradient } from 'expo';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PropTypes from "prop-types";

// export default class Weather extends Component {
//     render() {
//         return (
            // <LinearGradient 
            //     colors={["#DCEBC2", "#23EBFF"]} 
            //     style={styles.container}>

            //     <View style={styles.upper}>
            //         {/* props are color size name */}
            //         <Ionicons color="white" size={144} name="ios-rainy"/>
            //         <Text style={styles.temp}>25°</Text>
            //     </View>
            //     <View style={styles.lower}>
            //         <Text style={styles.title}>Raining Like MF</Text>
            //         <Text style={styles.subtitle}>For more info look outside</Text>
            //     </View>


            // </LinearGradient>
//         )
//     }
// }

const weatherCases = {
    Rain: {
        colors: ["#6E7C94", "#000000"],
        title: "Raining",
        subtitle: "For more info, look outside",
        icon: 'weather-pouring'
    },
    Clear: {
        colors: ["#DCEBC2", "#23EBFF"],
        title: "Sunny",
        subtitle: "Go outside and enjoy",
        icon: 'weather-sunny'
    },
    Thunderstorm: {
        colors: ["#FEFBD0", "#FDCFB7"],
        title: "Thunderstorm",
        subtitle: "Scary, better stay at home",
        icon: 'weather-lightning'
    },
    Clouds: {
        colors: ["#8DA9AB", "#476A94"],
        title: "Cloudy",
        subtitle: "Are we in England?",
        icon: 'weather-cloudy'
    },
    Snow: {
        colors: ["#FFDCD2", "#62B1E1"],
        title: "Snow, cold as XXXX",
        subtitle: "Do you want to build a snowman?",
        icon: 'weather-snowy'
    },
    Drizzle: {
        colors: ["#387142", "#A3E8B2"],
        title: "Drizzle",
        subtitle: "How about a cup of coffee?",
        icon: 'weather-rainy'
    },
    Haze: {
        colors: ["#FDCFB7", "#8EB9A8"],
        title: "Haze",
        subtitle: "Drive Safe",
        icon: 'weather-fog'
    },
    Mist: {
        colors: ["#FDCFB7", "#8EB9A8"],
        title: "Mist",
        subtitle: "Drive Safe",
        icon: 'weather-fog'
    }
}

function Weather({ temp, weatherName}) {
    return (
        <LinearGradient
            colors={weatherCases[weatherName].colors}
            style={styles.container}>

            <View style={styles.upper}>
                {/* props are color size name */}
                <MaterialCommunityIcons 
                    color="white" 
                    size={144} 
                    name={weatherCases[weatherName].icon} />
                <Text style={styles.temp}>{temp}° F</Text>
            </View>
            <View style={styles.lower}>
                <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
                <Text style={styles.subtitle}>{weatherCases[weatherName].subtitle}</Text>
            </View>
        </LinearGradient>        
    )
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    weatherName: PropTypes.string.isRequired
}

export default Weather;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    upper: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "transparent"

    },
    icon: {
        fontSize: 24,
        backgroundColor: "transparent",
        color: "white",
        marginBottom: 24
    },
    temp: {
        fontSize: 48,
        backgroundColor: "transparent",
        color: "white",
        marginBottom: 10
    },
    lower: {
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "flex-end",
        paddingLeft: 25
    },
    title: {
        fontSize: 58,
        backgroundColor: "transparent",
        color: "white", 
        marginBottom: 50,
        paddingLeft: 85,
        fontWeight: "300"
    },
    subtitle: {
        fontSize: 24,
        backgroundColor: "transparent",
        color: "white",
        paddingLeft: 85,
        paddingRight: 60,
        marginBottom: 154
        
    }
})
