const { Sketchub } = require('./index');
const apiClient = new Sketchub();

apiClient.setApiKey('api_key');

apiClient.getCategories((response) => {
  console.log(response);
});

apiClient.getProjectDetails('6820', (response) => {
  console.log(response);
});