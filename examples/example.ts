require('dotenv').config();

import { Sketchub } from '../index';

const apiClient = new Sketchub();

apiClient.setApiKey(process.env.API_KEY);

apiClient.getCategories((response: JSON) => {
  console.log(response);
});

apiClient.getProjectDetails(1, (response: JSON) => {
  console.log(response);
});

apiClient.getProjectList(1, (response: JSON) => {
  console.log(response);
});