const { MessageEmbed } = require('discord.js')

module.exports = {
    execute(msg, client, args) {
        let Embed = new MessageEmbed()
            .setColor('#64e096')
            .setTitle('dorAI 봇 도움말')
            .setURL('https://github.com/igomq/dorAI')
            .setAuthor('dorAI Bot', 'https://cdn.discordapp.com/attachments/959799062591340585/959802082263724032/herong.jpg')
            .setDescription('dorAI 봇의 도움말 임베드입니다')
            .setThumbnail('https://cdn.discordapp.com/attachments/959799062591340585/959802082263724032/herong.jpg')
            .addFields(
                { name: "\u200b", value: "\u200b"},
                { name: "기본 명령어 (Basic Commands)", value: "\u200b"},
                { name: "help, 도움말, h", value: "이 메시지를 출력합니다.", inline: true},
                { name: "ping, 핑", value: "핑(지연시간)을 보여줍니다.", inline: true}
            )
            .setTimestamp()
            .setFooter('도라이봇', 'https://cdn.discordapp.com/attachments/959799062591340585/959802082263724032/herong.jpg');

        msg.channel.send(Embed).then(r=>console.log())
    }
}

module.exports.name = "도움말"
module.exports.aliases = ["help", "도움말", "h"]
module.exports.description = "도라이봇의 도움말"