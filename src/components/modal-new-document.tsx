import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"

  export default function NewDocument() {
    return (
      <>
        <Dialog>
          <DialogTrigger
           className="ml-auto flex text-white ring-1 shadow-md ring-gray-400  p-2 rounded-md bg-green-500 hover:bg-green-600">
            + Novo Documento
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you absolutely sure?</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </>
    );
  }