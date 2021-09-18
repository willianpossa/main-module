import type { NextPage } from 'next'
import Head from 'next/head'
import { Link } from 'petz-header-ecom/dist/index'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Testing Git Submodules</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Link propsTest={{
          lorem: "ipsum",
          number: 1,
          array: [1,2],
        }} />
      </main>
    </>
  )
}

export default Home
