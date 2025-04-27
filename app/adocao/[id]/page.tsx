import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { Heart, Share2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { getPet, getAvailablePets } from "@/lib/data"
import { notFound } from "next/navigation"

export default async function PetDetailsPage({ params }: { params: { id: string } }) {
  // Buscar o pet específico (dados mockados)
  const pet = await getPet(params.id)

  // Buscar outros pets para recomendações
  const allPets = await getAvailablePets()
  const otherPets = allPets.filter((p) => p.id !== params.id).slice(0, 4)

  if (!pet) {
    return notFound()
  }

  return (
    <div className="container py-12">
      <div className="grid lg:grid-cols-2 gap-12">
        <div>
          <div className="relative aspect-square rounded-lg overflow-hidden mb-4">
            <Image src={pet.image || "/placeholder.svg"} alt={pet.name} fill className="object-cover" />
          </div>
        </div>

        <div>
          <div className="flex justify-between items-start mb-4">
            <div>
              <h1 className="text-4xl font-bold">{pet.name}</h1>
              <p className="text-lg text-muted-foreground">
                {pet.breed} • {pet.age}
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="icon">
                <Heart className="h-5 w-5" />
                <span className="sr-only">Favoritar</span>
              </Button>
              <Button variant="outline" size="icon">
                <Share2 className="h-5 w-5" />
                <span className="sr-only">Compartilhar</span>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-slate-50 p-4 rounded-lg text-center">
              <p className="text-sm text-muted-foreground">Categoria</p>
              <p className="font-medium">
                {pet.category === "dog" ? "Cachorro" : pet.category === "cat" ? "Gato" : "Outro"}
              </p>
            </div>
            <div className="bg-slate-50 p-4 rounded-lg text-center">
              <p className="text-sm text-muted-foreground">Status</p>
              <p className="font-medium">
                {pet.status === "available" ? "Disponível" : pet.status === "adopted" ? "Adotado" : "Em processo"}
              </p>
            </div>
            <div className="bg-slate-50 p-4 rounded-lg text-center">
              <p className="text-sm text-muted-foreground">Idade</p>
              <p className="font-medium">{pet.age}</p>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Sobre {pet.name}</h2>
            <p className="text-muted-foreground">{pet.description}</p>
          </div>

          <Button size="lg" className="w-full mb-4" disabled={pet.status !== "available"}>
            {pet.status === "available" ? "Quero Adotar" : "Indisponível para Adoção"}
          </Button>

          {pet.status === "available" && (
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Formulário de Adoção</h2>
                <form className="space-y-4">
                  <input type="hidden" name="pet_id" value={pet.id} />

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="applicant_name">Nome Completo</Label>
                      <Input id="applicant_name" name="applicant_name" required />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" name="email" type="email" required />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Telefone</Label>
                      <Input id="phone" name="phone" required />
                    </div>
                    <div>
                      <Label htmlFor="family_members">Quantas pessoas na casa?</Label>
                      <Input id="family_members" name="family_members" type="number" min="1" required />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="address">Endereço Completo</Label>
                    <Input id="address" name="address" required />
                  </div>

                  <div>
                    <Label htmlFor="housing_type">Tipo de Moradia</Label>
                    <Input id="housing_type" name="housing_type" placeholder="Casa, Apartamento, etc." required />
                  </div>

                  <div>
                    <Label>Possui quintal ou área externa?</Label>
                    <RadioGroup name="has_yard" defaultValue="no">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="yard-yes" />
                        <Label htmlFor="yard-yes">Sim</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="yard-no" />
                        <Label htmlFor="yard-no">Não</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <Label>Possui outros animais?</Label>
                    <RadioGroup name="has_other_pets" defaultValue="no">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="pets-yes" />
                        <Label htmlFor="pets-yes">Sim</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="pets-no" />
                        <Label htmlFor="pets-no">Não</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <Label htmlFor="other_pets_info">Se sim, quais?</Label>
                    <Input id="other_pets_info" name="other_pets_info" placeholder="Espécie, quantidade, idade..." />
                  </div>

                  <div>
                    <Label htmlFor="motivation">Por que você quer adotar este animal?</Label>
                    <Textarea id="motivation" name="motivation" className="min-h-[100px]" required />
                  </div>

                  <Button type="submit" className="w-full">
                    Enviar Solicitação
                  </Button>
                </form>
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      <Separator className="my-12" />

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Outros pets que você pode gostar</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {otherPets.map((otherPet) => (
            <Card key={otherPet.id} className="overflow-hidden">
              <div className="relative h-48">
                <Image src={otherPet.image || "/placeholder.svg"} alt={otherPet.name} fill className="object-cover" />
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold">{otherPet.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {otherPet.breed} • {otherPet.age}
                </p>
                <Button asChild variant="link" className="p-0 h-auto mt-2">
                  <Link href={`/adocao/${otherPet.id}`}>Ver detalhes</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
