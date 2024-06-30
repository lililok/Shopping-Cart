import React from 'react';

function storeData() {
    const [info, setInfo] = useState(null);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/photos", { mode: "cors" })
          .then((response) => response.json())
          .then((response) => setImageURL(response[0].url))
          .catch((error) => console.error(error));
      }, []);
}

export default storeData