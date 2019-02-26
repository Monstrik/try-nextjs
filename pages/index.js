import cowsay from 'cowsay-browser'
import Router from 'next/router'

import Head from 'next/head'
import Link from 'next/link'

import "./styles.scss"

function Home() {
    return <div>
        <Head>
            <title>Home page title</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
        </Head>
        {/*<Head>*/}
            {/*<meta name="viewport" content="initial-scale=2.2, width=device-width" key="viewport" />*/}
        {/*</Head>*/}
        <h4>Home</h4>

        <pre>
            {cowsay.say({ text: 'hi there!' })}
        </pre>
        <div>
            Click <span onClick={() => Router.push('/stars')}>here</span> to get stars
        </div>
        <hr/>
        <Link href='/page1'><a>About</a></Link>
        |  <Link href='/hello'><a>Hello</a></Link>
        |  <Link href='/stars'><a>Stars</a></Link>
    </div>
}

export default Home