const Apollo = require('react-apollo')
const jwt = require('jsonwebtoken')
const SteamStrategy = require('passport-steam').Strategy

module.exports = new SteamStrategy({
    returnURL: 'http://localhost:3000/auth/steam/return',
    realm: 'http://localhost:3000/',
    apiKey: 'E329DD6C9CCCF7D5ACB87833ECBE100A'
}, (identifier, profile, done) => {
    const userData = {
        steamid: profile._json.steamid,
        nickname: profile._json.personaname,
        avatar: profile._json.avatarfull
    }

    //TODO: Query for account

    //TODO: Create account

    //TODO: Create JWT for account
})

/* updateOrCreateAccount??? */
const AccountQuery = Apollo.gql`
    query AccountQuery {
        Account(steamid: "") {
            nicname,
            avatar
        }
    }
`