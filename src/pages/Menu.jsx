import { MenuList } from "../helpers/menuList";
import Card from "../components/Card";

const Menu = () => {
  return (
    <section className="menu">
      <div className="container">
        <h1>Our Menu</h1>
        <div className="card-list">
          {MenuList.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
