import { useState, useCallback, useEffect } from "react";
import { View, Text, ScrollView, Button } from "react-native";
import useAuth from "js-tenancy-auth/hooks/useAuth";

import { usePrivateChannels } from 'js-tenancy-core/store/channels';
import Toast from 'react-native-root-toast';
import ChatMessage from "../../../components/ChatMessage";
import conversations from "js-tenancy-chat/api/conversations";

const NOTIFICATION_EVENT =
  ".App\\Events\\NewChatMessage"


function useNotificationChannel(authUserId, onChange) {
    const channels = usePrivateChannels(authUserId);
    useEffect(() => {
      if (channels) {
        channels.listen(NOTIFICATION_EVENT, onChange);
        // same as channels.notification(onChange)
        return () => {
          channels.stopListening(NOTIFICATION_EVENT);
        };
      }
    }, [channels, onChange]);
  }

const Notifications = () => {

    const { user: { id: authUserId } } = useAuth();
    //const conversation = useApi(conversations.getConversation);

    //console.log(conversation);


    const [notifications, setNotifications] = useState([]);
    const handleNotificationsEvent = useCallback(notification => {
      Toast.show(notification.message);
      setNotifications(existingNotifications =>
        [notification].concat(existingNotifications)
      );
    }, []);

    useNotificationChannel(authUserId, handleNotificationsEvent);
  

    return (
      <ScrollView>
        {notifications.map(n => {
          return (
            <ChatMessage 
              key={n.id}
              message={n.message} 
              sender="Alice" 
              isSender={Math.random() < 0.5} 
              avatar="https://example.com/alice-avatar.png" 
            />
          );
        })}
      </ScrollView>
    );
  }

const ChatScreen = () => {

  const [loading, setLoading] = useState(false);
  const [convos, setConvos] = useState([]);

  const fetchConversations = async () => {
    setLoading(true);
    const response = await conversations.getConversations();
    if(!response.ok) {
      console.log(response);
    } else {
      setConvos(response.data)
      console.log(response);
    }
    setLoading(false);
  }

  const newConversation = async () => {
    setLoading(true);
    const response = await conversations.newConversation({subject: 'test'});
    if(!response.ok) {
      console.log(response);
    } else {
      console.log(response);
      await fetchConversations();
    }
    setLoading(false);
  }





    if(loading) {
        return <View><Text>loading...</Text></View>
    }

    


    return (
        <View className="flex flex-1">
            <Text>CHAT</Text>
            <Button title="New Conversation" onPress={newConversation} />

          
            { convos && convos.map((convo) => {
                return <Text key={convo.id}>{convo.created_at} - {convo.subject}</Text>
              })  
            }
            <Notifications />
            
        </View>
      
    );
}

export default ChatScreen;