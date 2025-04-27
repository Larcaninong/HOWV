import { createServerSupabaseClient } from "./supabase"
import type { Event, SupplyDonation } from "@/types"

// Função para buscar eventos
export async function getEvents(): Promise<Event[]> {
  try {
    const supabase = createServerSupabaseClient()

    const { data: events, error } = await supabase
      .from("events")
      .select("*")
      .eq("is_active", true)
      .order("event_date", { ascending: true })

    if (error) {
      console.error("Erro ao buscar eventos:", error)
      return []
    }

    return events as Event[]
  } catch (error) {
    console.error("Erro ao buscar eventos:", error)
    return []
  }
}

// Função para buscar doações de suprimentos
export async function getSupplyDonations(): Promise<SupplyDonation[]> {
  try {
    const supabase = createServerSupabaseClient()

    const { data: supplyDonations, error } = await supabase
      .from("supply_donations")
      .select("*")
      .order("created_at", { ascending: false })

    if (error) {
      console.error("Erro ao buscar doações de suprimentos:", error)
      return []
    }

    return supplyDonations as SupplyDonation[]
  } catch (error) {
    console.error("Erro ao buscar doações de suprimentos:", error)
    return []
  }
}

// Função para buscar um evento específico
export async function getEvent(id: string): Promise<Event | null> {
  try {
    const supabase = createServerSupabaseClient()

    const { data: event, error } = await supabase.from("events").select("*").eq("id", id).single()

    if (error) {
      console.error(`Erro ao buscar evento com ID ${id}:`, error)
      return null
    }

    return event as Event
  } catch (error) {
    console.error(`Erro ao buscar evento com ID ${id}:`, error)
    return null
  }
}

// Função para buscar próximos eventos
export async function getUpcomingEvents(limit = 3): Promise<Event[]> {
  try {
    const supabase = createServerSupabaseClient()
    const now = new Date().toISOString()

    const { data: events, error } = await supabase
      .from("events")
      .select("*")
      .eq("is_active", true)
      .gte("event_date", now)
      .order("event_date", { ascending: true })
      .limit(limit)

    if (error) {
      console.error("Erro ao buscar próximos eventos:", error)
      return []
    }

    return events as Event[]
  } catch (error) {
    console.error("Erro ao buscar próximos eventos:", error)
    return []
  }
}

// Função para buscar doações de suprimentos pendentes
export async function getPendingSupplyDonations(): Promise<SupplyDonation[]> {
  try {
    const supabase = createServerSupabaseClient()

    const { data: donations, error } = await supabase
      .from("supply_donations")
      .select("*")
      .eq("status", "pending")
      .order("created_at", { ascending: false })

    if (error) {
      console.error("Erro ao buscar doações de suprimentos pendentes:", error)
      return []
    }

    return donations as SupplyDonation[]
  } catch (error) {
    console.error("Erro ao buscar doações de suprimentos pendentes:", error)
    return []
  }
}

// Funções mock para dados que ainda não existem no banco de dados
// Estas funções serão substituídas quando as tabelas forem criadas

export async function getMockPets() {
  return [
    {
      id: "1",
      name: "Max",
      age: "2 anos",
      breed: "Labrador",
      description: "Um cachorro amigável e brincalhão que adora crianças.",
      image: "/placeholder.svg?height=300&width=300",
      category: "dog",
      status: "available",
      featured: true,
      created_at: new Date().toISOString(),
    },
    {
      id: "2",
      name: "Luna",
      age: "1 ano",
      breed: "Siamês",
      description: "Uma gata calma e carinhosa que adora dormir no colo.",
      image: "/placeholder.svg?height=300&width=300",
      category: "cat",
      status: "available",
      featured: true,
      created_at: new Date().toISOString(),
    },
    {
      id: "3",
      name: "Rex",
      age: "3 anos",
      breed: "Pastor Alemão",
      description: "Um cachorro leal e protetor, ótimo para famílias.",
      image: "/placeholder.svg?height=300&width=300",
      category: "dog",
      status: "available",
      featured: true,
      created_at: new Date().toISOString(),
    },
    {
      id: "4",
      name: "Mia",
      age: "6 meses",
      breed: "Persa",
      description: "Uma gatinha brincalhona e curiosa.",
      image: "/placeholder.svg?height=300&width=300",
      category: "cat",
      status: "available",
      featured: true,
      created_at: new Date().toISOString(),
    },
  ]
}

export async function getMockTestimonials() {
  return [
    {
      id: "1",
      name: "João Silva",
      role: "Adotante",
      content: "Adotar o Max foi a melhor decisão que tomei. Ele trouxe tanta alegria para minha vida!",
      avatar: "/placeholder.svg?height=100&width=100",
      created_at: new Date().toISOString(),
    },
    {
      id: "2",
      name: "Maria Oliveira",
      role: "Adotante",
      content: "O processo de adoção foi simples e a equipe do Lar Canino foi muito atenciosa e prestativa.",
      avatar: "/placeholder.svg?height=100&width=100",
      created_at: new Date().toISOString(),
    },
    {
      id: "3",
      name: "Pedro Santos",
      role: "Voluntário",
      content:
        "Ser voluntário no Lar Canino é uma experiência incrível. Ver os animais encontrando um novo lar é muito gratificante.",
      avatar: "/placeholder.svg?height=100&width=100",
      created_at: new Date().toISOString(),
    },
  ]
}

// Funções que retornam dados mockados
export async function getFeaturedPets() {
  return getMockPets()
}

export async function getTestimonials() {
  return getMockTestimonials()
}

export async function countPetsByCategory() {
  return {
    dogs: 24,
    cats: 18,
    others: 5,
    adopted: 32,
  }
}

export async function getAvailablePets() {
  return getMockPets()
}

export async function getPet(id: string) {
  const pets = await getMockPets()
  return pets.find((pet) => pet.id === id) || null
}

export async function getVolunteers() {
  return [
    {
      id: "1",
      name: "Ana Paula",
      role: "Veterinária",
      bio: "Responsável pelos cuidados veterinários dos animais.",
      avatar: "/placeholder.svg?height=200&width=200",
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: "2",
      name: "Carlos Eduardo",
      role: "Cuidador",
      bio: "Responsável pelos cuidados diários dos animais.",
      avatar: "/placeholder.svg?height=200&width=200",
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: "3",
      name: "Mariana Silva",
      role: "Administradora",
      bio: "Responsável pela administração da ONG.",
      avatar: "/placeholder.svg?height=200&width=200",
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: "4",
      name: "Ricardo Oliveira",
      role: "Divulgador",
      bio: "Responsável pela divulgação dos animais para adoção.",
      avatar: "/placeholder.svg?height=200&width=200",
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
  ]
}
