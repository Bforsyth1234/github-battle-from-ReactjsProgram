var USER_DATA = {
    name: 'Brooks Forsyth',
    username: 'bforsyth1234',
    image: 'https://avatars0.githubusercontent.com/u/4528782'
}

var React = require('react');
var ReactDOM = require('react-dom');

var ProfilePic = React.createClass({
    render: function() {
        return <img src = { this.props.imageUrl }
        style = {
            { height: 100, width: 100 }
        }
        />
    }
});

var profileLink = React.createClass({
    render: function() {
        return ( < div >
	            	< a href = { 'https://www.github.com/' + this.props.username } >
	            		{ this.props.username }
	            	< /a>
            	< /div>
        )

    }
});

var profileName = React.createClass({
	render: function () {
		return (
			<div>{this.props.name}</div>
		)
	}
});

var Avatar = React.createClass({
	render: function
})

ReactDOM.render( < Hello name = "Brooks" anySortOfData = { 29 } / > , document.getElementById('app'));
