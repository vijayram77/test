import React from 'react'

const Section = ({Period , Title , subtitle , remarks}) => {
  return (
    <div>
              <div className="flex items-center border-b pb-2 border-zinc-700">
                
                <div>
                  <h4 className="font-semibold font-[Gilroy] text-sm text-zinc-400/80">{Period}</h4>
                  <h3 className=" text-xl font-[Degular] font-semibold text-zinc-50 ">
                    {Title}
                  </h3>
                  <p className="text-base md:text-base text-zinc-400 font-semibold font-[Gilroy]">
                    {subtitle}
                  </p>
                  {
                    remarks &&
                    <p className="text-base md:text-base font-semibold text-zinc-300/90 font-[Gilroy]">
                      {remarks}
                  </p>
                  }
                </div>
              </div>
            </div>
  )
}

export default Section
