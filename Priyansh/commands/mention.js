module.exports.config = {
  name: "goiadmin",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭",
  description: "Bot will rep ng tag admin or rep ng tagbot ",
  commandCategory: "Other",
  usages: "",
  cooldowns: 1
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "100076325990902") {
    var aid = ["100076325990902"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["ਫੇਰ ਕਹਿਣਾ ਬੂਟਾ ਗਾਲਾ ਕੱਢ ਦਾ", "ਬਾਬੇ ਹਜੇ ਕੰਮ ਕਰਦੇ ਆ", "ਤੇਰੀ ਕੰਮੀ ਸੀ ਕਰਤੀ ਪੂਰੀ ਮੈਂਸ਼ਨ ਕਰਕੇ", "ਸਬਰ ਰੱਖ ਮੇਰੀ ਜਾਨ ਆਊਗਾ ਓਹ"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
        }
