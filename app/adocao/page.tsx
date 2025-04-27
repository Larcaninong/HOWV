import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { getAvailablePets } from "@/lib/data"

export default async function AdocaoPage() {
  // Buscar todos os pets disponíveis (dados mockados)
  const pets = await getAvailablePets()

  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-8">Adote um Pet</h1>

      <div className="flex flex-col md:flex-row gap-8 mb-12">
        <div className="md:w-1/4">
          <div className="bg-white p-6 rounded-lg shadow-md sticky top-20">
            <h2 className="text-xl font-bold mb-4">Filtros</h2>

            <div className="mb-4">
              <h3 className="font-medium mb-2">Tipo</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input type="checkbox" id="dog" className="mr-2" />
                  <label htmlFor="dog">Cachorro</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="cat" className="mr-2" />
                  <label htmlFor="cat">Gato</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="other" className="mr-2" />
                  <label htmlFor="other">Outros</label>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <h3 className="font-medium mb-2">Status</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input type="checkbox" id="available" className="mr-2" defaultChecked />
                  <label htmlFor="available">Disponível</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="pending" className="mr-2" />
                  <label htmlFor="pending">Em processo</label>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <h3 className="font-medium mb-2">Idade</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input type="checkbox" id="puppy" className="mr-2" />
                  <label htmlFor="puppy">Filhote (até 1 ano)</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="adult" className="mr-2" />
                  <label htmlFor="adult">Adulto (1 a 7 anos)</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="senior" className="mr-2" />
                  <label htmlFor="senior">Idoso (acima de 7 anos)</label>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <h3 className="font-medium mb-2">Sexo</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input type="checkbox" id="male" className="mr-2" />
                  <label htmlFor="male">Macho</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="female" className="mr-2" />
                  <label htmlFor="female">Fêmea</label>
                </div>
              </div>
            </div>

            <Button className="w-full">Aplicar Filtros</Button>

            <div className="mt-6 pt-6 border-t">
              <Link href="/adocao/processo" className="text-amber-600 hover:underline font-medium">
                Saiba como funciona o processo de adoção
              </Link>
            </div>
          </div>
        </div>

        <div className="md:w-3/4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pets.map((pet) => (
              <div key={pet.id} className="bg-white rounded-lg shadow overflow-hidden">
                <div className="relative h-48">
                  <Image src={pet.image || "/placeholder.svg"} alt={pet.name} fill className="object-cover" />
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-bold text-lg">{pet.name}</h3>
                    <span className="text-xs bg-slate-100 px-2 py-1 rounded">
                      {pet.category === "dog" ? "Cachorro" : pet.category === "cat" ? "Gato" : "Outro"}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-1 text-sm mb-4">
                    <div>
                      <span className="text-muted-foreground">Idade:</span> {pet.age}
                    </div>
                    <div>
                      <span className="text-muted-foreground">Raça:</span> {pet.breed}
                    </div>
                  </div>
                  <Link href={`/adocao/${pet.id}`} passHref>
                    <Button className="w-full">Conhecer</Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {pets.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2">Nenhum pet encontrado</h3>
              <p className="text-muted-foreground mb-4">
                Não encontramos pets que correspondam aos filtros selecionados.
              </p>
              <Button variant="outline">Limpar Filtros</Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
