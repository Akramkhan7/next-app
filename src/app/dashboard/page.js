"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function Dashboard(){
const {data : session, status} = useSession();

if(status === 'loading'){
    return <p>Loading...</p>
}

if(session){
    return(
        <div>
            <p>this user is logged in </p>
            <p>signed in as: {session.user.name} || {session.user.email}</p>
            <button onClick={()=>signOut()}>Sign out</button>
        </div>
    )
}


return(
    <div>
        <p>not sign in</p>
        <button onClick={()=>signIn('github')}>Sign in</button>
    </div>
)
}