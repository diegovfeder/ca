import Link from "next/link";

// FIXME: Make this page more original
export default function ContatoPage() {
  return (
    <main className="container mx-auto px-4 pt-24 min-h-[calc(100vh-4rem)]">
      <h1 className="text-4xl font-light text-stone-950 mb-12">Contato</h1>
      <div className="relative">
        <div className="absolute top-0 left-0 w-16 h-[1px] bg-stone-600" />
        <h2 className="text-center text-sm font-bold italic">
          +55 (41) 3095-9505
        </h2>
        <h3 className="text-center text-md font-extralight underline italic pt-4">
          <Link
            href="mailto:contato@carolineandrusko.com.br"
            className="hover:underline"
          >
            contato@carolineandrusko.com.br
          </Link>
        </h3>
        <h4 className="text-center text-md font-thin uppercase italic pt-4">
          OFFICE @{" "}
          <Link
            href="https://maps.app.goo.gl/RJhvbfFjGnM8zTddA"
            rel="noopener"
            className="hover:underline"
          >
            Rua Gonçalves Dias, 370
          </Link>
        </h4>
        <h5 className="text-center text-md font-thin uppercase italic pt-2">
          Batel – Curitiba – PR
        </h5>
        <div className="absolute bottom-0 right-0 w-16 h-[1px] bg-stone-600" />
      </div>

      <div className="mt-4 w-full">
        <iframe
          className="w-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14410.991341566809!2d-49.2945516!3d-25.4466927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce3902684c1fb%3A0x5fd47225820dbbb7!2sCaroline%20Andrusko%20Arquitetos!5e0!3m2!1spt-BR!2sbr!4v1730131062846!5m2!1spt-BR!2sbr"
          width="600"
          height="450"
          loading="lazy"
        />
      </div>
    </main>
  );
}
