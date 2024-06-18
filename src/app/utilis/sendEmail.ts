import nodemailer from 'nodemailer';

export const sendEmail = async (to: string, html: string) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: 'bsumi559@gmail.com',
      pass: 'fpki xmwm fgkz odcw',
    },
  });

  // send mail with defined transport object
  await transporter.sendMail({
    from: '"Madison Foo Koch 👻" <bsumi559@gmail.com>', // sender address
    to, // list of receivers
    subject: 'Reset password link ✔', // Subject line
    text: 'link expire time 10 minute?', // plain text body
    html, // html body
  });
};
