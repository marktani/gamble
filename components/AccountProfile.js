import { gql, graphql } from 'react-apollo'

function AccountProfile({ data: { accountQuery } }) {
    console.log(accountQuery)
    if (accountQuery) {
        return (
            <div>Username: </div>
        )
    }
    return <div>Loading</div>
}

const accountQuery = gql`
    query accountQuery($steamid: String!) {
  Account(steamid: $steamid) {
    nickname,
    avatar
  }
}
`

export default graphql(accountQuery, {
    props: ({ data }) => ({
        data
    }),
    variables: {
        steamid: userData.steamid
    }
})(AccountProfile)