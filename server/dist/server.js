'use strict';

var _jsonServer = require('json-server');

var _jsonServer2 = _interopRequireDefault(_jsonServer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FIXTURES_PATH = './fixtures/db.json'; /*
                                            Endpoints
                                            GET /
                                            GET /spoilers?name_like=name
                                          */

var server = _jsonServer2.default.create();
var router = _jsonServer2.default.router(FIXTURES_PATH);
var middlewares = _jsonServer2.default.defaults();

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);

server.get('/echo', function (req, res) {
  res.jsonp({ 'foo': 'helllo' });
});

server.use(router);
server.listen(1337, function () {
  console.log('Winter is coming ❄️');
});