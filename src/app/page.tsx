import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { TabsSkeleton } from "@/components/products/skeleton";
import { ProductsTab } from "@/components/products/tab";
import { ThemeProvider } from "@/components/theme-provider.tsx";
import { ModeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button"
import { Suspense } from "react";


const Home = () => {
    return (
        <div className="w-full max-w-4xl mx-auto">

            <Header />

            <div className="mx-3">

                <Suspense fallback={<TabsSkeleton />}>

                    <ProductsTab />

                </Suspense>
            </div>


            <Footer />
        </div>
    )
}



export default Home;