// Sample Anime Data
const animeData = [
    {
        id: 1,
        title: "Attack on Titan",
        genre: "action",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=500&h=700&fit=crop",
        description: "Humanity's last hope lies within the Walls, massive structures that protect them from the man-eating Titans. Follow Eren Yeager's journey for freedom and revenge.",
        tags: ["Dark Fantasy", "Military", "Post-Apocalyptic"]
    },
    {
        id: 2,
        title: "Your Name",
        genre: "romance",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?w=500&h=700&fit=crop",
        description: "Two teenagers share a profound, magical connection upon discovering they are swapping bodies. A beautiful tale of love transcending time and space.",
        tags: ["Romance", "Supernatural", "Drama"]
    },
    {
        id: 3,
        title: "Demon Slayer",
        genre: "action",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=700&fit=crop",
        description: "After his family is killed by demons, Tanjiro Kamado embarks on a dangerous journey to turn his sister back into a human and avenge his family.",
        tags: ["Action", "Supernatural", "Historical"]
    },
    {
        id: 4,
        title: "Spirited Away",
        genre: "fantasy",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=500&h=700&fit=crop",
        description: "A young girl enters a magical world of spirits and witches to save her parents. An enchanting journey through Studio Ghibli's masterpiece.",
        tags: ["Fantasy", "Adventure", "Coming of Age"]
    },
    {
        id: 5,
        title: "Cowboy Bebop",
        genre: "sci-fi",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1580477667995-2b94f01c9516?w=500&h=700&fit=crop",
        description: "Follow bounty hunters traveling through space in 2071. A perfect blend of jazz, action, and philosophical storytelling in a neo-noir setting.",
        tags: ["Space Western", "Noir", "Action"]
    },
    {
        id: 6,
        title: "My Hero Academia",
        genre: "action",
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=500&h=700&fit=crop",
        description: "In a world where superpowers are the norm, a powerless boy inherits the abilities of the world's greatest hero and enrolls in a prestigious hero academy.",
        tags: ["Superhero", "School", "Coming of Age"]
    },
    {
        id: 7,
        title: "A Silent Voice",
        genre: "romance",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1544376664-80b17f09d399?w=500&h=700&fit=crop",
        description: "A former bully seeks redemption by reconnecting with the deaf girl he once tormented. A touching story about forgiveness and self-acceptance.",
        tags: ["Drama", "Romance", "School Life"]
    },
    {
        id: 8,
        title: "Made in Abyss",
        genre: "fantasy",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1618172193622-ae2d025f4032?w=500&h=700&fit=crop",
        description: "A young orphan and her robot companion journey into the mysterious Abyss, a massive chasm filled with ancient relics and strange creatures.",
        tags: ["Adventure", "Dark Fantasy", "Mystery"]
    },
    {
        id: 9,
        title: "Steins;Gate",
        genre: "sci-fi",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=700&fit=crop",
        description: "A self-proclaimed mad scientist accidentally invents time travel with a microwave. What starts as fun becomes a desperate struggle to save everyone.",
        tags: ["Time Travel", "Thriller", "Sci-Fi"]
    },
    {
        id: 10,
        title: "Violet Evergarden",
        genre: "romance",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1508615039623-a25605d2b022?w=500&h=700&fit=crop",
        description: "A former soldier becomes an Auto Memory Doll, writing letters for others while searching for the meaning behind her major's final words: 'I love you.'",
        tags: ["Drama", "Post-War", "Emotional"]
    },
    {
        id: 11,
        title: "Howl's Moving Castle",
        genre: "fantasy",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=500&h=700&fit=crop",
        description: "A young woman cursed with old age finds refuge in the magical moving castle of a mysterious wizard. A Ghibli tale of love and self-discovery.",
        tags: ["Fantasy", "Magic", "Adventure"]
    },
    {
        id: 12,
        title: "Anohana",
        genre: "slice-of-life",
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=500&h=700&fit=crop",
        description: "A group of childhood friends reunite to help the ghost of their deceased friend fulfill her final wish and find closure from their past.",
        tags: ["Drama", "Supernatural", "Coming of Age"]
    },
    {
        id: 13,
        title: "One Punch Man",
        genre: "action",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=500&h=700&fit=crop",
        description: "A hero who can defeat any opponent with a single punch searches for a worthy opponent. A hilarious parody of superhero tropes with amazing animation.",
        tags: ["Comedy", "Superhero", "Parody"]
    },
    {
        id: 14,
        title: "Weathering With You",
        genre: "romance",
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1514897575457-c4db467cf78e?w=500&h=700&fit=crop",
        description: "A runaway boy meets a girl who can manipulate the weather. A stunning romance about sacrifice and the choices we make for those we love.",
        tags: ["Romance", "Supernatural", "Drama"]
    },
    {
        id: 15,
        title: "Akira",
        genre: "sci-fi",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=700&fit=crop",
        description: "In a dystopian Neo-Tokyo, a biker gang member gains psychic powers. A groundbreaking cyberpunk masterpiece that defined anime for generations.",
        tags: ["Cyberpunk", "Dystopian", "Action"]
    },
    {
        id: 16,
        title: "Barakamon",
        genre: "slice-of-life",
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=700&fit=crop",
        description: "A calligrapher exiles himself to a remote island and finds inspiration through the quirky locals. A heartwarming story about art and self-discovery.",
        tags: ["Comedy", "Coming of Age", "Countryside"]
    },
    {
        id: 17,
        title: "Princess Mononoke",
        genre: "fantasy",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&h=700&fit=crop",
        description: "A young warrior gets caught in the struggle between forest gods and humans. Ghibli's epic tale of nature, industry, and finding balance.",
        tags: ["Fantasy", "Adventure", "Environmental"]
    },
    {
        id: 18,
        title: "Neon Genesis Evangelion",
        genre: "sci-fi",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=500&h=700&fit=crop",
        description: "Teenagers pilot giant mechs to fight mysterious beings called Angels. A psychological deconstruction of the mecha genre that changed anime forever.",
        tags: ["Mecha", "Psychological", "Post-Apocalyptic"]
    },
    {
        id: 19,
        title: "Clannad: After Story",
        genre: "slice-of-life",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=500&h=700&fit=crop",
        description: "The continuation of a high school love story into adulthood, family, and responsibility. Prepare for one of anime's most emotional experiences.",
        tags: ["Drama", "Romance", "Family"]
    },
    {
        id: 20,
        title: "Mob Psycho 100",
        genre: "action",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?w=500&h=700&fit=crop",
        description: "An extremely powerful psychic tries to live a normal life while his emotions threaten to explode. From the creator of One Punch Man, with unique animation.",
        tags: ["Supernatural", "Comedy", "Coming of Age"]
    },
    {
        id: 21,
        title: "Garden of Words",
        genre: "romance",
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1428908728789-d2de25dbd4e2?w=500&h=700&fit=crop",
        description: "A student and a mysterious woman meet in a garden on rainy days. A visually stunning short film about connection, loneliness, and finding your path.",
        tags: ["Romance", "Drama", "Short Film"]
    }
];
