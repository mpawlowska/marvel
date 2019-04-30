import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_KEY } from '../constants/api';

const useApi = (url, initialData, params = { apikey: API_KEY }) => {
  const [data, setData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setIsError(false);

      try {
        const { data } = await axios.get(url, { params });
        setData(data);
      } catch (err) {
        setIsError(true);
      }

      setIsLoading(false);
    };

    fetchData();
  }, []);

  return {
    data,
    isLoading,
    isError
  };
};

export default useApi;
