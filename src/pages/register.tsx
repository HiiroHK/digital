import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight } from "lucide-react";

export function Register() {
  return (
    <div>
      <Tabs className="flex items-center justify-center">
        <TabsList>
          <TabsTrigger value="Usuário">Usuário</TabsTrigger>
          <TabsTrigger value="Pintor">Pintor</TabsTrigger>
        </TabsList>
        {/* card do user */}
        <TabsContent value="Usuário">
          <Card className="w-2xl">
            <CardHeader>
              <CardTitle className="space-y-3">
                <h1 className="text-2xl">Faça seu cadastro</h1>
                <p>Seja bem-vindo ao nosso site usuario</p>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-6">
              <input
                className="rounded-md border border-black p-3"
                type="text"
                placeholder="Digite seu nome de usuário"
              />
              <input
                className="rounded-md border border-black p-3"
                type="text"
                placeholder="Digite seu email"
              />
              <input
                className="rounded-md border border-black p-3"
                type="text"
                placeholder="Digite seu telefone"
              />
              <input
                className="rounded-md border border-black p-3"
                type="text"
                placeholder="Digite seu endereço"
              />
              <input
                className="rounded-md border border-black p-3"
                type="password"
                placeholder="Digite sua senha"
              />
            </CardContent>

            <CardFooter className="flex flex-col items-start space-y-3">
              <a href="/login">
                <button className="flex cursor-pointer text-blue-500 hover:text-blue-600">
                  <p>Já é cadastrado, então faça seu login aqui</p>
                  <ArrowRight />
                </button>
              </a>
              <button className="w-full cursor-pointer rounded-md bg-blue-500 p-2 text-white transition-colors hover:bg-blue-600">
                Fazer cadasto
              </button>
            </CardFooter>
          </Card>
        </TabsContent>
        {/*  card do Pintor */}
        <TabsContent value="Pintor">
          <Card className="w-2xl">
            <CardHeader>
              <CardTitle className="space-y-3">
                <h1 className="text-2xl">Faça seu cadastro</h1>
                <p>Seja bem-vindo ao nosso site pintor</p>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-6">
              <input
                className="rounded-md border border-black p-3"
                type="text"
                placeholder="Digite seu nome de usuário"
              />
              <input
                className="rounded-md border border-black p-3"
                type="text"
                placeholder="Digite seu email"
              />
              <input
                className="rounded-md border border-black p-3"
                type="text"
                placeholder="Digite seu telefone"
              />
              <input
                className="rounded-md border border-black p-3"
                type="text"
                placeholder="Digite seu endereço"
              />
              <input
                className="rounded-md border border-black p-3"
                type="password"
                placeholder="Digite sua senha"
              />
            </CardContent>
            <CardFooter className="flex flex-col items-start space-y-3">
              <a href="/login">
                <button className="flex cursor-pointer text-blue-500 hover:text-blue-600">
                  <p>Já é cadastrado, então faça seu login aqui</p>
                  <ArrowRight />
                </button>
              </a>
              <button className="w-full cursor-pointer rounded-md bg-blue-500 p-2 text-white transition-colors hover:bg-blue-600">
                Fazer cadastro
              </button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
