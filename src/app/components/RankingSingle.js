'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';

const RankingSingle = () => {
  const [ranking, setRanking] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/ranking`);
        setRanking(response.data.ranking);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className='text-lg'>
      {!loading &&
        ranking.map((user) => (
          <p className='mb-2' key={user._id}>
            {user.name} - {user.score}
          </p>
        ))}
    </div>
  );
};

export default RankingSingle;
