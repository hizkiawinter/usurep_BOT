
require('dotenv').config();

const {Client, IntentsBitField} = require('discord.js');
const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds, 
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ]
}); 

client.on('ready', (c) => {
    console.log(`${c.user.username} menyala abangkuh`);
})

client.on('messageCreate', (msg) => {
    if(msg.author.bot){
        return; 
    }
    console.log(msg.channel.id)
    if(msg.content === 'hai'){
        msg.reply('hai');
    }

    if(msg.content === 'oke gas'){
        msg.reply('https://www.youtube.com/shorts/QRghT9jPHck'); 
    }
})

client.on('interactionCreate', (interaction) => {
    if(!interaction.isChatInputCommand()) return; 
    
    if(interaction.commandName === 'hai') {
        interaction.reply('hai'); 
    }
})

client.login(process.env.TOKEN); 
