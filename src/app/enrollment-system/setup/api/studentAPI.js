import axios from 'axios';

const baseURL = axios.create({
    baseURL: 'http://localhost:8080/api/v1/enrollment',
});

export const useStudent = async (token) => {
    const response = await baseURL.post(`/student-info`, {},
        {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }
    );
    return response.data;
};