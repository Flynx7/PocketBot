module.exports = {
    name: 'invite',
    description: "Greeting Command",
    execute(message, args){
        message.channel.send('Hey You Want To Invite Me In Your Server So Just Click This Link https://discord.com/api/oauth2/authorize?client_id=733710721191247892&permissions=8&scope=bot');
    }
}