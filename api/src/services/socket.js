const socketIO = require('socket.io');


module.exports.socket = null;

module.exports.initSocket = function(server){
	//iniciar el socket
	const socket = socketIO(server);

	socket.on('connection', function(socket){
			console.log('hicieron un request')
	})

	module.exports.socket = socket;

}
