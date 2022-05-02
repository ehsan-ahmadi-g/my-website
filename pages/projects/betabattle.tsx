import React from 'react'

import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import Image1 from '../../assets/images/betabattle/1.png'
import Image2 from '../../assets/images/betabattle/2.png'
import Image3 from '../../assets/images/betabattle/3.png'
import Image4 from '../../assets/images/betabattle/4.png'
import Image5 from '../../assets/images/betabattle/5.png'

import Resume from '../../resume'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>{Resume.projects.betabattle.name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="px-6 lg:px-20">
        <div className="grid grid-cols-3 items-stretch gap-2 sm:gap-6">
          <div className="flex flex-row justify-center col-span-3 lg:col-span-1">
            <Image
              height={800}
              width={400}
              objectFit={'contain'}
              src={Image1}
              alt="header"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-8 col-span-3 lg:col-span-2">
            <div className="col-span-1 flex items-center">
              <p className="my-4 text-xl">
                This was a cross platform react native application about gaming
                and betting on the result with in-game coins
              </p>
            </div>

            <div className="col-span-1 flex items-end">
              <p className="my-4 text-xl">
                This project had a very exciting and challenging section about
                making custom game specific avatars
              </p>
            </div>

            <div className="col-span-1 flex items-start">
              <p className="my-4 text-xl">
                a seperate system for creating dynamic avatars with multiple
                changing parts for every avatar and a very aggressive chaching
                system to improve performance of avatar creation section
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 xl:grid-cols-5 mt-6 lg:mt-16">
          {[Image1, Image2, Image3, Image4, Image5].map((imgSrc, i) => (
            <div
              key={i}
              className="col-span-4 md:col-span-2 xl:col-span-1 my-3 mx-auto xl:mx-3"
            >
              <Image
                height={800}
                width={400}
                objectFit={'contain'}
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
