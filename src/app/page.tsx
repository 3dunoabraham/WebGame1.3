import Image from 'next/image'
import { Ticker, getTicker } from '@/../script/state/repository/ticker'

export default async function Home() {

  const ticker:Ticker = await getTicker()
  const ticker2:Ticker = await getTicker("USDCUSDT")
  
  return (
    <main >
      <div >
        <p> Ticker Price:&nbsp; <code >{ticker.symbol}: {ticker.price}</code> </p>
        <p> Ticker 2 Price:&nbsp; <code >{ticker2.symbol}: {ticker2.price}</code> </p>
        <div>
          <a href="/" target="_blank" rel="noopener noreferrer">
            By{' '}<Image src="/vercel.svg" alt="Vercel Logo" width={100} height={24} priority />
          </a>
        </div>
      </div>
      <div> <Image src="/next.svg" alt="Next.js Logo" width={180} height={37} priority /> </div>
    </main>
  )
}
