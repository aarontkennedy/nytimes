import React, { Component } from "react";
import mongo from "../../utils/mongo";
import SearchComponent from "../SearchComponent";
import ArticleResults from "../ArticleResults";
import ArticlesSaved from "../ArticlesSaved";
import './Search.css';

class Search extends Component {
    state = {
        user: null,
        query: "",
        start: null,
        end: null
    };

    componentWillMount() {
        this.setState({ user: mongo.getUser(this.props.userGoogleID) });
    }

    // need to break this out seperately due to the react date picker
    handleStartDateChange = (date) => {
        console.log(date);
        this.setState({
          start: date
        });
    };

    // need to break this out seperately due to the react date picker
    handleEndDateChange = (date) => {
        console.log(date);
        this.setState({
          end: date
        });
    };

    handleChange = (event) => {
        // Pull the name and value properties off of the event.target (the element which triggered the event)
        const { name, value } = event.target;
        // Set the state for the appropriate input field
        console.log(event.target);
        console.log(value);
        this.setState({
            [name]: value
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        alert("search");
        /*alert(`Username: ${this.state.username}\nPassword: ${this.state.password}`);
        this.setState({ username: "", password: "" });*/
    }

    handleSave = event => {
        event.preventDefault();
        alert("save");
        /*alert(`Username: ${this.state.username}\nPassword: ${this.state.password}`);
        this.setState({ username: "", password: "" });*/
    }

    handleDelete = event => {
        event.preventDefault();
        alert("delete");
        /*alert(`Username: ${this.state.username}\nPassword: ${this.state.password}`);
        this.setState({ username: "", password: "" });*/
    }

    render() {
        if (this.state.user) {
            return (
                <div>
                    <SearchComponent onChange={this.handleChange}
                        onStartChange={this.handleStartDateChange}
                        onEndChange={this.handleEndDateChange}
                        onSubmit={this.handleSubmit}
                        query={this.state.query}
                        start={this.state.start}
                        end={this.state.end} />
                    <ArticleResults onSave={this.handleSave}>

                    </ArticleResults>
                    <ArticlesSaved onDelete={this.handleDelete}>

                    </ArticlesSaved>
                </div>
            );
        }

        return "";
    }
}

export default Search;