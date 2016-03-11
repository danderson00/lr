var wrap = require('azure-mobile-apps-compatibility').wrap,
    table = require('azure-mobile-apps').table();


table.insert(wrap.insert(function (tables, push, request, user, statusCodes) {
function insert(item, user, request) {
    item.fromUserId = user.userId;
    item.toUserId = user.userId;
    item.rocketFileId = '';
    request.execute();

}

return insert;
}));

table.read(wrap.read(function (tables, push, request, user, statusCodes) {
function read(query, user, request) {
    query.where({toUserId : user.userId});
    query.orderByDescending('createdAt');
    request.execute();

}

return read;
}));


module.exports = table;
