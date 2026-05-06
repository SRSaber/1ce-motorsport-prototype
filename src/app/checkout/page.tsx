"use client";

import { useCart } from '@/components/CartContext';
import styles from './checkout.module.css';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Checkout() {
  const { cart, cartTotal } = useCart();
  const [mounted, setMounted] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleYocoCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    // Simulate Yoco drop-in or redirect
    setTimeout(() => {
      alert("Yoco Payment Gateway Simulated! In production, this opens the Yoco SDK drop-in.");
      setIsProcessing(false);
    }, 1500);
  };

  if (!mounted) return null;

  if (cart.length === 0) {
    return (
      <div className={styles.container}>
        <div className={styles.emptyState}>
          <h1>YOUR CART IS EMPTY</h1>
          <p>Please add some items from the store before checking out.</p>
          <Link href="/shop" className={styles.btnPrimary}>RETURN TO STORE</Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>SECURE CHECKOUT</h1>
      
      <div className={styles.layout}>
        <div className={styles.formSection}>
          <div className={styles.card}>
            <h2>Shipping Information</h2>
            <form onSubmit={handleYocoCheckout} className={styles.form}>
              <div className={styles.grid2}>
                <input type="text" placeholder="First Name" required />
                <input type="text" placeholder="Last Name" required />
              </div>
              <input type="email" placeholder="Email Address" required />
              <input type="text" placeholder="Street Address" required />
              <div className={styles.grid3}>
                <input type="text" placeholder="City" required />
                <input type="text" placeholder="Province" required />
                <input type="text" placeholder="Postal Code" required />
              </div>
              
              <div className={styles.yocoSection}>
                <h3>Payment</h3>
                
                <div className={styles.walletButtons}>
                  <button type="button" className={styles.applePayBtn} onClick={handleYocoCheckout} disabled={isProcessing}>
                    <span></span> Pay
                  </button>
                  <button type="button" className={styles.googlePayBtn} onClick={handleYocoCheckout} disabled={isProcessing}>
                    G Pay
                  </button>
                </div>
                
                <div className={styles.divider}>
                  <span>OR PAY WITH CARD</span>
                </div>

                <button 
                  type="submit" 
                  className={styles.payBtn}
                  disabled={isProcessing}
                >
                  {isProcessing ? 'PROCESSING...' : `PAY R ${cartTotal.toFixed(2)}`}
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className={styles.summarySection}>
          <div className={styles.card}>
            <h2>Order Summary</h2>
            <div className={styles.summaryItems}>
              {cart.map(item => (
                <div key={item.id} className={styles.summaryItem}>
                  <img src={item.image} alt={item.title} />
                  <div className={styles.itemDetails}>
                    <h4>{item.title}</h4>
                    <p>Qty: {item.quantity}</p>
                  </div>
                  <div className={styles.itemPrice}>
                    R {(item.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>
            
            <div className={styles.totals}>
              <div className={styles.totalRow}>
                <span>Subtotal</span>
                <span>R {cartTotal.toFixed(2)}</span>
              </div>
              <div className={styles.totalRow}>
                <span>Shipping</span>
                <span>Calculated at next step</span>
              </div>
              <div className={`${styles.totalRow} ${styles.grandTotal}`}>
                <span>Total</span>
                <span>R {cartTotal.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
