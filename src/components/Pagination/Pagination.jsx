import { useNavigate } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa";
import './Pagination.css'

export default function Pagination() {

        const navigate = useNavigate();
      
        const handleGoBack = () => {
          navigate(-1);
        };
      
        const handleGoHome = () => {
          navigate("/");
        }
  return (
    <div>
        <div className="left_Right_Arrow">
        <div onClick={handleGoBack} className="leftArrow">
          <div>
          <FaArrowLeft />
          <span>Back</span>
          </div>
        </div>
        <div onClick={handleGoHome} className="rightArrow">
          <div>
          <span>Home</span>
          <FaArrowRightLong />
          </div>
        </div>
      </div>
    </div>
  )
}
