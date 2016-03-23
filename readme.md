* Replaced jwthelper.zumoJwt with call to auth.sign({ sub: userId })
* Set config { skipVersionCheck: true, data: { dynamicSchema: false }, auth: { secret: 'secret' } }
* Replaced one query against __createdAt with createdAt
* Comment out duplicate response.send in sendrockettofriends
* Added process.env settings to app.js
