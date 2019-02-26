import cowsay from 'cowsay-browser'
import Link from 'next/link'


function Page1() {
    return <div>
        <h4>next.js!</h4>
        <pre className="red">
            {cowsay.say({ text: 'hi again!' })}
        </pre>
        <Link href='/index'><a>Home</a></Link>
    </div>
}

export default Page1