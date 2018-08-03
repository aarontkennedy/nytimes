import React from "react";
import './ArticleListItem.css';

const ArticleListItem = (props) => (
    <li className="container ArticleList">
        <div className="row">
            <h5 className="col-9 col-md-10">
                <a href={props.url} target="_blank" rel="noopener">
                    {props.title}
                </a>
            </h5>
            <div className="col-3 col-md-2 text-right">
                <button 
                    className="btn btn-primary btn-sm"
                    data-id={props._id}
                    data-title={props.title}
                    data-datepublished={props.datePublished}
                    data-snippet={props.snippet}
                    data-url={props.url}
                    onClick={props.onClick}
                >{props.buttonText}</button>
            </div>
        </div>
        <div className="row">
            <p className="col">
            <span className="ArticleListItem-date">{props.datePublished} </span> 
            {props.snippet}</p>
        </div>
    </li>
);

export default ArticleListItem;