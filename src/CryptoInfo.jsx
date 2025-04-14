import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FavoriteCoins from "./FavoriteCoins.jsx";
import CircleDiagram from "./CircleDiagram.jsx";

function CryptoInfo() {
    const [coins, setCoins] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [favorites, setFavorites] = useState([]);

    // api gegevens ophalen
    useEffect(() => {
        fetch("https://data-api.coindesk.com/asset/v1/top/list?page=1&page_size=100")
            .then((httpResponse) => httpResponse.json())
            .then((jsonResponse) => {
                setCoins(jsonResponse.Data.LIST);
            });
    }, []);

    // favo coin
    const favorite = (coin) => {
        setFavorites((prevFavorites) => {
            const isAlreadyFavorite = prevFavorites.some((fav) => fav.URI === coin.URI);

            if (isAlreadyFavorite) {
                return prevFavorites.filter((fav) => fav.URI !== coin.URI);
            } else {
                return [...prevFavorites, coin];
            }
        });
    };
    // zoekfuncite voor coins
    const filteredCoins = coins.filter((coin) =>
        (coin.NAME?.toLowerCase().includes(searchQuery.toLowerCase()) ||
            coin.PARENT_ASSET_SYMBOL?.toLowerCase().includes(searchQuery.toLowerCase()))
    );
    // wat je ziet op je scherm
    return (
        <div>
            <h1>Crypto Overview</h1>

            {/*circle diagram*/}
            <CircleDiagram coins={filteredCoins} />

            {/*favorite coins*/}
            <FavoriteCoins favorites={favorites} favorite={favorite} />

            {/*zoek balk*/}
            <input
                type="text"
                placeholder="Zoek naar een munt..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />

            {/*coin block*/}
            <div className="crypto-container">
                {filteredCoins.map((coin) => {
                    const priceChange = parseFloat(coin.SPOT_MOVING_24_HOUR_CHANGE_PERCENTAGE_CONVERSION).toFixed(2);
                    const changeClass = priceChange >= 0 ? "positive" : "negative";
                    const isFavorite = favorites.some((fav) => fav.URI === coin.URI);

                    return (
                        <div key={coin.URI} className="crypto-card">
                            <h2>{coin.NAME}</h2>
                            <div>{parseFloat(coin.PRICE_USD).toFixed(2)} USD</div>
                            <div className={`crypto-change ${changeClass}`}>
                                ({priceChange}% {priceChange >= 0 ? "🔼" : "🔽"})
                            </div>
                            {/*naar detail pagina gaan*/}
                            <Link to={"coin/" + coin.URI} className="crypto-link">
                                Bekijk details
                            </Link>

                            {/*toevoegen aan favo*/}
                            <button onClick={() => favorite(coin)}>
                                {isFavorite ? "Remove from favorites" : "Add to favorites"}
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default CryptoInfo;
