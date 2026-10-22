import { Header } from "@/components/Header";
import { CardsSearch } from "@/components/search/CardsSearch";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";

export function ProfessionalSearch() {
  const cards = Array.from({ length: 100 }, (_, index) => index);
  return (
    <div>
      <Header />
      <div className="h-14 w-full bg-white" />
      <div className="p-8">
        <div className="mb-4 flex justify-between px-6">
          <div>
            <h1 className="text-2xl font-bold">Profissionais</h1>
            <p>Encontre o profissional ideal para o seu projeto</p>
          </div>
          <div className="flex items-center">
            <Select>
              <SelectTrigger className="cursor-pointer">
                <SelectValue placeholder="Filtro" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos</SelectItem>
                <SelectItem value="1">1 estrela</SelectItem>
                <SelectItem value="2">2 estrelas</SelectItem>
                <SelectItem value="3">3 estrelas</SelectItem>
                <SelectItem value="4">4 estrelas</SelectItem>
                <SelectItem value="5">5 estrelas</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4">
          {cards.map((_, index) => (
            <CardsSearch key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
