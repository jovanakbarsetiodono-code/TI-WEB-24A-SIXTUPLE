import Image from "next/image";
import styles from "./gallery.module.css";

export default function GalleryPage() {
  const images = [
    "/garden1.jpg",
    "/garden2.jpg",
    "/garden3.jpg",
    "/garden4.jpg",
    "/garden5.jpg",
    "/garden6.jpg",
    "/garden7.jpg",
    "/garden8.jpg",
    "/garden9.jpg",
  ];

  return (
    <div className={styles.galleryPage}>
      <div className={styles.wrapper}>
        <section className={styles.header}>
          <h1>Galeri Wira Garden</h1>
          <p>
            Nikmati keindahan Wira Garden melalui kumpulan foto yang menampilkan
            suasana alam yang asri, pepohonan hijau yang menenangkan, serta
            berbagai spot menarik untuk mengabadikan momen bersama keluarga dan
            teman.
          </p>
        </section>

        <section className={styles.gallery}>
          {images.map((img, index) => (
            <div className={styles.card} key={index}>
              <Image
                src={img}
                alt={`Gallery ${index + 1}`}
                fill
                className={styles.galleryImage}
              />
            </div>
          ))}
        </section>

      </div>
    </div>
  );
}
