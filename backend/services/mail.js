const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

const sendEmail = async (name, email, subject, message) => {
    try {
        await transporter.sendMail({
            from: `"Sayam Das" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: `Thank you for contacting Sayam Das!`,
            html: `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Thank You for Contacting Us</title>
                    <style>
                        body {
                            font-family: Arial, sans-serif;
                            background-color: #f4f4f4;
                            margin: 0;
                            padding: 0;
                        }
                        .container {
                            background-color: #ffffff;
                            max-width: 600px;
                            margin: 40px auto;
                            border-radius: 8px;
                            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
                            overflow: hidden;
                        }
                        .header {
                            background-color: #2d89e5;
                            color: white;
                            padding: 20px;
                            text-align: center;
                        }
                        .header img {
                            width: 80px;
                            height: auto;
                            margin-bottom: 10px;
                        }
                        .content {
                            padding: 30px;
                            color: #333333;
                        }
                        .footer {
                            background-color: #f4f4f4;
                            text-align: center;
                            padding: 20px;
                            font-size: 12px;
                            color: #888888;
                        }
                        .social-icons img {
                            width: 24px;
                            margin: 0 5px;
                        }
                        .button {
                            display: inline-block;
                            margin-top: 20px;
                            padding: 12px 24px;
                            background-color: #2d89e5;
                            color: #ffffff;
                            text-decoration: none;
                            border-radius: 5px;
                        }
                        .message-box {
                            background-color: #f9f9f9;
                            padding: 15px;
                            border-left: 4px solid #2d89e5;
                            margin-top: 20px;
                            white-space: pre-wrap;
                        }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <div class="header">
                        <img src="https://i.postimg.cc/5ypK7ztD/logo.png" alt="Sayam Das Logo" width="80" height="80">
                            <h1>Sayam Das</h1>
                        </div>
                        <div class="content">
                            <h2>Hello ${name},</h2>
                            <p>Thank you for reaching out to <strong>Sayam Das</strong>!</p>

                            <p>We have successfully received your message and will get back to you shortly.</p>

                            <div class="message-box">
                                <p><strong>Subject:</strong> ${subject}</p>
                                <p><strong>Message:</strong><br>${message}</p>
                            </div>

                            <p>If you have any urgent inquiries, feel free to contact me at:</p>
                            <ul>
                                <li>📧 support@sayamdas.com</li>
                                <li>🌐 <a href="https://www.sayamdas.com" target="_blank">www.sayamdas.com</a></li>
                            </ul>

                            <p>Follow me on:</p>
                            <p class="social-icons">
                                <a href="https://www.facebook.com/yourfacebookprofile" target="_blank">
                                    <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook">
                                </a>
                                <a href="https://www.linkedin.com/in/yourlinkedinprofile" target="_blank">
                                    <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn">
                                </a>
                                <a href="https://www.instagram.com/yourinstagramprofile" target="_blank">
                                    <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram">
                                </a>
                            </p>

                            <a href="https://www.sayamdas.com" class="button" target="_blank" style="color: #fff">Visit My Website</a>
                        </div>
                        <div class="footer">
                            &copy; ${new Date().getFullYear()} Sayam Das Portfolio. All rights reserved.
                        </div>
                    </div>
                </body>
                </html>
            `
        });

        console.log('HTML confirmation email sent successfully!');
    } catch (error) {
        console.error('Error sending confirmation email:', error);
        throw error;
    }
};

module.exports = sendEmail;
