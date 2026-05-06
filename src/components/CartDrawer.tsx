"use client";

import { useCart } from './CartContext';
import styles from './CartDrawer.module.css';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function CartDrawer() {
  const { cart, removeFromCart, updateQuantity, cartTotal, isCartOpen, setIsCartOpen } = useCart();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {isCartOpen && <div className={styles.overlay} onClick={() => setIsCartOpen(false)} />}
      <div className={`${styles.drawer} ${isCartOpen ? styles.open : ''}`}>
        <div className={styles.header}>
          <h2>CART</h2>
          <button className={styles.closeBtn} onClick={() => setIsCartOpen(false)}>×</button>
        </div>

        <div className={styles.content}>
          {cart.length === 0 ? (
            <div className={styles.empty}>
              <p>Your cart is empty.</p>
              <button className={styles.continueBtn} onClick={() => setIsCartOpen(false)}>Continue Shopping</button>
            </div>
          ) : (
            <div className={styles.itemsList}>
              {cart.map(item => (
                <div key={item.id} className={styles.cartItem}>
                  <img src={item.image} alt={item.title} className={styles.itemImage} />
                  <div className={styles.itemDetails}>
                    <h4 className={styles.itemTitle}>{item.title}</h4>
                    <p className={styles.itemPrice}>R {item.price}</p>
                    <div className={styles.quantityControls}>
                      <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                      <button className={styles.removeBtn} onClick={() => removeFromCart(item.id)}>Remove</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cart.length > 0 && (
          <div className={styles.footer}>
            <div className={styles.totalRow}>
              <span>Subtotal</span>
              <span>R {cartTotal.toFixed(2)}</span>
            </div>
            <Link href="/checkout" onClick={() => setIsCartOpen(false)} className={styles.checkoutBtn}>
              PROCEED TO CHECKOUT
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
