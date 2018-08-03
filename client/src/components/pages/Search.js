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
        console.log("Search componentWillMount()");
        mongo.getUser(this.props.userGoogleID).then((result) => {
            console.log(result.data);
            this.setState({
                user: result.data
            });
        });

        nyt.getArticles().then((result) => {
            console.log(result.data.response.docs);
            this.setState({
                articles: result.data.response.docs
            });
        });
    }

    getUsersSavedArticles() {
        if (!this.state.user || !this.state.user.articles) {
            return [];
        } 
        return this.state.user.articles;
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
        mongo.saveArticle({googleID: this.props.userGoogleID,
            url: event.target.getAttribute("data-url"),
            title: event.target.getAttribute("data-title"),
            snippet: event.target.getAttribute("data-snippet"),
            datePublished: event.target.getAttribute("data-datepublished")
        }).then((result) => {
            console.log(result.data);
            this.setState({
                user: result.data
            });
        });
    }

    handleDelete = event => {
        event.preventDefault();
        mongo.deleteArticle({googleID: this.props.userGoogleID,
            articleID: event.target.getAttribute("data-id")
        }).then((result) => {
            console.log(result.data);
            this.setState({
                user: result.data
            });
        });
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
                    {<ArticlesSaved onDelete={this.handleDelete}>
                        {this.getUsersSavedArticles().map((a) => {
                            return (<ArticleListItem
                                key={a.url}
                                _id={a._id} 
                                title={a.title}
                                datePublished={a.datePublished}
                                snippet={a.snippet}
                                url={a.url}
                                onClick={this.handleDelete}
                                buttonText="Delete"
                            />);
                        })}
                    </ArticlesSaved>}
                </div>
            );
        }

        return "";
    }
}

export default Search;