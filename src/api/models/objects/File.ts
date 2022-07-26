interface FileI {
    name: string,
    uri: string,
    type: string
    mediaName: string
}

export default class File implements FileI{
    constructor(public name: string, public uri: string, public type: string, public mediaName: string) {

    }

    toFormData() {
        return JSON.parse(JSON.stringify({
            name: this.name,
            uri: this.uri,
            type: this.type
        }))
    }
}