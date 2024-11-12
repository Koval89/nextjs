import React from 'react';
import {Metadata} from "next";


export const metadata: Metadata = {
    title: ' PostPage metadata'
}
type Props = { children: React.ReactNode }
const PostPage = ({children}: Props) => {
    return (
        <>
            
            {children}
        </>
    );
};

export default PostPage ;