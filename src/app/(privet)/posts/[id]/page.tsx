import React from 'react';


type Params ={id:string}


const PostsPage = async  ({params}:{params:Params}) => {

    const post = await fetch('https://jsonplaceholder.typicode.com/posts/'+params.id)
        .then(res =>res.json())
    return (
        <div key={post.id}>
            <ul>
                <li>userId: {post.userId}</li>
                <li>id: {post.id}</li>
                <li>title: {post.title}</li>
                <li>body: {post.body}</li>
            </ul>
        </div>
    );
};

export default PostsPage;