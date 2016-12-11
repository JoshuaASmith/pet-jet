const React = require('react')
const {Link} = require('react-router')
const ButtonComponent = require('../components/button-save')
const PageTitle = require('../components/page-title')

const About = React.createClass({
    render() {
        return (
            <div className="w-50 center tc mt4">
                <PageTitle title="About Pet Duet"/>
                <Link to="/">
                    <ButtonComponent title="Home"/>
                </Link>
            </div>
        )
    }
})

module.exports = About
