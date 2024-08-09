import React from 'react'
import UserCard from '../components/UserCard';
import list from '../components/List'

function UserList() {


return (
    <div>
        {list.map(({name,email,rollNo})=>(
            <UserCard name= {name} email= {email} rollNo={rollNo} />

    ))}
    </div>
  )
}

export default UserList;