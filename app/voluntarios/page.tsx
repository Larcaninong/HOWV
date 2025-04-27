import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { getVolunteers } from "@/lib/data"

export default async function VoluntariosPage() {
  const volunteers = await getVolunteers()

  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-4">Nossa Equipe</h1>
      <p className="text-lg mb-8">
        Conheça os voluntários dedicados que fazem o trabalho do Lar Canino possível. Cada um contribui com seu tempo e
        habilidades para ajudar os animais necessitados.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {volunteers.map((volunteer) => (
          <Card key={volunteer.id} className="overflow-hidden">
            <div className="relative h-64">
              <Image src={volunteer.avatar || "/placeholder.svg"} alt={volunteer.name} fill className="object-cover" />
            </div>
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-1">{volunteer.name}</h2>
              <p className="text-amber-600 mb-4">{volunteer.role}</p>
              <p className="text-muted-foreground">{volunteer.bio}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="bg-amber-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Junte-se a Nós</h2>
        <p className="mb-6">
          Estamos sempre em busca de pessoas apaixonadas por animais para se juntar à nossa equipe de voluntários. Se
          você tem interesse em ajudar, preencha o formulário abaixo e entraremos em contato.
        </p>

        <form className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Nome
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-2 border rounded-md"
              placeholder="Seu nome completo"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border rounded-md"
              placeholder="seu@email.com"
              required
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-1">
              Telefone
            </label>
            <input
              type="tel"
              id="phone"
              className="w-full p-2 border rounded-md"
              placeholder="(00) 00000-0000"
              required
            />
          </div>
          <div>
            <label htmlFor="availability" className="block text-sm font-medium mb-1">
              Disponibilidade
            </label>
            <select id="availability" className="w-full p-2 border rounded-md" required>
              <option value="">Selecione</option>
              <option value="weekdays">Dias de semana</option>
              <option value="weekends">Finais de semana</option>
              <option value="both">Ambos</option>
            </select>
          </div>
          <div className="md:col-span-2">
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              Por que você quer ser voluntário?
            </label>
            <textarea
              id="message"
              className="w-full p-2 border rounded-md"
              rows={4}
              placeholder="Conte-nos um pouco sobre você e por que deseja ser voluntário"
              required
            ></textarea>
          </div>
          <div className="md:col-span-2">
            <button type="submit" className="bg-amber-500 text-white px-4 py-2 rounded-md hover:bg-amber-600">
              Enviar Inscrição
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
