import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  import {Filter } from 'lucide-react'

  export default function SideFilter(){
    return(
        <>
        <Sheet>
            <SheetTrigger 
            className="ml-auto flex text-black ring-1 shadow-md ring-gray-100  p-2 rounded-md hover:bg-gray-100">
               <Filter /> Filtrar
            </SheetTrigger>
            <SheetContent>
            <SheetHeader>
                <SheetTitle>Filtrar Documentos</SheetTitle>
                <SheetDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
                </SheetDescription>
            </SheetHeader>
            </SheetContent>
        </Sheet>
    </>
    );
  }