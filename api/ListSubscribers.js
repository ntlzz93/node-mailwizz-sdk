const Request = require('./Request');
const sprintf = require('sprintf').sprintf;

const path = '/lists/%s/subscribers';

class ListSubscribers extends Request {
    constructor(config) {
        super(config);
    }

    create(listUid, email, firstName = '', lastName = '') {
        let data = {
            EMAIL: email,
            FNAME: firstName,
            LNAME: lastName
        };

        this.method = Request.Type.POST;
        this.url = sprintf(path, listUid);
        this.data = data;

        return this.send();
    }
}

module.exports = ListSubscribers;
