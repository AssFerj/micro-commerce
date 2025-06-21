import ProductCard from "./ProductCard";

const products = [
    { id: 1, name: 'Mouse Gamer Redragon Cobra', imageUrl: '/placeholder.svg', price: 139.90 },
    { id: 2, name: 'Teclado Mecânico HyperX Alloy', imageUrl: '/placeholder.svg', price: 499.99 },
    { id: 3, name: 'Monitor Gamer AOC Hero 24"', imageUrl: '/placeholder.svg', price: 999.90 },
    { id: 4, name: 'Headset Gamer Logitech G435', imageUrl: '/placeholder.svg', price: 349.90 },
    { id: 5, name: 'Smartphone Xiaomi Poco X6', imageUrl: '/placeholder.svg', price: 1899.00 },
    { id: 6, name: 'Notebook Dell G15 com RTX 3050', imageUrl: '/placeholder.svg', price: 4599.00 },
    { id: 7, name: 'Cadeira Gamer DT3 Sports', imageUrl: '/placeholder.svg', price: 1299.00 },
    { id: 8, name: 'SSD Kingston NV2 1TB', imageUrl: '/placeholder.svg', price: 429.90 },
];

export default function HomeContent () {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map(product => (
                <ProductCard 
                    key={product.id} 
                    name={product.name} 
                    price={product.price} 
                    imageUrl={product.imageUrl} 
                />
            ))}
        </div>
    )
}