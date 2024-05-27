import { cn } from "@/lib/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alain Richard Couture",
  description:
    "Découvrez Alain Richard Couture, inspiré par les reliefs et la faune du Jura. Nos créations uniques en fourrures et cuirs exotiques allient tradition et modernité, avec une approche responsable et éthique. Explorez nos tenues chics, sensuelles et respectueuses de l'environnement, fabriquées à partir de matières premières traçables et renouvelées.",
};

const page = () => {
  return (
    <main
      className={cn(
        "max-w-240 min-h-screen flex flex-col items-center justify-center space-y-8",
        "mx-5",
        "md:mx-auto"
      )}
    >
      <h1>Bienvenue dans l&apos;univers d&apos;Alain Richard Couture</h1>

      <section className="space-y-2 bg-white/50 p-4 rounded">
        <h2>Mes racines jurassiennes : la source de mon inspiration</h2>

        <p>
          Mes racines jurassiennes sont mon point d’ancrage et la source de mon
          inspiration. Le Jura recèle une grande diversité de reliefs et de
          milieux naturels : lacs, étangs, forêts, rivières, montagnes, et une
          faune et une flore riches et variées. Chevreuils, renards, blaireaux,
          sangliers, écureuils, lapins, biches, chouettes... peuplent le Jura
          naturel et sauvage. Mais les animaux les plus emblématiques de cette
          région sont le lynx boréal, le grand tétras, le chamois, l’hermine et
          le faucon pèlerin.
        </p>

        <p>
          Le département est également une réserve naturelle pour les botanistes
          : gentianes, épicéas, sapins présidents, morilles, orchidées sauvages
          sont quelques-unes des espèces caractéristiques de la flore locale.
          J’ai grandi dans ce cadre exceptionnel que j’ai apprivoisé au fil du
          temps et qui me tient tellement à cœur.
        </p>
      </section>

      <section className="space-y-2 bg-white/50 p-4 rounded">
        <h2>Respect et transmission des valeurs naturelles</h2>

        <p>
          Le respect de la nature, sa force et ses richesses m’ont été transmis
          par ma famille qui m’a guidé dans cette découverte. J&apos;y puise mes
          matières premières avec respect et admiration pour ce que la nature
          nous offre. Tous les sens sont en éveil.
        </p>

        <p>
          J’ai découvert la rudesse de cette région et la force de ses habitants
          qui, par leurs métiers artisanaux, perpétuent des traditions et les
          modernisent en bonifiant et protégeant ses ressources naturelles. Ma
          charte éthique est axée sur une production nationale et privilégie les
          collaborations avec les autres métiers d’arts (nacrière, tourneurs sur
          cornes, tanneries, etc.).
        </p>
      </section>

      <section className="space-y-2 bg-white/50 p-4 rounded">
        <h2>Une passion pour la mode et les matières nobles</h2>

        <p>
          Passionné de mode et de style, je me suis formé aux techniques de
          couture, fourrures et vêtements de peaux. Ces dernières sont devenues
          ma matière de prédilection et source d’inspiration. Amoureux des
          matières nobles et très tactile dans ma création, je désire rendre à
          la fourrure ses lettres de noblesse, par une approche responsable et
          éthique. Prendre ce que la nature nous offre, le transformer, le
          mettre au goût du jour et lui donner vie, telle est ma motivation.
        </p>
      </section>

      <section className="space-y-2 bg-white/50 p-4 rounded">
        <h2>Des matières premières responsables et traçables</h2>

        <p>
          Je travaille avec des matières premières responsables et traçables :
          des fourrures d’élevage, des cuirs exotiques, mais aussi en
          réhabilitant et en ravivant des fourrures anciennes remisées au fond
          des penderies. Je les rafraîchis, les transforme et leur offre une
          seconde vie.
        </p>
      </section>

      <section className="space-y-2 bg-white/50 p-4 rounded">
        <h2>Des tenues chics et actuelles</h2>

        <p>
          Je crée des tenues chics et actuelles, chaudes et sensuelles qui se
          portent au quotidien ou pour un événement spécial. Osez à nouveau ce
          peau à peau, ce contact sauvage et charnel, un retour vers la nature,
          un partage de sensations, un look atypique ou sophistiqué, se faire
          plaisir en étant vertueux.
        </p>
      </section>
    </main>
  );
};

export default page;
