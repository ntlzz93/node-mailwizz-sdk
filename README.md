We are still developing this SDK.

To to know which API is available and params, go to `api` directory.

This SDK are using native Promise instead of Callback, so you can async/await as you want

How to use
====================

Example:

```
const mailwizzSdk = require('node-mailwizz-sdk');

const config = {
    publicKey: 'publicKey',
    secret: 'secretKey',
    baseUrl: 'yourMailwizzApiUrl'
};

const lists = new mailwizzSdk.Lists(config);

lists.getLists()
    .then(function(result) {
        //TODO: do what you want
    })
    .catch(function(err) {
        //handle error here
    });
```