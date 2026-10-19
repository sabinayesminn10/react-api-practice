import { useState } from "react";
import { useEffect } from "react";

const App = () => {
  const userApi = "https://jsonplaceholder.typicode.com/users";

  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    fetch(userApi)
      .then((response) => response.json())
      .then((data) => setUsers(data));
  };

  useEffect(() => {
    fetchUsers();
    console.log("users Api called");
  }, []);

  return (
    <div className="flex items-center justify-center flex-col gap-3 min-h-screen p-4">
      <h1 className="font-bold mb-2">Users</h1>

      <ul className="w-full max-w-md bg-yellow-50 rounded-lg shadow p-3">
        {users.map((user) => (
          <li
            key={user.id}
            className="border-b border-indigo-400 py-2 last:border-b-0">
            <p className="font-semibold">{user.name}</p>
            <p className="text-amber-950">{user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;


	