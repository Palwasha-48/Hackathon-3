import React from 'react'
import Image from 'next/image'

export default function Homethree () {
  return (

              <>
              <div className="container mx-auto px-4 py-12 sm:py-16">
                 <div className="text-center mb-8 sm:mb-10">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-2">Browse The Range</h2>
                  <p className="text-sm sm:text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white">
                      <Image src="/item3.png" alt="Dining" width={400} height={300} />
                      <div className="p-4 text-center">
                        <p className="text-lg font-bold">Dining</p>
                      </div>
                    </div>
                    <div className="bg-white">
                      <Image src="/item2.png" alt="Living" width={400} height={300} />
                      <div className="p-4 text-center">
                        <p className="text-lg font-bold">Living</p>
                      </div>
                    </div>
                    <div className="bg-white">
                      <Image src="/item1.png" alt="Bedroom" width={400} height={300} />
                      <div className="p-4 text-center">
                        <p className="text-lg font-bold">Bedroom</p>
                      </div>
                    </div>
                  </div>
            </div>
            </>  
  )
}
