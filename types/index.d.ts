export declare class Sketchub {
  setApiKey(apiKey: String): void

  getCategories(callback: Function): JSON
  getProjectDetails(id: Number, callback: Function): JSON
  getProjectList(page: Number, callback: Function): JSON
  getProjectTypes(callback: Function): JSON

  getAnnouncements(callback: Function): JSON
  getMeta(callback: Function): JSON
}