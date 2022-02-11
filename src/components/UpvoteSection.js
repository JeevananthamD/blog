import React from "react";

import "../styles/UpvoteSection.css";

const UpvoteSection = ({ name, upvotes, setArticleInfo }) => {

    const onClickUpvote = async() => {
        const response = await (await fetch(`/api/articles/${ name }/upvote`, {
            method: "post"
        })).json();

        setArticleInfo(response);
    }

    return(
        <div className="upvote">
            <button onClick={ onClickUpvote }>Upvote</button>
            <p>This article has been upvoted { upvotes } times</p>
        </div>
    )
}

export default UpvoteSection;