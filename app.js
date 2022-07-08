const { questions, getAnswer } = require ('./contact')


// membuat fungsi untuk menampung pertanyaan
const getQuestion = async () => {
  const name = await questions (`What's your name ? `);
  const phoneNumber = await questions ('Input your phone number : ');
  const email = await questions ('Input your email : ');

  getAnswer(name, phoneNumber, email);
}

getQuestion();