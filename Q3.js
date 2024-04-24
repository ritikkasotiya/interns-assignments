// we need to create first smtp transporter for sending an email


const nodemailer = require("nodemailer");
 
let sender = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'ritikkasotiya7@gmail.com',
        pass: 'Ritik@8529'
    }
});
 
let mail = {
    from: "ritikkasotiya7@gmail.com",
    to: "hrithikkasotiya8529@gmail.com",
    subject: "Challenge 3 Completed",
    text: "Hello , My name is Ritik kasotiya 4th semester, branch CSE, with roll no. 04650404422",
    attachments: [
        { filename: 'ss.skecth.jpg', path: 'Q3\ss.skecth.jpg' } 
    ]
};
 
sender.sendMail(mail, function (error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log("Email sent successfully: "
            + info.response);
    }
});