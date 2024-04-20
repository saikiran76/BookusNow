import { useEffect, useState } from "react";
import RecCards from "./RecCard";
import Shimmer from "./Shimmer";
import { EVENTS_API } from "../utils/constants";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addRecommendations } from "../utils/recSlice";

const Recs = () => {
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const recommendations = useSelector((state) => state.rec.recommendations);

    const getRec = async () => {
        try {
            const data = await fetch(EVENTS_API);
            const json = await data.json();
            dispatch(addRecommendations(json.events));
        } catch (error) {
            console.error('Error fetching recommendations:', error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
      if (recommendations.length === 0) {
        getRec();
      }
    }, []); 
  
    if (recommendations.length === 0) {
      return <Shimmer />;
    }
  
    console.log("Recommendations:", recommendations);

    return (
        <div className="px-6 overflow-hidden">
            <div className="flex overflow-x-scroll no-scrollbar">
                <div className="flex">
                {recommendations.map((item, ind) => (
                  <RecCards
                    event={item.eventName}
                    imgUrl={item.imgUrl}
                    location={item.cityName}
                    date={item.date}
                    weather={item.weather}
                    key={ind}
                  />
                ))}
                </div>
                {loading && (
                    <div className="spinner">
                        <span>Loading...</span>
                        <div className="half-spinner"></div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Recs;