import { gql, graphql } from 'react-apollo'

function AccountProfile({ id, data: { loading, error, accountQuery } }) {
    if (error) { return <p>{error.message}</p> }
if (loading) { return <p>Loading {id}</p> }
console.log(accountQuery)
    if (accountQuery) {
        return <div>Username: {accountQuery}</div>
    }
    return <p>No account with this id.</p> 
}

const accountQuery = gql`
    query Account($steamid: String!) {
        Account(steamid: $steamid) {
            nickname,
            avatar
        }
    }
`

export default graphql(accountQuery, {
    options: {
        variables: {
            steamid: "76561198190392539"
        }
    },
    props: ({ data }) => ({
        data
    })
})(AccountProfile)
