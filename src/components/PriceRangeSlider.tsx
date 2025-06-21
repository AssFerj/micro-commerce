'use client'

import * as Slider from '@radix-ui/react-slider';
import { useState } from 'react';

export default function PriceRangeSlider() {
    const [range, setRange] = useState([100, 500]);

    return (
        <div className="w-full px-2">
            <Slider.Root 
                className="relative flex items-center select-none touch-none w-full h-5" 
                defaultValue={[100, 500]} 
                max={5000} 
                step={10} 
                minStepsBetweenThumbs={1}
                onValueChange={(value) => setRange(value)}
            >
                <Slider.Track className="bg-gray-200 relative grow rounded-full h-[3px]">
                    <Slider.Range className="absolute bg-tertiary rounded-full h-full" />
                </Slider.Track>
                <Slider.Thumb className="block w-4 h-4 bg-tertiary shadow-md rounded-full focus:outline-none focus:ring-2 focus:ring-tertiary focus:ring-opacity-50" />
                <Slider.Thumb className="block w-4 h-4 bg-tertiary shadow-md rounded-full focus:outline-none focus:ring-2 focus:ring-tertiary focus:ring-opacity-50" />
            </Slider.Root>
            <div className="flex justify-between mt-2 text-sm text-gray-400">
                <span>R$ {range[0]}</span>
                <span>R$ {range[1]}</span>
            </div>
        </div>
    );
}
