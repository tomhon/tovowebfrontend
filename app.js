var restify = require('restify');

var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function () {
   console.log('%s listening to %s', server.name, server.url); 
});

server.get('/', restify.serveStatic({
    directory: __dirname,
    default: '/index.html',
   }));



// server.get('/', function (req, res, next) {
//     res.send(helloWorld());
//     next();
// });

// function helloWorld () {
//     console.log('hello world called');
//     return ({
//        'Some random text': 'OK'
//         });
//     }