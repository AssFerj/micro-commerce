import Image from 'next/image';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
    imageUrl: string;
    name: string;
    price: number;
}

export default function ProductCard({ imageUrl, name, price }: ProductCardProps) {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden group border border-gray-200 w-80">
            <div className="relative w-full h-48 bg-gray-50 flex items-center justify-center">
                <Image 
                    src={imageUrl} 
                    alt={name} 
                    layout="fill" 
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-110"
                />
            </div>
            <div className="p-4 flex flex-col">
                <h3 className="text-md font-semibold text-gray-800 truncate h-6">{name}</h3>
                <p className="text-xl font-bold text-primary mt-2">R$ {price.toFixed(2).replace('.', ',')}</p>
                <button className="mt-4 w-full bg-tertiary text-primary hover:text-white py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 cursor-pointer">
                    <ShoppingCart size={18} />
                    Adicionar
                </button>
            </div>
        </div>
    );
}
