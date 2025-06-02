import Card from './Card';

const menuData = [
  {
    image: '/src/assets/spicy seasoned noodles.png',
    title: 'Spicy seasoned seafood noodles',
    price: 2.29,
    bowls: 20
  },
  {
    image: '/src/assets/Salted pata.png',
    title: 'Salted Pasta with mushroom sauce',
    price: 2.69,
    bowls: 11
  },
  {
    image: '/src/assets/beef dumplings.png',
    title: 'Salted Pasta with mushroom sauce',
    price: 2.99,
    bowls: 16
  },
  {
    image: '/src/assets/Healthy noodles.png',
    title: 'Salted Pasta with mushroom sauce',
    price: 3.29,
    bowls: 22
  },
  {
    image: '/src/assets/Hot spicy fried rice.png',
    title: 'Salted Pasta with mushroom sauce',
    price: 3.49,
    bowls: 13
  },
  {
    image: '/src/assets/Spicy instant noodles.png',
    title: 'Salted Pasta with mushroom sauce',
    price: 3.59,
    bowls: 17
  }
];

const Menu = () => {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {menuData.map((item, index) => (
        <Card key={index} {...item} />
      ))}
    </div>
  );
};

export default Menu;