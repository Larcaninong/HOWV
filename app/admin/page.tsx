import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dog, Cat, Heart, Users, MessageSquare, Calendar } from "lucide-react"

export default function AdminPage() {
  return (
    <div className="container py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Painel Administrativo</h1>
        <Button>Adicionar Novo Pet</Button>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardContent className="p-6 flex items-center gap-4">
            <div className="bg-amber-100 p-3 rounded-full">
              <Dog className="h-6 w-6 text-amber-600" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Cachorros</p>
              <p className="text-2xl font-bold">24</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 flex items-center gap-4">
            <div className="bg-amber-100 p-3 rounded-full">
              <Cat className="h-6 w-6 text-amber-600" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Gatos</p>
              <p className="text-2xl font-bold">18</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 flex items-center gap-4">
            <div className="bg-amber-100 p-3 rounded-full">
              <Heart className="h-6 w-6 text-amber-600" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Adoções</p>
              <p className="text-2xl font-bold">12</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 flex items-center gap-4">
            <div className="bg-amber-100 p-3 rounded-full">
              <Users className="h-6 w-6 text-amber-600" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Voluntários</p>
              <p className="text-2xl font-bold">32</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="pets" className="mb-8">
        <TabsList className="grid grid-cols-4 mb-8">
          <TabsTrigger value="pets">Pets</TabsTrigger>
          <TabsTrigger value="adoptions">Adoções</TabsTrigger>
          <TabsTrigger value="donations">Doações</TabsTrigger>
          <TabsTrigger value="messages">Mensagens</TabsTrigger>
        </TabsList>

        <TabsContent value="pets">
          <Card>
            <CardHeader>
              <CardTitle>Gerenciar Pets</CardTitle>
              <CardDescription>Lista de todos os animais cadastrados no sistema.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <div className="grid grid-cols-6 p-4 font-medium border-b">
                  <div>ID</div>
                  <div>Nome</div>
                  <div>Tipo</div>
                  <div>Idade</div>
                  <div>Status</div>
                  <div className="text-right">Ações</div>
                </div>
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="grid grid-cols-6 p-4 border-b last:border-0 items-center">
                    <div className="text-sm text-muted-foreground">#{i}</div>
                    <div>Nome do Pet {i}</div>
                    <div>{i % 2 === 0 ? "Cachorro" : "Gato"}</div>
                    <div>{i} anos</div>
                    <div>
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${i % 3 === 0 ? "bg-green-100 text-green-800" : "bg-amber-100 text-amber-800"}`}
                      >
                        {i % 3 === 0 ? "Adotado" : "Disponível"}
                      </span>
                    </div>
                    <div className="flex justify-end gap-2">
                      <Button variant="outline" size="sm">
                        Editar
                      </Button>
                      <Button variant="outline" size="sm" className="text-red-500">
                        Remover
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="adoptions">
          <Card>
            <CardHeader>
              <CardTitle>Solicitações de Adoção</CardTitle>
              <CardDescription>Gerencie as solicitações de adoção recebidas.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <div className="grid grid-cols-6 p-4 font-medium border-b">
                  <div>Data</div>
                  <div>Pet</div>
                  <div>Solicitante</div>
                  <div>Contato</div>
                  <div>Status</div>
                  <div className="text-right">Ações</div>
                </div>
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="grid grid-cols-6 p-4 border-b last:border-0 items-center">
                    <div className="text-sm text-muted-foreground">10/0{i}/2023</div>
                    <div>Nome do Pet {i}</div>
                    <div>Solicitante {i}</div>
                    <div className="text-sm text-muted-foreground">email{i}@exemplo.com</div>
                    <div>
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          i % 3 === 0
                            ? "bg-green-100 text-green-800"
                            : i % 3 === 1
                              ? "bg-red-100 text-red-800"
                              : "bg-amber-100 text-amber-800"
                        }`}
                      >
                        {i % 3 === 0 ? "Aprovada" : i % 3 === 1 ? "Rejeitada" : "Pendente"}
                      </span>
                    </div>
                    <div className="flex justify-end gap-2">
                      <Button variant="outline" size="sm">
                        Ver Detalhes
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="donations">
          <Card>
            <CardHeader>
              <CardTitle>Doações Recebidas</CardTitle>
              <CardDescription>Histórico de doações financeiras e de suprimentos.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <div className="grid grid-cols-6 p-4 font-medium border-b">
                  <div>Data</div>
                  <div>Doador</div>
                  <div>Tipo</div>
                  <div>Valor/Itens</div>
                  <div>Status</div>
                  <div className="text-right">Ações</div>
                </div>
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="grid grid-cols-6 p-4 border-b last:border-0 items-center">
                    <div className="text-sm text-muted-foreground">15/0{i}/2023</div>
                    <div>{i % 2 === 0 ? "Doador Anônimo" : `Doador ${i}`}</div>
                    <div>{i % 2 === 0 ? "Financeira" : "Suprimentos"}</div>
                    <div>{i % 2 === 0 ? `R$ ${i}00,00` : "Ração, medicamentos"}</div>
                    <div>
                      <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">Recebida</span>
                    </div>
                    <div className="flex justify-end gap-2">
                      <Button variant="outline" size="sm">
                        Ver Detalhes
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="messages">
          <Card>
            <CardHeader>
              <CardTitle>Mensagens de Contato</CardTitle>
              <CardDescription>Mensagens recebidas através do formulário de contato.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <div className="grid grid-cols-5 p-4 font-medium border-b">
                  <div>Data</div>
                  <div>Nome</div>
                  <div>Email</div>
                  <div>Assunto</div>
                  <div className="text-right">Ações</div>
                </div>
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="grid grid-cols-5 p-4 border-b last:border-0 items-center">
                    <div className="text-sm text-muted-foreground">20/0{i}/2023</div>
                    <div>Contato {i}</div>
                    <div className="text-sm text-muted-foreground">contato{i}@exemplo.com</div>
                    <div>Assunto da mensagem {i}</div>
                    <div className="flex justify-end gap-2">
                      <Button variant="outline" size="sm">
                        Ler Mensagem
                      </Button>
                      <Button variant="outline" size="sm" className="text-red-500">
                        Arquivar
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Próximos Eventos</CardTitle>
            <CardDescription>Eventos de adoção e campanhas programadas.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="bg-slate-100 p-2 rounded-lg text-center min-w-[60px]">
                    <p className="text-sm font-medium">JUN</p>
                    <p className="text-xl font-bold">{10 + i}</p>
                  </div>
                  <div>
                    <h3 className="font-medium">Feira de Adoção #{i}</h3>
                    <p className="text-sm text-muted-foreground mb-1">10:00 - 16:00 • Praça Central</p>
                    <Button variant="link" className="p-0 h-auto">
                      Ver detalhes
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4">
              <Calendar className="h-4 w-4 mr-2" />
              Gerenciar Eventos
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Mensagens Recentes</CardTitle>
            <CardDescription>Últimas mensagens recebidas.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="bg-slate-100 p-2 rounded-full">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <h3 className="font-medium">Contato {i}</h3>
                      <p className="text-xs text-muted-foreground">
                        Há {i} hora{i > 1 ? "s" : ""}
                      </p>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam
                      ultricies...
                    </p>
                    <Button variant="link" className="p-0 h-auto mt-1">
                      Ler mensagem
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4">
              <MessageSquare className="h-4 w-4 mr-2" />
              Ver Todas as Mensagens
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
