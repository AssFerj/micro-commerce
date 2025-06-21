import HomeBanner from "@/components/HomeBanner";
import HomeContent from "@/components/HomeContent";
import HomeSidebar from "@/components/HomeSidebar";

export default function Home () {
    return (
        <div className="p-4">
            <HomeBanner />
            <div className="grid grid-cols-12 gap-4 mt-8">
                <div className="col-span-12 md:col-span-3 bg-primary p-4">
                    <HomeSidebar />
                </div>
                <div className="col-span-12 md:col-span-9">
                    <HomeContent />
                </div>
            </div>
        </div>
    )
}