import HomeBanner from "@/components/HomeBanner";
import HomeContent from "@/components/HomeContent";
import HomeSidebar from "@/components/HomeSidebar";
import Footer from "@/components/Footer";
import CategoriesSection from "@/components/CategoriesSection";

export default function Home () {
    return (
        <div className="min-h-screen">
            <HomeBanner />
            <div className="grid grid-cols-12">
                <div className="col-span-12 md:col-span-3 bg-primary p-4">
                    <HomeSidebar />
                </div>
                <div className="col-span-12 md:col-span-9 p-4 md:p-8">
                    <CategoriesSection />
                    <HomeContent />
                </div>
            </div>
            <Footer />
        </div>
    )
}