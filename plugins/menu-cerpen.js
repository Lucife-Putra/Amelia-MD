import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command, args, text }) => {
let imgr = fla.getRandom()
if (!args[0]) {

await conn.sendFile(m.chat, imgr + 'List Cerpen', 'cerpen.jpg', caption, m)
◈ Random
}
let res = await fetch(`https://restapi.frteam.xyz/cerpen?type=${args[0]}&apikey=fvnfSrw4`)
let anu = await res.json()
let p = anu.result
let cap = `☰ ━━━ ❨ Cerpen ❩ ━━┄┈ ☰

◈ *Title :* ${res.title}
◈ *Author:* ${res.author}
◈ *Kategori :* ${res.kategori}

◎ *Cerpen :* 
    ➥ ${res.cerita}
`
await conn.sendButton(m.chat, cap, `Cerita Pendek ${args[0]}`, imgr + 'Random Cerpen', [
          ['⇄ Back To Menu ⇄', '.menu']
], m)
}
handler.help = ['cerpen']
handler.tags = ['internet']
handler.command = /^(cerpen)$/i

export default handler