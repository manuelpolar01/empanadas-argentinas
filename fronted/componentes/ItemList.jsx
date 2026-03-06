import Detail from "./Detail";
import "../css/Products.css";

const ItemList = ({ items }) => {
  return (
    <div className="products-grid">
      {items.map(item => (
        <Detail key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ItemList;