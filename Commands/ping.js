module.exports = {
    execute(msg, client, args) {
        msg.channel.send(`
            π ν(pong)!
            \`\`\`
μ¬μ©μ λ©μμ§-λ΄ κ° μ§μ°μκ° : ${Date.now() - msg.createdTimestamp}ms
API (λμ€μ½λ-λ΄) μ§μ°μκ° : ${client.ws.ping}ms \`\`\``)
    }
}

module.exports.name = "ν"
module.exports.aliases = ["ping", "ν"]
module.exports.description = "λλΌμ΄λ΄μ ν μ λ³΄"