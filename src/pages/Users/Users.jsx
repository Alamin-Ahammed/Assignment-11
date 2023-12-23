import { useLoaderData } from "react-router-dom";
import "./Users.css";
import User from "../../components/User/user";

export default function Users() {
  const users = useLoaderData();
  return (
    <div className="users-container">
      {users.slice(0, 50).map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
}
