import { useState, useEffect } from "react";
function App() {
	const [loading, setLoadIng] = useState(true);
	const [coins, setCoins] = useState([]);
	useEffect(()=>{
		fetch("https://api.coinpaprika.com/v1/tickers")
		.then((response) => response.json())
		.then((json) => {
			setCoins(json);
			setLoadIng(false);
		});
	},[])
	return <div>
		<h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
		{loading ? <strong>Loading...</strong> : null}
		<select>
			{coins.map((coin,index) => <option key={index}>{coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD</option>)}
		</select>
	</div>;
}

export default App;