import Link from 'next/link';
import Image from 'next/image';

interface CategoriesCardProps {
    imageUrl: string;
    name: string;
}

export default function CategoriesCard({ imageUrl, name }: CategoriesCardProps) {
    return (
        <Link href={`/categorias/${name}`}>
            <div className="bg-white rounded-lg shadow-md overflow-hidden group border border-gray-200 hover:cursor-pointer transition-colors w-40">
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
                </div>
            </div>
        </Link>
    );
}
