import React from 'react'
import Logo from '../../assets/Logo.svg'

export default function Header() {
  return (
    <header className="bg-white shadow absolute w-full h-20 top-16">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-bluegray-900">
              <img src={Logo} />
            </h1>
        </div>
    </header>
  )
}
