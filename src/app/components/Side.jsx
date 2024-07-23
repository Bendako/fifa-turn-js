import React from 'react'
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetFooter } from '@/components/ui/sheet'
import { Button, buttonVariants } from '@/components/ui/button'

const Side = () => {
  return (
    <Sheet>
        <SheetTrigger className="group -m-2 flex items-center p-2">
            <Button className={buttonVariants({
                variant: "primary"
            })}>גרפים</Button>
        </SheetTrigger>
        <SheetContent className="flex w-full flex-col pr-0 sm:max-w-lg">
            <SheetHeader className="space-y-2.5 pr-6">
                <SheetTitle>גרפים</SheetTitle>
            </SheetHeader>

            <div className='animate-bounce text-center justify-center'>יהיה פה גרפים וסטטיסטיקות</div>
        </SheetContent>
    </Sheet>
  )
}

export default Side