import React, { Component } from 'react';
import { FlatList, Text,  StyleSheet } from 'react-native';
import RaceItem from './RaceItem';

const style = StyleSheet.create({
    list: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: '#E6E6E6'
    }
});






class RaceList extends Component {
    state = {
        speedways: []
    }

    componentDidMount() {
        const speedways = require('./Data.json').speedways;
        this.setState({ speedways });
    }
    render() {
        return (

            <FlatList
            style={style.list}
            data={this.state.speedways}
            renderItem={({item}) => <RaceItem item={item}/>}
            keyExtractor={item => item.id}
            />
        );
    }
}
export default RaceList;