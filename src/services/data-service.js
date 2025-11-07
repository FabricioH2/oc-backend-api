// data.service.js
const axios = require('axios');

// URL del servicio de datos, que será definido en el Docker Compose o en el entorno de K8s
const DATA_API_URL = process.env.DATA_API_URL || 'http://backend-data-service:3005'; 

exports.getComments = async () => {
    // Reenvía la petición GET
    const response = await axios.get(`${DATA_API_URL}/comments`);
    return response.data;
};

exports.addComment = async (comment) => {
    // Reenvía la petición POST
    const response = await axios.post(`${DATA_API_URL}/comments`, comment);
    return response.data;
};