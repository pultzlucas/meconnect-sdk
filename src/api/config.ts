export const Config = {
    // apiDomain: 'https://meconnect-api.herokuapp.com/api'
    apiDomain: 'http://15.228.128.65/api'
}

export function setApiDomain(domain: string) {
    Config.apiDomain = domain
}
