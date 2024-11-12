import React, {FC} from 'react';
import {CommentsModel} from "@/app/modules/commentsModel/CommentsModel";
import Link from "next/link";


type CommentsProps = {
    comments:CommentsModel[]
}


const CommentsComponent:FC<CommentsProps> = ({comments}) => {
    return (
        <div>
            {comments.map(({id, name}) => (<div key={id}>
                <Link href={'/comments/'+id}>{id} - {name}</Link>
            </div> ))}

        </div>
    );
};

export default CommentsComponent;