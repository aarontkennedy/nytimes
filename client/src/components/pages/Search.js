import React, { Component } from "react";
import mongo from "../../utils/mongo";
import nyt from "../../utils/nyt";
import SearchComponent from "../SearchComponent";
import ArticleResults from "../ArticleResults";
import ArticlesSaved from "../ArticlesSaved";
import ArticleListItem from "../ArticleListItem";
import './Search.css';
import moment from "moment";

class Search extends Component {
    state = {
        user: 1,//null,
        query: "",
        start: null,
        end: null,
        articles: []
    };

    componentWillMount() {
        mongo.getUser(this.props.userGoogleID).then((result) => {
            console.log(result);
            this.setState({
                user: result
            });
        });

        nyt.getArticles().then((result) => {
            console.log(result.data.response.docs);
            this.setState({
                articles: result.data.response.docs
            });
        });
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
        const start = (this.state.start ? this.state.start.format("YYYYMMDD") : null);
        const end = (this.state.end ? this.state.end.format("YYYYMMDD") : null);

        nyt.getArticles(this.state.query, start, end)
        .then((result) => {
            console.log(result.data.response.docs);
            this.setState({
                articles: result.data.response.docs
            });
        });
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
                <div className="container">
                    <SearchComponent onChange={this.handleChange}
                        onStartChange={this.handleStartDateChange}
                        onEndChange={this.handleEndDateChange}
                        onSubmit={this.handleSubmit}
                        query={this.state.query}
                        start={this.state.start}
                        end={this.state.end} />
                    <ArticleResults onSave={this.handleSave}>
                        {this.state.articles.map((a) => {
                            return (<ArticleListItem
                                key={a.web_url}
                                title={a.headline.main}
                                datePublished={moment(a.pub_date).format("YYYY/MM/DD")}
                                snippet={a.snippet}
                                url={a.web_url}
                                onClick={this.handleSave}
                                buttonText="Save"
                            />);
                        })}
                    </ArticleResults>
                    <ArticlesSaved onDelete={this.handleDelete}>
                        {this.state.user.articles.map((a) => {
                            return (<ArticleListItem
                                key={a.url}
                                title={a.title}
                                datePublished={a.datePublished}
                                snippet={a.snippet}
                                url={a.url}
                                onClick={this.handleDelete}
                                buttonText="Delete"
                            />);
                        })}
                    </ArticlesSaved>
                </div>
            );
        }

        return "";
    }
}

export default Search;