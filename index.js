const app = require('express')()
const http = require('http').createServer(app)
const io = require('socket.io')(http)

app.get('/', (req, res) => {
    res.sendFile(__dirname +'/index.html');
})

// io.on('connection', (socket) => {
//     console.log('用户已连接')
//     socket.on('disconnect', () => {
//         console.log('用户已断开')
//     })
// })
io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
        console.log('message: ', msg)
    })
})

http.listen(3000, () => {
    console.log('listen on 3000')
});
