export const Config = {
    apiDomain: 'https://meconnect-api.herokuapp.com/api'
}

export function setApiDomain(domain: string) {
    Config.apiDomain = domain
}
