import { App } from '@slack/bolt';

const app = new App({
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  token: process.env.SLACK_BOT_TOKEN,
});

/* Add functionality here */
app.event('channel_created', async (payload) => {
  // console.log(payload.event);
  console.log(`Channel created: ${payload.event.channel.name}`);
  console.log(` …by ${payload.event.channel.creator}`);
});

(async () => {
  // Start the app
  await app.start(process.env.PORT || 3000);

  console.log('⚡️ Bolt app is running!');
})();
