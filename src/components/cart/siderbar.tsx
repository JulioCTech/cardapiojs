import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export const CartSidebar = () => {

    return (
        <Sheet>
            <SheetTrigger>
                <Button>
                    <ShoppingCart />
                    <p>Carrinho</p>
                </Button>
            </SheetTrigger>
            <SheetContent className="">
                <SheetHeader>
                    <SheetTitle>Carrinho</SheetTitle>
                </SheetHeader>
                <SheetDescription className="p-3">
                    <div className="flex flex-col gap-5 my-3">
                        .....
                    </div>
                    <Separator className="my-4" />

                    <div className="flex justify-between items-center text-xs">
                        <div>Subtotal:</div>
                        <div>....</div>
                    </div>

                    <Separator className="my-4" />
                    <div className="text-center">

                        <Button>Finalizar Compra</Button>

                    </div>


                </SheetDescription>
            </SheetContent>
        </Sheet>
    )
}