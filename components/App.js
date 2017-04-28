import Head from 'next/head'

export default ({ children }) => (
  <main>
    <Head>
      <link rel='stylesheet' href='//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css' />
    </Head>
    {children}
  </main>
)

/* Move header in here? */