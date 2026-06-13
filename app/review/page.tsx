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
          <div className={styles.reviewTop}>

            <div>
              <h3>Andi Saputra</h3>
              <div className={styles.star}>★★★★★</div>
            </div>
          </div>

          <p className={styles.reviewText}>
            Tempatnya sangat nyaman dan cocok untuk healing bersama keluarga.
          </p>
          <div className={styles.reviewDate}>📅 3 Mei 2024</div>
        </div>
        <div className={styles.reviewCard}>
          <div className={styles.reviewTop}>

            <div>
              <h3>Siti Rahma</h3>
              <div className={styles.star}>★★★★★</div>
            </div>
          </div>

          <p className={styles.reviewText}>
            Pemandangannya indah dan udaranya sangat sejuk.
          </p>
          <div className={styles.reviewDate}>📅 5 Mei 2024</div>
        </div>
        <div className={styles.reviewCard}>
          <div className={styles.reviewTop}>    

            <div>
              <h3>Budi Santoso</h3>
              <div className={styles.star}>★★★★☆</div>
            </div>
          </div>

          <p className={styles.reviewText}>
            Cocok untuk healing bersama keluarga maupun teman.
          </p>
          <div className={styles.reviewDate}>📅 8 Mei 2024</div>
        </div>
        <div className={styles.reviewCard}>
          <div className={styles.reviewTop}>
            

            <div>
              <h3>Dewi Lestari</h3>
              <div className={styles.star}>★★★★★</div>
            </div>
          </div>

          <p className={styles.reviewText}>
            Tempatnya bersih, asri, dan sangat cocok untuk liburan bersama
            keluarga.
          </p>
          <div className={styles.reviewDate}>📅 10 Mei 2024</div>
        </div>
        <div className={styles.reviewCard}>
          <div className={styles.reviewTop}>

            <div>
              <h3>Rizky Pratama</h3>
              <div className={styles.star}>★★★★☆</div>
            </div>
          </div>

          <p className={styles.reviewText}>
            Fasilitasnya lengkap dan pemandangan alamnya sangat memanjakan mata.
          </p>
          <div className={styles.reviewDate}>📅 12 Mei 2024</div>
        </div>
        <div className={styles.reviewCard}>
          <div className={styles.reviewTop}>

            <div>
              <h3>Nabila Putri</h3>
              <div className={styles.star}>★★★★☆</div>
            </div>
          </div>

          <p className={styles.reviewText}>
            Suasana yang tenang dan udara yang sejuk membuat pengalaman
            berwisata semakin menyenangkan.
          </p>
          <div className={styles.reviewDate}>📅 15 Mei 2024</div>
        </div>
      </section>
    </main>
  );
}
