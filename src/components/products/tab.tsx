import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const ProductsTab = () => {
    return (
        <Tabs defaultValue="tab1">

            <TabsList className="flex w-full">
                <TabsTrigger value="tab1" >
                    Tab1
                </TabsTrigger>
                <TabsTrigger value="2" >
                    Tab2
                </TabsTrigger>
            </TabsList>

            <TabsContent value="tab1">Conteúdo da Tab 1</TabsContent>
            <TabsContent value="2">Conteúdo da Tab 2</TabsContent>
        </Tabs>
    );
}