import React, { useEffect, useState } from 'react';

export default function Card() {
  const Apidata = 'https://api.tvmaze.com/search/shows?q=all';
  const [API, setAPI] = useState([]);

  useEffect(() => {
    fetch(Apidata)
      .then((response) => response.json())
      .then((data) => {
        setAPI(data); // Assuming the API response is an array of shows
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []); // Passing an empty dependency array to useEffect to run the effect only once

  return (
    <>
    <div className="d-flex flex-wrap gap-5 justify-content-center

">
      {API.map((elem) => (
         <div key={elem.show.id} class="card mt-5 w-25">
     {elem.show.image && <img src={elem.show.image.medium} class="card-img-top w-full h-50" alt="..."/>}
     <div class="card-body">
    <h5 class="card-title">{elem.show.name}</h5>
    <p class="card-text mt-3"> Follow
All Rise is a courthouse drama that follows the chaotic, hopeful and sometimes absurd lives of its judges, prosecutors and public defenders, as they work with bailiffs, clerks and cops to get justice for the people of Los Angeles amidst a</p>
    {elem.show.url && <a href={elem.show.url} class="btn btn-secondary mt-2">Read more</a>}
     </div>
     </div>
      ))}
      </div>
    </>
  );
}
