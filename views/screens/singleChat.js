import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation'

import {
   View,
   Text,
   StyleSheet,
   Alert,
   Button,
} from 'react-native';

// import Button from '../components/Button';

export default class SingleChat extends Component {

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
         headerTitle: `${navigation.state.params.name}`,
         headerTintColor: "#fff",
         headerLeft: (
            <Button
               onPress={(e) => { navigation.state.params.handleNavBack(navigation) }}
               title="Geri">
            </Button>),
         headerRight: customButton && customButton()
      }
   }

   onGroupChatOpen() {
      // this.props.navigation.navigate('GroupChatView', { name: 'ELYAKAN' });
      const resetAction = NavigationActions.reset({
         index: 0,
         actions: [
            NavigationActions.navigate({ routeName: "GroupChatView" })
         ]
      });
      this.props.navigation.dispatch(resetAction);
   };

   onNavBack(navigation) {
      navigation.navigate('ChatListView');
   }

   componentWillMount() {
      var _self = this;
      const customButton = (
         <Button onPress={this.onGroupChatOpen.bind(this)} title="Group"></Button>
      )
      _self.props.navigation.setParams({
         handleNavBack: this.onNavBack,
         customButton: () => customButton
      });
   }

   render() {
      const { navigate } = this.props.navigation;
      return (
         <View style={styles.container}>
            <Text>Single Chat View</Text>
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