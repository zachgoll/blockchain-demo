export class User {
    public id: number;
    public email: string;
    public username: string;
    public f_name: string;
    public l_name: string;
    public password: string;
    public created_at: any;
    public updated_at: any;
    public picture_url: string;
    public session: string;

    constructor(
        id: number,
        email: string,
        username: string,
        f_name: string,
        l_name: string,
        password: string,
        created_at: any,
        updated_at: any,
        picture_url: string,
        session: string
    ) {
        this.id = id;
        this.email = email;
        this.username = username;
        this.f_name = f_name;
        this.l_name = l_name;
        this.password = password;
        this.created_at = created_at;
        this.updated_at = updated_at;
        this.picture_url = picture_url;
        this.session = session;
    }
}
