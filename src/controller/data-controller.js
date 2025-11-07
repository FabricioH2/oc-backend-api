// comment.controller.js
const dataService = require('../services/data-service');

exports.listComments = async (req, res) => {
    try {
        const comments = await dataService.getComments();
        res.json(comments);
    } catch (error) {
        console.error("Error al obtener comentarios del backend-data:", error.message);
        res.status(500).json({ error: "No se pudo conectar con el servicio de datos." });
    }
};

exports.createComment = async (req, res) => {
    try {
        const newComment = await dataService.addComment(req.body);
        res.status(201).json(newComment);
    } catch (error) {
        console.error("Error al enviar comentario al backend-data:", error.message);
        res.status(500).json({ error: "No se pudo procesar el comentario." });
    }
};