import Image from 'next/image'
import { Ticker, getTicker } from '@/../script/state/service/ticker'

export default async function Home() {

  const ticker:Ticker = await getTicker()
  const ticker2:Ticker = await getTicker("ETHUSDT")
  
  return (
    <main >
      <div >
        <p> {ticker.symbol}:&nbsp; <code >{ticker.price}</code> </p>
        <p> {ticker2.symbol}:&nbsp; <code >{ticker2.price}</code> </p>

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