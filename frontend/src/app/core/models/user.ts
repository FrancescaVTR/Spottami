export class User {

    private _id: number;
    private _name: string;
    private _password: string;
    
    constructor(
        id: number,
        name: string,
        password: string
    ) {
        this._id = id;
        this._name = name;
        this._password = password;
    }

    get id() {
        return this._id
    }
}