// scripts/cors-setup.js
import fetch from 'node-fetch';

const token = 'skpfWEP46W5fPj0xucvliVhek0S5ExDQcPpXBBTZsb7eJMlvbQGjyPEW6FxhgjvcYkLgAR0pgJgfdNUNEegGLwZWbw8VaCC03rdUkbOtHeQGVRqRc4RWD4s6WykNeq8BWgI0qzNJl2LQW57S7Gu4q00iZm4V6iAdFVgxitTAGAN3u9aMJEyQ';
const projectId = 'j4qqz68c';

// The origins you want to allow
const origins = [
  'http://localhost:5173',
  'http://localhost:5174',
  'http://localhost:5175',
  'http://localhost:3000'
];

async function addCorsOrigin(origin) {
  try {
    const response = await fetch(`https://api.sanity.io/v1/projects/${projectId}/cors`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        origin,
        allowCredentials: false
      })
    });
    
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to add CORS origin');
    }
    
    const result = await response.json();
    console.log(`CORS settings updated for ${origin}:`, result);
  } catch (err) {
    console.error(`Failed to update CORS settings for ${origin}:`, err.message);
  }
}

// Add each origin
Promise.all(origins.map(addCorsOrigin))
  .then(() => console.log('All CORS origins processed'))
  .catch(err => console.error('Error processing CORS origins:', err));
