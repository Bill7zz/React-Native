import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';


const style = StyleSheet.create({
    item: {
        backgroundColor: '#fff',
        flex: 1,
        padding: 10,
        paddingTop: 10,
        paddingBottom: 5,
        margin: 3,
        marginTop: 2,
        borderRadius: 2,
    },

    itenContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    img: {
        width: 80,
        height: 80,
        borderRadius: 5,
    },

    title: {
        width: 250,
        paddingLeft: 5,
        fontSize: 20,
        fontWeight: '300',
        textAlign: 'left',
        flex: 1,
    },

    descrp: {
        width: 250,
        flex: 1,
        fontSize: 13,
        paddingLeft: 5,
    },
});

export default RaceItem = ({ item }) => {
    return (
        <View style={style.item}>
            <View style={style.itenContainer}>
                <Image
                    style={style.img}
                    source={{ uri: item.image }} />
                <View>
                    <Text style={style.title}>{item.name}</Text>
                    <Text style={style.descrp}>{item.description}</Text>
                </View>
            </View>
        </View>
    );
}