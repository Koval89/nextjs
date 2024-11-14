import React, {FC} from 'react';
import {PostsModel} from "@/app/modules/postsModel/PostsModel";
import Link from "next/link";

type PostsProps={
    posts : PostsModel
}


const PostsComponent:FC<PostsProps> = ({posts}) => {



    return (
        <div>
            {posts.map(({id,title}) =>(<div key={id}>
                    <Link href={'/posts/'+id}>{id} - {title}</Link>
                </div>
                    ))}
        </div>
    );
};

export default PostsComponent;