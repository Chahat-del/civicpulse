// All API calls to backend will go through here
const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export const fetchIssues = async (filters) => {
  const res = await fetch(`${BASE_URL}/api/issues`);
  return res.json();
};

export const createIssue = async (data) => {
  const res = await fetch(`${BASE_URL}/api/issues`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  });
  return res.json();
};