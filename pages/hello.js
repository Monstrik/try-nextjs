import React from 'react'

class HelloUA extends React.Component {
    static async getInitialProps({ req }) {
        const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
        return { userAgent,name:"Alex" }
    }

    render() {
        return (
            <div>
                Hello {this.props.name}!
                <hr/>
                {this.props.userAgent}
            </div>
        )
    }
}

export default HelloUA