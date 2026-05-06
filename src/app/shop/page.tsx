import styles from './shop.module.css';
import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import ProductCard from '@/components/ProductCard';

async function getProducts() {
  try {
    const ipkPath = path.join(process.cwd(), 'public', 'ipk.json');
    const tillotsonPath = path.join(process.cwd(), 'public', 'tillotson.json');
    
    const ipkData = JSON.parse(fs.readFileSync(ipkPath, 'utf8'));
    const tillotsonData = JSON.parse(fs.readFileSync(tillotsonPath, 'utf8'));
    
    return {
      ipk: ipkData.products || [],
      tillotson: tillotsonData.products || []
    };
  } catch (error) {
    console.error("Failed to load products", error);
    return { ipk: [], tillotson: [] };
  }
}

export default async function Shop() {
  const { ipk, tillotson } = await getProducts();
  
  // Take top 12 of each for display to avoid huge page loads
  const displayIpk = ipk.slice(0, 12);
  const displayTillotson = tillotson.slice(0, 12);

  return (
    <div className={styles.container}>
      <header className={styles.shopHeader}>
        <h1>OFFICIAL STORE</h1>
        <p>1ce Motorsport is the official dealer for IPK Racing and Tillotson Engines in South Africa.</p>
      </header>

      <section className={styles.categorySection}>
        <div className={styles.categoryTitle}>
          <h2>IPK RACING</h2>
          <span>Praga, Formula K, OK1</span>
        </div>
        
        <div className={styles.grid}>
          {displayIpk.map((product: any) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <Link href="/shop/ipk" className={styles.loadMoreBtn} style={{ textAlign: 'center' }}>View All IPK Products</Link>
      </section>

      <section className={styles.categorySection}>
        <div className={styles.categoryTitle}>
          <h2>TILLOTSON ENGINES</h2>
          <span>Performance & Spares</span>
        </div>
        
        <div className={styles.grid}>
          {displayTillotson.map((product: any) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <Link href="/shop/tillotson" className={styles.loadMoreBtn} style={{ textAlign: 'center' }}>View All Tillotson Products</Link>
      </section>

    </div>
  );
}
