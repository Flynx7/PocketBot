module.exports = {
    name: 'kick',
    description: "Kick Peoples From Server!",
    execute(message, args){
        message.channel.send('User Was Successfully Kicked From Server');
    }
}