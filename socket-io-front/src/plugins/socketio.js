// plugins/i18n.js
import { io } from 'socket.io-client';
let socket=undefined
export default {
    install: (app) => {
        const connecToServer = async (namespace = '') => {
            try {
                socket = initialiseSocket(namespace)
                console.log(socket)
                 if (socket) {
                     socket.on("connect", () => {
                         if (socket.connected) {
                             console.log(socket)
                             return             
                     }
                  })
                   
                 }
            } catch (error) {
                socket.on("connect_error", (error) => {
                   console.log(error)
                  });
            }
             
        };
        const disconnectToServer =(event) => {
            if (socket) {
                console.log('#########disconnect server########')
                return socket.emit(event.type);
            }
            
        };
        const eventListener = (event,callback) => {
            console.log('#########listen event########')
            if (socket) {
               return socket.on(event.type, event.callback);
            }
            return callback(false)
        };
        const sendEvent = (event,callback) => {
            console.log('#########send event########')
            if (socket) {
               return socket.emit(event.type, event.data);
             
            }
            return callback()
            
        };
        app.provide('connecToServer', connecToServer)
        app.provide('disconnectToServer', disconnectToServer)
        app.provide('eventListener', eventListener)
        app.provide('sendEvent', sendEvent)
    }
    
}
function initialiseSocket(namespace) {
    let url=''
    if (namespace) {
         url=`http://localhost:5001/${namespace}`    
    } else {
         url=`http://localhost:5001`    
    }
    
    socket = io(url)
  return socket
   
}