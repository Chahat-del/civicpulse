import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Home - coming soon</div>} />
        <Route path="/login" element={<div>Login - coming soon</div>} />
        <Route path="/explore" element={<div>Explore - coming soon</div>} />
        <Route path="/report" element={<div>Report - coming soon</div>} />
        <Route path="/my-issues" element={<div>My Issues - coming soon</div>} />
        <Route path="/admin" element={<div>Admin Dashboard - coming soon</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;