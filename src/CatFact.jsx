import React, { useState, useEffect } from 'react';

function CatFact() {
  // Declare state to hold the fetched cat fact
  const [fact, setFact] = useState('');

  // Use useEffect to fetch data when the component mounts
  useEffect(() => {
    fetch('https://catfact.ninja/fact')
      .then((response) => response.json())  // Convert response to JSON
      .then((data) => setFact(data.fact));  // Set the cat fact into state
  }, []);  // Empty array means this runs only once when the component is mounted

  // Return the fact to be displayed
  return <div>{fact}</div>;
}

export default CatFact;
