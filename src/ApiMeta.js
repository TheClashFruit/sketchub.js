class ApiMeta {
  badgeReverse = {
    60: 'Developer',
    50: 'Admin',
    40: 'Moderator',
    20: 'Vip',
    15: 'Premuim',
    5:  'Verified',
    0:  'User'
  }

  badgeFromInt(int) {
    return this.badgeReverse[int];
  }

  badgeToInt(badge) {
    return ApiMeta.BADGE[badge];
  }
}

ApiMeta.URLS = {
  getCategories: 'https://sketchub.in/api/v3/get_categories',
  getProjectDetails: 'https://sketchub.in/api/v3/get_project_details',
  getProjectList: 'https://sketchub.in/api/v3/get_project_list',
  getAnnouncements: 'https://sketchub.in/api/v3/get_news',
  getMeta: 'https://sketchub.in/api/v3/get_meta_data.php',
  getProjectTypes: 'https://sketchub.in/api/v3/get_project_types',
}

ApiMeta.BADGE = {
  Developer: 60,
  Admin: 50,
  Moderator: 40,
  Vip: 20,
  Premuim: 15,
  Verified: 5,
  User: 0
}

module.exports = ApiMeta;