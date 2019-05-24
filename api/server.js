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
    var _dbConnection = dbConnection()
    var _callback = function (error, result) {
      _dbConnection.destroy()

      if(result.length > 0) {
        res.status(200).json(result)
      } else {
        res.send(false)
      }
    }
    var retornoBuscaSQL = new buscaSQL(_dbConnection, _callback);
    retornoBuscaSQL.getUsuarios();
  } catch (error) {
    res.status(400).send(error);
  }
})

app.post('/usuario', function (req, res) {
  try {
    var dados = req.body

    var _dbConnection = dbConnection()

    var _callback = function (error, result) {
      console.log(result)
      _dbConnection.destroy()
      if(result.length > 0) {
        res.status(200).json(result[0])
      } else {
        res.send(false)
      }
    }

    var retornoBuscaSQL = new buscaSQL(_dbConnection, _callback);
    retornoBuscaSQL.getUsuario(dados);

  } catch (error) {
    res.status(400).send(error)
  }
})

app.get('/usuario', function (req, res) {
  try {
    var dados = []
    dados['ra'] = req.query.ra
    dados['senha'] = req.query.senha

    var _dbConnection = dbConnection()

    var _callback = function (error, result) {
      _dbConnection.destroy()
      if(result.length > 0) {
        res.status(200).json(result)
      } else {
        res.send(false)
      }
    }

    var retornoBuscaSQL = new buscaSQL(_dbConnection, _callback)
    retornoBuscaSQL.getUsuario(dados)

  } catch (error) {
    res.status(400).send(error)
  }
})

app.get
(
  '/senhasMorumbi',
  (req, res) => {
    try {
      var _dbConnection = dbConnection()

      var _callback = function (error, result) {
        _dbConnection.destroy()
        if (result.length > 0) {
          res.status(200).json(result)
        } else {
          res.send(false)
        }
      }

      var retornoBuscaSQL = new buscaSQL(_dbConnection, _callback)
      retornoBuscaSQL.getMorumbi()
    } catch (err) {
      res.status(400).send(err)
    }
  }
)

app.get
(
  '/senhas',
  (req, res) => {
    try {
      var _dbConnection = dbConnection()
      var local = req.query.local
      var _callback = function (error, result) {
        _dbConnection.destroy()
        if (result.length > 0) {
          res.status(200).json(result)
        } else {
          res.send(false)
        }
      }

      var retornoBuscaSQL = new buscaSQL(_dbConnection, _callback)
      retornoBuscaSQL.getSenhas(local)
    } catch (err) {
      res.status(400).send(err)
    }
  }
)



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

buscaSQL.prototype.getMorumbi = function () {
  this._dbConnection.query
    (
      ' SELECT * FROM senhaMorumbi',
      this._callback
    );
}

buscaSQL.prototype.getSenhas = function (local) {
  this._dbConnection.query
    (
      ` SELECT * FROM ${local}`,
      this._callback
    );
}

/*****************************************************************************************************************************************/
