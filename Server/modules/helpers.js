module.exports.mysqlQuery = function (tipo, c, query, d) {
  return new Promise(function(resolve, reject) {

    // La función mysqlQuery recibe cuatro parámetros: tipo, c, query y d.
    // tipo: Es una cadena que representa el tipo de consulta, como 'GET'.
    // c: Es un objeto que representa la conexión a la base de datos MySQL.
    // query: Es una cadena que representa la consulta SQL que se va a ejecutar.
    // d: Es un objeto que contiene los datos para la consulta SQL (puede ser null si no se requieren).

    // Se crea una nueva promesa que envuelve la ejecución de la consulta SQL.
    // La promesa toma dos parámetros: resolve (para resolver la promesa) y reject (para rechazarla en caso de error).

    c.query(query, d, function(err, rs) {
      // Se ejecuta la consulta SQL utilizando el objeto de conexión 'c'.
      // La consulta se construye con la cadena 'query' y los datos 'd'.
      // El resultado de la consulta se maneja en una función de callback con los parámetros 'err' (error) y 'rs' (resultado).

      if(err) {
        // Si ocurre un error durante la ejecución de la consulta, se muestra el mensaje de error en la consola.
        console.log("err", err);
        // Se resuelve la promesa con un objeto que indica que ocurrió un error y se proporciona una descripción del mismo.
        resolve({err: true, description: err});
        // También se podría usar 'reject(err)' en lugar de 'resolve({err: true, description: err})' para rechazar la promesa.
        //process.exit(1);
        //return reject( err );
      } else {
        // Si la consulta se ejecuta correctamente y no hay errores:

        if(tipo == 'GET') {
          // Si el tipo de consulta es 'GET', se resuelve la promesa con un objeto que indica que no hubo errores y se proporciona el resultado.
          resolve({err: false, result: rs});
        } else {
          // Si el tipo de consulta no es 'GET', se resuelve la promesa con un objeto que indica que no hubo errores, pero no se proporciona ningún resultado.
          resolve({err: false});
        }
      }
    });

  });
}
