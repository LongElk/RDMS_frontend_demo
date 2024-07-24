import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

export const login = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, {
      username,
      password
    });
    return response;
  } catch (error) {
    if (error.response) {
      return error.response;
    } else {
      return { status: 'error', message: error.message };
    }
  }
};
