const nhentai = require('nhentai')
const api = new nhentai.API();

module.exports = {
    name: 'nhentai',
    description: 'searches nhentai stuff',
    async execute (client,message,args,Discord){
        var embed = new Discord.MessageEmbed();
        var num  = parseInt(args[0])
        api.fetchDoujin(num).then(result => {
            embed.setColor('#00f9ff')
            .setTitle(result.titles.pretty)
            .setImage(result.cover.url)
            .setURL(result.url)
            .setDescription(result.tags.all.map(tag => tag.name).join(', '))
            .setTimestamp();
            message.channel.send({ embeds: [embed] })
        }).catch(err =>{
            message.channel.send("unable to get")
            console.log(err)
        } )
    }
}