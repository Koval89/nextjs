import React from 'react';

type Params ={
    id:string
}

const CommentPage = async ({params}:{params:Params}) => {

    const comment = await fetch('https://jsonplaceholder.typicode.com/comments/'+params.id)
        .then(res =>res.json())

    return (
        <div key={comment.id}>
            <ul>
                <li>postId: {comment.postId}</li>
                <li>id: {comment.id}</li>
                <li>name: {comment.name}</li>
                <li>email: {comment.email}</li>
                <li>body: {comment.body}</li>
            </ul>
        </div>
    );
};

export default CommentPage;