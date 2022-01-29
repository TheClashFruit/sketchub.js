require('dotenv').config();

const { Sketchub } = require('./index');
const apiClient = new Sketchub();

apiClient.setApiKey(process.env.API_KEY);

apiClient.getProjectList('1', (response) => {
  console.log(response.data.projects);
});