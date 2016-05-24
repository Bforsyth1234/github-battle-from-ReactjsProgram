var React = require('react');
var Results = require('../components/Results');
var githubHelpers = require('../utils/githubHelpers');

var ResultsContainer = React.createClass({
	getInitialState: funtion () {
		return {
			isLoading: true,
			scores: []
		}
	},
	componentDidMount: function() {
		console.log(this.props)
	},
	render: function() {
		return(
				<Results isLoading={this.state.isLoading} scores={this.state.scores} />
			)
	}
})

module.exports = ResultsContainer;