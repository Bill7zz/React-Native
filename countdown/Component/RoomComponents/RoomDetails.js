import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import PickShedule from './PickShedule'
import Styles from './StylesRoomDetails.js';



class RoomDetails extends Component {
    render() {
        return (
            <View>
                <View style={Styles.headerBar} />
                <Image
                    style={Styles.img}
                    source={{ uri: "https://i.pinimg.com/564x/4f/4b/10/4f4b1027b57b4c2a69c7ea6ab39038d1.jpg" }} />
                <View style={Styles.featureContainer}>
                    <View style={{
                            width: '100%',
                            borderBottomWidth: 2,
                            borderBottomColor: '#CCCCCC'}}>
                        <Text style={{fontSize: 16}}>Features</Text>
                    </View>
                    <View style={Styles.featureContainer}>
                        <Text style={{ width: '50%', marginBottom: 25 }}>40"</Text>
                        <Text style={{ width: '50%', marginBottom: 25 }}>Speaker Bluetooth</Text>
                        <Text style={{ width: '50%' }}>Power Supply</Text>
                        <Text style={{ width: '50%' }}>White Board</Text>
                    </View>
                </View>
            </View>

        );
    }
}
export default RoomDetails;