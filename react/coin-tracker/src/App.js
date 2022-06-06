import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([])
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers").then(
      (Response) => Response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1> Coins Check! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? <strong>Loading...</strong> : <input type="text"  placeholder="코인 입력하세요"></input>}
      <ul> 
      {coins.map((coin) => <li key={coin.id}>{coin.name} : {coin.symbol} :  {Math.floor((coin.quotes.USD.price*100)*1252)/100} 원 </li>)}
      </ul>


    </div>
  );
}

export default App;
