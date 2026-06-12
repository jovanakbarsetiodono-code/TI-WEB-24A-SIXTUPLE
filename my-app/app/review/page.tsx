import styles from "./review.module.css";
export default function ReviewPage() {
  return (
    <main>
      <section className={styles.reviewHeader}>
        <h1>Review Pengunjung</h1>

        <div className={styles.line}></div>
        <p>
          Simak berbagai ulasan dan pengalaman pengunjung yang telah menikmati
          keindahan alam serta suasana nyaman di Wira Garden.
        </p>
      </section>
       <section className={styles.reviewContainer}>
        <div className={styles.reviewCard}>
          <h3>Andi Saputra</h3>
          <p>★★★★★</p>
          <p>Tempatnya sangat nyaman.</p>
        </div>
        <div className={styles.reviewCard}>
          <h3>Siti Rahma</h3>
          <p>★★★★★</p>
          <p>Pemandangannya indah.</p>
        </div>
        <div className={styles.reviewCard}>
          <h3>Budi Santoso</h3>
          <p>★★★★☆</p>
          <p>Cocok untuk healing.</p>
        </div>
         </section>
    </main>
  );
}
