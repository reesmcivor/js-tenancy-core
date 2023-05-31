import { View, Text, Button } from "react-native";
import useAuth from "js-tenancy-auth/hooks/useAuth";
import useApi from "js-tenancy-core/hooks/useApi";
import { useEffect } from "react";
import forms from "js-tenancy-forms/api/forms";

const WelcomeScreen = () => {

    useEffect(() => {
        loadForms();
    }, []);

    const logout = async() => {
        auth.logOut();
    };
    
    const auth = useAuth();
    const {data: availableForms, error, loading, request: loadForms} = useApi(forms.getAvailableForms);

    if(loading)
        return <View><Text>Loading...</Text></View>

    if(error)
        return <View><Text>{`Error is ${error}`}</Text></View>

    return (
        <>
            <View>
                <Text>Welcome this is the authenticated screen</Text>
            </View>
            <Button title="Logout" onPress={logout} />
            <Text>
                
            </Text>
        </>
    );
}

export default WelcomeScreen;