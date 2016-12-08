const React = require('react')
const {Link, Redirect} = require('react-router')
const data = require('../../utils/data')()
//const confirm = require('react-confirm2')

const ShowCategory = React.createClass({
    getInitialState() {
        return {category: '', resolved: false}
    },
    componentDidMount() {
        data.get('categories', this.props.params.id).then(category => {
            this.setState({category})
        })
    },
    handleRemove(e) {
        e.preventDefault()
        if (confirm('Are you sure?')) {
            data.remove('categories', this.props.params.id, this.state.category).then(res => {
                this.setState({resolved: true})
            })

        }
    },
    render() {
        return (
            <div>
                {this.state.resolved
                    ? <Redirect to="/categories"/>
                    : null}
                <h3 className="fw1 f2 tc">Category</h3>
                <hr className="w-50 tl b--dark-blue"/>
                <div className="tc">
                    <h3>{this.state.category._id}</h3>
                    <h3>{this.state.category.category}</h3>
                </div>
                <button className="f6 fw1 link dim br2 ba ph3 pv2 mt3 mb2 db black center">
                    <Link className="no-underline black hover-bg-moon-gray mb2" to={`/categories/${this.state.category._id}/edit`}>Edit Category</Link>
                </button>
                <a href="#" onClick={this.handleRemove}>Remove Category</a>
                <Link to="/categories">Return</Link>
            </div>
        )
    }
})

module.exports = ShowCategory