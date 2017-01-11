const data = {
  navigationData: [
    {
      text: '',
      link: '/',
      icon: 'home',
    },
    {
      text: 'Cats',
      link: '/cats',
    },
    {
      text: 'Cat food',
      link: '/catfood',
    },
    {
      text: 'About',
      link: '/about',
    },
    {
      text: 'Contact',
      link: '/contact',
    },
    {
      text: '',
      icon: 'cart',
      link: '/cart',
    },
  ],
  categories: {
    cats: {
      desc: 'Cats',
      items: [
        { name: 'American Curl', slug: 'american-curl' },
        { name: 'British Shorthair', slug: 'british-shorthair' },
        { name: 'Burmese', slug: 'burmese' },
        { name: 'Snowshoe', slug: 'snowshoe' },
        { name: 'Manx', slug: 'manx' },
        { name: 'Siamese Cat', slug: 'siamese-cat' },
        { name: 'Himalayan', slug: 'himalayan' },
        { name: 'Japanese Bobtail', slug: 'japanese-bobtail' },
        { name: 'Javanese', slug: 'javanese' },
        { name: 'Korat', slug: 'korat' },
        { name: 'LaPerm', slug: 'laperm' },
        { name: 'Nebelung', slug: 'nebelung' },
        { name: 'Norwegian Forest', slug: 'norwegian-forest' },
        { name: 'Russian Blue', slug: 'russian-blue' },
        { name: 'Savannah', slug: 'savannah' },
        { name: 'Persian', slug: 'persian' },
      ],
    },
    catfood: {
      desc: 'Cat Food',
      items: [
        {
          name: 'Felix',
          slug: 'felix',
        },
        {
          name: 'animonda',
          slug: 'animonda',
        },
        {
          name: 'MultiFit',
          slug: 'multifit',
        },
        {
          name: 'Miamor',
          slug: 'miamor',
        },
        {
          name: 'Kitekat',
          slug: 'kitekat',
        },
      ],
    },
  },
  products: {
    cats: [{ name: 'Bubbles',
      slug: 'bubbles',
      breed: 'Javanese',
      breedSlug: 'javanese',
      price: 77.99,
      weight: 51,
      category: 'cat',
      age: 17,
      gender: 'female' },
    { name: 'Bundles',
      slug: 'bundles',
      breed: 'LaPerm',
      breedSlug: 'laperm',
      price: 110.99,
      weight: 51,
      category: 'cat',
      age: 17,
      gender: 'female' },
    { name: 'Bunny',
      slug: 'bunny',
      breed: 'Burmese',
      breedSlug: 'burmese',
      price: 91.99,
      weight: 33,
      category: 'cat',
      age: 11,
      gender: 'male' },
    { name: 'Buttercup',
      slug: 'buttercup',
      breed: 'American Curl',
      breedSlug: 'american-curl',
      price: 94.99,
      weight: 57,
      category: 'cat',
      age: 19,
      gender: 'male' },
    { name: 'Button',
      slug: 'button',
      breed: 'Manx',
      breedSlug: 'manx',
      price: 72.99,
      weight: 57,
      category: 'cat',
      age: 19,
      gender: 'male' },
    { name: 'Chipmunk',
      slug: 'chipmunk',
      breed: 'Korat',
      breedSlug: 'korat',
      price: 89.99,
      weight: 39,
      category: 'cat',
      age: 13,
      gender: 'male' },
    { name: 'Cinnamon',
      slug: 'cinnamon',
      breed: 'Burmese',
      breedSlug: 'burmese',
      price: 78.99,
      weight: 30,
      category: 'cat',
      age: 10,
      gender: 'female' },
    { name: 'Cuddles',
      slug: 'cuddles',
      breed: 'LaPerm',
      breedSlug: 'laperm',
      price: 73.99,
      weight: 51,
      category: 'cat',
      age: 17,
      gender: 'female' },
    { name: 'Daisy',
      slug: 'daisy',
      breed: 'Japanese Bobtail',
      breedSlug: 'japanese-bobtail',
      price: 55.99,
      weight: 48,
      category: 'cat',
      age: 16,
      gender: 'male' },
    { name: 'Dimples',
      slug: 'dimples',
      breed: 'Himalayan',
      breedSlug: 'himalayan',
      price: 150.99,
      weight: 33,
      category: 'cat',
      age: 11,
      gender: 'female' },
    { name: 'Hiccup',
      slug: 'hiccup',
      breed: 'Savannah',
      breedSlug: 'savannah',
      price: 144.99,
      weight: 48,
      category: 'cat',
      age: 16,
      gender: 'male' },
    { name: 'Huggie',
      slug: 'huggie',
      breed: 'Javanese',
      breedSlug: 'javanese',
      price: 133.99,
      weight: 33,
      category: 'cat',
      age: 11,
      gender: 'female' },
    { name: 'Jellybean',
      slug: 'jellybean',
      breed: 'Siamese Cat',
      breedSlug: 'siamese-cat',
      price: 128.99,
      weight: 39,
      category: 'cat',
      age: 13,
      gender: 'male' },
    { name: 'Jiggles',
      slug: 'jiggles',
      breed: 'LaPerm',
      breedSlug: 'laperm',
      price: 76.99,
      weight: 57,
      category: 'cat',
      age: 19,
      gender: 'female' },
    { name: 'Jujube',
      slug: 'jujube',
      breed: 'Nebelung',
      breedSlug: 'nebelung',
      price: 60.99,
      weight: 39,
      category: 'cat',
      age: 13,
      gender: 'female' },
    { name: 'Kitkat',
      slug: 'kitkat',
      breed: 'Manx',
      breedSlug: 'manx',
      price: 81.99,
      weight: 36,
      category: 'cat',
      age: 12,
      gender: 'male' },
    { name: 'Lollipop',
      slug: 'lollipop',
      breed: 'Himalayan',
      breedSlug: 'himalayan',
      price: 82.99,
      weight: 30,
      category: 'cat',
      age: 10,
      gender: 'male' },
    { name: 'Marshmallow',
      slug: 'marshmallow',
      breed: 'Japanese Bobtail',
      breedSlug: 'japanese-bobtail',
      price: 148.99,
      weight: 54,
      category: 'cat',
      age: 18,
      gender: 'female' },
    { name: 'Munchkin',
      slug: 'munchkin',
      breed: 'American Curl',
      breedSlug: 'american-curl',
      price: 64.99,
      weight: 39,
      category: 'cat',
      age: 13,
      gender: 'male' },
    { name: 'Nibbles',
      slug: 'nibbles',
      breed: 'Burmese',
      breedSlug: 'burmese',
      price: 123.99,
      weight: 39,
      category: 'cat',
      age: 13,
      gender: 'female' },
    { name: 'Nugget',
      slug: 'nugget',
      breed: 'Burmese',
      breedSlug: 'burmese',
      price: 61.99,
      weight: 42,
      category: 'cat',
      age: 14,
      gender: 'female' },
    { name: 'Panda',
      slug: 'panda',
      breed: 'Javanese',
      breedSlug: 'javanese',
      price: 133.99,
      weight: 33,
      category: 'cat',
      age: 11,
      gender: 'male' },
    { name: 'Peaches',
      slug: 'peaches',
      breed: 'Snowshoe',
      breedSlug: 'snowshoe',
      price: 127.99,
      weight: 42,
      category: 'cat',
      age: 14,
      gender: 'female' },
    { name: 'Pickles',
      slug: 'pickles',
      breed: 'Manx',
      breedSlug: 'manx',
      price: 141.99,
      weight: 51,
      category: 'cat',
      age: 17,
      gender: 'male' },
    { name: 'Pixie',
      slug: 'pixie',
      breed: 'British Shorthair',
      breedSlug: 'british-shorthair',
      price: 142.99,
      weight: 54,
      category: 'cat',
      age: 18,
      gender: 'male' },
    { name: 'Pocket',
      slug: 'pocket',
      breed: 'American Curl',
      breedSlug: 'american-curl',
      price: 54.99,
      weight: 54,
      category: 'cat',
      age: 18,
      gender: 'male' },
    { name: 'Schmoopy',
      slug: 'schmoopy',
      breed: 'Savannah',
      breedSlug: 'savannah',
      price: 64.99,
      weight: 33,
      category: 'cat',
      age: 11,
      gender: 'male' },
    { name: 'Skittles',
      slug: 'skittles',
      breed: 'Russian Blue',
      breedSlug: 'russian-blue',
      price: 101.99,
      weight: 51,
      category: 'cat',
      age: 17,
      gender: 'female' },
    { name: 'Snickers',
      slug: 'snickers',
      breed: 'Javanese',
      breedSlug: 'javanese',
      price: 144.99,
      weight: 57,
      category: 'cat',
      age: 19,
      gender: 'female' },
    { name: 'Snowball',
      slug: 'snowball',
      breed: 'Himalayan',
      breedSlug: 'himalayan',
      price: 81.99,
      weight: 36,
      category: 'cat',
      age: 12,
      gender: 'female' },
    { name: 'Snuggles',
      slug: 'snuggles',
      breed: 'Nebelung',
      breedSlug: 'nebelung',
      price: 63.99,
      weight: 30,
      category: 'cat',
      age: 10,
      gender: 'male' },
    { name: 'Squiggle',
      slug: 'squiggle',
      breed: 'Korat',
      breedSlug: 'korat',
      price: 96.99,
      weight: 51,
      category: 'cat',
      age: 17,
      gender: 'female' },
    { name: 'Taffy',
      slug: 'taffy',
      breed: 'Russian Blue',
      breedSlug: 'russian-blue',
      price: 97.99,
      weight: 42,
      category: 'cat',
      age: 14,
      gender: 'female' },
    { name: 'Teacup',
      slug: 'teacup',
      breed: 'Himalayan',
      breedSlug: 'himalayan',
      price: 63.99,
      weight: 54,
      category: 'cat',
      age: 18,
      gender: 'male' },
    { name: 'Tipsy',
      slug: 'tipsy',
      breed: 'LaPerm',
      breedSlug: 'laperm',
      price: 140.99,
      weight: 39,
      category: 'cat',
      age: 13,
      gender: 'male' },
    { name: 'Twinkles',
      slug: 'twinkles',
      breed: 'Snowshoe',
      breedSlug: 'snowshoe',
      price: 115.99,
      weight: 51,
      category: 'cat',
      age: 17,
      gender: 'male' },
    { name: 'Velvet',
      slug: 'velvet',
      breed: 'American Curl',
      breedSlug: 'american-curl',
      price: 138.99,
      weight: 54,
      category: 'cat',
      age: 18,
      gender: 'male' },
    { name: 'Waffles',
      slug: 'waffles',
      breed: 'Snowshoe',
      breedSlug: 'snowshoe',
      price: 82.99,
      weight: 57,
      category: 'cat',
      age: 19,
      gender: 'female' },
    { name: 'Wiggles',
      slug: 'wiggles',
      breed: 'Siamese Cat',
      breedSlug: 'siamese-cat',
      price: 58.99,
      weight: 42,
      category: 'cat',
      age: 14,
      gender: 'female' },
    { name: 'Winky',
      slug: 'winky',
      breed: 'LaPerm',
      breedSlug: 'laperm',
      price: 114.99,
      weight: 30,
      category: 'cat',
      age: 10,
      gender: 'female' },
    { name: 'Amigo',
      slug: 'amigo',
      breed: 'Siamese Cat',
      breedSlug: 'siamese-cat',
      price: 139.99,
      weight: 51,
      category: 'cat',
      age: 17,
      gender: 'male' },
    { name: 'Banjo',
      slug: 'banjo',
      breed: 'Japanese Bobtail',
      breedSlug: 'japanese-bobtail',
      price: 107.99,
      weight: 54,
      category: 'cat',
      age: 18,
      gender: 'male' },
    { name: 'Cosmo',
      slug: 'cosmo',
      breed: 'Korat',
      breedSlug: 'korat',
      price: 93.99,
      weight: 39,
      category: 'cat',
      age: 13,
      gender: 'male' },
    { name: 'Crocket',
      slug: 'crocket',
      breed: 'British Shorthair',
      breedSlug: 'british-shorthair',
      price: 120.99,
      weight: 42,
      category: 'cat',
      age: 14,
      gender: 'male' },
    { name: 'Donatello',
      slug: 'donatello',
      breed: 'Snowshoe',
      breedSlug: 'snowshoe',
      price: 132.99,
      weight: 39,
      category: 'cat',
      age: 13,
      gender: 'male' },
    { name: 'Electro',
      slug: 'electro',
      breed: 'Japanese Bobtail',
      breedSlug: 'japanese-bobtail',
      price: 109.99,
      weight: 33,
      category: 'cat',
      age: 11,
      gender: 'male' },
    { name: 'Elvis',
      slug: 'elvis',
      breed: 'Nebelung',
      breedSlug: 'nebelung',
      price: 68.99,
      weight: 54,
      category: 'cat',
      age: 18,
      gender: 'male' },
    { name: 'Euripides',
      slug: 'euripides',
      breed: 'Russian Blue',
      breedSlug: 'russian-blue',
      price: 106.99,
      weight: 57,
      category: 'cat',
      age: 19,
      gender: 'male' },
    { name: 'Figaro',
      slug: 'figaro',
      breed: 'Norwegian Forest',
      breedSlug: 'norwegian-forest',
      price: 88.99,
      weight: 42,
      category: 'cat',
      age: 14,
      gender: 'male' },
    { name: 'Fonzie',
      slug: 'fonzie',
      breed: 'Manx',
      breedSlug: 'manx',
      price: 91.99,
      weight: 30,
      category: 'cat',
      age: 10,
      gender: 'male' },
    { name: 'Galileo',
      slug: 'galileo',
      breed: 'British Shorthair',
      breedSlug: 'british-shorthair',
      price: 76.99,
      weight: 30,
      category: 'cat',
      age: 10,
      gender: 'male' },
    { name: 'Geronimo',
      slug: 'geronimo',
      breed: 'British Shorthair',
      breedSlug: 'british-shorthair',
      price: 148.99,
      weight: 45,
      category: 'cat',
      age: 15,
      gender: 'male' },
    { name: 'Hendrix',
      slug: 'hendrix',
      breed: 'Norwegian Forest',
      breedSlug: 'norwegian-forest',
      price: 110.99,
      weight: 57,
      category: 'cat',
      age: 19,
      gender: 'male' },
    { name: 'Hercules',
      slug: 'hercules',
      breed: 'Javanese',
      breedSlug: 'javanese',
      price: 126.99,
      weight: 42,
      category: 'cat',
      age: 14,
      gender: 'male' },
    { name: 'Hobbes',
      slug: 'hobbes',
      breed: 'Norwegian Forest',
      breedSlug: 'norwegian-forest',
      price: 148.99,
      weight: 48,
      category: 'cat',
      age: 16,
      gender: 'male' },
    { name: 'Houdini',
      slug: 'houdini',
      breed: 'Nebelung',
      breedSlug: 'nebelung',
      price: 71.99,
      weight: 45,
      category: 'cat',
      age: 15,
      gender: 'male' },
    { name: 'Lancelot',
      slug: 'lancelot',
      breed: 'Japanese Bobtail',
      breedSlug: 'japanese-bobtail',
      price: 106.99,
      weight: 39,
      category: 'cat',
      age: 13,
      gender: 'male' },
    { name: 'Mars',
      slug: 'mars',
      breed: 'Norwegian Forest',
      breedSlug: 'norwegian-forest',
      price: 77.99,
      weight: 39,
      category: 'cat',
      age: 13,
      gender: 'male' },
    { name: 'Moses',
      slug: 'moses',
      breed: 'Himalayan',
      breedSlug: 'himalayan',
      price: 146.99,
      weight: 60,
      category: 'cat',
      age: 20,
      gender: 'male' },
    { name: 'Ozzy',
      slug: 'ozzy',
      breed: 'Snowshoe',
      breedSlug: 'snowshoe',
      price: 120.99,
      weight: 57,
      category: 'cat',
      age: 19,
      gender: 'male' },
    { name: 'Pharaoh',
      slug: 'pharaoh',
      breed: 'American Curl',
      breedSlug: 'american-curl',
      price: 50.99,
      weight: 39,
      category: 'cat',
      age: 13,
      gender: 'male' },
    { name: 'Picasso',
      slug: 'picasso',
      breed: 'LaPerm',
      breedSlug: 'laperm',
      price: 103.99,
      weight: 36,
      category: 'cat',
      age: 12,
      gender: 'male' },
    { name: 'Prince',
      slug: 'prince',
      breed: 'Nebelung',
      breedSlug: 'nebelung',
      price: 73.99,
      weight: 54,
      category: 'cat',
      age: 18,
      gender: 'male' },
    { name: 'Rembrandt',
      slug: 'rembrandt',
      breed: 'Burmese',
      breedSlug: 'burmese',
      price: 98.99,
      weight: 42,
      category: 'cat',
      age: 14,
      gender: 'male' },
    { name: 'Romeo',
      slug: 'romeo',
      breed: 'LaPerm',
      breedSlug: 'laperm',
      price: 127.99,
      weight: 51,
      category: 'cat',
      age: 17,
      gender: 'male' },
    { name: 'Rumi',
      slug: 'rumi',
      breed: 'Javanese',
      breedSlug: 'javanese',
      price: 126.99,
      weight: 51,
      category: 'cat',
      age: 17,
      gender: 'male' },
    { name: 'Simba',
      slug: 'simba',
      breed: 'Snowshoe',
      breedSlug: 'snowshoe',
      price: 97.99,
      weight: 45,
      category: 'cat',
      age: 15,
      gender: 'male' },
    { name: 'Tarzan',
      slug: 'tarzan',
      breed: 'Russian Blue',
      breedSlug: 'russian-blue',
      price: 102.99,
      weight: 48,
      category: 'cat',
      age: 16,
      gender: 'male' },
    { name: 'Wizard',
      slug: 'wizard',
      breed: 'Korat',
      breedSlug: 'korat',
      price: 72.99,
      weight: 57,
      category: 'cat',
      age: 19,
      gender: 'male' },
    { name: 'Zorro',
      slug: 'zorro',
      breed: 'Himalayan',
      breedSlug: 'himalayan',
      price: 143.99,
      weight: 54,
      category: 'cat',
      age: 18,
      gender: 'male' },
    { name: 'Bambi',
      slug: 'bambi',
      breed: 'Javanese',
      breedSlug: 'javanese',
      price: 123.99,
      weight: 36,
      category: 'cat',
      age: 12,
      gender: 'female' },
    { name: 'Barbie',
      slug: 'barbie',
      breed: 'Japanese Bobtail',
      breedSlug: 'japanese-bobtail',
      price: 123.99,
      weight: 36,
      category: 'cat',
      age: 12,
      gender: 'female' },
    { name: 'Blossom',
      slug: 'blossom',
      breed: 'Manx',
      breedSlug: 'manx',
      price: 101.99,
      weight: 39,
      category: 'cat',
      age: 13,
      gender: 'female' },
    { name: 'Bluebell',
      slug: 'bluebell',
      breed: 'Korat',
      breedSlug: 'korat',
      price: 136.99,
      weight: 54,
      category: 'cat',
      age: 18,
      gender: 'female' },
    { name: 'Calypso',
      slug: 'calypso',
      breed: 'American Curl',
      breedSlug: 'american-curl',
      price: 134.99,
      weight: 48,
      category: 'cat',
      age: 16,
      gender: 'female' },
    { name: 'Cookie',
      slug: 'cookie',
      breed: 'Burmese',
      breedSlug: 'burmese',
      price: 95.99,
      weight: 54,
      category: 'cat',
      age: 18,
      gender: 'female' },
    { name: 'Cuddles',
      slug: 'cuddles',
      breed: 'Russian Blue',
      breedSlug: 'russian-blue',
      price: 95.99,
      weight: 39,
      category: 'cat',
      age: 13,
      gender: 'female' },
    { name: 'Cupcake',
      slug: 'cupcake',
      breed: 'Savannah',
      breedSlug: 'savannah',
      price: 134.99,
      weight: 36,
      category: 'cat',
      age: 12,
      gender: 'female' },
    { name: 'Daisy',
      slug: 'daisy',
      breed: 'LaPerm',
      breedSlug: 'laperm',
      price: 59.99,
      weight: 42,
      category: 'cat',
      age: 14,
      gender: 'female' },
    { name: 'Electra',
      slug: 'electra',
      breed: 'Japanese Bobtail',
      breedSlug: 'japanese-bobtail',
      price: 105.99,
      weight: 57,
      category: 'cat',
      age: 19,
      gender: 'female' },
    { name: 'Giggles',
      slug: 'giggles',
      breed: 'Norwegian Forest',
      breedSlug: 'norwegian-forest',
      price: 80.99,
      weight: 33,
      category: 'cat',
      age: 11,
      gender: 'female' },
    { name: 'Ginger',
      slug: 'ginger',
      breed: 'Persian',
      breedSlug: 'persian',
      price: 70.99,
      weight: 39,
      category: 'cat',
      age: 13,
      gender: 'female' },
    { name: 'Goldilocks',
      slug: 'goldilocks',
      breed: 'Burmese',
      breedSlug: 'burmese',
      price: 52.99,
      weight: 33,
      category: 'cat',
      age: 11,
      gender: 'female' },
    { name: 'Gumdrop',
      slug: 'gumdrop',
      breed: 'Norwegian Forest',
      breedSlug: 'norwegian-forest',
      price: 144.99,
      weight: 54,
      category: 'cat',
      age: 18,
      gender: 'female' },
    { name: 'Honeybee',
      slug: 'honeybee',
      breed: 'Manx',
      breedSlug: 'manx',
      price: 90.99,
      weight: 39,
      category: 'cat',
      age: 13,
      gender: 'female' },
    { name: 'Jasmine',
      slug: 'jasmine',
      breed: 'Manx',
      breedSlug: 'manx',
      price: 128.99,
      weight: 45,
      category: 'cat',
      age: 15,
      gender: 'female' },
    { name: 'Juliette',
      slug: 'juliette',
      breed: 'Savannah',
      breedSlug: 'savannah',
      price: 78.99,
      weight: 33,
      category: 'cat',
      age: 11,
      gender: 'female' },
    { name: 'Juniper',
      slug: 'juniper',
      breed: 'Russian Blue',
      breedSlug: 'russian-blue',
      price: 150.99,
      weight: 54,
      category: 'cat',
      age: 18,
      gender: 'female' },
    { name: 'Ladybug',
      slug: 'ladybug',
      breed: 'Javanese',
      breedSlug: 'javanese',
      price: 63.99,
      weight: 36,
      category: 'cat',
      age: 12,
      gender: 'female' },
    { name: 'Lakshmi',
      slug: 'lakshmi',
      breed: 'British Shorthair',
      breedSlug: 'british-shorthair',
      price: 119.99,
      weight: 33,
      category: 'cat',
      age: 11,
      gender: 'female' },
    { name: 'Misty',
      slug: 'misty',
      breed: 'Burmese',
      breedSlug: 'burmese',
      price: 65.99,
      weight: 33,
      category: 'cat',
      age: 11,
      gender: 'female' },
    { name: 'Nutmeg',
      slug: 'nutmeg',
      breed: 'Burmese',
      breedSlug: 'burmese',
      price: 55.99,
      weight: 39,
      category: 'cat',
      age: 13,
      gender: 'female' },
    { name: 'Olympia',
      slug: 'olympia',
      breed: 'Javanese',
      breedSlug: 'javanese',
      price: 120.99,
      weight: 42,
      category: 'cat',
      age: 14,
      gender: 'female' },
    { name: 'Princess',
      slug: 'princess',
      breed: 'Siamese Cat',
      breedSlug: 'siamese-cat',
      price: 122.99,
      weight: 48,
      category: 'cat',
      age: 16,
      gender: 'female' },
    { name: 'Ruby',
      slug: 'ruby',
      breed: 'Manx',
      breedSlug: 'manx',
      price: 67.99,
      weight: 48,
      category: 'cat',
      age: 16,
      gender: 'female' },
    { name: 'Tiara',
      slug: 'tiara',
      breed: 'Norwegian Forest',
      breedSlug: 'norwegian-forest',
      price: 105.99,
      weight: 57,
      category: 'cat',
      age: 19,
      gender: 'female' },
    { name: 'Tinkerbell',
      slug: 'tinkerbell',
      breed: 'Russian Blue',
      breedSlug: 'russian-blue',
      price: 62.99,
      weight: 57,
      category: 'cat',
      age: 19,
      gender: 'female' },
    { name: 'Trixie',
      slug: 'trixie',
      breed: 'Himalayan',
      breedSlug: 'himalayan',
      price: 132.99,
      weight: 39,
      category: 'cat',
      age: 13,
      gender: 'female' },
    { name: 'Twinkle',
      slug: 'twinkle',
      breed: 'Javanese',
      breedSlug: 'javanese',
      price: 132.99,
      weight: 51,
      category: 'cat',
      age: 17,
      gender: 'female' },
    { name: 'Venus',
      slug: 'venus',
      breed: 'Savannah',
      breedSlug: 'savannah',
      price: 115.99,
      weight: 45,
      category: 'cat',
      age: 15,
      gender: 'female' }],
    catfood: [],
  },
};

export default data;
