module.exports = {
    name: 'help',
    description: "Commands List",
    execute(message, args){
        message.channel.send('What do you need help with?');
 

    if (receivedMessage.content.includes(client.user.toString())) {
        const args = message.content.slice(prefix.length).split(/ +/);
        const command = args.shift().toLowerCase();
    receivedMessage.channel.send("You need help with" + ":" + receivedMessage.content.args)}

 
    }
}
