import LooksCarousel from "@/components/LooksCarousel";
import Title from "@/components/Title";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    'Collection Automne/Hiver 2024 "Intime Sauvage" - Alain Richard Couture',
  description:
    "Découvrez la collection Automne/Hiver 2024 &apos;Intime Sauvage&apos; d&apos;Alain Richard Couture. Inspirée par la nature brute du Jura, cette collection célèbre la puissance et l&apos;élégance, avec des matériaux nobles et une approche innovante et responsable. Explorez l&apos;univers &apos;Intime Sauvage&apos; où la nature rencontre la sophistication humaine.",
};

const page = () => {
  return (
    <>
      <Title
        textColor="text-black"
        className="bg-intime-sauvage bg-center bg-cover animate-fade-in-fwd"
      >
        Collection Automne/Hiver 2024 Intime Sauvage
      </Title>
      <p className="animate-tilt-in-left delay-700">
        Découvrez notre nouvelle collection Automne/Hiver 2024 intitulée
        &ldquo;Intime Sauvage&rdquo;. Ce défilé rend hommage à mon Jura natal, à
        la nature brute et exotique, et à la puissance des forêts denses et des
        lacs majestueux de cette région.
      </p>
      <section className="space-y-8">
        <h2 className="animate-tilt-in-left delay-1100">
          L&apos;inspiration du Jura
        </h2>

        <div className="text-justify animate-tilt-in-left delay-1400">
          <p>
            Le Jura, avec ses paysages époustouflants et sa nature préservée,
            est au cœur de notre inspiration. Les forêts mystérieuses, les lacs
            scintillants et les montagnes imposantes se reflètent dans chaque
            pièce de notre collection. Cette beauté sauvage et authentique se
            manifeste dans les textures et les motifs que nous avons choisis,
            créant un lien profond entre la nature et nos créations.
          </p>
        </div>
      </section>
      <section className="space-y-8">
        <h2 className="animate-tilt-in-left delay-1800">
          La femme de pouvoir et l&apos;homme viril
        </h2>

        <div className="text-justify animate-tilt-in-left delay-2100">
          <p>
            Notre défilé célèbre une femme de pouvoir, forte et indépendante,
            incarnant la force et la sophistication. Elle est l&apos;essence de
            l&apos;élégance naturelle, à la fois sauvage et raffinée. À ses
            côtés, l&apos;homme est viril, mais exprime aussi une féminité
            subtile qui adoucit sa masculinité. Cette dualité, mélange de force
            brute et de délicatesse, est au cœur de notre vision.
          </p>
        </div>
      </section>
      <section className="space-y-8">
        <h2 className="animate-tilt-in-left delay-2500">
          La relation à la peau sauvage
        </h2>

        <div className="text-justify animate-tilt-in-left delay-2800">
          <p>
            &ldquo;Intime Sauvage&ldquo;Intime Sauvage&rdquo; tire son nom de
            cette relation intime que nous entretenons avec la peau, symbolisant
            à la fois la protection et la vulnérabilité. Les matériaux que nous
            utilisons évoquent cette connexion profonde avec la nature, offrant
            une expérience tactile et sensorielle unique. Chaque pièce raconte
            une histoire d&apos;harmonie entre l&apos;homme, la femme et leur
            environnement sauvage.
          </p>
        </div>
      </section>
      <section className="space-y-8">
        <h2 className="animate-tilt-in-left delay-3200">
          Préservation et innovation
        </h2>

        <div className="text-justify animate-tilt-in-left delay-3500">
          <p>
            Nous nous engageons à préserver l&apos;artisanat et le savoir-faire
            primaire tout en innovant constamment. Nos créations respectent les
            traditions tout en intégrant des éléments modernes et
            avant-gardistes. La vie devient plus fun, charmante et sensuelle à
            travers des créations qui osent défier les conventions tout en
            respectant une rigueur et une élégance intemporelle.
          </p>
        </div>
      </section>
      <section className="space-y-8">
        <h2 className="animate-tilt-in-left delay-3900">
          Un nouvel art de vivre
        </h2>

        <div className="text-justify animate-tilt-in-left delay-4200">
          <p>
            En revisitant les codes avec une rigueur presque catholique, nous
            créons un nouvel art de vivre. Nos pièces sont conçues pour séduire
            et captiver, apportant charme et sensualité au quotidien. Nous
            croyons en une mode audacieuse et respectueuse, innovante et ancrée
            dans des valeurs solides.
          </p>
        </div>
      </section>
      <LooksCarousel />
    </>
  );
};

export default page;
