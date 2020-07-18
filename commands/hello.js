module.exports = {
    name: 'hello',
    description: "Test Command",
    execute(message, args){
        message.channel.send('Hi');
    }
}