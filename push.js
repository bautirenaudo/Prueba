let push = require("web-push");

let vapidKeys = {
    publicKey: 'BHc-j9uPncO47wJJwaRgkAPr3waDPGmZ9zBZTpjquNLTyzxMrf8kmnip3QSJ5gLwtLnKrtXUFCgy3Fvk8brn9BU',
    privateKey: '2pD8TFCjajnZ0OBZXXHxQ8u56sIjH9p9QZfl59kNkXw'
}

push.setVapidDetails("mailto:test@code.co.uk", vapidKeys.publicKey, vapidKeys.privateKey)

let sub = {
    endpoint: "https://fcm.googleapis.com/fcm/send/ekjaf0BmqNE:APA91bH4aBSWIDwtKgUikgUTQGjjuODwp3Ta6XK1_UuHthpGglmQxft0w8siGQPx72tTo3Xy1GYPiVmsRfXf8pAfS1IxfHkvsMn3dE8DFiObbkNgoenpYG50nTdzcDx733lTWufDLz-W",
    expirationTime: null,
    keys: {
        "p256dh": "BFUMGLTZOhbuYTmU7P8CnGofow0Iu-lEOgTkYi1tZwrQCoQhUg_DckBRLL6vgOkTzbzuo1R5-mteepHsoShzpjk",
        auth: "xUY559B6DxJlchLNxiA4ZA"
    }
};

push.sendNotification(sub, "test message");