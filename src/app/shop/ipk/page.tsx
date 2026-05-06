import styles from '../shop.module.css';
import fs from 'fs';
import path from 'path';
import ProductCard from '@/components/ProductCard';

export default async function IpkShop() {
  const ipkPath = path.join(process.cwd(), 'public', 'ipk.json');
  const ipkData = JSON.parse(fs.readFileSync(ipkPath, 'utf8'));
  const products = ipkData.products || [];

  return (
    <div className={styles.container}>
      <header className={styles.shopHeader}>
        <h1>IPK RACING CHASSIS & PARTS</h1>
        <p>Official Praga, Formula K, and OK1 karts and components.</p>
      </header>
      
      <div className={styles.grid}>
        {products.map((product: any) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
