require("./config");
require("./langka/functions");
require("./config");
const {
  default: WADefault,
  useMultiFileAuthState,
  DisconnectReason,
  fetchLatestBaileysVersion,
  generateForwardMessageContent,
  prepareWAMessageMedia,
  generateWAMessageFromContent,
  generateMessageID,
  downloadContentFromMessage,
  makeInMemoryStore,
  jidDecode,
  proto,
  makeCacheableSignalKeyStore,
  PHONENUMBER_MCC
} = require('@adiwajshing/baileys');
const NodeCache = require("node-cache");
const readline = require("readline");
const pino = require("pino");
const rl = readline.createInterface({
  'input': process.stdin,
  'output': process.stdout
});
const question = _0x3cb2e3 => new Promise(_0x42b3ed => rl.question(_0x3cb2e3, _0x42b3ed));
const {
  Boom
} = require("@hapi/boom");
const fs = require('fs');
const FileType = require("file-type");
const fetch = require("node-fetch");
const PhoneNumber = require("awesome-phonenumber");
const path = require("path");
const chalk = require("chalk");
const figlet = require("figlet");
const {
  smsg,
  getBuffer,
  fetchJson,
  TelegraPh
} = require("./lib/simple");
const {
  isSetClose,
  addSetClose,
  removeSetClose,
  changeSetClose,
  getTextSetClose,
  isSetLeft,
  addSetLeft,
  removeSetLeft,
  changeSetLeft,
  getTextSetLeft,
  isSetOpen,
  addSetOpen,
  removeSetOpen,
  changeSetOpen,
  getTextSetOpen,
  isSetWelcome,
  addSetWelcome,
  removeSetWelcome,
  changeSetWelcome,
  getTextSetWelcome
} = require("./lib/store");
const {
  toAudio,
  toPTT,
  toVideo
} = require("./lib/converter");
const {
  imageToWebp,
  videoToWebp,
  writeExifImg,
  writeExifVid,
  writeExif
} = require("./lib/exif");
const {
  getRandom,
  isUrl,
  generateMessageTag,
  getSizeMedia,
  await,
  sleep
} = require("./lib/myfunc");
let set_welcome_db = JSON.parse(fs.readFileSync("./database/set_welcome.json"));
let set_left_db = JSON.parse(fs.readFileSync('./database/set_left.json'));
let _welcome = JSON.parse(fs.readFileSync("./database/welcome.json"));
let _left = JSON.parse(fs.readFileSync("./database/left.json"));
let set_open = JSON.parse(fs.readFileSync('./database/set_open.json'));
let set_close = JSON.parse(fs.readFileSync("./database/set_close.json"));
let antilink = JSON.parse(fs.readFileSync("./database/antilink.json"));
const store = makeInMemoryStore({
  'logger': pino().child({
    'level': "silent",
    'stream': 'store'
  })
});
global.api = (_0x414891, _0x34ff18 = '/', _0x3d860f = {}, _0x5a68e4) => (_0x414891 in global.APIs ? global.APIs[_0x414891] : _0x414891) + _0x34ff18 + (_0x3d860f || _0x5a68e4 ? '?' + new URLSearchParams(Object.entries({
  ..._0x3d860f,
  ...(_0x5a68e4 ? {
    [_0x5a68e4]: global.APIKeys[_0x414891 in global.APIs ? global.APIs[_0x414891] : _0x414891]
  } : {})
})) : '');
function nocache(_0x12615c, _0x2a9a85 = () => {}) {
  fs.watchFile(require.resolve(_0x12615c), async () => {
    await uncache(require.resolve(_0x12615c));
    _0x2a9a85(_0x12615c);
  });
}
function uncache(_0x45cf7b = '.') {
  return new Promise((_0x5236ee, _0x4eb231) => {
    try {
      delete require.cache[require.resolve(_0x45cf7b)];
      _0x5236ee();
    } catch (_0x6d4a90) {
      _0x4eb231(_0x6d4a90);
    }
  });
}
async function Botstarted() {
  const {
    state: _0x2efe2b,
    saveCreds: _0x4edf90
  } = await useMultiFileAuthState("AiBotzz");
  const {
    version: _0x58cfab,
    isLatest: _0x2e811e
  } = await fetchLatestBaileysVersion();
  const _0x2db490 = new NodeCache();
  const _0x36a0ba = WADefault({
    'version': _0x58cfab,
    'logger': pino({
      'level': "fatal"
    }).child({
      'level': "fatal"
    }),
    'printQRInTerminal': false,
    'mobile': false,
    'browser': ["Ubuntu", "Chrome", "20.0.04"],
    'auth': {
      'creds': _0x2efe2b.creds,
      'keys': makeCacheableSignalKeyStore(_0x2efe2b.keys, pino({
        'level': "fatal"
      }).child({
        'level': "fatal"
      }))
    },
    'generateHighQualityLinkPreview': true,
    'getMessage': async _0x23740d => {
      let _0x53528a = jidNormalizedUser(_0x23740d.remoteJid);
      let _0x552326 = await store.loadMessage(_0x53528a, _0x23740d.id);
      return _0x552326?.['message'] || '';
    },
    'msgRetryCounterCache': _0x2db490,
    'defaultQueryTimeoutMs': undefined
  });
  require('./AiBotzz');
  nocache('./AiBotzz', _0xe23a42 => console.log(" \"" + _0xe23a42 + "\" Telah diupdate!"));
  nocache("./config", _0x249a1c => console.log(" \"" + _0x249a1c + "\" Telah diupdate!"));
  console.log(chalk.bold.green(figlet.textSync("Furina MD", {
    'font': "Standard",
    'horizontalLayout': "default",
    'verticalLayout': "default",
    'width': 0x50,
    'whitespaceBreak': false
  })));
  console.log(!_0x3940(0xcf) ? chalk.green(_0x3940(0x116)) : chalk.keyword("yellow")("[ Script Furina-MD ]\n"), !_0x3940(0x114) ? chalk.green(_0x3940(0xc5)) : chalk.keyword("green")("\nInfo Script :\nBaileys : Multi Device\nNama Script : Furina-MD\nCreator : Wa +6283890885448\n\nAccount WhatsApp:\nMy Youtube : Gak Ada`\nMy Instagram : Gak Ada\n\nMy Website Bussines :\nWebsite : https://whatsapp.com/channel/0029VagEmD96hENqH9AdS72V/229\n"));
  store.bind(_0x36a0ba.ev);
  _0x36a0ba.ev.on("messages.upsert", async _0x486edf => {
    try {
      mek = _0x486edf.messages[0x0];
      if (!mek.message) {
        return;
      }
      mek.message = Object.keys(mek.message)[0x0] === "ephemeralMessage" ? mek.message.ephemeralMessage.message : mek.message;
      if (mek.key && mek.key.remoteJid === "status@broadcast") {
        return;
      }
      if (!_0x36a0ba["public"] && !mek.key.fromMe && _0x486edf.type === "notify") {
        return;
      }
      if (mek.key.id.startsWith("BAE5") && mek.key.id.length === 0x10) {
        return;
      }
      m = smsg(_0x36a0ba, mek, store);
      require("./AiBotzz")(_0x36a0ba, m, _0x486edf, store, antilink, set_welcome_db, set_left_db, set_open, set_close, _welcome, _left);
    } catch (_0x3c2324) {
      console.log(_0x3c2324);
    }
  });
  if (true && !_0x36a0ba.authState.creds.registered) {
    let _0x227ef4;
    if (!!pairingNumber) {
      _0x227ef4 = pairingNumber.replace(/[^0-9]/g, '');
      if (!Object.keys(PHONENUMBER_MCC).some(_0x4130b7 => _0x227ef4.startsWith(_0x4130b7))) {
        console.log("Masukan No WhatsApp Awali 62:\n");
        process.exit(0x0);
      }
    } else {
      _0x227ef4 = await question("Masukan No WhatsApp Awali 62:\n");
      _0x227ef4 = _0x227ef4.replace(/[^0-9]/g, '');
      if (!Object.keys(PHONENUMBER_MCC).some(_0x4f7f7b => _0x227ef4.startsWith(_0x4f7f7b))) {
        console.log("Masukan No WhatsApp Awali 62:\n");
        _0x227ef4 = await question("Masukan No WhatsApp Awali 62:\n");
        _0x227ef4 = _0x227ef4.replace(/[^0-9]/g, '');
        rl.close();
      }
    }
    setTimeout(async () => {
      let _0x55becb = await _0x36a0ba.requestPairingCode(_0x227ef4);
      _0x55becb = _0x55becb?.["match"](/.{1,4}/g)?.["join"]('-') || _0x55becb;
      console.log("Code Pairing Kamu : ", _0x55becb);
    }, 0xbb8);
  }
  _0x36a0ba.ev.on('group-participants.update', async _0x1a28da => {
    const _0xc1468c = _welcome.includes(_0x1a28da.id);
    const _0x1925db = _left.includes(_0x1a28da.id);
    try {
      let _0x438476 = await _0x36a0ba.groupMetadata(_0x1a28da.id);
      let _0x18c2e7 = _0x1a28da.participants;
      const _0x4acf50 = _0x438476.subject;
      const _0x462059 = _0x438476.desc;
      for (let _0x107004 of _0x18c2e7) {
        try {
          ppuser = await _0x36a0ba.profilePictureUrl(_0x107004, 'image');
        } catch {
          ppuser = "https://telegra.ph/file/c3f3d2c2548cbefef1604.jpg";
        }
        try {
          ppgroup = await _0x36a0ba.profilePictureUrl(_0x1a28da.id, "image");
        } catch {
          ppgroup = "https://telegra.ph/file/c3f3d2c2548cbefef1604.jpg";
        }
        if (_0x1a28da.action == 'add' && _0xc1468c) {
          console.log(_0x1a28da);
          let _0x29e45e;
          let _0x41b8de;
          let _0x53f05f;
          let _0x169061 = await getBuffer(ppuser);
          let _0x5e9192 = await "./media/ppuser-1.png";
          await fs.writeFileSync(_0x5e9192, _0x169061);
          try {
            _0x41b8de = await TelegraPh(_0x5e9192);
          } catch {
            _0x41b8de = "https://telegra.ph/file/0d50687b197cac991115e.jpg";
          }
          let _0xb14a6a = await getBuffer(ppgroup);
          let _0x5643c8 = await './media/ppgc-495.png';
          await fs.writeFileSync(_0x5643c8, _0xb14a6a);
          try {
            _0x53f05f = await TelegraPh(_0x5643c8);
          } catch {
            _0x53f05f = "https://telegra.ph/file/0d50687b197cac991115e.jpg";
          }
          let _0x85df03 = await fetch("https://api.popcat.xyz/welcomecard?background=https://wallpapercave.com/wp/wp6897909.jpg&text1=Selamat+Datang&text2=" + encodeURI(_0x107004.split('@')[0x0]) + "&text3=" + _0x438476.subject + "&avatar=" + _0x41b8de);
          try {
            _0x29e45e = await _0x85df03.buffer();
          } catch {
            _0x29e45e = await getBuffer("https://telegra.ph/file/0d50687b197cac991115e.jpg");
          }
          if (isSetWelcome(_0x1a28da.id, set_welcome_db)) {
            var _0x3cd9e3 = await getTextSetWelcome(_0x1a28da.id, set_welcome_db);
            var _0x8c7976 = _0x3cd9e3.replace(/@user/gi, '@' + _0x107004.split('@')[0x0]);
            var _0x5ca979 = _0x8c7976.replace(/@group/gi, _0x4acf50).replace(/@desc/gi, _0x462059);
            _0x36a0ba.sendMessage(_0x1a28da.id, {
              'image': _0x29e45e,
              'caption': _0x5ca979,
              'mentions': [_0x107004]
            }, {});
          } else {
            _0x36a0ba.sendMessage(_0x1a28da.id, {
              'image': _0x29e45e,
              'caption': "Halo @" + _0x107004.split('@')[0x0] + ", Selamat Datang Di " + _0x438476.subject,
              'mentions': [_0x107004]
            }, {});
          }
        } else {
          if (_0x1a28da.action == "remove" && _0x1925db) {
            console.log(_0x1a28da);
            let _0x418587;
            let _0x4ec9b7;
            let _0x5c36c8;
            let _0x31bb97 = await getBuffer(ppuser);
            let _0x2d48cb = await "./media/ppuser-1.png";
            await fs.writeFileSync(_0x2d48cb, _0x31bb97);
            try {
              _0x4ec9b7 = await TelegraPh(_0x2d48cb);
            } catch {
              _0x4ec9b7 = "https://telegra.ph/file/0d50687b197cac991115e.jpg";
            }
            let _0x5d8ed7 = await getBuffer(ppgroup);
            let _0x230b61 = await "./media/ppgc-495.png";
            await fs.writeFileSync(_0x230b61, _0x5d8ed7);
            try {
              _0x5c36c8 = await TelegraPh(_0x230b61);
            } catch {
              _0x5c36c8 = 'https://telegra.ph/file/0d50687b197cac991115e.jpg';
            }
            let _0xdd88d1 = await fetch('https://api.popcat.xyz/welcomecard?background=https://wallpapercave.com/wp/wp6897909.jpg&text1=Selamat+Tinggal&text2=' + encodeURI(_0x107004.split('@')[0x0]) + '&text3=' + _0x438476.subject + '&avatar=' + _0x4ec9b7);
            try {
              _0x418587 = await _0xdd88d1.buffer();
            } catch {
              _0x418587 = await getBuffer("https://telegra.ph/file/0d50687b197cac991115e.jpg");
            }
            if (isSetLeft(_0x1a28da.id, set_left_db)) {
              var _0x6e2801 = await getTextSetLeft(_0x1a28da.id, set_left_db);
              var _0x8c7976 = _0x6e2801.replace(/@user/gi, '@' + _0x107004.split('@')[0x0]);
              var _0x5ca979 = _0x8c7976.replace(/@group/gi, _0x4acf50).replace(/@desc/gi, _0x462059);
              _0x36a0ba.sendMessage(_0x1a28da.id, {
                'image': _0x418587,
                'caption': _0x5ca979,
                'mentions': [_0x107004]
              }, {});
            } else {
              _0x36a0ba.sendMessage(_0x1a28da.id, {
                'image': _0x418587,
                'caption': "Selamat Tinggal Kak 👋 🙂 @" + _0x107004.split('@')[0x0],
                'mentions': [_0x107004]
              }, {});
            }
          }
        }
      }
    } catch (_0x526522) {
      console.log(_0x526522);
    }
  });
  _0x36a0ba.decodeJid = _0x4e7e08 => {
    if (!_0x4e7e08) {
      return _0x4e7e08;
    }
    if (/:\d+@/gi.test(_0x4e7e08)) {
      let _0x425cff = jidDecode(_0x4e7e08) || {};
      return _0x425cff.user && _0x425cff.server && _0x425cff.user + '@' + _0x425cff.server || _0x4e7e08;
    } else {
      return _0x4e7e08;
    }
  };
  _0x36a0ba.ev.on('contacts.update', _0x50bb53 => {
    for (let _0xceb3b8 of _0x50bb53) {
      let _0x171763 = _0x36a0ba.decodeJid(_0xceb3b8.id);
      if (store && store.contacts) {
        store.contacts[_0x171763] = {
          'id': _0x171763,
          'name': _0xceb3b8.notify
        };
      }
    }
  });
  _0x36a0ba.getName = (_0x2bd229, _0x2c33d4 = false) => {
    id = _0x36a0ba.decodeJid(_0x2bd229);
    _0x2c33d4 = _0x36a0ba.withoutContact || _0x2c33d4;
    let _0x5c6d07;
    if (id.endsWith("@g.us")) {
      return new Promise(async _0x4f6e12 => {
        _0x5c6d07 = store.contacts[id] || {};
        if (!(_0x5c6d07.name || _0x5c6d07.subject)) {
          _0x5c6d07 = _0x36a0ba.groupMetadata(id) || {};
        }
        _0x4f6e12(_0x5c6d07.name || _0x5c6d07.subject || PhoneNumber('+' + id.replace("@s.whatsapp.net", '')).getNumber("international"));
      });
    } else {
      _0x5c6d07 = id === '0@s.whatsapp.net' ? {
        'id': id,
        'name': "WhatsApp"
      } : id === _0x36a0ba.decodeJid(_0x36a0ba.user.id) ? _0x36a0ba.user : store.contacts[id] || {};
    }
    return (_0x2c33d4 ? '' : _0x5c6d07.name) || _0x5c6d07.subject || _0x5c6d07.verifiedName || PhoneNumber('+' + _0x2bd229.replace('@s.whatsapp.net', '')).getNumber('international');
  };
  _0x36a0ba.sendContact = async (_0x24b897, _0x27b4f9, _0x194803 = '', _0xfac145 = {}) => {
    let _0x3b9e9d = [];
    for (let _0x482e53 of _0x27b4f9) {
      _0x3b9e9d.push({
        'displayName': await _0x36a0ba.getName(_0x482e53 + '@s.whatsapp.net'),
        'vcard': "BEGIN:VCARD\nVERSION:3.0\nN:" + (await _0x36a0ba.getName(_0x482e53 + "@s.whatsapp.net")) + "\nFN:" + (await _0x36a0ba.getName(_0x482e53 + "@s.whatsapp.net")) + "\nitem1.TEL;waid=" + _0x482e53 + ':' + _0x482e53 + "\nitem1.X-ABLabel:Ponsel\nitem2.EMAIL;type=INTERNET:" + global.email + "\nitem2.X-ABLabel:📧Email\nitem3.URL:" + global.myweb + "\nitem3.X-ABLabel:Instagram\nitem4.ADR:;;Tokyo/Japan;;;;\nitem4.X-ABLabel:📍Region\nEND:VCARD"
      });
    }
    _0x36a0ba.sendMessage(_0x24b897, {
      'contacts': {
        'displayName': _0x3b9e9d.length + " Kontak",
        'contacts': _0x3b9e9d
      },
      ..._0xfac145
    }, {
      'quoted': _0x194803
    });
  };
  _0x36a0ba["public"] = true;
  _0x36a0ba.serializeM = _0x4c183a => smsg(_0x36a0ba, _0x4c183a, store);
  _0x36a0ba.reSize = async (_0x5b8694, _0x1c4230, _0x23dc96) => {
    let _0x8de8ee = require("jimp");
    var _0x5c90dc = await _0x8de8ee.read(_0x5b8694);
    var _0x24c907 = await _0x5c90dc.resize(_0x1c4230, _0x23dc96).getBufferAsync(_0x8de8ee.MIME_JPEG);
    return _0x24c907;
  };
  _0x36a0ba.ev.on("connection.update", async _0x24ab40 => {
    const {
      connection: _0x2f9c43,
      lastDisconnect: _0x52aca3
    } = _0x24ab40;
    if (_0x2f9c43 === 'close') {
      let _0x732aa6 = new Boom(_0x52aca3?.["error"])?.['output']["statusCode"];
      if (_0x732aa6 === DisconnectReason.badSession) {
        console.log("Bad AiBotzz File, Please Delete AiBotzz and Scan Again");
        _0x36a0ba.logout();
      } else if (_0x732aa6 === DisconnectReason.connectionClosed) {
        console.log("Connection closed, reconnecting....");
        Botstarted();
      } else if (_0x732aa6 === DisconnectReason.connectionLost) {
        console.log("Connection Lost from Server, reconnecting...");
        Botstarted();
      } else if (_0x732aa6 === DisconnectReason.connectionReplaced) {
        console.log("Connection Replaced, Another New AiBotzz Opened, reconnecting...");
        Botstarted();
      } else if (_0x732aa6 === DisconnectReason.loggedOut) {
        console.log("Device Logged Out, Please Scan Again And Run.");
        _0x36a0ba.logout();
      } else if (_0x732aa6 === DisconnectReason.restartRequired) {
        console.log("Restart Required, Restarting...");
        Botstarted();
      } else if (_0x732aa6 === DisconnectReason.timedOut) {
        console.log("Connection TimedOut, Reconnecting...");
        Botstarted();
      } else if (_0x732aa6 === DisconnectReason.Multidevicemismatch) {
        console.log("Multi device mismatch, please scan again");
        _0x36a0ba.logout();
      } else {
        _0x36a0ba.end("Unknown DisconnectReason: " + _0x732aa6 + '|' + _0x2f9c43);
      }
    }
    ;
    if (_0x24ab40.connection == 'open' || _0x24ab40.receivedPendingNotifications == 'true') {
      _0x36a0ba.sendMessage(global.owner + "@s.whatsapp.net", {
        'text': "[ INFO KONEKSI ] 𝙁𝙪𝙧𝙞𝙣𝙖 _𝙊𝙣𝙡𝙞𝙣𝙚 𝙎𝙖𝙮𝙖𝙣𝙜𝙜_"
      });
    }
  });
  _0x36a0ba.ev.on('creds.update', _0x4edf90);
  _0x36a0ba.sendText = (_0x5b4128, _0x4c35b3, _0x2b405d = '', _0x5cfe28) => _0x36a0ba.sendMessage(_0x5b4128, {
    'text': _0x4c35b3,
    ..._0x5cfe28
  }, {
    'quoted': _0x2b405d,
    ..._0x5cfe28
  });
  _0x36a0ba.downloadMediaMessage = async _0x1ed2a0 => {
    let _0xf7ea51 = (_0x1ed2a0.msg || _0x1ed2a0).mimetype || '';
    let _0x5bb5f4 = _0x1ed2a0.mtype ? _0x1ed2a0.mtype.replace(/Message/gi, '') : _0xf7ea51.split('/')[0x0];
    const _0x58a2af = await downloadContentFromMessage(_0x1ed2a0, _0x5bb5f4);
    let _0x1faf4e = Buffer.from([]);
    for await (const _0x895864 of _0x58a2af) {
      _0x1faf4e = Buffer.concat([_0x1faf4e, _0x895864]);
    }
    return _0x1faf4e;
  };
  _0x36a0ba.sendStickerFromUrl = async (_0x2c63e7, _0x53aa23, _0x1e8f36, _0xdbdc0b = {}) => {
    let {
      writeExif: _0x2d0f35
    } = require("./lib/sticker");
    let _0x227a6c = await _0x36a0ba.getFile(_0x53aa23, true);
    let {
      filename: _0x83b768,
      size: _0x228455,
      ext: _0x1bf6b1,
      mime: _0x31ebfe,
      data: _0x4c2b7a
    } = _0x227a6c;
    let _0x35f165 = _0x83b768;
    let _0x1a4b76 = {
      'mimetype': _0x31ebfe,
      'data': _0x4c2b7a
    };
    _0x35f165 = await _0x2d0f35(_0x1a4b76, {
      'packname': _0xdbdc0b.packname ? _0xdbdc0b.packname : "𝗙𝘂𝗿𝗶𝗻𝗮 𝗔𝗜",
      'author': _0xdbdc0b.author ? _0xdbdc0b.author : "+6281999042372",
      'categories': _0xdbdc0b.categories ? _0xdbdc0b.categories : []
    });
    await fs.promises.unlink(_0x83b768);
    await _0x36a0ba.sendMessage(_0x2c63e7, {
      'sticker': {
        'url': _0x35f165
      }
    }, {
      'quoted': _0x1e8f36
    });
    return fs.promises.unlink(_0x35f165);
  };
  _0x36a0ba.imgToSticker = async (_0x1f3db3, _0x5a0d64, _0x4f19e9, _0xf9da6b = {}) => {
    let _0x3dc7c1 = Buffer.isBuffer(_0x5a0d64) ? _0x5a0d64 : /^data:.*?\/.*?;base64,/i.test(_0x5a0d64) ? Buffer.from(_0x5a0d64.split`,`[0x1], "base64") : /^https?:\/\//.test(_0x5a0d64) ? await await fetchBuffer(_0x5a0d64) : fs.existsSync(_0x5a0d64) ? fs.readFileSync(_0x5a0d64) : Buffer.alloc(0x0);
    let _0x1e2ce5;
    if (_0xf9da6b && (_0xf9da6b.packname || _0xf9da6b.author)) {
      _0x1e2ce5 = await writeExifImg(_0x3dc7c1, _0xf9da6b);
    } else {
      _0x1e2ce5 = await imageToWebp(_0x3dc7c1);
    }
    await _0x36a0ba.sendMessage(_0x1f3db3, {
      'sticker': {
        'url': _0x1e2ce5
      },
      ..._0xf9da6b
    }, {
      'quoted': _0x4f19e9
    });
    return _0x1e2ce5;
  };
  _0x36a0ba.vidToSticker = async (_0x5bf0cd, _0x1285cb, _0x5214ea, _0x298d98 = {}) => {
    let _0x3a57cc = Buffer.isBuffer(_0x1285cb) ? _0x1285cb : /^data:.*?\/.*?;base64,/i.test(_0x1285cb) ? Buffer.from(_0x1285cb.split`,`[0x1], 'base64') : /^https?:\/\//.test(_0x1285cb) ? await await fetchBuffer(_0x1285cb) : fs.existsSync(_0x1285cb) ? fs.readFileSync(_0x1285cb) : Buffer.alloc(0x0);
    let _0x330fab;
    if (_0x298d98 && (_0x298d98.packname || _0x298d98.author)) {
      _0x330fab = await writeExifVid(_0x3a57cc, _0x298d98);
    } else {
      _0x330fab = await videoToWebp(_0x3a57cc);
    }
    await _0x36a0ba.sendMessage(_0x5bf0cd, {
      'sticker': {
        'url': _0x330fab
      },
      ..._0x298d98
    }, {
      'quoted': _0x5214ea
    });
    return _0x330fab;
  };
  _0x36a0ba.sendImage = async (_0x23b859, _0xd49c02, _0x3d3ca6 = '', _0x4ffca8 = '', _0xbf971f) => {
    let _0x5e42f7 = Buffer.isBuffer(_0xd49c02) ? _0xd49c02 : /^data:.*?\/.*?;base64,/i.test(_0xd49c02) ? Buffer.from(_0xd49c02.split`,`[0x1], "base64") : /^https?:\/\//.test(_0xd49c02) ? await (await fetch(_0xd49c02)).buffer() : fs.existsSync(_0xd49c02) ? fs.readFileSync(_0xd49c02) : Buffer.alloc(0x0);
    return await _0x36a0ba.sendMessage(_0x23b859, {
      'image': _0x5e42f7,
      'caption': _0x3d3ca6,
      ..._0xbf971f
    }, {
      'quoted': _0x4ffca8
    });
  };
  _0x36a0ba.downloadAndSaveMediaMessage = async (_0x458e91, _0x129a37, _0x41cc1e = true) => {
    let _0x45e5f0 = _0x458e91.msg ? _0x458e91.msg : _0x458e91;
    let _0x5cdce6 = (_0x458e91.msg || _0x458e91).mimetype || '';
    let _0x369abd = _0x458e91.mtype ? _0x458e91.mtype.replace(/Message/gi, '') : _0x5cdce6.split('/')[0x0];
    const _0x38fa63 = await downloadContentFromMessage(_0x45e5f0, _0x369abd);
    let _0x4cb962 = Buffer.from([]);
    for await (const _0x127df6 of _0x38fa63) {
      _0x4cb962 = Buffer.concat([_0x4cb962, _0x127df6]);
    }
    let _0x5a8c7c = await FileType.fromBuffer(_0x4cb962);
    let _0x5add65 = _0x41cc1e ? "./tmp/" + _0x129a37 + '.' + _0x5a8c7c.ext : "./tmp/" + _0x129a37;
    await fs.writeFileSync(_0x5add65, _0x4cb962);
    return _0x5add65;
  };
  _0x36a0ba.downloadMediaMessage = async _0xa2e285 => {
    let _0x3724e8 = (_0xa2e285.msg || _0xa2e285).mimetype || '';
    let _0x122c03 = _0xa2e285.mtype ? _0xa2e285.mtype.replace(/Message/gi, '') : _0x3724e8.split('/')[0x0];
    const _0x1236d7 = await downloadContentFromMessage(_0xa2e285, _0x122c03);
    let _0x19fbf7 = Buffer.from([]);
    for await (const _0x511a7a of _0x1236d7) {
      _0x19fbf7 = Buffer.concat([_0x19fbf7, _0x511a7a]);
    }
    return _0x19fbf7;
  };
  _0x36a0ba.downloadAndSaveMediaMessage = async (_0x24cd1e, _0x39a9a6, _0x10dcea = true) => {
    let _0x5d36a7 = _0x24cd1e.msg ? _0x24cd1e.msg : _0x24cd1e;
    let _0x389bd7 = (_0x24cd1e.msg || _0x24cd1e).mimetype || '';
    let _0x4a1c93 = _0x24cd1e.mtype ? _0x24cd1e.mtype.replace(/Message/gi, '') : _0x389bd7.split('/')[0x0];
    const _0x496566 = await downloadContentFromMessage(_0x5d36a7, _0x4a1c93);
    let _0x206404 = Buffer.from([]);
    for await (const _0xe354d of _0x496566) {
      _0x206404 = Buffer.concat([_0x206404, _0xe354d]);
    }
    let _0x12e0a7 = await FileType.fromBuffer(_0x206404);
    trueFileName = _0x10dcea ? _0x39a9a6 + '.' + _0x12e0a7.ext : _0x39a9a6;
    await fs.writeFileSync(trueFileName, _0x206404);
    return trueFileName;
  };
  _0x36a0ba.sendTextWithMentions = async (_0x3e2ed0, _0x430efe, _0x41e915, _0x50f185 = {}) => _0x36a0ba.sendMessage(_0x3e2ed0, {
    'text': _0x430efe,
    'mentions': [..._0x430efe.matchAll(/@(\d{0,16})/g)].map(_0x1d81ff => _0x1d81ff[0x1] + "@s.whatsapp.net"),
    ..._0x50f185
  }, {
    'quoted': _0x41e915
  });
  _0x36a0ba.getFile = async (_0x4c1723, _0x3ca048) => {
    let _0x150532;
    let _0x8088c6;
    const _0x509943 = Buffer.isBuffer(_0x4c1723) ? _0x4c1723 : /^data:.*?\/.*?;base64,/i.test(_0x4c1723) ? Buffer.from(_0x4c1723.split`,`[0x1], "base64") : /^https?:\/\//.test(_0x4c1723) ? await (_0x150532 = await fetch(_0x4c1723)).buffer() : fs.existsSync(_0x4c1723) ? (_0x8088c6 = _0x4c1723, fs.readFileSync(_0x4c1723)) : typeof _0x4c1723 === 'string' ? _0x4c1723 : Buffer.alloc(0x0);
    if (!Buffer.isBuffer(_0x509943)) {
      throw new TypeError("Result is not a buffer");
    }
    const _0x46dbe4 = (await FileType.fromBuffer(_0x509943)) || {
      'mime': "application/octet-stream",
      'ext': ".bin"
    };
    if (_0x509943 && _0x3ca048 && !_0x8088c6) {
      _0x8088c6 = path.join(__dirname, "./tmp/" + new Date() * 0x1 + '.' + _0x46dbe4.ext);
      await fs.promises.writeFile(_0x8088c6, _0x509943);
    }
    return {
      'res': _0x150532,
      'filename': _0x8088c6,
      ..._0x46dbe4,
      'data': _0x509943,
      'deleteFile'() {
        return _0x8088c6 && fs.promises.unlink(_0x8088c6);
      }
    };
  };
  _0x36a0ba.sendFile = async (_0x4e8aa7, _0x64915c, _0x1912e0 = '', _0x29b490 = '', _0x43d9b6, _0x5efb9c = false, _0x3d652e = {}) => {
    let _0x1073f5 = await _0x36a0ba.getFile(_0x64915c, true);
    let {
      res: _0x147508,
      data: _0x1f0f9e,
      filename: _0x5a3d07
    } = _0x1073f5;
    if (_0x147508 && _0x147508.status !== 0xc8 || _0x1f0f9e.length <= 0x10000) {
      try {
        throw {
          'json': JSON.parse(_0x1f0f9e.toString())
        };
      } catch (_0x3f3c26) {
        if (_0x3f3c26.json) {
          throw _0x3f3c26.json;
        }
      }
    }
    let _0x253040 = {
      'filename': _0x1912e0
    };
    if (_0x43d9b6) {
      _0x253040.quoted = _0x43d9b6;
    }
    if (!_0x1073f5) {
      _0x3d652e.asDocument = true;
    }
    let _0x132613 = '';
    let _0x352970 = _0x1073f5.mime;
    let _0x211e89;
    if (/webp/.test(_0x1073f5.mime) || /image/.test(_0x1073f5.mime) && _0x3d652e.asSticker) {
      _0x132613 = "sticker";
    } else if (/image/.test(_0x1073f5.mime) || /webp/.test(_0x1073f5.mime) && _0x3d652e.asImage) {
      _0x132613 = "image";
    } else if (/video/.test(_0x1073f5.mime)) {
      _0x132613 = 'video';
    } else if (/audio/.test(_0x1073f5.mime)) {
      _0x211e89 = await (_0x5efb9c ? toPTT : toAudio)(_0x1f0f9e, _0x1073f5.ext);
      _0x1f0f9e = _0x211e89.data;
      _0x5a3d07 = _0x211e89.filename;
      _0x132613 = "audio";
      _0x352970 = "audio/ogg; codecs=opus";
    } else {
      _0x132613 = 'document';
    }
    if (_0x3d652e.asDocument) {
      _0x132613 = "document";
    }
    delete _0x3d652e.asSticker;
    delete _0x3d652e.asLocation;
    delete _0x3d652e.asVideo;
    delete _0x3d652e.asDocument;
    delete _0x3d652e.asImage;
    let _0x51cef3 = {
      ..._0x3d652e,
      'caption': _0x29b490,
      'ptt': _0x5efb9c,
      [_0x132613]: {
        'url': _0x5a3d07
      },
      'mimetype': _0x352970
    };
    let _0xe1ba63;
    try {
      _0xe1ba63 = await _0x36a0ba.sendMessage(_0x4e8aa7, _0x51cef3, {
        ..._0x253040,
        ..._0x3d652e
      });
    } catch (_0x2f8bd5) {
      _0xe1ba63 = null;
    } finally {
      if (!_0xe1ba63) {
        _0xe1ba63 = await _0x36a0ba.sendMessage(_0x4e8aa7, {
          ..._0x51cef3,
          [_0x132613]: _0x1f0f9e
        }, {
          ..._0x253040,
          ..._0x3d652e
        });
      }
      _0x1f0f9e = null;
      return _0xe1ba63;
    }
  };
  _0x36a0ba.sendMedia = async (_0x18adb2, _0x48e474, _0x359336, _0x537496 = '', _0x35d5dc = {}) => {
    let {
      ext: _0x1109f9,
      mime: _0x299696,
      data: _0x36b443
    } = await _0x36a0ba.getFile(_0x48e474);
    messageType = _0x299696.split('/')[0x0];
    pase = messageType.replace("application", 'document') || messageType;
    return await _0x36a0ba.sendMessage(_0x18adb2, {
      ['' + pase]: _0x36b443,
      'mimetype': _0x299696,
      'fileName': _0x359336 + _0x1109f9 ? _0x359336 + _0x1109f9 : getRandom(_0x1109f9),
      ..._0x35d5dc
    }, {
      'quoted': _0x537496
    });
  };
  _0x36a0ba.sendMediaAsSticker = async (_0x3a1e37, _0x202a17, _0x2728aa, _0x3de7f2 = {}) => {
    let {
      ext: _0x2f4e12,
      mime: _0x336d1b,
      data: _0x2e8d0a
    } = await _0x36a0ba.getFile(_0x202a17);
    let _0x29cecb = {};
    let _0x552e2d;
    _0x29cecb.data = _0x2e8d0a;
    _0x29cecb.mimetype = _0x336d1b;
    if (_0x3de7f2 && (_0x3de7f2.packname || _0x3de7f2.author)) {
      _0x552e2d = await writeExif(_0x29cecb, _0x3de7f2);
    } else {
      _0x552e2d = /image/.test(_0x336d1b) ? await imageToWebp(_0x2e8d0a) : /video/.test(_0x336d1b) ? await videoToWebp(_0x2e8d0a) : '';
    }
    await _0x36a0ba.sendMessage(_0x3a1e37, {
      'sticker': {
        'url': _0x552e2d
      },
      ..._0x3de7f2
    }, {
      'quoted': _0x2728aa
    });
    return _0x552e2d;
  };
  _0x36a0ba.sendImageAsSticker = async (_0x3a901a, _0x198ebc, _0x47ce4a, _0x1b73e0 = {}) => {
    let _0x1bbb17 = Buffer.isBuffer(_0x198ebc) ? _0x198ebc : /^data:.*?\/.*?;base64,/i.test(_0x198ebc) ? Buffer.from(_0x198ebc.split`,`[0x1], "base64") : /^https?:\/\//.test(_0x198ebc) ? await (await fetch(_0x198ebc)).buffer() : fs.existsSync(_0x198ebc) ? fs.readFileSync(_0x198ebc) : Buffer.alloc(0x0);
    let _0x448c77;
    if (_0x1b73e0 && (_0x1b73e0.packname || _0x1b73e0.author)) {
      _0x448c77 = await writeExifImg(_0x1bbb17, _0x1b73e0);
    } else {
      _0x448c77 = await imageToWebp(_0x1bbb17);
    }
    await _0x36a0ba.sendMessage(_0x3a901a, {
      'sticker': {
        'url': _0x448c77
      },
      ..._0x1b73e0
    }, {
      'quoted': _0x47ce4a
    });
    return _0x448c77;
  };
  _0x36a0ba.sendVideoAsSticker = async (_0x10d3e1, _0x5666fe, _0x1be625, _0x1171ab = {}) => {
    let _0x4c9d80 = Buffer.isBuffer(_0x5666fe) ? _0x5666fe : /^data:.*?\/.*?;base64,/i.test(_0x5666fe) ? Buffer.from(_0x5666fe.split`,`[0x1], "base64") : /^https?:\/\//.test(_0x5666fe) ? await getBuffer(_0x5666fe) : fs.existsSync(_0x5666fe) ? fs.readFileSync(_0x5666fe) : Buffer.alloc(0x0);
    let _0x1a1669;
    if (_0x1171ab && (_0x1171ab.packname || _0x1171ab.author)) {
      _0x1a1669 = await writeExifVid(_0x4c9d80, _0x1171ab);
    } else {
      _0x1a1669 = await videoToWebp(_0x4c9d80);
    }
    await _0x36a0ba.sendMessage(_0x10d3e1, {
      'sticker': {
        'url': _0x1a1669
      },
      ..._0x1171ab
    }, {
      'quoted': _0x1be625
    });
    return _0x1a1669;
  };
  _0x36a0ba.sendFakeLink = (_0x2c0455, _0x366e75, _0x48597b, _0x3dfb37, _0x273309, _0xa03a26, _0x54026c, _0x1be276) => _0x36a0ba.sendMessage(_0x2c0455, {
    'text': _0x366e75,
    'contextInfo': {
      'externalAdReply': {
        'title': "Selamat " + _0x48597b + " " + _0x54026c,
        'body': _0x3dfb37,
        'previewType': "PHOTO",
        'thumbnailUrl': '',
        'thumbnail': _0x273309,
        'sourceUrl': _0xa03a26
      }
    }
  }, {
    'quoted': _0x1be276
  });
  return _0x36a0ba;
}
Botstarted();
const express = require('express')
const app = express()
const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
