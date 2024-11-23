 const express = require('express');
const bodyParser  = require('body-parser');

 const app = express();
 const apiRoutes = require('./routes');
const db = require('./models/index')

  const SetupAndStartServer =()=>{
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.use('/api', apiRoutes);
    app.listen(3000,()=>{
        if(process.env.DB_SYNC){
        db.sequelize.sync({alter:true})
        }
        console.log('Server is running Fine NoProblem');
    })
  }
  SetupAndStartServer();