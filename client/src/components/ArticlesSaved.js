import React from "react";

const ArticlesSaved = (props) => (
    <div className="container Search-Section">
        <h2 className="text-center">Saved</h2>
        <ul className="Search">
            {props.children}
        </ul>
    </div>
);

export default ArticlesSaved;