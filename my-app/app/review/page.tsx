import styles from "./review.module.css";
export default function ReviewPage() {
  return (
    <main>
        <section className={styles.reviewHeader}>
  <h1>Review Pengunjung</h1>

  <div className={styles.line}></div>
        <p>
          Lihat pengalaman dan kesan para pengunjung yang telah menikmati
          keindahan Wira Garden.
        </p>

      </section>
    </main>
  );
}
