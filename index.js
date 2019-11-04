const mqtt = require('mqtt');
const client = mqtt.connect('mqtt://104.155.133.197:1883', { keepalive: 0, connectTimeout: 3600000 });

client.on('connect', () => {
  console.log('connected');
});

client.subscribe('/admin/b17645/attrs').on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString())
});


setInterval(() => {
  console.log('acbou o tempo');
  client.publish('/admin/b17645/attrs',  JSON.stringify({ temperatura: Math.random(), humidade: Math.random() }));
}, 1000);
