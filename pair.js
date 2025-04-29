const _0x5c9891 = (function () {
    let _0x1bee95 = true
    return function (_0x2e9565, _0x3ead9a) {
      const _0x269b8b = _0x1bee95
        ? function () {
            if (_0x3ead9a) {
              const _0x5e7de5 = _0x3ead9a.apply(_0x2e9565, arguments)
              return (_0x3ead9a = null), _0x5e7de5
            }
          }
        : function () {}
      return (_0x1bee95 = false), _0x269b8b
    }
  })(),
  _0xca8088 = _0x5c9891(this, function () {
    return _0xca8088
      .toString()
      .search('(((.+)+)+)+$')
      .toString()
      .constructor(_0xca8088)
      .search('(((.+)+)+)+$')
  })
_0xca8088()
const _0x2c9557 = (function () {
  let _0xb9b051 = true
  return function (_0x29d3bd, _0x2f0b9b) {
    const _0x3e4a73 = _0xb9b051
      ? function () {
          if (_0x2f0b9b) {
            const _0x261bc1 = _0x2f0b9b.apply(_0x29d3bd, arguments)
            return (_0x2f0b9b = null), _0x261bc1
          }
        }
      : function () {}
    return (_0xb9b051 = false), _0x3e4a73
  }
})()
;(function () {
  _0x2c9557(this, function () {
    const _0x361e31 = new RegExp('function *\\( *\\)'),
      _0x4cd634 = new RegExp('\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i'),
      _0x20d826 = _0x3d5d8d('init')
    if (
      !_0x361e31.test(_0x20d826 + 'chain') ||
      !_0x4cd634.test(_0x20d826 + 'input')
    ) {
      _0x20d826('0')
    } else {
      _0x3d5d8d()
    }
  })()
})()
const _0x440ccf = (function () {
    let _0x13e8ba = true
    return function (_0x35906b, _0x8a132d) {
      const _0x8ed215 = _0x13e8ba
        ? function () {
            if (_0x8a132d) {
              const _0x1c8011 = _0x8a132d.apply(_0x35906b, arguments)
              return (_0x8a132d = null), _0x1c8011
            }
          }
        : function () {}
      return (_0x13e8ba = false), _0x8ed215
    }
  })(),
  _0x4c4b47 = _0x440ccf(this, function () {
    const _0x395667 = function () {
        const _0x317c5b = {
          DzTSH:
            'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
          zmrFO: function (_0x853370, _0x29a205) {
            return _0x853370 < _0x29a205
          },
          MsYgD: function (_0x2dbe7c, _0x4dad6d) {
            return _0x2dbe7c * _0x4dad6d
          },
          pcSke: function (_0x5a1b54, _0x656a2) {
            return _0x5a1b54 * _0x656a2
          },
        }
        let _0x460264
        try {
          _0x460264 = Function(
            'return (function() {}.constructor("return this")( ));'
          )()
        } catch (_0x31b118) {
          _0x460264 = window
        }
        return _0x460264
      },
      _0x23a010 = _0x395667(),
      _0x5675ea = (_0x23a010.console = _0x23a010.console || {}),
      _0x46aee9 = [
        'log',
        'warn',
        'info',
        'error',
        'exception',
        'table',
        'trace',
      ]
    for (let _0x5082e7 = 0; _0x5082e7 < _0x46aee9.length; _0x5082e7++) {
      const _0x514d12 = _0x440ccf.constructor.prototype.bind(_0x440ccf),
        _0x4db6a0 = _0x46aee9[_0x5082e7],
        _0x25d313 = _0x5675ea[_0x4db6a0] || _0x514d12
      _0x514d12['__proto__'] = _0x440ccf.bind(_0x440ccf)
      _0x514d12.toString = _0x25d313.toString.bind(_0x25d313)
      _0x5675ea[_0x4db6a0] = _0x514d12
    }
  })
_0x4c4b47()
const { giftedid } = require('./id')
const express = require('express'),
  fs = require('fs')
let router = express.Router()
const pino = require('pino')
const { Storage, File } = require('megajs')
const {
  default: Gifted_Tech,
  useMultiFileAuthState,
  delay,
  makeCacheableSignalKeyStore,
  Browsers,
} = require('@whiskeysockets/baileys')
function randomMegaId(_0x31173b = 6, _0x38e019 = 4) {
  const _0x528876 =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let _0x903c7c = ''
  for (let _0x140917 = 0; _0x140917 < _0x31173b; _0x140917++) {
    _0x903c7c += _0x528876.charAt(Math.floor(Math.random() * _0x528876.length))
  }
  const _0x4491b6 = Math.floor(Math.random() * Math.pow(10, _0x38e019))
  return '' + _0x903c7c + _0x4491b6
}
async function uploadCredsToMega(_0x2e2f7b) {
  try {
    const _0x14f10a = {
      email: 'permaunban@gmail.com',
      password: 'umar165123719.',
    }
    const _0x39c2c9 = await new Storage(_0x14f10a).ready
    console.log('Mega storage initialized.')
    if (!fs.existsSync(_0x2e2f7b)) {
      throw new Error('File not found: ' + _0x2e2f7b)
    }
    const _0x324af0 = fs.statSync(_0x2e2f7b).size,
      _0x34b59c = await _0x39c2c9.upload(
        {
          name: randomMegaId() + '.json',
          size: _0x324af0,
        },
        fs.createReadStream(_0x2e2f7b)
      ).complete
    console.log('Session successfully uploaded to Mega.')
    const _0x3b43cb = _0x39c2c9.files[_0x34b59c.nodeId],
      _0x327f72 = await _0x3b43cb.link()
    return console.log('Session Url: ' + _0x327f72), _0x327f72
  } catch (_0x52fd61) {
    console.error('Error uploading to Mega:', _0x52fd61)
    throw _0x52fd61
  }
}
function removeFile(_0x5c7c31) {
  if (!fs.existsSync(_0x5c7c31)) {
    return false
  }
  const _0x49dfa2 = {
    recursive: true,
    force: true,
  }
  fs.rmSync(_0x5c7c31, _0x49dfa2)
}
router.get('/', async (_0x5d5072, _0x442664) => {
  const _0x1b8a7b = giftedid()
  let _0x55b5b8 = _0x5d5072.query.number
  async function _0x413489() {
    const { state: _0x5a40ea, saveCreds: _0x13942a } =
      await useMultiFileAuthState('./temp/' + _0x1b8a7b)
    try {
      let _0x2d1382 = Gifted_Tech({
        auth: {
          creds: _0x5a40ea.creds,
          keys: makeCacheableSignalKeyStore(
            _0x5a40ea.keys,
            pino({ level: 'fatal' }).child({ level: 'fatal' })
          ),
        },
        printQRInTerminal: false,
        logger: pino({ level: 'fatal' }).child({ level: 'fatal' }),
        browser: Browsers.macOS('Safari'),
      })
      if (!_0x2d1382.authState.creds.registered) {
        await delay(1500)
        _0x55b5b8 = _0x55b5b8.replace(/[^0-9]/g, '')
        const _0x46107a = await _0x2d1382.requestPairingCode(_0x55b5b8)
        console.log('Your Code: ' + _0x46107a)
        if (!_0x442664.headersSent) {
          const _0x13ee61 = { code: _0x46107a }
          await _0x442664.send(_0x13ee61)
        }
      }
      _0x2d1382.ev.on('creds.update', _0x13942a)
      _0x2d1382.ev.on('connection.update', async (_0x4628e2) => {
        const { connection: _0xd83f6d, lastDisconnect: _0x2b0d00 } = _0x4628e2
        if (_0xd83f6d == 'open') {
          await delay(50000)
          const _0x17506b = __dirname + ('/temp/' + _0x1b8a7b + '/creds.json')
          if (!fs.existsSync(_0x17506b)) {
            console.error('File not found:', _0x17506b)
            return
          }
          const _0x56c65f = await uploadCredsToMega(_0x17506b),
            _0x3b6e42 = _0x56c65f.includes('https://mega.nz/file/')
              ? '𝚂𝙰𝚂𝙸~' + _0x56c65f.split('https://mega.nz/file/')[1]
              : 'Error: Invalid URL'
          console.log('Session ID: ' + _0x3b6e42)
          _0x2d1382.groupAcceptInvite('IqRWSp7pXx8DIMtSgDICGu')
          const _0x2be0e1 = {
            newsletterJid: '1203632076249567731@newsletter',
            newsletterName: 'ＳΞＳＹ ＭＤ SESSION GEN \uD83C\uDDEE\uD83C\uDDF3',
            serverMessageId: 143,
          }
          const _0x207dd3 = {
            disappearingMessagesInChat: true,
            ephemeralExpiration: 86400,
          }
          const _0x402717 = await _0x2d1382.sendMessage(
              _0x2d1382.user.id,
              {
                text: _0x3b6e42,
                contextInfo: {
                  mentionedJid: [_0x2d1382.user.id],
                  forwardingScore: 999,
                  isForwarded: true,
                  forwardedNewsletterMessageInfo: _0x2be0e1,
                },
              },
              _0x207dd3
            ),
            _0x4e9007 =
              "\n\u256D\u2501\u2501\u2501\u3014 *TOHID_MD SESSION* \u3015\u2501\u2501\u2501\u2508\u22B7\n\u2503\u25C8\u251C\u2022*SESSION GENERATED SUCCESSFULY* \u2705\n\u2503\u25C8\u2503\n\u2503\u25C8\u251C\u2022*Gɪᴠᴇ ᴀ ꜱᴛᴀʀ ᴛᴏ ʀᴇᴘᴏ ꜰᴏʀ ᴄᴏᴜʀᴀɢᴇ* \uD83C\uDF1F\n\u2503\u25C8\u251C\u2022https://github.com/Tohidkhan6332/TOHID_MD\n\u2503\u25C8\u2503\n\u2503\u25C8\u251C\u2022*Tᴇʟᴇɢʀᴀᴍ Gʀᴏᴜᴘ* \uD83C\uDF1F\n\u2503\u25C8\u251C\u2022https://t.me/Tohid_Tech\n\u2503\u25C8\u2503\n\u2503\u25C8\u251C\u2022*WʜᴀᴛsAᴘᴘ Gʀᴏᴜᴘ* \uD83C\uDF1F\n\u2503\u25C8\u251C\u2022https://chat.whatsapp.com/IqRWSp7pXx8DIMtSgDICGu\n\u2503\u25C8\u2503\n\u2503\u25C8\u251C\u2022*WʜᴀᴛsAᴘᴘ ᴄʜᴇɴɴᴀʟ* \uD83C\uDF1F\n\u2503\u25C8\u251C\u2022https://whatsapp.com/channel/0029VaGyP933bbVC7G0x0i2T\n\u2503\u25C8\u2503\n\u2503\u25C8\u2503*Yᴏᴜ-ᴛᴜʙᴇ ᴛᴜᴛᴏʀɪᴀʟꜱ* \uD83C\uDF1F \n\u2503\u25C8\u251C\u2022https://youtube.com/Tohidkhan_6332\n\u2503\u25C8\u2503\n\u2503\u25C8\u251C\u2022*ɢɪᴛʜᴜʙ* \uD83C\uDF1F\n\u2503\u25C8\u251C\u2022http://GitHub.com/Tohidkhan6332\n\u2503\u25C8\u2503\n\u2503\u25C8\u251C\u2022*Wᴇʙsɪᴛᴇ* \uD83C\uDF1F\n\u2503\u25C8\u251C\u2022https://tohid-khan-web.vercel.app/\n\u2503\u25C8\u2503\n\u2503\u25C8\u251C\u2022*TOHID_MD--WHATTSAPP-BOT* \uD83E\uDD40\n\u2503\u25C8\u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25CF\u25CF\u25BA\n\u2503\u25C8\u256D\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25CF\u25CF\u25BA\n\u2503\u25C8\u251C \u2554\u2550\u2566\u2550\u2557\u2500\u2500\u2500\u2554\u2550\u2550\u2557\u2554\u2557\u2554\u2557\u2554\u2557\n\u2503\u25C8\u251C \u2551\u2551\u2551\u2551\u2560\u2566\u2566\u2550\u2569\u2557\u2554\u2569\u2563\u255A\u256C\u256C\u255D\u2551\n\u2503\u25C8\u251C \u2551\u2551\u2551\u2551\u2551\u2554\u2569\u2550\u2550\u2563\u2551\u256C\u2551\u2551\u2551\u2551\u256C\u2551\n\u2503\u25C8\u251C \u255A\u2569\u2550\u2569\u2569\u255D\u2500\u2500\u2500\u255A\u2569\u2550\u2569\u2569\u2569\u2569\u2550\u255D\n\u2503\u25C8\u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25CF\u25CF\u25BA\n\u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25CF\u25CF\u25BA\n______________________________\nUse your Session ID Above to Deploy your Bot.\nCheck on YouTube Channel for Deployment \nProcedure(Ensure you have Github Account and Billed \nHeroku Account First.)\nDon't Forget To Give Star\u2B50 To My Repo\n\u256D\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2508\u22B7\n\u251C\u2501\u2501\u2501\u3014 *TOHID_MD SESSION* \u3015\u2501\u2501\u2501\u2508\u22B7\n\u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2508\u22B7",
            _0x244d8d = {
              newsletterJid: '1203632076249563731@newsletter',
              newsletterName: 'ＳΞＳＹ ＭＤ SESSION GEN \uD83C\uDDEE\uD83C\uDDF3',
              serverMessageId: 143,
            }
          const _0x3e7e52 = {}
          return (
            (_0x3e7e52.quoted = _0x402717),
            (_0x3e7e52.disappearingMessagesInChat = true),
            (_0x3e7e52.ephemeralExpiration = 86400),
            await _0x2d1382.sendMessage(
              _0x2d1382.user.id,
              {
                text: _0x4e9007,
                contextInfo: {
                  mentionedJid: [_0x2d1382.user.id],
                  forwardingScore: 999,
                  isForwarded: true,
                  forwardedNewsletterMessageInfo: _0x244d8d,
                },
              },
              _0x3e7e52
            ),
            await delay(100),
            await _0x2d1382.ws.close(),
            await removeFile('./temp/' + _0x1b8a7b)
          )
        } else {
          _0xd83f6d === 'close' &&
            _0x2b0d00 &&
            _0x2b0d00.error &&
            _0x2b0d00.error.output.statusCode != 401 &&
            (await delay(10000), _0x413489())
        }
      })
    } catch (_0x1c677a) {
      console.error('Service Has Been Restarted:', _0x1c677a)
      await removeFile('./temp/' + _0x1b8a7b)
      if (!_0x442664.headersSent) {
        const _0x41d257 = { code: 'Service is Currently Unavailable' }
        await _0x442664.send(_0x41d257)
      }
    }
  }
  return await _0x413489()
})
;(function () {
  let _0x4e344f
  try {
    const _0x5e3f1b = Function(
      'return (function() {}.constructor("return this")( ));'
    )
    _0x4e344f = _0x5e3f1b()
  } catch (_0x69c034) {
    _0x4e344f = window
  }
  _0x4e344f.setInterval(_0x3d5d8d, 4000)
})()
module.exports = router
function _0x3d5d8d(_0x2931f7) {
  function _0x19bef3(_0x55f4c7) {
    if (typeof _0x55f4c7 === 'string') {
      return function (_0x429ac2) {}
        .constructor('while (true) {}')
        .apply('counter')
    } else {
      ;('' + _0x55f4c7 / _0x55f4c7).length !== 1 || _0x55f4c7 % 20 === 0
        ? function () {
            return true
          }
            .constructor('debugger')
            .call('action')
        : function () {
            return false
          }
            .constructor('debugger')
            .apply('stateObject')
    }
    _0x19bef3(++_0x55f4c7)
  }
  try {
    if (_0x2931f7) {
      return _0x19bef3
    } else {
      _0x19bef3(0)
    }
  } catch (_0x24e1cf) {}
}
