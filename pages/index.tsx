import React from 'react'

import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { tw } from 'twind'

import MyImage from '../assets/images/avatar.png'

import Resume from '../resume'

const Typer = ({ TEXTArr }: { TEXTArr: Array<string> }) => {
  const [typerState, setTyperState] = React.useState({
    text: '',
    isDeleting: false,
    loop: 0,
  })

  const handlerTypingEffect = React.useCallback(() => {
    setTyperState((prevState) => {
      if (prevState.isDeleting) {
        const isDeleting =
          prevState.isDeleting && prevState.text.length - 1 !== 0

        return {
          loop: isDeleting
            ? prevState.loop
            : (prevState.loop + 1) % TEXTArr.length,
          text: TEXTArr[prevState.loop].substring(0, prevState.text.length - 1),
          isDeleting,
        }
      } else {
        return {
          loop: prevState.loop,
          text: TEXTArr[prevState.loop].substring(0, prevState.text.length + 1),
          isDeleting:
            prevState.text.length + 1 === TEXTArr[prevState.loop].length,
        }
      }
    })

    setTimeout(handlerTypingEffect, 250)
  }, [TEXTArr])

  React.useEffect(handlerTypingEffect, [handlerTypingEffect])

  return (
    <h1 className="flex items-center justify-center text-center my-2 text-4xl lg:text-8xl font-bold text-gray-200 h-[122px]">
      {typerState.text}
    </h1>
  )
}

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>{Resume.name} Personal website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex w-full flex-col xl:flex-row items-center justify-between py-3 px-6 lg:px-20">
        <div className="inline-flex flex-col justify-center items-center order-2 xl:order-1 mt-5 xl:mt-0">
          <Typer TEXTArr={['Developer', 'Programmer', 'Wizard']} />
        </div>

        <div className="inline-flex order-1 xl:order-2">
          <Image
            className="h-full w-full rounded-full"
            src={MyImage}
            alt="me"
          />
        </div>
      </div>

      <main className="flex w-full flex-col px-6 lg:px-20">
        <div id="about" className="my-4 lg:my-12 flex flex-col">
          <h1 className="text-4xl font-bold uppercase text-white">
            Ehsan Ahmadi
          </h1>
          <h3 className="mt-2 text-2xl font-semibold text-gray-300">
            Front-end Developer
          </h3>

          <p className="mt-3 text-base text-gray-400">
            I am a React.js & React-native Developer
          </p>

          <p className="mt-1 text-base text-gray-400">
            I am very passionate about my work and delivering the best code and
            product imaginable , I am very keen on learning new technologies and
            frameworks and even new languages
          </p>

          <p className="mt-1 text-base text-gray-400">
            I am very keen on learning new technologies and frameworks and even
            new languages
          </p>
        </div>

        <h1
          id="projects"
          className="my-4 lg:my-12 inline-flex flex-col sm:flex-row items-center justify-center text-center text-4xl lg:text-8xl font-bold text-gray-200"
        >
          Featured
          <span className="ml-3 text-blue-600">Projects</span>
        </h1>

        <div className="my-4 flex flex-col">
          {[
            { ...Resume.projects.mealfit, href: 'mealfit' },
            { ...Resume.projects.betabattle, href: 'betabattle' },
            { ...Resume.projects.optimal360, href: 'optimal360' },
            { ...Resume.projects.specsReady, href: 'specsReady' },
          ].map((project) => (
            <div
              key={project.id}
              className="flex flex-col py-6 relative border-l-8 border-l-blue-600"
            >
              <div
                className={tw(
                  'w-8 h-8 rounded-full',
                  'absolute -translate-x-1/2 -translate-y-1/2 top-1/2 -left-[4px] bg-blue-600'
                )}
              />

              <div className="flex flex-row items-center justify-between xl:w-2/3">
                <div className="flex flex-col">
                  <h2 className="text-2xl pl-8 font-semibold text-gray-100">
                    {project.name}
                  </h2>

                  <p className="text-base pl-8 font-light text-gray-200">
                    {project.description}
                  </p>
                </div>

                <Link
                  passHref
                  key={project.id}
                  href={`/projects/${project.href}`}
                >
                  <button className="px-4 py-2 text-white border-2 border-blue-600 rounded">
                    See Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  )
}

export default Home
