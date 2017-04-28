import { gql, graphql } from 'react-apollo'
import { Feed, Icon } from 'semantic-ui-react'

function AccountList({ data: { allAccounts } }) {
    if (allAccounts && allAccounts.length) {
        return (
            <Feed>
                {allAccounts.map((account, index) =>
                    <Feed.Event key={account.id}>
                        <Feed.Label>
                            <img src={account.avatar} />
                        </Feed.Label>
                        <Feed.Content>
                            <Feed.Summary>
                                <Feed.User>{account.nickname}</Feed.User> have ${account.balance}
                                <Feed.Date>1 hour ago</Feed.Date>
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