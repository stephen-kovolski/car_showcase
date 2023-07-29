"use client"
import { SearchManufacturerProps } from '@/types'
import React from 'react'
import Image from "next/image";
import { Combobox, Transition} from '@headlessui/react'

const SearchManufacturer = ({manufacturer, setManufacturer}: SearchManufacturerProps) => {
  return (
    <div className='search-manufacturer'>
      <Combobox>
        <div className="relative w-full">
          <Combobox.Button className='absolute top-[14px]'>
            <Image 
              src='/car-logo.svg'
              width={20}
              height={20}
              className='m1-4'
              alt="Car Logo"
            />
          </Combobox.Button>
        </div>
      </Combobox>
    </div>
  )
}

export default SearchManufacturer
