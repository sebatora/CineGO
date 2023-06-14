const dataAllMovies = [
  {
    "title": "Rápidos y Furiosos X",
    "description": "Durante numerosas misiones más que imposibles, Dom Toretto y su familia han sido capaces de ser más listos, de tener más valor y de ir más rápido que cualquier enemigo que se cruzara con ellos. Pero ahora tendrán que enfrentarse al oponente más letal que jamás hayan conocido: un terrible peligro que resurge del pasado, que se mueve por una sangrienta sed de venganza y que está dispuesto a destrozar a la familia y destruir para siempre todo lo que a Dom le importa.",
    "image": "https://image.tmdb.org/t/p/original/fiVW06jE7z9YnO4trhaMEdclSiC.jpg",
    "actors": "Vin Diesel, Michelle Rodriguez, Tyrese Gibson, Ludacris, John Cena, Jason Momoa, Jason Statham",
    "director": "Louis Leterrier",
    "duration": 141,
    "release_date": "2023-05-17",
    "trailer": "https://www.youtube.com/watch?v=FDhvbIqTQwI",
    "clasification": "+13",
  },
  {
    "title": "John Wick 4",
    "description": "John Wick descubre un camino para derrotar a la Alta Mesa. Pero para poder ganar su libertad, Wick deberá enfrentarse a un nuevo rival con poderosas alianzas en todo el mundo, capaz de convertir a viejos amigos en enemigos.",
    "image": "https://image.tmdb.org/t/p/original/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
    "actors": "Keanu Reeves, Donnie Yen, Ian McShane, Laurence FishBurne, Rina Sawyama, Lance Reddick, Clancy Brown",
    "director": "Chad Stahelski",
    "duration": 169,
    "release_date": "2023-03-22",
    "trailer": "https://www.youtube.com/watch?v=qEVUtrk8_B4",
    "clasification": "+13",
  },
  {
    "title": "Súper Mario Bros. La película",
    "description": "Mientras trabajan en una avería subterránea, los fontaneros de Brooklyn, Mario y su hermano Luigi, viajan por una misteriosa tubería hasta un nuevo mundo mágico. Pero, cuando los hermanos se separan, Mario deberá emprender una épica misión para encontrar a Luigi.",
    "image": "https://image.tmdb.org/t/p/original/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg",
    "actors": "Chris Pratt, Charlie Day, Anya Taylor-Joy, Jack Black, Seth Rogen",
    "director": "Aaron Horvath",
    "duration": 92,
    "release_date": "2023-04-05",
    "trailer": "https://www.youtube.com/watch?v=SvJwEiy2Wok",
    "clasification": "ATP",
  },
  {
    "title": "Hypnotic",
    "description": "Un detective se ve envuelto en un misterio en el que está involucrada su hija desaparecida y un programa secreto del gobierno mientras investiga una serie de atracos de alto nivel.",
    "image": "https://image.tmdb.org/t/p/original/3IhGkkalwXguTlceGSl8XUJZOVI.jpg",
    "actors": "Ben Affleck, Alice Braga, J. D. Pardo, Dayo Okeniyi, Jeff Fahey, Jackie Earle Haley",
    "director": "Robert Rodriguez",
    "duration": 92,
    "release_date": "2023-05-11",
    "trailer": "https://www.youtube.com/watch?v=N-qn4h-amyY",
    "clasification": "+13",
  },
  {
    "title": "Spider-Man: Cruzando el Multiverso",
    "description": "Miles Morales regresa para una aventura épica que transportará al amigable vecino de Brooklyn Spider-Man a través del Multiverso para unir fuerzas con Gwen Stacy y un nuevo equipo de Spider-People, y enfrentarse así a un villano mucho más poderoso que cualquier cosa que hayan conocido antes.",
    "image": "https://image.tmdb.org/t/p/original/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
    "actors": "Shameik Moore, Hailee Steinfeld, Brian Tyree Henry, Luna Lauren Velez, Jake Johnson",
    "director": "Kemp Powers",
    "duration": 136,
    "release_date": "2023-05-31",
    "trailer": "https://www.youtube.com/watch?v=b3_1cyJRaQ8",
    "clasification": "ATP",
  },
  {
    "title": "Transformers: El despertar de las bestias",
    "description": "La batalla en la Tierra ya no es solo entre Autobots y Decepticons... Maximals, Predacons y Terrorcons se unen a Transformers: Rise of the Beasts.",
    "image": "https://image.tmdb.org/t/p/original/gPbM0MK8CP8A174rmUwGsADNYKD.jpg",
    "actors": "Anthony Ramos, Dominique Fishback, Peter Cullen, Ron Perlman, Peter Dinklage, Michelle Yeoh, Pete Davidson",
    "director": "Steven Caple Jr.",
    "duration": 127,
    "release_date": "2023-06-06",
    "trailer": "https://www.youtube.com/watch?v=v0d0id78XdE",
    "clasification": "ATP",
  },
  {
    "title": "Avatar: El sentido del agua",
    "description": "Ambientada más de una década después de los acontecimientos de la primera película, 'Avatar: The Way of Water' empieza contando la historia de la familia Sully (Jake, Neytiri y sus hijos), los problemas que los persiguen, lo que tienen que hacer para mantenerse a salvo, las batallas que libran para seguir con vida y las tragedias que sufren.",
    "image": "https://image.tmdb.org/t/p/original/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
    "actors": "Sam Worthington, Zoe Saldaña, Sigourney Weaver, Stephen Lang, Kate Winslet, Cliff Curtis, Joel David Moore",
    "director": "James Cameron",
    "duration": 192,
    "release_date": "2022-12-14",
    "trailer": "https://www.youtube.com/watch?v=FSyWAxUg3Go",
    "clasification": "ATP",
  },
  {
    "title": "Guardianes de la Galaxia: Volumen 3",
    "description": "Star-Lord, todavía recuperándose de la pérdida de Gamora, debe reunir a su equipo para defender el universo junto con la protección de uno de los suyos. Una misión que, si no se completa, podría llevar al final de los Guardianes tal como los conocemos.",
    "image": "https://image.tmdb.org/t/p/original/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg",
    "actors": "Chris Pratt, Zoe Saldaña, Dave Bautista, Karen Gillan, Pom Klementieff, Vin Diesel, Bradley Cooper",
    "director": "James Gunn",
    "duration": 149,
    "release_date": "2023-05-03",
    "trailer": "https://www.youtube.com/watch?v=9SfnkovRye8",
    "clasification": "ATP",
  },
  {
    "title": "El exorcista del papa",
    "description": "Película sobre Gabriele Amorth, un sacerdote que ejerció como exorcista principal del Vaticano, realizando más de cien mil exorcismos a lo largo de su vida. Amorth escribió dos libros de memorias donde detalló sus experiencias luchando contra Satanás.",
    "image": "https://image.tmdb.org/t/p/original/gNPqcv1tAifbN7PRNgqpzY8sEJZ.jpg",
    "actors": "Russell Crowe, Daniel Zovatto, Alex Essoe, Franco Nero, Peter DeSouza-Feighoney, Laurel Marsden, Cornell John",
    "director": "Julius Avery",
    "duration": 103,
    "release_date": "2023-04-05",
    "trailer": "https://www.youtube.com/watch?v=a-Cx7IE04sA",
    "clasification": "+16",
},
  {
    "title": "Día de la Madre",
    "description": "Nina, una secreta ex agente de operaciones especiales de la OTAN, debe usar todas sus habilidades letales para salvar a su hijo que ha sido secuestrado por gángsters despiadados. Encontrar a Max es una doble oportunidad para ella. Una oportunidad para una nueva sensación de adrenalina y la posibilidad de volver a la vida para su hijo, a quien debió haber tenido más.",
    "image": "https://image.tmdb.org/t/p/original/wws9Z90DdZ7D0n3gdzFSZ6cntJi.jpg",
    "actors": "Agnieszka Grochowska, Adrian Delikta, Dariusz Chojnacki, Paulina Chruściel, Paweł Koślik, Arkadiusz Brykalski",
    "director": "Mateusz Rakowicz",
    "duration": 94,
    "release_date": "2023-05-24",
    "trailer": "https://www.youtube.com/watch?v=JGSyCa9dXCc",
    "clasification": "+13",
  },
  {
    "title": "Ant-Man y la Avispa: Quantumanía",
    "description": "La pareja de superhéroes Scott Lang y Hope van Dyne regresa para continuar sus aventuras como Ant-Man y la Avispa. Los dos, junto a los padres de Hope, Hank Pym y Janet van Dyne y la hija de Scott, Cassie Lang, se dedican a explorar el Mundo Cuántico, interactuando con nuevas y extrañas criaturas y embarcándose en una aventura que les llevará más allá de los límites de lo que creían posible.",
    "image": "https://image.tmdb.org/t/p/original/qnqGbB22YJ7dSs4o6M7exTpNxPz.jpg",
    "actors": "Paul Rudd, Evangeline Lilly, Jonathan Majors, Kathryn Newton, Michelle Pfeiffer, Michael Douglas, Corey Stoll, Bill Murray, William Jackson Harper",
    "director": "Peyton Reed",
    "duration": 125,
    "release_date": "2023-02-15",
    "trailer": "https://www.youtube.com/watch?v=BaLJ044I2HI",
    "clasification": "ATP",
  },
  {
    "title": "Sangre y oro",
    "description": "La pareja de superhéroes Scott Lang y Hope van Dyne regresa para continuar sus aventuras como Ant-Man y la Avispa. Los dos, junto a los padres de Hope, Hank Pym y Janet van Dyne y la hija de Scott, Cassie Lang, se dedican a explorar el Mundo Cuántico, interactuando con nuevas y extrañas criaturas y embarcándose en una aventura que les llevará más allá de los límites de lo que creían posible.",
    "image": "https://image.tmdb.org/t/p/original/xayG1dbIjJkmvimekx6TNrMOXmA.jpg",
    "actors": "Robert Maaser, Jördis Triebel, Marie Hacke, Alexander Scheer, Roy McCrerey, Stephan Grossmann, Florian Schmidtke",
    "director": "Peter Thorwarth",
    "duration": 98,
    "release_date": "2023-04-21",
    "trailer": "https://www.youtube.com/watch?v=KPnADs2iQzY",
    "clasification": "+13",
  },
]

const dataAllGenres = [  
  {    
    "name": "Acción"  
  },  
  {    
    "name": "Aventura"  
  },  
  {    
    "name": "Animación"  
  },  
  {    
    "name": "Comedia"  
  },  
  {    
    "name": "Crimen"  
  },  
  {    
    "name": "Documental"  
  },  
  {    
    "name": "Drama"  
  },  
  {    
    "name": "Familia"  
  },  
  {    
    "name": "Fantasía"  
  },  
  {    
    "name": "Historia"  
  },  
  {    
    "name": "Terror"  
  },  
  {    
    "name": "Música"  
  },  
  {    
    "name": "Misterio"  
  },  
  {    
    "name": "Romance"  
  },  
  {    
    "name": "Ciencia ficción"  
  },  
  {    
    "name": "Película de TV"  
  },  
  {    
    "name": "Suspense"  
  },  
  {    
    "name": "Guerra"  
  },  
  {    
    "name": "Western"  
  }
]


module.exports = {
  dataAllMovies,
  dataAllGenres
}