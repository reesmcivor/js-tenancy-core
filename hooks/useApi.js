import { useState } from 'react';

export default useApi = (apiFunc, requestData = {}) => {

    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const request = async () => {
        setLoading(true);
        const response = await apiFunc(requestData);
        setLoading(false);

        if(!response.ok) setError(true);

        setError(false);
        setData(response.data);
    };

    return { data, error, loading, request }
}