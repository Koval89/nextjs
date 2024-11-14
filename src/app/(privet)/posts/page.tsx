import React from 'react';
import PostsComponent from "@/app/components/posts/PostsComponent";

const PostsPage = async () => {

    const posts = await fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())

const lift  = async (id:number)=> {

}


    return (
        <div>
            <PostsComponent posts={posts} />
        </div>
    );
};

export default PostsPage;