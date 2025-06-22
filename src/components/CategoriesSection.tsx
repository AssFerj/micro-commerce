import CategoriesCard from "./CategoriesCard"

const categories = [
    { id: 1, name: 'Smartphones', imageUrl: '/placeholder.svg' },
    { id: 2, name: 'Laptops', imageUrl: '/placeholder.svg' },
    { id: 3, name: 'Monitores', imageUrl: '/placeholder.svg' },
    { id: 4, name: 'Mouses', imageUrl: '/placeholder.svg' },
    { id: 5, name: 'Teclados', imageUrl: '/placeholder.svg' },
]

export default function CategoriesSection () {
    return (
        <div>
            <div className="flex flex-row flex-wrap gap-4 justify-center items-center mb-20">
                {categories.map((category) => (
                    <CategoriesCard key={category.id} name={category.name} imageUrl={category.imageUrl} />
                ))}
            </div>
        </div>
    )
}