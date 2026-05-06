export default function Lokasi() {
  return (
    <div className="lokasi-page">
      <div className="lokasi-container">

        <h1 className="title">Lokasi Wira Garden</h1>

        <p className="description">
            Wira Garden terletak di Batu Putu, Kecamatan Teluk Betung Utara, 
            Kota Bandar Lampung, Provinsi Lampung.
        </p>

        {/* TAMBAHAN WRAPPER */}
        <div className="lokasi-wrapper">

          <iframe
            src="https://www.google.com/maps?q=wira%20garden%20lampung&output=embed"
            className="lokasi-map"
          />

        <div className="lokasi-info">
            <h2 className="subtitle">Informasi Lokasi</h2>

        <div className="lokasi-info-grid">
            <p>📍 Batu Putu, Bandar Lampung</p>
            <p>🕒 08.00 - 17.00 WIB</p>
            <p>💰 Rp10.000 - Rp20.000</p>
            <p>🚗 Motor & Mobil</p>
        </div>

            <p>Fasilitas:</p>
            <ul className="list">
              <li>Area parkir</li>
              <li>Tempat istirahat</li>
              <li>Spot foto</li>
              <li>Toilet umum</li>
            </ul>

            <p>Rekomendasi: pagi atau sore hari</p>
          </div>

        </div>

      </div>
    </div>
  );
}