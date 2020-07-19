const { GuildMember } = require("discord.js");

module.exports = {
    name: 'mute',
    description: "Mute Peoples From Server!",
    execute(message, args){
        message.reply('User Was Successfully Muted');
    }
}
