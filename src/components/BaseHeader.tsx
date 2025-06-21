import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import BaseNavigation from "./BaseNavigation";

export default function BaseHeader () {
    return (
        <header className="sticky grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-primary text-tertiary justify-center items-center">
            <div className="flex justify-between md:justify-center items-center gap-4">
                <Link href={"/"} className="text-2xl font-bold">Commerce</Link>
                <ShoppingCart className="hover:cursor-pointer block md:hidden" />
            </div>
            <div className="flex justify-center items-center flex-row-reverse gap-4 md:block">
                <input type="search" name="search" id="search" className="bg-gray-200 border-gray-200 rounded text-primary w-full h-10 p-4" />
                <BaseNavigation />
            </div>
            <div className="hidden md:flex justify-center items-center">
                <ShoppingCart className="hover:cursor-pointer" />
            </div>
        </header>
    )
}