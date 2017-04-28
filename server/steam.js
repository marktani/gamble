require('isomorphic-fetch')
const Apollo = require('react-apollo')
const jwt = require('jsonwebtoken')
const SteamStrategy = require('passport-steam').Strategy

const client = new Apollo.ApolloClient({
    networkInterface: Apollo.createNetworkInterface({
        uri: 'https://api.graph.cool/simple/v1/furval'
    })
})

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

    //TODO: Improve this, crappy code.
    client.query({
        query: findUser,
        variables: {
            steamid: userData.steamid
        }
    })
    .then(data => {
        if (data.data.Account === null) {
            console.log('No user found.')
            //TODO: Run mutation createUser
        }

        console.log(userData.avatar)
        console.log(data.data.Account.avatar)

        if (data.data.Account.nickname !== userData.nickname && data.data.Account.avatar !== userData.avatar) {
            console.log('User should be updated for nickname and avatar')
            //TODO: Run mutation updateUser
        }

        const payload = {
            sub: data.data.Account.id
        }
        const token = jwt.sign(payload, 'some fucking secret')
        return done(null, token, userData)
    })
    .catch(error => console.error(error))
    
    //TODO: Create JWT for account
})

/* Update to use updateOrCreateAccount instead of query + mutation when implemented */
const findUser = Apollo.gql`
    query findUser($steamid: String!) {
        Account(steamid: $steamid) {
            id,
            nickname,
            avatar
        }
    }
`

/*const createUser = Apollo.gql`
    mutation createUser($steamid: String! $nickname: String! $avatar: String!) {

    }
`*/