"use client"
import { SearchManufacturerProps } from '@/types'
import React from 'react'
import { useState, Fragment } from 'react';
import Image from "next/image";
import { manufacturers } from "@/constants";
import { Combobox, Transition} from '@headlessui/react'

const SearchManufacturer = ({manufacturer, setManufacturer}: SearchManufacturerProps) => {
  
  const [query, setQuery] = useState('');

  const filteredManufacturers = 
      query === "" 
      ? manufacturers 
      : manufacturers.filter((item) => (
          item.toLowerCase().replace(/\s+/g, '').includes(query.toLowerCase().replace(/\s+/g, '')
      ))) 

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

          <Combobox.Input
            className='search-manufacturer__input'
            placeholder='Volkswagen'
            displayValue={(manufacturer: string) => manufacturer}
            onChange={(e) => setQuery(e.target.value)}
            />
            <Transition
            as={Fragment}
            Leave="transition ease-in duration-100"
            LeaveFrom="opacity-100"
            LeaveTo="opacity-0"
            afterLeave={() => setQuery('')}
            >
                <Combobox.Options>
                  {filteredManufacturers.length === 0 && query !== "" && (
                    <Combobox.Option
                    value={query}
                    className={"search-manufacturer__option"}>
                        Create "{query}"
                    </Combobox.Option>
                  )}
                </Combobox.Options>
            </Transition>
        </div>
      </Combobox>
    </div>
  )
}

export default SearchManufacturer
