import React, { Component } from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet,
} from 'react-native';
import Button from 'apsl-react-native-button'
import DateTimepicker from "react-native-modal-datetime-picker";

const style = StyleSheet.create({

    button: {
        width: 300,
        padding: 10,
        margin: 20,
        borderColor: 'transparent',
        backgroundColor: 'transparent'      
    },
    textDate: {
        borderBottomColor: 'black'
    }

});

export default class PickShedule extends React.Component {

    state = {
        date: new Date().getDate(),
    }

    handleDatePress = () => {
        this.setState({ showDatePicker: true });
    }

    handleDatePicked = (date) => {
        this.setState({
            date,

        });
        this.handleDatePickerHide();
    }

    handleDatePickerHide = () => {
        this.setState({ showDatePicker: false });
    }

    render() {
        return (

            <View>
                <View >
                    <Button
                        style={style.button}
                        onPress={this.handleDatePress}>
                        <Text style={style.textDate}
                        >{this.state.date.toString()}</Text>
                    </Button>
                    <DateTimepicker
                        isVisible={this.state.showDatePicker} //TODO mandar la fecha 
                        mode="time"
                        onConfirm={this.handleDatePicked}
                        onCancel={this.handleDatePickerHide}
                    />
                </View>
            </View >
        );
    }
}