

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




const express = require('express');
const app = express();
const server = require('http').Server(app);
const {initSocket} = require('./src/services/socket.js')


app.use(express.static('public'))

initSocket(server);

server.listen('3000', () => {
	console.log('%s listening at 3000');

	});