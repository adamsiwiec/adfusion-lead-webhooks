const nodemailer = require('nodemailer');
const process = require('process');
const key = require('./key.json');

// Change this to one of your email addresses in the organisation
const YOUR_EMAIL_ADDRESS = 'leads@adfusion.cloud';
// Change this to the receiver to the mail
const SEND_TO = 'adam@adfusion.cloud'

// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })

// Declare a route
fastify.get('/', async (req, res) => {
    console.log(req)
    return req.body
})
fastify.post('/', async (req, res) => {
    console.log(req)
    return req.body
})
// Run the server!
const start = async () => {
    try {
        await fastify.listen(process.env.PORT || 1414, '0.0.0.0')
        fastify.log.info(`server listening on ${fastify.server.address().port}`)
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}
start()

    // const transporter = nodemailer.createTransport({
    //     host: 'smtp.gmail.com',
    //     port: 465,
    //     secure: true,
    //     auth: {
    //         type: 'OAuth2',
    //         user: YOUR_EMAIL_ADDRESS,
    //         serviceClient: key.client_id,
    //         privateKey: key.private_key,
    //     },
    // });


    // try {
    //     await transporter.verify();
    //     await transporter.sendMail({
    //         from: YOUR_EMAIL_ADDRESS,
    //         to: SEND_TO,
    //         subject: 'Lead Form Test',
    //         text: 'This is a test email',
    //     });
    // } catch (err) {
    //     console.error(err);
    // }

