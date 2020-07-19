const { GuildMember } = require("discord.js");

module.exports = {
    name: 'kick',
    description: "Kick Peoples From Server!",
    execute(message, args){
        message.reply('User Was Successfully Kicked From Server');
    }
}