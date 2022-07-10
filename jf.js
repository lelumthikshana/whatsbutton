/**
   * Create By Dika Ardnt.
   * Contact Me on wa.me/6288292024190
   * Follow https://github.com/DikaArdnt
*/

require('./config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
const moment = require('moment-timezone')
moment.tz.setDefault("Asia/Colombo").locale("id")
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./lib/myfunc')
const { number } = require('yargs')


module.exports = JfBotMd = async (JfBotMd, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await JfBotMd.decodeJid(JfBotMd.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
	    const isMedia = /image|video|sticker|audio/.test(mime)
	    const from = mek.key.remoteJid
	    const type = Object.keys(mek.message)[0]        
	    const content = JSON.stringify(mek.message)
        const isJf = [botNumber, ...global.jf].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
	
        // Group
        const groupMetadata = m.isGroup ? await JfBotMd.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
	    
	
	try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
    
            let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('antilink' in chats)) chats.antilink = false
            } else global.db.data.chats[m.chat] = {
                mute: false,
                antilink: false,
            }
		
	    let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
	    if (setting) {
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = false
		if (!('templateImage' in setting)) setting.templateImage = true
		if (!('templateVideo' in setting)) setting.templateVideo = false
		if (!('templateGif' in setting)) setting.templateGif = false
		if (!('templateMsg' in setting)) setting.templateMsg = false
		if (!('templateLocation' in setting)) setting.templateLocation = false
	    } else global.db.data.settings[botNumber] = {
		status: 0,
		autobio: true,
		templateImage: true,
		templateVideo: false,
		templateGif: false,
		templateMsg: false,
		templateLocation: false,
	    }
	    
        } catch (err) {
            console.error(err)
        }
	    
        // Public & Self
        if (!JfBotMd.public) {
            if (!m.key.fromMe) return
        }

        // Push Message To Console && Auto Read
        if (m.message) {
            JfBotMd.sendReadReceipt(m.chat, m.sender, [m.key.id])
            console.log(chalk.black(chalk.bgWhite('[ Message ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
        }
	
	// reset limit every 12 hours
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Reseted Limit')
        }, {
            scheduled: true,
            timezone: "Asia/Jakarta"
        })


        const reply = (teks) => {
            JfBotMd.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": `ᴘʀᴏᴊᴇᴄᴛ_ᴢᴇʀᴏ.ɴɪɴᴇ.ꜰɪᴠᴇ`,"body": `${global.owner}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync (`./Media/jf.jpg`) , "sourceUrl": `bit.ly/jf_funeral`}}}, { quoted: m})
        }

        const reply2 = (teks) => {
            JfBotMd.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": `ᴘʀᴏᴊᴇᴄᴛ_ᴢᴇʀᴏ.ɴɪɴᴇ.ꜰɪᴠᴇ`,"body": `${global.owner}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./Media/jf.jpg`) ,"sourceUrl": "bit.ly/jf_funeral"}}}, { quoted: m})
        }
        
        const replay = (teks) => {
            JfBotMd.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": `ᴘʀᴏᴊᴇᴄᴛ_ᴢᴇʀᴏ.ɴɪɴᴇ.ꜰɪᴠᴇ`,"body": `${global.owner}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./Media/jf.jpg`) ,"sourceUrl": "bit.ly/jf_funeral"}}}, { quoted: m})
        }

        const replygc = (teks) => {
            JfBotMd.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": `ᴘʀᴏᴊᴇᴄᴛ_ᴢᴇʀᴏ.ɴɪɴᴇ.ꜰɪᴠᴇ`,"body": `${global.owner}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./Media/jf.jpg`) ,"sourceUrl": "https://chat.whatsapp.com/Fs74aRn5nCfIlUdO3aw77z"}}}, { quoted: m})
        }

        
	// auto set bio
	
  /*  jb = `sik`

    if (jb = `sik`) setInterval(async () => {
        await JfBotMd.setStatus(`${JfBotMd.user.name} | Runtime : ${runtime(process.uptime())}`)
      }, 1000 )
	   
	 */  
	   
	
	    // ${runtime(process.uptime())}
	  
        
      // Mute Chat
      if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }

        // Respon Cmd with media
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: JfBotMd.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, JfBotMd.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        JfBotMd.ev.emit('messages.upsert', msg)
        }
	    

        switch(command) {
	    

case 'update' : {


  //JfBotMd.sendMessage('94716989864@whatsapp.net', { text: text })


  //JfBotMd.sendMessage('120363041780940844@g.us', { text: text })

 let  update = `[ COFFIN BOT UPDATE ]\n\n*${text}\n\nMr.v`

   await JfBotMd.sendMessage('94716989864@whatsapp.net', { text: update })

  await  JfBotMd.sendMessage('120363041780940844@g.us', { text: update , mentions: participants.map(a => a.id) })


   // 120363041780940844@g.us


}


break


case 'urt_report_all_1' :
    


 JfBotMd.sendMessage(m.chat, { react: { text: `🇱🇰`, key: m.key }})


//Nirnamikaya = `94724507665`

    //if (isNirnamikaya) return replay(mess.ban)


teks = `${text}`


const groupMetadatax =  await JfBotMd.groupMetadata(`120363040126098552@g.us`).catch(e => {}) 

const participantsx =  await groupMetadatax.participants 





    JfBotMd.sendMessage('120363040126098552@g.us', { text: teks, mentions: participantsx.map(a => a.id) })



   


          break  




case 'urt_report_all_2' :

//Nirnamikaya = `94724507665`

    //if (isNirnamikaya) return replay(mess.ban)


    JfBotMd.sendMessage(m.chat, { react: { text: `🇱🇰`, key: m.key }})


teks = `${text}`


const groupMetadata1 =  await JfBotMd.groupMetadata(`120363023601639070@g.us`).catch(e => {}) 

const participants1 =  await groupMetadata1.participants 





    JfBotMd.sendMessage('120363023601639070@g.us', { text: teks, mentions: participants1.map(a => a.id) })

   

    break



case 'jid' : {

    JfBotMd.sendMessage(m.chat, { react: { text: `🇱🇰`, key: m.key }})


            JfBotMd.sendMessage(m.chat, { text: `*Chat Jid !\n ~ ${m.chat}` } ) //, mentions: participants.map(a => a.id) } )

       
        }


   break

   case 'j' : {


    JfBotMd.sendMessage(m.chat, { react: { text: `🇱🇰`, key: m.key }})


    
    JfBotMd.sendMessage(m.chat, { text: `[ COFFIN BOT UPDATE ] \n\n*his Jid !\n ~ ${m.mentionedJid[0]}` } )


}



// coffin bot


break

case 'menu' : case 'මෙනු' : case 'mrv' : case 'coffin' : case 'jayarathne' : case 'pala' : case 'maranawa' : case 'malano' : case 'marano' : {

JfBotMd.sendMessage(m.chat, { react: { text: `🏳️`, key: m.key }})


    timestampe = speed();
    latensie = speed() - timestampe
    
    ngen =   `╔═══════════៚
║  ᴊꜰ ᴄᴏꜰꜰɪɴ ʙᴏᴛ*
║
║  ʜᴀᴘᴘʏ ꜰᴜɴᴇʀᴀʟ ʟɪꜰᴇ ! "${pushname}"
║
║  ◔ ꜰᴜɴᴇʀᴀʟ ᴘᴀᴄᴋᴀɢᴇꜱ
║  ◔ ꜱᴜᴢɪᴅᴇ ᴘᴀᴄᴋᴀɢᴇꜱ
║  ◔ ᴏᴛʜᴇʀ ɪᴛᴇᴍꜱ
║       
║   *ᴀᴠᴀɪʟᴀʙʟᴇ ᴡɪᴛʜ ᴛʜɪꜱ !
║
║  * ʟɪꜰᴇ ɪꜱ ꜱʜᴏʀᴛ , 
║    ᴡʜʏ ᴀʀᴇ ʏᴏᴜ ᴡᴀɪᴛ?
║  
║  * ɢᴇᴛ ʏᴏᴜʀ ᴘᴀᴄᴋᴀɢᴇ ᴀɴᴅ ᴇɴᴊᴏʏ !
║
║  ◔ ᴅɪʀᴇᴄᴛᴇᴅ ʙʏ - ɱɾ.ʋ
║  ◔ ᴄᴀʟʟ ᴊᴀʏᴀʀᴀᴛʜɴᴇ - 0777611095
║
╚═══════════៚`


// video: global.visoka, gifPlayback:true,




      var image = './Media/jf.jpg'
      message = await prepareWAMessageMedia({ image : { url: image } }, { upload:   JfBotMd.waUploadToServer })
                    template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                        templateMessage: {
                            hydratedTemplate: {
                                imageMessage: message.imageMessage,
                                hydratedContentText: ngen,
                                hydratedFooterText: `ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍʀ.ᴠ`,
                                hydratedButtons: [{
                                    urlButton: {
                                        displayText: 'ᴊᴀʏᴀʀᴀᴛʜɴᴇ ғᴜɴᴇʀᴀʟ',
                                        url: 'test'
                                    }
                                }, {
                                    callButton: {
                                    displayText: 'ᴄᴀʟʟ ᴊᴀʏᴀʀᴀᴛʜɴᴇ',
                                    phoneNumber: '+94 777-611-095'
                                    
                                }
                                }, {
                                    quickReplyButton: {
                                        displayText: 'ᴄᴏꜰꜰɪɴꜱ',
                                        id: `${prefix}coffinlist`
                                    }
                                    }, {
                                    quickReplyButton: {
                                        displayText: 'ᴘᴀᴄᴋᴀɢᴇꜱ',
                                        id: `${prefix}packages`
                                    }
                                    
                                   
                                    }, {
                                    quickReplyButton: {
                                        displayText: 'ᴛᴇʀᴍꜱ ᴀɴᴅ ᴀʙᴏᴜᴛ ᴜꜱ',
                                        id: `${prefix}about`
                                    }
                                }]
                            }
                        }
                    }), { userJid: m.chat, quoted: m })
                      JfBotMd.relayMessage(m.chat, template.message, { messageId: template.key.id } ,{ quoted: m } )
                }
    
    const devsound = fs.readFileSync('./Media/menu.mp3')
            JfBotMd.sendMessage(m.chat, { audio: devsound, mimetype: 'audio/mp4', ptt: true, quoted: m })
    
                 break



case 'about' :





about = `❖ ᴊꜰ ᴄᴏꜰꜰɪɴ ʙᴏᴛ

*ʙᴀꜱᴇ - ʜɪꜱᴏᴋᴀ
*ᴄʀᴇᴀᴛᴏʀ - ᴊᴀʏᴀʀᴀᴛʜɴᴇ_ᴛᴇᴄʜɴɪᴄᴀʟ
*ᴅɪʀᴇᴄᴛᴏʀ - ᴍʀ.ᴠ

ᴛʜᴀɴᴋꜱ ᴛᴏ -

*ᴅɪᴋᴀ ᴀʀᴅɴᴛ ꜰᴏʀ ʙᴀꜱᴇ
*ᴍʀ.ᴠ ꜰᴏʀ ᴄᴏꜰꜰɪɴꜱ,ᴘᴀᴄᴋᴀɢᴇꜱ
*ᴍᴇ ꜰᴏʀ ?
*ɢᴀɢᴀɴᴀ ꜰᴏʀ ʟᴏᴠᴇ
*ᴅɪʟꜱʜᴀɴ
*ɴɪᴍᴇꜱʜ
*ᴊᴀʏᴀꜱʜᴀɴ
*ᴋʀɪꜱʜᴀɴ
*ᴅɢxᴇᴏɴ (ᴄʜᴇᴇᴍꜱ_ᴍᴅ)

↬ ʟɪꜰᴇ ɪꜱ ᴛᴏᴏ ꜱʜᴏʀᴛ ,

*ɢᴇᴛ ᴄᴏꜰꜰɪɴ ɴᴏᴡ ᴀɴᴅ ꜰᴇᴇʟ ᴛʜᴇ ʟɪꜰᴇ

ᴛʜᴀɴᴋꜱ.

- ᴊᴀʏᴀʀᴀᴛʜɴᴇ ᴛᴇᴄʜɴɪᴄᴀʟ`


JfBotMd.sendMessage(m.chat, { text: about } , {quoted: m} )






                 break



                 case 'පොටෝ' : {
                    if (!quoted) return reply(`Reply Image`)
                    if (!/webp/.test(mime)) reply(`Reply Sticker With Caption *${prefix + command}*`)
                    reply(mess.wait)
                    let media = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
                    let ran = await getRandom('.png')
                    exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                        fs.unlinkSync(media)
                        if (err) reply(err)
                        let buffer = fs.readFileSync(ran)
                        XeonBotInc.sendMessage(m.chat, { image: buffer }, { quoted: m })
                        fs.unlinkSync(ran)
                    })
                }
                break
                case 'වීඩියෝ' : {
                    if (!quoted) reply(`Reply Image`)
                    if (!/webp/.test(mime)) return replay(`Reply Sticker With Caption *${prefix + command}*`)
                    reply(mess.wait)
            let { webp2mp4File } = require('./lib/uploader')
                    let media = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
                    let webpToMp4 = await webp2mp4File(media)
                    await XeonBotInc.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                    await fs.unlinkSync(media)
                }






                 break


                 case 'ස්ටිකර්' : { 
                    
                     //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                     if (!quoted) return reply2 `*Reply Video/Image With Caption* ${prefix + command}`
        
                     if (text) global.packname1 = text.split("/")[0] 
                             if (text)     global.author1 = text.split("/")[1]
        
                              if (!text) global.packname1 = pushname
                             if (!text) global.author1 = `ᴊᴀʏᴀʀᴀᴛʜɴᴇ_ᴛᴇᴄʜɴɪᴄᴀʟ`
        
        
                        if (/image/.test(mime)) {
                        let media = await quoted.download()
                        let encmedia = await JfBotMd.sendImageAsSticker(m.chat, media, m, { packname: global.packname1, author: global.author1 })
                        await fs.unlinkSync(encmedia)
                    } else if (/video/.test(mime)) {
                        if ((quoted.msg || quoted).seconds > 11) return m.reply('*Maximum 10 seconds!*')
                        let media = await quoted.download()
                        let encmedia = await JfBotMd.sendVideoAsSticker(m.chat, media, m, { packname: global.packname1, author: global.author1})
                        await fs.unlinkSync(encmedia)
                    } else {
                        return reply2 `*Send Image/Video With Caption ${prefix + command}\nDuration 1-9 Seconds*`
                        }
                    }
                    
                    
                    
                    
                    
                    break





                    case 'කික්': { 

                        JfBotMd.sendMessage(m.chat, { react: { text: `☠️`, key: m.key }})
                        
                        if (!m.isGroup) return reply(mess.group)

                        if (m.mentionedJid[0] === `${botNumber}@whatsapp.net` ) return reply (`you cannot remove bot :-)`)
                        if (m.quoted.sender === `${botNumber}@whatsapp.net` ) return reply (`you cannot remove bot :-)`)
                        if (!isAdmins) return replay(`${mess.admin}`)

                                if (!isBotAdmins) return reply2(mess.botAdmin)
                                if (!isAdmins) return reply2(mess.admin)
                        let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
                        await JfBotMd.groupParticipantsUpdate(m.chat, [users], 'remove')
            }
            break


case 'urt_report_post' : case 'urt_report_post_text' : {

    JfBotMd.sendMessage(m.chat, { react: { text: `🇱🇰`, key: m.key }})


moment.tz.setDefault("Asia/Colombo").locale("id");



            numberx = text.split("/")[0] 
            reason = text.split("/")[1]

           if (!numberx ) return reply(`Please enter Victim Number Before the "/"\n\n(ex : ${command} 94778115292/Bot කෙනෙකුට අතවර කිරීම ) `)
           if (!numberx ) return reply(`Please enter Reason after the "/"\n\n(ex : ${command} 94778115292/Bot කෙනෙකුට අතවර කිරීම ) `)

          d = `${moment.tz('Asia/Colombo').format('YYMMDD')}`


let txtx = `ᴛᴏᴅᴀʏ ᴜʀᴛ ʀᴇᴘᴏʀᴛɪɴɢ ᴘᴏsᴛ

●ʀᴇᴘᴏʀᴛ ɴᴜᴍʙᴇʀ :- wa.me/${numberx}

●හේතුව :- ${reason}

●සාක්ෂි ඕනි අය මගෙ ඉන්බොක්ස් ඉල්ලගන්න☝️

●ʀᴇᴘᴏʀᴛ  කරලා මගෙ ඉන්බොක්ස් sᴄʀᴇᴇɴ sʜᴏᴛ දාන්න 

●ᴜʀᴛ ʀᴇᴘᴏʀᴛɪɴɢ ᴛᴇᴀᴍ   එකෙ ᴀᴅᴍɪɴ කෙනෙකු විමට දන හැම ɴᴜᴍʙᴇʀ  එකකටම ʀᴇᴘᴏʀᴛ කරන්න ඉදිරියෙදි ᴀᴄᴛɪᴠᴇ ᴍᴇᴍᴇʙᴇʀs  ටිකව ᴀᴅᴍɪɴ  බලතල ලබා දෙනවා 😎
 
ɪᴅ ${d+numberx}

ɪғ ʏᴏᴜ ᴀʀᴇ ɢᴜɪʟᴛʏ ᴇxᴘᴇᴄᴛ ᴜs`


if (command === `urt_report_post` ) {

JfBotMd.sendMessage(m.chat, { image: { url: './Media/Urt/urt_report_post.jpg' }, caption: txtx }, { quoted: m }) }

if (command === `urt_report_post_text` ) {

JfBotMd.sendMessage(m.chat, { text : txtx }, { quoted: m })


}



}


                 break

    //coffin_list

case 'coffinlist' :

    


    var image = './Media/jf.jpg'

    let sections = []   
    let listmenu = [`c_wood`,`boat_c`,`car_c`,`c_bed`,`c_silver`,`c_egypt`,`c_gaming`,`c_glass`,`c_gold`,`c_insect`,`c_royal`]
    let listmenuu = [`⚰️ ᴊᴀʏᴀʀᴀᴛʜɴᴇ ᴡᴏᴏᴅ ᴄᴏꜰꜰɪɴ`,`⚰️ ᴊᴀʏᴀʀᴀᴛʜɴᴇ ᴄᴏꜰꜰɪɴ ʙᴏᴀᴛ`,`⚰️ ᴊᴀʏᴀʀᴀᴛʜɴᴇ ᴄᴏꜰꜰɪɴ ᴄᴀʀ`,`⚰️ ᴊᴀʏᴀʀᴀᴛʜɴᴇ ᴄᴏꜰꜰɪɴ ʙᴇᴅ`,`⚰️ ᴊᴀʏᴀʀᴀᴛʜɴᴇ ꜱɪʟᴠᴇʀ ᴄᴏꜰꜰɪɴ`,`⚰️ ᴊᴀʏᴀʀᴀᴛʜɴᴇ ᴇɢʏᴘᴛ ᴄᴏꜰꜰɪɴ`,`⚰️ ᴊᴀʏᴀʀᴀᴛʜɴᴇ ɢᴀᴍɪɴɢ ᴄᴏꜰꜰɪɴ `,`⚰️ ᴊᴀʏᴀʀᴀᴛʜɴᴇ ɢʟᴀꜱꜱ ᴄᴏꜰꜰɪɴ `,`⚰️ ᴊᴀʏᴀʀᴀᴛʜɴᴇ ɢᴏʟᴅ ᴄᴏꜰꜰɪɴ`,`⚰️ ᴊᴀʏᴀʀᴀᴛʜɴᴇ ɪɴꜱᴇᴄᴛ ᴄᴏꜰꜰɪɴ`,`⚰️ ᴊᴀʏᴀʀᴀᴛʜɴᴇ ʀᴏʏᴀʟ ᴄᴏꜰꜰɪɴ  `]
            let nombor = 1
            let startnum = 0
            
            for (let x of listmenu) {
            const list = {title: 'ᴊᴀʏᴀʀᴀᴛʜɴᴇ ᴄᴏꜰꜰɪɴ ' + nombor++,
            rows: [
               {
                title: `${listmenuu[startnum++]}`,
                
                rowId: `${prefix}${x}`
    }, 
      ]
    }
    sections.push(list)   
    }
    const sendm =  JfBotMd.sendMessage(
    m.chat, 
   {

text: `╔═══════════៚
║  ʜᴇʟʟᴏ ꜱɪʀ "${pushname}"*
║
║  ʜᴀᴘᴘʏ ꜰᴜɴᴇʀᴀʟ ʟɪꜰᴇ !
║
║  ɪ'ᴀᴍ ᴊᴀʏᴀʀᴀᴛʜɴᴇ ᴄᴏꜰꜰɪɴ ʙᴏᴛ
║
║  ◔ ᴅɪʀᴇᴄᴛᴇᴅ ʙʏ - ɱɾ.ʋ
║  ◔ ᴄᴀʟʟ ᴊᴀʏᴀʀᴀᴛʜɴᴇ - 0777611095
║
╚═══════════៚` ,










footer: `ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍʀ.ᴠ`,
title: `~ *⚰️ ᴊᴀʏᴀʀᴀᴛʜɴᴇ ᴄᴏꜰꜰɪɴ ʟɪꜱᴛ* `,
jpegThumbnail: image,
buttonText: "ᴄʟɪᴄᴋ ʜᴇʀᴇ",
sections
}, { quoted : m })

break

//coffins


case 'c_wood' : case 'boat_c' : case 'car_c' : case 'c_bed' : case 'c_silver' : case 'c_egypt' : case 'c_gaming' : case 'c_glass' : case 'c_gold' : case 'c_insect' : case 'c_royal' : {

       JfBotMd.sendMessage(m.chat, { react: { text: `💀`, key: m.key }})
       

let txtx = `undefined`



            if (command === `c_wood`) {

                
txtx = `⚰️ ᴊᴀʏᴀʀᴀᴛʜɴᴇ ᴡᴏᴏᴅ ᴄᴏꜰꜰɪɴ
                
❖ ᴍᴀᴋᴇ ʙʏ ᴏʀɪɢɪɴᴀʟ ᴛᴇᴀᴋ ᴡᴏᴏᴅ
                
❖ ᴄᴏᴍꜰᴏʀᴛᴀʙʟᴇ ɪɴꜱɪᴅᴇ
                
❖ ꜱᴘᴏɴꜱᴇʀᴅ ʙʏ ʀɪꜱʜᴀʀᴅ ʙᴀᴅʜɪᴜᴅʜɪɴ

❖ ᴄᴏᴍꜰᴏʀᴛᴀʙʟᴇ ɪɴꜱɪᴅᴇ
                       
❖ ꜱᴘᴏɴꜱᴇʀᴅ ʙʏ ᴠᴏɢᴜᴇ ᴊᴇᴡᴇʟʟᴇʀꜱ
                       
🪙 ᴏɴʟʏ ʀꜱ. 35,000,000`
                   
                        
}

                            if (command === `car_c`) {

 txtx = `⚰️ ᴊᴀʏᴀʀᴀᴛʜɴᴇ ᴄᴏꜰꜰɪɴ ᴄᴀʀ

❖ ʏᴏᴜ ᴄᴀɴ ᴄʜᴏᴏꜱᴇ ᴀɴʏ ᴄᴏʟᴏᴜʀ
                               
❖ ᴄᴏᴍꜰᴏʀᴛᴀʙʟᴇ ɪɴꜱɪᴅᴇ 
                               
❖ ꜰʀᴇᴇ ᴘᴇᴛʀᴏʟ ꜰᴏʀ 1 ᴡᴇᴇᴋ
                               
🪙 ᴏɴʟʏ ʀꜱ. 8,000,000`
                                
                                
 }

                                    if (command === `c_bed`) {

 
                                        txtx = `⚰️ ᴊᴀʏᴀʀᴀᴛʜɴᴇ ᴄᴏꜰꜰɪɴ ʙᴇᴅ

 ❖ ᴄᴏᴍꜰᴏʀᴛᴀʙʟᴇ ᴍᴇᴛʀᴇꜱ 

 ❖ ꜱᴘʀɪɴɢ ᴍᴇᴛʀᴇꜱ

 ❖ ꜱᴘᴏɴꜱᴇʀᴅ ʙʏ ᴅᴀᴍʀᴏ

 🪙 ᴏɴʟʏ ʀꜱ. 1,000,000`

                                    }

                                    if (command === `c_gold`) {

 
                                        txtx = `⚰️ ᴊᴀʏᴀʀᴀᴛʜɴᴇ ɢᴏʟᴅ ᴄᴏꜰꜰɪɴ

 ❖ ᴍᴀᴋᴇ ʙʏ 24 ᴄᴀʀʀᴏᴛ ɢᴏʟᴅ

 ❖ ᴄᴏᴍꜰᴏʀᴛᴀʙʟᴇ ɪɴꜱɪᴅᴇ

 ❖ ꜱᴘᴏɴꜱᴇʀᴅ ʙʏ ᴠᴏɢᴜᴇ ᴊᴇᴡᴇʟʟᴇʀꜱ

 🪙 ᴏɴʟʏ ʀꜱ. 35,000,000`

                                    }
                                        
                             if (command === `c_silver`) {


                                                
                                                
                                                txtx = `⚰️ ᴊᴀʏᴀʀᴀᴛʜɴᴇ ꜱɪʟᴠᴇʀ ᴄᴏꜰꜰɪɴ

 ❖ ᴍᴀᴋᴇ ʙʏ ᴏʀɪɢɪɴᴀʟ ꜱɪʟᴡᴇʀ

❖ ᴄᴏᴍꜰᴏʀᴛᴀʙʟᴇ ɪɴꜱɪᴅᴇ

❖ ꜰʀᴇᴇ ꜱɪʟᴠᴇʀ ʟᴀᴍᴘ

🪙 ᴏɴʟʏ ʀꜱ. 15,000,000`
                                                
                                                
                                                    }

                                                    if (command === `c_egypt`) {


                                                        
                                                        
                                                        txtx = `⚰️ ᴊᴀʏᴀʀᴀᴛʜɴᴇ ᴇɢʏᴘᴛ ᴄᴏꜰꜰɪɴ 

 ❖ ᴍᴀᴋᴇ ʙʏ 18 ᴄᴀʀʀᴏᴛ ɢᴏʟᴅ 

 ❖ ꜰʀᴇᴇ ᴍᴜᴍᴍʏ ᴇᴍʙᴀʟᴍ 

 ❖ ᴅɪꜱᴄᴏᴜɴᴛ ꜰᴏʀ ᴇɢʏᴘᴛ ᴄʟᴏᴛʜᴇꜱ 

 🪙 ᴏɴʟʏ ʀꜱ. 10,000,000`
                                                        
                                                        
                                                            }

                                                            if (command === `c_gaming`) {


                                                                
                                                                
txtx = `⚰️ ᴊᴀʏᴀʀᴀᴛʜɴᴇ ɢᴀᴍɪɴɢ ᴄᴏꜰꜰɪɴ 

❖ ꜰʀᴇᴇ ɢᴀᴍɪɴ ᴘᴄ ᴡɪᴛʜ ɪɴᴛᴇʀɴᴇᴛ ᴄᴏɴɴᴇᴄᴛɪᴏɴ 

❖ ꜰʀᴇᴇ ᴘʀᴇᴍɪᴜᴍ ɢᴀᴍᴇ ᴀᴄᴏᴜɴᴛꜱ 

❖ 24×7 ᴘᴏᴡᴇʀ ꜱᴜᴘᴘʟʏ 

🪙 ᴏɴʟʏ ʀꜱ. 7,500,000`
                                                                
                                                                
                                                                    }

                                                             

                                                                    if (command === `boat_c`) {


                                                                
                                                                
                                                                        txtx = `⚰️ ᴊᴀʏᴀʀᴀᴛʜɴᴇ ᴄᴏꜰꜰɪɴ ʙᴏᴀᴛ

 ❖ ᴡᴀᴛᴇʀ ᴘʀᴏᴏꜰ ɪɴꜱɪᴅᴇ 

 ❖ ᴄᴏᴍꜰᴏʀᴛᴀʙʟᴇ ɪɴꜱɪᴅᴇ

 ❖ 1 ʏᴇᴀʀ ᴡᴀʀʀᴀɴᴛʏ

 🪙 ᴏɴʟʏ ʀꜱ. 5,000,000`
          
                                                                    }


                                                                    if (command === `c_glass`) {


                                                                
                                                                
                                                                        txtx = `⚰️ ᴊᴀʏᴀʀᴀᴛʜɴᴇ ɢʟᴀꜱꜱ ᴄᴏꜰꜰɪɴ 

 ❖ 75% ᴍᴀᴋᴇ ʙʏ ɢʟᴀꜱꜱ 

 ❖ 2 ᴍɪɴᴜᴛᴇ ᴡᴀʀʀᴀɴᴛʏ 

 ❖ ꜱᴘᴏɴꜱᴇʀᴅ ʙʏ ᴠɪꜱɪᴏɴ ᴄᴀʀᴇ 

 🪙 ᴏɴʟʏ ʀꜱ. 500,000`
                                                                                                                                        
                                                                                                                                                                                           }                                                                                                                       
                                                                                                                                        



if (command === `c_insect`) {


                                                                
                                                                
                                                                       txtx = `⚰️ ᴊᴀʏᴀʀᴀᴛʜɴᴇ ɪɴꜱᴇᴄᴛ ᴄᴏꜰꜰɪɴ 


 ❖ ʏᴏᴜ ᴄᴀɴ ɢᴇᴛ ᴀɴʏ ꜱɪᴢᴇꜱ ᴄᴏꜰꜰɪɴ 

 ❖ ᴍᴀᴋᴇ ʙʏ ᴏʀɪɢɪɴᴀʟ ᴊᴀᴄᴋ ᴡᴏᴏᴅ 

 ❖ 2 ʏᴇᴀʀ ᴡᴀʀʀᴀɴᴛʏ 

 🪙 ᴏɴʟʏ ʀꜱ. 5000`




}



if (command === `c_royal`) {


                                                                
                                                                
    txtx = `⚰️ ᴊᴀʏᴀʀᴀᴛʜɴᴇ ʀᴏʏᴀʟ ᴄᴏꜰꜰɪɴ 

 ❖ ᴍᴀᴋᴇ ʙʏ ᴍᴇᴛᴇʟ ᴡɪᴛʜ ɢᴏʟᴅ ᴅᴇᴄᴏʀᴀᴛɪᴏɴꜱ 

 ❖ ᴅɪꜱᴄᴏᴜɴᴛ ꜰᴏʀ ʀᴏʏᴀʟ ᴄʟᴏᴛʜᴇꜱ 

 ❖ ꜰʀᴇᴇ ʀᴏʏᴀʟ ᴍᴜꜱɪᴄ ᴛᴇᴀᴍ 

 🪙 ᴏɴʟʏ ʀꜱ. 2,500,000`




}






img = `./Media/Coffins/${command}.jpg`
                                                                                                


let buttons = [
                
                    
    {buttonId: `order ${command}`, buttonText: {displayText: `ᴏʀᴅᴇʀ ɴᴏᴡ`}, type: 1},
    
   
]

let buttonMessage = {
    image: { url: img },
    caption: txtx ,
    footer:`ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍʀ.ᴠ`,
    buttons: buttons,
    headerType: 4
}
JfBotMd.sendMessage(m.chat, buttonMessage, { quoted: m })





}


// packages



break


case 'r': {
   
        
            let text = "";
            let i = 0;
            while (i < 10) {
                text += "text " + i;

        await JfBotMd.sendText(m.chat, `test 1` , m)


            }

        }



break


// packages

case 'packages' :

    

    let me = m.sender
            
    let txt = `╔═══════════៚
║ꜱᴇʟᴇᴄᴛ ʏᴏᴜʀ ᴘᴀᴄᴋᴀɢᴇꜱ ᴛʏᴘᴇ*
╚═══════════៚`
    let ments = [me]
    let buttons = [
        {buttonId: `s_packages`, buttonText: {displayText: `ꜱᴜɪᴄɪᴅᴇ`}, type: 1},
        {buttonId: `f_packages`, buttonText: {displayText: `ꜰᴜɴᴇʀᴀʟ`}, type: 1},
        
    ]
        await JfBotMd.sendButtonText(m.chat, buttons, txt, `ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍʀ.ᴠ`, m, {mentions: ments})
    
    
    
    break 


    case 's_packages' : {


        var image = './Media/jf.jpg'
       
           let sections = []   
           let listmenu = [`s_vac`,`s_tab`,`s_drink`,`s_rope`,`s_ele`,`s_macc`]
            let listmenuu = [`❖ ᴊᴀʏᴀʀᴀᴛʜɴᴇ ꜱᴜɪᴄɪᴅᴇ ᴠᴀᴄᴄɪɴᴇ`,`❖ ᴊᴀʏᴀʀᴀᴛʜɴᴇ ꜱᴜɪᴄɪᴅᴇ ᴛᴀʙʟᴇᴛ`,`❖ ᴊᴀʏᴀʀᴀᴛʜɴᴇ ᴘᴏɪꜱᴏɴ ᴅʀɪɴᴋ`,`❖ ᴊᴀʏᴀʀᴀᴛʜɴᴇ ꜱᴜɪᴄɪᴅᴇ ʀᴏᴘᴇ`,`❖ ᴊᴀʏᴀʀᴀᴛʜɴᴇ ꜱᴜɪᴄɪᴅᴇ ᴇʟᴇᴄᴛɪᴄ ᴄʜᴀɪʀ`,`❖ ᴊᴀʏᴀʀᴀᴛʜɴᴇ ꜱᴜɪᴄɪᴅᴇ ᴍᴀᴄʜɪɴᴇ`]
           let nombor = 1
                   let startnum = 0
                   
                   for (let x of listmenu) {
                   const list = {title: 'ᴊᴀʏᴀʀᴀᴛʜɴᴇ ꜱᴜɪᴄɪᴅᴇ ᴘᴀᴄᴋᴀɢᴇ ' + nombor++,
                   rows: [
                      {
                       title: `${listmenuu[startnum++]}`,
                       
                       rowId: `${prefix}${x}`
           }, 
             ]
           }
           sections.push(list)   
           }
           const sendm =  JfBotMd.sendMessage(
           m.chat, 
          {
       
       text: `╔═══════════៚
║  ʜᴇʟʟᴏ ꜱɪʀ "${pushname}"*
║
║  ʜᴀᴘᴘʏ ꜰᴜɴᴇʀᴀʟ ʟɪꜰᴇ !
║
║  ɪ'ᴀᴍ ᴊᴀʏᴀʀᴀᴛʜɴᴇ ᴄᴏꜰꜰɪɴ ʙᴏᴛ
║
║  ◔ ᴅɪʀᴇᴄᴛᴇᴅ ʙʏ - ɱɾ.ʋ
║  ◔ ᴄᴀʟʟ ᴊᴀʏᴀʀᴀᴛʜɴᴇ - 0777611095
║
╚═══════════៚` ,
       

       
       footer: `ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍʀ.ᴠ`,
       title: `~*☠️ ᴊᴀʏᴀʀᴀᴛʜɴᴇ ꜱᴜɪᴄɪᴅᴇ ᴘᴀᴄᴋᴀɢᴇꜱ*`,
       jpegThumbnail: image,
       buttonText: "ᴄʟɪᴄᴋ ʜᴇʀᴇ",
       sections
       }, { quoted : m })
       
       
       }
       
       
       
       break



    // suicide packages


case 's_vac' : case 's_tab' : case 's_drink' : case 's_rope' : case 's_ele' : case 's_macc' : {

    JfBotMd.sendMessage(m.chat, { react: { text: `🪦`, key: m.key }})

    let txtx = `undefind`

    
    if (command === `s_vac`) { txtx =`🪦 ᴊᴀʏᴀʀᴀᴛʜɴᴇ ꜱᴜɪᴄɪᴅᴇ ᴠᴀᴄᴄɪɴᴇ 

 ❖ ɴᴏ ᴀɴʏ ᴘᴀɪɴ 

 ❖ ᴄᴏᴏʟ ʏᴏᴜʀ ʙᴏᴅʏ ᴀꜰᴛᴇʀ ᴛʜᴇ ᴠᴀᴄᴄɪɴᴀᴛᴇᴅ 

 ❖ ᴅɪꜱᴄᴏᴜɴᴛ ꜰᴏʀ ᴏᴜʀ ꜰᴜɴᴇʀᴇʟ ᴘᴀᴄᴋᴀɢᴇ ᴏʀ ᴄᴏꜰꜰɪɴ 

 🪙 ᴏɴʟʏ ʀꜱ. 5,500` }
    if (command === `s_tab`) { txtx =`🪦 ᴊᴀʏᴀʀᴀᴛʜɴᴇ ꜱᴜɪᴄɪᴅᴇ ᴛᴀʙʟᴇᴛ 

 ❖ ɴᴏ ᴀɴʏ ᴘᴀɪɴ 

 ❖ ᴛᴀꜱᴛʏ ꜰʟᴀᴠᴏᴜʀᴇᴅ ɪɴ ᴛᴀʙʟᴇᴛ 

 ❖ ᴅɪꜱᴄᴏᴜɴᴛ ꜰᴏʀ ɴᴇxᴛ ꜱᴜɪᴄɪᴅᴇ ᴛᴀʙʟᴇᴛ 

 🪙 ᴏɴʟʏ ʀꜱ. 1,550` }
    if (command === `s_drink`) { txtx =`🪦 ᴊᴀʏᴀʀᴀᴛʜɴᴇ ᴘᴏɪꜱᴏɴ ᴅʀɪɴᴋ 

 ❖ ɴᴏ ᴀɴʏ ᴘᴀɪɴ 

 ❖ ꜱᴛᴀᴡʙᴇʀʀʏ ꜰʟᴀᴠᴏᴜʀ ɪɴ ᴅʀɪɴᴋ 

 ❖ ʙᴇᴀᴜᴛɪꜰᴜʟʟ ɢʟᴀꜱꜱ ʙᴏᴛᴛʟᴇ 

 🪙 ᴏɴʟʏ ʀꜱ. 3,420` }
    if (command === `s_rope`) { txtx =`🪦 ᴊᴀʏᴀʀᴀᴛʜɴᴇ ꜱᴜɪᴄɪᴅᴇ ʀᴏᴘᴇ 

 ❖ ᴠᴇʀʏ ꜱʀᴏɴɢ ʀᴏᴘᴇ 

 ❖ ᴍᴀᴋᴇ ʙʏ ᴏʀɪɢɪɴᴀʟ ᴄᴀᴛ ꜱᴋɪɴ 

 ❖ ᴅɪꜱᴄᴏᴜɴᴛ ꜰᴏʀ ɴᴇxᴛ ʀᴏᴘᴇ 

 🪙 ᴏɴʟʏ ʀꜱ. 6,880` }
    if (command === `s_ele`) { txtx =`🪦 ᴊᴀʏᴀʀᴀᴛʜɴᴇ ꜱᴜɪᴄɪᴅᴇ ᴇʟᴇᴄᴛʀɪᴄ ᴄʜᴀɪʀ 

 ❖ ᴄᴏᴏʟ ʏᴏᴜʀ ʙᴏᴅʏ ᴏɴ ᴇʟᴇᴄᴛʀɪᴄ ᴍᴀꜱꜱᴀɢᴇ 

 ❖ ɴᴏ ᴀɴʏ ᴘᴀɪɴ 

 ❖ ᴅɪꜱᴄᴏᴜɴᴛ ꜰᴏʀ ɴᴇxᴛ ᴛɪᴍᴇ 

 🪙 ᴜꜱᴇ ꜰᴏʀ ᴏɴᴇ ᴛɪᴍᴇ ᴏɴʟʏ ʀꜱ. 15,450` }  
    if (command === `s_macc`) { txtx =`🪦 ᴊᴀʏᴀʀᴀᴛʜɴᴇ ꜱᴜɪᴄɪᴅᴇ ᴍᴀꜱʜɪɴᴇ 

 ❖ 100% ɴᴏ ᴀɴʏ ᴘᴀɪɴ 

 ❖ ᴄᴀɴ ᴘʟᴀʏ ʏᴏᴜʀ ꜰᴀᴠᴏᴜʀɪᴛᴇ ꜱᴏɴɢ ɪɴ ʏᴏᴜʀ ʟᴀꜱᴛ ᴛɪᴍᴇ 

 ❖ ᴅɪꜱᴄᴏᴜɴᴛ ꜰᴏʀ ᴏᴜʀ ꜰᴜɴᴇʀᴇʟ ᴘᴀᴄᴋᴀɢᴇ ᴏʀ ᴄᴏꜰꜰɪɴ 

 🪙 ᴜꜱᴇ ꜰᴏʀ ᴏɴᴇ ᴛɪᴍᴇ ᴏɴʟʏ ʀꜱ. 55,800` }
    
    


img = `./Media/Suicide/${command}.jpg`
                


let buttons = [
                
                    
    {buttonId: `order ${command}`, buttonText: {displayText: `ᴏʀᴅᴇʀ ɴᴏᴡ`}, type: 1},
    
   
]

let buttonMessage = {
    image: { url: img },
    caption: txtx ,
    footer:`ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍʀ.ᴠ`,
    buttons: buttons,
    headerType: 4
}
JfBotMd.sendMessage(m.chat, buttonMessage, { quoted: m })





}





break


// f_packages


case 'f_packages' : {


    


 var image = './Media/jf.jpg'

    let sections = []   
    let listmenu = [`f_gold`, `f_silver`,`f_metal` ]
     let listmenuu = [`❖ ɢᴏʟᴅ`,`❖ ꜱɪʟᴠᴇʟ`,`❖ ᴍᴇᴛᴀʟ`]
    let nombor = 1
            let startnum = 0
            
            for (let x of listmenu) {
            const list = {title: 'ᴊᴀʏᴀʀᴀᴛʜɴᴇ ꜰᴜɴᴇʀᴀʟ ᴘᴀᴄᴋᴀɢᴇ* ' + nombor++,
            rows: [
               {
                title: `${listmenuu[startnum++]}`,
                
                rowId: `${prefix}${x}`
    }, 
      ]
    }
    sections.push(list)   
    }
    const sendm =  JfBotMd.sendMessage(
    m.chat, 
   {

text: `╔═══════════៚
║  ʜᴇʟʟᴏ ꜱɪʀ "${pushname}"*
║
║  ʜᴀᴘᴘʏ ꜰᴜɴᴇʀᴀʟ ʟɪꜰᴇ !
║
║  ɪ'ᴀᴍ ᴊᴀʏᴀʀᴀᴛʜɴᴇ ᴄᴏꜰꜰɪɴ ʙᴏᴛ
║
║  ◔ ᴅɪʀᴇᴄᴛᴇᴅ ʙʏ - ɱɾ.ʋ
║  ◔ ᴄᴀʟʟ ᴊᴀʏᴀʀᴀᴛʜɴᴇ - 0777611095
║
╚═══════════៚` ,





footer: `ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍʀ.ᴠ`,
title: `~*🪦 ᴊᴀʏᴀʀᴀᴛʜɴᴇ ꜰᴜɴᴇʀᴀʟ ᴘᴀᴄᴋᴀɢᴇ*`,
jpegThumbnail: image,
buttonText: "ᴄʟɪᴄᴋ ʜᴇʀᴇ",
sections
}, { quoted : m })


}



break


// funeral packages


case 'f_gold' : case 'f_silver' : {


    JfBotMd.sendMessage(m.chat, { react: { text: `🪦`, key: m.key }})


    let txtx = `undefind`




    if (command === `f_gold`) { txtx =`ᴊᴀʏᴀʀᴀᴛʜɴᴇ ɢᴏʟᴅ ꜰᴜɴᴇʀᴀʟ ᴘᴀᴄᴋᴀɢᴇ

❖ ɢᴏʟᴅ ᴄᴏꜰꜰɪɴ

❖ ᴄᴏꜰꜰɪɴ ᴅᴀɴꜱᴇʀ ᴛᴇᴀᴍ

❖ ꜱʟᴛ-ᴍᴏʙɪᴛᴇʟ ʀᴏᴜᴛᴇʀ

❖ 24×7 ᴘᴏᴡᴇʀ ꜱᴜᴘᴘʟʏ

❖ ɢᴀᴍɪɴɢ ᴘᴄ

❖ ᴀɪʀ ᴄᴏɴᴅɪᴛɪᴏɴʟᴇᴅ

❖ ꜰʀᴇᴇ ꜱᴜɪᴄɪᴅᴇ ᴘᴀᴄᴋᴀɢᴇ
ᴏʀ
❖ ᴅɪꜱᴄᴏᴜɴᴛ ꜰᴏʀ ꜱᴜɪᴄɪᴅᴇ ᴍᴀꜱʜɪɴᴇ


🪙 ᴏɴʟʏ ʀꜱ. 50,000,000.00` }


if (command === `f_silver`) { txtx =`ᴊᴀʏᴀʀᴀᴛʜɴᴇ ꜱɪʟᴡᴇʀ ꜰᴜɴᴇʀᴀʟ ᴘᴀᴄᴋᴀɢᴇ

❖ ꜱɪʟᴡᴇʀ ᴄᴏꜰꜰɪɴ

❖ ᴄᴏꜰꜰɪɴ ᴅᴀɴꜱᴇʀ ᴛᴇᴀᴍ

❖ ᴅɪᴀʟᴏɢ ʀᴏᴜᴛᴇʀ

❖ 22×7 ᴘᴏᴡᴇʀ ꜱᴜᴘᴘʟʏ

❖ ᴀɪʀ ᴄᴏɴᴅɪᴛɪᴏɴʟᴇᴅ

❖ ꜰʀᴇᴇ ꜱᴜɪᴄɪᴅᴇ ᴘᴀᴄᴋᴀɢᴇ
ᴏʀ
❖ ᴅɪꜱᴄᴏᴜɴᴛ ꜰᴏʀ ʏᴏᴜʀ ꜰᴀᴍɪʟʏ ɴᴇxᴛ ᴄᴏꜰꜰɪɴ
 

🪙 ᴏɴʟʏ ʀꜱ. 25,000,000.00 ` }



img = `./Media/Packages/${command}.jpg`
                


let buttons = [
                
                    
    {buttonId: `order ${command}`, buttonText: {displayText: `ᴏʀᴅᴇʀ ɴᴏᴡ`}, type: 1},
    
   
]

let buttonMessage = {
    image: { url: img },
    caption: txtx ,
    footer:`ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍʀ.ᴠ`,
    buttons: buttons,
    headerType: 4
}
JfBotMd.sendMessage(m.chat, buttonMessage, { quoted: m })





}


//metal list


break



case 'f_metal' : {

    JfBotMd.sendMessage(m.chat, { react: { text: `🪦`, key: m.key }})

var image = './Media/jf.jpg'

    let sections = []   
    let listmenu = [`m_upro`,`m_pro`,`m_ulite` , `m_lite`   ]
     let listmenuu = [`• ᴍᴇᴛᴇʟ ᴜʟᴛʀᴀ ᴘʀᴏ ꜰᴜɴᴇʀᴀʟ ᴘᴀᴄᴋᴀɢᴇ`,`• ᴍᴇᴛᴇʟ ᴘʀᴏ ꜰᴜɴᴇʀᴀʟ ᴘᴀᴄᴋᴀɢᴇ`,`• ᴍᴇᴛᴇʟ ᴜʟᴛʀᴀ ʟɪᴛᴇ ꜰᴜɴᴇʀᴀʟ ᴘᴀᴄᴋᴀɢᴇ`,`• ᴍᴇᴛᴇʟ ʟɪᴛᴇ ꜰᴜɴᴇʀᴀʟ ᴘᴀᴄᴋᴀɢᴇ`]
    let nombor = 1
            let startnum = 0
            
            for (let x of listmenu) {
            const list = {title: 'ᴊᴀʏᴀʀᴀᴛʜɴᴇ ᴍᴇᴛᴀʟ ꜰᴜɴᴇʀᴀʟ ᴘᴀᴄᴋᴀɢᴇꜱ ' + nombor++,
            rows: [
               {
                title: `${listmenuu[startnum++]}`,
                
                rowId: `${prefix}${x}`
    }, 
      ]
    }
    sections.push(list)   
    }
    const sendm =  JfBotMd.sendMessage(
    m.chat, 
   {

text: `╔═══════════៚
║  ʜᴇʟʟᴏ ꜱɪʀ "${pushname}"*
║
║  ʜᴀᴘᴘʏ ꜰᴜɴᴇʀᴀʟ ʟɪꜰᴇ !
║
║  ɪ'ᴀᴍ ᴊᴀʏᴀʀᴀᴛʜɴᴇ ᴄᴏꜰꜰɪɴ ʙᴏᴛ
║
║  ◔ ᴅɪʀᴇᴄᴛᴇᴅ ʙʏ - ɱɾ.ʋ
║  ◔ ᴄᴀʟʟ ᴊᴀʏᴀʀᴀᴛʜɴᴇ - 0777611095
║
╚═══════════៚` ,





footer: `ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍʀ.ᴠ`,
title: `~*🪦 ᴍᴇᴛᴀʟ ꜰᴜɴᴇʀᴀʟ ᴘᴀᴄᴋᴀɢᴇꜱ*`,
jpegThumbnail: image,
buttonText: "ᴄʟɪᴄᴋ ʜᴇʀᴇ",
sections
}, { quoted : m })


}







break



case 'm_upro' : case 'm_pro' : case 'm_ulite' : case 'm_lite' : {

    JfBotMd.sendMessage(m.chat, { react: { text: `🪦`, key: m.key }})

    
    
    let txtx = `undefind`




    if (command === `m_upro`) { txtx =`ᴊᴀʏᴀʀᴀᴛʜɴᴇ ᴜʟᴛʀᴀ ᴘʀᴏ ꜰᴜɴᴇʀᴀʟ ᴘᴀᴄᴋᴀɢᴇ

❖ ᴡᴏᴏᴅ ᴄᴏꜰꜰɪɴ ᴡɪᴛʜ ᴍᴇᴛʀᴇꜱꜱ

❖ ᴀɪʀ ᴄᴏɴᴅɪᴛɪᴏɴʟᴇᴅ

❖ 20×7 ᴘᴏᴡᴇʀ ꜱᴜᴘᴘʟʏ

❖ ᴅɪᴀʟᴏɢ ʀᴏᴜᴛᴇʀ

❖ ꜰʀᴇᴇ ꜱᴜɪᴄɪᴅᴇ ᴘᴀᴄᴋᴀɢᴇ


🪙 ᴏɴʟʏ  5,000,000.00` }
    if (command === `m_pro`) { txtx =`ᴊᴀʏᴀʀᴀᴛʜɴᴇ ᴘʀᴏ ꜰᴜɴᴇʀᴀʟ ᴘᴀᴄᴋᴀɢᴇ

❖ ᴡᴏᴏᴅ ᴄᴏꜰꜰɪɴ

❖ ᴀɪʀ ᴄᴏᴅɪᴛɪᴏɴʟᴇᴅ

❖ 18×7 ᴘᴏᴡᴇʀ ꜱᴜᴘᴘʟʏ

❖ ᴅɪᴀʟᴏɢ ʀᴏᴜᴛᴇʀ

❖ ꜰʀᴇᴇ ꜱᴜɪꜱɪᴅᴇ ᴘᴀᴄᴋᴀɢᴇ


🪙 ᴏɴʟʏ 4,000,000.00` }
    if (command === `m_ulite`) { txtx =`ᴊᴀʏᴀʀᴀᴛʜɴᴇ ᴜʟᴛʀᴀ ʟɪᴛᴇ ꜰᴜɴᴇʀᴀʟ ᴘᴀᴄᴋᴀɢᴇ

❖ ᴡᴏᴏᴅ ᴄᴏꜰꜰɪɴ ᴡɪᴛʜ ᴍᴇᴛʀᴇꜱꜱ

❖ ᴀɪʀ ᴄᴏɴᴅɪᴛɪᴏɴʟᴇᴅ

❖ 19×7 ᴘᴏᴡᴇʀ ꜱᴜᴘᴘʟʏ

❖ ᴅɪᴀʟᴏɢ ʀᴏᴜᴛᴇʀ

❖ ꜰʀᴇᴇ ꜱᴜɪꜱɪᴅᴇ ᴘᴀᴄᴋᴀɢᴇ


🪙 ᴏɴʟʏ 4,500,000.00` }
    if (command === `m_lite`) { txtx =`ᴊᴀʏᴀʀᴀᴛʜɴᴇ ʟɪᴛᴇ ꜰᴜɴᴇʀᴀʟ ᴘᴀᴄᴋᴀɢᴇ

❖ ᴡᴏᴏᴅ ᴄᴏꜰꜰɪɴ

❖ ᴀɪʀ ᴄᴏɴᴅɪᴛɪᴏɴʟᴇᴅ

❖ 15×7 ᴘᴏᴡᴇʀ ꜱᴜᴘᴘʟʏ

❖ ᴅɪᴀʟᴏɢ ʀᴏᴜᴛᴇʀ

❖ ꜰʀᴇᴇ ꜱᴜɪꜱɪᴅᴇ ᴘᴀᴄᴋᴀɢᴇ


🪙 ᴏɴʟʏ ʀꜱ. 3,000,000.00` }






img = `./Media/Packages/Metal/${command}.jpg`
                


let buttons = [
                
                    
    {buttonId: `order ${command}`, buttonText: {displayText: `ᴏʀᴅᴇʀ ɴᴏᴡ`}, type: 1},
    
   
]

let buttonMessage = {
    image: { url: img },
    caption: txtx ,
    footer:`ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍʀ.ᴠ`,
    buttons: buttons,
    headerType: 4
}
JfBotMd.sendMessage(m.chat, buttonMessage, { quoted: m })






}

break




case 'යූටියුබ්' : { 

    if (!text) return reply(`Example : ${prefix + command} Gota Gobbaya`)

        let emojis = ['🙂','😏','🤨','🙃','😠','😶‍🌫','😁','🧐','🫠','😐','🥴','😵‍💫','😍','😉','🥲','🥳','🤩','😳']
        var emoji = emojis[Math.floor(Math.random() * emojis.length)]
        
        JfBotMd.sendMessage(m.chat, { react: { text: `${emoji}`, key: m.key }})
                    


        if (!text) return reply(`Example : ${prefix + command} Stay`)

        if (text.includes('?feature=share')) { 
            
            
            var svid = text.replace("shorts/","watch?v=")
        var s2vid = svid.replace("?feature=share","")
        
    
                        
                            const more = String.fromCharCode(8206)
                        
                                        const readmore = more.repeat(4001)
                                            let yts = require("yt-search")
                                        
                                                  
                                            search = await yts(s2vid);
                                            
                                            
                                            
                                            sik = search.videos[0]
                        
                                            
                                            
                                            var   url2 = text
                                        



                                             let thumb = await getBuffer(search.videos[0].thumbnail)
    
    
                        let buttons = [
                            {buttonId: `ytsongzl ${sik.url}`, buttonText: {displayText: 'ᴀᴜᴅɪᴏ'}, type: 1},
                            {buttonId: `ytvideoszl ${sik.url}`, buttonText: {displayText: 'ᴠɪᴅᴇᴏ'}, type: 1},
                            {buttonId: `doctsl ${sik.url}`, buttonText: {displayText: 'ᴅᴏᴄᴜᴍᴇɴᴛ'}, type: 1}
                        ]
                        let buttonMessage = {
                            image: { url: sik.thumbnail },
                            caption: `` ,
                            footer: `╔═══════════៚
║   ❮ ᴊꜰ ʏᴛ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ ❯
║
║   ❖ ${sik.title}
║
║   ❖ ᴅᴜʀᴀᴛɪᴏɴ : ${sik.timestamp}
║   ❖ ᴄʜᴀɴɴᴇʟ : ${sik.author.name}
║   ❖ ᴜᴘʟᴏᴀᴅᴇᴅ : ${sik.ago}
║    
║   ❖ ᴠɪᴇᴡꜱ : ${sik.views}
║   ❖ ᴜʀʟ : ${sik.url}
║
║   ◔ ᴅɪʀᴇᴄᴛᴇᴅ ʙʏ - ɱɾ.ʋ
║   ◔ ᴊᴀʏᴀʀᴀᴛʜɴᴇ_ᴛᴇᴄʜɴɪᴄᴀʟ
║
╚═══════════៚

ᴊᴀʏᴀʀᴀᴛʜɴᴇ_ᴛᴇᴄʜɴɪᴄᴀʟ
`,
                            buttons: buttons,
                            headerType: 4
                        }
                        JfBotMd.sendMessage(m.chat, buttonMessage, { quoted: m })
                        
                    }  

//                    if (text.includes('?feature=sharex')) { //return reply2 (`Use *${prefix}ytshorts* to Download ytshorts`) 
//
//                       let yts = require("yt-search")
//
//                        search = await yts(text)
                            
                            
                            
//                       sik = search.videos[0]


            
//                      xa.Youtube(`${text}`).then(async (data) => {
                 
                  //cap = `
              //YOUTUBE SHORTS▊▊▊*
              
              //*⬤▶━━━━━━━━━2:30*\n\n\n\n*⬤TITLE:* ${data.title}\n*⬤QUALITY:* ${data.medias[0].quality}\n*⬤SIZE:* ${data.medias[0].formattedSize}\n*⬤DURATION* ${data.duration}\n*⬤ID:* ${data.medias[0].cached}\n*⬤LINK:* ${data.url}\n\nProject Nila`
//                         buf = await getBuffer(data.thumbnail)

//                         let buttons = [
//                            {buttonId: `ytsongzl ${data.url}`, buttonText: {displayText: 'ᴀᴜᴅɪᴏ'}, type: 1},
//                            {buttonId: `ytvideoszl ${data.url}`, buttonText: {displayText: 'ᴠɪᴅᴇᴏ'}, type: 1},
//                          {buttonId: `doctsl ${data.url}`, buttonText: {displayText: 'ᴅᴏᴄᴜᴍᴇɴᴛ'}, type: 1}
//                     ]


//                   let buttonMessage = {
//                        image: { url: data.thumbnail },
//                      caption: `×───*${data.title}*───®az

//~JF_BUG BOT
                                               
//↬ ᴅᴜʀᴀᴛɪᴏɴ : ${data.duration}
                                               
//↠ ᴠɪᴅᴇᴏ_ᴜʀʟ : ${data.url}
                                               
//©94778115292-ẉh.lk
                                               
//×──ꜱᴇʟᴇᴄᴛ ꜰɪʟᴇ ᴛʏᴘᴇ──×`,
//                          footer: `JF_BUG BOT`,
//                       buttons: buttons,
//                        headerType: 4
//                     }
//                   JfBotMd.sendMessage(m.chat, buttonMessage, { quoted: m })
               

                
//        }).catch((err) => {
  //              m.reply(`*Failed to download and send media*`)
  //          })


 //       }

     //   else if (!text.includes('?feature=sharex')) {

        else if (!text.includes('?feature=share')) {

            var svid = text.replace("shorts/","watch?v=")
var s2vid = svid.replace("?feature=share","")


        
            const more = String.fromCharCode(8206)
        
                        const readmore = more.repeat(4001)
                            let yts = require("yt-search")
                            
                        
        
                           
        
                            
                            
                            
                            search = await yts(s2vid);
                            
                            
                            
                            sik = search.videos[0]
        
                            
                            
                            
        
                             let thumb = await getBuffer(search.videos[0].thumbnail)


        let buttons = [
            {buttonId: `ytsongzl ${sik.url}`, buttonText: {displayText: 'ᴀᴜᴅɪᴏ'}, type: 1},
            {buttonId: `ytvideoszl ${sik.url}`, buttonText: {displayText: 'ᴠɪᴅᴇᴏ'}, type: 1},
            {buttonId: `doctsl ${sik.url}`, buttonText: {displayText: 'ᴅᴏᴄᴜᴍᴇɴᴛ'}, type: 1}
        ]
        let buttonMessage = {
            image: { url: sik.thumbnail },
            caption: ' ' ,
                            footer: `╔═══════════៚
║   ❮ ᴊꜰ ʏᴛ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ ❯
║
║   ❖ ${sik.title}
║
║   ❖ ᴅᴜʀᴀᴛɪᴏɴ : ${sik.timestamp}
║   ❖ ᴄʜᴀɴɴᴇʟ : ${sik.author.name}
║   ❖ ᴜᴘʟᴏᴀᴅᴇᴅ : ${sik.ago}
║    
║   ❖ ᴠɪᴇᴡꜱ : ${sik.views}
║   ❖ ᴜʀʟ : ${sik.url}
║
║   ◔ ᴅɪʀᴇᴄᴛᴇᴅ ʙʏ - ɱɾ.ʋ
║   ◔ ᴊᴀʏᴀʀᴀᴛʜɴᴇ_ᴛᴇᴄʜɴɪᴄᴀʟ
║
╚═══════════៚

ᴊᴀʏᴀʀᴀᴛʜɴᴇ_ᴛᴇᴄʜɴɪᴄᴀʟ
`,
            buttons: buttons,
            headerType: 4
        }
        JfBotMd.sendMessage(m.chat, buttonMessage, { quoted: m })
        
    }  }
    
    break

    case 'ytsongz' :  case 'ytsongzl':  { 
        





        if (!text) return reply(`Example : ${prefix + command} Stay`)
        
        let { yta } = require('./lib/y2mate')
        

    

let media = await yta(text, '128kbps')
let media2 = Math.floor((2.5 * media.filesize) / 1000)

let me = m.sender
    
    let jawab = `*ꜱᴇʟᴇᴄᴛ ʀᴇꜱᴏʟᴜᴛɪᴏɴ,`
    let ments = [me]
    let buttons = [
            {buttonId: `ytmp3tx ${text} 320kbps`, buttonText: {displayText: `ʜɪɢʜ [${media2} MB]`}, type: 1},
            {buttonId: `ytmp3tx ${text} 128kbps`, buttonText: {displayText: `ʟᴏᴡ [${media.filesizeF}]`}, type: 1},
            
        ]
            await JfBotMd.sendButtonText(m.chat, buttons, jawab, `ᴊᴀʏᴀʀᴀᴛʜɴᴇ_ᴛᴇᴄʜɴɪᴄᴀʟ`,  m, {mentions: ments} )

} 


break


case 'docts' : case 'documentz' : case 'doctsl':  { 


if (!text) return reply(`Example : ${prefix + command} Stay`)
        
let { yta } = require('./lib/y2mate')


let me = m.sender
    
let jawab = `*ꜱᴇʟᴇᴄᴛ ʀᴇꜱᴏʟᴜᴛɪᴏɴ,`
let ments = [me]
let buttons = [
{buttonId: `docytsongzl ${text}`, buttonText: {displayText: `ᴅᴏᴄ ᴀᴜᴅɪᴏ`}, type: 1},
{buttonId: `docytvideoszl ${text}`, buttonText: {displayText: `ᴅᴏᴄ ᴠɪᴅᴇᴏ`}, type: 1},

]
await JfBotMd.sendButtonText(m.chat, buttons, jawab, `ᴊᴀʏᴀʀᴀᴛʜɴᴇ_ᴛᴇᴄʜɴɪᴄᴀʟ`, m, {mentions: ments})


}


break


case 'docytsongz' : case 'docytsongzl': {
        
if (!text) return reply(`Example : ${prefix + command} Stay`)

let { yta } = require('./lib/y2mate')


let quality = args[1] ? args[1] : '128kbps'
let qualitya = args[1] ? args[1] : '320kbps'



let media = await yta(text, quality)
let media2 = Math.floor((2.5 * media.filesize) / 1000)

let me = m.sender

let jawab = `*ꜱᴇʟᴇᴄᴛ ʀᴇꜱᴏʟᴜᴛɪᴏɴ ,`
let ments = [me]
let buttons = [
{buttonId: `docytmp3tx ${text} 320kbps`, buttonText: {displayText: `ʜɪɢʜ [${media2} MB]`}, type: 1},
{buttonId: `docytmp3tx ${text} 128kbps`, buttonText: {displayText: `ʟᴏᴡ [${media.filesizeF}]`}, type: 1},

]
await JfBotMd.sendButtonText(m.chat, buttons, jawab, `ᴊᴀʏᴀʀᴀᴛʜɴᴇ_ᴛᴇᴄʜɴɪᴄᴀʟ`, m, {mentions: ments})

}

break



case 'ytvideosz' : case 'ytvideoszl':  { 

if (!text) return reply(`Example : ${prefix + command} Stay`)


let { ytv } = require('./lib/y2mate')





let media = await ytv(text, '360p')
let media2 = await ytv(text, '720p')
let media3 = await ytv(text, '1080p')


let me = m.sender
    
    let jawab = `*ꜱᴇʟᴇᴄᴛ ʀᴇꜱᴏʟᴜᴛɪᴏɴ ,`
    let ments = [me]
    let buttons = [
            {buttonId: `ytmp4tx ${text} 360p`, buttonText: {displayText: `360P [${media.filesizeF}]`}, type: 1},
            {buttonId: `ytmp4tx ${text} 720p`, buttonText: {displayText: `720P [${media2.filesizeF}]`}, type: 1},
            
            {buttonId: `ytmp4tx ${text} 1080p`, buttonText: {displayText: `1080P [${media3.filesizeF}]`} , type: 1},
            
        ]
            await JfBotMd.sendButtonText(m.chat, buttons, jawab, `ᴊᴀʏᴀʀᴀᴛʜɴᴇ_ᴛᴇᴄʜɴɪᴄᴀʟ`, m, {mentions: ments})

    }



    break


    case 'docytvideoszl':  { 

        if (!text) return reply(`Example : ${prefix + command} Stay`)



        let { ytv } = require('./lib/y2mate')


let media = await ytv(text, '360p')
let media2 = await ytv(text, '720p')
let media3 = await ytv(text, '1080p')


let me = m.sender
    
    let jawab = `*ꜱᴇʟᴇᴄᴛ ʀᴇꜱᴏʟᴜᴛɪᴏɴ ,`
    let ments = [me]
    let buttons = [
            {buttonId: `docytmp4tx ${text} 360p`, buttonText: {displayText: `360P [${media.filesizeF}]`}, type: 1},
            {buttonId: `docytmp4tx ${text} 720p`, buttonText: {displayText: `720P [${media2.filesizeF}]`}, type: 1},
            
            {buttonId: `docytmp4tx ${text} 1080p`, buttonText: {displayText: `1080P [${media3.filesizeF}]`} , type: 1},
            
        ]
            await JfBotMd.sendButtonText(m.chat, buttons, jawab, `ᴊᴀʏᴀʀᴀᴛʜɴᴇ_ᴛᴇᴄʜɴɪᴄᴀʟ`, m, {mentions: ments})

    }

    
    
    break
    

    case 'ytmp3tx': case 'getmusic': case 'ytaudio': case 's2':  { 

      var load = await JfBotMd.sendText(m.chat, `*${pushname} ᴅᴏᴡɴʟᴏᴀᴅɪɴɢ ʏᴏᴜʀ ꜱᴏɴɢ 🎧*` , m)

    let { yta } = require('./lib/y2mate')
        if (!text) return reply(`Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`)
        let quality = args[1] ? args[1] : '128kbps'
        let media = await yta(text, quality)
        let image = './Media/song.jpg'
        if (media.filesize >= 100000 ) return reply('File Over Limit '+util.format(media))
        buf = await getBuffer('https://i.postimg.cc/6q7z48M8/song.jpg')
        var up = await JfBotMd.sendText(m.chat, `*${pushname} ᴜᴘʟᴏᴀᴅɪɴɢ ʏᴏᴜʀ ꜱᴏɴɢ 🎧*` , m) 
    


    JfBotMd.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: "audio/mpeg", fileName: `${media.title}_ᴊꜰ_ᴛᴇᴄʜɴɪᴄᴀʟ.mp3` , quoted : m , contextInfo: { externalAdReply:{title:media.title,body:"ᴊᴀʏᴀʀᴀᴛʜɴᴇ_ᴛᴇᴄʜɴɪᴄᴀʟ",mediaType:"2",thumbnail:buf,mediaUrl:`${text}`}}})
   
     

    }


    break
    
    case 'docytmp3tx' : case 'tgetmusic': case 'tytaudio': { if (!isCreator) return reply('Not Public Yet')
    
        var load = await JfBotMd.sendText(m.chat, `*${pushname} ᴅᴏᴡɴʟᴏᴀᴅɪɴɢ ʏᴏᴜʀ ꜱᴏɴɢ 🎧*` , m)

        let { yta } = require('./lib/y2mate')
            if (!text) return reply(`Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`)
            let quality = args[1] ? args[1] : '128kbps'
            let media = await yta(text, quality)
            let image = `./Media/song.jpg`
            if (media.filesize >= 100000 ) return reply('File Over Limit '+util.format(media))
            buf = await getBuffer('https://i.postimg.cc/6q7z48M8/song.jpg')
            var up = await JfBotMd.sendText(m.chat, `*${pushname} ᴜᴘʟᴏᴀᴅɪɴɢ ʏᴏᴜʀ ꜱᴏɴɢ 🎧*` , m) 
        
        JfBotMd.sendMessage(m.chat, { document: { url: media.dl_link }, mimetype: "audio/mpeg", fileName: `${media.title}_ᴊꜰ_ᴛᴇᴄʜɴɪᴄᴀʟ.mp3` , quoted : m , contextInfo: { externalAdReply:{title:media.title,body:"ᴊᴀʏᴀʀᴀᴛʜɴᴇ_ᴛᴇᴄʜɴɪᴄᴀʟ",mediaType:"2",thumbnail:buf,mediaUrl:`${text}`}}})
       
          
    }

    
    break
    case 'ytmp4tx': case 'getvideo':  { if (!isCreator) return reply('Not Public Yet')
    
    
        var load = await JfBotMd.sendText(m.chat, `*${pushname} ᴅᴏᴡɴʟᴏᴀᴅɪɴɢ ʏᴏᴜʀ ᴠɪᴅᴇᴏ 🎬*` , m)
    
    
        let { ytv } = require('./lib/y2mate')
        if (!text) return reply(`Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`)
        let quality = args[1] ? args[1] : '360p'
        let media = await ytv(text, quality)
        if (media.filesize >= 100000) return reply('File Over Limit '+util.format(media))
        //buf = await getBuffer(media.thumb)
        buf = await getBuffer('https://i.postimg.cc/6q7z48M8/song.jpg')
        let image = "./Media/thumb.png"

        
        var up = await JfBotMd.sendText(m.chat, `*${pushname} ᴜᴘʟᴏᴀᴅɪɴɢ ʏᴏᴜʀ ᴠɪᴅᴇᴏ 🎬*` , m)

       // setTimeout(myFunction, 10000);

     //   function myFunction() {
      //       JfBotMd.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id : load.key.id } }  );
     //     }


        JfBotMd.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}_ᴊꜰ_ᴛᴇᴄʜɴɪᴄᴀʟ.mp4`, caption: global.owners }, { quoted: m }).catch((err) => reply(mess.error))

        
    }
    
    break
    
    case 'docytmp4tx': case 'docytvideotx': { 
    
    
        var load = await JfBotMd.sendText(m.chat, `*${pushname} ᴅᴏᴡɴʟᴏᴀᴅɪɴɢ ʏᴏᴜʀ ᴠɪᴅᴇᴏ 🎬*` , m)
    
    
        let { ytv } = require('./lib/y2mate')
        if (!text) return reply(`Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`)
        let quality = args[1] ? args[1] : '360p'
        let media = await ytv(text, quality)
        if (media.filesize >= 100000) return reply('File Over Limit '+util.format(media))
        buf = await getBuffer(media.thumb)


        var up = await JfBotMd.sendText(m.chat, `*${pushname} ᴜᴘʟᴏᴀᴅɪɴɢ ʏᴏᴜʀ ᴠɪᴅᴇᴏ 🎬*` , m)
        
        
 JfBotMd.sendMessage(m.chat, { document: { url: media.dl_link }, mimetype: "video/mp4", fileName: `${media.title}_ᴊꜰ_ᴛᴇᴄʜɴɪᴄᴀʟ.mp4` , quoted : m , contextInfo: { externalAdReply:{title:media.title,body:"ᴊᴀʏᴀʀᴀᴛʜɴᴇ_ᴛᴇᴄʜɴɪᴄᴀʟ",mediaType:"2",thumbnail:buf,mediaUrl:`${text}`}}})

 
    

}


break

case 'order' : 





let buttonsx = [
                    
    {buttonId: `orderx ${text} `, buttonText: {displayText: `confirm`}, type: 1},                
   
]


JfBotMd.sendButtonText(m.chat, buttonsx, `❖ ᴘʟᴇᴀꜱᴇ ᴄᴏɴꜰɪʀᴍ ʏᴏᴜʀ ᴏʀᴅᴇʀ ,`, `ᴊᴀʏᴀʀᴀᴛʜɴᴇ_ᴛᴇᴄʜɴɪᴄᴀʟ`, m)
 

    


break


case 'orderx':  {







    if(!text) return reply(`Enter The Order\n\nExample: ${command} s_vacc`)



      id = `${m.sender.split("@")[0]}`


    //  var id2 = id.replace("94"," ")
      
   id2 =  Math.floor(( 2 * id ) / 100000000)

   wa = `wa.me/${m.sender.split("@")[0]}`
   wa2 = `${m.sender.split("@")[0]}`

    textx = `╔═══════════៚
║ ❖ ᴄᴜꜱᴛᴏᴍᴇʀ ᴏʀᴅᴇʀ
║
║  ↬ ꜰʀᴏᴍ :  ${pushname}
║  ↬ ᴏʀᴅᴇʀ : ${text}
║   
║  ↬ ɪᴅ : ${wa}
║ 
║ *ɢᴇᴛ ᴀᴄᴛᴏɴ ɴᴏᴡ ,
╚═══════════៚`







    textxx = `*Bug Report From:* wa.me/${m.sender.split("@")[0]}
    Report Message: ${text}`







        
    
   /* ppuser = await JfBotMd.profilePictureUrl(m.sender, 'image')
    
    if (!ppuser) ppuser = 'https://tinyurl.com/yx93l6da' */

   
        // Get Profile Picture User
        try {
            ppuser = await JfBotMd.profilePictureUrl(m.sender, 'image')
        } catch {
            ppuser = 'https://tinyurl.com/yx93l6da'
        }
        
    
    
    
    img = `./Media/Packages/${command}.jpg`
                    
    
    
    let buttons = [
                    
        {buttonId: `${text}`, buttonText: {displayText: `ᴠɪᴇᴡ ᴏʀᴅᴇʀ`}, type: 1},                
        {buttonId: `acceptx ${wa2}`, buttonText: {displayText: `ᴀᴄᴄᴇᴘᴛ`}, type: 1},
        {buttonId: `cancelx ${wa2}`, buttonText: {displayText: `ᴄᴀɴᴄᴇʟ`}, type: 1},
       
    ]

    

    let buttonMessage = {
        image: { url: ppuser } ,
        caption: textx ,
        footer:`ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍʀ.ᴠ`,
        buttons: buttons,
        headerType: 4
    }
    

    textxxz = `❖ ᴏʀᴅᴇʀ ᴄᴏɴꜰɪʀᴍᴇᴅ

*ʏᴏᴜʀ ᴏʀᴅᴇʀ ᴄᴏɴꜰɪʀᴍᴇᴅ.
    
*ᴘʟᴇᴀꜱᴇ ᴡᴀɪᴛ ᴡʜɪʟᴇ , ᴡʜᴇɴ ᴡᴇ ᴀᴄᴄᴇᴘᴛ ʏᴏᴜʀ ᴏʀᴅᴇʀ ! 
    
- ᴊᴀʏᴀʀᴀᴛʜɴᴇ ꜰᴜɴᴇʀᴀʟ ꜱᴇʀᴠɪᴄᴇ`
    
const groupMetadatax =  await JfBotMd.groupMetadata(`120363041780940844@g.us`).catch(e => {}) 

const participantsx =  await groupMetadatax.participants

JfBotMd.sendMessage(`120363041780940844@g.us`, { text : 'incoming order...' , mentions: participantsx.map(a => a.id)}, { quoted: m })
                
    JfBotMd.sendMessage(`120363041780940844@g.us`, buttonMessage, { quoted: m })
    // JfBotMd.sendMessage(`94772601056@s.whatsapp.net`, buttonMessage, { quoted: m })
    // JfBotMd.sendMessage(`94704414846@s.whatsapp.net`, buttonMessage, { quoted: m })
    // JfBotMd.sendMessage(`94702720130@s.whatsapp.net`, buttonMessage, { quoted: m })
    // JfBotMd.sendMessage(`94704166484@s.whatsapp.net`, buttonMessage, { quoted: m })
    JfBotMd.sendMessage(`94758040155@s.whatsapp.net`, buttonMessage, { quoted: m })
    // JfBotMd.sendMessage(`94703669885@s.whatsapp.net`, buttonMessage, { quoted: m })
    // JfBotMd.sendMessage(`94716989864@s.whatsapp.net`, buttonMessage, { quoted: m })
    // JfBotMd.sendMessage(`94778115292@whatsapp.net`, buttonMessage, { quoted: m })
    // JfBotMd.sendMessage(`94778115292@whatsapp.net`, buttonMessage, { quoted: m })
    // JfBotMd.sendMessage(`94778115292@whatsapp.net`, buttonMessage, { quoted: m })
    // JfBotMd.sendMessage(`94778115292@whatsapp.net`, buttonMessage, { quoted: m })
    // JfBotMd.sendMessage(`94778115292@whatsapp.net`, buttonMessage, { quoted: m })

    JfBotMd.sendMessage(m.chat, { react: { text: `✅`, key: m.key }})

   JfBotMd.sendMessage(m.chat, { image: { url: './Media/order_confirm.jpg' }, caption: textxxz }, { quoted: m })





}


    
    
    /* wa = `wa.me/${m.sender.split("@")[0]}`
    
   
    c = `+${m.sender.split("@")[0]}`

     JfBotMd.sendMessage(m.chat, buttonMessage, { quoted: m })


var image = './Media/jf.jpg'
      message = await prepareWAMessageMedia({ image : { url: ppuser } }, { upload:   JfBotMd.waUploadToServer })
                    template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                        templateMessage: {
                            hydratedTemplate: {
                                imageMessage: message.imageMessage,
                                hydratedContentText: textx,
                                hydratedFooterText: `ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍʀ.ᴠ`,
                                hydratedButtons: [{
                                    urlButton: {
                                        displayText: 'contact customer',
                                        url: wa
                                    }
                                }, {
                                    callButton: {
                                    displayText: 'ᴄᴀʟʟ customer',
                                    phoneNumber: c
                                    
                                }
                                }, {
                                    quickReplyButton: {
                                        displayText: 'View Order',
                                        id: `${prefix}coffinlist`
                                    }
                                    }, {
                                    quickReplyButton: {
                                        displayText: 'cancel order',
                                        id: `${prefix}packages`
                                    }
                                    
                                   
                                    }, {
                                    quickReplyButton: {
                                        displayText: 'Accept order',
                                        id: `${prefix}about`
                                    }
                                }]
                            }
                        }
                    }), { userJid: m.chat, quoted: m }) */
                //      JfBotMd.relayMessage(m.chat, template.message, { messageId: template.key.id } ,{ quoted: m } )





    
    
    
    
    //metal list
    
    


   // JfBotMd.sendMessage(`94778115292@s.whatsapp.net`, {text: textx })




// reply(`Successfully Reported To The Owner\n\nPlease Make Sure The Bug Is Valid, If You Play With This, Use This Feature Again And Again For No Reason, You Will Be Blocked For Sure !`)

break



case 'acceptx' :




textx = `❖ ᴏʀᴅᴇʀ ɴᴏᴛɪꜰɪᴄᴀᴛɪᴏɴ

*ʏᴏᴜʀ ᴏʀᴅᴇʀ ᴀᴄᴄᴇᴘᴛᴇᴅ. 

*ᴘʟᴇᴀꜱᴇ ᴡᴀɪᴛ ꜰᴏʀ ᴀ ᴍᴏᴍᴇɴᴛ , 

*ᴏᴜʀ ᴀɢᴇɴᴛ ᴡɪʟʟ ᴄᴏɴᴛᴀᴄᴛ ʏᴏᴜ ꜱᴏᴏɴ ᴀꜱ ᴘᴏꜱꜱɪʙʟᴇ !

- ᴊᴀʏᴀʀᴀᴛʜɴᴇ ꜰᴜɴᴇʀᴀʟ ꜱᴇʀᴠɪᴄᴇ`

textxx = `❖ ᴏʀᴅᴇʀ ᴀᴄᴄᴇᴘᴛᴇᴅ

*ᴘʟᴇᴀꜱᴇ ᴄᴏɴᴛᴀᴄᴛ ᴏᴜʀ ᴄᴜꜱᴛᴏᴍᴇʀ ,

↬ ᴡɪᴛʜ ᴛʜɪꜱ ʟɪɴᴋ - wa.me/${text}

*ʜᴇ/ꜱʜᴇ ɪꜱ ᴡᴀɪᴛɴɢ ꜰᴏʀ ʏᴏᴜ !`


try {
    ppuser = await JfBotMd.profilePictureUrl(m.sender, 'image')
} catch {
    ppuser = 'https://tinyurl.com/yx93l6da'
}



    // JfBotMd.sendMessage(`${text}@s.whatsapp.net`, {text: textx }, { quoted : m },)




    JfBotMd.sendMessage(`${text}@s.whatsapp.net`, { image: { url: './Media/order_acc.jpg' }, caption: textx }, { quoted: m })


    JfBotMd.sendMessage(m.chat, { react: { text: `✅`, key: m.key }})


    JfBotMd.sendMessage(m.chat, {text: textxx , mentions:[m.sender] } , { quoted : m })


    
break



case 'cancelx' :


    textx = `❖ ᴏʀᴅᴇʀ ɴᴏᴛɪꜰɪᴄᴀᴛɪᴏɴ

*ʏᴏᴜʀ ᴏʀᴅᴇʀ ɪꜱ ᴄᴀɴɴᴄᴇʟʟᴇᴅ , ᴛʀʏ ᴀɢᴀɪɴ ʟᴀᴛᴇʀ.

*ꜱᴏʀʀʏ ꜰᴏʀ ᴀɴʏ ɪɴᴄᴏɴᴠᴇɴɪᴇɴᴄᴇ.

*ɪꜰ ʏᴏᴜ ᴛʜɪɴᴋ ᴛʜɪꜱ ɪꜱ ᴀ ᴍɪꜱᴛᴀᴋᴇ 

- ᴄᴏɴᴛᴀᴄᴛ ᴜꜱ : wa.me/94778115292

- ᴊᴀʏᴀʀᴀᴛʜɴᴇ ꜰᴜɴᴇʀᴀʟ ꜱᴇʀᴠɪᴄᴇ`

    
JfBotMd.sendMessage(m.chat, { react: { text: `✅`, key: m.key }})

    JfBotMd.sendMessage(`${text}@s.whatsapp.net`, {text: textx }, { quoted : m },)










break






case 'ටැග්':  { 

    if (!m.isGroup) return reply(mess.group)
    
    JfBotMd.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
    

}
































break

            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await m.reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return m.reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return m.reply(err)
                        if (stdout) return m.reply(stdout)
                    })
                }
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.data.database
		    if (!(budy.toLowerCase() in msgs)) return
		    JfBotMd.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
        

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
