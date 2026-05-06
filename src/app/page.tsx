import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.mainWrapper}>
      
      {/* Hero Section */}
      <section className={styles.hero}>
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className={styles.heroVideo}
        >
          <source src="https://1cemotorsport.com/cdn/shop/videos/c/vp/e23469307a734797a63e1e5cf6d6f310/e23469307a734797a63e1e5cf6d6f310.HD-1080p-7.2Mbps-17864481.mp4?v=0" type="video/mp4" />
        </video>
      </section>

      <div className={styles.container}>

      {/* Store Categories */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2>OFFICIAL DEALERS</h2>
          <Link href="/shop" className={styles.viewAll}>VIEW STORE &rarr;</Link>
        </div>
        <div className={styles.grid2}>
          <div className={styles.categoryCard}>
            <div className={styles.categoryImage} style={{ backgroundImage: 'url(/images/ipk-shop.jpg)' }}></div>
            <div className={styles.categoryContent}>
              <h3>IPK RACING</h3>
              <p>Explore our full range of Praga, Formula K, and OK1 chassis and components.</p>
              <Link href="/shop/ipk" className={styles.btnOutline} style={{ display: 'inline-block', textAlign: 'center' }}>SHOP IPK</Link>
            </div>
          </div>
          <div className={styles.categoryCard}>
            <div className={styles.categoryImage} style={{ backgroundImage: 'url(/images/tillotson-shop.png)' }}></div>
            <div className={styles.categoryContent}>
              <h3>TILLOTSON RACING</h3>
              <p>Performance carburetors, engines, and spares for the Tillotson T4 Series.</p>
              <Link href="/shop/tillotson" className={styles.btnOutline} style={{ display: 'inline-block', textAlign: 'center' }}>SHOP TILLOTSON</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className={`${styles.section} ${styles.servicesSection}`}>
        <div className={styles.sectionHeader}>
          <h2>OUR SERVICES</h2>
        </div>
        <div className={styles.grid3}>
          <div className={styles.serviceCard}>
            <div className={styles.serviceImage} style={{ backgroundImage: 'url(/images/team.jpg)' }}></div>
            <div className={styles.serviceContent}>
              <h3>RACE TEAM</h3>
              <p>Arrive and drive packages across multiple national and regional karting series.</p>
            </div>
          </div>
          <div className={styles.serviceCard}>
            <div className={styles.serviceImage} style={{ backgroundImage: 'url(/images/training.jpg)' }}></div>
            <div className={styles.serviceContent}>
              <h3>DRIVER COACHING</h3>
              <p>1-on-1 professional coaching with telemetry analysis to find those final tenths.</p>
            </div>
          </div>
          <div className={styles.serviceCard}>
            <div className={styles.serviceImage} style={{ backgroundImage: 'url(/images/support.jpg)' }}></div>
            <div className={styles.serviceContent}>
              <h3>TRACKSIDE SUPPORT</h3>
              <p>Full mechanic services, awning space, and logistical support for race weekends.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team News Section */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2>TEAM NEWS</h2>
          <Link href="/news" className={styles.viewAll}>ALL NEWS &rarr;</Link>
        </div>
        <div className={styles.newsGrid}>
          {[1, 2, 3].map((item) => (
            <div key={item} className={styles.newsCard}>
              <div className={styles.newsImagePlaceholder}></div>
              <div className={styles.newsContent}>
                <span className={styles.newsDate}>MAY {10 + item}, 2026</span>
                <h4>Podium Finish at National Round {item}</h4>
                <p>1ce Motorsport secures multiple podiums across the classes this weekend.</p>
                <Link href="#" className={styles.readMore}>Read Article</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      </div>
    </main>
  );
}
