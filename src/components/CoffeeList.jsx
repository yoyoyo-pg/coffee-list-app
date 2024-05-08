import {useEffect, useState} from 'react';

export default function CoffeeList() {
  const [data, setData] = useState("");
  const getData = async () => {
    const resp = await fetch('https://api.sampleapis.com/coffee/hot');
    const json = await resp.json();
    setData(json);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {data ? (
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: '5%',
                  height: 'auto',
                }}
              />
              <h3>Ingredients:</h3>
              <ul>
                {item.ingredients.map((ingredient, index) => (
                  <li key={`${item.id}-${index}`}>{ingredient}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}