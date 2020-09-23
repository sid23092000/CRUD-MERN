const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://sid23092000:sid23092000@crud-mern.b9g04.mongodb.net/<dbname>?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology:true},
    err => {
        if (!err)
            console.log('Mongodb connection succeeded.')
        else
            console.log('Error while connecting MongoDB : ' + JSON.stringify(err, undefined, 2))
    })