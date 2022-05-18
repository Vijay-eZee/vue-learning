// plugins/i18n.js
import io from 'socket.io-client';
let socket=undefined
export default {
    install: (app) => {
      
        const eventListener = (event) => {
            console.log('#########listen event########')
            if (!socket) {
                initialiseSocket(event.namespace)    
            }
            socket.on(event.type, event.callback);
            
        };
        const sendEvent = (event) => {
            console.log('#########send event########')
            if (!socket) {
                initialiseSocket(event.namespace)    
            }
            socket.emit(event.type, event.data);
            
        };
        app.provide('eventListener', eventListener)
        app.provide('sendEvent', sendEvent)
    }
    
}
function initialiseSocket(namespace) {
    const url=`http://localhost:5001/${namespace}`
    socket=io(url)
}