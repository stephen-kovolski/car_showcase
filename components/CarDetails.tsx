import { CarProps } from '@/types';
import {Fragment} from 'react'
import React from 'react'
import {Dialog, Transition} from '@headlessui/react'

interface CarDetailsProps {
    isOpen: boolean;
    closeModal: () => void;
    car: CarProps;
}

const CarDetails = ({ isOpen, closeModal, car}: CarDetailsProps) => {
  return (
    <div>CarDetails</div>
  )
}

export default CarDetails