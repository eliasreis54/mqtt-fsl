const mqtt = require('mqtt');
const client = mqtt.connect('mqtt://150.136.23.239:1883', { keepalive: 0, connectTimeout: 3600000 });

client.on('connect', () => {
  console.log('connected');
});

client.subscribe('/admin/ea865d/attrs').on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString())
});


setInterval(() => {
  console.log('acbou o tempo');
  client.publish('/admin/ea865d/attrs',  JSON.stringify({ temperatura: Math.random(), humidade: Math.random() }));
}, 1000);
