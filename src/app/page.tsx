import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider.tsx";
import { ModeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button"


const Home = () => {
    return (
        <div className="w-full max-w-4xl mx-auto">

            <Header />


            <div className="mx-3">
                Lista
            </div>


            <Footer />
        </div>
    )
}



export default Home;