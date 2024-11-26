 const express = require('express');
const bodyParser  = require('body-parser');

 const app = express();
 const apiRoutes = require('./routes');
const db = require('./models/index')

  const SetupAndStartServer =()=>{
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.get('/bookingservice/api/v1/home',(req,res)=>{
      return res.json({message:"Hitting the booking service"})
    })
    app.use('/bookingservice/api',apiRoutes)
    // app.use('/api', apiRoutes);
    app.listen(3000,()=>{
        if(process.env.DB_SYNC){
        db.sequelize.sync({alter:true})
        }
        console.log('Server is running Fine NoProblem');
    })
  }
  SetupAndStartServer();