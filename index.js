const Discord = require('discord.js');
const client = new Discord.Client();


client.on("ready", () =>{
	console.log(`Logged in as ${client.user.tag}!`);
	client.user.setPresence({
			status: "online",  //You can show online, idle....
			game: {
					name: "code",  //The message shown
					type: "LISTENING" //PLAYING: WATCHING: LISTENING: STREAMING:
			}
	});
});

// make bot say a thing
  client.on('message', message => {
	  if (!message.member.hasPermission(["KICK_MEMBERS", "ADMINISTRATOR"])) return //admin only
	
	  if (message.content.startsWith("||say ")) { //prefix
      message.delete(1); //Supposed to delete message
      message.channel.send(message.content.slice(5, message.content.length));
   }
});

// bot autoresponds
client.on('message', msg => {

	if (msg.mentions.users.has('<628607192806981632>')) {
		msg.reply('Did you just fricken ping me. Thats it! you are grounded grounded grounded FOREVER.');
	}

	// includes responds
	if (msg.content.includes('Can 2Epik4u be grounded')) {
		msg.reply('no because hes my dad and hes god :rage:');
	} 
	if (msg.content.includes('can 2epik4u be grounded')) {
		msg.reply('no because hes my dad and hes god :rage:');
	}
	if (msg.content.includes('Can 2epik4u be grounded')) {
		msg.reply('no because hes my dad and hes god :rage:');
	}
	if (msg.content.includes('Can 2epik be grounded')) {
		msg.reply('no because hes my dad and hes god :rage:');
	}

	if (msg.content.includes('||dance')) {
		msg.reply("heres 2Epik4u dancing for no reason lol.", { files: ["./images/epikdance.gif"] });

	}

	
	
	if (msg.content === 'hi' ) {
		msg.reply('hi how are u doing')
	}
	if (msg.content === 'your grounded' ) {
		msg.reply('no u')
	}
	if (msg.content === 'uoillac' ) {
		msg.reply('washington aaaaaaaaaaaaaaaaaa')
	}


});
// bot token login
client.login('NzA0NTUxMDU3Njk0MzkyNDAx.XxKGZQ.yXNVDd0_jQeF7m9Snri3ujZFKx8');
