//components
import Category from "./Category/Category";

//styles
import styles from "./CategorySort.module.scss";

const CategorySort = () => {
  return (
    <ul className={styles.categoryWrapper}>
      <Category category={"smartphones"}>Smart Phones</Category>
      <Category category={"laptops"}>Laptops</Category>
      <Category category={"fragrance"}>Fragrances</Category>
      <Category category={"skincare"}>Skincare</Category>
      <Category category={"groceries"}>Groceries</Category>
      <Category category={"home-decoration"}>Home Decoration</Category>
      <Category category={"furniture"}>Furniture</Category>
      <Category category={"tops"}>Tops</Category>
      <Category category={"womens-dresses"}>Women's Dresses</Category>
      <Category category={"womens-shoes"}>Women's Shoes</Category>
      <Category category={"mens-shirts"}>Men's Shirts</Category>
      <Category category={"mens-shoes"}>Men's Shoes</Category>
      <Category category={"mens-watches"}>Men's Watches</Category>
      <Category category={"womens-watches"}>Women's Watches</Category>
      <Category category={"womens-bags"}>Women's Bags</Category>
      <Category category={"womens-jewellery"}>Women's Jewelry</Category>
      <Category category={"sunglasses"}>Sunglasses</Category>
      <Category category={"automotive"}>Automotive</Category>
      <Category category={"motorcycle"}>Motorcycle</Category>
      <Category category={"lighting"}>Lighting</Category>
    </ul>
  );
};

export default CategorySort;
