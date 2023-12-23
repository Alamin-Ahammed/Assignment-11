import { useLoaderData } from "react-router-dom";
import "./UserDetails.css";
import Pagination from "../Pagination/Pagination";

export default function UserDetails() {
  const user = useLoaderData();
  const { id, title, url } = user;

  return (
    <>
      <div className="user-details-container">
        <div key={id} className="user-details">
          <img src={url} alt="User" />
          <div className="user-details-content">
            <h1>{title}</h1>
          </div>
        </div>
      </div>
      <Pagination />
    </>
  );
}
