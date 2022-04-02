module.exports = {
    execute(msg, client, args) {
        msg.channel.send(`
            🏓 퐁(pong)!
            \`\`\`
사용자 메시지-봇 간 지연시간 : ${Date.now() - msg.createdTimestamp}ms
API (디스코드-봇) 지연시간 : ${client.ws.ping}ms \`\`\``)
    }
}

module.exports.name = "핑"
module.exports.aliases = ["ping", "핑"]
module.exports.description = "도라이봇의 핑 정보"