import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from 'js-tenancy-core/screens/WelcomeScreen';

const AppNavigator = () => {
    
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={WelcomeScreen} />
        </Stack.Navigator>
    );
}

export default AppNavigator;