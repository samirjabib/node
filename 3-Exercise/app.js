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


app.use(express.json()) //Esto es un middleware de express que nos permite convertir de manera automatica el recibir request en formato en json


app.post('/',(req, res) => {
    
    // database.push ({
    //     id:3,
    //     title:'this is my new title',
    //     is_completed:false,
    // })

    
    
    database.push({
        id:req.body.id, //Podemos Recibir los datos del body del cliente y agregarlos a la db de manera dinamica, si el cliente pasa un dato que no existe la variable para almacenarlo, o uno de mas, va a tirar un error. 
        title:req.body.title,
        is_completed:false,
    })


    res.status(200).json({ //El response es toda la respuesta que vamos a mandar haci.
       id:3,
       title:'this is my new todo',
       is_completed:false,
       ip:req.ip, //El request termina siendo toda la informacion que tiene un usuario al momento de hacer una peticion
       verb:req.verb,
       body : req.body
    })

})


app.listen( 4000, () => { //Ponemos el server en la escucha.
    console.log('server on')
})