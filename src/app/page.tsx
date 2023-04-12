import Image from 'next/image'

export default async function Home() {

  const ticker = await (
    await fetch("https://api.binance.com/api/v3/ticker/price?symbol=EURUSDT")
  ).json()
  
  return (
    <main >
      <div >
        <p> Ticker Price:&nbsp; <code >{ticker.symbol}: {ticker.price}</code> </p>
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
