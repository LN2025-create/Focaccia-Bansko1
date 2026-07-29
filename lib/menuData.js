export const sandwiches = [
  {
    name: 'Mortadella',
    image: '/images/menu/mortadella.webp',
    weight: '500 g',
    price: '9.00 €',
    bg: 'Крем от пармезан, мортадела с шамфъстък, рукола, чери домати и балсамова редукция.',
    en: 'Parmesan cream, mortadella with pistachios, arugula, cherry tomatoes and balsamic reduction.',
  },
  {
    name: 'Tartufo',
    image: '/images/menu/tartufo.webp',
    weight: '500 g',
    price: '11.00 €',
    bg: 'Картофен крем с трюфел, сирене проволоне, прошуто Кото с трюфел и сушени домати.',
    en: 'Potato cream with truffle, provolone cheese, truffle prosciutto Cotto and dried tomatoes.',
  },
  {
    name: 'Tonno',
    image: '/images/menu/tonno.webp',
    weight: '500 g',
    price: '10.00 €',
    bg: 'Дижонска майонеза, сирене проволоне, риба тон с лимон и пипер и микс от зелени салати.',
    en: 'Dijon mayonnaise, provolone cheese, tuna with lemon and pepper, and mixed greens.',
  },
  {
    name: 'Gran Magro',
    image: '/images/menu/gran-magro.webp',
    weight: '400 g',
    price: '10.00 €',
    bg: 'Дижонска майонеза, салам Gran Magro, сирене пармиджано реджано и микс от зелени салати.',
    en: 'Dijon mayonnaise, Gran Magro salami, Parmigiano Reggiano and mixed greens.',
  },
  {
    name: 'Formaggio',
    image: '/images/menu/formaggio.webp',
    weight: '450 g',
    price: '10.00 €',
    bg: 'Крем от пармезан, проволоне, горгонзола, страчатела, зелени салати и червени боровинки.',
    en: 'Parmesan cream, Provolone, Gorgonzola, Stracciatella, green salads and dried cranberries.',
  },
  {
    name: 'Caciotta & Cotto',
    image: '/images/menu/caciotta-cotto.webp',
    weight: '530 g',
    price: '15.00 €',
    bg: 'Сирене качота с трюфел, прошуто Кото, рукола, страчатела и песто от шамфъстък.',
    en: 'Truffle Caciotta cheese, prosciutto cotto, arugula, stracciatella and pistachio pesto.',
  },
  {
    name: 'Vegano',
    image: '/images/menu/vegano.webp',
    vegan: true,
    weight: '450 g',
    price: '8.00 €',
    bg: 'Меланзане, кисели краставички, микс от зелени салати, чери домати и сос арабиата.',
    en: 'Eggplant, pickles, mixed greens, cherry tomatoes and arrabbiata sauce.',
  },
  {
    name: 'Porchetta',
    image: '/images/menu/porchetta.webp',
    weight: '450 g',
    price: '9.00 €',
    bg: 'Сос арабиата, печена поркета, рукола и сирене моцарела.',
    en: 'Arrabbiata sauce, roasted porchetta, arugula and mozzarella.',
  },
  {
    name: 'Carolina Reaper',
    image: '/images/menu/carolina-reaper.webp',
    weight: '450 g',
    price: '9.00 €',
    spicy: true,
    bg: 'Екстра пикантен салам с Carolina Reaper, проволоне, чери домати, кисели краставички и дижонска майонеза.',
    en: 'Extra-spicy salami with Carolina Reaper, Provolone, cherry tomatoes, pickles and Dijon mayonnaise.',
  },
  {
    name: 'Napoli',
    image: '/images/menu/napoli.webp',
    weight: '400 g',
    price: '8.00 €',
    bg: 'Сос арабиата, салам Napoli, сирене пармиджано реджано и рукола.',
    en: 'Arrabbiata sauce, Napoli salami, Parmigiano Reggiano and arugula.',
  },
  {
    name: 'Tacchino',
    image: '/images/menu/tacchino.webp',
    weight: '450 g',
    price: '10.00 €',
    bg: 'Пуешко филе, сирене проволоне, микс от зелени салати и дижонска майонеза.',
    en: 'Turkey fillet, provolone cheese, mixed greens and Dijon mayonnaise.',
  },
  {
    name: 'Burrata & Crudo',
    image: '/images/menu/burrata-crudo.webp',
    weight: '500 g',
    price: '12.00 €',
    bg: 'Картофен крем с трюфел, прошуто Крудо, рукола, чери домати и прясно сирене бурата.',
    en: 'Potato cream with truffle, prosciutto Crudo, arugula, cherry tomatoes and fresh burrata.',
  },
];

export const salumeriaGroups = [
  {
    bgTitle: 'Сирена',
    enTitle: 'Cheese',
    items: [
      { bgName: 'Прясна бурата', enName: 'Fresh Burrata', unit: '125 g', price: '4.00 €' },
      { name: 'Mozzarella Fior di Latte', unit: '100 g', price: '2.50 €' },
      { name: 'Stracciatella', unit: '100 g', price: '3.00 €' },
      { name: 'Provolone', unit: '100 g', price: '3.00 €' },
      { name: 'Parmigiano Reggiano', unit: '100 g', price: '5.00 €' },
      { name: 'Gorgonzola', unit: '100 g', price: '3.00 €' },
      { bgName: 'Качота с трюфел', enName: 'Caciotta with truffle', unit: '100 g', price: '5.00 €' },
    ],
  },
  {
    bgTitle: 'Салами',
    enTitle: 'Cured meats',
    items: [
      { name: 'Gran Magro', unit: '100 g', price: '3.50 €' },
      { name: 'Carolina Reaper', unit: '100 g', price: '3.00 €' },
      { name: 'Prosciutto Cotto', unit: '100 g', price: '2.60 €' },
      { bgName: 'Прошуто Кото с трюфел', enName: 'Truffle Prosciutto Cotto', unit: '100 g', price: '3.60 €' },
      { bgName: 'Прошуто Крудо ди Парма', enName: 'Prosciutto Crudo di Parma', unit: '100 g', price: '5.00 €' },
      { bgName: 'Печена поркета', enName: 'Roasted Porchetta', unit: '100 g', price: '3.00 €' },
      { bgName: 'Мортадела с шамфъстък', enName: 'Mortadella with pistachio', unit: '100 g', price: '2.60 €' },
      { name: 'Salame Napoli', unit: '100 g', price: '3.00 €' },
    ],
  },
];

export const drinkGroups = [
  {
    bgTitle: 'Бира',
    enTitle: 'Beer',
    visual: 'beer',
    items: [
      {
        name: 'Birra Moretti',
        image: '/images/menu/beer/birra-moretti.webp',
        bgDetail: 'Класически италиански лагер с мек, балансиран вкус.',
        enDetail: 'A classic Italian lager with a smooth, balanced taste.',
        variants: [
          { volume: '330 ml', price: '2.60 €' },
          { volume: '660 ml', price: '4.00 €' },
        ],
      },
      {
        name: 'Peroni',
        image: '/images/menu/beer/peroni.webp',
        bgDetail: 'Свеж италиански лагер с чист и лек профил.',
        enDetail: 'A fresh Italian lager with a clean, light profile.',
        variants: [
          { volume: '330 ml', price: '2.60 €' },
          { volume: '660 ml', price: '4.00 €' },
        ],
      },
      {
        name: 'Peroni Nastro Azzurro',
        image: '/images/menu/beer/peroni-nastro-azzurro.webp',
        bgDetail: 'Премиум италиански лагер с отчетлива свежест.',
        enDetail: 'A premium Italian lager with a crisp, refreshing finish.',
        variants: [
          { volume: '330 ml', price: '4.00 €' },
          { volume: '620 ml', price: '5.00 €' },
        ],
      },
    ],
  },
  {
    bgTitle: 'Вино',
    enTitle: 'Wine',
    featured: true,
    sections: [
      {
        bgTitle: 'На чаша', enTitle: 'By the glass', items: [
          { name: '1932 Fiano Salento IGT', bgDetail: 'Бяло вино · Produttori di Manduria', enDetail: 'White wine · Produttori di Manduria', volume: '180 ml', price: '3.00 €' },
          { name: '1932 Primitivo Salento IGT', bgDetail: 'Червено вино · Produttori di Manduria', enDetail: 'Red wine · Produttori di Manduria', volume: '180 ml', price: '3.00 €' },
          { bgName: 'Cuvée Brut „Bollé“', enName: 'Cuvée Brut “Bollé”', bgDetail: 'Пенливо вино · 100% Glera · Andreola', enDetail: 'Sparkling wine · 100% Glera · Andreola', volume: '150 ml', price: '5.00 €' },
        ],
      },
      {
        bgTitle: 'Бутилки', enTitle: 'Bottles', items: [
          { name: '1932 Fiano Salento IGT', bgDetail: 'Produttori di Manduria', enDetail: 'Produttori di Manduria', volume: '750 ml', price: '12.00 €', image: '/images/menu/wine/fiano-salento.webp' },
          { name: '1932 Primitivo Salento IGT', bgDetail: 'Produttori di Manduria', enDetail: 'Produttori di Manduria', volume: '750 ml', price: '12.00 €', image: '/images/menu/wine/primitivo-salento.webp' },
          { bgName: 'Cuvée Brut „Bollé“', enName: 'Cuvée Brut “Bollé”', bgDetail: 'Andreola · Свежо пенливо вино от 100% Glera, със стил, близък до Просеко.', enDetail: 'Andreola · Fresh sparkling wine made from 100% Glera, in a style close to Prosecco.', volume: '750 ml', price: '12.50 €', image: '/images/menu/wine/bolle-brut.webp' },
        ],
      },
    ],
  },
  {
    bgTitle: 'Аперитив',
    enTitle: 'Aperitif',
    items: [
      { name: 'Aperol Spritz', volume: '300 ml', price: '7.00 €' },
      { name: 'Limoncello Spritz', volume: '300 ml', price: '7.00 €' },
      { bgName: 'Два Spritz-а', enName: 'Two Spritzes', volume: '2 × 300 ml', price: '10.00 €' },
      { bgName: 'Негрони', enName: 'Negroni', volume: '100 ml', price: '6.00 €' },
    ],
  },
  {
    bgTitle: 'Италианско кафе',
    enTitle: 'Italian coffee',
    items: [
      { bgName: 'Еспресо', enName: 'Espresso', volume: '40 ml', price: '1.20 €' },
      { bgName: 'Капучино', enName: 'Cappuccino', volume: '220 ml', price: '2.00 €' },
      { bgName: 'Лате', enName: 'Latte', volume: '300 ml', price: '2.30 €' },
    ],
  },
  {
    bgTitle: 'Безалкохолни напитки',
    enTitle: 'Soft drinks',
    items: [
      { bgName: 'Минерална вода', enName: 'Mineral water', volume: '500 ml', price: '1.20 €' },
      { bgName: 'Сода лимон / портокал / мохито', enName: 'Soda lemon / orange / mojito', volume: '330 ml', price: '2.00 €' },
      { bgName: 'Студен чай San Benedetto', enName: 'San Benedetto iced tea', volume: '500 ml', price: '2.00 €' },
      { bgName: 'Coca-Cola кен', enName: 'Coca-Cola can', volume: '330 ml', price: '2.00 €' },
      { name: 'Coca-Cola Italiana', volume: '200 ml', price: '3.00 €' },
      { bgName: 'Естествено газирана минерална вода', enName: 'Naturally carbonated mineral water', volume: '500 ml', price: '1.50 €' },
    ],
  },
];


export const dessert = {
  name: 'Freshly baked croissant',
  bgName: 'Прясно изпечен кроасан',
  enName: 'Freshly baked croissant',
  bg: 'Сервираме го с еспресо Corsini или капучино. Избери го без пълнеж или с шоколад, пистачо крем или кайсия.',
  en: 'Served with Corsini espresso or cappuccino. Choose it plain or filled with chocolate, pistachio cream or apricot.',
  options: [
    { bg: 'Без пълнеж', en: 'Plain' },
    { bg: 'Шоколад', en: 'Chocolate' },
    { bg: 'Пистачо крем', en: 'Pistachio cream' },
    { bg: 'Кайсия', en: 'Apricot' },
  ],
};
