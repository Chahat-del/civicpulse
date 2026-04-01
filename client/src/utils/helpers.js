// Shared utility functions

export const formatDate = (dateStr) => {
  return new Date(dateStr).toLocaleDateString('en-IN');
};

export const getCategoryColor = (category) => {
  const map = {
    pothole: 'red',
    garbage: 'green',
    streetlight: 'yellow',
    waterlogging: 'blue',
  };
  return map[category] || 'gray';
};
```

**Root level files:**

**.env.example**
```
PORT=5000
DATABASE_URL=postgresql://user:password@localhost:5432/civicpulse
JWT_SECRET=your_jwt_secret_here
ANTHROPIC_API_KEY=your_claude_api_key_here
FCM_SERVER_KEY=your_fcm_key_here
VITE_API_URL=http://localhost:5000
```

**.gitignore**
```
node_modules/
.env
dist/
.DS_Store
*.log