import { useState } from "react";
import { useUserContext } from "../../Contexts/UserContext/UserContex";
import "./About.css";

export default function About() {
  const [showMore, setShowMore] = useState(false);
  const { userInfo } = useUserContext();
  const { uid, displayName, email, imgURL } = userInfo;

  const handleShowMore = () => {
    setShowMore(userInfo);
  };

  return (
    <div className="about-container">
      <h2 className="title">About Us</h2>
      <p className="paragraph">
        Welcome to our website! This is the About page, where you can learn more
        about us and our mission.
      </p>
      <p className="paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
        odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
      </p>
      {showMore && (
        <div className="abouts">
          <div>
            <h1>Name : {displayName}</h1>
            <h2>Email: {email}</h2>
            <h2>Uid : {uid}</h2>
            <img className="showmorephoto" src={imgURL} alt="Image" />
          </div>
        </div>
      )}
      <button onClick={handleShowMore}>Show More</button>
    </div>
  );
}
