var mongo = require('./mongo.js');

// exports.login = function (message, callback) {
//   console.log("Inside app.js: login", message.message.userName, message.message.password);
//   mongo.findDocumentFields("Users",{ 'userName' : message.message.userName, 'password': message.message.password}, {"userName":true,"_id":false}, function (data) {
// //    console.log("Login data",data);
//     message.message = data[0];
//     message.status = data.length == 1 ? "Success" : "Fail";
//     callback(message);
// //     mongo.sendWsMessage(connection, message);
//   })
// }

exports.buttonClick = function(message, callback) {
  mongo.findDocument("onlineUsers",{}, function (data) {
    console.log("@@@@@@@@@@U#########",data);
    message.message = data;
    console.log("buttonClick",data)
    message.status = "Success";
    callback(message);
    // mongo.sendWsMessage(connection, message);
  });
}
