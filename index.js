const discord = require("discord.js");
const botConfig = require("./botconfig.json");
 
const client = new discord.Client();
client.login(botConfig.token);
 
client.on("ready", async () => {
 
    console.log(`${client.user.username} is online.`);
 
    client.user.setActivity("DutchChillings™", { type: "PLAYING" });
 
});
 
 
client.on("message", async message => {
 
    if(message.author.bot) return;
 
    if(message.channel.type === "dm") return;
 
    var prefix = botConfig.prefix;
 
    var messageArray = message.content.split(" ");
 
    var command = messageArray[0];
 
    if (command === `${prefix}hallo`) {
 
        return message.channel.send("Hallo!!");
    
    }
 
    if (command === `${prefix}embed`) {
        // Embed wat we gaan laten tonen.
        var botEmbed = new discord.MessageEmbed()
            .setTitle('Server Boosters!')
            .setDescription("Hoi iedereen, er zijn verschillende mensen die onze Discord Server hebben geboosts! Wij willen iedereen hier heel erg voor bedanken! Wil jij nou ook onze server boosten, dat kan. Als je niet weet hoe het moet maak een ticket aan!")
            .setColor("#0099ff")
 
            .setThumbnail('https://i.imgur.com/M1BEJkl.gif')
            .setImage('https://i.imgur.com/M1BEJkl.gif')
            .setTimestamp()
            .setFooter('Nogmaals bedankt iedereen!', 'https://i.imgur.com/M1BEJkl.gif');
 
        // Terug sturen van het bericht
        return message.channel.send(botEmbed);
    }
 
    // .addFields(
    //     {name:"Bot naam",value: bot.user.username},
    //     {name:"Bot naam",value: bot.user.username}
    // )
 
    if (command === `${prefix}serverinfo`) {
 
        var serverEmbed = new discord.MessageEmbed()
            .setDescription("Zet de beschrijving")
            .setColor("#kleur")
            .addField("Bot naam", client.user.username)
            .addField("Je bent deze server gejoind op", message.member.joinedAt)
            .addField("Totaal memebers", message.guild.memberCount);
 
        return message.channel.send(serverEmbed);
    }

});

bot.login(process.env.token);