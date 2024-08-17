import React, { useState, useEffect } from 'react';

function App() {
  // State to store the fetched image URL
  const [imageUrl, setImageUrl] = useState(null);
  // State to manage loading
  const [loading, setLoading] = useState(true);

  // useEffect to fetch data when the component mounts
  useEffect(() => {
    // Fetch the random dog image
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json()) // Parse the JSON data
      .then(data => {
        setImageUrl(data.message); // Set the image URL state
        setLoading(false); // Set loading to false
      })
      .catch(error => {
        console.error('Error fetching the dog image:', error);
        setLoading(false); // Set loading to false even if there's an error
      });
  }, []); // Empty dependency array means this effect runs once when the component mounts

  // Render loading message or the dog image
  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <img src={imageUrl} alt="A Random Dog" />
      )}
    </div>
  );
}

export default App;
