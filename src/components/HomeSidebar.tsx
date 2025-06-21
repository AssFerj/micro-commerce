'use client'

import * as Checkbox from '@radix-ui/react-checkbox';
import { Check } from 'lucide-react';
import PriceRangeSlider from "./PriceRangeSlider";

const categories = [
    { id: 'cat1', name: 'Smartphones' },
    { id: 'cat2', name: 'Laptops' },
    { id: 'cat3', name: 'Monitores' },
    { id: 'cat4', name: 'Mouses' },
    { id: 'cat5', name: 'Teclados' },
]

export default function HomeSidebar () {
    return (
        <div className="flex flex-col gap-4 text-white">
            <h3 className="font-bold">Categorias</h3>
            <div className="flex flex-row md:flex-col flex-wrap gap-2">
                {categories.map((category) => (
                    <div key={category.id} className="flex items-center gap-2">
                        <Checkbox.Root 
                            id={category.id} 
                            className="flex h-4 w-4 items-center justify-center rounded border border-gray-400 bg-transparent data-[state=checked]:bg-tertiary data-[state=checked]:border-tertiary focus:outline-none focus-visible:ring-2 focus-visible:ring-tertiary focus-visible:ring-opacity-75"
                        >
                            <Checkbox.Indicator>
                                <Check className="h-3 w-3 text-primary" />
                            </Checkbox.Indicator>
                        </Checkbox.Root>
                        <label htmlFor={category.id} className="text-sm text-gray-400 select-none cursor-pointer">
                            {category.name}
                        </label>
                    </div>
                ))}
            </div>

            <h3 className="font-bold">Preço</h3>
            <PriceRangeSlider />
        </div>
    )
}