import React, { Component } from 'react';
import { View, Image, Text} from 'react-native';
import Styles from './StylesRoomFeatures.js';

export default class RoomFeatures extends Component {
    render() {
        return (
                <View style={Styles.featureContainer}>
                    <View style={Styles.title}>
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