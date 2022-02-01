const sgMail = require('@sendgrid/mail');

const sendEmail = (email) => {

    console.log(email)
    const apiKey = process.env.sendEmail;
    sgMail.setApiKey(apiKey)
    const message = {
        to: `${email}`,
        from: 'luispatriciomedinavargas@gmail.com',
        subject: 'successfully!',
        text: 'Hello thanks for register in our web site',

    }
    sgMail.send(message).then(response => {
        console.log('email send')
    }).catch(err => console.log(err))
}

module.exports = sendEmail