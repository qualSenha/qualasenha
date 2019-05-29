var express = require('express'),
  mysql = require('mysql'),
  expressvalidator = require('express-validator'),
  cors = require('cors'),
  random = require('random-number');

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
        res.status(200).json(result[0])
      } else {
        res.json(false)
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
          for(var i=0; i < result.length; i++) {
            if(result[i].agendada === '1') {
              result[i].ID = `A${result[i].ID}`
            } else {
              result[i].ID = `S${result[i].ID}`
            }
          }
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

      if(local === 'bri') {
        local = 'senhaBrigadeiro'
      } else if (local === 'lib') {
        local = 'senhaLiberdade'
      } else if (local === 'san') {
        local = 'senhaSantoAmaro'
      } else {
        local = 'senhaMorumbi'
      }

      var _callback = function (error, result) {
        _dbConnection.destroy()
        if (result.length > 0) {
          var options = {
            min: 1,
            max: 6,
            integer: true
          }

          for(var i=0; i < result.length; i++) {
            result[i]['guiche'] = random(options)
            if(result[i].agendada === '1') {
              result[i].ID = `A${result[i].ID}`
            } else {
              result[i].ID = `S${result[i].ID}`
            }
          }
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

app.post
(
  '/senha',
  (req, res) => {
    try {
      var dados = []
      dados['ra'] = req.body.ra
      dados['agendada'] = '0'
      dados['local'] = req.body.local

      if (dados.local === 'lib') {
        dados['local'] = 'senhaLiberdade'
      } else if (dados.local === 'bri') {
        dados['local'] = 'senhaBrigadeiro'
      } else if (dados.local === 'san') {
        dados['local'] = 'senhaSantoAmaro'
      } else {
        dados['local'] = 'senhaMorumbi'
      }

      if(req.body.agendada) {
        dados['agendada'] = '1'
      }

      var _dbConnection = dbConnection()
      var _callback = (error, result) => {
        _dbConnection.destroy()
        console.log(error)
        console.log(result)
        if (result) {
          if(result.length > 0) {
            if(result[1][0].agendada === '1') {
              result[1][0].ID = `A${result[1][0].ID}`
            } else {
              result[1][0].ID = `S${result[1][0].ID}`
            }
          }
          res.send(result[1][0])
        } else {
          res.send(false)
        }
      }

      var retornoBuscaSQL = new buscaSQL(_dbConnection, _callback)
      retornoBuscaSQL.postSenha(dados)
    } catch (err) {
      res.status(400).send(err)
    }
  }
)

app.post
(
  '/cancelar',
  (req, res) => {
    try {
      var id = req.body.id
      var local = req.body.local

      console.log(local)

      if (local === 'lib') {
        local = 'senhaLiberdade'
      } else if (local === 'bri') {
        local = 'senhaBrigadeiro'
      } else if (local === 'san') {
        local = 'senhaSantoAmaro'
      } else {
        local = 'senhaMorumbi'
      }
      
      if (id[0] === 'A') {
        id = id.split('A')[1]
      } else {
        id = id.split('S')[1]
      }
      
      var _dbConnection = dbConnection()
      var _callback = (error, result) => {
        console.log(result)
        _dbConnection.destroy()
        console.log(error)
        if (result) {
          res.send(result)
        } else {
          res.send(false)
        }
      }

      var retornoBuscaSQL = new buscaSQL(_dbConnection, _callback)
      retornoBuscaSQL.cancelarSenha(id, local)
    } catch (err) {
      res.status(400).send(err)
    }
  }
)

app.get
(
  '/senhaGerada',
  (req, res) => {
    try {
      var ra = req.query.ra
      var local = req.query.local

      if(local === 'bri') {
        local = 'senhaBrigadeiro'
      } else if (local === 'lib') {
        local = 'senhaLiberdade'
      } else if (local === 'san') {
        local = 'senhaSantoAmaro'
      } else {
        local = 'senhaMorumbi'
      }

      var _dbConnection = dbConnection()

      var _callback = (error, result) => {
        _dbConnection.destroy()
        if (result) {
          if(result.length > 0) {
            if(result[0].agendada === '1') {
              result[0].ID = 'A' + result[0].ID
            } else {
              result[0].ID = `S${result[0].ID}`
            }
            res.status(200).json({senha : result[0].ID})
            return
          }
          res.status(200).json({senha : ''})
        } else {
          res.send(false)
        }
      }

      var retornoBuscaSQL = new buscaSQL(_dbConnection, _callback)
      retornoBuscaSQL.senhaGerada(ra, local)
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
      ' SELECT * FROM usuario WHERE ra = ? AND senha = ?; ',
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
      ' SELECT * FROM senhaMorumbi WHERE status = ? ',
      '0',
      this._callback
    );
}

buscaSQL.prototype.getSenhas = function (local) {
  this._dbConnection.query
    (
      ` SELECT * FROM ${local} WHERE status = ?`,
      '0',
      this._callback
    );
}

buscaSQL.prototype.senhaGerada = function (ra, local) {
  this._dbConnection.query
    (
      ` SELECT * FROM ${local} WHERE ra = ? AND status = ? `,
      [
        ra,
        '1'
      ],
      this._callback
    );
}

buscaSQL.prototype.postSenha = function (dados) {
  var data = new Date()
  this._dbConnection.query
    (
      ` INSERT INTO ${dados.local} (ra, horaGerada, agendada, status) VALUES (?, ?, ?, ?); ` +
      ` SELECT * FROM ${dados.local} WHERE ra = ? AND status = ? `,
      [
        dados.ra,
        data,
        dados.agendada,
        '1',
        dados.ra,
        '1'
      ],
      this._callback
    );
}

buscaSQL.prototype.cancelarSenha = function (id, local) {
  var data = new Date()
  this._dbConnection.query
    (
      ` UPDATE ${local} SET status = ? WHERE id = ? `,
      [
        '2',
        id
      ],
      this._callback
    );
}

/*****************************************************************************************************************************************/