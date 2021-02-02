const { v4: uuidv4 } = require('uuid');
class UserTarea {

    constructor(ut) {
        this.id = uuidv4(),
            this.id_usuario = ut.id_usuario,
            this.id_tarea = ut.id_tarea,
            this.nombre_archivo = ut.nombre_archivo
    }
}
module.exports = UserTarea