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
            <img
              src="/foto1.jpg"
              alt="Andi Saputra"
              className={styles.profileImage}
            />

            <div>
              <h3>Andi Saputra</h3>
              <div className={styles.star}>★★★★★</div>
            </div>
          </div>

          <p className={styles.reviewText}>
            Tempatnya sangat nyaman dan cocok untuk healing bersama keluarga.
          </p>
        </div>
        <div className={styles.reviewCard}>
          <div className={styles.reviewTop}>
            <img
              src="/foto2.jpg"
              alt="Siti Rahma"
              className={styles.profileImage}
            />

            <div>
              <h3>Siti Rahma</h3>
              <div className={styles.star}>★★★★★</div>
            </div>
          </div>

          <p className={styles.reviewText}>
            Pemandangannya indah dan udaranya sangat sejuk.
          </p>
        </div>
        <div className={styles.reviewCard}>
          <div className={styles.reviewTop}>
            <img
              src="/foto3.jpg"
              alt="Budi Santoso"
              className={styles.profileImage}
            />

            <div>
              <h3>Budi Santoso</h3>
              <div className={styles.star}>★★★★☆</div>
            </div>
          </div>

          <p className={styles.reviewText}>
            Cocok untuk healing bersama keluarga maupun teman.
          </p>
        </div>
        <div className={styles.reviewCard}>
          <div className={styles.reviewTop}>
            <img
              src="/foto4.jpg"
              alt="Dewi Lestari"
              className={styles.profileImage}
            />

            <div>
              <h3>Dewi Lestari</h3>
              <div className={styles.star}>★★★★★</div>
            </div>
          </div>

          <p className={styles.reviewText}>
            Tempatnya bersih, asri, dan sangat cocok untuk liburan bersama
            keluarga.
          </p>
        </div>
        <div className={styles.reviewCard}>
          <h3>Rizky Pratama</h3>
          <p>★★★★☆</p>
          <p>
            Fasilitasnya lengkap dan pemandangan alamnya sangat memanjakan mata.
          </p>
        </div>
        <div className={styles.reviewCard}>
          <h3>Nabila Putri</h3>
          <p>★★★★★</p>
          <p>
            Suasana yang tenang dan udara yang sejuk membuat pengalaman
            berwisata semakin menyenangkan.
          </p>
        </div>
      </section>
    </main>
  );
}
