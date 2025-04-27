"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Heart, Menu, PawPrint } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <Link href="/" className="flex items-center gap-2 mb-8">
              <PawPrint className="h-6 w-6 text-amber-500" />
              <span className="font-bold text-xl">Lar Canino</span>
            </Link>
            <nav className="flex flex-col gap-4">
              <Link
                href="/"
                className={`text-lg ${isActive("/") ? "font-semibold text-amber-500" : "text-muted-foreground"}`}
              >
                Início
              </Link>
              <Link
                href="/adocao"
                className={`text-lg ${isActive("/adocao") ? "font-semibold text-amber-500" : "text-muted-foreground"}`}
              >
                Adoção
              </Link>
              <Link
                href="/doar"
                className={`text-lg ${isActive("/doar") ? "font-semibold text-amber-500" : "text-muted-foreground"}`}
              >
                Doar
              </Link>
              <Link
                href="/voluntarios"
                className={`text-lg ${isActive("/voluntarios") ? "font-semibold text-amber-500" : "text-muted-foreground"}`}
              >
                Voluntários
              </Link>
              <Link
                href="/sobre"
                className={`text-lg ${isActive("/sobre") ? "font-semibold text-amber-500" : "text-muted-foreground"}`}
              >
                Sobre Nós
              </Link>
              <Link
                href="/contato"
                className={`text-lg ${isActive("/contato") ? "font-semibold text-amber-500" : "text-muted-foreground"}`}
              >
                Contato
              </Link>
            </nav>
          </SheetContent>
        </Sheet>

        <Link href="/" className="flex items-center gap-2 mr-6">
          <PawPrint className="h-6 w-6 text-amber-500" />
          <span className="font-bold text-xl hidden sm:inline-block">Lar Canino</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link
            href="/"
            className={`transition-colors hover:text-amber-500 ${isActive("/") ? "font-medium text-amber-500" : "text-muted-foreground"}`}
          >
            Início
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger
              className={`transition-colors hover:text-amber-500 ${isActive("/adocao") ? "font-medium text-amber-500" : "text-muted-foreground"}`}
            >
              Adoção
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem asChild>
                <Link href="/adocao">Ver Todos os Pets</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/adocao?type=dog">Cachorros</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/adocao?type=cat">Gatos</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/adocao/processo">Processo de Adoção</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger
              className={`transition-colors hover:text-amber-500 ${isActive("/doar") ? "font-medium text-amber-500" : "text-muted-foreground"}`}
            >
              Doar
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem asChild>
                <Link href="/doar">Doação Financeira</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/doar?tab=supplies">Doação de Suprimentos</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/doar?tab=volunteer">Voluntariado</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link
            href="/voluntarios"
            className={`transition-colors hover:text-amber-500 ${isActive("/voluntarios") ? "font-medium text-amber-500" : "text-muted-foreground"}`}
          >
            Voluntários
          </Link>
          <Link
            href="/sobre"
            className={`transition-colors hover:text-amber-500 ${isActive("/sobre") ? "font-medium text-amber-500" : "text-muted-foreground"}`}
          >
            Sobre Nós
          </Link>
          <Link
            href="/contato"
            className={`transition-colors hover:text-amber-500 ${isActive("/contato") ? "font-medium text-amber-500" : "text-muted-foreground"}`}
          >
            Contato
          </Link>
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <Button asChild variant="ghost" size="icon" className="text-amber-500">
            <Link href="/favoritos">
              <Heart className="h-5 w-5" />
              <span className="sr-only">Favoritos</span>
            </Link>
          </Button>
          <Button asChild className="hidden sm:flex">
            <Link href="/doar">Fazer uma Doação</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
