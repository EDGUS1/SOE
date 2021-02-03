const dbConnection = require("../connect");
const connection = dbConnection();

export const curso = (req, res) => {
    const { id, iduser } = req.params;
    let userid = [];
    connection.query("SELECT * FROM curso WHERE id = ?", [id], (err, result) => {
        userid = result[0].creador;
        nombre_curso = result[0].nombre;
        connection.query("SELECT * FROM tarea WHERE id_curso = ?", [id], (err, result) => {
            profesor = false
            if (iduser == userid) profesor = true
            res.render("curso", { result, profesor, curso_id: id, userid, iduser, nombre_curso });
        });
    });
};