"use client";

import { Ticker, TickerName } from '@/../script/state/service/ticker';
import useTicker from '@/../script/util/hook/useTicker';

const Component = ({
  tickerName = "BTCUSDT", initialTicker, delay = 10000
}:{ tickerName: TickerName, initialTicker?: Ticker, delay?: number }) => {
  const ticker = useTicker(tickerName, delay);
  console.log("ticker",ticker)
  return (<>
    {!!initialTicker && !ticker.price && 
      <p>
        <b>
          {initialTicker.symbol}: <code>{initialTicker.price}</code>
        </b>
      </p>
    }
    {!!ticker.price &&
      <p>
        {ticker.symbol}: <code>{ticker.price}</code>
      </p>
    }
  </>);
};

export default Component;