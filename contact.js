// core modules
// file system
const fs = require('fs');
//readline
const readline = require('readline');
// readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//membuat folder data apabila tidak ada
const dirPath = './data';
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}

// membuat file contacts json jika belom ada
const dataPath = './data/contacts.json';
if (!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath,'[]','utf-8');
}

// membuat fungsi untuk menanyakan pertanyaan
const questions = (ask) => {
  return new Promise((resolve, reject) => {
    rl.question(ask, (inputVariable) => {
      resolve(inputVariable);
    })
  })
}

// membuat fungsi untuk menampung pertanyaan
const getQuestion = async () => {
  const name = await questions (`What's your name ? `);
  const phoneNumber = await questions ('Input your phone number : ');
  const email = await questions ('Input your email : ');

  getAnswer(name, phoneNumber, email);
}

// membuat fungsi untuk menampung jawaban
const getAnswer = (name, phoneNumber, email) => {
  const contact = {name, phoneNumber, email};
  const file = fs.readFileSync('data/contacts.json', 'utf8');
  const contacts = JSON.parse(file);
  contacts.push(contact);
  fs.writeFileSync('data/contacts.json', JSON.stringify(contacts, null, 2));
  console.log(`Terimakasih ${name} sudah memasukkan data`);
  rl.close();
}

module.exports = { getQuestion }
