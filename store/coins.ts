// store/coins.ts
// @ts-ignore
import { defineStore } from 'pinia';
import axios from 'axios';

export interface CoinData {
    id: string;
    image: string;
    name: string;
    price: string;
    // Add more properties as needed
}

interface CoinsState {
    coinsData: CoinData[];
}

// @ts-ignore
export const useCoinsStore = defineStore({
    id: 'Coins',
    state: (): CoinsState => ({
        coinsData: [],
    }),
    actions: {
        async fetchCoinsData(this: ReturnType<typeof useCoinsStore>) {
            const coinsToFetch = ['bitcoin', 'ethereum', 'tether', 'usd-coin', 'dai', 'binancecoin'];
            try {
                const responses = await Promise.all(
                    coinsToFetch.map(symbol =>
                        axios.get(`https://api.coingecko.com/api/v3/coins/${symbol}?x_cg_demo_api_key=CG-ByvcT1WZqzv26duYvY26WF2S`)
                    )
                );

                this.coinsData = responses.map(response => ({
                    id: response.data.id,
                    name: response.data.name,
                    image: response.data.image.thumb,
                    price: response.data.market_data.current_price.rub.toFixed(2), // Assuming price is a number and formatting it to 2 decimal places
                    // Add more properties as needed
                }));

            } catch (error) {
                console.error('Error fetching coin data:', error);
            }
        },
    },
    getters: {
        getAllCoinsData(state: any): CoinData[] {
            return state.coinsData; // Access coinsData from the store state
        },
    },
});
