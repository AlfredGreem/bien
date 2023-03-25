import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>Home Rentals</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />
      <Hero />

      <main>
        <section>
          <h1>Explore nearby</h1>
        </section>
      </main>
    </div>
  )
}
