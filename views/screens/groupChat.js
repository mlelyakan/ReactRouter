import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation'

import {
   View,
   Text,
   StyleSheet,
   Alert,
} from 'react-native';

import Button from '../components/Button';

export default class GroupChat extends Component {

   constructor(props) {
      super(props);
   }

   static navigationOptions = ({ navigation, screenProps }) => {

      const { state } = navigation
      const { customButton } = "params" in state && state.params

      return {
         headerStyle: {
            backgroundColor: '#ff6643',
         },
         headerTitle:'GroupUser',
         headerTintColor: "#fff",
         headerLeft: (
            <Button
               style={styles.navbarButtonStyle}
               contentStyle={styles.contentStyle}
               onClick={(e) => { navigation.state.params.handleNavBack(navigation) }}
               text="Geri">
            </Button>)
      }
   }

   componentWillMount() {
      var _self = this;
      _self.props.navigation.setParams({
         handleNavBack: this.onNavBack,
      });
   }

   onNavBack(navigation) {
      navigation.navigate('ChatListView');
   }

   render() {
      return (
         <View style={styles.container}>
            <Text>Group Chat View</Text>
         </View>
      )
   }
}

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