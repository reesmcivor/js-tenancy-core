import WelcomeScreen from 'js-tenancy-core/screens/WelcomeScreen';
import ProfileScreen from 'js-tenancy-core/screens/ProfileScreen';

import ChatNavigator from 'js-tenancy-chat/navigators/ChatNavigator';

import { SafeAreaView } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const AppNavigator = () => {
    
    const Stack = createDrawerNavigator();

    return (
        <SafeAreaView className="flex flex-1">
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen name="Home" component={WelcomeScreen} />
                <Stack.Screen name="Profile" component={ProfileScreen} />
                <Stack.Screen name="Conversations" component={ChatNavigator} />
            </Stack.Navigator>
        </SafeAreaView>
    );
}

export default AppNavigator;