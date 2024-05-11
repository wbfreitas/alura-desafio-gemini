import subtitles from "./subtitles.mjs";

/**
 * prompt para returnar todo o subtítulo traduzido
 * **/
const traduzindoTodoOtexto = (subtitles) => {
  return `Traduza para português Brasil o JSON abaixo e devolva no mesmo padrão um JSON contendo apenas os textos em português:
    ${subtitles}
  `;
}


/**
 * prompt para montar perguntas sobre o subtiítulo selecionado
 * **/
const perguntas = (subtitles) => {
  return `- Monte 5 perguntas em ingleês multipla escolha com 5 respostas para quem esta estudando inglês.
          - Responda apenas o JSON
  --------------
  dado o texto:
  ${JSON.stringify(subtitlesExample1)}

  então retorne:
  ${JSON.stringify(exmploPergutas)}

  dado o texto:
  ${JSON.stringify(subtitles)}

  então retorne:
`;
}

/**
 *  Prompet para retorna os textos agrupados pelo parametro, utilizado os padrões few shot prompting e chain of thought
 * **/
const templeteAgrupamento = (agrupador, subtitles) => {
    return `
  - Preciso que você leia o texto com frases em inglês e agrupe as palavras  por ${agrupador}. 
  - As palavras nao devem repetir no retorno
  - Se tiver alguma palavra não permitida pode ser subistituda por ****
 {
    ingles: [<palavras extraidas do texto em ingles sem repetir>],
    portuges: [<tradução das palacras extraidas do texto>]
  }
  - O json precisar ser válido

  --------------------------------------------

  exemplo texto 1:
  ${JSON.stringify(subtitlesExample1)}
  
  então retorne o json:
  ${JSON.stringify(filtroExample1[agrupador])}

  exemplo texto 2:
  ${JSON.stringify(subtitles)}
  
  então retorne o json: `;
  };
  
const  subtitlesExample1 = [
  "I went to the store.",
  "He is my friend.",
  "She is very smart.",
  "I am walking to school.",
  "He is playing soccer.",
  "She is singing a song.",
  "The dog is brown.",
  "A cat is sitting on the fence.",
  "Some birds are flying in the sky.",
  "I am sitting on the chair.",
  "He is standing next to the door.",
  "She is walking towards the park.",
  "I am very happy.",
  "He is running quickly.",
  "She is speaking softly.",
  "I walk to school every day.",
  "He plays soccer every weekend.",
  "She sings a song every night.",
  "The beautiful flowers are blooming.",
  "The tall tree is swaying in the wind.",
  "The cold water is refreshing.",
  "What's up, dude?",
  "I'm feeling kinda tired.",
  "That movie was totally awesome!",
  "I'm going to check out the new restaurant.",
  "He figured out the problem.",
  "She put up with a lot of stress."
];

const exmploPergutas = [
  {
    "question": "Which sentence uses the present continuous tense correctly?",
    "options": [
      "I went to the store.",
      "He is playing soccer.",
      "She sings a song every night.",
      "The beautiful flowers are blooming."
    ],
    "answer": "He is playing soccer."
  },
  {
    "question": "Identify the sentence that uses an adjective in its superlative form:",
    "options": [
      "She is very smart.",
      "The dog is brown.",
      "I am very happy.",
      "The tall tree is swaying in the wind."
    ],
    "answer": "She is very smart."
  },
  {
    "question": "Which sentence contains a prepositional phrase?",
    "options": [
      "I am walking to school.",
      "He is my friend.",
      "The dog is brown.",
      "What's up, dude?"
    ],
    "answer": "I am walking to school."
  },
  {
    "question": "Choose the sentence that includes an informal expression:",
    "options": [
      "She is speaking softly.",
      "That movie was totally awesome!",
      "He figured out the problem.",
      "She put up with a lot of stress."
    ],
    "answer": "That movie was totally awesome!"
  }
]

const filtroExample1 = {
  "verbos": {
    "ingles": [
      "went",
      "is",
      "walking",
      "playing",
      "singing",
      "sitting",
      "flying",
      "standing",
      "walking",
      "am",
      "run",
      "speak",
      "walk",
      "plays",
      "sings",
      "are blooming",
      "is swaying",
      "is refreshing",
      "feeling",
      "figured out",
      "put up with"
    ],
    "portugues": [
      "fui",
      "é",
      "estou andando",
      "está jogando",
      "está cantando",
      "está sentado",
      "estão voando",
      "está de pé",
      "está caminhando",
      "sou",
      "corro",
      "falo",
      "ando",
      "joga",
      "canta",
      "estão florescendo",
      "está balançando",
      "é refrescante",
      "estou me sentindo",
      "descobriu",
      "aguentou"
    ]
  },
  "artigos": {
    "ingles": [
      "the",
      "a",
      "some"
    ],
    "portugues": [
      "o",
      "a",
      "alguns"
    ]
  },
  "preposições": {
    "ingles": [
      "to",
      "on",
      "next to",
      "towards"
    ],
    "portugues": [
      "para",
      "em",
      "perto de",
      "em direção a"
    ]
  },
  "adverbios": {
    "ingles": [
      "very",
      "quickly",
      "softly"
    ],
    "portugues": [
      "muito",
      "rapidamente",
      "suavemente"
    ]
  },
  "conjugações": {
    "ingles": [
      "went",
      "is",
      "am",
      "walk",
      "plays",
      "sings"
    ],
    "portugues": [
      "fui",
      "é",
      "sou",
      "ando",
      "joga",
      "canta"
    ]
  },
  "adjetivos": {
    "ingles": [
      "beautiful",
      "tall",
      "cold"
    ],
    "portugues": [
      "bonitas",
      "alta",
      "fria"
    ]
  },
  "expressoes informais": {
    "ingles": [
      "What's up, dude?",
      "I'm feeling kinda tired.",
      "That movie was totally awesome!"
    ],
    "portugues": [
      "E aí, cara?",
      "Estou meio cansado.",
      "Aquele filme foi totalmente demais!"
    ]
  },
  "phrasal verbs": {
    "ingles": [
      "check out",
      "figure out",
      "put up with"
    ],
    "portugues": [
      "dar uma olhada",
      "descobrir",
      "aguentar"
    ]
  },
  "pronomes": {
    "ingles": [
      "I",
      "He",
      "She"
    ],
    "portugues": [
      "Eu",
      "Ele",
      "Ela"
    ]
  },
}



export {templeteAgrupamento, traduzindoTodoOtexto, perguntas  };