import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Time() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const fetchTimeData = async () => {
      try {
        const response = await axios.get(
          'https://world-clock.p.rapidapi.com/json/utc/now',
          {
            headers: {
              'X-RapidAPI-Key': 'cae4909f44mshf9d938b95b31e9bp17c5e3jsn918f5f251fbe',
              'X-RapidAPI-Host': 'world-clock.p.rapidapi.com',
            },
          }
        );
        setTime(response.data.currentDateTime);
      } catch (error) {
        console.error('Error fetching time data:', error);
      }
    };

    fetchTimeData();
  }, []);

  return (
    <div className="time">
      <h2>Today's Date :</h2>
      {time && " , " && <p>{time}</p>}
    </div>
  );
}

export default Time;