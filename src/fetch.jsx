import React from 'react';

function storeData() {
    const [info, setInfo] = useState(null);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products", { mode: "cors" })
          .then((response) => response.json())
          .then((response) => setInfo(response))
          .catch((error) => console.error(error));
      }, []);

    return info;
}

export default storeData