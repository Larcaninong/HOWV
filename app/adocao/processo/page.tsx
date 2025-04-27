import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { CheckCircle, FileText, Heart, Home, MessageSquare, UserCheck } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Definir como página estática
export const dynamic = "force-static"

export default function ProcessoAdocaoPage() {
  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Processo de Adoção</h1>
        <p className="text-lg mb-8">
          Adotar um animal é um compromisso para toda a vida do pet. Por isso, temos um processo cuidadoso para garantir
          que nossos animais encontrem lares amorosos e responsáveis.
        </p>

        <div className="relative h-64 rounded-lg overflow-hidden mb-8">
          <Image
            src="/placeholder.svg?height=400&width=800"
            alt="Família adotando um pet"
            fill
            className="object-cover"
          />
        </div>

        <div className="space-y-12 mb-12">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-16 flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
                <FileText className="h-6 w-6 text-amber-600" />
              </div>
              <div className="flex-1 border-l-2 border-dashed border-amber-200 my-2 hidden md:block"></div>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-2">1. Preencha o Formulário de Adoção</h2>
              <p className="text-muted-foreground mb-4">
                O primeiro passo é preencher nosso formulário de adoção. Nele, coletamos informações importantes sobre
                você, sua família, sua casa e sua rotina. Essas informações nos ajudam a entender se você está preparado
                para adotar e qual animal seria mais adequado para o seu estilo de vida.
              </p>
              <Card>
                <CardContent className="p-4 bg-amber-50">
                  <p className="font-medium">O formulário inclui perguntas sobre:</p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Dados pessoais e de contato</li>
                    <li>Composição familiar</li>
                    <li>Tipo de moradia</li>
                    <li>Experiência prévia com animais</li>
                    <li>Tempo disponível para cuidar do pet</li>
                    <li>Outros animais que já vivem na casa</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-16 flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
                <MessageSquare className="h-6 w-6 text-amber-600" />
              </div>
              <div className="flex-1 border-l-2 border-dashed border-amber-200 my-2 hidden md:block"></div>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-2">2. Entrevista</h2>
              <p className="text-muted-foreground mb-4">
                Após a análise do seu formulário, entraremos em contato para agendar uma entrevista. Esta pode ser
                presencial ou por videochamada. Durante a entrevista, conversaremos mais sobre suas expectativas,
                esclareceremos dúvidas e falaremos sobre os cuidados necessários com o animal que você deseja adotar.
              </p>
              <p className="text-muted-foreground">
                Esta etapa é fundamental para garantirmos que você está ciente das responsabilidades e custos envolvidos
                na adoção de um pet.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-16 flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
                <Home className="h-6 w-6 text-amber-600" />
              </div>
              <div className="flex-1 border-l-2 border-dashed border-amber-200 my-2 hidden md:block"></div>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-2">3. Visita ao Lar</h2>
              <p className="text-muted-foreground mb-4">
                Em alguns casos, realizamos uma visita à sua residência para verificar se o ambiente é seguro e adequado
                para o animal. Verificamos se há espaço suficiente, se a casa é segura (sem buracos em muros, portões
                seguros, telas em janelas para gatos, etc.) e se há condições para o bem-estar do pet.
              </p>
              <p className="text-muted-foreground">
                Esta etapa pode ser dispensada em alguns casos, dependendo da avaliação da equipe e do animal a ser
                adotado.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-16 flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
                <Heart className="h-6 w-6 text-amber-600" />
              </div>
              <div className="flex-1 border-l-2 border-dashed border-amber-200 my-2 hidden md:block"></div>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-2">4. Encontro com o Animal</h2>
              <p className="text-muted-foreground mb-4">
                Chegou a hora de conhecer seu possível novo amigo! Agendamos um encontro para que você possa interagir
                com o animal e verificar se há compatibilidade. É importante que todos os membros da família que
                conviverão com o pet participem deste momento.
              </p>
              <p className="text-muted-foreground">
                Este é um momento especial tanto para você quanto para o animal. É quando começamos a construir os laços
                de afeto que durarão por toda a vida.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-16 flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
                <UserCheck className="h-6 w-6 text-amber-600" />
              </div>
              <div className="flex-1 border-l-2 border-dashed border-amber-200 my-2 hidden md:block"></div>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-2">5. Assinatura do Termo de Adoção</h2>
              <p className="text-muted-foreground mb-4">
                Se tudo correr bem nas etapas anteriores, você assinará um Termo de Adoção Responsável. Este documento
                estabelece seus direitos e deveres como tutor, incluindo compromissos como:
              </p>
              <ul className="list-disc pl-5 space-y-1 mb-4 text-muted-foreground">
                <li>Fornecer alimentação adequada, água fresca e abrigo</li>
                <li>Levar o animal regularmente ao veterinário</li>
                <li>Manter as vacinas em dia</li>
                <li>Não abandonar o animal em nenhuma circunstância</li>
                <li>Informar a ONG caso não possa mais ficar com o animal</li>
              </ul>
              <p className="text-muted-foreground">
                O termo também prevê que realizaremos visitas de acompanhamento para verificar como está a adaptação do
                animal ao novo lar.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-16 flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
                <CheckCircle className="h-6 w-6 text-amber-600" />
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-2">6. Leve seu Novo Amigo para Casa!</h2>
              <p className="text-muted-foreground mb-4">
                Finalmente, é hora de levar seu novo amigo para casa! Todos os nossos animais são entregues vacinados,
                vermifugados e, quando aplicável, castrados. Caso o animal ainda não tenha sido castrado por ser muito
                jovem, você assinará um termo se comprometendo a realizar o procedimento na idade adequada.
              </p>
              <p className="text-muted-foreground">
                Lembre-se que os primeiros dias são de adaptação. O animal pode ficar assustado ou estressado com a
                mudança de ambiente. Tenha paciência e dê tempo para que ele se acostume com sua nova casa e família.
              </p>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="bg-amber-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-4">Acompanhamento Pós-Adoção</h2>
          <p className="mb-4">
            Nossa responsabilidade não termina quando o animal vai para o novo lar. Realizamos acompanhamento pós-adoção
            para garantir que:
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>O animal está se adaptando bem ao novo ambiente</li>
            <li>As condições combinadas estão sendo cumpridas</li>
            <li>O tutor está conseguindo lidar com os desafios da adaptação</li>
            <li>O animal está recebendo os cuidados necessários</li>
          </ul>
          <p>
            Este acompanhamento é feito por meio de visitas presenciais ou videochamadas, dependendo da localização e
            disponibilidade.
          </p>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Pronto para Adotar?</h2>
          <p className="mb-6">
            Se você está preparado para dar um lar amoroso a um de nossos animais, comece o processo agora mesmo!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/adocao">Ver Animais Disponíveis</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contato">Fale Conosco</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
