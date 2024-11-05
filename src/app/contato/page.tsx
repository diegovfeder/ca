import Link from "next/link";
import { ContactForm } from "@/components/contact-form";

export default function ContatoPage() {
  return (
    <main className="pt-16 pb-8">
      <div className="w-full mb-8 md:mb-12">
        <iframe
          className="w-full"
          src="https://www.google.com/maps/embed?maptype=satellite:pb=!1m18!1m12!1m3!1d14410.991341566809!2d-49.2945516!3d-25.4466927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce3902684c1fb%3A0x5fd47225820dbbb7!2sCaroline%20Andrusko%20Arquitetos!5e0!3m2!1spt-BR!2sbr!4v1730131062846!5m2!1spt-BR!2sbr"
          width="100%"
          height="320"
          loading="lazy"
        />
      </div>
      <div className="container mx-auto pl-8 flex flex-col md:flex-row">
        <div className="flex-[4] md:basis-[40%] uppercase mb-8 md:mb-0">
          <h1 className="text-2xl text-stone-400 tracking-widest mb-8">
            CONTATO
          </h1>
          <p>
            <Link
              href="tel:+554130959505"
              className="text-sm text-stone-500 font-medium hover:underline leading-7"
            >
              +55 41 3095 9505
            </Link>
          </p>
          <p>
            <Link
              href="mailto:contato@carolineandrusko.com.br"
              className="text-sm text-stone-500 font-medium hover:underline leading-7"
            >
              contato@carolineandrusko.com.br
            </Link>
          </p>
          <p className="text-sm text-stone-500 leading-7">
            Rua Gonçalves Dias, 370
            <br />
            Batel – Curitiba – PR - CEP 80240 340
          </p>
        </div>
        <div className="flex-[6] md:basis-[60%] pe-8">
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
