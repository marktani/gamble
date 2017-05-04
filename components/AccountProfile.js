import { gql, graphql } from 'react-apollo'

function AccountProfile({ id, data: { loading, error, allAccounts } }) {
    if (error) { return <p>{error.message}</p> }
    if (loading) {
      return <p>Loading {id}</p>
    } else {
      debugger
      if (allAccounts) {
          return <div>Username: {allAccounts[0].nickname}</div>
      }
    }
    return <p>No account with this id.</p>
}

const accountQuery = gql`
    query Account($steamid: String!) {
        allAccounts(filter: {
          steamid: $steamid
        }) {
            id
            nickname
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
