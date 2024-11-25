// import React from 'react'
// import RestaurantCard from '../Restaurant/RestaurantCard'
// import { useSelector } from 'react-redux'

// const Favorite = () => {
//   const {auth} = useSelector(store => store)
//   return (
//     <div>
//       <h1 className='py-5 text-xl font-semibold text-center'>
//         My Favorites</h1>
//         <div className='flex flex-wrap gap-3 justify-center'>

//           {auth.favorite.map((item) => <RestaurantCard key={item.id} item={item}/>)}

//         </div>
//     </div>
//   )
// }

// export default Favorite

import React from 'react';
import { useSelector } from 'react-redux';

const Favorite = () => {
  // Access the favorites from the Redux store
  const favorites = useSelector((state) => state.favorite?.favorites);

  // Check if favorites is undefined or empty
  if (!favorites || favorites.length === 0) {
    return <p>No favorite items available.</p>;
  }

  // Render the favorites
  return (
    <div>
      <h2>Your Favorite Items</h2>
      {favorites.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Favorite;
