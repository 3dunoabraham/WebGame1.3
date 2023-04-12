import { TICKER_SYMBOLS, Ticker, getTicker } from '@/../script/state/repository/ticker'
import TickerCard from '@/dom/atom/TickerCard'

export default async function Home() {

  const tickers: Ticker[] = await Promise.all([
    getTicker(),
    getTicker("EURUSDT")
  ]);
  
  const tickerCards = TICKER_SYMBOLS.map((tickerName:any, index:number) => (
    <TickerCard initialTicker={tickers[index]} tickerName={tickerName} key={tickerName} />
  )); 

  return (
    <main style={{minHeight:"100vh",textAlign:"center"}}>
      <br />
      <div>
        {tickerCards}
      </div>
      <br />
      <h1>
        <a href="/dashboard">
          Dashboard
        </a>
      </h1>
    </main>
  )
}
