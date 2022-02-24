const express = require("express");
const sequelize = require('./database');
sequelize.sync({force: true}).then(()=> console.log('O banco de dados está pronto'))
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require('cors')

const rotaUsers = require("./routes/user");
const rotaEntrada = require("./routes/entrada")

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json()); 

app.use((req, res,next)=>{
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Headers","*");
  res.header("Access-Control-Allow-Methods","*"); 
  app.use(cors());
  next();
})

app.use("/usuario",rotaUsers);
app.use('/entrada',rotaEntrada);

app.use((req, res, next) => {
  const erro = new Error("Ops! Página não encontrado...");
  erro.status = 404;
  next(erro);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  return res.send({
    erro: {
      mensagem: error.message,
    },
  });
});

app.listen(5000, () => {
  console.log("app is running");
});









