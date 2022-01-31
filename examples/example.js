require('dotenv').config();

const { Sketchub } = require('../index');
const apiClient = new Sketchub();

apiClient.setApiKey(process.env.API_KEY);

apiClient.getCategories((response) => {
  console.log(response);
});

await apiClient.getProjectTypes((response) => {
  console.log(response);
});

await apiClient.getProjectDetails(1, (response) => {
  console.log(response);
});

await apiClient.getProjectList(1, (response) => {
  console.log(response);
});

await apiClient.getAnnouncements((response) => {
  console.log(response);
});

await apiClient.getMeta((response) => {
  console.log(response);
});