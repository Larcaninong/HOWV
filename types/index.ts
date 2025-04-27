// Tipos para eventos
export type Event = {
  id: string
  title: string
  description: string
  location: string
  event_date: string
  end_date?: string
  image_url?: string
  is_active: boolean
  created_at: string
  updated_at: string
}

// Tipos para doações de suprimentos
export type SupplyDonation = {
  id: string
  donor_name: string
  phone: string
  address?: string
  items: string
  pickup_requested: boolean
  pickup_date?: string
  status: string
  created_at: string
  updated_at: string
}

// Tipos para pets (para uso futuro quando a tabela for criada)
export type Pet = {
  id: string
  name: string
  age: string
  breed: string
  description: string
  image: string
  category: "dog" | "cat" | "other"
  status: "available" | "adopted" | "pending"
  featured: boolean
  created_at: string
}

// Tipos para depoimentos (para uso futuro quando a tabela for criada)
export type Testimonial = {
  id: string
  name: string
  role: string
  content: string
  avatar: string
  created_at: string
}
