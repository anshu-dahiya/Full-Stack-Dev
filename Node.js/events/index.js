//event
const EventEmitter = require('events')
const emitter = new EventEmitter();

emitter.on('checkPage',(data) =>{       //emitter.on run when 'checkpage' is emited
    console.log('Event Occur',data);
})

emitter.on('checkPage',(data) =>{
    console.log('Event Occur',data.message);
})

emitter.on('checkPage',(data,status) =>{
    console.log('Event Occur',data.message,status);
})

emitter.emit('checkPage',{message : 'Hello World'},200);