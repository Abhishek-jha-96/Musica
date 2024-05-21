import Image from 'next/image'
import React from 'react'
import { Menu, Search } from 'lucide-react';


export default function NavBar(){
  return (
    <div>
        <header className="flex justify-between py-3">
        <Image src="/Musica.png" width={25} height={65} alt="main logo" />
        <div className="bg-white w-[70%] flex items-center justify-between">
          <input className='w-full h-full px-4 font-mono outline-none text-lg' name="search" type="text" placeholder='Search among the top tracks of this week'/>
          <Search className='mx-2' size={40}/>
        </div>
        <div className=' bg-slate-900 p-2 hover:drop-shadow-2xl transition-shadow duration-500'>
            <Menu color='white' size={48}/>
        </div>
      </header>
    </div>
  )
}

