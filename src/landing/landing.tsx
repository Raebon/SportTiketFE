import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

/* const test = async() => {
  const response = await fetch("https://www.tipsport.cz/rest/betting/v4/tickets/-1/-78266975273?hash=dba70061&countBanner=false")
  const result = await response.json();
  console.log(result)
} */

const Landing = () => {
/*   useEffect(() => {
 
  
    return () => {
      test()
    }
  }, []) */
  
  return (
    <React.Suspense fallback={'loading'}>
      <Outlet />
    </React.Suspense>
  );
};

export default Landing;
