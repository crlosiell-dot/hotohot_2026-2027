import axios from 'axios';

const API_BASE = 'http://localhost:8000/api';

const getheaders = () => {
    const token = localStorage.getItem('token');
    return token ? {Authorization: `Token ${token}`} : {};
};

export const regiteruser = (userData) => axios.post('$(API_BASE)/register/', userdata);
export const loginuser = (credentials) => axios.post('$(API_BASE)/login/', credentials);

export const getPokemons = () =>axios.get('$(API_BASE)/pokemon/', {headers: getHeaders() });
export const createpokemon = (data) => axios.post('$(API_BASE)/pokemon/', data, {headers: getHeaders() });
export const updatepokemon = (id,data) => axios.put('$(API_BASE)/pokemon/${id}/',data, {headers: getHeaders() });
export const deletepokemon = (id) => axios.delete('$(API_BASE)/pokemon/${id}/', {headers: getHeaders() });
