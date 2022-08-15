const fetch = require('node-fetch');
const ApiMeta = require('./ApiMeta');
const { URLSearchParams } = require('url');

class Sketchub {
  apiKey = '';

  setApiKey(key) {
    this.apiKey = key;
  }

  /**
   * Get Categories.
   *
   * @param {Function} callback Function That will be called when the api request ran.
   * @returns {JSON}
   * 
   * @example
   * apiClient.getCategories((response) => {
   *   console.log(response);
   * });
   */
  async getCategories(callback) {
    const urlParams = new URLSearchParams();
    urlParams.append('api_key', this.apiKey);

    fetch(ApiMeta.URLS.getCategories, { method: 'POST', body: urlParams })
      .then(response => response.json())
      .then(async data => {
        if(data.status === 'success') {
          let categories = [];

          await data.categories.forEach(category => {
            categories.push({
              id: category.id,
              icon: category.category_icon,
              name: category.category_name,
              URLS: category.total_URLS
            });
          });

          if(typeof callback === 'function') callback({ error: false, data: categories });
          else return { error: false, data: categories };
        } else callback({ error: true, message: data.message });
      });
  }

  /**
   * Get Project Types.
   *
   * @param {Function} callback Function That will be called when the api request ran.
   * @returns {JSON}
   * 
   * @example
   * apiClient.getProjectTypes((response) => {
   *   console.log(response);
   * });
   */
  async getProjectTypes(callback) {
    const urlParams = new URLSearchParams();
    urlParams.append('api_key', this.apiKey);

    fetch(ApiMeta.URLS.getProjectTypes, { method: 'POST', body: urlParams })
      .then(response => response.json())
      .then(async data => {
        if(data.status === 'success') {
          let categories = [];

          await data.categories.forEach(dataForEach => {
            categories.push({
              id: dataForEach.id,
              title: dataForEach.name,
              name: dataForEach.value,
              icon: dataForEach.icon,
              source: dataForEach.is_source_code === 1,
              projects: dataForEach.total_projects,
              extension: dataForEach.extensions
            });
          });

          if(typeof callback === 'function') callback({ error: false, data: categories });
          else return { error: false, data: categories };
        } else callback({ error: true, message: data.message });
      });
  }

  /**
   * Get Project Deatils.
   *
   * @param {string} id The id of the project.
   * @param {Function} callback Function That will be called when the api request ran.
   * @returns {JSON}
   * 
   * @example
   * apiClient.getProjectDetails('1', (response) => {
   *   console.log(response);
   * });
   */
  async getProjectDetails(id, callback) {
    const urlParams = new URLSearchParams();
    urlParams.append('api_key', this.apiKey);
    urlParams.append('project_id', id);

    fetch(ApiMeta.URLS.getProjectDetails, { method: 'POST', body: urlParams })
      .then(response => response.json())
      .then(async data => {
        if(data.status === 'success') {
          let screenshots = [];

          screenshots.push(data.screenshot1);
          screenshots.push(data.screenshot2);
          screenshots.push(data.screenshot3);
          screenshots.push(data.screenshot4);
          screenshots.push(data.screenshot5);

          if(typeof callback === 'function') callback({ 
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
              verified: data.is_verified === 1,
              editorsChoice: data.is_editorchoice === 1,
              published: data.published_timestamp,
              user: {
                username: data.user_name,
                image: data.user_profile_pic,
                badge: new ApiMeta().badgeFromInt(data.user_badge),
              }
            } 
          });
          else return { 
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
              verified: data.is_verified === 1,
              editorsChoice: data.is_editorchoice === 1,
              published: data.published_timestamp,
              user: {
                username: data.user_name,
                image: data.user_profile_pic,
                badge: new ApiMeta().badgeFromInt(data.user_badge),
              }
            } 
          };
        } else callback({ error: true, message: data.message });
      });
  }

  /**
   * Get Project List.
   *
   * @param {string} page Page number.
   * @param {Function} callback Function That will be called when the api request ran.
   * @returns {JSON}
   * 
   * @example
   * apiClient.getProjectList('1', (response) => {
   *   console.log(response);
   * });
   */
  async getProjectList(page, callback) {
    const urlParams = new URLSearchParams();
    urlParams.append('api_key', this.apiKey);
    urlParams.append('page_number', page);

    fetch(ApiMeta.URLS.getProjectList, { method: 'POST', body: urlParams })
      .then(response => response.json())
      .then(async data => {
        if(data.status === 'success') {
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
              verified: dataForEach.is_verified === 1,
              editorsChoice: dataForEach.is_editorchoice === 1,
              published: dataForEach.published_timestamp,
              user: {
                username: dataForEach.user_name,
                image: dataForEach.user_profile_pic,
                badge: new ApiMeta().badgeFromInt(dataForEach.user_badge),
              }
            });
          });

          if(typeof callback === 'function') callback({ error: false, data: { totalPages: data.total_pages, projects: projects } });
          else return { error: false, data: { totalPages: data.total_pages, projects: projects } };
        } else callback({ error: true, message: data.message });
      });
  }

  ///////////////////////////////////////////////

  /**
   * Get Announcements.
   *
   * @param {Function} callback Function That will be called when the api request ran.
   * @returns {JSON}
   * 
   * @example
   * apiClient.getAnnouncements((response) => {
   *   console.log(response);
   * });
   */
  async getAnnouncements(callback) {
    const urlParams = new URLSearchParams();
    urlParams.append('api_key', this.apiKey);

    fetch(ApiMeta.URLS.getAnnouncements, { method: 'POST', body: urlParams })
      .then(response => response.json())
      .then(async data => {
        if(data.status === 'success') {
          let announcements = [];

          data.news.forEach(announcement => {
            announcements.push({
              id: announcement.id,
              title: announcement.title,
              message: announcement.message,
              date: announcement.timestamp,
              image: announcement.image
            });
          });

          if(typeof callback === 'function') callback({ error: false, data: announcements });
          else return { error: false, data: announcements };
        } else callback({ error: true, message: data.message });
      });
  }

  /**
   * Get Metadata of Sketchub.
   *
   * @param {Function} callback Function That will be called when the api request ran.
   * @returns {JSON}
   * 
   * @example
   * apiClient.getMeta((response) => {
   *   console.log(response);
   * });
   */
  async getMeta(callback) {
    const urlParams = new URLSearchParams();
    urlParams.append('api_key', this.apiKey);

    fetch(ApiMeta.URLS.getMeta, { method: 'POST', body: urlParams })
      .then(response => response.json())
      .then(async data => {
        if(data.status === 'success') {
          if(typeof callback === 'function') callback({ error: false, data: data });
          else return { error: false, data: data };
        } else callback({ error: true, message: data.message });
      });
  }

  ///////////////////////////////////////////////

  /**
   * Find a username.
   *
   * @param {string} username The username.
   * @param {Function} callback Function That will be called when the api request ran.
   * @returns {JSON}
   * 
   * @example
   * apiClient.findUserName('TheClashFruit', (response) => {
   *   console.log(response);
   * });
   */
  async findUserName(username, callback) {
    const urlParams = new URLSearchParams();
    urlParams.append('api_key', this.apiKey);
    urlParams.append('user_name', username);
    urlParams.append('find_relevant', true);

    fetch(ApiMeta.URLS.findUserName, { method: 'POST', body: urlParams })
      .then(response => response.json())
      .then(async data => {
        if(data.status === 'success') {
          if(typeof callback === 'function') callback({ error: false, data: data.relevant_usernames });
          else return { error: false, data: data.relevant_usernames };
        } else callback({ error: true, message: data.message });
      });
  }

  /**
   * Get user's deatils.
   *
   * @param {string} usernameOrId The user's username or id.
   * @param {Function} callback Function That will be called when the api request ran.
   * @returns {JSON}
   * 
   * @example
   * apiClient.findUserName('Amitoj', (response) => {
   *   console.log(response);
   * });
   * 
   * @example
   * apiClient.findUserName('412', (response) => {
   *   console.log(response);
   * });
   */
  async getUser(usernameOrId, callback) {
    const urlParams = new URLSearchParams();
    urlParams.append('api_key', this.apiKey);

    if(usernameOrId.match(/^[0-9]+$/)) urlParams.append('user_id', usernameOrId);
    else urlParams.append('user_name', usernameOrId);

    fetch(ApiMeta.URLS.getUser, { method: 'POST', body: urlParams })
      .then(response => response.json())
      .then(async data => {
        if(data.status === 'success') {
          let userData = {
            uid: data.uid,
            username: data.username,
            badge: new ApiMeta().badgeFromInt(data.badge),
            about: data.about,
            country: {
              name: data.country,
              code: data.countryCode
            },
            image: data.profilepic,
            punishment: {
              banned: data.is_banned === 1,
              reason: data.ban_reason
            },
            stats: {
              likes: data.total_likes,
              downloads: data.total_downloads,
              publicProjects: data.total_public_projects,
              verifiedProjects: data.total_verified_projects,
              editorChoiceProjects: data.total_editor_choice_projects
            }
          };

          if(typeof callback === 'function') callback({ error: false, data: userData });
          else return { error: false, data: userData };
        } else callback({ error: true, message: data.message });
      });
  }

  // string.match(/^[0-9]+$/)
}

module.exports = Sketchub;