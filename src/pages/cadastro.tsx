import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function Cadastro() {
  return (
    <div className="flex w-auto items-center justify-center">
      <Tabs>
        <TabsList>
          <TabsTrigger value="Usuário">Usuário</TabsTrigger>
          <TabsTrigger value="Pintor">Pintor</TabsTrigger>
        </TabsList>
        {/* card do user */}
        <TabsContent value="Usuário">
          <Card className="w-2xl">
            <CardHeader>
              <CardTitle>
                <h1>Faça seu cadastro</h1>
                <p>Seja bem-vindo ao nosso site usuario</p>
              </CardTitle>
              <CardContent className="flex flex-col gap-4">
                <input type="text" placeholder="Digite seu nome de usuário" />
                <input type="text" placeholder="Digite seu email" />
                <input type="text" placeholder="Digite seu telefone" />
                <input type="text" placeholder="Digite seu endereço" />
                <input type="password" placeholder="Digite sua senha" />
              </CardContent>
            </CardHeader>
            <CardFooter>
              <button className="w-full cursor-pointer rounded-md bg-blue-500 p-2 text-white hover:bg-blue-600">
                Fazer cadastro
              </button>
            </CardFooter>
          </Card>
        </TabsContent>
        {/*  card do Pintor */}
        <TabsContent value="Pintor">
          <Card className="w-2xl">
            <CardHeader>
              <CardTitle>
                <h1>Faça seu cadastro</h1>
                <p>Seja bem-vindo ao nosso site pintor</p>
              </CardTitle>
              <CardContent className="flex flex-col gap-4">
                <input type="text" placeholder="Digite seu nome de usuário" />
                <input type="text" placeholder="Digite seu email" />
                <input type="text" placeholder="Digite seu telefone" />
                <input type="text" placeholder="Digite seu endereço" />
                <input type="password" placeholder="Digite sua senha" />
              </CardContent>
            </CardHeader>
            <CardFooter>
              <button className="w-full cursor-pointer rounded-md bg-blue-500 p-2 text-white hover:bg-blue-600">
                Fazer cadastro
              </button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
