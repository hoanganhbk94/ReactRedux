export default class Validation {
    static isEmail(email) {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
        return reg.test(email.trim()) !== false
    }

    static isPassword(password) {
        return password.length > 5
    }
}