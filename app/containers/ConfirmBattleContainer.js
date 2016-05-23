var React = require('react');
var githubHelpers = require('../utils/githubHelpers');

var ConfirmBattle = require('../components/ConfirmBattle');

var ConfirmBattleContainer = React.createClass({
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},
	getInitialState: function () {
		return {
			isLoading: true,
			playerInfo: []
		}
	},
	componentDidMount: function() {
		var query = this.props.location.query;
		// Feth info from github
		//console.log('query', query );
		githubHelpers.getPlayers([query.playerOne, query.playerTwo])
			.then( function (players) {
				this.setState({
					isLoading: false,
					playersInfo: [players[0], players[1]]
				})
			}.bind(this))
	},
	render: function() {
		return (
			<ConfirmBattle 
				isLoading={this.state.isLoading}
				playersInfo={this.state.playersInfo} />
		);
	}

});

module.exports = ConfirmBattleContainer;