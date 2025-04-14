// CircleDiagram.jsx
import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

function CircleDiagram({ coins }) {

    // eerste 10 coins
    const topCoins = coins.slice(0, 10);

    // heeft een kleur aan de coin
    const chartData = {
        labels: topCoins.map(coin => coin.NAME),
        datasets: [
            {
                data: topCoins.map(coin => parseFloat(coin.PRICE_USD)),
                backgroundColor: topCoins.map(() => '#' + Math.floor(Math.random() * 16777215).toString(16)),
                borderColor: "#fff",
                borderWidth: 1,
            },
        ],
    };

    return (
        <div className="circle-diagram" style={{ width: '30%', margin: '0 auto' }}>
            <h2>Top 10 Marketcap</h2>
            <Pie data={chartData} />
        </div>
    );
}

export default CircleDiagram;
