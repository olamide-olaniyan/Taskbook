/**
 * Configuration for OAuth2 and REST API requests.
 * 
 * NOT FOR PRODUCTION. PURELY FOR DEMONSTRATION PURPOSES!
 */

const rootURL = 'http://taskbook.local';

const config = {
    rootURL: rootURL,
    taskRoute: `${rootURL}/wp-json/wp/v2/tasks/`,
    authURI: `${rootURL}/oauth/authorize`,
    clientID: 'iYaANDWlOEjL844QhqPnk2OmhpG9I6sT5yW33GQM',
    responseType: 'token',
    tokenName: 'taskAppToken'
}

export default config ;