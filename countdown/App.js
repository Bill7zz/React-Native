import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import RoomDetails from './Component/RoomComponents/RoomDetails';


export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, 
       }}>
        <View style={{ flex: 1, margin: 20,
        
        elevation: 5
        
        
        }}>
          <Image
            style={{ marginTop: 5, height: 180, 
              shadowColor: 'rgba(0, 0, 0, 0.65)',
              shadowOffset: { width: -1, height: 1 },
              shadowRadius: 7,
              shadowOpacity: 0.3,  
          



            }}
            source={{ uri: "https://i.pinimg.com/564x/4f/4b/10/4f4b1027b57b4c2a69c7ea6ab39038d1.jpg" }} />
        </View>
      </View>
    );
  }
}