export interface WeddingCouple {
  slug: string;
  names: string;
  coverImage: string;
  images: { src: string; alt: string }[];
}

export const weddingPortfolio: WeddingCouple[] = [
  {
    slug: "hannah-max",
    names: "Hannah & Max",
    coverImage: "/images/weddings/hannah-max/01.jpg",
    images: [
      { src: "/images/weddings/hannah-max/01.jpg", alt: "Hannah & Max — ceremony in the forest" },
      { src: "/images/weddings/hannah-max/02.jpg", alt: "Hannah & Max — first look" },
      { src: "/images/weddings/hannah-max/03.jpg", alt: "Hannah & Max — bride portrait" },
      { src: "/images/weddings/hannah-max/04.jpg", alt: "Hannah & Max — couple portrait" },
      { src: "/images/weddings/hannah-max/05.jpg", alt: "Hannah & Max — ceremony details" },
      { src: "/images/weddings/hannah-max/06.jpg", alt: "Hannah & Max — wedding party" },
    ],
  },
  {
    slug: "jen-ryan",
    names: "Jen & Ryan",
    coverImage: "/images/weddings/jen-ryan/01.jpg",
    images: [
      { src: "/images/weddings/jen-ryan/01.jpg", alt: "Jen & Ryan — couple portrait" },
      { src: "/images/weddings/jen-ryan/02.jpg", alt: "Jen & Ryan — reception" },
      { src: "/images/weddings/jen-ryan/03.jpg", alt: "Jen & Ryan — ceremony" },
      { src: "/images/weddings/jen-ryan/04.jpg", alt: "Jen & Ryan — Highland Cow photo op" },
      { src: "/images/weddings/jen-ryan/05.jpg", alt: "Jen & Ryan — forest portraits" },
      { src: "/images/weddings/jen-ryan/06.jpg", alt: "Jen & Ryan — celebration" },
    ],
  },
  {
    slug: "sydney-casey",
    names: "Sydney & Casey",
    coverImage: "/images/weddings/sydney-casey/01.jpg",
    images: [
      { src: "/images/weddings/sydney-casey/01.jpg", alt: "Sydney & Casey — ceremony" },
      { src: "/images/weddings/sydney-casey/02.jpg", alt: "Sydney & Casey — first dance" },
      { src: "/images/weddings/sydney-casey/03.jpg", alt: "Sydney & Casey — reception" },
      { src: "/images/weddings/sydney-casey/04.jpg", alt: "Sydney & Casey — couple portrait" },
      { src: "/images/weddings/sydney-casey/05.jpg", alt: "Sydney & Casey — forest setting" },
      { src: "/images/weddings/sydney-casey/06.jpg", alt: "Sydney & Casey — celebration" },
    ],
  },
  {
    slug: "riley-jordan",
    names: "Riley & Jordan",
    coverImage: "/images/weddings/riley-jordan/01.jpg",
    images: [
      { src: "/images/weddings/riley-jordan/01.jpg", alt: "Riley & Jordan — ceremony" },
      { src: "/images/weddings/riley-jordan/02.jpg", alt: "Riley & Jordan — couple portrait" },
      { src: "/images/weddings/riley-jordan/03.jpg", alt: "Riley & Jordan — bridal party" },
      { src: "/images/weddings/riley-jordan/04.jpg", alt: "Riley & Jordan — reception" },
      { src: "/images/weddings/riley-jordan/05.jpg", alt: "Riley & Jordan — forest ceremony" },
      { src: "/images/weddings/riley-jordan/06.jpg", alt: "Riley & Jordan — celebration" },
    ],
  },
  {
    slug: "maya-justin",
    names: "Maya & Justin",
    coverImage: "/images/weddings/maya-justin/01.jpg",
    images: [
      { src: "/images/weddings/maya-justin/01.jpg", alt: "Maya & Justin — ceremony" },
      { src: "/images/weddings/maya-justin/02.jpg", alt: "Maya & Justin — couple portrait" },
      { src: "/images/weddings/maya-justin/03.jpg", alt: "Maya & Justin — first look" },
      { src: "/images/weddings/maya-justin/04.jpg", alt: "Maya & Justin — forest portraits" },
      { src: "/images/weddings/maya-justin/05.jpg", alt: "Maya & Justin — details" },
      { src: "/images/weddings/maya-justin/06.jpg", alt: "Maya & Justin — reception" },
    ],
  },
  {
    slug: "olivia-connor",
    names: "Olivia & Connor",
    coverImage: "/images/weddings/olivia-connor/06.jpg",
    images: [
      { src: "/images/weddings/olivia-connor/01.jpg", alt: "Olivia & Connor — couple portrait" },
      { src: "/images/weddings/olivia-connor/02.jpg", alt: "Olivia & Connor — ceremony" },
      { src: "/images/weddings/olivia-connor/03.jpg", alt: "Olivia & Connor — first dance" },
      { src: "/images/weddings/olivia-connor/04.jpg", alt: "Olivia & Connor — forest setting" },
      { src: "/images/weddings/olivia-connor/05.jpg", alt: "Olivia & Connor — celebration" },
      { src: "/images/weddings/olivia-connor/06.jpg", alt: "Olivia & Connor — details" },
    ],
  },
];
