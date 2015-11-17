var seed = [
  {
    id: '1',
    title: 'Poster: Star Wars',
    price: 12345,
    image: 'poster1.jpg'
  },
  {
    id: '2',
    title: 'Poster: Yoda',
    price: 12345,
    image: 'poster2.jpg'
  },
  {
    id: '3',
    title: 'Poster: La Venganza de los Sith',
    price: 12345,
    image: 'poster3.jpg'
  },
  {
    id: '4',
    title: 'Poster: El Despertar de la Fuerza',
    price: 12345,
    image: 'poster4.jpg'
  },
  {
    id: '5',
    title: 'Poster: El Retorno del Jedi',
    price: 12345,
    image: 'poster5.jpg'
  },
  {
    id: '6',
    title: 'Poster: La Amenaza Fantasma',
    price: 12345,
    image: 'poster6.jpg'
  },
];

if (Products.find().count() === 0) {
  seed.forEach(function(prod) {
    Products.insert(prod)
  })
}
