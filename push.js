let push = require("web-push");

let vapidKeys = {
    publicKey: 'BHc-j9uPncO47wJJwaRgkAPr3waDPGmZ9zBZTpjquNLTyzxMrf8kmnip3QSJ5gLwtLnKrtXUFCgy3Fvk8brn9BU',
    privateKey: '2pD8TFCjajnZ0OBZXXHxQ8u56sIjH9p9QZfl59kNkXw'
}

push.setVapidDetails("mailto:test@code.co.uk", vapidKeys.publicKey, vapidKeys.privateKey)

let sub={};

push.sendNotification(sub, "test message");