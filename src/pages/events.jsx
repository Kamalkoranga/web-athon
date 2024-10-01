import MainLayout from "../layouts/mainLayout"

export default function Event() {

  const callouts = [
    {
      name: '',
      description: '',
      imageSrc: './images/1.jpg',
      imageAlt: '',
      href: '#',
    },
    {
      name: '',
      description: '',
      imageSrc: './images/2.jpg',
      imageAlt: '',
      href: '#',
    },
    {
      name: '',
      description: '',
      imageSrc: './images/3.jpg',
      imageAlt: '',
      href: '#',
    },
    {
      name: '',
      description: '',
      imageSrc: './images/4.jpg',
      imageAlt: '',
      href: '#',
    },
    {
      name: '',
      description: '',
      imageSrc: './images/5.jpg',
      imageAlt: '',
      href: '#',
    },
    {
      name: '',
      description: '',
      imageSrc: './images/6.jpg',
      imageAlt: '',
      href: '#',
    },
  ]
  return (
    <MainLayout>
      <div className="bg-gray-100 rounded-xl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 lg:max-w-none pb-0">
            <div className="flex items-center gap-5 justify-between py-10">
              <div>
                <h2 className="text-5xl font-bold text-gray-900 font-poppins">Events</h2>
                <p className="font-poppins text-xl leading-8 my-5">Attend our interactive workshops, panel discussions, <br />
                  pitch nights, and networking mixers to enhance your <br />
                  skills, grow your venture, and expand your community.</p>
              </div>
              <img className="w-40" src="./logo.png" alt="" />
              
            </div>
            <hr />
            <div className="mt-10 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              {callouts.map((callout) => (
                <div key={callout.name} className="group relative">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    <img
                      alt={callout.imageAlt}
                      src={callout.imageSrc}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500">
                    <a href={callout.href}>
                      <span className="absolute inset-0" />
                      {callout.name}
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-gray-900">{callout.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}