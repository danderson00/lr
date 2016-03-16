var app = require('express')(),
    mobileApp = require('azure-mobile-apps')({ skipVersionCheck: true, data: { dynamicSchema: false }, auth: { secret: 'secret' } })

process.env.STORAGE_ACCOUNT_NAME = "dalensrocket"
process.env.STORAGE_ACCOUNT_KEY = "YAWZGccnUGJZG452g0TU67rQC29hNHQM5qRoa0SzMJjseSxTb8w6RUvuwPd9styrotpBrW4QGf4rD2dj7O9Rbw=="

mobileApp.tables.import('tables')
mobileApp.api.import('api')
app.use(mobileApp)
app.listen(process.env.PORT || 3000)
