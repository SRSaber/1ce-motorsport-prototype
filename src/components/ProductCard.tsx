"use client";

import { useCart } from './CartContext';
import styles from '../app/shop/shop.module.css'; // Reuse shop styles

export default function ProductCard({ product }: { product: any }) {
  const { addToCart } = useCart();
  
  const price = product.variants?.[0]?.price || 0;
  const image = product.images?.[0]?.src || '';

  const handleAdd = () => {
    addToCart({
      id: product.id.toString(),
      title: product.title,
      price: parseFloat(price),
      image: image,
      quantity: 1
    });
  };

  return (
    <div className={styles.productCard}>
      <div className={styles.imageContainer}>
        {image ? (
          <img src={image} alt={product.title} className={styles.productImage} />
        ) : (
          <div className={styles.noImage}>No Image</div>
        )}
      </div>
      <div className={styles.productInfo}>
        <h3 className={styles.productTitle}>{product.title}</h3>
        <p className={styles.productPrice}>
          R {price}
        </p>
        <button onClick={handleAdd} className={styles.addToCartBtn}>Add to Cart</button>
      </div>
    </div>
  );
}
