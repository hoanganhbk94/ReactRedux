const Domains = 'https://raw.githubusercontent.com/hoanganhbk94/ReactRedux/master/';

export const RESPONSE_STATUS = {
    succeeded               : 200,
    not_found               : 404,
    unauthorized            : 401,
    forbidden               : 406,
    internal_server_error   : 500
};

export class ServiceApiUrl {
    static getAllUsersUrl() {
        return Domains + 'app/assets/mock/user.json';
    }
}

export class ServiceApiParams {
    static getUsersParams(userId) {
        return {
            'userId': userId
        }
    }
}