const {cmd , commands} = require('../command')

cmd({
    pattern: "owner",
    desc: "owner the bot",
    category: "main",
    react: "👨‍💻",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `*KAVEE-MD BOT OWNER📍*

*╭─────────────────────●●►*
*| ᴏᴡɴᴇʀ ɴᴀᴍᴇ:* Mr KAVEE
*| ʏᴏᴜᴛᴜʙᴇ:* ready
*| ᴡʜᴀᴛꜱᴀᴘᴘ ᴄʜᴀɴɴᴇʟ:* https://whatsapp.com/channel/0029Vb5uN5OGehENN2xGqt1z
*╰─────────────────────●●►*

> ©POWERD BY KAVEE-MD
`
// Send the image with caption
      await conn.sendMessage(
        from,
        { image: { url: `photo url` }, caption: dec },
        { quoted: mek }
      );

    // vCard for Mr. Hashiya
      const vcard2 =
        "BEGIN:VCARD\n" +
        "VERSION:3.0\n" +
        "FN:Mr. Kaviya\" +
        "ORG:Mr. Kaviya\n" +
        "TEL;type=CELL;type=VOICE;waid=94775347129:+94775347129\n" +
        "EMAIL:sahankavisha005@gmail.com\n" +
        "END:VCARD";

      // vCard for Mr Hacker
      const vcard1 =
        "BEGIN:VCARD\n" +
        "VERSION:3.0\n" +
        "FN:Mr. Senesh\n" +
        "ORG:Mr. Senesh\n" +
        "TEL;type=CELL;type=VOICE;waid=94775347129:+94775347129\n" +
        "EMAIL:sahankavisha004@gmail.com\n" +
        "END:VCARD";

    
      // Send both contacts as a single message
      await conn.sendMessage(from, {
        contacts: {
          displayName: "Bot Owners",
          contacts: [{ vcard: vcard1 }, { vcard: vcard2 }],
        },
      });
    } catch (e) {
      console.log(e);
      reply(`${e}`);
    }
  }
);
