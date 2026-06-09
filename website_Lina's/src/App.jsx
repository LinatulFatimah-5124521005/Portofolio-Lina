import { useState } from "react";
import "./App.css";

import backgroundPage from "./assets/background.svg";

import bgDeskripsi from "./assets/bg-deskripsi_diri.svg";
import bgHobi from "./assets/bg-hobi.svg";
import bgKontak from "./assets/bg-kontak.svg";
import bgSkill from "./assets/bg-skill.svg";

import foto1 from "./assets/fotografi1.svg";
import foto2 from "./assets/fotografi2.svg";

import desain1 from "./assets/3D_Kamar.svg";
import desain2 from "./assets/3D_Kelas.svg";

import bgMagang from "./assets/bg-pengalaman_magang.svg";
import bgKeahlian from "./assets/bg-keahlian.svg";
import bgSoftware from "./assets/bg-kemampuan_software.svg";
import bgPendidikan from "./assets/bg-riwayat_pendidikan.svg";
import bgOrganisasi from "./assets/bg-riwayat_organisasi.svg";
import bgListTugas from "./assets/bg-list_tugas.svg";
import bgMotivasi from "./assets/bg-motivasi.svg";

import ellipse1 from "./assets/ellipse-1.png";

import line16 from "./assets/line-16.svg";
import line18 from "./assets/line-18.svg";
import line19 from "./assets/line-19.svg";
import line20 from "./assets/line-20.svg";
import line22 from "./assets/line-22.svg";
import line23 from "./assets/line-23.svg";
import line24 from "./assets/line-24.svg";
import line25 from "./assets/line-25.svg";
import line252 from "./assets/line-25-2.svg";

import buttonMT from "./assets/Button_MT.svg";
import buttonDate from "./assets/Button_Date.svg";
import buttonSave from "./assets/simpan.svg";

import deleteIcon from "./assets/delete.svg";

function App() {

  const [taskInput, setTaskInput] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [tasks, setTasks] = useState([]);

  /* REF UNTUK INPUT DATE */
  const [dateInputId] = useState("dateInput");

  /* INPUT TUGAS */
  function inputTask() {

    const tugas = prompt("Masukkan tugas:");

    if (tugas === "" || tugas === null) {
      return;
    }

    setTaskInput(tugas);
  }

  /* TAMBAH TASK */
  function addTask() {

    if (taskInput === "") {
      alert("Masukkan tugas terlebih dahulu!");
      return;
    }

    if (taskDate === "") {
      alert("Pilih deadline terlebih dahulu!");
      return;
    }

    const newTask = {
      tugas: taskInput,
      deadline: taskDate
    };

    setTasks([...tasks, newTask]);

    setTaskInput("");
    setTaskDate("");
  }

  function deleteTask(index) {

    const updatedTasks = tasks.filter((_, i) => i !== index);

    setTasks(updatedTasks);
  }

  /* PILIH DEADLINE */
  function chooseDeadline() {

    document.getElementById(dateInputId).showPicker();
  }

  return (
    <div
  className="app-container"
  style={{
    backgroundImage: `url(${backgroundPage})`,
    backgroundRepeat: "repeat-y",
    backgroundPosition: "center top",
    backgroundSize: "cover",
    minHeight: "100vh",
  }}

  >
      
      <header className="hero" id="home">

        <h1>
          Linatul Fatimah Az-Zahra Kusumaningarum
        </h1>

        <p>
          Mahasiswa D3 Multimedia Broadcasting
        </p>

        <img
          src={ellipse1}
          alt="Foto Lina"
        />
      </header>

      {/* NAVBAR */}
      <nav className="navbar">

        <a href="#tentang">Tentang</a>
        <a href="#hobi">Hobi</a>
        <a href="#kontak">Kontak</a>
        <a href="#skill">Skill</a>
        <a href="#portofolio">Portofolio</a>
        <a href="#magang">Magang</a>
        <a href="#keahlian">Keahlian</a>
        <a href="#software">Software</a>
        <a href="#pendidikan">Pendidikan</a>
        <a href="#organisasi">Organisasi</a>
        <a href="#list-tugas">List Tugas</a>
        <a href="#motivasi">Motivasi</a>

      </nav>

      {/* TENTANG */}
<section
  className="card"
  id="tentang"
  style={{
    backgroundImage: `url(${bgDeskripsi})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
  }}
>

  <h2>Deskripsi Diri</h2>

  <div className="image">
    <img src={line18} alt="Line" />
  </div>

  <p>
    Saya adalah mahasiswa D3 Multimedia Broadcasting di Politeknik Elektronika Negeri Surabaya yang aktif, disiplin, dan memiliki semangat belajar yang tinggi. Saya senang mempelajari hal-hal baru di bidang multimedia dan broadcasting, serta terus mengembangkan kemampuan komunikasi, kerja sama tim, dan kreativitas. Saya siap berkontribusi secara positif dalam lingkungan akademik maupun organisasi serta mampu menjalankan tanggung jawab dengan sikap profesional.
  </p>

</section>

 {/* HOBI */}
<section
  className="card"
  id="hobi"
  style={{
    backgroundImage: `url(${bgHobi})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
  }}
>

  <h2>Hobi</h2>

  <div className="image">
    <img src={line16} alt="Line" />
  </div>

  <ul>
    <li>Menulis</li>
    <li>Bersepeda</li>
    <li>Badminton</li>
    <li>Mendengarkan Musik</li>
  </ul>

</section>

{/* KONTAK */}
<section
  className="card"
  id="kontak"
  style={{
    backgroundImage: `url(${bgKontak})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
  }}
>

  <h2>Kontak</h2>

  <div className="image">
    <img src={line19} alt="Line" />
  </div>

  <p>Telepon : 085731317819</p>
  <p>Email : linatulfatimah5@gmail.com</p>
  <p>Instagram : @LinLina123</p>

</section>

  {/* SKILL */}
<section
  className="card"
  id="skill"
  style={{
    backgroundImage: `url(${bgSkill})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
  }}
>

  <h2>Skill</h2>

  <div className="image">
    <img src={line20} alt="Line" />
  </div>

  <ul>
    <li>Fotografi</li>
    <li>Desain Grafis</li>
    <li>Editing Video</li>
  </ul>

</section>

{/* PORTOFOLIO */}
<section className="card" id="portofolio">

  <h2>Portofolio</h2>

  <div className="portfolio-container">

    <div className="portfolio-item">
      <img src={foto1} alt="Fotografi 1" />
      <h3>Fotografi Indoor : </h3>
      <p>
        Hasil fotografi indoor dengan teknik komposisi dan pencahayaan menggunakan lighting tambahan.
      </p>
    </div>

    <div className="portfolio-item">
      <img src={foto2} alt="Fotografi 2" />
      <h3>Fotografi Outdoor : </h3>
      <p>
        Hasil fotografi outdoor dengan teknik komposisi dan pencahayaan menggunakan cahaya alami.
      </p>
    </div>

    <div className="portfolio-item">
    <img src={desain1} alt="3D Kamar" />
      <h3>Desain 3D : </h3>
      <p>
        Pemodelan kamar menggunakan Blender.
      </p>
    </div>

    <div className="portfolio-item">
      <img src={desain2} alt="3D Kelas" />
      <h3>Desain 3D : </h3>
      <p>
        Pemodelan kelas menggunakan Blender.
      </p>
    </div>

  </div>

</section>

{/* MAGANG */}
<section
  className="card"
  id="magang"
  style={{
    backgroundImage: `url(${bgMagang})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
  }}
>

  <h2>Pengalaman Magang</h2>

  <div className="image">
    <img src={line22} alt="Line" />
  </div>

  <div className="table-wrapper">

    <table>

      <thead>
        <tr>
          <th>No</th>
          <th>Perusahaan</th>
          <th>Periode</th>
          <th>Deskripsi</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>1</td>
          <td>ARDYAH Photo Studio</td>
          <td>15 Agustus 2023 - 15 Februari 2024</td>
          <td>Pengambilan foto dan Editing Foto</td>
        </tr>
      </tbody>

    </table>

  </div>

</section>

{/* KEAHLIAN */}
<section
  className="card"
  id="keahlian"
  style={{
    backgroundImage: `url(${bgKeahlian})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
  }}
>

  <h2>Keahlian</h2>

  <div className="image">
    <img src={line23} alt="Line" />
  </div>

  <div className="table-wrapper">

    <table>

      <thead>
        <tr>
          <th>Keahlian</th>
          <th>Progress</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td>Desain Grafis</td>
          <td>75%</td>
        </tr>

        <tr>
          <td>Fotografi</td>
          <td>75%</td>
        </tr>

      </tbody>

    </table>

  </div>

</section>

{/* SOFTWARE */}
<section
  className="card"
  id="software"
  style={{
    backgroundImage: `url(${bgSoftware})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
  }}
>

  <h2>Kemampuan Software</h2>

  <div className="image">
    <img src={line24} alt="Line" />
  </div>

  <div className="table-wrapper">

    <table>

      <thead>
        <tr>
          <th>Aplikasi</th>
          <th>Level</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td>Canva</td>
          <td>Menengah</td>
        </tr>

        <tr>
          <td>Corel Draw</td>
          <td>Menengah</td>
        </tr>

        <tr>
          <td>Blender</td>
          <td>Menengah</td>
        </tr>

        <tr>
          <td>Visual Studio Code</td>
          <td>Menengah</td>
        </tr>

        <tr>
          <td>Microsoft Office</td>
          <td>Menengah</td>
        </tr>

      </tbody>

    </table>

  </div>

</section>

{/* PENDIDIKAN */}
<section
  className="card"
  id="pendidikan"
  style={{
    backgroundImage: `url(${bgPendidikan})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
  }}
>

  <h2>Riwayat Pendidikan</h2>

  <div className="image">
    <img src={line252} alt="Line" />
  </div>

  <div className="table-wrapper">

    <table>

      <thead>
        <tr>
          <th>Jenjang</th>
          <th>Institusi</th>
          <th>Tahun</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td>SMP</td>
          <td>SMPN 1 Kalitengah</td>
          <td>2018–2021</td>
        </tr>

        <tr>
          <td>SMK</td>
          <td>SMKN 1 Kalitengah</td>
          <td>2021–2024</td>
        </tr>

        <tr>
          <td>Kuliah</td>
          <td>Politeknik Elektronika Negeri Surabaya</td>
          <td>2024–Sekarang</td>
        </tr>

      </tbody>

    </table>

  </div>

</section>

  {/* ORGANISASI */}
<section
  className="card"
  id="organisasi"
  style={{
    backgroundImage: `url(${bgOrganisasi})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
  }}
>

  <h2>Riwayat Organisasi</h2>

  <div className="image">
    <img src={line25} alt="Line" />
  </div>

  <div className="table-wrapper">

    <table>

      <thead>
        <tr>
          <th>Organisasi</th>
          <th>Jabatan</th>
          <th>Tahun</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td>Dewan Penggalang</td>
          <td>Bendahara</td>
          <td>2019–2021</td>
        </tr>

        <tr>
          <td>OSIS</td>
          <td>Anggota</td>
          <td>2021–2022</td>
        </tr>

        <tr>
          <td>Satgas PPK PENS</td>
          <td>Anggota</td>
          <td>2025–Sekarang</td>
        </tr>

      </tbody>

    </table>

  </div>

</section>

{/* LIST TUGAS */}
<section
  className="card"
  id="list-tugas"
  style={{
    backgroundImage: `url(${bgListTugas})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
  }}
>

  <h2>List Tugas</h2>

  <div className="image">
    <img src={line22} alt="Line" />
  </div>

  <input
    type="text"
    value={taskInput}
    onChange={(e) => setTaskInput(e.target.value)}
    placeholder="Masukkan tugas..."
    className="hidden-input"
  />

  <input
    id={dateInputId}
    type="date"
    value={taskDate}
    onChange={(e) => setTaskDate(e.target.value)}
    className="hidden-input"
  />

  <div className="button-group">

    <button
      className="btn"
      onClick={inputTask}
    >
      <img
        src={buttonMT}
        alt="Tambah Tugas"
      />
    </button>

    <button
      className="btn"
      onClick={chooseDeadline}
    >
      <img
        src={buttonDate}
        alt="Pilih Deadline"
      />
    </button>

    <button
      className="save-btn"
      onClick={addTask}
    >
      <img
        src={buttonSave}
        alt="Simpan Tugas"
      />
    </button>

  </div>

  <ul id="taskList" className="task-list">

    {tasks.map((task, index) => (

      <li key={index}>

        <div className="task-content">
          <strong>{task.tugas}</strong>
          <br />
          Deadline: {task.deadline}
        </div>

        <button
          className="delete-btn"
          onClick={() => deleteTask(index)}
        >
          <img
            src={deleteIcon}
            alt="Hapus"
          />
        </button>

      </li>

    ))}

  </ul>

</section>

{/* MOTIVASI */}
<section
  className="card"
  id="motivasi"
  style={{
    backgroundImage: `url(${bgMotivasi})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
  }}
>

  <h2>Motivasi</h2>

  <div className="image">
    <img src={line22} alt="Line" />
  </div>

  <p>
    "Masa depanmu ditentukan oleh apa yang kamu lakukan hari ini,
    bukan besok."
  </p>

</section>

<footer>
  <p>
    © 2026 Linatul Fatimah
  </p>
</footer>

</div>
);
}

export default App;