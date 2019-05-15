var express = require('express'),
  mysql = require('mysql'),
  consign = require('consign'),
  expressvalidator = require('express-validator'),
  cors = require('cors');

var port = 8880;
var app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(expressvalidator());
app.listen(port, function () {
  console.log('servidor iniciado na porta ' + port);
});

/*****************************************************
************************routes************************
*****************************************************/

app.get('/', function (req, res) {
  res.status(200).send("api entrou");
});

/********************Check-In********************/

app.get('/usuarios', function (req, res) {
  try {
    var _dbConnection = dbConnection();
    var _callback = function (error, result) {
      console.log(error)
      console.log(result)
      _dbConnection.destroy();
      res.status(200).json(result);
    }
    var retornoBuscaSQL = new buscaSQL(_dbConnection, _callback);
    retornoBuscaSQL.getUsuarios();
  } catch (error) {
    console.log('error ' + error);
    res.status(400).send(error);
  }
});

app.post('/usuario', function (req, res) {
  try {
    var dados = req.body

    console.log(dados)

    var _dbConnection = dbConnection()

    var _callback = function (error, result) {
      _dbConnection.destroy();
      res.status(200).json(result);
    }

    var retornoBuscaSQL = new buscaSQL(_dbConnection, _callback);
    retornoBuscaSQL.getUsuario(dados);

  } catch (error) {
    console.log('error ' + error);
    res.status(400).send(error);
  }
});



/*****************************************************
***********************database***********************
*****************************************************/

var dbConnection = function () {
  return mysql.createConnection
    (
      {
        host: 'remotemysql.com',
        user: '8ts45TctPC',
        password: 'oR1pctCZD1',
        database: '8ts45TctPC',
        multipleStatements: true
      }
    );
}

/*****************************************************
************************consign***********************
*****************************************************/

/*consign()
	.include('modules/routes')
		.then('modules/config/db.js')
		.then('app/models')
		.then('app/controllers')
		.into(app);*/

/*****************************************************
************************model***********************
*****************************************************/

function buscaSQL(dbConnection, callback) {
  this._dbConnection = dbConnection;
  this._callback = callback;
}

buscaSQL.prototype.getUsuarios = function () {
  this._dbConnection.query
    (
      ' SELECT * FROM usuario',
      this._callback
    );
}

buscaSQL.prototype.getUsuario = function (dados) {
  this._dbConnection.query
    (
      ' SELECT * FROM usuario WHERE ra = ? AND senha = ? ',
      [
        dados.ra,
        dados.senha
      ],
      this._callback
    );
}

/*****************************************************************************************************************************************/
