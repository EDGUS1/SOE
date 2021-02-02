const UT = require("../models/UserTarea");
const dbConnection = require("../connect");
const connection = dbConnection();

userOperation = function(req, res) {
    const command = req.body.command;
    console.log("dvsdvsdv")
    switch (command) {
        case "ENVIO_TAREA":
            enviotarea(req, res);
            
            break;
        default:
            return res.status(500).send({
                status: "ERROR",
                message: "No se ha encontrado el archivo",
            })
    }
}

async function enviotarea(req, res) {
    const ut = req.body.transaction
    console.log("dvsdsdv")
    const newTarea = new UT(ut)
    //const id_c = req.params.id_c;
    //const {a_name, a_description} = req.body;
    const a_file = await cloudinary(req.files.a_file.tempFilePath);    
    try {
        await pool.query('INSERT INTO usuario_tarea VALUES (?, ?, ?)', [newTarea.id_usuario,newTarea.id_tarea, a_file]);
        const assignment = await (await pool.query('SELECT * FROM assignment ORDER BY id_a DESC LIMIT 1')).rows[0];
        res.status(200).json({
            message: 'Successfull added assignment',
            assignment
        })
    } catch (error) {
        res.status(500).json({
            message: 'An error has ocurred',
            error
        })
    }
}


module.exports = userOperation;