import React, { Component } from 'react';
import {
   View,
   Text,
   StyleSheet,
   TouchableOpacity,
} from 'react-native';

export default class Button extends Component {

   static defaultProps = {
      text: 'Default',
   };

   render() {
      return (
         <TouchableOpacity
            onPress={this.props.onClick}
            style={[styles.container, this.props.style]}>
            <Text
               style={[styles.defaultStyle, this.props.contentStyle]}>
               {this.props.text}
            </Text>
         </TouchableOpacity>
      )
   }
}

const styles = StyleSheet.create({
   container: {
      minWidth: 30,
      minHeight: 30,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'transparent',
   },
   defaultStyle: {
      color: '#fff',
   }
});