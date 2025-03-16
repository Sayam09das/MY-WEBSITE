const express = require('express');
const router = express.Router();
const Contact = require('../models/contact');
const sendEmail = require('../services/mail');

router.post('/contact', async (req, res) => {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
        return res.status(400).json({ error: 'All fields are required.' });
    }

    try {
        const newContact = new Contact({ name, email, subject, message });
        await newContact.save();

        await sendEmail(name, email, subject, message);
        
        res.status(200).json({ message: 'Message sent successfully and confirmation email sent.' });

    } catch (err) {
        console.error('Error saving contact:', err);

        if (err.code === 11000) {
            return res.status(400).json({ error: 'Email already exists' });
        }

        res.status(500).json({ error: 'Something went wrong, please try again later.' });
    }
});

module.exports = router;
