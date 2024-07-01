import React from 'react';
import Card from "./Card.jsx";
import storeData from "../fetch.jsx";

function Cards() {
  const { allData } = storeData();

    return (
        <>
          <div className="grid grid-flow-row gap-8 text-neutral-600 pd-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {allData.map((item) => (
              <Card key={item.id} product={item} />
            ))}
          </div>
        </>
    )
}

export default Cards