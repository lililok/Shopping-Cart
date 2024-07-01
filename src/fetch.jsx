import React from 'react';
import { useState, useEffect } from 'react'

function storeData() {
  const [allData, setAllData] = useState([]);
  const [top2Data, setTop2Data] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products", { mode: "cors" })
          .then((response) => response.json())
          .then((data) => {
            const filteredData = data.filter(item => 
              item.category === "men's clothing" || item.category === "women's clothing"
            );
            const sortedData = filteredData.sort((a, b) => b.rating.rate - a.rating.rate);
            setAllData(filteredData);
            setTop2Data(sortedData.slice(0, 2));
          })
          .catch((error) => console.error(error));
      }, []);

      return { allData, top2Data };
}

/*filter by categories
top 2 offers
show how much items in cart currently*/

export default storeData