import axios from 'axios';
const DB_URL = 'https://capture-flag1.herokuapp.com/api/user';

export const getUserAfterLogin = async (user) => {
    const { username, password } = user
    const { data } = await axios.post(`${DB_URL}/login`, { username, password })
    return data
}

export const addUser = async user => {
    const { name, username, password, confirm } = user 
    const { data } = await axios.post(DB_URL, { name, username, password, confirm })
    return data
}