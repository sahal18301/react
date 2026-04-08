interface User {
  fullName: string;
  email: string;
  phone: string;
}
import { useEffect, useState } from "react";

interface User {
  fullName: string;
  email: string;
  phone: string;
}

export default function UserList() {
  const [users, setUsers] = useState<User[]>([]);

  // 🔥 useEffect runs when page loads
  useEffect(() => {
    // fake data (like from backend)
    const fakeUsers: User[] = [
      {
        fullName: "Yahya Mohamed",
        email: "yahya@email.com",
        phone: "0712345678",
      },
      {
        fullName: "Ali Hassan",
        email: "ali@email.com",
        phone: "0798765432",
      },
    ];

    setUsers(fakeUsers);
  }, []);

  return (
    <div>
      <h2>User List</h2>

      {users.map((user, index) => (
        <div key={index}>
          <p>Name: {user.fullName}</p>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}