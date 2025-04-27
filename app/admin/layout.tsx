"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, PawPrint, Heart, Users, MessageSquare, LogOut, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const routes = [
    {
      href: "/admin",
      label: "Dashboard",
      icon: Home,
      active: pathname === "/admin",
    },
    {
      href: "/admin/pets",
      label: "Pets",
      icon: PawPrint,
      active: pathname === "/admin/pets",
    },
    {
      href: "/admin/adocoes",
      label: "Adoções",
      icon: Home,
      active: pathname === "/admin/adocoes",
    },
    {
      href: "/admin/doacoes",
      label: "Doações",
      icon: Heart,
      active: pathname === "/admin/doacoes",
    },
    {
      href: "/admin/voluntarios",
      label: "Voluntários",
      icon: Users,
      active: pathname === "/admin/voluntarios",
    },
    {
      href: "/admin/mensagens",
      label: "Mensagens",
      icon: MessageSquare,
      active: pathname === "/admin/mensagens",
    },
  ]

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar para desktop */}
      <div className="hidden md:flex w-64 flex-col bg-white border-r">
        <div className="p-6">
          <h2 className="text-2xl font-bold">Lar Canino</h2>
          <p className="text-sm text-muted-foreground">Painel Administrativo</p>
        </div>
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {routes.map((route) => (
              <li key={route.href}>
                <Link
                  href={route.href}
                  className={`flex items-center p-3 rounded-md hover:bg-gray-100 transition-colors ${
                    route.active ? "bg-gray-100 text-amber-600 font-medium" : ""
                  }`}
                >
                  <route.icon className="h-5 w-5 mr-3" />
                  {route.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="p-4 border-t">
          <Button variant="outline" className="w-full justify-start" asChild>
            <Link href="/">
              <LogOut className="h-4 w-4 mr-2" />
              Sair
            </Link>
          </Button>
        </div>
      </div>

      {/* Conteúdo principal */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header para mobile */}
        <header className="md:hidden bg-white border-b p-4 flex items-center justify-between">
          <h2 className="text-xl font-bold">Lar Canino</h2>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64 p-0">
              <div className="p-6 border-b">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">Lar Canino</h2>
                  <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
                    <X className="h-5 w-5" />
                    <span className="sr-only">Fechar</span>
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground">Painel Administrativo</p>
              </div>
              <nav className="p-4">
                <ul className="space-y-2">
                  {routes.map((route) => (
                    <li key={route.href}>
                      <Link
                        href={route.href}
                        className={`flex items-center p-3 rounded-md hover:bg-gray-100 transition-colors ${
                          route.active ? "bg-gray-100 text-amber-600 font-medium" : ""
                        }`}
                        onClick={() => setOpen(false)}
                      >
                        <route.icon className="h-5 w-5 mr-3" />
                        {route.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="p-4 border-t mt-auto">
                <Button variant="outline" className="w-full justify-start" asChild>
                  <Link href="/" onClick={() => setOpen(false)}>
                    <LogOut className="h-4 w-4 mr-2" />
                    Sair
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </header>

        {/* Conteúdo da página */}
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  )
}
