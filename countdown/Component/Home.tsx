import React from 'react';
import { View } from 'react-native';
import INavigableProps from '../../INavigableProps';
import styles, { navigationOptions } from './Home.styles.js';

import RoomDetails from '../conferenceRoomDetails/conferenceRoomDetails';

export default class Home extends React.Component<INavigableProps> {
    public static navigationOptions = navigationOptions;

    constructor(props: any) {
        super(props);
    }

    public render() {
        const rooms = [{
            Image: 'https://i.pinimg.com/564x/36/7d/58/367d586b055018e703c9cb3924fe6fea.jpg',
            Nam: 1,
            Seats: 8
        }];

        return (
            <View style={styles.container}>
                <RoomDetails item = {rooms[0]}/>
            </View>
        );
    }
}
