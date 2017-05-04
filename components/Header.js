import Link from 'next/link'

export default ({ pathname }) => (
  <header>
    <Link prefetch href='/'>
      <a className={pathname === '/' && 'is-active'}>Home</a>
    </Link>
    <Link prefetch href='/about'>
      <a className={pathname === '/about' && 'is-active'}>About</a>
    </Link>
    <Link href='/chat'>
      <a className={pathname === '/chat' && 'is-active'}>Chat</a>
    </Link>
    <a href="/auth/steam">Login</a>

    <style jsx>{`
        header {
          margin-bottom: 25px;
        }
        a {
          font-size: 14px;
          margin-right: 15px;
          text-decoration: none;
        }
        .is-active {
          text-decoration: underline;
        }
    `}</style>
  </header>
)
