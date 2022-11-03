export const Config = {
    // apiDomain: 'https://meconnect-api.herokuapp.com/api'
    apiDomain: 'http://44.202.106.85/api'
}

export function setApiDomain(domain: string) {
    Config.apiDomain = domain
}
