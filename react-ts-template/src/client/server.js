const webpush = require('web-push');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const vapidKeys = {
  publicKey: 'BKINX2vYrAZlboC03i-FIkXWlE331xxUKxjkKAeSkXpqFfmRfXe-iV-hDnJCicY_xS87lq60eY767LFOpKDZZZM',
  privateKey: 'q2kmbT-2YhWTua0z3hrmY0ryT46tNPoPhZuSFlbSEUU',
};

webpush.setVapidDetails(
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

app.post('/subscribe', (req, res) => {
  const subscription = req.body;
});

app.listen(5173, () => {

});
