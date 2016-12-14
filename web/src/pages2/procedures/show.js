const React = require('react')
const {Link, Redirect} = require('react-router')
const data = require('../../utils/data')()
const ButtonComponent = require('../../components/button-save')
const PageTitle = require('../../components/page-title')
const Footer = require('../../components/footer')
//const confirm = require('react-confirm2')

const ShowProcedure = React.createClass({
    getInitialState() {
        return {procedure: '', resolved: false}
    },
    componentDidMount() {
        data.get('procedures', this.props.params.id).then(procedure => {
            this.setState({procedure})
        })
    },
    handleRemove(e) {
        e.preventDefault()
        if (confirm('Are you sure?')) {
            data.remove('procedure', this.props.params.id, this.state.procedure).then(res => {
                this.setState({resolved: true})
            })
        }
    },
    render() {
        return (
            <div>
                {this.state.resolved
                    ? <Redirect to="/procedures"/>
                    : null}
                <PageTitle title="Procedure"/>
                <hr className="w-50 tl b--dark-blue"/>
                <div>
                    <div className="tc avenir">
                        <dl className="lh-title pa4 mt0">
                            <dt className="f5 b mt2">Procedure</dt>
                            <dd className="ml0">{this.state.procedure.procedure}</dd>
                            <hr className="w-10"/>
                            <dt className="f5 b mt2">Date Performed</dt>
                            <dd className="ml0">{this.state.procedure.datePerformed}</dd>
                            <hr className="w-10"/>
                            <dt className="f5 b mt2">Procedure Category</dt>
                            <dd className="ml0">{this.state.procedure.category}</dd>
                            <dt className="f5 b mt2">TEST FOR ID</dt>
                            <dd classNAme="ml0">{this.state.procedure._id}</dd>
                        </dl>
                    </div>
                </div>
                <hr className="w-50 tl b--dark-blue"/>
                <div className="mb4">
                    <Link to={`/procedures/${this.state.procedure._id}/edit`}><ButtonComponent title="Edit Procedure Record"/></Link>
                    <a href="#" onClick={this.handleRemove}><ButtonComponent title="Remove Procedure"/></a>
                    <Link to="/procedures"><ButtonComponent title="Return"/></Link>
                </div>
                <Footer/>
            </div>
        )
    }
})

module.exports = ShowProcedure
