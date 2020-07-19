module.exports = {
    name: 'help',
    description: "Commands List",
    execute(message, args){
        message.channel.send('What do you need help with?');
 
    // Check if the bot's user was tagged in the message
    if (receivedMessage.content.includes(client.user.toString())) {
        receivedMessage.channel.send("You need help with" + ":" + receivedMessage.content)}
            const args = message.content.slice(prefix.length).split(/ +/);
            const command = args.shift().toLowerCase();
 
    }
}
