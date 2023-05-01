import { useState, useEffect } from "react";

export function ShowData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => {
        response.json().then(data => {
          setData(data);
        }).catch(error => console.log(error));
      }).catch(error => console.log(error));
  }, []);

  return (
    <div>
      {
        data.map(item => (
          <div key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
          </div>
        ))
      }
    </div>
  );
}