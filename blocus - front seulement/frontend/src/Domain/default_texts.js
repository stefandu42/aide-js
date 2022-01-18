const DEFAULT_TEXTS = [
  {
    id: 1,
    content: "voici un texte a dactylographier sans caractere complique",
    level: "facile",
  },
  {
    id: 2,
    content: "et voila que nous apprenons tous a taper sur un clavier",
    level: "facile",
  },
  {
    id: 3,
    content:
      "Si c'est ça être sage, alors je préfère rester un idiot pour le restant de mes jours !",
    level: "moyen",
  },
  {
    id: 4,
    content:
      "J'étais devenu une relique du passé qu'ils souhaitaient tous voir dis paraître. Jeune, je me suis demandé pourquoi j'existais.",
    level: "moyen",
  },
  {
    id: 5,
    content: `Les gens vivent en s'appuyant sur leurs convictions et leurs connaissances et ils appellent ça la réalité : mais le savoir et la compréhension so
      nt des concepts si ambigus que cette réalité ne pourrait être alors qu'une i
      llusion.`,
    level: "difficile",
  },
  {
    id: 6,
    content: `C'est vrai... Dans le monde des ninjas, ceux qui ne respectent pas le
      s règles et transgressent les lois... Sont considérés comme des moins-querien. Mais... Ceux qui ne pensent pas à leurs compagnons... Sont encore pire
      s.`,
    level: "difficile",
  },
];

class default_texts {
  constructor() {
    this.nextId = 7;
    this.texts = DEFAULT_TEXTS;
  }

  addText(text, level) {
    if (!text || !level) return false;
    const newText = {
      id: this.nextId,
      content: text,
      level: level,
    };
    this.texts.push(newText);
    this.id++;
    return true;
  }
  selectRandomText(level) {
    if (!level) return;
    let levelTexts = [];
    this.texts
      .filter((t) => t.level === level)
      .forEach((t) => levelTexts.push(t));
    let text = levelTexts[Math.floor(Math.random() * levelTexts.length)];
    return text;
  }
}

export default default_texts;
