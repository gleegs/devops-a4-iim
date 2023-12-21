"use client"
import Head from "next/head";
import Hero from "/app/components/component/hero";
import Navbar from "/app/components/component/navbar";
import SectionTitle from "/app/components/component/sectionTitle";

import { benefitOne, benefitTwo } from "/app/components/component/data";
import Video from "/app/components/component/video";
import Benefits from "/app/components/component/benefits";
import Footer from "/app/components/component/footer";
import Testimonials from "/app/components/component/testimonials";
import Cta from "/app/components/component/cta";
import Faq from "/app/components/component/faq";
import PopupWidget from "/app/components/component/popupWidget";

const Home = () => {
  return (
    <div className="bg-stone-900">
      <Head>
        <title>Vinylon - Pour platine tous les vinyles.</title>
        <meta
          name="description"
          content="Vinylon - Pour platine tous les vinyles."
        />
        <link alt="" rel="icon" src="/public/logo.png" />

      </Head>

      <Navbar />
      <Hero />
      <SectionTitle
        id="pourquoi"
        pretitle="Pourquoi"
        title=" Pourquoi utiliser Vinylon ?">
        Vinylon est le site web idéal pour les collectionneurs de vinyle. Vous y trouverez une large sélection de disques, des classiques du rock aux dernières nouveautés. Notre équipe de passionnés est à votre disposition pour vous aider à trouver le disque parfait pour votre collection.
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <SectionTitle
        pretitle="Comment"
        title="Découvrez comment marche les vinyles">
        Les vinyles sont un type de support d&apos;enregistrement audio analogique qui utilise un sillon spirale gravé sur un disque en plastique pour représenter les informations sonores. La fabrication d&apos;un vinyle est un processus complexe qui nécessite plusieurs étapes.
      </SectionTitle>
      <Video />
      <SectionTitle
        pretitle="Par qui"
        title="Voici ce que les fondateurs racontent">
        Découvrez les interviews de nos fondateurs.
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
      </SectionTitle>
      <Faq />
      <Cta />
      <Footer />
      <PopupWidget />
    </div>
  );
}

export default Home;