const Helper = require("./helper.js")

function code(message) {
    // code
    const user = Helper.getUsername();
    const notifications = Helper.getNotifications();

    let userNotifications = message.replaceAll("{{user_name}}", user)
    userNotifications = userNotifications.replaceAll("{{notifications}}", notifications)

    return userNotifications
}


// console.log(code("Olá {{user_name}}"))
// console.log(code("Você tem {{notifications}} notificações"))
// console.log(code("{{user_name}} - {{notifications}}"))
// console.log(code("{{user_name}}, {{notifications}}: {{user_name}}"))

module.exports = code