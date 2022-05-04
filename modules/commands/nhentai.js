const nhentai = require('nhentai')
const api = new nhentai.API();

module.exports = {
    name: 'nhentai',
    description: 'searches nhentai stuff ( not working )',
    async function (message,args){
        var embed = new Discord.MessageEmbed();
        var num  = parseInt(args[0])

        embed.setColor('#00f9ff')
            .setTitle('test')
            .setURL("https://microservices.io/microservices/2021/01/04/microservies-assessment-platform-ga.html")
            .setDescription("uwu")
            .setTimestamp();
            message.channel.send({ embeds: [embed] })

        // api.fetchDoujin(num).then(result => {
        //     embed.setColor('#00f9ff')
        //     .setTitle(result.titles.pretty)
        //     .setImage(result.cover.url)
        //     .setURL(result.url)
        //     .setDescription(result.tags.all.map(tag => tag.name).join(', '))
        //     .setTimestamp();
        //     message.channel.send({ embeds: [embed] })
        // }).catch(err =>{
        //     message.channel.send("unable to get")
        //     console.log(err)
        // } )
    }
}