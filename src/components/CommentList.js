import React from 'react';

import "../styles/CommentList.css";

const CommentList = ({ comments }) => {

    return (
        <>
            {comments.map((comment, key) => {
                return (
                    <div key={ key } className="comment">
                        <h4>{ comment.username }</h4>
                        <p>{ comment.text }</p>
                    </div>
                )
            })}
        </>
    )
}

export default CommentList;