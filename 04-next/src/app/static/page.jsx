
import { db } from "@/config/db";

const page = async() => {
    const [users] = await db.execute("select * from users");
        console.log(users);
  return (
    <div>
        
        <h1>Static Page</h1>

        <ul>
            {users.map(user => (
                <li key={user.id}>{user.name} - {user.email}</li>
             )
            )}
      </ul>
    </div>
  )
}

export default page
