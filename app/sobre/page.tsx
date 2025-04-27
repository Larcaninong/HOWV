import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Heart, PawPrint, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Definir como página estática
export const dynamic = "force-static"

export default function SobrePage() {
  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Sobre o Lar Canino</h1>
        <p className="text-lg mb-8">
          Conheça nossa história, missão e os valores que guiam nosso trabalho de proteção e cuidado com os animais.
        </p>

        <div className="relative h-80 rounded-lg overflow-hidden mb-12">
          <Image
            src="/placeholder.svg?height=500&width=1000"
            alt="Equipe do Lar Canino com animais resgatados"
            fill
            className="object-cover"
          />
        </div>

        <div className="space-y-12">
          <div>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <PawPrint className="mr-2 h-6 w-6 text-amber-500" /> Nossa História
            </h2>
            <p className="mb-4">
              O Lar Canino nasceu em 2018, quando um grupo de amigos apaixonados por animais se uniu para resgatar cães
              e gatos abandonados nas ruas da cidade. O que começou como uma iniciativa informal, com resgates
              esporádicos e lares temporários, cresceu e se transformou em uma organização sem fins lucrativos
              oficialmente registrada em 2019.
            </p>
            <p>
              Nos primeiros anos, operávamos apenas com lares temporários, mas em 2021, graças a doações e ao trabalho
              incansável de voluntários, conseguimos adquirir um espaço próprio que se tornou nosso abrigo principal.
              Desde então, já resgatamos mais de 500 animais e realizamos mais de 300 adoções responsáveis.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-amber-100 p-4 rounded-full mx-auto mb-4 w-16 h-16 flex items-center justify-center">
                  <PawPrint className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Nossa Missão</h3>
                <p>
                  Resgatar, reabilitar e encontrar lares amorosos para animais abandonados ou em situação de risco,
                  promovendo o bem-estar animal e a adoção responsável.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-amber-100 p-4 rounded-full mx-auto mb-4 w-16 h-16 flex items-center justify-center">
                  <Heart className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Nossa Visão</h3>
                <p>
                  Um mundo onde todos os animais sejam tratados com respeito e compaixão, onde não haja abandono e
                  maus-tratos, e onde cada animal tenha um lar amoroso.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-amber-100 p-4 rounded-full mx-auto mb-4 w-16 h-16 flex items-center justify-center">
                  <Users className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Nossos Valores</h3>
                <p>
                  Compaixão, respeito, responsabilidade, transparência e dedicação em todas as nossas ações para com os
                  animais e a comunidade.
                </p>
              </CardContent>
            </Card>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">O Que Fazemos</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Resgate</h3>
                <p>
                  Resgatamos animais abandonados, vítimas de maus-tratos ou em situação de risco. Nossos resgates são
                  realizados por uma equipe treinada, que avalia a situação e providencia os cuidados necessários.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Reabilitação</h3>
                <p>
                  Oferecemos cuidados veterinários, alimentação adequada e um ambiente seguro para a recuperação física
                  e emocional dos animais resgatados. Trabalhamos para que cada animal esteja saudável e pronto para
                  adoção.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Adoção</h3>
                <p>
                  Promovemos a adoção responsável, buscando famílias que ofereçam amor, cuidado e um lar permanente para
                  nossos animais. Realizamos um processo cuidadoso de seleção e acompanhamento pós-adoção.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Educação</h3>
                <p>
                  Desenvolvemos programas educativos sobre posse responsável, bem-estar animal e a importância da
                  castração. Acreditamos que a educação é fundamental para prevenir o abandono e os maus-tratos.
                </p>
              </div>
            </div>
          </div>

          <Separator />

          <div>
            <h2 className="text-2xl font-bold mb-4">Nossa Equipe</h2>
            <p className="mb-6">
              O Lar Canino conta com uma equipe dedicada de profissionais e voluntários apaixonados pela causa animal.
              Conheça alguns dos membros que fazem nosso trabalho possível:
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="relative h-40 w-40 rounded-full overflow-hidden mx-auto mb-4">
                  <Image src="/placeholder.svg?height=200&width=200" alt="Maria Silva" fill className="object-cover" />
                </div>
                <h3 className="font-bold">Maria Silva</h3>
                <p className="text-amber-600">Fundadora e Presidente</p>
              </div>

              <div className="text-center">
                <div className="relative h-40 w-40 rounded-full overflow-hidden mx-auto mb-4">
                  <Image src="/placeholder.svg?height=200&width=200" alt="João Santos" fill className="object-cover" />
                </div>
                <h3 className="font-bold">João Santos</h3>
                <p className="text-amber-600">Coordenador de Resgates</p>
              </div>

              <div className="text-center">
                <div className="relative h-40 w-40 rounded-full overflow-hidden mx-auto mb-4">
                  <Image src="/placeholder.svg?height=200&width=200" alt="Ana Oliveira" fill className="object-cover" />
                </div>
                <h3 className="font-bold">Ana Oliveira</h3>
                <p className="text-amber-600">Veterinária</p>
              </div>

              <div className="text-center">
                <div className="relative h-40 w-40 rounded-full overflow-hidden mx-auto mb-4">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Carlos Pereira"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-bold">Carlos Pereira</h3>
                <p className="text-amber-600">Coordenador de Voluntários</p>
              </div>
            </div>

            <div className="text-center">
              <Button asChild>
                <Link href="/voluntarios">Conheça toda nossa equipe</Link>
              </Button>
            </div>
          </div>

          <Separator />

          <div>
            <h2 className="text-2xl font-bold mb-4">Transparência</h2>
            <p className="mb-4">
              No Lar Canino, acreditamos na transparência como um valor fundamental. Todas as doações recebidas são
              utilizadas exclusivamente para o bem-estar dos animais e manutenção do abrigo.
            </p>
            <p className="mb-4">
              Publicamos regularmente relatórios financeiros e de atividades, disponíveis para consulta por qualquer
              pessoa interessada. Nossos doadores recebem atualizações sobre como seus recursos estão sendo utilizados.
            </p>
            <p>
              Somos uma organização sem fins lucrativos devidamente registrada, com CNPJ e todas as documentações
              necessárias para operar legalmente.
            </p>
          </div>

          <div className="bg-amber-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Como Você Pode Ajudar</h2>
            <p className="mb-6">
              Existem muitas maneiras de contribuir com o trabalho do Lar Canino. Toda ajuda é valiosa e faz diferença
              na vida dos animais que cuidamos.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600">
                <Link href="/doar">Fazer uma Doação</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/voluntarios">Seja um Voluntário</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
