const { GuildMember } = require("discord.js");

module.exports = {
    name: 'ban',
    description: "Ban people For rule breach.",
    execute(message, args){
        guild.client.role.cache.get()
        message.reply('User Was Successfully Banned');
    }
}