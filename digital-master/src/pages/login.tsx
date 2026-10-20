import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight } from "lucide-react";

export function Login() {
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
                <h1 className="text-2xl">Faça seu login</h1>
                <p>Seja bem-vindo ao nosso site usuario</p>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-6">
              <input
                type="text"
                placeholder="Digite seu email ou nome usuário"
                className="rounded-md border border-black p-3"
              />
              <input
                type="password"
                placeholder="Digite sua senha"
                className="rounded-md border border-black p-3"
              />
            </CardContent>

            <CardFooter className="flex flex-col items-start space-y-3">
              <a href="/cadastro">
                <button className="flex cursor-pointer text-blue-500 hover:text-blue-600">
                  <p>Se cadastre</p>
                  <ArrowRight />
                </button>
              </a>
              <button className="w-full cursor-pointer rounded-md bg-blue-500 p-2 text-white transition-colors hover:bg-blue-600">
                Fazer login
              </button>
            </CardFooter>
          </Card>
        </TabsContent>
        {/*  card do Pintor */}
        <TabsContent value="Pintor">
          <Card className="w-2xl">
            <CardHeader>
              <CardTitle className="space-y-3">
                <h1 className="text-2xl">Faça seu login</h1>
                <p>Seja bem-vindo ao nosso site pintor</p>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-6">
              <input
                type="text"
                placeholder="Digite seu email ou nome usuário"
                className="rounded-md border border-black p-3"
              />
              <input
                type="password"
                placeholder="Digite sua senha"
                className="rounded-md border border-black p-3"
              />
            </CardContent>
            <CardFooter className="flex flex-col items-start space-y-3">
              <a href="/cadastro">
                <button className="flex cursor-pointer text-blue-500 hover:text-blue-600">
                  <p>Se cadastre</p>
                  <ArrowRight />
                </button>
              </a>
              <button className="w-full cursor-pointer rounded-md bg-blue-500 p-2 text-white transition-colors hover:bg-blue-600">
                Fazer login
              </button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
