//localhost:5010/api/v1
const urlListaCompleta = () => {
    return "/listaCompleta";
}

const urlListaRealizado = () => {
    return "/listaRealizados";
}

const urlListaPendiente = () => {
    return "/listaPendientes";
}

const urlCrearNuevaTarea = () => {
    return "/crear";
}

const urlActualizarUnaTarea = () => {
    return "/modificar/:id";
}

const urlEliminarUnaTarea = () => {
    return "/eliminar/:id";
}

module.exports = {
    urlListaCompleta,
    urlListaRealizado,
    urlListaPendiente,
    urlCrearNuevaTarea,
    urlActualizarUnaTarea,
    urlEliminarUnaTarea,
}