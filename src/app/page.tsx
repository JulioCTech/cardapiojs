import { ThemeProvider } from "@/components/theme-provider.tsx";
import { ModeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button"


const Home = () => {
    return (
        <div>
            <Button>Você clicou</Button>

            <ModeToggle />
        </div>
    )
}



export default Home;