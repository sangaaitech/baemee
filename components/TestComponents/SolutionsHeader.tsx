/* This example requires Tailwind CSS v2.0+ */
import {Fragment, useState} from 'react';
import {Popover, Transition} from '@headlessui/react';
import {ChevronDownIcon, ChevronUpIcon} from '@heroicons/react/24/outline';
import {
  ChartBarIcon,
  CursorArrowRaysIcon,
  PhoneIcon,
  PlayIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  RectangleGroupIcon,
} from '@heroicons/react/24/outline';

const solutions = [
  {
    name: 'Analytics',
    description: 'Get a better understanding of where your traffic is coming from.',
    href: '#',
    icon: ChartBarIcon,
  },
  {
    name: 'Engagement',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '#',
    icon: CursorArrowRaysIcon,
  },
  {
    name: 'Security',
    description: "Your customers' data will be safe and secure.",
    href: '#',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Integrations',
    description: "Connect with third-party tools that you're already using.",
    href: '#',
    icon: RectangleGroupIcon,
  },
  {
    name: 'Automations',
    description: 'Build strategic funnels that will drive your customers to convert',
    href: '#',
    icon: RocketLaunchIcon,
  },
];
const callsToAction = [
  {name: 'Watch Demo', href: '#', icon: PlayIcon},
  {name: 'Contact Sales', href: '#', icon: PhoneIcon},
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  return (
    <Popover className="relative">
      {({open, close}) => (
        <>
          <Popover.Button
            className={classNames(
              open ? 'text-indigo-400' : 'text-gray-300',
              'group inline-flex items-center rounded-md bg-transparent text-base font-medium transition duration-300 ease-in-out hover:text-gray-400 focus:outline-none focus:ring focus:ring-transparent',
            )}
          >
            <span>Solutions</span>
            <ChevronDownIcon
              className={classNames(
                open ? 'hidden' : 'block text-gray-400',
                'ml-2 h-5 w-5 transition-all duration-200 ease-in-out group-hover:text-gray-500',
              )}
              aria-hidden="true"
            />
            <ChevronUpIcon
              className={classNames(
                open ? 'block text-indigo-500' : 'hidden',
                'ml-2 h-5 w-5 transition-all duration-300 ease-in-out group-hover:text-gray-400',
              )}
              aria-hidden="true"
            />
          </Popover.Button>
          <Transition
            //   as={Fragment}
            enter="duration-150 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              static
              className="right-2/5 absolute inset-x-0 top-7 mt-3 w-screen max-w-md origin-top -translate-x-1/2 transform p-2 px-2 transition sm:px-0"
            >
              <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="relative grid gap-6 bg-slate-800 px-5 py-6 sm:gap-8 sm:p-8">
                  {solutions.map(item => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-m-3 flex items-start rounded-lg p-3 transition duration-150 ease-in-out hover:bg-gray-900"
                    >
                      <item.icon
                        className="h-6 w-6 flex-shrink-0 text-indigo-500"
                        aria-hidden="true"
                      />
                      <div className="ml-4">
                        <p className="text-base font-medium text-gray-100">{item.name}</p>
                        <p className="mt-1 text-sm text-gray-400">{item.description}</p>
                      </div>
                    </a>
                  ))}
                </div>
                <div className="space-y-6 bg-slate-700 px-5 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                  {callsToAction.map(item => (
                    <div key={item.name} className="flow-root">
                      <a
                        href={item.href}
                        className="-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-100 transition duration-150 ease-in-out hover:bg-slate-800"
                      >
                        <item.icon
                          className="h-6 w-6 flex-shrink-0 text-indigo-500"
                          aria-hidden="true"
                        />
                        <span className="ml-3">{item.name}</span>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
