import React from 'react';
import {Metadata} from "next";


export const metadata: Metadata = {
    title: ' CommentsPage metadata'
}
type Props = { children: React.ReactNode }
const CommentsPage = ({children}: Props) => {
    return (
        <>

            {children}
        </>
    );
};

export default CommentsPage ;