/** Discord.JS Bot Template / Made By GomQ **/
/** License: GPL **/

const { Client, Collection } = require("discord.js");
const { readdirSync } = require("fs");
const { join } = require("path");
const { TOKEN, PREFIX } = require("./util/Util");

const client = new Client({
    disableMentions: "everyone",
    restTimeOffset: 0
});

client.login(TOKEN);
client.prefix = PREFIX;
client.commands = new Collection();

client.on("ready", () => {
    console.log(`${client.user.username} ready!`);
    client.user.setActivity(`${PREFIX}help or ${PREFIX}도움말`, { type: "WATCHING" });
});

client.on("warn", (info) => console.log(info));
client.on("error", console.error);

const commands = readdirSync(join(__dirname, "commands")).filter((file) => file.endsWith(".js"));
for (const file of commands) {
    const command = require(join(__dirname, "commands", `${file}`));
    client.commands.set(command.name, command);
}

client.on("message", (message) => {
    if (message.author.bot) return;
    if (!message.guild) return;

    const args = message.content.slice(PREFIX.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();
    const command =
        client.commands.get(commandName) ||
        client.commands.find((cmd) => cmd.aliases && cmd.aliases.includes(commandName));

    if (!command) return;

    try {
        command.execute(message, client, args);
    } catch (error) {
        console.error(error);
        message.reply("오류가 발생했습니다. 나중에 다시 시도해 주세요.");
    }
});