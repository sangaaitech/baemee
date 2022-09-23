import Image from "next/image";
import React from "react";

const stats = [
  { label: "Founded", value: "2021" },
  { label: "Employees", value: "5" },
  { label: "Beta Users", value: "521" },
  { label: "Raised", value: "$25M" },
];

const DotPatternSvg = () => (
  <svg
    className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
    width={404}
    height={392}
    fill="none"
    viewBox="0 0 404 392"
  >
    <defs>
      <pattern
        id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
        x={0}
        y={0}
        width={20}
        height={20}
        patternUnits="userSpaceOnUse"
      >
        <rect
          x={0}
          y={0}
          width={4}
          height={4}
          className="text-gray-200"
          fill="currentColor"
        />
      </pattern>
    </defs>
    <rect
      width={404}
      height={392}
      fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)"
    />
  </svg>
);

const QuotesSvg = () => (
  <svg
    className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-pink-500"
    fill="currentColor"
    viewBox="0 0 32 32"
    aria-hidden="true"
  >
    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
  </svg>
);

const StatsSection = () => {
  return (
    //  {/* Testimonial/stats section */}
    <div className="relative mt-20">
      <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
        <div className="relative sm:py-16 lg:py-0">
          <div
            aria-hidden="true"
            className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen"
          >
            <div className="absolute inset-y-0 right-1/2 w-full bg-slate-800/30 rounded-r-3xl lg:right-72" />
            {/* Dotted Pattern */}
            <DotPatternSvg />
          </div>
          <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
            {/* Testimonial card*/}
            <div className="relative pt-64 pb-10 rounded-3xl shadow-xl overflow-hidden">
              <img
                className="absolute inset-0 h-full w-full object-cover scale-150 -translate-y-24"
                src="https://scontent.fgau1-1.fna.fbcdn.net/v/t39.30808-6/281845573_787164955596466_4608922145641801750_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=ylkv0p7QdGsAX-O0ou8&tn=8GvU37kuZDkWBPJ7&_nc_ht=scontent.fgau1-1.fna&oh=00_AT_JSDFzx7dPe2CBIa-qsDW0tswX0Z_LQtX7XBLmPzNg_g&oe=62EB729F"
                alt=""
              />
              <div className="absolute inset-0 bg-slate-500/80 mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/50 opacity-90" />
              <div className="relative px-8">
                <div className="h-full w-32">
                  <Image
                    className="h-12 opacity-80"
                    height={40}
                    width={60}
                    objectFit="contain"
                    src="/logo/axewhy-white-logo.png"
                    alt="Workcation"
                  />
                </div>
                <blockquote className="mt-8">
                  <div className="relative text-lg font-medium text-white md:flex-grow">
                    {/* Quotes Svg */}
                    <QuotesSvg />
                    <p className="relative">
                      We are here to put a dent in the Universe, why else we
                      would be here?
                    </p>
                  </div>

                  <footer className="mt-4">
                    <p className="text-base font-semibold text-pink-500">
                      Johnbas, CEO | Axewhy
                    </p>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
          {/* Content area */}
          <div className="pt-12 sm:pt-16 lg:pt-20">
            <h2 className="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl">
              On a mission to empower teams
            </h2>
            <div className="mt-6 text-gray-500 space-y-6">
              <p className="text-lg">
                Sagittis scelerisque nulla cursus in enim consectetur quam.
                Dictum urna sed consectetur neque tristique pellentesque.
                Blandit amet, sed aenean erat arcu morbi. Cursus faucibus nunc
                nisl netus morbi vel porttitor vitae ut. Amet vitae fames
                senectus vitae.
              </p>
              <p className="text-base leading-7">
                Sollicitudin tristique eros erat odio sed vitae, consequat
                turpis elementum. Lorem nibh vel, eget pretium arcu vitae. Eros
                eu viverra donec ut volutpat donec laoreet quam urna.
                Sollicitudin tristique eros erat odio sed vitae, consequat
                turpis elementum. Lorem nibh vel, eget pretium arcu vitae. Eros
                eu viverra donec ut volutpat donec laoreet quam urna.
              </p>
              <p className="text-base leading-7">
                Rhoncus nisl, libero egestas diam fermentum dui. At quis
                tincidunt vel ultricies. Vulputate aliquet velit faucibus
                semper. Pellentesque in venenatis vestibulum consectetur nibh
                id. In id ut tempus egestas. Enim sit aliquam nec, a. Morbi enim
                fermentum lacus in. Viverra.
              </p>
            </div>
          </div>

          {/* Stats section */}
          <div className="mt-10">
            <dl className="grid grid-cols-2 gap-x-4 gap-y-8">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="border-t-2 border-gray-100 pt-6"
                >
                  <dt className="text-base font-medium text-gray-500">
                    {stat.label}
                  </dt>
                  <dd className="text-3xl font-extrabold tracking-tight text-gray-100">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
            <div className="mt-10">
              <a href="#" className="text-base font-medium text-rose-500">
                Learn more about how we're changing the world&nbsp&rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
