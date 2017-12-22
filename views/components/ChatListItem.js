import React, { Component } from 'react';
import {
   View,
   Text,
   StyleSheet,
   TouchableOpacity,
   Image,
} from 'react-native';

export default class ChatListItem extends Component {

   static defaultProps = {
      text: 'Default',
   };

   render() {
      return (
         <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
            <Image
               style={styles.avatar}
               source={{ uri: 'https://randomuser.me/api/portraits/men/44.jpg' }}
            />
            <View style={styles.contentContainer}>
               <Text style={styles.userName}>Mustafa Lemi ELYAKAN</Text>
               <Text numberOfLines={1} style={styles.messageContent}>https://randomuser.me/api/portraits/men/44.jpg</Text>
            </View>
            <View style={styles.messageCountContainer}>
               <View style={styles.counterShape}>
                  <Text style={styles.messageCount}>12</Text> 
               </View>              
            </View>
         </TouchableOpacity>
      )
   }
}

const styles = StyleSheet.create({
   container: {
      height: 70,
      width: '100%',
      paddingLeft: 10,
      paddingRight: 10,
      marginBottom:2,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#f5f5f5',
   },
   avatar: {
      width: 38,
      height: 38,
      borderRadius: 10,
   },
   contentContainer: {
      height: 50,
      flex:1,
      paddingLeft: 10,
      paddingRight: 10,
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'center',
   },
   userName:{
      fontSize:16,
      color:'#4c4c4c',
      fontWeight:"500"
   },
   messageContent:{
      fontSize:13,
      color:'#666666'
   },
   messageCountContainer:{
      width:35,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
   },
   counterShape:{
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width:26,
      height:26,
      borderRadius:6,
      backgroundColor:'#ff493b',
   },
   messageCount:{
      fontSize:12,
      color:'#fff',
   }
});