# Sketchub.js

An easier way to use Sketchub's api in JavaScript or TypeScript.

## Getting Started

### Installation

- With NPM: 
  `npm i sketchub.js`
- With Yarn: 
  `yarn add sketchub.js`

### Adding Sketchub.js

```js
const { Sketchub } = require('sketchub.js');
const apiClient = new Sketchub();

apiClient.setApiKey(process.env.API_KEY);
```

### Making api calls

```js
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

// OR

const getProjectTypes   = await apiClient.getProjectTypes();
const getProjectDetails = await apiClient.getProjectDetails();
const getProjectList    = await apiClient.getProjectList();
const getAnnouncements  = await apiClient.getAnnouncements();
const getMeta           = await apiClient.getMeta();

console.log(getProjectTypes);
console.log(getProjectDetails);
console.log(getProjectList);
console.log(getAnnouncements);
console.log(getMeta);
```