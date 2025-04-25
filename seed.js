const mongoose = require('mongoose');
const Incident = require('./Models/incident.model.js');
require('dotenv').config();

mongoose.connect(process.env.DATABASE_URI, {
  dbName: 'HumanChainAI',
}).then(async () => {

  await Incident.insertMany([
    {
      title: 'Title 1',
      description: 'Decription 1',
      severity: 'Medium'
    },
    {
      title: 'Title 2',
      description: 'Description 2',
      severity: 'High'
    }
  ]);

  console.log('Sample incidents inserted');
  mongoose.disconnect();
});
