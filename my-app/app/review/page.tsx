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
    </main>
  );
}
