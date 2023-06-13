const dataAllMovies = [
  {
		"title": "Fast X",
    "description": "Over many missions and against impossible odds, Dom Toretto and his family have outsmarted, out-nerved and outdriven every foe in their path. Now, they confront the most lethal opponent they've ever faced: A terrifying threat emerging from the shadows of the past who's fueled by blood revenge, and who is determined to shatter this family and destroy everything—and everyone—that Dom loves, forever.",
    "image": "https://image.tmdb.org/t/p/original/fiVW06jE7z9YnO4trhaMEdclSiC.jpg",
    "release_date": "2023-05-17"
  },
  {
		"title": "The Super Mario Bros. Movie",
    "description": "While working underground to fix a water main, Brooklyn plumbers—and brothers—Mario and Luigi are transported down a mysterious pipe and wander into a magical new world. But when the brothers are separated, Mario embarks on an epic quest to find Luigi.",
    "image": "https://image.tmdb.org/t/p/original/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg",
    "release_date": "2023-04-05"
  },
  {
		"title": "Spider-Man: Across the Spider-Verse",
    "description": "After reuniting with Gwen Stacy, Brooklyn’s full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse, where he encounters the Spider Society, a team of Spider-People charged with protecting the Multiverse’s very existence. But when the heroes clash on how to handle a new threat, Miles finds himself pitted against the other Spiders and must set out on his own to save those he loves most.",
    "image": "https://image.tmdb.org/t/p/original/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
    "release_date": "2023-05-31"
  },
  {
		"title": "Hypnotic",
    "description": "A detective becomes entangled in a mystery involving his missing daughter and a secret government program while investigating a string of reality-bending crimes.",
    "image": "https://image.tmdb.org/t/p/original/3IhGkkalwXguTlceGSl8XUJZOVI.jpg",
    "release_date": "2023-05-11"
  },
  {
		"title": "Transformers: Rise of the Beasts",
    "description": "When a new threat capable of destroying the entire planet emerges, Optimus Prime and the Autobots must team up with a powerful faction known as the Maximals. With the fate of humanity hanging in the balance, humans Noah and Elena will do whatever it takes to help the Transformers as they engage in the ultimate battle to save Earth.",
    "image": "https://image.tmdb.org/t/p/original/gPbM0MK8CP8A174rmUwGsADNYKD.jpg",
    "release_date": "2023-06-06"
  },
  {
		"title": "The Black Demon",
    "description": "Oilman Paul Sturges' idyllic family vacation turns into a nightmare when they encounter a ferocious megalodon shark that will stop at nothing to protect its territory. Stranded and under constant attack, Paul and his family must somehow find a way to get his family back to shore alive before it strikes again in this epic battle between humans and nature.",
    "image": "https://image.tmdb.org/t/p/original/uiFcFIjig0YwyNmhoxkxtAAVIL2.jpg",
    "release_date": "2023-04-26"
  },
  {
		"title": "The Little Mermaid",
    "description": "The youngest of King Triton’s daughters, and the most defiant, Ariel longs to find out more about the world beyond the sea, and while visiting the surface, falls for the dashing Prince Eric. With mermaids forbidden to interact with humans, Ariel makes a deal with the evil sea witch, Ursula, which gives her a chance to experience life on land, but ultimately places her life – and her father’s crown – in jeopardy.",
    "image": "https://image.tmdb.org/t/p/original/ym1dxyOk4jFcSl4Q2zmRrA5BEEN.jpg",
    "release_date": "2023-05-18"
  },
  {
		"title": "Evil Dead Rise",
    "description": "Three siblings find an ancient vinyl that gives birth to bloodthirsty demons that run amok in a Los Angeles apartment building and thrusts them into a primal battle for survival as they face the most nightmarish version of family imaginable.\"",
    "image": "https://image.tmdb.org/t/p/original/5ik4ATKmNtmJU6AYD0bLm56BCVM.jpg",
    "release_date": "2023-04-12"
  },
  {
		"title": "Guardians of the Galaxy Vol. 3",
    "description": "Peter Quill, still reeling from the loss of Gamora, must rally his team around him to defend the universe along with protecting one of their own. A mission that, if not completed successfully, could quite possibly lead to the end of the Guardians as we know them.",
    "image": "https://image.tmdb.org/t/p/original/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg",
    "release_date": "2023-05-03"
  },
  {
		"title": "Sisu",
    "description": "Deep in the wilderness of Lapland, Aatami Korpi is searching for gold but after he stumbles upon Nazi patrol, a breathtaking and gold-hungry chase through the destroyed and mined Lapland wilderness begins.",
    "image": "https://image.tmdb.org/t/p/original/ygO9lowFMXWymATCrhoQXd6gCEh.jpg",
    "release_date": "2023-01-27"
  },
  {
		"title": "The Pope's Exorcist",
    "description": "Father Gabriele Amorth, Chief Exorcist of the Vatican, investigates a young boy's terrifying possession and ends up uncovering a centuries-old conspiracy the Vatican has desperately tried to keep hidden.",
    "image": "https://image.tmdb.org/t/p/original/gNPqcv1tAifbN7PRNgqpzY8sEJZ.jpg",
    "release_date": "2023-04-05"
  },
  {
		"title": "Project Wolf Hunting",
    "description": "While under heavily armed guard, the dangerous convicts aboard a cargo ship unite in a coordinated escape attempt that soon escalates into a bloody, all-out riot. But as the fugitives continue their brutal campaign of terror, they soon discover that not even the most vicious among them is safe from the horror they unknowingly unleashed from the darkness below deck.",
    "image": "https://image.tmdb.org/t/p/original/dniWicB6fa7NvpGbguxWlNPMc5f.jpg",
    "release_date": "2022-09-21"
  },
  {
		"title": "To Catch a Killer",
    "description": "Baltimore. New Year's Eve. A talented but troubled police officer is recruited by the FBI's chief investigator to help profile and track down a mass murderer.",
    "image": "https://image.tmdb.org/t/p/original/mFp3l4lZg1NSEsyxKrdi0rNK8r1.jpg",
    "release_date": "2023-04-06"
  },
  {
		"title": "Guy Ritchie's The Covenant",
    "description": "During the war in Afghanistan, a local interpreter risks his own life to carry an injured sergeant across miles of grueling terrain.",
    "image": "https://image.tmdb.org/t/p/original/jZy73aPYrwwhuc37ALgnJUCaTnK.jpg",
    "release_date": "2023-04-19"
  },
  {
		"title": "The Mother",
    "description": "A deadly female assassin comes out of hiding to protect the daughter that she gave up years before, while on the run from dangerous men.",
    "image": "https://image.tmdb.org/t/p/original/vnRthEZz16Q9VWcP5homkHxyHoy.jpg",
    "release_date": "2023-05-04"
  },
  {
		"title": "Snag",
    "description": "An Australian lone wolf's quiet existence is shattered when he learns that the woman he once loved and thought was dead is alive and held captive by ruthless gangsters. Now, to take on this dangerous criminal organization, he must seek out allies and storm into a world of violence to rescue the love of his life in this gritty, modern day violent fairytale.",
    "image": "https://image.tmdb.org/t/p/original/nhj4Q39qMSk6X5Ly9j9Yqyjrg5A.jpg",
    "release_date": "2023-04-28"
  },
  {
		"title": "The Wandering Earth II",
    "description": "A prequel to The Wandering Earth.",
    "image": "https://image.tmdb.org/t/p/original/pR858ihc6Ls9xohpdRJVjV787ml.jpg",
    "release_date": "2023-01-22"
  },
  {
		"title": "Sword Art Online the Movie -Progressive- Scherzo of Deep Night",
    "description": "Over a month has passed since 10,000 users were trapped inside the \"Sword Art Online\" world. Asuna, who cleared the first floor of the floating iron castle of Aincrad, joined up with Kirito and continued her journey to reach the top floor. With the support of female Information Broker Argo, clearing the floors seemed to be progressing smoothly, but conflict erupts between two major guilds who should be working together – the top player groups ALS (the Aincrad Liberation Squad) and DKB (the Dragon Knights Brigade). And meanwhile, behind the scenes exists a mysterious figure pulling the strings…",
    "image": "https://image.tmdb.org/t/p/original/2lEyzOq6ILNgBpLLpTRckQhbNNt.jpg",
    "release_date": "2022-10-22"
  },
  {
		"title": "Ride On",
    "description": "The once beautiful, now down-and-out Dragon Tiger martial artist Lao Luo lives with his beloved horse, Red Rabbit. Due to a debt dispute involving Red Rabbit, he is faced with the crisis of \"father-son separation\". In desperation, Lao Luo asks his daughter Bao and her boyfriend Naihua, who have misunderstood him for years, for help. On the road of self-help of three people and one horse, they make a lot of jokes and gradually get closer to each other.",
    "image": "https://image.tmdb.org/t/p/original/ukFo9pwVJ5mzTgmFCanYsYC4roF.jpg",
    "release_date": "2023-04-07"
  },
  {
		"title": "Scream VI",
    "description": "Following the latest Ghostface killings, the four survivors leave Woodsboro behind and start a fresh chapter.",
    "image": "https://image.tmdb.org/t/p/original/wDWwtvkRRlgTiUr6TyLSMX8FCuZ.jpg",
    "release_date": "2023-03-08"
  }
]

const dataAllGenres = [];

module.exports = {
  dataAllMovies,
  dataAllGenres
}