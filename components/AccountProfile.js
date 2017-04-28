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
    query accountQuery {
  Account(steamid: "76561198190392539") {
    steamid,
    nickname,
    avatar
  }
}
`

export default graphql(accountQuery, {
    props: ({ data }) => ({
        data
    })
})(AccountProfile)