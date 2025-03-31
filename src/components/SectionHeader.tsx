import React from 'react'

type Props = {
    title: string,
    eyebrow: string,
    description: string,
}

const SectionHeader = ({title, eyebrow, description}: Props) => {
  return (
    <div className="text-center">
    <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-green-500 to-green-200 text-transparent bg-clip-text">
      {eyebrow}
    </p>
    <h2 className="font-serif text-3xl md:text-5xl mt-4">{title}</h2>
    <p className="text-white/60 mt-4 max-w-md mx-auto md:text-lg lg:text-xl">
      {description}
    </p>
  </div>
  )
}

export default SectionHeader