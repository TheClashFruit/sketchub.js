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
        } else callback({ error: true });
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

          await this.getCategories((response) => { 
            callback({ 
              error: false, 
              data: { 
                id: id, 
                title: data.title, 
                description: data.description,
                changeLog: data.whatsnew,
                category: response.data.find(element => element.name == data.category),
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
          });
        } else callback({ error: true });
      });
  }

  getProjectList(callback) {
    
  }
}

module.exports = Sketchub;