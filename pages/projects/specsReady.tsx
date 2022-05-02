import React from 'react'

import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import Image1 from '../../assets/images/specsReady/1.png'
import Image2 from '../../assets/images/specsReady/2.png'
import Image3 from '../../assets/images/specsReady/3.png'
import Image4 from '../../assets/images/specsReady/4.png'
import Image5 from '../../assets/images/specsReady/5.png'

import Resume from '../../resume'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>{Resume.projects.specsReady.name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="px-6 lg:px-20">
        <Image loading="lazy" objectFit="contain" src={Image1} alt="header" />

        <h3 className="my-3 lg:my-6 text-xl">
          a huge dashboard project with multiple different sebsection on
          different domains
        </h3>

        <div className="grid grid-cols-2 gap-x-4">
          {[Image2, Image3].map((imgSrc, i) => (
            <div key={i} className="col-span-2 lg:col-span-1 mx-3 my-3 lg:my-6">
              <Image
                objectFit="contain"
                loading="lazy"
                className="rounded"
                src={imgSrc}
                alt="header"
              />
            </div>
          ))}
        </div>

        <h3 className="my-3 lg:my-6 text-xl">
          a very complex and demanding wizard form section with very complex
          custom ui elements , custom text-editor section , custom tables and
          forms and multi-level tree structures
        </h3>

        <div className="grid grid-cols-2 gap-x-4">
          {[Image4, Image5].map((imgSrc, i) => (
            <div key={i} className="col-span-2 lg:col-span-1 mx-3 my-3 lg:my-6">
              <Image
                objectFit="contain"
                loading="lazy"
                className="rounded"
                src={imgSrc}
                alt="header"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Home
