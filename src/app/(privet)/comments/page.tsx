import React from 'react';
import CommentsComponent from "@/app/components/comments/CommentsComponent";

const CommentsPage = async () => {

    const comments = await fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res =>res.json())

    return (
        <div>
            <CommentsComponent comments={comments}/>
        </div>
    );
};

export default CommentsPage;