import React from 'react';

import { StackNavigator } from 'react-navigation';

import ChatListScreen from './views/screens/chatList';
import SingleChatScreen from './views/screens/singleChat';
import GroupChatScreen from './views/screens/groupChat';

const Navigation = StackNavigator(
  {
    ChatListView: { screen: ChatListScreen },
    SingleChatView: { screen: SingleChatScreen },
    GroupChatView: { screen: GroupChatScreen },
  },
  { headerMode: 'screen' }
);

export default Navigation;