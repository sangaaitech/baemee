import { FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa";
import { people } from "@utils/teamData";

export default function Example() {
  return (
    <div className="bg-transparent">
      <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
          <div className="space-y-5 sm:space-y-4">
            <h2 className="text-5xl font-extrabold tracking-tight sm:text-5xl">
              About Us
            </h2>
            <p className="text-xl text-gray-300">
              This is the team that made everything possible. They are the
              backbone of the company.
            </p>
          </div>
          <div className="lg:col-span-2">
            <ul
              role="list"
              className="space-y-12 sm:divide-y sm:divide-gray-200 sm:space-y-0 sm:-mt-8 lg:gap-x-8 lg:space-y-0"
            >
              {people.map((person) => (
                <li key={person.name} className="sm:py-8">
                  <div className="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0">
                    <div className="aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4 cursor-pointer">
                      <img
                        className="object-cover rounded-[2rem]"
                        src={person.imageUrl}
                        alt={person.name}
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <div className="space-y-4">
                        <div className="text-lg leading-6 font-medium space-y-1">
                          <h3>{person.name}</h3>
                          <p className="text-indigo-600">{person.role}</p>
                        </div>
                        <div className="text-lg">
                          <p className="text-gray-400">{person.bio}</p>
                        </div>
                        <ul role="list" className="flex items-center space-x-5">
                          <li>
                            <a
                              href={person.twitterUrl}
                              className="text-gray-400 hover:text-gray-500"
                            >
                              <span className="sr-only">Twitter</span>
                              <FaTwitter className="h-5 w-5" />
                            </a>
                          </li>
                          <li>
                            <a
                              href={person.linkedinUrl}
                              className="text-gray-400 hover:text-gray-500"
                            >
                              <span className="sr-only">LinkedIn</span>
                              <FaFacebookF className="h-5 w-5" />
                            </a>
                          </li>
                          <li>
                            <a
                              href={person.linkedinUrl}
                              className="text-gray-400 hover:text-gray-500"
                            >
                              <span className="sr-only">LinkedIn</span>
                              <FaInstagram className="h-6 w-6" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
