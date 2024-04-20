import Navigate from "./Navigate"
import Card from "./cards";
import { UPCOMING_API } from "../utils/constants";


import React, { useState, useEffect} from 'react';
import InfiniteScroll from "react-infinite-scroll-component";

const Upcoming = () => {
    const [upcoming, setUpcoming] = useState([]);
    const [loading, setLoading] = useState(false);
    const [index, setIndex] = useState(1);

    const fetchData = async () => {
      setLoading(true);
 
      try {
        const response = await fetch(UPCOMING_API);
        const data = await response.json();
    
        setUpcoming(prevItems => [...prevItems, ...data.events]);
        setIndex(prevIndex => prevIndex + 1);
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false);
      }
    };

    useEffect(() => {
      fetchData();
    }, []);

    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || loading) {
        return;
      }
      fetchData();
    };
    
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, [loading])
   


    return (
      <InfiniteScroll
      dataLength={upcoming.length}
      next={fetchData}
      hasMore={true} 
      loader={(<div className="spinner">
                <span>Upcoming</span>
                <div className="half-spinner"></div>
              </div>)}
      endMessage={<p>No more data to load.</p>}
    >
          <div className="mt-8">
              <div className="ml-20"><Navigate heading="Upcoming events" /></div>
              <div className="flex flex-wrap gap-1 mx-10 rounded-lg">
                  {
                      upcoming.map((item, ind) => (
                          <Card eventName={item.eventName} date={item.date} weather={item.weather} distanceKm={item.distanceKm} imgUrl={item.imgUrl} city={item.cityName} key={ind} />
                      ))
                  }
              </div>
          </div>
        </InfiniteScroll>
    );
};

export default Upcoming;