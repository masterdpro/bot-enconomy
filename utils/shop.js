const shop = {
  Broken_sword: {
    name:"Broken_sword",
    description: "une épée cassée qui te permet de TimeOut le membre de ton choix 1 minute",
    price: 100,
    sanction: (1 * 60 * 1000),
    usage: "tu a mis K.O un membre durant 1 minute",
  },
  Wooden_sword: {
    name:"Wooden_sword",
    description: "une épée en bois qui te permet de TimeOut le membre de ton choix 3 minutes",
    price: 250,
    sanction: (3 * 60 * 1000),
    usage: "tu a mis K.O un membre durant 3 minute",
  },
  Rock: {
    name:"Rock",
    description: "un cailloux...tu t'atendais à quoi ?",
    price: 100,
    sanction: (0),
    usage: "tu peux pas faire grand chose avec un cailloux",
  },
  Banana: {
    name:"Banana",
    description: "une banane étrangement puissante, personne ne sait quelle est son vrais pourvoir...",
    price: 10000,
    sanction: (0),
    usage: "piou piou piou pistolet banane",
  },
  Baguette: {
    name:"Baguette",
    description: "SOME OUI OUI BAGUETTE",
    price: 1000,
    sanction: (0),
    usage: "OUI OUI BAGUETTE!",
  },
  Pro_sword: {
    name:"Pro_sword",
    description: "Le trophée qui prouve que tu as partie des premiers dans cette avanture folle",
    price: 100,
    sanction: (0),
    usage: "utilisation d'une épée pro requiere un talent de pro :D",
  },
  Ban_hammer: {
    name:"Ban_hammer",
    description: "Le grand et tout puissant Ban Hammer, des legendes disent que se marteau a été forgé durant le big bang, d'autre disent que même Mjöllnir n'arrive pas a sa cheville. \n son pourvoir ? encore inconnue",
    price: 100000,
    sanction: (0),
    usage: "TA VOULUE BAN UN MEMBRE ? bah non c pas possible",
  },
  Judge_hammer: {
    name:"Judge_hammer",
    description: "Le marteaux de justice, il permet de rendre justice et de retirer les droits de parole a un membre durant 1 heure",
    price: 3000,
    sanction: (0),
    usage: "PAF PAF PAF, silence durant 1 heure, fin de la seance.",
  },
  Mjöllnir: {
    name:"Mjöllnir",
    description: "**BRAVO! tu as reussi a écrire son nom correctement.** \n voici Mjöllnir le marteaux divin de Thor fils d'Odin, malheureusement se marteau ne s'achète pas, il se mérite. || reste que si tu atteint cette somme tu le mérite bien... ||",
    price: 0,
    sanction: (0),
    usage: "...",
  },

};

module.exports = shop;