import React, {FC} from 'react';
import {UsersModule} from "@/app/modules/UsersModule/UsersModule";
import Link from "next/link";

type UsersProps ={
    users:UsersModule[]
}

const UsersComponent :FC<UsersProps> = ({users}) => {
    return (
        <div>
            {
                users.map(({id, name}) =>(<div key={id}>
                <Link href={'/users/' + id}>{id} - {name}</Link>
                </div>))
            }
        </div>
    );
};

export default UsersComponent;