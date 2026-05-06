import styles from '../shop.module.css';
import fs from 'fs';
import path from 'path';
import ProductCard from '@/components/ProductCard';

export default async function TillotsonShop() {
  const pathData = path.join(process.cwd(), 'public', 'tillotson.json');
  const tillotsonData = JSON.parse(fs.readFileSync(pathData, 'utf8'));
  const products = tillotsonData.products || [];

  return (
    <div className={styles.container}>
      <header className={styles.shopHeader}>
        <h1>TILLOTSON ENGINES & SPARES</h1>
        <p>Performance engines, carburetors, and T4 Series components.</p>
      </header>
      
      <div className={styles.grid}>
        {products.map((product: any) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
