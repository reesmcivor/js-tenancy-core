
import { create } from 'apisauce';
import storage from 'js-tenancy-auth/storage';

const apiClient = create({
    baseURL: 'https://5c10-82-45-127-179.ngrok-free.app/api/',
    headers: {
        Accept: 'application/json',
    }
});

apiClient.addAsyncRequestTransform(request => async () => {

    const user = await storage.getUser();
    if (!user?.token) return;
    request.headers["Authorization"] = "Bearer " + user?.token
});

export default apiClient;
