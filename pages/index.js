import withData from '../lib/withData'
import App from '../components/App'
import Header from '../components/Header'

export default withData((props) => (
  <App>
    <Header pathname={props.url.pathname} />
    Okay?
  </App>
))
