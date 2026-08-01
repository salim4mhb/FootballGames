export interface Top10Question {
  id: string;
  title: string;
  list: { rank: number; name: string; flag: string }[];
}

// Hardcoded, fact-checked Top 10 datasets. No dynamic/generated data.
export const TOP10_QUESTIONS: Top10Question[] = [
  {
    id: "ucl-alltime",
    title: "Top 10 All-Time Top Scorers — UEFA Champions League",
    list: [
      {
        rank: 1,
        name: "Cristiano Ronaldo",
        flag: "🇵🇹"
      },
      {
        rank: 2,
        name: "Lionel Messi",
        flag: "🇦🇷"
      },
      {
        rank: 3,
        name: "Robert Lewandowski",
        flag: "🇵🇱"
      },
      {
        rank: 4,
        name: "Karim Benzema",
        flag: "🇫🇷"
      },
      {
        rank: 5,
        name: "Raúl",
        flag: "🇪🇸"
      },
      {
        rank: 6,
        name: "Ruud van Nistelrooy",
        flag: "🇳🇱"
      },
      {
        rank: 7,
        name: "Andriy Shevchenko",
        flag: "🇺🇦"
      },
      {
        rank: 8,
        name: "Thomas Müller",
        flag: "🇩🇪"
      },
      {
        rank: 9,
        name: "Thierry Henry",
        flag: "🇫🇷"
      },
      {
        rank: 10,
        name: "Kylian Mbappé",
        flag: "🇫🇷"
      }
    ]
  },
  {
    id: "pl-alltime",
    title: "Top 10 All-Time Top Scorers — Premier League",
    list: [
      {
        rank: 1,
        name: "Alan Shearer",
        flag: "🇬🇧"
      },
      {
        rank: 2,
        name: "Harry Kane",
        flag: "🇬🇧"
      },
      {
        rank: 3,
        name: "Wayne Rooney",
        flag: "🇬🇧"
      },
      {
        rank: 4,
        name: "Andrew Cole",
        flag: "🇬🇧"
      },
      {
        rank: 5,
        name: "Sergio Agüero",
        flag: "🇦🇷"
      },
      {
        rank: 6,
        name: "Frank Lampard",
        flag: "🇬🇧"
      },
      {
        rank: 7,
        name: "Thierry Henry",
        flag: "🇫🇷"
      },
      {
        rank: 8,
        name: "Robbie Fowler",
        flag: "🇬🇧"
      },
      {
        rank: 9,
        name: "Jermain Defoe",
        flag: "🇬🇧"
      },
      {
        rank: 10,
        name: "Mohamed Salah",
        flag: "🇪🇬"
      }
    ]
  },
  {
    id: "ballon-dor",
    title: "Top 10 Most Wins All-Time — Ballon d'Or",
    list: [
      {
        rank: 1,
        name: "Lionel Messi",
        flag: "🇦🇷"
      },
      {
        rank: 2,
        name: "Cristiano Ronaldo",
        flag: "🇵🇹"
      },
      {
        rank: 3,
        name: "Michel Platini",
        flag: "🇫🇷"
      },
      {
        rank: 4,
        name: "Johan Cruyff",
        flag: "🇳🇱"
      },
      {
        rank: 5,
        name: "Marco van Basten",
        flag: "🇳🇱"
      },
      {
        rank: 6,
        name: "Franz Beckenbauer",
        flag: "🇩🇪"
      },
      {
        rank: 7,
        name: "Ronaldo Nazário",
        flag: "🇧🇷"
      },
      {
        rank: 8,
        name: "Alfredo Di Stéfano",
        flag: "🇦🇷"
      },
      {
        rank: 9,
        name: "Kevin Keegan",
        flag: "🇬🇧"
      },
      {
        rank: 10,
        name: "Karl-Heinz Rummenigge",
        flag: "🇩🇪"
      }
    ]
  },
  {
    id: "world-cup",
    title: "Top 10 All-Time Top Scorers — FIFA World Cup",
    list: [
      {
        rank: 1,
        name: "Miroslav Klose",
        flag: "🇩🇪"
      },
      {
        rank: 2,
        name: "Ronaldo Nazário",
        flag: "🇧🇷"
      },
      {
        rank: 3,
        name: "Gerd Müller",
        flag: "🇩🇪"
      },
      {
        rank: 4,
        name: "Just Fontaine",
        flag: "🇫🇷"
      },
      {
        rank: 5,
        name: "Pelé",
        flag: "🇧🇷"
      },
      {
        rank: 6,
        name: "Jürgen Klinsmann",
        flag: "🇩🇪"
      },
      {
        rank: 7,
        name: "Sándor Kocsis",
        flag: "🇭🇺"
      },
      {
        rank: 8,
        name: "Gabriel Batistuta",
        flag: "🇦🇷"
      },
      {
        rank: 9,
        name: "Gary Lineker",
        flag: "🇬🇧"
      },
      {
        rank: 10,
        name: "Helmut Rahn",
        flag: "🇩🇪"
      }
    ]
  },
  {
    id: "most-expensive",
    title: "Top 10 Highest Fees Ever — Football Transfers",
    list: [
      {
        rank: 1,
        name: "Neymar",
        flag: "🇧🇷"
      },
      {
        rank: 2,
        name: "Kylian Mbappé",
        flag: "🇫🇷"
      },
      {
        rank: 3,
        name: "João Félix",
        flag: "🇵🇹"
      },
      {
        rank: 4,
        name: "Enzo Fernández",
        flag: "🇦🇷"
      },
      {
        rank: 5,
        name: "Antoine Griezmann",
        flag: "🇫🇷"
      },
      {
        rank: 6,
        name: "Jack Grealish",
        flag: "🇬🇧"
      },
      {
        rank: 7,
        name: "Cristiano Ronaldo",
        flag: "🇵🇹"
      },
      {
        rank: 8,
        name: "Eden Hazard",
        flag: "🇧🇪"
      },
      {
        rank: 9,
        name: "Declan Rice",
        flag: "🇬🇧"
      },
      {
        rank: 10,
        name: "Jude Bellingham",
        flag: "🇬🇧"
      }
    ]
  },
  {
    id: "la-liga-2324",
    title: "Top Scorers — La Liga 2023/24",
    list: [
      {
        rank: 1,
        name: "Artem Dovbyk",
        flag: "🇺🇦"
      },
      {
        rank: 2,
        name: "Alexander Sørloth",
        flag: "🇳🇴"
      },
      {
        rank: 3,
        name: "Jude Bellingham",
        flag: "🇬🇧"
      },
      {
        rank: 4,
        name: "Robert Lewandowski",
        flag: "🇵🇱"
      },
      {
        rank: 5,
        name: "Ante Budimir",
        flag: "🇭🇷"
      },
      {
        rank: 6,
        name: "Vinicius Jr",
        flag: "🇧🇷"
      },
      {
        rank: 7,
        name: "Borja Mayoral",
        flag: "🇪🇸"
      },
      {
        rank: 8,
        name: "Álvaro Morata",
        flag: "🇪🇸"
      },
      {
        rank: 9,
        name: "Youssef En-Nesyri",
        flag: "🇲🇦"
      },
      {
        rank: 10,
        name: "Gorka Guruzeta",
        flag: "🇪🇸"
      }
    ]
  },
  {
    id: "serie-a-alltime",
    title: "Top 10 All-Time Top Scorers — Serie A",
    list: [
      {
        rank: 1,
        name: "Silvio Piola",
        flag: "🇮🇹"
      },
      {
        rank: 2,
        name: "Francesco Totti",
        flag: "🇮🇹"
      },
      {
        rank: 3,
        name: "Gunnar Nordahl",
        flag: "🇸🇪"
      },
      {
        rank: 4,
        name: "Giuseppe Meazza",
        flag: "🇮🇹"
      },
      {
        rank: 5,
        name: "Antonio Di Natale",
        flag: "🇮🇹"
      },
      {
        rank: 6,
        name: "Roberto Baggio",
        flag: "🇮🇹"
      },
      {
        rank: 7,
        name: "Ciro Immobile",
        flag: "🇮🇹"
      },
      {
        rank: 8,
        name: "Alessandro Del Piero",
        flag: "🇮🇹"
      },
      {
        rank: 9,
        name: "Alberto Gilardino",
        flag: "🇮🇹"
      },
      {
        rank: 10,
        name: "Gabriel Batistuta",
        flag: "🇦🇷"
      }
    ]
  },
  {
    id: "bundesliga-alltime",
    title: "Top 10 All-Time Top Scorers — Bundesliga",
    list: [
      {
        rank: 1,
        name: "Gerd Müller",
        flag: "🇩🇪"
      },
      {
        rank: 2,
        name: "Robert Lewandowski",
        flag: "🇵🇱"
      },
      {
        rank: 3,
        name: "Klaus Fischer",
        flag: "🇩🇪"
      },
      {
        rank: 4,
        name: "Jupp Heynckes",
        flag: "🇩🇪"
      },
      {
        rank: 5,
        name: "Manfred Burgsmüller",
        flag: "🇩🇪"
      },
      {
        rank: 6,
        name: "Claudio Pizarro",
        flag: "🇵🇪"
      },
      {
        rank: 7,
        name: "Ulf Kirsten",
        flag: "🇩🇪"
      },
      {
        rank: 8,
        name: "Stefan Kuntz",
        flag: "🇩🇪"
      },
      {
        rank: 9,
        name: "Dieter Müller",
        flag: "🇩🇪"
      },
      {
        rank: 10,
        name: "Thomas Allofs",
        flag: "🇩🇪"
      }
    ]
  },
  {
    id: "ligue1-alltime",
    title: "Top 10 All-Time Top Scorers — Ligue 1",
    list: [
      {
        rank: 1,
        name: "Delio Onnis",
        flag: "🇦🇷"
      },
      {
        rank: 2,
        name: "Bernard Lacombe",
        flag: "🇫🇷"
      },
      {
        rank: 3,
        name: "Thierry Henry",
        flag: "🇫🇷"
      },
      {
        rank: 4,
        name: "Roger Courtois",
        flag: "🇫🇷"
      },
      {
        rank: 5,
        name: "Stéphane Biakolo",
        flag: "🇫🇷"
      },
      {
        rank: 6,
        name: "Carlos Bianchi",
        flag: "🇦🇷"
      },
      {
        rank: 7,
        name: "Gunnar Andersson",
        flag: "🇸🇪"
      },
      {
        rank: 8,
        name: "Safet Sušić",
        flag: "🇧🇦"
      },
      {
        rank: 9,
        name: "Jean-Pierre Papin",
        flag: "🇫🇷"
      },
      {
        rank: 10,
        name: "Kylian Mbappé",
        flag: "🇫🇷"
      }
    ]
  },
  {
    id: "ucl-2324",
    title: "Top Scorers — UEFA Champions League 2023/24",
    list: [
      {
        rank: 1,
        name: "Harry Kane",
        flag: "🇬🇧"
      },
      {
        rank: 2,
        name: "Kylian Mbappé",
        flag: "🇫🇷"
      },
      {
        rank: 3,
        name: "Erling Haaland",
        flag: "🇳🇴"
      },
      {
        rank: 4,
        name: "Antoine Griezmann",
        flag: "🇫🇷"
      },
      {
        rank: 5,
        name: "Rodrygo",
        flag: "🇧🇷"
      },
      {
        rank: 6,
        name: "Vinicius Jr",
        flag: "🇧🇷"
      },
      {
        rank: 7,
        name: "Jude Bellingham",
        flag: "🇬🇧"
      },
      {
        rank: 8,
        name: "Álvaro Morata",
        flag: "🇪🇸"
      },
      {
        rank: 9,
        name: "Raphinha",
        flag: "🇧🇷"
      },
      {
        rank: 10,
        name: "Phil Foden",
        flag: "🇬🇧"
      }
    ]
  },
  {
    id: "euro-alltime",
    title: "Top 10 All-Time Top Scorers — UEFA European Championship",
    list: [
      {
        rank: 1,
        name: "Cristiano Ronaldo",
        flag: "🇵🇹"
      },
      {
        rank: 2,
        name: "Michel Platini",
        flag: "🇫🇷"
      },
      {
        rank: 3,
        name: "Alan Shearer",
        flag: "🇬🇧"
      },
      {
        rank: 4,
        name: "Antoine Griezmann",
        flag: "🇫🇷"
      },
      {
        rank: 5,
        name: "Álvaro Morata",
        flag: "🇪🇸"
      },
      {
        rank: 6,
        name: "Patrik Schick",
        flag: "🇨🇿"
      },
      {
        rank: 7,
        name: "Romelu Lukaku",
        flag: "🇧🇪"
      },
      {
        rank: 8,
        name: "Harry Kane",
        flag: "🇬🇧"
      },
      {
        rank: 9,
        name: "Nuno Gomes",
        flag: "🇵🇹"
      },
      {
        rank: 10,
        name: "Zinedine Zidane",
        flag: "🇫🇷"
      }
    ]
  },
  {
    id: "copa-alltime",
    title: "Top 10 All-Time Top Scorers — Copa América",
    list: [
      {
        rank: 1,
        name: "Norberto Méndez",
        flag: "🇦🇷"
      },
      {
        rank: 2,
        name: "Severino Varela",
        flag: "🇺🇾"
      },
      {
        rank: 3,
        name: "Eduardo Vargas",
        flag: "🇨🇱"
      },
      {
        rank: 4,
        name: "Lionel Messi",
        flag: "🇦🇷"
      },
      {
        rank: 5,
        name: "Pelé",
        flag: "🇧🇷"
      },
      {
        rank: 6,
        name: "Gabriel Batistuta",
        flag: "🇦🇷"
      },
      {
        rank: 7,
        name: "Zizinho",
        flag: "🇧🇷"
      },
      {
        rank: 8,
        name: "Paolo Guerrero",
        flag: "🇵🇪"
      },
      {
        rank: 9,
        name: "Ademir",
        flag: "🇧🇷"
      },
      {
        rank: 10,
        name: "Jair da Rosa Pinto",
        flag: "🇧🇷"
      }
    ]
  },
  {
    id: "afcon-alltime",
    title: "Top 10 All-Time Top Scorers — Africa Cup of Nations",
    list: [
      {
        rank: 1,
        name: "Samuel Eto'o",
        flag: "🇨🇲"
      },
      {
        rank: 2,
        name: "Laurent Pokou",
        flag: "🇨🇮"
      },
      {
        rank: 3,
        name: "Rashidi Yekini",
        flag: "🇳🇬"
      },
      {
        rank: 4,
        name: "Hassan El-Shazly",
        flag: "🇪🇬"
      },
      {
        rank: 5,
        name: "Didier Drogba",
        flag: "🇨🇮"
      },
      {
        rank: 6,
        name: "Hossam Hassan",
        flag: "🇪🇬"
      },
      {
        rank: 7,
        name: "Benni McCarthy",
        flag: "🇿🇦"
      },
      {
        rank: 8,
        name: "Manucho",
        flag: "🇦🇴"
      },
      {
        rank: 9,
        name: "Moumouni Dagano",
        flag: "🇧🇫"
      },
      {
        rank: 10,
        name: "André Ayew",
        flag: "🇬🇭"
      }
    ]
  },
  {
    id: "pl-assists-alltime",
    title: "Top 10 All-Time Top Assists — Premier League",
    list: [
      {
        rank: 1,
        name: "Ryan Giggs",
        flag: "🇬🇧"
      },
      {
        rank: 2,
        name: "Kevin De Bruyne",
        flag: "🇧🇪"
      },
      {
        rank: 3,
        name: "Cesc Fàbregas",
        flag: "🇪🇸"
      },
      {
        rank: 4,
        name: "Wayne Rooney",
        flag: "🇬🇧"
      },
      {
        rank: 5,
        name: "Frank Lampard",
        flag: "🇬🇧"
      },
      {
        rank: 6,
        name: "Thierry Henry",
        flag: "🇫🇷"
      },
      {
        rank: 7,
        name: "Dennis Bergkamp",
        flag: "🇳🇱"
      },
      {
        rank: 8,
        name: "James Milner",
        flag: "🇬🇧"
      },
      {
        rank: 9,
        name: "David Beckham",
        flag: "🇬🇧"
      },
      {
        rank: 10,
        name: "Mohamed Salah",
        flag: "🇪🇬"
      }
    ]
  },
  {
    id: "ballon-dor-2024",
    title: "Top 10 Voting — Ballon d'Or 2024",
    list: [
      {
        rank: 1,
        name: "Rodri",
        flag: "🇪🇸"
      },
      {
        rank: 2,
        name: "Vinicius Jr",
        flag: "🇧🇷"
      },
      {
        rank: 3,
        name: "Jude Bellingham",
        flag: "🇬🇧"
      },
      {
        rank: 4,
        name: "Dani Carvajal",
        flag: "🇪🇸"
      },
      {
        rank: 5,
        name: "Lamine Yamal",
        flag: "🇪🇸"
      },
      {
        rank: 6,
        name: "Kylian Mbappé",
        flag: "🇫🇷"
      },
      {
        rank: 7,
        name: "Erling Haaland",
        flag: "🇳🇴"
      },
      {
        rank: 8,
        name: "Lautaro Martínez",
        flag: "🇦🇷"
      },
      {
        rank: 9,
        name: "Toni Kroos",
        flag: "🇩🇪"
      },
      {
        rank: 10,
        name: "Harry Kane",
        flag: "🇬🇧"
      }
    ]
  },
  {
    id: "ballon-dor-2023",
    title: "Top 10 Voting — Ballon d'Or 2023",
    list: [
      {
        rank: 1,
        name: "Lionel Messi",
        flag: "🇦🇷"
      },
      {
        rank: 2,
        name: "Erling Haaland",
        flag: "🇳🇴"
      },
      {
        rank: 3,
        name: "Kylian Mbappé",
        flag: "🇫🇷"
      },
      {
        rank: 4,
        name: "Kevin De Bruyne",
        flag: "🇧🇪"
      },
      {
        rank: 5,
        name: "Rodri",
        flag: "🇪🇸"
      },
      {
        rank: 6,
        name: "Vinicius Jr",
        flag: "🇧🇷"
      },
      {
        rank: 7,
        name: "Julián Álvarez",
        flag: "🇦🇷"
      },
      {
        rank: 8,
        name: "Victor Osimhen",
        flag: "🇳🇬"
      },
      {
        rank: 9,
        name: "Bernardo Silva",
        flag: "🇵🇹"
      },
      {
        rank: 10,
        name: "Luka Modrić",
        flag: "🇭🇷"
      }
    ]
  },
  {
    id: "ballon-dor-2022",
    title: "Top 10 Voting — Ballon d'Or 2022",
    list: [
      {
        rank: 1,
        name: "Karim Benzema",
        flag: "🇫🇷"
      },
      {
        rank: 2,
        name: "Sadio Mané",
        flag: "🇸🇳"
      },
      {
        rank: 3,
        name: "Kevin De Bruyne",
        flag: "🇧🇪"
      },
      {
        rank: 4,
        name: "Robert Lewandowski",
        flag: "🇵🇱"
      },
      {
        rank: 5,
        name: "Mohamed Salah",
        flag: "🇪🇬"
      },
      {
        rank: 6,
        name: "Kylian Mbappé",
        flag: "🇫🇷"
      },
      {
        rank: 7,
        name: "Thibaut Courtois",
        flag: "🇧🇪"
      },
      {
        rank: 8,
        name: "Vinicius Jr",
        flag: "🇧🇷"
      },
      {
        rank: 9,
        name: "Luka Modrić",
        flag: "🇭🇷"
      },
      {
        rank: 10,
        name: "Erling Haaland",
        flag: "🇳🇴"
      }
    ]
  },
  {
    id: "ballon-dor-2021",
    title: "Top 10 Voting — Ballon d'Or 2021",
    list: [
      {
        rank: 1,
        name: "Lionel Messi",
        flag: "🇦🇷"
      },
      {
        rank: 2,
        name: "Robert Lewandowski",
        flag: "🇵🇱"
      },
      {
        rank: 3,
        name: "Jorginho",
        flag: "🇮🇹"
      },
      {
        rank: 4,
        name: "Karim Benzema",
        flag: "🇫🇷"
      },
      {
        rank: 5,
        name: "N'Golo Kanté",
        flag: "🇫🇷"
      },
      {
        rank: 6,
        name: "Cristiano Ronaldo",
        flag: "🇵🇹"
      },
      {
        rank: 7,
        name: "Mohamed Salah",
        flag: "🇪🇬"
      },
      {
        rank: 8,
        name: "Kevin De Bruyne",
        flag: "🇧🇪"
      },
      {
        rank: 9,
        name: "Kylian Mbappé",
        flag: "🇫🇷"
      },
      {
        rank: 10,
        name: "Gianluigi Donnarumma",
        flag: "🇮🇹"
      }
    ]
  },
  {
    id: "ballon-dor-2019",
    title: "Top 10 Voting — Ballon d'Or 2019",
    list: [
      {
        rank: 1,
        name: "Lionel Messi",
        flag: "🇦🇷"
      },
      {
        rank: 2,
        name: "Virgil van Dijk",
        flag: "🇳🇱"
      },
      {
        rank: 3,
        name: "Cristiano Ronaldo",
        flag: "🇵🇹"
      },
      {
        rank: 4,
        name: "Sadio Mané",
        flag: "🇸🇳"
      },
      {
        rank: 5,
        name: "Mohamed Salah",
        flag: "🇪🇬"
      },
      {
        rank: 6,
        name: "Kylian Mbappé",
        flag: "🇫🇷"
      },
      {
        rank: 7,
        name: "Alisson Becker",
        flag: "🇧🇷"
      },
      {
        rank: 8,
        name: "Robert Lewandowski",
        flag: "🇵🇱"
      },
      {
        rank: 9,
        name: "Bernardo Silva",
        flag: "🇵🇹"
      },
      {
        rank: 10,
        name: "Riyad Mahrez",
        flag: "🇩🇿"
      }
    ]
  },
  {
    id: "ballon-dor-2018",
    title: "Top 10 Voting — Ballon d'Or 2018",
    list: [
      {
        rank: 1,
        name: "Luka Modrić",
        flag: "🇭🇷"
      },
      {
        rank: 2,
        name: "Cristiano Ronaldo",
        flag: "🇵🇹"
      },
      {
        rank: 3,
        name: "Antoine Griezmann",
        flag: "🇫🇷"
      },
      {
        rank: 4,
        name: "Kylian Mbappé",
        flag: "🇫🇷"
      },
      {
        rank: 5,
        name: "Lionel Messi",
        flag: "🇦🇷"
      },
      {
        rank: 6,
        name: "Mohamed Salah",
        flag: "🇪🇬"
      },
      {
        rank: 7,
        name: "Raphaël Varane",
        flag: "🇫🇷"
      },
      {
        rank: 8,
        name: "Eden Hazard",
        flag: "🇧🇪"
      },
      {
        rank: 9,
        name: "Kevin De Bruyne",
        flag: "🇧🇪"
      },
      {
        rank: 10,
        name: "Harry Kane",
        flag: "🇬🇧"
      }
    ]
  },
  {
    id: "pl-2324",
    title: "Top Scorers — Premier League 2023/24",
    list: [
      {
        rank: 1,
        name: "Erling Haaland",
        flag: "🇳🇴"
      },
      {
        rank: 2,
        name: "Cole Palmer",
        flag: "🇬🇧"
      },
      {
        rank: 3,
        name: "Alexander Isak",
        flag: "🇸🇪"
      },
      {
        rank: 4,
        name: "Phil Foden",
        flag: "🇬🇧"
      },
      {
        rank: 5,
        name: "Dominic Solanke",
        flag: "🇬🇧"
      },
      {
        rank: 6,
        name: "Ollie Watkins",
        flag: "🇬🇧"
      },
      {
        rank: 7,
        name: "Mohamed Salah",
        flag: "🇪🇬"
      },
      {
        rank: 8,
        name: "Son Heung-min",
        flag: "🇰🇷"
      },
      {
        rank: 9,
        name: "Bukayo Saka",
        flag: "🇬🇧"
      },
      {
        rank: 10,
        name: "Jarrod Bowen",
        flag: "🇬🇧"
      }
    ]
  },
  {
    id: "pl-2223",
    title: "Top Scorers — Premier League 2022/23",
    list: [
      {
        rank: 1,
        name: "Erling Haaland",
        flag: "🇳🇴"
      },
      {
        rank: 2,
        name: "Harry Kane",
        flag: "🇬🇧"
      },
      {
        rank: 3,
        name: "Ivan Toney",
        flag: "🇬🇧"
      },
      {
        rank: 4,
        name: "Mohamed Salah",
        flag: "🇪🇬"
      },
      {
        rank: 5,
        name: "Callum Wilson",
        flag: "🇬🇧"
      },
      {
        rank: 6,
        name: "Marcus Rashford",
        flag: "🇬🇧"
      },
      {
        rank: 7,
        name: "Martin Ødegaard",
        flag: "🇳🇴"
      },
      {
        rank: 8,
        name: "Ollie Watkins",
        flag: "🇬🇧"
      },
      {
        rank: 9,
        name: "Alexander Isak",
        flag: "🇸🇪"
      },
      {
        rank: 10,
        name: "Rodrigo",
        flag: "🇪🇸"
      }
    ]
  },
  {
    id: "pl-2122",
    title: "Top Scorers — Premier League 2021/22",
    list: [
      {
        rank: 1,
        name: "Mohamed Salah",
        flag: "🇪🇬"
      },
      {
        rank: 2,
        name: "Son Heung-min",
        flag: "🇰🇷"
      },
      {
        rank: 3,
        name: "Cristiano Ronaldo",
        flag: "🇵🇹"
      },
      {
        rank: 4,
        name: "Harry Kane",
        flag: "🇬🇧"
      },
      {
        rank: 5,
        name: "Sadio Mané",
        flag: "🇸🇳"
      },
      {
        rank: 6,
        name: "Kevin De Bruyne",
        flag: "🇧🇪"
      },
      {
        rank: 7,
        name: "Jamie Vardy",
        flag: "🇬🇧"
      },
      {
        rank: 8,
        name: "Diogo Jota",
        flag: "🇵🇹"
      },
      {
        rank: 9,
        name: "Wilfried Zaha",
        flag: "🇨🇮"
      },
      {
        rank: 10,
        name: "Raheem Sterling",
        flag: "🇬🇧"
      }
    ]
  },
  {
    id: "pl-2021",
    title: "Top Scorers — Premier League 2020/21",
    list: [
      {
        rank: 1,
        name: "Harry Kane",
        flag: "🇬🇧"
      },
      {
        rank: 2,
        name: "Mohamed Salah",
        flag: "🇪🇬"
      },
      {
        rank: 3,
        name: "Bruno Fernandes",
        flag: "🇵🇹"
      },
      {
        rank: 4,
        name: "Patrick Bamford",
        flag: "🇬🇧"
      },
      {
        rank: 5,
        name: "Son Heung-min",
        flag: "🇰🇷"
      },
      {
        rank: 6,
        name: "Dominic Calvert-Lewin",
        flag: "🇬🇧"
      },
      {
        rank: 7,
        name: "Jamie Vardy",
        flag: "🇬🇧"
      },
      {
        rank: 8,
        name: "Ollie Watkins",
        flag: "🇬🇧"
      },
      {
        rank: 9,
        name: "Riyad Mahrez",
        flag: "🇩🇿"
      },
      {
        rank: 10,
        name: "Alexandre Lacazette",
        flag: "🇫🇷"
      }
    ]
  },
  {
    id: "la-liga-2223",
    title: "Top Scorers — La Liga 2022/23",
    list: [
      {
        rank: 1,
        name: "Robert Lewandowski",
        flag: "🇵🇱"
      },
      {
        rank: 2,
        name: "Karim Benzema",
        flag: "🇫🇷"
      },
      {
        rank: 3,
        name: "Joselu",
        flag: "🇪🇸"
      },
      {
        rank: 4,
        name: "Antoine Griezmann",
        flag: "🇫🇷"
      },
      {
        rank: 5,
        name: "Vinicius Jr",
        flag: "🇧🇷"
      },
      {
        rank: 6,
        name: "Borja Iglesias",
        flag: "🇪🇸"
      },
      {
        rank: 7,
        name: "Valentín Castellanos",
        flag: "🇦🇷"
      },
      {
        rank: 8,
        name: "Enes Ünal",
        flag: "🇹🇷"
      },
      {
        rank: 9,
        name: "Álvaro Morata",
        flag: "🇪🇸"
      },
      {
        rank: 10,
        name: "Alexander Sørloth",
        flag: "🇳🇴"
      }
    ]
  },
  {
    id: "serie-a-2324",
    title: "Top Scorers — Serie A 2023/24",
    list: [
      {
        rank: 1,
        name: "Lautaro Martínez",
        flag: "🇦🇷"
      },
      {
        rank: 2,
        name: "Dusan Vlahovic",
        flag: "🇷🇸"
      },
      {
        rank: 3,
        name: "Victor Osimhen",
        flag: "🇳🇬"
      },
      {
        rank: 4,
        name: "Joshua Zirkzee",
        flag: "🇳🇱"
      },
      {
        rank: 5,
        name: "Albert Gudmundsson",
        flag: "🇮🇸"
      },
      {
        rank: 6,
        name: "Romelu Lukaku",
        flag: "🇧🇪"
      },
      {
        rank: 7,
        name: "Paulo Dybala",
        flag: "🇦🇷"
      },
      {
        rank: 8,
        name: "Marcus Thuram",
        flag: "🇫🇷"
      },
      {
        rank: 9,
        name: "Olivier Giroud",
        flag: "🇫🇷"
      },
      {
        rank: 10,
        name: "Rafael Leão",
        flag: "🇵🇹"
      }
    ]
  },
  {
    id: "serie-a-2223",
    title: "Top Scorers — Serie A 2022/23",
    list: [
      {
        rank: 1,
        name: "Victor Osimhen",
        flag: "🇳🇬"
      },
      {
        rank: 2,
        name: "Lautaro Martínez",
        flag: "🇦🇷"
      },
      {
        rank: 3,
        name: "Rafael Leão",
        flag: "🇵🇹"
      },
      {
        rank: 4,
        name: "Ademola Lookman",
        flag: "🇳🇬"
      },
      {
        rank: 5,
        name: "Olivier Giroud",
        flag: "🇫🇷"
      },
      {
        rank: 6,
        name: "Khvicha Kvaratskhelia",
        flag: "🇬🇪"
      },
      {
        rank: 7,
        name: "Paulo Dybala",
        flag: "🇦🇷"
      },
      {
        rank: 8,
        name: "Ciro Immobile",
        flag: "🇮🇹"
      },
      {
        rank: 9,
        name: "Domenico Berardi",
        flag: "🇮🇹"
      },
      {
        rank: 10,
        name: "Dusan Vlahovic",
        flag: "🇷🇸"
      }
    ]
  },
  {
    id: "bundesliga-2324",
    title: "Top Scorers — Bundesliga 2023/24",
    list: [
      {
        rank: 1,
        name: "Harry Kane",
        flag: "🇬🇧"
      },
      {
        rank: 2,
        name: "Serhou Guirassy",
        flag: "🇬🇳"
      },
      {
        rank: 3,
        name: "Loïs Openda",
        flag: "🇧🇪"
      },
      {
        rank: 4,
        name: "Deniz Undav",
        flag: "🇩🇪"
      },
      {
        rank: 5,
        name: "Ermedin Demirović",
        flag: "🇧🇦"
      },
      {
        rank: 6,
        name: "Victor Boniface",
        flag: "🇳🇬"
      },
      {
        rank: 7,
        name: "Maximilian Beier",
        flag: "🇩🇪"
      },
      {
        rank: 8,
        name: "André Silva",
        flag: "🇵🇹"
      },
      {
        rank: 9,
        name: "Florian Wirtz",
        flag: "🇩🇪"
      },
      {
        rank: 10,
        name: "Jamal Musiala",
        flag: "🇩🇪"
      }
    ]
  },
  {
    id: "ligue1-2324",
    title: "Top Scorers — Ligue 1 2023/24",
    list: [
      {
        rank: 1,
        name: "Kylian Mbappé",
        flag: "🇫🇷"
      },
      {
        rank: 2,
        name: "Alexandre Lacazette",
        flag: "🇫🇷"
      },
      {
        rank: 3,
        name: "Jonathan David",
        flag: "🇨🇦"
      },
      {
        rank: 4,
        name: "Pierre-Emerick Aubameyang",
        flag: "🇬🇦"
      },
      {
        rank: 5,
        name: "Wissam Ben Yedder",
        flag: "🇫🇷"
      },
      {
        rank: 6,
        name: "Terem Moffi",
        flag: "🇳🇬"
      },
      {
        rank: 7,
        name: "Georges Mikautadze",
        flag: "🇬🇪"
      },
      {
        rank: 8,
        name: "Andy Delort",
        flag: "🇩🇿"
      },
      {
        rank: 9,
        name: "Arnaud Kalimuendo",
        flag: "🇫🇷"
      },
      {
        rank: 10,
        name: "Gaëtan Laborde",
        flag: "🇫🇷"
      }
    ]
  },
  {
    id: "wc-2022",
    title: "Top Scorers — FIFA World Cup 2022",
    list: [
      {
        rank: 1,
        name: "Kylian Mbappé",
        flag: "🇫🇷"
      },
      {
        rank: 2,
        name: "Lionel Messi",
        flag: "🇦🇷"
      },
      {
        rank: 3,
        name: "Julián Álvarez",
        flag: "🇦🇷"
      },
      {
        rank: 4,
        name: "Olivier Giroud",
        flag: "🇫🇷"
      },
      {
        rank: 5,
        name: "Richarlison",
        flag: "🇧🇷"
      },
      {
        rank: 6,
        name: "Bukayo Saka",
        flag: "🇬🇧"
      },
      {
        rank: 7,
        name: "Marcus Rashford",
        flag: "🇬🇧"
      },
      {
        rank: 8,
        name: "Cody Gakpo",
        flag: "🇳🇱"
      },
      {
        rank: 9,
        name: "Álvaro Morata",
        flag: "🇪🇸"
      },
      {
        rank: 10,
        name: "Valentin Castellanos",
        flag: "🇦🇷"
      }
    ]
  },
  {
    id: "wc-2018",
    title: "Top Scorers — FIFA World Cup 2018",
    list: [
      {
        rank: 1,
        name: "Harry Kane",
        flag: "🇬🇧"
      },
      {
        rank: 2,
        name: "Antoine Griezmann",
        flag: "🇫🇷"
      },
      {
        rank: 3,
        name: "Romelu Lukaku",
        flag: "🇧🇪"
      },
      {
        rank: 4,
        name: "Cristiano Ronaldo",
        flag: "🇵🇹"
      },
      {
        rank: 5,
        name: "Denis Cheryshev",
        flag: "🇷🇺"
      },
      {
        rank: 6,
        name: "Kylian Mbappé",
        flag: "🇫🇷"
      },
      {
        rank: 7,
        name: "Eden Hazard",
        flag: "🇧🇪"
      },
      {
        rank: 8,
        name: "Mario Mandžukić",
        flag: "🇭🇷"
      },
      {
        rank: 9,
        name: "Ivan Perišić",
        flag: "🇭🇷"
      },
      {
        rank: 10,
        name: "Artem Dzyuba",
        flag: "🇷🇺"
      }
    ]
  },
  {
    id: "wc-2014",
    title: "Top Scorers — FIFA World Cup 2014",
    list: [
      {
        rank: 1,
        name: "James Rodríguez",
        flag: "🇨🇴"
      },
      {
        rank: 2,
        name: "Thomas Müller",
        flag: "🇩🇪"
      },
      {
        rank: 3,
        name: "Lionel Messi",
        flag: "🇦🇷"
      },
      {
        rank: 4,
        name: "Neymar",
        flag: "🇧🇷"
      },
      {
        rank: 5,
        name: "Robin van Persie",
        flag: "🇳🇱"
      },
      {
        rank: 6,
        name: "Enner Valencia",
        flag: "🇪🇨"
      },
      {
        rank: 7,
        name: "Karim Benzema",
        flag: "🇫🇷"
      },
      {
        rank: 8,
        name: "André Schürrle",
        flag: "🇩🇪"
      },
      {
        rank: 9,
        name: "Arjen Robben",
        flag: "🇳🇱"
      },
      {
        rank: 10,
        name: "Xherdan Shaqiri",
        flag: "🇨🇭"
      }
    ]
  },
  {
    id: "ucl-2223",
    title: "Top Scorers — UEFA Champions League 2022/23",
    list: [
      {
        rank: 1,
        name: "Erling Haaland",
        flag: "🇳🇴"
      },
      {
        rank: 2,
        name: "Mohamed Salah",
        flag: "🇪🇬"
      },
      {
        rank: 3,
        name: "Rafael Leão",
        flag: "🇵🇹"
      },
      {
        rank: 4,
        name: "Kylian Mbappé",
        flag: "🇫🇷"
      },
      {
        rank: 5,
        name: "Vinicius Jr",
        flag: "🇧🇷"
      },
      {
        rank: 6,
        name: "Rodrygo",
        flag: "🇧🇷"
      },
      {
        rank: 7,
        name: "Robert Lewandowski",
        flag: "🇵🇱"
      },
      {
        rank: 8,
        name: "Mehdi Taremi",
        flag: "🇮🇷"
      },
      {
        rank: 9,
        name: "André Silva",
        flag: "🇵🇹"
      },
      {
        rank: 10,
        name: "Olivier Giroud",
        flag: "🇫🇷"
      }
    ]
  },
  {
    id: "ucl-2122",
    title: "Top Scorers — UEFA Champions League 2021/22",
    list: [
      {
        rank: 1,
        name: "Karim Benzema",
        flag: "🇫🇷"
      },
      {
        rank: 2,
        name: "Robert Lewandowski",
        flag: "🇵🇱"
      },
      {
        rank: 3,
        name: "Sébastien Haller",
        flag: "🇨🇮"
      },
      {
        rank: 4,
        name: "Mohamed Salah",
        flag: "🇪🇬"
      },
      {
        rank: 5,
        name: "Christopher Nkunku",
        flag: "🇫🇷"
      },
      {
        rank: 6,
        name: "Cristiano Ronaldo",
        flag: "🇵🇹"
      },
      {
        rank: 7,
        name: "Kylian Mbappé",
        flag: "🇫🇷"
      },
      {
        rank: 8,
        name: "Darwin Núñez",
        flag: "🇺🇾"
      },
      {
        rank: 9,
        name: "Leroy Sané",
        flag: "🇩🇪"
      },
      {
        rank: 10,
        name: "Arnaut Danjuma",
        flag: "🇳🇱"
      }
    ]
  },
  {
    id: "ucl-assists-alltime",
    title: "Top 10 All-Time Top Assists — UEFA Champions League",
    list: [
      {
        rank: 1,
        name: "Cristiano Ronaldo",
        flag: "🇵🇹"
      },
      {
        rank: 2,
        name: "Lionel Messi",
        flag: "🇦🇷"
      },
      {
        rank: 3,
        name: "Ángel Di María",
        flag: "🇦🇷"
      },
      {
        rank: 4,
        name: "Kevin De Bruyne",
        flag: "🇧🇪"
      },
      {
        rank: 5,
        name: "Neymar",
        flag: "🇧🇷"
      },
      {
        rank: 6,
        name: "Karim Benzema",
        flag: "🇫🇷"
      },
      {
        rank: 7,
        name: "Xavi",
        flag: "🇪🇸"
      },
      {
        rank: 8,
        name: "Ryan Giggs",
        flag: "🇬🇧"
      },
      {
        rank: 9,
        name: "Andrés Iniesta",
        flag: "🇪🇸"
      },
      {
        rank: 10,
        name: "David Beckham",
        flag: "🇬🇧"
      }
    ]
  },
  {
    id: "most-caps",
    title: "Top 10 Most Caps All-Time — International Football",
    list: [
      {
        rank: 1,
        name: "Cristiano Ronaldo",
        flag: "🇵🇹"
      },
      {
        rank: 2,
        name: "Bader Al-Mutawa",
        flag: "🇰🇼"
      },
      {
        rank: 3,
        name: "Soh Chin Ann",
        flag: "🇲🇾"
      },
      {
        rank: 4,
        name: "Ahmed Hassan",
        flag: "🇪🇬"
      },
      {
        rank: 5,
        name: "Lionel Messi",
        flag: "🇦🇷"
      },
      {
        rank: 6,
        name: "Sergio Ramos",
        flag: "🇪🇸"
      },
      {
        rank: 7,
        name: "Andrés Guardado",
        flag: "🇲🇽"
      },
      {
        rank: 8,
        name: "Gianluigi Buffon",
        flag: "🇮🇹"
      },
      {
        rank: 9,
        name: "Iker Casillas",
        flag: "🇪🇸"
      },
      {
        rank: 10,
        name: "Paolo Maldini",
        flag: "🇮🇹"
      }
    ]
  },
  {
    id: "golden-boot-pl",
    title: "Top 10 Most Wins — Premier League Golden Boot",
    list: [
      {
        rank: 1,
        name: "Thierry Henry",
        flag: "🇫🇷"
      },
      {
        rank: 2,
        name: "Alan Shearer",
        flag: "🇬🇧"
      },
      {
        rank: 3,
        name: "Harry Kane",
        flag: "🇬🇧"
      },
      {
        rank: 4,
        name: "Mohamed Salah",
        flag: "🇪🇬"
      },
      {
        rank: 5,
        name: "Jimmy Floyd Hasselbaink",
        flag: "🇳🇱"
      },
      {
        rank: 6,
        name: "Michael Owen",
        flag: "🇬🇧"
      },
      {
        rank: 7,
        name: "Robin van Persie",
        flag: "🇳🇱"
      },
      {
        rank: 8,
        name: "Didier Drogba",
        flag: "🇨🇮"
      },
      {
        rank: 9,
        name: "Ruud van Nistelrooy",
        flag: "🇳🇱"
      },
      {
        rank: 10,
        name: "Erling Haaland",
        flag: "🇳🇴"
      }
    ]
  },
  {
    id: "clean-sheets-pl",
    title: "Top 10 Most Clean Sheets (GK) — Premier League",
    list: [
      {
        rank: 1,
        name: "Petr Čech",
        flag: "🇨🇿"
      },
      {
        rank: 2,
        name: "David James",
        flag: "🇬🇧"
      },
      {
        rank: 3,
        name: "Mark Schwarzer",
        flag: "🇦🇺"
      },
      {
        rank: 4,
        name: "David Seaman",
        flag: "🇬🇧"
      },
      {
        rank: 5,
        name: "Edwin van der Sar",
        flag: "🇳🇱"
      },
      {
        rank: 6,
        name: "Pepe Reina",
        flag: "🇪🇸"
      },
      {
        rank: 7,
        name: "Joe Hart",
        flag: "🇬🇧"
      },
      {
        rank: 8,
        name: "Brad Friedel",
        flag: "🇺🇸"
      },
      {
        rank: 9,
        name: "Tim Howard",
        flag: "🇺🇸"
      },
      {
        rank: 10,
        name: "Hugo Lloris",
        flag: "🇫🇷"
      }
    ]
  },
  {
    id: "most-apps-pl",
    title: "Top 10 Most Appearances — Premier League",
    list: [
      {
        rank: 1,
        name: "Gareth Barry",
        flag: "🇬🇧"
      },
      {
        rank: 2,
        name: "Ryan Giggs",
        flag: "🇬🇧"
      },
      {
        rank: 3,
        name: "Frank Lampard",
        flag: "🇬🇧"
      },
      {
        rank: 4,
        name: "James Milner",
        flag: "🇬🇧"
      },
      {
        rank: 5,
        name: "David James",
        flag: "🇬🇧"
      },
      {
        rank: 6,
        name: "Gary Speed",
        flag: "🇬🇧"
      },
      {
        rank: 7,
        name: "Phil Neville",
        flag: "🇬🇧"
      },
      {
        rank: 8,
        name: "Rio Ferdinand",
        flag: "🇬🇧"
      },
      {
        rank: 9,
        name: "Steven Gerrard",
        flag: "🇬🇧"
      },
      {
        rank: 10,
        name: "Kyle Walker",
        flag: "🇬🇧"
      }
    ]
  },
  {
    id: "pichichi-wins",
    title: "Top 10 Most Wins — La Liga Pichichi",
    list: [
      {
        rank: 1,
        name: "Lionel Messi",
        flag: "🇦🇷"
      },
      {
        rank: 2,
        name: "Telmo Zarra",
        flag: "🇪🇸"
      },
      {
        rank: 3,
        name: "Alfredo Di Stéfano",
        flag: "🇦🇷"
      },
      {
        rank: 4,
        name: "Quini",
        flag: "🇪🇸"
      },
      {
        rank: 5,
        name: "Hugo Sánchez",
        flag: "🇲🇽"
      },
      {
        rank: 6,
        name: "Ferenc Puskás",
        flag: "🇭🇺"
      },
      {
        rank: 7,
        name: "Cristiano Ronaldo",
        flag: "🇵🇹"
      },
      {
        rank: 8,
        name: "Diego Forlán",
        flag: "🇺🇾"
      },
      {
        rank: 9,
        name: "Raúl",
        flag: "🇪🇸"
      },
      {
        rank: 10,
        name: "David Villa",
        flag: "🇪🇸"
      }
    ]
  },
  {
    id: "ballon-dor-2017",
    title: "Top 10 Voting — Ballon d'Or 2017",
    list: [
      {
        rank: 1,
        name: "Cristiano Ronaldo",
        flag: "🇵🇹"
      },
      {
        rank: 2,
        name: "Lionel Messi",
        flag: "🇦🇷"
      },
      {
        rank: 3,
        name: "Neymar",
        flag: "🇧🇷"
      },
      {
        rank: 4,
        name: "Gianluigi Buffon",
        flag: "🇮🇹"
      },
      {
        rank: 5,
        name: "Luka Modrić",
        flag: "🇭🇷"
      },
      {
        rank: 6,
        name: "Sergio Ramos",
        flag: "🇪🇸"
      },
      {
        rank: 7,
        name: "Kylian Mbappé",
        flag: "🇫🇷"
      },
      {
        rank: 8,
        name: "N'Golo Kanté",
        flag: "🇫🇷"
      },
      {
        rank: 9,
        name: "Robert Lewandowski",
        flag: "🇵🇱"
      },
      {
        rank: 10,
        name: "Harry Kane",
        flag: "🇬🇧"
      }
    ]
  },
  {
    id: "ballon-dor-2016",
    title: "Top 10 Voting — Ballon d'Or 2016",
    list: [
      {
        rank: 1,
        name: "Cristiano Ronaldo",
        flag: "🇵🇹"
      },
      {
        rank: 2,
        name: "Lionel Messi",
        flag: "🇦🇷"
      },
      {
        rank: 3,
        name: "Antoine Griezmann",
        flag: "🇫🇷"
      },
      {
        rank: 4,
        name: "Luis Suárez",
        flag: "🇺🇾"
      },
      {
        rank: 5,
        name: "Neymar",
        flag: "🇧🇷"
      },
      {
        rank: 6,
        name: "Gianluigi Buffon",
        flag: "🇮🇹"
      },
      {
        rank: 7,
        name: "Luka Modrić",
        flag: "🇭🇷"
      },
      {
        rank: 8,
        name: "Sergio Ramos",
        flag: "🇪🇸"
      },
      {
        rank: 9,
        name: "Jamie Vardy",
        flag: "🇬🇧"
      },
      {
        rank: 10,
        name: "Riyad Mahrez",
        flag: "🇩🇿"
      }
    ]
  },
  {
    id: "ballon-dor-2015",
    title: "Top 10 Voting — Ballon d'Or 2015",
    list: [
      {
        rank: 1,
        name: "Lionel Messi",
        flag: "🇦🇷"
      },
      {
        rank: 2,
        name: "Cristiano Ronaldo",
        flag: "🇵🇹"
      },
      {
        rank: 3,
        name: "Neymar",
        flag: "🇧🇷"
      },
      {
        rank: 4,
        name: "Robert Lewandowski",
        flag: "🇵🇱"
      },
      {
        rank: 5,
        name: "Luis Suárez",
        flag: "🇺🇾"
      },
      {
        rank: 6,
        name: "Thomas Müller",
        flag: "🇩🇪"
      },
      {
        rank: 7,
        name: "Manuel Neuer",
        flag: "🇩🇪"
      },
      {
        rank: 8,
        name: "Eden Hazard",
        flag: "🇧🇪"
      },
      {
        rank: 9,
        name: "Andrés Iniesta",
        flag: "🇪🇸"
      },
      {
        rank: 10,
        name: "Alexis Sánchez",
        flag: "🇨🇱"
      }
    ]
  },
  {
    id: "ballon-dor-2014",
    title: "Top 10 Voting — Ballon d'Or 2014",
    list: [
      {
        rank: 1,
        name: "Cristiano Ronaldo",
        flag: "🇵🇹"
      },
      {
        rank: 2,
        name: "Lionel Messi",
        flag: "🇦🇷"
      },
      {
        rank: 3,
        name: "Manuel Neuer",
        flag: "🇩🇪"
      },
      {
        rank: 4,
        name: "Arjen Robben",
        flag: "🇳🇱"
      },
      {
        rank: 5,
        name: "Thomas Müller",
        flag: "🇩🇪"
      },
      {
        rank: 6,
        name: "Philipp Lahm",
        flag: "🇩🇪"
      },
      {
        rank: 7,
        name: "Neymar",
        flag: "🇧🇷"
      },
      {
        rank: 8,
        name: "James Rodríguez",
        flag: "🇨🇴"
      },
      {
        rank: 9,
        name: "Toni Kroos",
        flag: "🇩🇪"
      },
      {
        rank: 10,
        name: "Ángel Di María",
        flag: "🇦🇷"
      }
    ]
  },
  {
    id: "ballon-dor-2013",
    title: "Top 10 Voting — Ballon d'Or 2013",
    list: [
      {
        rank: 1,
        name: "Cristiano Ronaldo",
        flag: "🇵🇹"
      },
      {
        rank: 2,
        name: "Lionel Messi",
        flag: "🇦🇷"
      },
      {
        rank: 3,
        name: "Franck Ribéry",
        flag: "🇫🇷"
      },
      {
        rank: 4,
        name: "Arjen Robben",
        flag: "🇳🇱"
      },
      {
        rank: 5,
        name: "Zlatan Ibrahimović",
        flag: "🇸🇪"
      },
      {
        rank: 6,
        name: "Neymar",
        flag: "🇧🇷"
      },
      {
        rank: 7,
        name: "Luis Suárez",
        flag: "🇺🇾"
      },
      {
        rank: 8,
        name: "Thomas Müller",
        flag: "🇩🇪"
      },
      {
        rank: 9,
        name: "Manuel Neuer",
        flag: "🇩🇪"
      },
      {
        rank: 10,
        name: "Gareth Bale",
        flag: "🇬🇧"
      }
    ]
  },
  {
    id: "cal-year-goals",
    title: "Top 10 Most Goals in a Calendar Year — Football Records",
    list: [
      {
        rank: 1,
        name: "Lionel Messi",
        flag: "🇦🇷"
      },
      {
        rank: 2,
        name: "Gerd Müller",
        flag: "🇩🇪"
      },
      {
        rank: 3,
        name: "Pelé",
        flag: "🇧🇷"
      },
      {
        rank: 4,
        name: "Romário",
        flag: "🇧🇷"
      },
      {
        rank: 5,
        name: "Cristiano Ronaldo",
        flag: "🇵🇹"
      },
      {
        rank: 6,
        name: "Ferenc Deák",
        flag: "🇭🇺"
      },
      {
        rank: 7,
        name: "Jimmy Jones",
        flag: "🇬🇧"
      },
      {
        rank: 8,
        name: "Josef Bican",
        flag: "🇨🇿"
      },
      {
        rank: 9,
        name: "Robert Lewandowski",
        flag: "🇵🇱"
      },
      {
        rank: 10,
        name: "Erling Haaland",
        flag: "🇳🇴"
      }
    ]
  },
  {
    id: "intl-goals",
    title: "Top 10 Most Goals for Country — International Football",
    list: [
      {
        rank: 1,
        name: "Cristiano Ronaldo",
        flag: "🇵🇹"
      },
      {
        rank: 2,
        name: "Ali Daei",
        flag: "🇮🇷"
      },
      {
        rank: 3,
        name: "Lionel Messi",
        flag: "🇦🇷"
      },
      {
        rank: 4,
        name: "Sunil Chhetri",
        flag: "🇮🇳"
      },
      {
        rank: 5,
        name: "Mokhtar Dahari",
        flag: "🇲🇾"
      },
      {
        rank: 6,
        name: "Romelu Lukaku",
        flag: "🇧🇪"
      },
      {
        rank: 7,
        name: "Ferenc Puskás",
        flag: "🇭🇺"
      },
      {
        rank: 8,
        name: "Robert Lewandowski",
        flag: "🇵🇱"
      },
      {
        rank: 9,
        name: "Godfrey Chitalu",
        flag: "🇿🇲"
      },
      {
        rank: 10,
        name: "Pelé",
        flag: "🇧🇷"
      }
    ]
  },
  {
    id: "fastest-hattricks",
    title: "Top 10 Fastest Hat-Tricks in Football — Football Records",
    list: [
      {
        rank: 1,
        name: "Alex Torr",
        flag: "🇬🇧"
      },
      {
        rank: 2,
        name: "James Collins",
        flag: "🇬🇧"
      },
      {
        rank: 3,
        name: "Sadio Mané",
        flag: "🇸🇳"
      },
      {
        rank: 4,
        name: "Robert Lewandowski",
        flag: "🇵🇱"
      },
      {
        rank: 5,
        name: "Alan Shearer",
        flag: "🇬🇧"
      },
      {
        rank: 6,
        name: "Robbie Fowler",
        flag: "🇬🇧"
      },
      {
        rank: 7,
        name: "Ole Gunnar Solskjær",
        flag: "🇳🇴"
      },
      {
        rank: 8,
        name: "Lionel Messi",
        flag: "🇦🇷"
      },
      {
        rank: 9,
        name: "Cristiano Ronaldo",
        flag: "🇵🇹"
      },
      {
        rank: 10,
        name: "Kylian Mbappé",
        flag: "🇫🇷"
      }
    ]
  },
  {
    id: "euro-2024",
    title: "Top Scorers — UEFA Euro 2024",
    list: [
      {
        rank: 1,
        name: "Harry Kane",
        flag: "🇬🇧"
      },
      {
        rank: 2,
        name: "Jamal Musiala",
        flag: "🇩🇪"
      },
      {
        rank: 3,
        name: "Cody Gakpo",
        flag: "🇳🇱"
      },
      {
        rank: 4,
        name: "Georges Mikautadze",
        flag: "🇬🇪"
      },
      {
        rank: 5,
        name: "Dani Olmo",
        flag: "🇪🇸"
      },
      {
        rank: 6,
        name: "Ivan Schranz",
        flag: "🇸🇰"
      },
      {
        rank: 7,
        name: "Niclas Füllkrug",
        flag: "🇩🇪"
      },
      {
        rank: 8,
        name: "Jude Bellingham",
        flag: "🇬🇧"
      },
      {
        rank: 9,
        name: "Romenigue Kroupi Jr",
        flag: "🇨🇮"
      },
      {
        rank: 10,
        name: "Lamine Yamal",
        flag: "🇪🇸"
      }
    ]
  },
  {
    id: "euro-2020",
    title: "Top Scorers — UEFA Euro 2020",
    list: [
      {
        rank: 1,
        name: "Cristiano Ronaldo",
        flag: "🇵🇹"
      },
      {
        rank: 2,
        name: "Patrik Schick",
        flag: "🇨🇿"
      },
      {
        rank: 3,
        name: "Karim Benzema",
        flag: "🇫🇷"
      },
      {
        rank: 4,
        name: "Emil Forsberg",
        flag: "🇸🇪"
      },
      {
        rank: 5,
        name: "Romelu Lukaku",
        flag: "🇧🇪"
      },
      {
        rank: 6,
        name: "Harry Kane",
        flag: "🇬🇧"
      },
      {
        rank: 7,
        name: "Robert Lewandowski",
        flag: "🇵🇱"
      },
      {
        rank: 8,
        name: "Haris Seferović",
        flag: "🇨🇭"
      },
      {
        rank: 9,
        name: "Xherdan Shaqiri",
        flag: "🇨🇭"
      },
      {
        rank: 10,
        name: "Mikkel Damsgaard",
        flag: "🇩🇰"
      }
    ]
  },
  {
    id: "serie-a-2122",
    title: "Top Scorers — Serie A 2021/22",
    list: [
      {
        rank: 1,
        name: "Ciro Immobile",
        flag: "🇮🇹"
      },
      {
        rank: 2,
        name: "Dusan Vlahovic",
        flag: "🇷🇸"
      },
      {
        rank: 3,
        name: "Lautaro Martínez",
        flag: "🇦🇷"
      },
      {
        rank: 4,
        name: "Tammy Abraham",
        flag: "🇬🇧"
      },
      {
        rank: 5,
        name: "Giovanni Simeone",
        flag: "🇦🇷"
      },
      {
        rank: 6,
        name: "Gianluca Scamacca",
        flag: "🇮🇹"
      },
      {
        rank: 7,
        name: "Domenico Berardi",
        flag: "🇮🇹"
      },
      {
        rank: 8,
        name: "Victor Osimhen",
        flag: "🇳🇬"
      },
      {
        rank: 9,
        name: "Edin Džeko",
        flag: "🇧🇦"
      },
      {
        rank: 10,
        name: "Lorenzo Insigne",
        flag: "🇮🇹"
      }
    ]
  },
  {
    id: "bundesliga-2223",
    title: "Top Scorers — Bundesliga 2022/23",
    list: [
      {
        rank: 1,
        name: "Niclas Füllkrug",
        flag: "🇩🇪"
      },
      {
        rank: 2,
        name: "Christopher Nkunku",
        flag: "🇫🇷"
      },
      {
        rank: 3,
        name: "Vincenzo Grifo",
        flag: "🇮🇹"
      },
      {
        rank: 4,
        name: "Randal Kolo Muani",
        flag: "🇫🇷"
      },
      {
        rank: 5,
        name: "Serhou Guirassy",
        flag: "🇬🇳"
      },
      {
        rank: 6,
        name: "Marcus Thuram",
        flag: "🇫🇷"
      },
      {
        rank: 7,
        name: "Marvin Ducksch",
        flag: "🇩🇪"
      },
      {
        rank: 8,
        name: "Jamal Musiala",
        flag: "🇩🇪"
      },
      {
        rank: 9,
        name: "Kevin Behrens",
        flag: "🇩🇪"
      },
      {
        rank: 10,
        name: "Jonas Hofmann",
        flag: "🇩🇪"
      }
    ]
  },
  {
    id: "la-liga-2122",
    title: "Top Scorers — La Liga 2021/22",
    list: [
      {
        rank: 1,
        name: "Karim Benzema",
        flag: "🇫🇷"
      },
      {
        rank: 2,
        name: "Iago Aspas",
        flag: "🇪🇸"
      },
      {
        rank: 3,
        name: "Raúl de Tomás",
        flag: "🇪🇸"
      },
      {
        rank: 4,
        name: "Vinicius Jr",
        flag: "🇧🇷"
      },
      {
        rank: 5,
        name: "Juanmi",
        flag: "🇪🇸"
      },
      {
        rank: 6,
        name: "Enes Ünal",
        flag: "🇹🇷"
      },
      {
        rank: 7,
        name: "Joselu",
        flag: "🇪🇸"
      },
      {
        rank: 8,
        name: "Ángel Correa",
        flag: "🇦🇷"
      },
      {
        rank: 9,
        name: "Luis Suárez",
        flag: "🇺🇾"
      },
      {
        rank: 10,
        name: "Robert Lewandowski",
        flag: "🇵🇱"
      }
    ]
  },
  {
    id: "pl-1920",
    title: "Top Scorers — Premier League 2019/20",
    list: [
      {
        rank: 1,
        name: "Jamie Vardy",
        flag: "🇬🇧"
      },
      {
        rank: 2,
        name: "Pierre-Emerick Aubameyang",
        flag: "🇬🇦"
      },
      {
        rank: 3,
        name: "Danny Ings",
        flag: "🇬🇧"
      },
      {
        rank: 4,
        name: "Mohamed Salah",
        flag: "🇪🇬"
      },
      {
        rank: 5,
        name: "Harry Kane",
        flag: "🇬🇧"
      },
      {
        rank: 6,
        name: "Sadio Mané",
        flag: "🇸🇳"
      },
      {
        rank: 7,
        name: "Raheem Sterling",
        flag: "🇬🇧"
      },
      {
        rank: 8,
        name: "Marcus Rashford",
        flag: "🇬🇧"
      },
      {
        rank: 9,
        name: "Sergio Agüero",
        flag: "🇦🇷"
      },
      {
        rank: 10,
        name: "Richarlison",
        flag: "🇧🇷"
      }
    ]
  },
  {
    id: "pl-1819",
    title: "Top Scorers — Premier League 2018/19",
    list: [
      {
        rank: 1,
        name: "Mohamed Salah",
        flag: "🇪🇬"
      },
      {
        rank: 2,
        name: "Pierre-Emerick Aubameyang",
        flag: "🇬🇦"
      },
      {
        rank: 3,
        name: "Sadio Mané",
        flag: "🇸🇳"
      },
      {
        rank: 4,
        name: "Sergio Agüero",
        flag: "🇦🇷"
      },
      {
        rank: 5,
        name: "Jamie Vardy",
        flag: "🇬🇧"
      },
      {
        rank: 6,
        name: "Harry Kane",
        flag: "🇬🇧"
      },
      {
        rank: 7,
        name: "Raheem Sterling",
        flag: "🇬🇧"
      },
      {
        rank: 8,
        name: "Eden Hazard",
        flag: "🇧🇪"
      },
      {
        rank: 9,
        name: "Callum Wilson",
        flag: "🇬🇧"
      },
      {
        rank: 10,
        name: "Alexandre Lacazette",
        flag: "🇫🇷"
      }
    ]
  },
  {
    id: "ucl-apps-alltime",
    title: "Top 10 Most Appearances — UEFA Champions League",
    list: [
      {
        rank: 1,
        name: "Cristiano Ronaldo",
        flag: "🇵🇹"
      },
      {
        rank: 2,
        name: "Iker Casillas",
        flag: "🇪🇸"
      },
      {
        rank: 3,
        name: "Lionel Messi",
        flag: "🇦🇷"
      },
      {
        rank: 4,
        name: "Karim Benzema",
        flag: "🇫🇷"
      },
      {
        rank: 5,
        name: "Xavi",
        flag: "🇪🇸"
      },
      {
        rank: 6,
        name: "Raúl",
        flag: "🇪🇸"
      },
      {
        rank: 7,
        name: "Sergio Ramos",
        flag: "🇪🇸"
      },
      {
        rank: 8,
        name: "Ryan Giggs",
        flag: "🇬🇧"
      },
      {
        rank: 9,
        name: "Paolo Maldini",
        flag: "🇮🇹"
      },
      {
        rank: 10,
        name: "Andrés Iniesta",
        flag: "🇪🇸"
      }
    ]
  },
  {
    id: "expensive-defenders",
    title: "Top 10 Most Expensive Defenders — Football Transfers",
    list: [
      {
        rank: 1,
        name: "Josko Gvardiol",
        flag: "🇭🇷"
      },
      {
        rank: 2,
        name: "Harry Maguire",
        flag: "🇬🇧"
      },
      {
        rank: 3,
        name: "Matthijs de Ligt",
        flag: "🇳🇱"
      },
      {
        rank: 4,
        name: "Virgil van Dijk",
        flag: "🇳🇱"
      },
      {
        rank: 5,
        name: "Wesley Fofana",
        flag: "🇫🇷"
      },
      {
        rank: 6,
        name: "Lucas Hernández",
        flag: "🇫🇷"
      },
      {
        rank: 7,
        name: "Aymeric Laporte",
        flag: "🇪🇸"
      },
      {
        rank: 8,
        name: "Benjamin Mendy",
        flag: "🇫🇷"
      },
      {
        rank: 9,
        name: "Kyle Walker",
        flag: "🇬🇧"
      },
      {
        rank: 10,
        name: "Éder Militão",
        flag: "🇧🇷"
      }
    ]
  },
  {
    id: "expensive-midfielders",
    title: "Top 10 Most Expensive Midfielders — Football Transfers",
    list: [
      {
        rank: 1,
        name: "Philippe Coutinho",
        flag: "🇧🇷"
      },
      {
        rank: 2,
        name: "Enzo Fernández",
        flag: "🇦🇷"
      },
      {
        rank: 3,
        name: "Jack Grealish",
        flag: "🇬🇧"
      },
      {
        rank: 4,
        name: "Moises Caicedo",
        flag: "🇪🇨"
      },
      {
        rank: 5,
        name: "Eden Hazard",
        flag: "🇧🇪"
      },
      {
        rank: 6,
        name: "Declan Rice",
        flag: "🇬🇧"
      },
      {
        rank: 7,
        name: "Paul Pogba",
        flag: "🇫🇷"
      },
      {
        rank: 8,
        name: "Ousmane Dembélé",
        flag: "🇫🇷"
      },
      {
        rank: 9,
        name: "Jude Bellingham",
        flag: "🇬🇧"
      },
      {
        rank: 10,
        name: "Frenkie de Jong",
        flag: "🇳🇱"
      }
    ]
  },
  {
    id: "ballon-dor-2012",
    title: "Top 10 Voting — Ballon d'Or 2012",
    list: [
      {
        rank: 1,
        name: "Lionel Messi",
        flag: "🇦🇷"
      },
      {
        rank: 2,
        name: "Cristiano Ronaldo",
        flag: "🇵🇹"
      },
      {
        rank: 3,
        name: "Andrés Iniesta",
        flag: "🇪🇸"
      },
      {
        rank: 4,
        name: "Xavi",
        flag: "🇪🇸"
      },
      {
        rank: 5,
        name: "Radamel Falcao",
        flag: "🇨🇴"
      },
      {
        rank: 6,
        name: "Iker Casillas",
        flag: "🇪🇸"
      },
      {
        rank: 7,
        name: "Zlatan Ibrahimović",
        flag: "🇸🇪"
      },
      {
        rank: 8,
        name: "Didier Drogba",
        flag: "🇨🇮"
      },
      {
        rank: 9,
        name: "Robin van Persie",
        flag: "🇳🇱"
      },
      {
        rank: 10,
        name: "Mario Yepes",
        flag: "🇨🇴"
      }
    ]
  },
  {
    id: "ballon-dor-2011",
    title: "Top 10 Voting — Ballon d'Or 2011",
    list: [
      {
        rank: 1,
        name: "Lionel Messi",
        flag: "🇦🇷"
      },
      {
        rank: 2,
        name: "Cristiano Ronaldo",
        flag: "🇵🇹"
      },
      {
        rank: 3,
        name: "Xavi",
        flag: "🇪🇸"
      },
      {
        rank: 4,
        name: "Andrés Iniesta",
        flag: "🇪🇸"
      },
      {
        rank: 5,
        name: "Wayne Rooney",
        flag: "🇬🇧"
      },
      {
        rank: 6,
        name: "Luis Suárez",
        flag: "🇺🇾"
      },
      {
        rank: 7,
        name: "Zlatan Ibrahimović",
        flag: "🇸🇪"
      },
      {
        rank: 8,
        name: "Neymar",
        flag: "🇧🇷"
      },
      {
        rank: 9,
        name: "Manuel Neuer",
        flag: "🇩🇪"
      },
      {
        rank: 10,
        name: "Sergio Agüero",
        flag: "🇦🇷"
      }
    ]
  },
  {
    id: "ballon-dor-2010",
    title: "Top 10 Voting — Ballon d'Or 2010",
    list: [
      {
        rank: 1,
        name: "Lionel Messi",
        flag: "🇦🇷"
      },
      {
        rank: 2,
        name: "Cristiano Ronaldo",
        flag: "🇵🇹"
      },
      {
        rank: 3,
        name: "Xavi",
        flag: "🇪🇸"
      },
      {
        rank: 4,
        name: "Andrés Iniesta",
        flag: "🇪🇸"
      },
      {
        rank: 5,
        name: "Wesley Sneijder",
        flag: "🇳🇱"
      },
      {
        rank: 6,
        name: "Diego Forlán",
        flag: "🇺🇾"
      },
      {
        rank: 7,
        name: "Iker Casillas",
        flag: "🇪🇸"
      },
      {
        rank: 8,
        name: "Thomas Müller",
        flag: "🇩🇪"
      },
      {
        rank: 9,
        name: "David Villa",
        flag: "🇪🇸"
      },
      {
        rank: 10,
        name: "Arjen Robben",
        flag: "🇳🇱"
      }
    ]
  },
  {
    id: "expensive-forwards",
    title: "Top 10 Most Expensive Forwards — Football Transfers",
    list: [
      {
        rank: 1,
        name: "Neymar",
        flag: "🇧🇷"
      },
      {
        rank: 2,
        name: "Kylian Mbappé",
        flag: "🇫🇷"
      },
      {
        rank: 3,
        name: "Philippe Coutinho",
        flag: "🇧🇷"
      },
      {
        rank: 4,
        name: "Ousmane Dembélé",
        flag: "🇫🇷"
      },
      {
        rank: 5,
        name: "João Félix",
        flag: "🇵🇹"
      },
      {
        rank: 6,
        name: "Antoine Griezmann",
        flag: "🇫🇷"
      },
      {
        rank: 7,
        name: "Cristiano Ronaldo",
        flag: "🇵🇹"
      },
      {
        rank: 8,
        name: "Eden Hazard",
        flag: "🇧🇪"
      },
      {
        rank: 9,
        name: "Romelu Lukaku",
        flag: "🇧🇪"
      },
      {
        rank: 10,
        name: "Harry Kane",
        flag: "🇬🇧"
      }
    ]
  },
  {
    id: "mls-alltime",
    title: "Top 10 All-Time Top Scorers — Major League Soccer",
    list: [
      {
        rank: 1,
        name: "Chris Wondolowski",
        flag: "🇺🇸"
      },
      {
        rank: 2,
        name: "Landon Donovan",
        flag: "🇺🇸"
      },
      {
        rank: 3,
        name: "Kei Kamara",
        flag: "🇸🇱"
      },
      {
        rank: 4,
        name: "Jeff Cunningham",
        flag: "🇺🇸"
      },
      {
        rank: 5,
        name: "Jaime Moreno",
        flag: "🇧🇴"
      },
      {
        rank: 6,
        name: "Ante Razov",
        flag: "🇺🇸"
      },
      {
        rank: 7,
        name: "Jason Kreis",
        flag: "🇺🇸"
      },
      {
        rank: 8,
        name: "Dwayne De Rosario",
        flag: "🇨🇦"
      },
      {
        rank: 9,
        name: "Taylor Twellman",
        flag: "🇺🇸"
      },
      {
        rank: 10,
        name: "Eddie Johnson",
        flag: "🇺🇸"
      }
    ]
  },
  {
    id: "ucl-2021",
    title: "Top Scorers — UEFA Champions League 2020/21",
    list: [
      {
        rank: 1,
        name: "Erling Haaland",
        flag: "🇳🇴"
      },
      {
        rank: 2,
        name: "Kylian Mbappé",
        flag: "🇫🇷"
      },
      {
        rank: 3,
        name: "Karim Benzema",
        flag: "🇫🇷"
      },
      {
        rank: 4,
        name: "Mohamed Salah",
        flag: "🇪🇬"
      },
      {
        rank: 5,
        name: "Álvaro Morata",
        flag: "🇪🇸"
      },
      {
        rank: 6,
        name: "Sergio Oliveira",
        flag: "🇵🇹"
      },
      {
        rank: 7,
        name: "Josip Iličić",
        flag: "🇸🇮"
      },
      {
        rank: 8,
        name: "Lionel Messi",
        flag: "🇦🇷"
      },
      {
        rank: 9,
        name: "Neymar",
        flag: "🇧🇷"
      },
      {
        rank: 10,
        name: "Cristiano Ronaldo",
        flag: "🇵🇹"
      }
    ]
  },
  {
    id: "ucl-1920",
    title: "Top Scorers — UEFA Champions League 2019/20",
    list: [
      {
        rank: 1,
        name: "Robert Lewandowski",
        flag: "🇵🇱"
      },
      {
        rank: 2,
        name: "Erling Haaland",
        flag: "🇳🇴"
      },
      {
        rank: 3,
        name: "Serge Gnabry",
        flag: "🇩🇪"
      },
      {
        rank: 4,
        name: "Harry Kane",
        flag: "🇬🇧"
      },
      {
        rank: 5,
        name: "Dries Mertens",
        flag: "🇧🇪"
      },
      {
        rank: 6,
        name: "Gabriel Jesus",
        flag: "🇧🇷"
      },
      {
        rank: 7,
        name: "Raheem Sterling",
        flag: "🇬🇧"
      },
      {
        rank: 8,
        name: "Karim Benzema",
        flag: "🇫🇷"
      },
      {
        rank: 9,
        name: "Kylian Mbappé",
        flag: "🇫🇷"
      },
      {
        rank: 10,
        name: "Luis Suárez",
        flag: "🇺🇾"
      }
    ]
  },
  {
    id: "ballon-dor-2009",
    title: "Top 10 Voting — Ballon d'Or 2009",
    list: [
      {
        rank: 1,
        name: "Lionel Messi",
        flag: "🇦🇷"
      },
      {
        rank: 2,
        name: "Cristiano Ronaldo",
        flag: "🇵🇹"
      },
      {
        rank: 3,
        name: "Xavi",
        flag: "🇪🇸"
      },
      {
        rank: 4,
        name: "Andrés Iniesta",
        flag: "🇪🇸"
      },
      {
        rank: 5,
        name: "Samuel Eto'o",
        flag: "🇨🇲"
      },
      {
        rank: 6,
        name: "Wayne Rooney",
        flag: "🇬🇧"
      },
      {
        rank: 7,
        name: "Kaká",
        flag: "🇧🇷"
      },
      {
        rank: 8,
        name: "Zlatan Ibrahimović",
        flag: "🇸🇪"
      },
      {
        rank: 9,
        name: "Steven Gerrard",
        flag: "🇬🇧"
      },
      {
        rank: 10,
        name: "Didier Drogba",
        flag: "🇨🇮"
      }
    ]
  },
  {
    id: "ballon-dor-2008",
    title: "Top 10 Voting — Ballon d'Or 2008",
    list: [
      {
        rank: 1,
        name: "Cristiano Ronaldo",
        flag: "🇵🇹"
      },
      {
        rank: 2,
        name: "Lionel Messi",
        flag: "🇦🇷"
      },
      {
        rank: 3,
        name: "Fernando Torres",
        flag: "🇪🇸"
      },
      {
        rank: 4,
        name: "Iker Casillas",
        flag: "🇪🇸"
      },
      {
        rank: 5,
        name: "Xavi",
        flag: "🇪🇸"
      },
      {
        rank: 6,
        name: "Arshavin Andrey",
        flag: "🇷🇺"
      },
      {
        rank: 7,
        name: "David Villa",
        flag: "🇪🇸"
      },
      {
        rank: 8,
        name: "Kaká",
        flag: "🇧🇷"
      },
      {
        rank: 9,
        name: "Zlatan Ibrahimović",
        flag: "🇸🇪"
      },
      {
        rank: 10,
        name: "Wayne Rooney",
        flag: "🇬🇧"
      }
    ]
  },
  {
    id: "ballon-dor-2007",
    title: "Top 10 Voting — Ballon d'Or 2007",
    list: [
      {
        rank: 1,
        name: "Kaká",
        flag: "🇧🇷"
      },
      {
        rank: 2,
        name: "Cristiano Ronaldo",
        flag: "🇵🇹"
      },
      {
        rank: 3,
        name: "Lionel Messi",
        flag: "🇦🇷"
      },
      {
        rank: 4,
        name: "Didier Drogba",
        flag: "🇨🇮"
      },
      {
        rank: 5,
        name: "Andrea Pirlo",
        flag: "🇮🇹"
      },
      {
        rank: 6,
        name: "Ruud van Nistelrooy",
        flag: "🇳🇱"
      },
      {
        rank: 7,
        name: "Zlatan Ibrahimović",
        flag: "🇸🇪"
      },
      {
        rank: 8,
        name: "Cesc Fàbregas",
        flag: "🇪🇸"
      },
      {
        rank: 9,
        name: "Robinho",
        flag: "🇧🇷"
      },
      {
        rank: 10,
        name: "Francesco Totti",
        flag: "🇮🇹"
      }
    ]
  },
  {
    id: "wc-2010",
    title: "Top Scorers — FIFA World Cup 2010",
    list: [
      {
        rank: 1,
        name: "Thomas Müller",
        flag: "🇩🇪"
      },
      {
        rank: 2,
        name: "David Villa",
        flag: "🇪🇸"
      },
      {
        rank: 3,
        name: "Wesley Sneijder",
        flag: "🇳🇱"
      },
      {
        rank: 4,
        name: "Diego Forlán",
        flag: "🇺🇾"
      },
      {
        rank: 5,
        name: "Gonzalo Higuaín",
        flag: "🇦🇷"
      },
      {
        rank: 6,
        name: "Miroslav Klose",
        flag: "🇩🇪"
      },
      {
        rank: 7,
        name: "Robert Vittek",
        flag: "🇸🇰"
      },
      {
        rank: 8,
        name: "Luis Suárez",
        flag: "🇺🇾"
      },
      {
        rank: 9,
        name: "Landon Donovan",
        flag: "🇺🇸"
      },
      {
        rank: 10,
        name: "Asamoah Gyan",
        flag: "🇬🇭"
      }
    ]
  },
  {
    id: "wc-2006",
    title: "Top Scorers — FIFA World Cup 2006",
    list: [
      {
        rank: 1,
        name: "Miroslav Klose",
        flag: "🇩🇪"
      },
      {
        rank: 2,
        name: "Hernán Crespo",
        flag: "🇦🇷"
      },
      {
        rank: 3,
        name: "Lukas Podolski",
        flag: "🇩🇪"
      },
      {
        rank: 4,
        name: "Maxi Rodríguez",
        flag: "🇦🇷"
      },
      {
        rank: 5,
        name: "Ronaldo Nazário",
        flag: "🇧🇷"
      },
      {
        rank: 6,
        name: "Thierry Henry",
        flag: "🇫🇷"
      },
      {
        rank: 7,
        name: "Fernando Torres",
        flag: "🇪🇸"
      },
      {
        rank: 8,
        name: "David Villa",
        flag: "🇪🇸"
      },
      {
        rank: 9,
        name: "Zinedine Zidane",
        flag: "🇫🇷"
      },
      {
        rank: 10,
        name: "Tim Cahill",
        flag: "🇦🇺"
      }
    ]
  },
  {
    id: "wc-2002",
    title: "Top Scorers — FIFA World Cup 2002",
    list: [
      {
        rank: 1,
        name: "Ronaldo Nazário",
        flag: "🇧🇷"
      },
      {
        rank: 2,
        name: "Miroslav Klose",
        flag: "🇩🇪"
      },
      {
        rank: 3,
        name: "Rivaldo",
        flag: "🇧🇷"
      },
      {
        rank: 4,
        name: "Jon Dahl Tomasson",
        flag: "🇩🇰"
      },
      {
        rank: 5,
        name: "Christian Vieri",
        flag: "🇮🇹"
      },
      {
        rank: 6,
        name: "Michael Ballack",
        flag: "🇩🇪"
      },
      {
        rank: 7,
        name: "Robbie Keane",
        flag: "🇮🇪"
      },
      {
        rank: 8,
        name: "Fernando Morientes",
        flag: "🇪🇸"
      },
      {
        rank: 9,
        name: "Pauleta",
        flag: "🇵🇹"
      },
      {
        rank: 10,
        name: "Hidetoshi Nakata",
        flag: "🇯🇵"
      }
    ]
  },
  {
    id: "eredivisie-alltime",
    title: "Top 10 All-Time Top Scorers — Eredivisie",
    list: [
      {
        rank: 1,
        name: "Willy van der Kuijlen",
        flag: "🇳🇱"
      },
      {
        rank: 2,
        name: "Ruud Geels",
        flag: "🇳🇱"
      },
      {
        rank: 3,
        name: "Johan Cruyff",
        flag: "🇳🇱"
      },
      {
        rank: 4,
        name: "Kees Kist",
        flag: "🇳🇱"
      },
      {
        rank: 5,
        name: "Marco van Basten",
        flag: "🇳🇱"
      },
      {
        rank: 6,
        name: "Ove Kindvall",
        flag: "🇸🇪"
      },
      {
        rank: 7,
        name: "Cor van der Gijp",
        flag: "🇳🇱"
      },
      {
        rank: 8,
        name: "Willem van Hanegem",
        flag: "🇳🇱"
      },
      {
        rank: 9,
        name: "Dennis Bergkamp",
        flag: "🇳🇱"
      },
      {
        rank: 10,
        name: "Ronaldo Nazário",
        flag: "🇧🇷"
      }
    ]
  },
  {
    id: "pl-assists-season",
    title: "Top 10 Most Assists in a Single Season — Premier League",
    list: [
      {
        rank: 1,
        name: "Thierry Henry",
        flag: "🇫🇷"
      },
      {
        rank: 2,
        name: "Kevin De Bruyne",
        flag: "🇧🇪"
      },
      {
        rank: 3,
        name: "Mesut Özil",
        flag: "🇩🇪"
      },
      {
        rank: 4,
        name: "Cesc Fàbregas",
        flag: "🇪🇸"
      },
      {
        rank: 5,
        name: "Ole Gunnar Solskjær",
        flag: "🇳🇴"
      },
      {
        rank: 6,
        name: "David Beckham",
        flag: "🇬🇧"
      },
      {
        rank: 7,
        name: "Ryan Giggs",
        flag: "🇬🇧"
      },
      {
        rank: 8,
        name: "Frank Lampard",
        flag: "🇬🇧"
      },
      {
        rank: 9,
        name: "Kevin De Bruyne",
        flag: "🇧🇪"
      },
      {
        rank: 10,
        name: "Mohamed Salah",
        flag: "🇪🇬"
      }
    ]
  },
  {
    id: "serie-a-single",
    title: "Top 10 Most Goals in a Single Season — Serie A",
    list: [
      {
        rank: 1,
        name: "Gino Rossetti",
        flag: "🇮🇹"
      },
      {
        rank: 2,
        name: "Ciro Immobile",
        flag: "🇮🇹"
      },
      {
        rank: 3,
        name: "Gonzalo Higuaín",
        flag: "🇦🇷"
      },
      {
        rank: 4,
        name: "Gunnar Nordahl",
        flag: "🇸🇪"
      },
      {
        rank: 5,
        name: "Gunnar Nordahl",
        flag: "🇸🇪"
      },
      {
        rank: 6,
        name: "Gunnar Nordahl",
        flag: "🇸🇪"
      },
      {
        rank: 7,
        name: "Antonio Angelillo",
        flag: "🇦🇷"
      },
      {
        rank: 8,
        name: "Luca Toni",
        flag: "🇮🇹"
      },
      {
        rank: 9,
        name: "Felice Borel",
        flag: "🇮🇹"
      },
      {
        rank: 10,
        name: "Francesco Totti",
        flag: "🇮🇹"
      }
    ]
  },
  {
    id: "uefa-toty",
    title: "Top 10 Most Appearances All-Time — UEFA Team of the Year",
    list: [
      {
        rank: 1,
        name: "Cristiano Ronaldo",
        flag: "🇵🇹"
      },
      {
        rank: 2,
        name: "Lionel Messi",
        flag: "🇦🇷"
      },
      {
        rank: 3,
        name: "Sergio Ramos",
        flag: "🇪🇸"
      },
      {
        rank: 4,
        name: "Andrés Iniesta",
        flag: "🇪🇸"
      },
      {
        rank: 5,
        name: "Luka Modrić",
        flag: "🇭🇷"
      },
      {
        rank: 6,
        name: "Xavi",
        flag: "🇪🇸"
      },
      {
        rank: 7,
        name: "Gianluigi Buffon",
        flag: "🇮🇹"
      },
      {
        rank: 8,
        name: "Philipp Lahm",
        flag: "🇩🇪"
      },
      {
        rank: 9,
        name: "Carles Puyol",
        flag: "🇪🇸"
      },
      {
        rank: 10,
        name: "Iker Casillas",
        flag: "🇪🇸"
      }
    ]
  },
  {
    id: "most-red-cards",
    title: "Top 10 Most Red Cards in Football History — Football Records",
    list: [
      {
        rank: 1,
        name: "Gerardo Bedoya",
        flag: "🇨🇴"
      },
      {
        rank: 2,
        name: "Sergio Ramos",
        flag: "🇪🇸"
      },
      {
        rank: 3,
        name: "Paolo Montero",
        flag: "🇺🇾"
      },
      {
        rank: 4,
        name: "Rafael Márquez",
        flag: "🇲🇽"
      },
      {
        rank: 5,
        name: "Alexis Ruano",
        flag: "🇪🇸"
      },
      {
        rank: 6,
        name: "Cyril Rool",
        flag: "🇫🇷"
      },
      {
        rank: 7,
        name: "Matías Almeyda",
        flag: "🇦🇷"
      },
      {
        rank: 8,
        name: "Gennaro Gattuso",
        flag: "🇮🇹"
      },
      {
        rank: 9,
        name: "Pepe",
        flag: "🇵🇹"
      },
      {
        rank: 10,
        name: "Xabi Alonso",
        flag: "🇪🇸"
      }
    ]
  },
  {
    id: "ucl-1819",
    title: "Top Scorers — UEFA Champions League 2018/19",
    list: [
      {
        rank: 1,
        name: "Lionel Messi",
        flag: "🇦🇷"
      },
      {
        rank: 2,
        name: "Robert Lewandowski",
        flag: "🇵🇱"
      },
      {
        rank: 3,
        name: "Cristiano Ronaldo",
        flag: "🇵🇹"
      },
      {
        rank: 4,
        name: "Raheem Sterling",
        flag: "🇬🇧"
      },
      {
        rank: 5,
        name: "Dries Mertens",
        flag: "🇧🇪"
      },
      {
        rank: 6,
        name: "Harry Kane",
        flag: "🇬🇧"
      },
      {
        rank: 7,
        name: "Marco Reus",
        flag: "🇩🇪"
      },
      {
        rank: 8,
        name: "Sadio Mané",
        flag: "🇸🇳"
      },
      {
        rank: 9,
        name: "Kylian Mbappé",
        flag: "🇫🇷"
      },
      {
        rank: 10,
        name: "Mohamed Salah",
        flag: "🇪🇬"
      }
    ]
  },
  {
    id: "ucl-1718",
    title: "Top Scorers — UEFA Champions League 2017/18",
    list: [
      {
        rank: 1,
        name: "Cristiano Ronaldo",
        flag: "🇵🇹"
      },
      {
        rank: 2,
        name: "Mohamed Salah",
        flag: "🇪🇬"
      },
      {
        rank: 3,
        name: "Roberto Firmino",
        flag: "🇧🇷"
      },
      {
        rank: 4,
        name: "Sadio Mané",
        flag: "🇸🇳"
      },
      {
        rank: 5,
        name: "Harry Kane",
        flag: "🇬🇧"
      },
      {
        rank: 6,
        name: "Edinson Cavani",
        flag: "🇺🇾"
      },
      {
        rank: 7,
        name: "Lionel Messi",
        flag: "🇦🇷"
      },
      {
        rank: 8,
        name: "Karim Benzema",
        flag: "🇫🇷"
      },
      {
        rank: 9,
        name: "Neymar",
        flag: "🇧🇷"
      },
      {
        rank: 10,
        name: "Robert Lewandowski",
        flag: "🇵🇱"
      }
    ]
  },
  {
    id: "ucl-1617",
    title: "Top Scorers — UEFA Champions League 2016/17",
    list: [
      {
        rank: 1,
        name: "Cristiano Ronaldo",
        flag: "🇵🇹"
      },
      {
        rank: 2,
        name: "Lionel Messi",
        flag: "🇦🇷"
      },
      {
        rank: 3,
        name: "Robert Lewandowski",
        flag: "🇵🇱"
      },
      {
        rank: 4,
        name: "Edinson Cavani",
        flag: "🇺🇾"
      },
      {
        rank: 5,
        name: "Antoine Griezmann",
        flag: "🇫🇷"
      },
      {
        rank: 6,
        name: "Kylian Mbappé",
        flag: "🇫🇷"
      },
      {
        rank: 7,
        name: "Gonzalo Higuaín",
        flag: "🇦🇷"
      },
      {
        rank: 8,
        name: "Pierre-Emerick Aubameyang",
        flag: "🇬🇦"
      },
      {
        rank: 9,
        name: "Sadio Mané",
        flag: "🇸🇳"
      },
      {
        rank: 10,
        name: "Raheem Sterling",
        flag: "🇬🇧"
      }
    ]
  },
  {
    id: "nations-league",
    title: "Top 10 All-Time Top Scorers — UEFA Nations League",
    list: [
      {
        rank: 1,
        name: "Aleksandar Mitrović",
        flag: "🇷🇸"
      },
      {
        rank: 2,
        name: "Erling Haaland",
        flag: "🇳🇴"
      },
      {
        rank: 3,
        name: "Cristiano Ronaldo",
        flag: "🇵🇹"
      },
      {
        rank: 4,
        name: "Romelu Lukaku",
        flag: "🇧🇪"
      },
      {
        rank: 5,
        name: "Harry Kane",
        flag: "🇬🇧"
      },
      {
        rank: 6,
        name: "Edin Džeko",
        flag: "🇧🇦"
      },
      {
        rank: 7,
        name: "Rasmus Højlund",
        flag: "🇩🇰"
      },
      {
        rank: 8,
        name: "Luciano Narsingh",
        flag: "🇳🇱"
      },
      {
        rank: 9,
        name: "Stevan Jovetić",
        flag: "🇲🇪"
      },
      {
        rank: 10,
        name: "Luka Modrić",
        flag: "🇭🇷"
      }
    ]
  },
  {
    id: "most-hattricks",
    title: "Top 10 Most Career Hat-Tricks — Football Records",
    list: [
      {
        rank: 1,
        name: "Pelé",
        flag: "🇧🇷"
      },
      {
        rank: 2,
        name: "Cristiano Ronaldo",
        flag: "🇵🇹"
      },
      {
        rank: 3,
        name: "Lionel Messi",
        flag: "🇦🇷"
      },
      {
        rank: 4,
        name: "Robert Lewandowski",
        flag: "🇵🇱"
      },
      {
        rank: 5,
        name: "Luis Suárez",
        flag: "🇺🇾"
      },
      {
        rank: 6,
        name: "Erling Haaland",
        flag: "🇳🇴"
      },
      {
        rank: 7,
        name: "Neymar",
        flag: "🇧🇷"
      },
      {
        rank: 8,
        name: "Harry Kane",
        flag: "🇬🇧"
      },
      {
        rank: 9,
        name: "Karim Benzema",
        flag: "🇫🇷"
      },
      {
        rank: 10,
        name: "Sergio Agüero",
        flag: "🇦🇷"
      }
    ]
  },
  {
    id: "wc-1998",
    title: "Top Scorers — FIFA World Cup 1998",
    list: [
      {
        rank: 1,
        name: "Davor Šuker",
        flag: "🇭🇷"
      },
      {
        rank: 2,
        name: "Gabriel Batistuta",
        flag: "🇦🇷"
      },
      {
        rank: 3,
        name: "Christian Vieri",
        flag: "🇮🇹"
      },
      {
        rank: 4,
        name: "Ronaldo Nazário",
        flag: "🇧🇷"
      },
      {
        rank: 5,
        name: "Luis Hernández",
        flag: "🇲🇽"
      },
      {
        rank: 6,
        name: "Thierry Henry",
        flag: "🇫🇷"
      },
      {
        rank: 7,
        name: "Dennis Bergkamp",
        flag: "🇳🇱"
      },
      {
        rank: 8,
        name: "Zinedine Zidane",
        flag: "🇫🇷"
      },
      {
        rank: 9,
        name: "Roberto Baggio",
        flag: "🇮🇹"
      },
      {
        rank: 10,
        name: "Marcel Desailly",
        flag: "🇫🇷"
      }
    ]
  },
  {
    id: "wc-1994",
    title: "Top Scorers — FIFA World Cup 1994",
    list: [
      {
        rank: 1,
        name: "Oleg Salenko",
        flag: "🇷🇺"
      },
      {
        rank: 2,
        name: "Hristo Stoichkov",
        flag: "🇧🇬"
      },
      {
        rank: 3,
        name: "Romário",
        flag: "🇧🇷"
      },
      {
        rank: 4,
        name: "Roberto Baggio",
        flag: "🇮🇹"
      },
      {
        rank: 5,
        name: "Kennet Andersson",
        flag: "🇸🇪"
      },
      {
        rank: 6,
        name: "Jürgen Klinsmann",
        flag: "🇩🇪"
      },
      {
        rank: 7,
        name: "Gabriel Batistuta",
        flag: "🇦🇷"
      },
      {
        rank: 8,
        name: "Florin Răducioiu",
        flag: "🇷🇴"
      },
      {
        rank: 9,
        name: "Tomas Brolin",
        flag: "🇸🇪"
      },
      {
        rank: 10,
        name: "Martin Dahlin",
        flag: "🇸🇪"
      }
    ]
  },
  {
    id: "euro-2016",
    title: "Top Scorers — UEFA Euro 2016",
    list: [
      {
        rank: 1,
        name: "Antoine Griezmann",
        flag: "🇫🇷"
      },
      {
        rank: 2,
        name: "Cristiano Ronaldo",
        flag: "🇵🇹"
      },
      {
        rank: 3,
        name: "Olivier Giroud",
        flag: "🇫🇷"
      },
      {
        rank: 4,
        name: "Nani",
        flag: "🇵🇹"
      },
      {
        rank: 5,
        name: "Gareth Bale",
        flag: "🇬🇧"
      },
      {
        rank: 6,
        name: "Álvaro Morata",
        flag: "🇪🇸"
      },
      {
        rank: 7,
        name: "Romain Alessandrini",
        flag: "🇫🇷"
      },
      {
        rank: 8,
        name: "Jakub Błaszczykowski",
        flag: "🇵🇱"
      },
      {
        rank: 9,
        name: "Mario Gómez",
        flag: "🇩🇪"
      },
      {
        rank: 10,
        name: "Hal Robson-Kanu",
        flag: "🇬🇧"
      }
    ]
  },
  {
    id: "euro-2012",
    title: "Top Scorers — UEFA Euro 2012",
    list: [
      {
        rank: 1,
        name: "Fernando Torres",
        flag: "🇪🇸"
      },
      {
        rank: 2,
        name: "Mario Balotelli",
        flag: "🇮🇹"
      },
      {
        rank: 3,
        name: "Mario Gómez",
        flag: "🇩🇪"
      },
      {
        rank: 4,
        name: "Cristiano Ronaldo",
        flag: "🇵🇹"
      },
      {
        rank: 5,
        name: "Alan Dzagoev",
        flag: "🇷🇺"
      },
      {
        rank: 6,
        name: "Zlatan Ibrahimović",
        flag: "🇸🇪"
      },
      {
        rank: 7,
        name: "David Villa",
        flag: "🇪🇸"
      },
      {
        rank: 8,
        name: "Andrea Pirlo",
        flag: "🇮🇹"
      },
      {
        rank: 9,
        name: "Mesut Özil",
        flag: "🇩🇪"
      },
      {
        rank: 10,
        name: "Bastian Schweinsteiger",
        flag: "🇩🇪"
      }
    ]
  },
  {
    id: "ligue1-2223",
    title: "Top Scorers — Ligue 1 2022/23",
    list: [
      {
        rank: 1,
        name: "Kylian Mbappé",
        flag: "🇫🇷"
      },
      {
        rank: 2,
        name: "Alexandre Lacazette",
        flag: "🇫🇷"
      },
      {
        rank: 3,
        name: "Jonathan David",
        flag: "🇨🇦"
      },
      {
        rank: 4,
        name: "Habib Diallo",
        flag: "🇸🇳"
      },
      {
        rank: 5,
        name: "Wissam Ben Yedder",
        flag: "🇫🇷"
      },
      {
        rank: 6,
        name: "Terem Moffi",
        flag: "🇳🇬"
      },
      {
        rank: 7,
        name: "Martin Terrier",
        flag: "🇫🇷"
      },
      {
        rank: 8,
        name: "Gaëtan Laborde",
        flag: "🇫🇷"
      },
      {
        rank: 9,
        name: "Moses Simon",
        flag: "🇳🇬"
      },
      {
        rank: 10,
        name: "Florian Sotoca",
        flag: "🇫🇷"
      }
    ]
  },
  {
    id: "pl-1718",
    title: "Top Scorers — Premier League 2017/18",
    list: [
      {
        rank: 1,
        name: "Mohamed Salah",
        flag: "🇪🇬"
      },
      {
        rank: 2,
        name: "Harry Kane",
        flag: "🇬🇧"
      },
      {
        rank: 3,
        name: "Sergio Agüero",
        flag: "🇦🇷"
      },
      {
        rank: 4,
        name: "Jamie Vardy",
        flag: "🇬🇧"
      },
      {
        rank: 5,
        name: "Raheem Sterling",
        flag: "🇬🇧"
      },
      {
        rank: 6,
        name: "Romelu Lukaku",
        flag: "🇧🇪"
      },
      {
        rank: 7,
        name: "Roberto Firmino",
        flag: "🇧🇷"
      },
      {
        rank: 8,
        name: "Alexandre Lacazette",
        flag: "🇫🇷"
      },
      {
        rank: 9,
        name: "Richarlison",
        flag: "🇧🇷"
      },
      {
        rank: 10,
        name: "Glenn Murray",
        flag: "🇬🇧"
      }
    ]
  },
  {
    id: "pl-1617",
    title: "Top Scorers — Premier League 2016/17",
    list: [
      {
        rank: 1,
        name: "Harry Kane",
        flag: "🇬🇧"
      },
      {
        rank: 2,
        name: "Romelu Lukaku",
        flag: "🇧🇪"
      },
      {
        rank: 3,
        name: "Alexis Sánchez",
        flag: "🇨🇱"
      },
      {
        rank: 4,
        name: "Sergio Agüero",
        flag: "🇦🇷"
      },
      {
        rank: 5,
        name: "Diego Costa",
        flag: "🇪🇸"
      },
      {
        rank: 6,
        name: "Dele Alli",
        flag: "🇬🇧"
      },
      {
        rank: 7,
        name: "Zlatan Ibrahimović",
        flag: "🇸🇪"
      },
      {
        rank: 8,
        name: "Joshua King",
        flag: "🇳🇴"
      },
      {
        rank: 9,
        name: "Christian Benteke",
        flag: "🇧🇪"
      },
      {
        rank: 10,
        name: "Son Heung-min",
        flag: "🇰🇷"
      }
    ]
  },
  {
    id: "pl-1516",
    title: "Top Scorers — Premier League 2015/16",
    list: [
      {
        rank: 1,
        name: "Harry Kane",
        flag: "🇬🇧"
      },
      {
        rank: 2,
        name: "Sergio Agüero",
        flag: "🇦🇷"
      },
      {
        rank: 3,
        name: "Jamie Vardy",
        flag: "🇬🇧"
      },
      {
        rank: 4,
        name: "Romelu Lukaku",
        flag: "🇧🇪"
      },
      {
        rank: 5,
        name: "Riyad Mahrez",
        flag: "🇩🇿"
      },
      {
        rank: 6,
        name: "Olivier Giroud",
        flag: "🇫🇷"
      },
      {
        rank: 7,
        name: "Jermain Defoe",
        flag: "🇬🇧"
      },
      {
        rank: 8,
        name: "Odion Ighalo",
        flag: "🇳🇬"
      },
      {
        rank: 9,
        name: "André Ayew",
        flag: "🇬🇭"
      },
      {
        rank: 10,
        name: "Graziano Pellè",
        flag: "🇮🇹"
      }
    ]
  },
  {
    id: "pl-1415",
    title: "Top Scorers — Premier League 2014/15",
    list: [
      {
        rank: 1,
        name: "Sergio Agüero",
        flag: "🇦🇷"
      },
      {
        rank: 2,
        name: "Harry Kane",
        flag: "🇬🇧"
      },
      {
        rank: 3,
        name: "Diego Costa",
        flag: "🇪🇸"
      },
      {
        rank: 4,
        name: "Charlie Austin",
        flag: "🇬🇧"
      },
      {
        rank: 5,
        name: "Alexis Sánchez",
        flag: "🇨🇱"
      },
      {
        rank: 6,
        name: "Saido Berahino",
        flag: "🇬🇧"
      },
      {
        rank: 7,
        name: "Olivier Giroud",
        flag: "🇫🇷"
      },
      {
        rank: 8,
        name: "Eden Hazard",
        flag: "🇧🇪"
      },
      {
        rank: 9,
        name: "Christian Benteke",
        flag: "🇧🇪"
      },
      {
        rank: 10,
        name: "Romelu Lukaku",
        flag: "🇧🇪"
      }
    ]
  },
  {
    id: "wc-1930",
    title: "Top Scorers — FIFA World Cup 1930",
    list: [
      {
        rank: 1,
        name: "Guillermo Stábile",
        flag: "🇦🇷"
      },
      {
        rank: 2,
        name: "Pedro Cea",
        flag: "🇺🇾"
      },
      {
        rank: 3,
        name: "Bert Patenaude",
        flag: "🇺🇸"
      },
      {
        rank: 4,
        name: "Carlos Peucelle",
        flag: "🇦🇷"
      },
      {
        rank: 5,
        name: "Preguinho",
        flag: "🇧🇷"
      },
      {
        rank: 6,
        name: "Alejandro Scopelli",
        flag: "🇦🇷"
      },
      {
        rank: 7,
        name: "Juan Peregrino Anselmo",
        flag: "🇺🇾"
      },
      {
        rank: 8,
        name: "Luis Monti",
        flag: "🇦🇷"
      },
      {
        rank: 9,
        name: "Moderato Wisintainer",
        flag: "🇧🇷"
      },
      {
        rank: 10,
        name: "Héctor Scarone",
        flag: "🇺🇾"
      }
    ]
  },
  {
    id: "la-liga-2021",
    title: "Top Scorers — La Liga 2020/21",
    list: [
      {
        rank: 1,
        name: "Lionel Messi",
        flag: "🇦🇷"
      },
      {
        rank: 2,
        name: "Karim Benzema",
        flag: "🇫🇷"
      },
      {
        rank: 3,
        name: "Gerard Moreno",
        flag: "🇪🇸"
      },
      {
        rank: 4,
        name: "Luis Suárez",
        flag: "🇺🇾"
      },
      {
        rank: 5,
        name: "Youssef En-Nesyri",
        flag: "🇲🇦"
      },
      {
        rank: 6,
        name: "Alexander Isak",
        flag: "🇸🇪"
      },
      {
        rank: 7,
        name: "Iago Aspas",
        flag: "🇪🇸"
      },
      {
        rank: 8,
        name: "Antoine Griezmann",
        flag: "🇫🇷"
      },
      {
        rank: 9,
        name: "Rafa Mir",
        flag: "🇪🇸"
      },
      {
        rank: 10,
        name: "Joselu",
        flag: "🇪🇸"
      }
    ]
  },
  {
    id: "pl-alltime-assists",
    title: "Top 10 All-Time Most Assists — Premier League",
    list: [
      {
        rank: 1,
        name: "Ryan Giggs",
        flag: "🇬🇧"
      },
      {
        rank: 2,
        name: "Kevin De Bruyne",
        flag: "🇧🇪"
      },
      {
        rank: 3,
        name: "Cesc Fàbregas",
        flag: "🇪🇸"
      },
      {
        rank: 4,
        name: "Wayne Rooney",
        flag: "🇬🇧"
      },
      {
        rank: 5,
        name: "Frank Lampard",
        flag: "🇬🇧"
      },
      {
        rank: 6,
        name: "Dennis Bergkamp",
        flag: "🇳🇱"
      },
      {
        rank: 7,
        name: "David Silva",
        flag: "🇪🇸"
      },
      {
        rank: 8,
        name: "Steven Gerrard",
        flag: "🇬🇧"
      },
      {
        rank: 9,
        name: "James Milner",
        flag: "🇬🇧"
      },
      {
        rank: 10,
        name: "David Beckham",
        flag: "🇬🇧"
      }
    ]
  },
  {
    id: "pl-alltime-clean",
    title: "Top 10 Most Clean Sheets (GK) — Premier League",
    list: [
      {
        rank: 1,
        name: "Petr Čech",
        flag: "🇨🇿"
      },
      {
        rank: 2,
        name: "David James",
        flag: "🇬🇧"
      },
      {
        rank: 3,
        name: "Mark Schwarzer",
        flag: "🇦🇺"
      },
      {
        rank: 4,
        name: "David Seaman",
        flag: "🇬🇧"
      },
      {
        rank: 5,
        name: "Nigel Martyn",
        flag: "🇬🇧"
      },
      {
        rank: 6,
        name: "Pepe Reina",
        flag: "🇪🇸"
      },
      {
        rank: 7,
        name: "Edwin van der Sar",
        flag: "🇳🇱"
      },
      {
        rank: 8,
        name: "Tim Howard",
        flag: "🇺🇸"
      },
      {
        rank: 9,
        name: "Brad Friedel",
        flag: "🇺🇸"
      },
      {
        rank: 10,
        name: "Joe Hart",
        flag: "🇬🇧"
      }
    ]
  },
  {
    id: "intl-goals-alltime",
    title: "Top 10 Most International Goals — International Football",
    list: [
      {
        rank: 1,
        name: "Cristiano Ronaldo",
        flag: "🇵🇹"
      },
      {
        rank: 2,
        name: "Ali Daei",
        flag: "🇮🇷"
      },
      {
        rank: 3,
        name: "Lionel Messi",
        flag: "🇦🇷"
      },
      {
        rank: 4,
        name: "Sunil Chhetri",
        flag: "🇮🇳"
      },
      {
        rank: 5,
        name: "Mokhtar Dahari",
        flag: "🇲🇾"
      },
      {
        rank: 6,
        name: "Romelu Lukaku",
        flag: "🇧🇪"
      },
      {
        rank: 7,
        name: "Ferenc Puskás",
        flag: "🇭🇺"
      },
      {
        rank: 8,
        name: "Robert Lewandowski",
        flag: "🇵🇱"
      },
      {
        rank: 9,
        name: "Neymar",
        flag: "🇧🇷"
      },
      {
        rank: 10,
        name: "Godfrey Chitalu",
        flag: "🇿🇲"
      }
    ]
  },
  {
    id: "intl-caps-alltime",
    title: "Top 10 Most Caps — International Football",
    list: [
      {
        rank: 1,
        name: "Cristiano Ronaldo",
        flag: "🇵🇹"
      },
      {
        rank: 2,
        name: "Bader Al-Mutawa",
        flag: "🇰🇼"
      },
      {
        rank: 3,
        name: "Soh Chin Ann",
        flag: "🇲🇾"
      },
      {
        rank: 4,
        name: "Lionel Messi",
        flag: "🇦🇷"
      },
      {
        rank: 5,
        name: "Ahmed Hassan",
        flag: "🇪🇬"
      },
      {
        rank: 6,
        name: "Sergio Ramos",
        flag: "🇪🇸"
      },
      {
        rank: 7,
        name: "Andrés Guardado",
        flag: "🇲🇽"
      },
      {
        rank: 8,
        name: "Mohamed Al-Deayea",
        flag: "🇸🇦"
      },
      {
        rank: 9,
        name: "Gianluigi Buffon",
        flag: "🇮🇹"
      },
      {
        rank: 10,
        name: "Iker Casillas",
        flag: "🇪🇸"
      }
    ]
  },
  {
    id: "most-expensive-alltime",
    title: "Top 10 Most Expensive All-Time — Football Transfers",
    list: [
      {
        rank: 1,
        name: "Neymar",
        flag: "🇧🇷"
      },
      {
        rank: 2,
        name: "Kylian Mbappé",
        flag: "🇫🇷"
      },
      {
        rank: 3,
        name: "Philippe Coutinho",
        flag: "🇧🇷"
      },
      {
        rank: 4,
        name: "João Félix",
        flag: "🇵🇹"
      },
      {
        rank: 5,
        name: "Enzo Fernández",
        flag: "🇦🇷"
      },
      {
        rank: 6,
        name: "Antoine Griezmann",
        flag: "🇫🇷"
      },
      {
        rank: 7,
        name: "Jack Grealish",
        flag: "🇬🇧"
      },
      {
        rank: 8,
        name: "Moises Caicedo",
        flag: "🇪🇨"
      },
      {
        rank: 9,
        name: "Eden Hazard",
        flag: "🇧🇪"
      },
      {
        rank: 10,
        name: "Romelu Lukaku",
        flag: "🇧🇪"
      }
    ]
  },
  {
    id: "pl-1213",
    title: "Top Scorers — Premier League 2012/13",
    list: [
      {
        rank: 1,
        name: "Robin van Persie",
        flag: "🇳🇱"
      },
      {
        rank: 2,
        name: "Luis Suárez",
        flag: "🇺🇾"
      },
      {
        rank: 3,
        name: "Gareth Bale",
        flag: "🇬🇧"
      },
      {
        rank: 4,
        name: "Christian Benteke",
        flag: "🇧🇪"
      },
      {
        rank: 5,
        name: "Michu",
        flag: "🇪🇸"
      },
      {
        rank: 6,
        name: "Frank Lampard",
        flag: "🇬🇧"
      },
      {
        rank: 7,
        name: "Dimitar Berbatov",
        flag: "🇧🇬"
      },
      {
        rank: 8,
        name: "Demba Ba",
        flag: "🇸🇳"
      },
      {
        rank: 9,
        name: "Rickie Lambert",
        flag: "🇬🇧"
      },
      {
        rank: 10,
        name: "Edin Džeko",
        flag: "🇧🇦"
      }
    ]
  },
  {
    id: "pl-1314",
    title: "Top Scorers — Premier League 2013/14",
    list: [
      {
        rank: 1,
        name: "Luis Suárez",
        flag: "🇺🇾"
      },
      {
        rank: 2,
        name: "Daniel Sturridge",
        flag: "🇬🇧"
      },
      {
        rank: 3,
        name: "Yaya Touré",
        flag: "🇨🇮"
      },
      {
        rank: 4,
        name: "Sergio Agüero",
        flag: "🇦🇷"
      },
      {
        rank: 5,
        name: "Wayne Rooney",
        flag: "🇬🇧"
      },
      {
        rank: 6,
        name: "Wilfried Bony",
        flag: "🇨🇮"
      },
      {
        rank: 7,
        name: "Edin Džeko",
        flag: "🇧🇦"
      },
      {
        rank: 8,
        name: "Olivier Giroud",
        flag: "🇫🇷"
      },
      {
        rank: 9,
        name: "Romelu Lukaku",
        flag: "🇧🇪"
      },
      {
        rank: 10,
        name: "Jay Rodriguez",
        flag: "🇬🇧"
      }
    ]
  },
  {
    id: "pl-1112",
    title: "Top Scorers — Premier League 2011/12",
    list: [
      {
        rank: 1,
        name: "Robin van Persie",
        flag: "🇳🇱"
      },
      {
        rank: 2,
        name: "Wayne Rooney",
        flag: "🇬🇧"
      },
      {
        rank: 3,
        name: "Sergio Agüero",
        flag: "🇦🇷"
      },
      {
        rank: 4,
        name: "Clint Dempsey",
        flag: "🇺🇸"
      },
      {
        rank: 5,
        name: "Yakubu",
        flag: "🇳🇬"
      },
      {
        rank: 6,
        name: "Emmanuel Adebayor",
        flag: "🇹🇬"
      },
      {
        rank: 7,
        name: "Demba Ba",
        flag: "🇸🇳"
      },
      {
        rank: 8,
        name: "Grant Holt",
        flag: "🇬🇧"
      },
      {
        rank: 9,
        name: "Edin Džeko",
        flag: "🇧🇦"
      },
      {
        rank: 10,
        name: "Papiss Cissé",
        flag: "🇸🇳"
      }
    ]
  },
  {
    id: "expensive-gks",
    title: "Top 10 Most Expensive Goalkeepers — Football Transfers",
    list: [
      {
        rank: 1,
        name: "Kepa Arrizabalaga",
        flag: "🇪🇸"
      },
      {
        rank: 2,
        name: "Alisson Becker",
        flag: "🇧🇷"
      },
      {
        rank: 3,
        name: "André Onana",
        flag: "🇨🇲"
      },
      {
        rank: 4,
        name: "Gianluigi Buffon",
        flag: "🇮🇹"
      },
      {
        rank: 5,
        name: "Ederson",
        flag: "🇧🇷"
      },
      {
        rank: 6,
        name: "Jan Oblak",
        flag: "🇸🇮"
      },
      {
        rank: 7,
        name: "Thibaut Courtois",
        flag: "🇧🇪"
      },
      {
        rank: 8,
        name: "Aaron Ramsdale",
        flag: "🇬🇧"
      },
      {
        rank: 9,
        name: "Manuel Neuer",
        flag: "🇩🇪"
      },
      {
        rank: 10,
        name: "David de Gea",
        flag: "🇪🇸"
      }
    ]
  },
  {
    id: "wc-alltime-scorers",
    title: "Top 10 All-Time Top Scorers — FIFA World Cup",
    list: [
      {
        rank: 1,
        name: "Miroslav Klose",
        flag: "🇩🇪"
      },
      {
        rank: 2,
        name: "Ronaldo Nazário",
        flag: "🇧🇷"
      },
      {
        rank: 3,
        name: "Gerd Müller",
        flag: "🇩🇪"
      },
      {
        rank: 4,
        name: "Just Fontaine",
        flag: "🇫🇷"
      },
      {
        rank: 5,
        name: "Lionel Messi",
        flag: "🇦🇷"
      },
      {
        rank: 6,
        name: "Pelé",
        flag: "🇧🇷"
      },
      {
        rank: 7,
        name: "Kylian Mbappé",
        flag: "🇫🇷"
      },
      {
        rank: 8,
        name: "Sándor Kocsis",
        flag: "🇭🇺"
      },
      {
        rank: 9,
        name: "Jürgen Klinsmann",
        flag: "🇩🇪"
      },
      {
        rank: 10,
        name: "Helmut Rahn",
        flag: "🇩🇪"
      }
    ]
  }
];

let _lastIndex = -1;

export function getRandomQuestion(excludeId?: string): Top10Question {
  const available = TOP10_QUESTIONS.filter((q) => q.id !== excludeId);
  const pool = available.length > 0 ? available : TOP10_QUESTIONS;
  const idx = Math.floor(Math.random() * pool.length);
  _lastIndex = idx;
  return pool[idx];
}

export function getDailyQuestion(): Top10Question {
  const today = new Date().toISOString().split("T")[0];
  let h = 0;
  for (let i = 0; i < today.length; i++) h = ((h << 5) - h + today.charCodeAt(i)) | 0;
  return TOP10_QUESTIONS[Math.abs(h) % TOP10_QUESTIONS.length];
}
