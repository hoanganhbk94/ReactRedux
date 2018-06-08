import {RESPONSE_STATUS, ServiceApiUrl} from "./ServiceDef";

function* getAllUserFromServer() {
    const response = yield fetch(ServiceApiUrl.getAllUsersUrl(), {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    let responseJson = yield response.status === RESPONSE_STATUS.succeeded ? response.json() : [];
    return responseJson['data'];
}

export const ServiceManager = {
    getAllUserFromServer
};