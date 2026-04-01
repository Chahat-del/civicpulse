// Custom hook for fetching and managing issues
import { useState, useEffect } from 'react';
import { fetchIssues } from '../services/api';

const useIssues = (filters) => {
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchIssues(filters).then(data => {
      setIssues(data);
      setLoading(false);
    });
  }, [filters]);

  return { issues, loading };
};

export default useIssues;