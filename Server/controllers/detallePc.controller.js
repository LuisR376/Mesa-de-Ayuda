'use strict'
const detallePcModels = require('../models/detallePc.model');
module.exports = {
    fnGetDetallePc: fnGetDetallePc,
    setPc: setPc,
    setdetallePc: setdetallePc
}

function fnGetDetallePc() {
    //
    //Una promesa dice: que debe esperar a terminar la funcion para iniciar el siguiente paso
    return new Promise(function (resolve, reject) {
        detallePcModels.fnGetDetallePc()
            .then(function (result) {

                resolve(!result.err ? { ok: true, addenda: result.result } : reject({ ok: false, error: 'Error al consultar DetallePc' }))
            })
    })
}
function setdetallePc(datos) {
    return new Promise(function (resolve) {
        detallePcModels.ultimoidDetallePc(datos)
            .then(function (result) {
                let iddetallepc = JSON.parse(JSON.stringify(result.result[0]))
                let iddetalle = {
                    iddetallepc: iddetallepc[0].ultimoIdetalle
                }
                setDiscoDuroDetallePc(iddetalle, datos);
                setRamDetallePc(iddetalle, datos);
                resolve({ ok: true, mensaje: 'Se guardo exitosamente' });

            });
    });
}


function setDiscoDuroDetallePc(iddetalle, datos) {
    return new Promise(function (resolve) {
        if (datos.iddiscoduro.length > 0) {
            console.log("iddetalle, datos", iddetalle.iddetallepc, datos);
            let discosDuros = datos.iddiscoduro;
            const promises = [];
            discosDuros.forEach((item) => {
                promises.push({ iddetalle: iddetalle.iddetallepc, iddiscoduro: item.iddiscoduro });
            });
            Promise.all(promises)
                .then((resultDisco) => {
                    console.log('All items processed', resultDisco);
                    recorreArrayDiscos(resultDisco);
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    });
}
function recorreArrayDiscos(discos) {
    return new Promise(function (resolve) {
        for (let key in discos) {
            setDiscoDetalle(discos[key]);
        }
    });
}
function setDiscoDetalle(disco) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            detallePcModels.setDetalleDisco(disco)
                .then(function (result) {
                    resolve({ ok: true, mensaje: 'Se guardo exitosamente' });
                });
        }, 500);

    });
}
function setRamDetallePc(iddetalle, datos) {
    return new Promise(function (resolve) {
        if (datos.idram.length > 0) {
            console.log("iddetalle, datos", iddetalle.iddetallepc, datos);
            let discosDuros = datos.idram;
            const promises = [];
            discosDuros.forEach((item) => {
                promises.push({ iddetalle: iddetalle.iddetallepc, idram: item.idram });
            });
            Promise.all(promises)
                .then((resultDisco) => {
                    console.log('All items processed', resultDisco);
                    recorreArrayRam(resultDisco);
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    });
}
function recorreArrayRam(ram) {
    return new Promise(function (resolve) {
        for (let key in ram) {
            setRamDetalle(ram[key]);
        }
    });
}

function setRamDetalle(ram) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            detallePcModels.setDetalleRam(ram)
                .then(function (result) {
                    resolve({ ok: true, mensaje: 'Se guardo exitosamente' });
                });
        }, 500);

    });
}

function setPc(datos) {
    return new Promise(function (resolve) {
        detallePcModels.existDetallePc(datos)
            .then(function (result) {

                if (result.result[1]) {
                    resolve({ ok: false, error: 'Ya Existe' });
                } else {
                    resolve({ ok: true, Error: result.result[0] });
                }
            });
    });
}