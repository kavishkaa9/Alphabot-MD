const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	alfa: 'https://api-alphabot.herokuapp.com',
}

// Free apikey
global.APIKeys = {
	'https://api-alphabot.herokuapp.com': 'Alphabot',
}

// setting 
global.autoread = true // auto read pesan / message
global.autorecording = true //status auto merekam ( auto record )
global.autoketik = false //status auto mengetik (auto typing)
global.available = false //status online (online)

// Other
global.botname = "⊷┈━━━〔 ⏤͟͟͞͞ ◉𝐃Ξ𝐗𝐓Ξ𝐑◉ ͟͞⏤〕━━━┈⊷"
global.ownername= "⊷┈━━━〔 ⏤͟͟͞͞ ◉𝐃Ξ𝐗𝐓Ξ𝐑◉ ͟͞⏤〕━━━┈⊷"
global.myweb ="https://www.facebook.com/profile.php?id=100078175149491&mibextid=ZbWKwL"
global.youtube = "https://youtube.com/@DEXTER12209"
global.github = "https://github.com/kavishkaa9"
global.ownernomer = "94784153052"
global.ownernomerr = "94784153052"
global.thumbnail = "https://i.ibb.co/RvRzmFC/20230129-075211.jpg"
global.donasi = "./image/donasi.jpg"
global.background_welcome="https://i.ibb.co/RvRzmFC/20230129-075211.jpg" // maks size 30kb, agar welcome image nya tdk delay
global.owner = ["62887435047326","62887435047326","6285342106390","447405935355"] //ganti agar fitur owner bisa di gunakan
global.packname = '© ⊷┈━━━〔 ⏤͟͟͞͞ ◉𝐃Ξ𝐗𝐓Ξ𝐑◉ ͟͞⏤〕━━━┈⊷' //sticker wm
global.author = 'Created By ⊷┈━━━〔 ⏤͟͟͞͞ ◉𝐃Ξ𝐗𝐓Ξ𝐑◉ ͟͞⏤〕━━━┈⊷' //sticker wm
global.sessionName = 'session'
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    sukses: '✅Done, Oke Desu~',
    admin: 'Perintah Ini Hanya Bisa Digunakan Oleh Admin !',
    botAdmin: 'Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin !',
    owner: 'Perintah Ini Hanya Bisa Digunakan Oleh Owner !',
    group: 'Perintah Ini Hanya Bisa Digunakan Di Group !',
    private: 'Perintah Ini Hanya Bisa Digunakan Di Private !',
	bot: 'Fitur Khusus Pengguna Nomor Bot',
    errtoimg: 'Maaf Saat Ini Belum Support Sticker Gif !',
    wait: '🛑 Sedang Di Proses',
	lockCmd: 'Fitur Tidak Diaktifkan Oleh Owner!',
	example1: 'Selamat Datang @user Di Group @subject Jangan Lupa Baca Rules @desc\n\nNote :\n1. @user (Mention User Join)\n2. @bio (Get Bio User Join)\n3. @tanggal (Date Now)\n4. @desc (Get Description Group)\n5. @subject (Group Name)'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
