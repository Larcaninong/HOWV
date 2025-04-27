import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Heart, PawPrint, Users } from "lucide-react"
import { Home } from "lucide-react"
import { getFeaturedPets, getTestimonials, countPetsByCategory, getUpcomingEvents } from "@/lib/data"

export default async function HomePage() {
  try {
    // Buscar dados mockados e eventos reais do Supabase
    const featuredPets = await getFeaturedPets()
    const testimonials = await getTestimonials()
    const petCounts = await countPetsByCategory()
    const upcomingEvents = await getUpcomingEvents(3)

    return (
      <div className="flex flex-col gap-16 pb-16">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10" />
          <div className="relative h-[70vh]">
            <Image
              src="/placeholder.svg?height=800&width=1600"
              alt="Cães e gatos esperando adoção"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="container absolute inset-0 z-20 flex flex-col justify-center items-start text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Lar Canino</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl">
              Ajudando animais a encontrarem um novo lar cheio de amor e carinho
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600 text-white">
                <Link href="/adocao">
                  Adotar um Pet <PawPrint className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white/20"
              >
                <Link href="/doar">
                  Fazer uma Doação <Heart className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="container py-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Nossa Missão</h2>
              <p className="text-lg mb-4">
                O Lar Canino é uma organização sem fins lucrativos dedicada ao resgate, reabilitação e adoção
                responsável de animais abandonados ou em situação de risco.
              </p>
              <p className="text-lg mb-6">
                Trabalhamos incansavelmente para proporcionar cuidados veterinários, alimentação adequada e um ambiente
                seguro para cães e gatos até que encontrem famílias amorosas que os adotem.
              </p>
              <Button asChild variant="outline" className="group">
                <Link href="/sobre">
                  Conheça nossa história
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Voluntários cuidando de animais"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Stats Section - Usando dados mockados */}
        <section className="bg-amber-50 py-16">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-center">Nosso Impacto</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow flex flex-col items-center text-center">
                <div className="bg-amber-100 p-4 rounded-full mb-4">
                  <PawPrint className="h-8 w-8 text-amber-600" />
                </div>
                <div className="text-4xl font-bold mb-2">{petCounts.dogs + petCounts.cats + petCounts.others}+</div>
                <p className="text-muted-foreground">Animais resgatados</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow flex flex-col items-center text-center">
                <div className="bg-amber-100 p-4 rounded-full mb-4">
                  <Home className="h-8 w-8 text-amber-600" />
                </div>
                <div className="text-4xl font-bold mb-2">{petCounts.adopted}+</div>
                <p className="text-muted-foreground">Adoções realizadas</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow flex flex-col items-center text-center">
                <div className="bg-amber-100 p-4 rounded-full mb-4">
                  <Users className="h-8 w-8 text-amber-600" />
                </div>
                <div className="text-4xl font-bold mb-2">30+</div>
                <p className="text-muted-foreground">Voluntários ativos</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow flex flex-col items-center text-center">
                <div className="bg-amber-100 p-4 rounded-full mb-4">
                  <Heart className="h-8 w-8 text-amber-600" />
                </div>
                <div className="text-4xl font-bold mb-2">5+</div>
                <p className="text-muted-foreground">Anos de atuação</p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Pets Section - Usando dados mockados */}
        <section className="container py-8">
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-center">Pets Esperando por um Lar</h2>
            <p className="text-lg text-center max-w-3xl mb-8">
              Conheça alguns dos nossos amigos de quatro patas que estão ansiosos para encontrar uma família amorosa.
              Todos são vacinados, castrados e cheios de amor para dar.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
              {featuredPets.map((pet) => (
                <div key={pet.id} className="bg-white rounded-lg shadow overflow-hidden">
                  <div className="relative h-48">
                    <Image src={pet.image || "/placeholder.svg"} alt={pet.name} fill className="object-cover" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg mb-1">{pet.name}</h3>
                    <p className="text-gray-600 mb-4">
                      {pet.breed} • {pet.age}
                    </p>
                    <Link href={`/adocao/${pet.id}`} passHref>
                      <Button className="w-full">Conhecer</Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <Button asChild className="mt-8">
              <Link href="/adocao">
                Ver todos os pets disponíveis
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Upcoming Events Section - Usando dados reais do Supabase */}
        {upcomingEvents.length > 0 && (
          <section className="bg-amber-50 py-16">
            <div className="container">
              <h2 className="text-3xl font-bold mb-12 text-center">Próximos Eventos</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="bg-white rounded-lg shadow overflow-hidden">
                    <div className="relative h-48">
                      <Image
                        src={event.image_url || "/placeholder.svg?height=300&width=500"}
                        alt={event.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-xl mb-2">{event.title}</h3>
                      <p className="text-amber-600 mb-2">
                        {new Date(event.event_date).toLocaleDateString("pt-BR")} • {event.location}
                      </p>
                      <p className="text-muted-foreground mb-4 line-clamp-3">{event.description}</p>
                      <Button variant="outline" className="w-full">
                        Ver Detalhes
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Testimonials - Usando dados mockados */}
        <section className="container py-16">
          <h2 className="text-3xl font-bold mb-12 text-center">O Que Dizem Sobre Nós</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow">
                <div className="flex flex-col items-center text-center">
                  <div className="relative w-20 h-20 rounded-full overflow-hidden mb-4">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{testimonial.role}</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-amber-200 mb-4"
                  >
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                  </svg>
                  <p className="text-muted-foreground">{testimonial.content}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    )
  } catch (error) {
    console.error("Erro na página inicial:", error)
    return (
      <div className="container py-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Lar Canino</h1>
        <p className="text-lg mb-8">Estamos com problemas técnicos. Por favor, tente novamente mais tarde.</p>
        <Button asChild>
          <Link href="/">Tentar Novamente</Link>
        </Button>
      </div>
    )
  }
}
