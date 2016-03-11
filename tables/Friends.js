var wrap = require('azure-mobile-apps-compatibility').wrap,
    table = require('azure-mobile-apps').table();


table.read(wrap.read(function (tables, push, request, user, statusCodes) {
function read(query, user, request) {
    
    query.where({fromUserId : user.userId});
    request.execute();
}

return read;
}));


module.exports = table;
