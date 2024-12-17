import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function Bihunkuah() {
  const navigate = useNavigate(); // Use the useNavigate hook

  return (
    <>
      <meta charSet="utf-8" />
      <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      <title>Bihun Kuah</title>
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
        rel="stylesheet"
      />

<style
        dangerouslySetInnerHTML={{
          __html: `
            body {
              font-family: 'Roboto', sans-serif;
              margin: 0;
              padding: 0;
              background-color: #f4f7fa;
            }
            header {
              display: flex;
              justify-content: space-between;
              align-items: center;
              padding: 1rem 2rem;
              background-color: white;
              box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
            }
            header .logo {
              font-size: 1.5rem;
              font-weight: bold;
              color: #2f6f4f;
            }
            header nav {
              display: flex;
              align-items: center;
              gap: 1rem;
            }
            header nav button,
            header nav a {
              color: #333;
              font-size: 1rem;
              font-weight: 500;
              text-decoration: none;
              background: none;
              border: none;
              cursor: pointer;
              transition: color 0.3s ease;
            }
            header nav button:hover,
            header nav a:hover {
              color: #2f6f4f;
            }
            .dropdown-content {
              display: none;
              position: absolute;
              top: 100%;
              left: 0;
              background-color: white;
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
              padding: 1rem;
              border-radius: 8px;
            }
            .dropdown:hover .dropdown-content {
              display: block;
            }
            .dropdown-content a {
              display: block;
              padding: 0.5rem 0;
              color: #333;
              text-decoration: none;
            }
            .dropdown-content a:hover {
              color: #2f6f4f;
              background-color: #f4f7fa;
            }
            .container {
              max-width: 1200px;
              margin: 2rem auto;
              padding: 1rem;
            }
            .content {
              display: flex;
              flex-wrap: wrap;
              gap: 2rem;
            }
            .image {
              flex: 1;
              max-width: 45%;
              border-radius: 8px;
              overflow: hidden;
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            }
            .image img {
              width: 100%;
              height: auto;
            }
            .recipe-container {
              flex: 2;
              display: flex;
              flex-direction: column;
              gap: 1rem;
            }
            .ingredients,
            .instructions {
              background-color: white;
              padding: 1.5rem;
              border-radius: 8px;
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            }
            .calories {
              display: flex;
              flex-wrap: wrap;
              gap: 1rem;
              align-items: center;
              background-color: #f7fafc;
              padding: 1.5rem;
              border-radius: 8px;
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            }
            @media (max-width: 768px) {
              .content {
                flex-direction: column;
              }
              .image {
                max-width: 100%;
              }
              .recipe-container {
                flex: 1;
              }
            }
          `,
        }}
      />

      <header>
        <div className="logo">Healthy Life</div>
        <nav>
          <button onClick={() => navigate("/")}>Home</button>
          <div className="dropdown">
            <button className="text-black">
              Fitur <i className="fas fa-chevron-down" />
            </button>
            <div className="dropdown-content">
              <a href="#">Pelacak Jam Tidur</a>
              <a href="#">Pelacak Langkah</a>
              <a href="#">Resep Makanan</a>
              <a href="#">Catatan Sehat</a>
              <a href="#">Aktivitas Fisik</a>
              <a href="#">Monitor Kesehatan</a>
            </div>
          </div>
          <a href="#">Artikel</a>
          <a href="#">Pusat Bantuan</a>
        </nav>
        <div>
          <i className="fas fa-bars" />
        </div>
      </header>

      <main className="container">
        <div className="flex items-center mb-4">
          <button onClick={() => navigate("/makanmalam")} className="back-button">
            <i className="fas fa-arrow-left" />
          </button>
          <h1 className="ml-4">Resep Bihun Kuah</h1>
        </div>

        <div className="content">
          <div className="image">
            <img
              alt="Bihun Kuah"
            src="https://storage.googleapis.com/a1aa/image/ep8z3zxxzo3dGqr54mRaKw8blnBdeeqaK8CBBRHjrhLGaRlnA.jpg"
  />
          </div>

          <div className="recipe-container">
            <div className="ingredients">
              <div className="recipe-details">
                <h2>Bahan-Bahan:</h2>
                <ul>
                <li>1 bungkus bihun</li>
            <li>2 ons jamur (optional, bisa diganti dengan sayuran lain seperti sawi atau wortel)</li>
            <li>2 butir telur</li>
            <li>2 buah sosis (opsional)</li>
            <li>3 siung bawang putih</li>
            <li>Sejumput merica</li>
            <li>Garam dan penyedap rasa secukupnya</li>
            <li>Air secukupnya untuk kuah</li>
                </ul>
              </div>
            </div>

            <div className="instructions">
              <h2>Cara Membuat:</h2>
              <ol>
              <li>Rebus bihun hingga matang, tiriskan.</li>
            <li>Potong jamur, sosis, dan bawang putih. Tumis bawang putih hingga harum.</li>
            <li>Tambahkan sosis dan jamur ke dalam wajan, tumis hingga matang.</li>
            <li>Tuangkan air ke dalam wajan, dan didihkan. Tambahkan garam, merica, dan penyedap rasa sesuai selera.</li>
            <li>Masukkan bihun yang sudah direbus, aduk rata, dan masak selama beberapa menit agar bumbu meresap.</li>
            <li>Masukkan telur, aduk hingga telur matang dan tercampur rata dengan bihun.</li>
            <li>Sajikan bihun kuah hangat.</li>
              </ol>
            </div>
           
           <div>
            <div className="calories">
              <div classname="calories-item"></div>
            <h3>Ringkasan Kalori</h3>
              <p>Lemak Jenuh: 7.30g</p>
              <p>Kolesterol: 120mg</p>
              <p>Sodium: 100mg</p>
              <p>Karbohidrat: 43.50g</p>
              <p>Serat: 2.0g</p>
             </div>

             <div className="calorie-item">
              </div>

              <span className="plus-button">+</span>
              <p><strong>320 kalori</strong></p>
            </div>  
          </div>
        </div>
      </main>
    </>
  );
}

export default Bihunkuah;
