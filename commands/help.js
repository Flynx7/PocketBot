module.exports = {
    name: 'help',
    description: "Commands List",
    execute(message, args){
        message.channel.send('What do you need help with?');
 
    receivedMessage.channel.send("Message received from " + receivedMessage.author.toString() + ": " + receivedMessage.content)
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
 
    }
}
