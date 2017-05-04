import { gql, graphql } from 'react-apollo'
import { Feed, Icon } from 'semantic-ui-react'
import Link from 'next/link'

function AccountList({ data: { loading, error, allAccounts } }) {
if (loading) { return <p>Loading accounts</p> }
    if (allAccounts) {
        return (
            <Feed>
                {allAccounts.map((account, index) =>
                    <Feed.Event key={account.id}>
                        <Feed.Label>
                            <img src={account.avatar} />
                        </Feed.Label>
                        <Feed.Content>
                            <Feed.Summary>
                        	    <Link as={`/u/${account.steamid}`} href={`/user?id=${account.steamid}`}><Feed.User>{account.nickname}</Feed.User></Link>
                            </Feed.Summary>
                        </Feed.Content>
                    </Feed.Event>
                )}
            </Feed>
        )
    }
    return <div>Loading</div>
}

const allAccounts = gql`
    query allAccounts {
        allAccounts(orderBy: createdAt_DESC) {
            id,
            steamid,
            nickname,
            avatar,
            balance
        }
    }
`

export default graphql(allAccounts, {
    props: ({ data }) => ({
        data
    })
})(AccountList)