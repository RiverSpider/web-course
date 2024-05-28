import web_push from 'web-push';
const { setVapidDetails, sendNotification } = web_push;
import express from 'express';
import pkg from 'body-parser';
const { json } = pkg;

const app = express();
app.use(json());

const vapidKeys = {
  publicKey: 'BKINX2vYrAZlboC03i-FIkXWlE331xxUKxjkKAeSkXpqFfmRfXe-iV-hDnJCicY_xS87lq60eY767LFOpKDZZZM',
  privateKey: 'q2kmbT-2YhWTua0z3hrmY0ryT46tNPoPhZuSFlbSEUU',
};

setVapidDetails(
  'mailto:konstantin.zelinsky@effective.band',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

let subscriptions = [];

app.post('/subscribe', (req, res) => {
  const subscription = req.body;
  subscriptions.push(subscription);
  res.status(201).json({ message: 'Subscription saved' });
});

app.post('/sendNotification', (req, res) => {
  const notificationPayload = {
    notification: {
      title: 'Cool notification',
    },
  };

  const promises = [];
  subscriptions.forEach(subscription => {
    promises.push(
      sendNotification(subscription, JSON.stringify(notificationPayload))
    );
  });

  Promise.all(promises).then(() => res.status(200).json({ message: 'Notification send' }))
  .catch(err => {
    console.error("Error", err);
    res.sendStatus(500);
  });
});

app.listen(5170, () => {
  console.log('Server working on 5170');
});
