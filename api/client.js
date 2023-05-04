
import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'apisauce';

const apiClient = create({
    baseURL: 'https://test.tenancy.staging.logicrises.co.uk/api/',
    headers: {
        Accept: 'application/json',
    }
});

apiClient.addAsyncRequestTransform(request => async () => {
    const authToken = await AsyncStorage.getItem('token');
    if (!authToken) return;
    request.headers["Authorization"] = "Bearer " + authToken
});

export default apiClient;