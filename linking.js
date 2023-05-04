import * as Linking from 'expo-linking';
import authLinking from 'js-tenancy-auth/linking';

export default {
    prefixes: [Linking.createURL('/')],
    config: {
        screens: {
            ...authLinking,
        }
    }
};