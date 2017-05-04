import App from '../components/App'
import Header from '../components/Header'
import withData from '../lib/withData'
import AccountProfile from '../components/AccountProfile'

export default withData((props) => (
    <App>
        <Header pathname={props.url.pathname} />
        <AccountProfile id={props.url.query.id}/>
    </App>
))
//TODO: Add some sort of profile page showing recent wins? currency, stream and stuff. Follow function?
