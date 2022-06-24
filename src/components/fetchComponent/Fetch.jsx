import React, {useEffect} from 'react'

const Fetch = ({setExhibitions}) => {
    

  const getApiData = async () => {
    const response = await fetch(
      "https://mock-api.drinks.test.siliconrhino.io/events"
    );
    const data = await response.json();
    setExhibitions(data);
  };

  useEffect(() => {
    getApiData();
  }, []);
  return (
    <div></div>
  )
}

export default Fetch