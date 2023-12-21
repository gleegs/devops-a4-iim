import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "/public/img/benefit-one.png";
import benefitTwoImg from "/public/img/benefit-two.png";

const benefitOne = {
  title: "En 3 points",
  desc: "Voici quelques-unes des raisons pour lesquelles vous devriez utiliser Vinylon :",
  image: benefitOneImg,
  bullets: [
    {
      title: "Une large sélection de disques",
      desc: "Nous avons plus de 100 000 disques en stock, de tous genres et de toutes époques.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Une équipe de passionnés",
      desc: "Nos conseillers sont des experts en vinyle et ils sont là pour vous aider à trouver le disque parfait.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Un service client de qualité",
      desc: "Nous sommes là pour vous aider à chaque étape de votre commande.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "En 3 points encore",
  desc: "Oui on va réecrire les mêmes phrases parce qu'on a pas le temps",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Une large sélection de disques",
      desc: "Nous avons plus de 100 000 disques en stock, de tous genres et de toutes époques.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Une équipe de passionnés",
      desc: "Nos conseillers sont des experts en vinyle et ils sont là pour vous aider à trouver le disque parfait.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Un service client de qualité",
      desc: "Nous sommes là pour vous aider à chaque étape de votre commande.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
