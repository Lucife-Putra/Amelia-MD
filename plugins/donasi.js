import fetch from 'node-fetch'

//Plugin By Xynoz!!
let handler = async (m, { conn, usedPrefix }) => {
	let url = 'https://telegra.ph/file/ba72d2764080b10645d58.jpg'
	conn.sendButton(m.chat, '〔 Dᴏɴᴛ ғᴏʀɢᴇᴛ Dᴏɴᴀᴛɪᴏɴ 〕                    \n╭─「_• *Dana/Gopay* •_」\n│ • *Dana* [083863727733]\n│ • *Gopay* [082214729677]\n╰────\n\n_◛˖ ```Ingin Donasi? Chat nomor owner```_', wm, await(await fetch(url)).buffer(), [['Owner',`/owner`]],m)
}
handler.command = /^(donasi|dns)$/i
handler.tags = ['info']
handler.help = ['donasi']
handler.premium = false
handler.limit = false

export default handler

// 📮 Made In Xynoz 
// Subscribe YouTube Xynoz!
// Tq To Jangan Di Hpus!!