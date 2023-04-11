import Image from 'next/image'
import { TICKER_SYMBOLS, Ticker, getTicker } from '@/../script/state/service/ticker'
import TickerCard from '@/dom/atom/TickerCard'


export default async function Home() {

  const tickers: Ticker[] = await Promise.all([
    getTicker(),
    getTicker("ETHUSDT")
  ]);
  
  const tickerCards = TICKER_SYMBOLS.map((tickerName:any, index:number) => (
    <TickerCard initialTicker={tickers[index]} tickerName={tickerName} key={tickerName} />
  )); 

  return (
    <main>
      <div className='flex-col'>
        {tickerCards}
      </div>
      <a href="/dashboard" rel="noopener noreferrer"
        className='pos-abs top-0 right-0  pa-4'
      >
        Dashboard
      </a>
      <a href="/" rel="noopener noreferrer"
        className='pos-abs bottom-0 right-0  px-4'
      >
        <div className='flex gap-2 '>
          <div className='flex-col'>
              <Image alt="asd" width={24} height={24}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Binance_Logo.svg/480px-Binance_Logo.svg.png"
              />
          </div>
          <div className="tx-lx opaci-50">+</div>
          <div className="flex-col">
            <Image src="/next.svg" alt="Next.js Logo" width={60} height={12} priority />
          </div>
        </div>
      </a>
    </main>
  )
}
