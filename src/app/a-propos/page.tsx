import Navbar from "@/components/Navbar";
import Title from "@/components/Title";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Alain Richard Couture",
  description:
    "Découvrez Alain Richard Couture, inspiré par les reliefs et la faune du Jura. Nos créations uniques en fourrures et cuirs exotiques allient tradition et modernité, avec une approche responsable et éthique. Explorez nos tenues chics, sensuelles et respectueuses de l'environnement, fabriquées à partir de matières premières traçables et renouvelées.",
};

const page = () => {
  return (
    <>
      <Navbar />
      <main
        className={cn(
          "max-w-240 min-h-screen mb-8 flex flex-col items-center justify-center space-y-8",
          "mx-5 mt-100 ",
          "md:mx-auto md:mt-138 "
        )}
      >
        <Title
          textColor="text-black"
          className="bg-jura bg-center bg-cover animate-fade-in-fwd"
        >
          Bienvenue dans l&apos;univers d&apos;Alain Richard Couture
        </Title>

        <section className="space-y-8">
          <h2 className="animate-tilt-in-left delay-700">
            Mes racines jurassiennes : la source de mon inspiration
          </h2>

          <div
            className={cn(
              "flex flex-col gap-5 items-center",
              "md:grid md:grid-cols-12"
            )}
          >
            <div className="col-span-6 space-y-4 text-justify animate-tilt-in-left delay-1000">
              <p>
                Mes racines jurassiennes sont mon point d’ancrage et la source
                de mon inspiration. Le Jura recèle une grande diversité de
                reliefs et de milieux naturels : lacs, étangs, forêts, rivières,
                montagnes, et une faune et une flore riches et variées.
                Chevreuils, renards, blaireaux, sangliers, écureuils, lapins,
                biches, chouettes... peuplent le Jura naturel et sauvage. Mais
                les animaux les plus emblématiques de cette région sont le lynx
                boréal, le grand tétras, le chamois, l’hermine et le faucon
                pèlerin.
              </p>

              <p>
                Le département est également une réserve naturelle pour les
                botanistes : gentianes, épicéas, sapins présidents, morilles,
                orchidées sauvages sont quelques-unes des espèces
                caractéristiques de la flore locale. J’ai grandi dans ce cadre
                exceptionnel que j’ai apprivoisé au fil du temps et qui me tient
                tellement à cœur.
              </p>
            </div>
            <Image
              className="col-span-6 w-full animate-tilt-in-right delay-1000"
              src="/img/lynx.webp"
              alt="Lynx"
              width={4176}
              height={2784}
              priority
            />
          </div>
        </section>

        <section className="space-y-8">
          <h2 className="animate-tilt-in-left delay-1400">
            Respect et transmission des valeurs naturelles
          </h2>

          <div
            className={cn(
              "flex flex-col-reverse gap-5 items-center",
              "md:grid md:grid-cols-12"
            )}
          >
            <Image
              className="col-span-5 w-full animate-tilt-in-left delay-1700"
              src="/img/artisan.webp"
              alt="Artisan"
              width={1920}
              height={2880}
              priority
            />
            <div className="col-span-7 space-y-4 text-justify animate-tilt-in-right delay-1700">
              <p>
                Le respect de la nature, sa force et ses richesses m’ont été
                transmis par ma famille qui m’a guidé dans cette découverte.
                J&apos;y puise mes matières premières avec respect et admiration
                pour ce que la nature nous offre. Tous les sens sont en éveil.
              </p>

              <p>
                J’ai découvert la rudesse de cette région et la force de ses
                habitants qui, par leurs métiers artisanaux, perpétuent des
                traditions et les modernisent en bonifiant et protégeant ses
                ressources naturelles. Ma charte éthique est axée sur une
                production nationale et privilégie les collaborations avec les
                autres métiers d’arts (nacrière, tourneurs sur cornes,
                tanneries, etc.).
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-8">
          <h2 className="animate-tilt-in-left delay-2100">
            Une passion pour la mode et les matières nobles
          </h2>

          <div
            className={cn(
              "flex flex-col gap-5 items-center",
              "md:grid md:grid-cols-12"
            )}
          >
            <p className="col-span-7 space-y-4 text-justify animate-tilt-in-left delay-2400">
              Passionné de mode et de style, je me suis formé aux techniques de
              couture, fourrures et vêtements de peaux. Ces dernières sont
              devenues ma matière de prédilection et source d’inspiration.
              Amoureux des matières nobles et très tactile dans ma création, je
              désire rendre à la fourrure ses lettres de noblesse, par une
              approche responsable et éthique. Prendre ce que la nature nous
              offre, le transformer, le mettre au goût du jour et lui donner
              vie, telle est ma motivation.
            </p>
            <Image
              className="col-span-5 w-full animate-tilt-in-right delay-2400"
              src="/img/cuir.webp"
              alt="Cuir"
              width={1915}
              height={2868}
              priority
            />
          </div>
        </section>

        <section className="space-y-8">
          <h2 className="animate-tilt-in-left delay-2800">
            Des matières premières responsables et traçables
          </h2>

          <div
            className={cn(
              "flex flex-col-reverse gap-5 items-center",
              "md:grid md:grid-cols-12"
            )}
          >
            <Image
              className="col-span-6 w-full animate-tilt-in-left delay-3100"
              src="/img/fourrure.webp"
              alt="Fourrures"
              width={1920}
              height={1280}
              priority
            />

            <p className="col-span-6 space-y-4 text-justify animate-tilt-in-right delay-3100">
              Je travaille avec des matières premières responsables et traçables
              : des fourrures d’élevage, des cuirs exotiques, mais aussi en
              réhabilitant et en ravivant des fourrures anciennes remisées au
              fond des penderies. Je les rafraîchis, les transforme et leur
              offre une seconde vie.
            </p>
          </div>
        </section>

        <section className="space-y-8">
          <h2 className="animate-tilt-in-left delay-3500">
            Des tenues chics et actuelles
          </h2>

          <div
            className={cn(
              "flex flex-col gap-5 items-center",
              "md:grid md:grid-cols-12"
            )}
          >
            <p className="col-span-7 space-y-4 text-justify animate-tilt-in-left delay-3800">
              Je crée des tenues chics et actuelles, chaudes et sensuelles qui
              se portent au quotidien ou pour un événement spécial. Osez à
              nouveau ce peau à peau, ce contact sauvage et charnel, un retour
              vers la nature, un partage de sensations, un look atypique ou
              sophistiqué, se faire plaisir en étant vertueux.
            </p>

            <Image
              className="col-span-5 w-full animate-tilt-in-right delay-3800"
              src="/img/creation.webp"
              alt="Création"
              width={1920}
              height={2880}
              priority
            />
          </div>
        </section>
      </main>
    </>
  );
};

export default page;
