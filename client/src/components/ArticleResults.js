import React from "react";

const ArticleResults = (props) => (
    <div className="container Search-Section">
        <h2 className="text-center">Results</h2>
        <ul className="Search">
            {props.children}
        </ul>
    </div>
);

export default ArticleResults;