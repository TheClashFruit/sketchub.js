const fetch = require('node-fetch');
const ApiMeta = require('./ApiMeta');
const { URLSearchParams } = require('url');

class Sketchub {
  apiKey = '';

  setApiKey(key) {
    this.apiKey = key;
  }

  async getCategories(callback) {
    const urlParams = new URLSearchParams();
    urlParams.append('api_key', this.apiKey);

    fetch(ApiMeta.PROJECTS.getCategories, { method: 'POST', body: urlParams })
      .then(response => response.json())
      .then(async data => {
        if(data.status == 'success') {
          let categories = []

          await data.categories.forEach(category => {
            categories.push({
              id: category.id,
              icon: category.category_icon,
              name: category.category_name,
              projects: category.total_projects
            });
          });

          callback({ error: false, data: categories });
        } else callback({ error: true, message: data.message });
      });
  }

  async getProjectDetails(id, callback) {
    const urlParams = new URLSearchParams();
    urlParams.append('api_key', this.apiKey);
    urlParams.append('project_id', id);

    fetch(ApiMeta.PROJECTS.getProjectDetails, { method: 'POST', body: urlParams })
      .then(response => response.json())
      .then(async data => {
        if(data.status == 'success') {
          let screenshots = [];

          screenshots.push(data.screenshot1);
          screenshots.push(data.screenshot2);
          screenshots.push(data.screenshot3);
          screenshots.push(data.screenshot4);
          screenshots.push(data.screenshot5);

          callback({ 
            error: false, 
            data: { 
              id: id, 
              title: data.title, 
              description: data.description,
              changeLog: data.whatsnew,
              category: data.category,
              type: data.project_type,
              screenshots,
              size: data.project_size,
              likes: data.likes,
              comments: data.comments,
              downloads: data.downloads,
              verified: data.is_verified == 1 ? true : false,
              editorsChoice: data.is_editorchoice == 1 ? true : false,
              published: data.published_timestamp,
              user: {
                username: data.user_name,
                image: data.user_profile_pic,
                badge: new ApiMeta().badgeFromInt(data.user_badge),
              }
            } 
          });
        } else callback({ error: true, message: data.message });
      });
  }

  getProjectList(page, callback) {
    const urlParams = new URLSearchParams();
    urlParams.append('api_key', this.apiKey);
    urlParams.append('page_number', page);

    fetch(ApiMeta.PROJECTS.getProjectList, { method: 'POST', body: urlParams })
      .then(response => response.json())
      .then(async data => {
        if(data.status == 'success') {
          let projects = [];

          await data.projects.forEach(dataForEach => {
            let screenshots = [];

            screenshots.push(dataForEach.screenshot1);
            screenshots.push(dataForEach.screenshot2);
            screenshots.push(dataForEach.screenshot3);
            screenshots.push(dataForEach.screenshot4);
            screenshots.push(dataForEach.screenshot5);

            projects.push({ 
              id: dataForEach.id, 
              title: dataForEach.title, 
              description: dataForEach.description,
              changeLog: dataForEach.whatsnew,
              category: dataForEach.category,
              type: dataForEach.project_type,
              screenshots,
              size: dataForEach.project_size,
              likes: dataForEach.likes,
              comments: dataForEach.comments,
              downloads: dataForEach.downloads,
              verified: dataForEach.is_verified == 1 ? true : false,
              editorsChoice: dataForEach.is_editorchoice == 1 ? true : false,
              published: dataForEach.published_timestamp,
              user: {
                username: dataForEach.user_name,
                image: dataForEach.user_profile_pic,
                badge: new ApiMeta().badgeFromInt(dataForEach.user_badge),
              }
            });
          });

          callback({ error: false, data: { totalPages: data.total_pages, projects: projects } });
        } else callback({ error: true, message: data.message });
      });
  }
}

module.exports = Sketchub;