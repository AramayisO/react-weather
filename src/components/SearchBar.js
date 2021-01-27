import React from 'react';

class SearchBar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            location: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.onSubmit(this.state.location);
        this.setState({ location: ''});
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Search city name"
                    value={this.state.location}   
                    onChange={(e) => this.setState({ location: e.target.value })} 
                />
                <button type="submit">Search</button>
            </form>
        )
    }

}

export default SearchBar;