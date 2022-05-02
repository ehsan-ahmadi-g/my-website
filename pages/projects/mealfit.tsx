import React from 'react'

import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import Image1 from '../../assets/images/mealfit/1.png'
import Image2 from '../../assets/images/mealfit/2.png'
import Image3 from '../../assets/images/mealfit/3.png'
import Image4 from '../../assets/images/mealfit/4.png'

import Resume from '../../resume'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>{Resume.projects.mealfit.name}</title>
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
                This was a cross platform react native application revolving
                around dieting and counting calories of your daily meals and
                reaching your ideal weight and routine
              </p>
            </div>

            <div className="col-span-1 flex items-end">
              <p className="my-4 text-xl">
                This application was my first experience with react-native and
                expo working with different ui elements and multiple ui
                challenges
              </p>
            </div>

            <div className="col-span-1 flex items-start">
              <p className="my-4 text-xl">
                working with different elements from the expo sdk like
                expo-facebook, expo-notifications and ...
              </p>
            </div>

            <div className="col-span-1 flex items-center">
              <p className="my-4 text-xl">
                integrating the api backend with a third party api source in the
                application logic
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 mt-6 lg:mt-16">
          {[Image1, Image2, Image3, Image4].map((imgSrc, i) => (
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
