import Title from "@/components/Title";
import { cn } from "@/lib/utils";
import creation from "@public/img/artisans-au-travail-alain-richard.webp";
import fourrure from "@public/img/parfum-baume-de-coeur-alain-richard-fourrure.webp";
import spiritualite from "@public/img/parfum-baume-de-coeur-alain-richard-table.webp";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: 'Parfum "Baume au Cœur" - Alain Richard Couture',
  description: `Découvrez "Baume au Cœur", le parfum emblématique d'Alain Richard Couture. Une fragrance unique née de la collaboration entre Pierre-Constantin Guéros et Alain Richard, inspirée par la nature du Jura et l'élégance nocturne. Plongez dans un voyage sensoriel alliant sophistication et authenticité, où chaque note raconte une histoire de nature et d'artisanat.`,
};

const page = () => {
  return (
    <>
      <Title
        textColor="text-black"
        className="bg-beaume-au-coeur bg-center bg-cover animate-fade-in-fwd"
      >
        Parfum &ldquo;Beaume au Cœur&rdquo;
      </Title>

      <p className="text-justify animate-tilt-in-left delay-700">
        Dans le monde raffiné et captivant de la haute parfumerie, certaines
        créations se distinguent par leur âme, leur profondeur et leur histoire.
        Aujourd&apos;hui, nous vous invitons à découvrir l&apos;univers
        envoûtant de &ldquo;Baume au Cœur&rdquo;, une fragrance née d&apos;une
        collaboration exceptionnelle entre deux maîtres de leur art :
        Pierre-Constantin Guéros de la Maison Symrise et Alain Richard,
        couturier et créateur de fourrures et de vêtements en cuir exotique.
      </p>

      <section className="space-y-8">
        <h2 className="animate-tilt-in-left delay-1100">
          Un Parfum Né de l&apos;Amitié et du Savoir-Faire
        </h2>

        <div
          className={cn(
            "flex flex-col gap-5 items-center",
            "md:grid md:grid-cols-12"
          )}
        >
          <div className="col-span-7 space-y-4 text-justify animate-tilt-in-left delay-1400">
            <p>
              L&apos;histoire de ce parfum commence par une rencontre fortuite
              mais décisive entre des esprits créatifs et passionnés.
              Pierre-Constantin Guéros, réputé pour son expertise et son
              innovation dans le monde des fragrances, et Alain Richard, connu
              pour sa sensibilité tactile et son audace en matière de mode, ont
              uni leurs talents pour créer une œuvre d&apos;art olfactive
              unique. Leur amitié, forgée dans les ateliers de création et les
              studios de mode, est au cœur de cette fragrance.
            </p>
          </div>
          <Image
            className="col-span-5 w-full animate-tilt-in-right delay-1400"
            src={creation}
            alt="Pierre-Constantin Guéros et Alain Richard travaillant à l'élaboration du parfum"
            priority
          />
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="animate-tilt-in-left delay-1700">
          Des Matières Premières d&apos;Exception
        </h2>

        <div className="text-justify animate-tilt-in-left delay-2000">
          <p>
            Chaque goutte de ce parfum raconte une histoire de nature et
            d&apos;authenticité. Le cacao, riche et velouté, évoque des
            souvenirs d&apos;enfance et des moments de gourmandise. La vanille,
            douce et enveloppante, apporte une chaleur réconfortante.
            L&apos;ambre, mystique et sensuel, transporte les sens dans des
            contrées lointaines et exotiques. Le musc, profond et animal,
            réveille des instincts primitifs. Le cuir, élégant et robuste,
            ajoute une touche de sophistication. L&apos;encens, sacré et
            mystérieux, invite à la méditation et au recueillement.
          </p>
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="animate-tilt-in-left delay-2300">
          Un Univers Inspiré par la Nuit et la Spiritualité
        </h2>

        <div
          className={cn(
            "flex flex-col gap-5 items-center",
            "md:grid md:grid-cols-12"
          )}
        >
          <Image
            className="col-span-5 w-full animate-tilt-in-left delay-2600"
            src={spiritualite}
            alt="Bouteilles de parfum Baume de Coeur d'Alain Richard Couture devant un bâtiment historique"
            priority
          />
          <div className="col-span-7 space-y-4 text-justify animate-tilt-in-right delay-2600">
            <p>
              L&apos;expérience de création de ce parfum a été une véritable
              aventure. Chaque étape, de la sélection des matières premières à
              l&apos;assemblage final, a été marquée par des découvertes et des
              apprentissages. Les secrets de fabrication, dévoilés avec passion
              par Pierre-Constantin Guéros nez chez symbiose et Alain Richard,
              ont transformé cette collaboration en une quête de perfection.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="animate-tilt-in-left delay-2900">
          Un Voyage Sensoriel Unique
        </h2>

        <div className="text-justify animate-tilt-in-left delay-3200">
          <p>
            Ce parfum, véritable ode à l&apos;émotion et au mystère, puise son
            inspiration dans deux univers fascinants : le monde de la nuit et
            l&apos;atmosphère des églises catholiques. Les notes sombres et
            envoûtantes rappellent l&apos;élégance des soirées nocturnes, tandis
            que les accords sacrés et spirituels évoquent la solennité et la
            profondeur des lieux de culte. Chaque pulvérisation de ce parfum est
            une invitation à un voyage sensoriel, une immersion dans un monde où
            le toucher, la peau et la fourrure se rencontrent dans une danse
            intime et passionnée.
          </p>
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="animate-tilt-in-left delay-3500">
          L&apos;Art du Sur-Mesure : Vêtements et Fragrance Personnels
        </h2>

        <div
          className={cn(
            "flex flex-col gap-5 items-center",
            "md:grid md:grid-cols-12"
          )}
        >
          <div className="col-span-7 space-y-4 text-justify animate-tilt-in-left delay-3800">
            <p>
              À la Maison Richard Couture, chaque vêtement est une création
              unique, façonnée sur mesure pour refléter la personnalité et le
              caractère de celui ou celle qui le porte. De la même manière,
              Baume au Cœur a été conçu pour être une fragrance intimement
              personnelle, évoluant différemment sur chaque individu. Tel un
              vêtement sur mesure qui épouse parfaitement les courbes et révèle
              l&apos;essence même de la personne, ce parfum interagit avec la
              chimie propre de la peau, créant une signature olfactive unique à
              chacun. Cette approche artisanale et personnalisée fait écho à
              l&apos;expertise de la Maison Richard, où chaque pièce de fourrure
              et de cuir exotique est élaborée avec une attention méticuleuse
              aux détails et un profond respect pour l&apos;individualité.
              Ainsi, Baume au Cœur devient bien plus qu&apos;un simple parfum ;
              il devient un compagnon intime, révélant et sublimant les nuances
              de chaque personne, pour une expérience olfactive véritablement
              sur mesure
            </p>
          </div>
          <Image
            className="col-span-5 w-full animate-tilt-in-right delay-3800"
            src={fourrure}
            alt="Flacon de parfum Baume de Coeur d'Alain Richard Couture posé sur de la fourrure colorée"
            priority
          />
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="animate-tilt-in-left delay-4100">Un Désir Révélé</h2>

        <div className="text-justify animate-tilt-in-left delay-4400">
          <p>
            Baume au Cœur est bien plus qu&apos;un parfum ; c&apos;est une
            expérience, un hommage à l&apos;art et à l&apos;amitié, à la fête la
            joie et le mystère de là foie C&apos;est une relation intime entre
            la fragrance et celui ou celle qui la porte,a une connexion profonde
            qui éveille les sens et le désir. Laissez-vous séduire par cette
            création d&apos;exception, et tombez amoureux de l&apos;histoire, du
            savoir-faire et de la passion qui ont donné naissance à ce
            chef-d&apos;œuvre olfactif. Découvrez Baume au Cœur, et laissez
            cette fragrance inoubliable transformer votre quotidien en une
            symphonie de sensations et d&apos;émotions.
          </p>
        </div>
      </section>
    </>
  );
};

export default page;
