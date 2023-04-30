const { Client, Events, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');

const client = new Client({
    intents: [GatewayIntentBits.Guilds]
});

client.once(Events.ClientReady, c => {
    console.log(`Ready! Logged in as ${c.user.tag}: ${c.user.id}`);
    console.log(process.argv[2]);
});

client.login(token);
// if(process.argv[2] == 'dev') {
//     console.log('WARNING: Application is running in development mode. No training will be done.');
// } else if(process.argv[2] == 'prod') {
//     console.log('Application is running in production mode. Happy training!');
// }