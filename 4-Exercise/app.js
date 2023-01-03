const express = require('express') 

                                    




const app = express() 

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
    res.status(200).json(database)
})

app.get("todos/:id", (req, res) => { //En el parametro req.params vamos a guardar toda la informacion con referente al url
    const id = req.params.id;
    res.status(200).json({ my_id: id});
})


app.use(express.json()) 


app.post('/todos',(req, res) => {


    const { id, title } = req.body 
    
    if(!id || !title){
        res.status(400).json({ message:'missing data'})
    }else{
        database.push({
            id, 
            title,
            is_completed:false,
        })
    }

    res.status(200).json(database)
})




app.listen( 4000, () => { 
    console.log('server on')
})