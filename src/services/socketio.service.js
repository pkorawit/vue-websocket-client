import { io } from 'socket.io-client';

class SocketioService {
    
    socket;
    constructor() { }

    setupSocketConnection() {
        this.socket = io("http://localhost:3000");
        this.socket.emit('message', 'Hello there from Vue Client.');
    }

    sendMessage(message){
        this.socket.emit('message', message);
    }

}

export default new SocketioService();