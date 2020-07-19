module.exports = {
    name: 'help',
    description: "Commands List",
    execute(message, args){
        message.channel.send('What do you need help with?');
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
 
    }
}
//wait I will test