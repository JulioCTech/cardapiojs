import { Logo } from "@/components/logo"
import { ModeToggle } from "@/components/theme-toggle"
import { CartSidebar } from "@/components/cart/siderbar"

export const Header = () => {
    return (
        <header className="flex justify-between items-center my-5 mx-3">
            <div className="flex items-center gap-2.5">
                <Logo />
                <ModeToggle />
            </div>
            <div className="flex items-center gap-2.5">
                <CartSidebar />
            </div>

        </header>
    )
}