var app = require('express')(),
    mobileApp = require('azure-mobile-apps')({ skipVersionCheck: true, data: { dynamicSchema: false }, auth: { secret: 'secret' } })

mobileApp.tables.import('tables')
mobileApp.api.import('api')
app.use(mobileApp)
app.listen(process.env.PORT || 3000)
