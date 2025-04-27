import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Heart, Package, CreditCard } from "lucide-react"

// Definir como página estática
export const dynamic = "force-static"

export default function DoarPage() {
  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Faça uma Doação</h1>
        <p className="text-lg mb-8">
          Sua contribuição é fundamental para continuarmos nosso trabalho de resgate e cuidado dos animais. Escolha
          abaixo a forma como deseja ajudar.
        </p>

        <Tabs defaultValue="financeira" className="mb-12">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="financeira">Doação Financeira</TabsTrigger>
            <TabsTrigger value="suprimentos">Doação de Suprimentos</TabsTrigger>
          </TabsList>

          <TabsContent value="financeira">
            <Card>
              <CardHeader>
                <CardTitle>Doação Financeira</CardTitle>
                <CardDescription>
                  Sua doação financeira ajuda a cobrir custos com alimentação, medicamentos, vacinas e cuidados
                  veterinários.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="amount">Valor da Doação</Label>
                      <div className="grid grid-cols-4 gap-4 mt-2">
                        <Button type="button" variant="outline" className="text-lg">
                          R$ 20
                        </Button>
                        <Button type="button" variant="outline" className="text-lg">
                          R$ 50
                        </Button>
                        <Button type="button" variant="outline" className="text-lg">
                          R$ 100
                        </Button>
                        <Button type="button" variant="outline" className="text-lg">
                          Outro
                        </Button>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="frequency">Frequência</Label>
                      <RadioGroup defaultValue="once" className="flex gap-4 mt-2">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="once" id="once" />
                          <Label htmlFor="once">Única</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="monthly" id="monthly" />
                          <Label htmlFor="monthly">Mensal</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Nome (opcional)</Label>
                        <Input id="name" placeholder="Seu nome" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="email">Email (opcional)</Label>
                        <Input id="email" type="email" placeholder="seu@email.com" className="mt-1" />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message">Mensagem (opcional)</Label>
                      <Textarea id="message" placeholder="Deixe uma mensagem para nossa equipe" className="mt-1" />
                    </div>

                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="anonymous" className="rounded" />
                      <Label htmlFor="anonymous">Fazer doação anônima</Label>
                    </div>
                  </div>

                  <Button type="submit" className="w-full">
                    <CreditCard className="mr-2 h-4 w-4" /> Prosseguir para Pagamento
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="suprimentos">
            <Card>
              <CardHeader>
                <CardTitle>Doação de Suprimentos</CardTitle>
                <CardDescription>
                  Você pode doar ração, medicamentos, cobertores, brinquedos e outros itens necessários para o bem-estar
                  dos animais.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="items">Itens para Doação</Label>
                      <Textarea
                        id="items"
                        placeholder="Descreva os itens que você gostaria de doar (tipo, quantidade, etc.)"
                        className="mt-1"
                        rows={4}
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="donor_name">Nome</Label>
                        <Input id="donor_name" placeholder="Seu nome" className="mt-1" required />
                      </div>
                      <div>
                        <Label htmlFor="phone">Telefone</Label>
                        <Input id="phone" placeholder="(00) 00000-0000" className="mt-1" required />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="address">Endereço (opcional)</Label>
                      <Input id="address" placeholder="Seu endereço" className="mt-1" />
                    </div>

                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="pickup" className="rounded" />
                      <Label htmlFor="pickup">Solicitar coleta no endereço informado</Label>
                    </div>
                  </div>

                  <Button type="submit" className="w-full">
                    <Package className="mr-2 h-4 w-4" /> Enviar Solicitação de Doação
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="bg-amber-50 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <Heart className="mr-2 h-5 w-5 text-amber-600" /> Outras Formas de Ajudar
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Seja um voluntário e ajude nos cuidados diários com os animais</li>
            <li>Torne-se um lar temporário para animais em recuperação</li>
            <li>Compartilhe nossos posts nas redes sociais para aumentar a visibilidade dos animais para adoção</li>
            <li>Participe de nossos eventos e campanhas de arrecadação</li>
            <li>Indique nosso trabalho para amigos e familiares</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
