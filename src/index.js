require('dotenv/config');

const { Client } = require('discord.js'); 
const { default: OpenAI } = require('openai');

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY, 
}); 

const client = new Client({
    intents: ['Guilds', 'GuildMembers', 'GuildMessages', 'MessageContent'],})

client.on('ready', (c) => {
    console.log(`${c.user.username} menyala abangkuh`);
})

client.on('messageCreate', async (message) => {
    const response = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo', 
        messages: [
            {
                role: 'system',
                content: 'YOU ARE A POSH CHATBOT.'
            },
            {
                role: 'user',
                content: message.content,
            }
        ]
    }).catch((error) => console.error('OPENAI Error:\n', error)); 
    message.reply(response.choices[0].message.content);
})


client.on('interactionCreate', (interaction) => {
    if(!interaction.isChatInputCommand()) return; 
    
    if(interaction.commandName === 'hai') {
        interaction.reply('hai'); 
    }
})

client.login(process.env.TOKEN); 
