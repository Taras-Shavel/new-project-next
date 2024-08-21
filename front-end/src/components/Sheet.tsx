"use client"

import DehazeIcon from '@mui/icons-material/Dehaze';

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { NavBar } from './NavBar';


const SheetSide = () => {
  return (
    <div className="flex">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" className='w-[32px] h-[32px] border border-[#363639] py-[6px] px-2 mr-4' style={{ background: 'rgba(0, 0, 61, 0.051)' }}>
            <DehazeIcon sx={{ color: "#EBEBEF", width: 16, height: 16 }} />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className='p-0 w-[220px]'>

          <NavBar />
        </SheetContent>
      </Sheet>
    </div>
  )
}

export { SheetSide }
