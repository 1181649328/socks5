//listen port
//定义协议 加解密
// local链接到server  true or false 
const net = require('net');
const PORT = 8089;
// const ssProcess = require('./ssProcess');
const removeProcess = require('./newRemoteProcess');

let server = net.createServer((socket) => {
    const reProcess = new removeProcess(socket);
});

server.listen(PORT, () => {
    console.log('服务器启动');
})