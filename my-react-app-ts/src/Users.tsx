import { useEffect, useState } from "react";

interface User {
    id: number;
    name: string;
}
let emptyData : User[] = []

const URL = 'https://jsonplaceholder.typicode.com/users'

export default function Users(){

    let [users, setUsers] = useState(emptyData)

    useEffect(() => {

        let id = setInterval(() => {

        }, 1000);

        // Ouvrir
            (async() => {
                let data = await (await fetch(URL)).json()
                setUsers(data)
            })()

        // fermer...
        return () => {
            // clean up
            clearInterval(id)
        }
    }, [])
  

    return (
        <ul>
           {users.map((user:User) => <li key={user.id}>{user.name}</li>)}
        </ul>
    )

}