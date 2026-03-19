cd ..
npx create-react-app frontend
cd frontend
npm install axios
import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/offers")
      .then(res => setOffers(res.data.offers || []))
      .catch(err => console.log(err));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Dashboard Awin</h1>

      {offers.map(o => (
        <div key={o.id}>
          <h3>{o.name}</h3>
        </div>
      ))}
    </div>
  );
}

export default App;

npm start






