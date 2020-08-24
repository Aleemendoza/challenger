

//       &&&&&&                         &&&&                                                 
//     .&&&&&&%&&                     #&&&&&%                                                
//      @c&&&&&&&&&&&%. *      ,,(@&&%%%&&&&,                                                
//       (o&&&# *, ,&&&&&&/.&&&&&%/*#&&&&&(                                                  
//         %l&&&&&&&&&&&&,  ,&&&&&&&&&&&(                                                    
//          .o&&&&&&&@.        #*/%@&&%%*    *                                               
//     /%,                                  %                                                
//      (##.        #*                    *#                                                 
//       ,%#                             %/                                                  
//        ,%.        .(.       .        %                                                    
//          ,%#.         .(#,      *###,                                                     
//            *#####//(/**  ***#####(.                                                       
//               *%##############*                                                           
//                      ,***,,,                                                     




const server = require('./src/services/app.js');
const instanciaServer = require('http').Server(server);
const {initSocket} = require('./src/services/socket.js')



server.listen('3001', () => {

	initSocket(instanciaServer);

	console.log('backend corriendo en puerto 3001');

	});