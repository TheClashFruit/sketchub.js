export = Sketchub;
declare class Sketchub {
    apiKey: string;
    setApiKey(key: any): void;
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
    getCategories(callback: Function): JSON;
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
    getProjectTypes(callback: Function): JSON;
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
    getProjectDetails(id: string, callback: Function): JSON;
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
    getProjectList(page: string, callback: Function): JSON;
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
    getAnnouncements(callback: Function): JSON;
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
    getMeta(callback: Function): JSON;
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
    findUserName(username: string, callback: Function): JSON;
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
    getUser(usernameOrId: string, callback: Function): JSON;
}
