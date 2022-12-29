const express = require('express') /*Creamos express el cual es un framework de node que nos permite construir REST API este framework se 
                                    basa en el uso de funciones middlewares, que son funciones traen consigo 4 parametros.

                                    


                                    1. El objeto request que nos permite recibir la peticion de el cliente
                                    2. El objeto response que es donde enviaremos nuestra respuesta a la peticion del cliente.
                                    3. La funcion next que lo que hace es enviarnos al sigueinte middleware que pueda manejar la peticion.
                                    4. El objeto error que nos guarda un stack  con el error ocurrido.
                                    */


const app = express() //Iniciamos nuestra API.


const database = [
    { 
        id:1,
        title:'This is a title',
        isCompleted:false,
    },
    { 
        id:2,
        title:'This is a title two',
        isCompleted:false,
    },

]

app.get('/', (req, res) => { 
    res.status(200).json(database) //Recordamos enviar la respuesta en formato .json para que el cliente la pueda interpretar-
})



app.listen( 4000, () => { //Ponemos el server en la escucha.
    console.log('server on')
})