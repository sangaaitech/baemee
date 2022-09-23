import clsx from 'clsx'
import React from 'react'
import GradientBlock from '@components/UiElements/GradientBlock'
import TestHead from '@components/Navigation/TestHead'
import  MainNav  from '@components/Navigation/MainNav'
// import { LinkPreview } from '@components/LinkPreview';

const Layout = () => {
  const linkStyle =
    'text-sm font-medium text-gray-200 opacity-70 hover:opacity-100 transition-[opacity] duration-200'
  const iconStyle = 'h-6 w-6'

  const GradientText = () => {
    return (
      <div className="relative my-20">
        <h1 className="bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-center text-4xl font-extrabold tracking-tighter text-transparent md:text-6xl">
          Technology at <br /> its finest
        </h1>
        <div className="absolute inset-0 blur-xl">
          <h1 className="text-center text-4xl font-bold  text-pink-600">
            Technology at <br /> its finest
          </h1>
        </div>
      </div>
    )
  }

  return (
    <div className="relative mx-auto max-w-full pb-16">
      {/* navigation */}
      {/* <Navbar /> */}

      <MainNav />

      {/* content */}
      <main className="h-screen">
        <div className="mx-auto mt-12 max-w-lg px-4">
          <h1 className="my-2 text-center text-white">
            <span className="animate-colorCycle bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-center text-7xl font-extrabold tracking-tight text-transparent md:text-9xl">
              Develop
            </span>
          </h1>
          <span className="text-center text-sm font-normal text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
            libero facere sapiente aliquid debitis et sint impedit modi vitae
            labore explicabo consequuntur incidunt provident quod illum ullam
            nesciunt ipsam officiis.
          </span>

          {/* <GradientBlock /> */}
          {/* <TestHead /> */}
        </div>

        <div className="mt-16 grid grid-cols-1 justify-center gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {/* {snippets.map(
            ({ title, editLink, playgroundLink, source, animation }) => (
              <Card
                key={title}
                editLink={editLink}
                playgroundLink={playgroundLink}
                source={source}
                animation={animation}
              />
            )
          )} */}
        </div>
      </main>

      <footer>
        <hr />
        <div className="mt-16 text-center text-sm font-light text-gray-500">
          Crafted by{' '}
          <span className="font-light text-gray-200">
            {/* {LinkPreview
            name="Johnbas"
            href="https://twitter.com/johnybas"
            icon="twitter"
            alt="Johnbas's Twitter profile"
            preview="/twitter.png"/>} */}
            {/* <LinkPreview
              name="Alexandru"
              href="https://twitter.com/Pondorasti"
              preview="/twitter-preview.png"
              alt="Alexandru's Twitter"
            /> */}
          </span>
        </div>
      </footer>
    </div>
  )
}

export default Layout
