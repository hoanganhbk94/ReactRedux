import BaseEntity from "./BaseEntity";

export default class UserEntity extends BaseEntity {
    id: String          = '';
    name: String        = '';
    email: String       = '';

    mapFromJSON(userJSON) {
        this.id         = userJSON.id;
        this.name       = userJSON.name;
        this.email      = userJSON.email;
    }
}