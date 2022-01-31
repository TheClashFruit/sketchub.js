require('dotenv').config();

const { Sketchub } = require('../index');
const apiClient = new Sketchub();

apiClient.setApiKey(process.env.API_KEY);

apiClient.getCategories((response) => {
  console.log(response);
});

apiClient.getProjectTypes((response) => {
  console.log(response);
});

apiClient.getProjectDetails(1, (response) => {
  console.log(response);
});

apiClient.getProjectList(1, (response) => {
  console.log(response);
});

apiClient.findUserName('Amitoj', (response) => {
  console.log(response);
});

apiClient.getUser('412', (response) => {
  console.log(response);
});

apiClient.getAnnouncements((response) => {
  console.log(response);
});

apiClient.getMeta((response) => {
  console.log(response);
});