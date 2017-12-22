import React, { Component } from 'react';
import {
   View,
   StyleSheet,
} from 'react-native';

import ChatListItem from '../components/ChatListItem';
import Button from '../components/Button';


const styles = StyleSheet.create({
   container: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      backgroundColor: '#fafafa',
   },
   navbarButtonStyle: {
      marginLeft: 8,
      marginRight: 8,
   },
   contentStyle: {
      color: '#fff',
      fontSize: 16,
   }

});

export default class ChatListScreen extends Component {

   constructor(props) {
      super(props);
   }

   static navigationOptions = {
      title: 'BNet Mobile',
      headerStyle: {
         backgroundColor: '#ff6643',
      },
      headerTintColor: "#fff",
      headerLeft: (
         <Button
            style={styles.navbarButtonStyle}
            contentStyle={styles.contentStyle}
            text="Button">
         </Button>),

      headerRight: (
         <Button
            style={styles.navbarButtonStyle}
            contentStyle={styles.contentStyle}
            text="Button">
         </Button>),
   }  

   render() {
      var { navigate } = this.props.navigation;
      return (
         <View style={styles.container}>
            <ChatListItem
               onPress={() => {
                  navigate("SingleChatView", { name: 'Mustafa Lemi Elyakan' });
               }} />
         </View>
      )
   }
}

