import { useState } from 'react'

  const C = {
  nama: 'MaXpress Coin Laundry Gor',
  jam: '07.00 – 21.00',
  wa: '6281116631923',
  telp: '+62 811-1663-1923',
  ig: 'https://www.instagram.com/maxpresscoinlaundry_gor?jplx=Y2pvMHhmNndsbGV1',
  alamat: 'Jl. A. Damyati No.32, RT.004/RW.003, Sukarasa, Kec. Tangerang, Kota Tangerang, Banten 15111',
}


const layanan = [
  { id: 'cs', n: 'Cuci saja', d: '', p: 10000, u: '5 kg' },
  { id: 'ck', n: 'Cuci kering', d: 'Tanpa parfum dan packing', p: 25000, u: '5 kg' },
  { id: 'ks', n: 'Keringin saja', d: '', p: 15000, u: '5 kg' },
  { id: 'cl', n: 'Cuci kering lipat', d: 'Parfum & packing', p: 30000, u: '5 kg' },
  { id: 'cse', n: 'Cuci kering setrika', d: 'Parfum & packing', p: 40000, u: '5 kg' },
  { id: 'ss', n: 'Setrika saja', d: '', p: 35000, u: '5 kg' },
  { id: 'bk', n: 'Bed cover kecil', d: '', p: 25000, u: '', fixed: true },
  { id: 'bb', n: 'Bed cover besar', d: '', p: 35000, u: '', fixed: true },
]

const slogans = ['Cepat', 'Bersih', 'Higienis', 'Tidak dicampur']

const langkah = [
  ['Antar cucian', 'Bawa sendiri cucian ke toko kami. Kami tidak melayani antar jemput.'],
  ['Pilih layanan sendiri', ' Ada Cuci saja, cuci kering, lipat, atau setrika sesuai kebutuhan.'],
  ['Kami proses', 'Cucian Anda dicuci terpisah, tidak dicampur. Selesai 90 menit, atau 3 jam untuk layanan setrika.'],
  ['Ambil bersih', 'Ambil cucian yang wangi, rapi, dan siap pakai.'],
]

const rp = (x) => 'Rp' + x.toLocaleString('id-ID')

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
)

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

const PinIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2a7 7 0 00-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 00-7-7zm0 9.5A2.5 2.5 0 119.5 9a2.5 2.5 0 012.5 2.5z" />
  </svg>
)

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M6.6 10.8a15.1 15.1 0 006.6 6.6l2.2-2.2a1 1 0 011-.25 11.4 11.4 0 003.6.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.6a1 1 0 01-.25 1z" />
  </svg>
)

const waLink = `https://wa.me/${C.wa}?text=${encodeURIComponent('Halo MaXpress Coin Laundry, saya mau tanya layanan laundry.')}`

function Nav() {
  return (
    <header className="nav">
      <div className="wrap">
        <a className="logo" href="#atas">Ma<b>X</b>press</a>
        <nav>
          <a href="#harga">Daftar harga</a>
          <a href="#hitung">Hitung biaya</a>
          <a href="#cara">Cara kerja</a>
          <a href="#info">Info</a>
        </nav>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <div className="hero" id="atas">
      <div className="wrap">
        <div>
          <h1>Laundry full service, beres tanpa ribet</h1>
          <p>
            Cuci, kering, lipat, hingga setrika di mesin Maytag Commercial Laundry.
            Setiap cucian diproses sendiri, tidak dicampur dengan punya orang lain.
          </p>
          <div className="cta">
            <a className="btn solid" href="#harga">Lihat daftar harga</a>
            <a className="btn" href="#hitung">Hitung biaya</a>
          </div>
        </div>
        <div className="badge" aria-label="90 menit selesai">
          90 MENIT<br />SELESAI
          <small>Buka setiap hari {C.jam}</small>
        </div>
      </div>
    </div>
  )
}

function Slogan() {
  return (
    <section>
      <div className="wrap">
        <h2>Kenapa pilih kami</h2>
        <p className="sub">Tiga hal yang kami jaga di setiap cucian.</p>
        <div className="slogans">
          {slogans.map((s) => <span key={s}>{s}</span>)}
        </div>
      </div>
    </section>
  )
}

function Harga() {
  return (
    <section id="harga" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <h2>Daftar harga</h2>
        <p className="sub">Harga per 5 kg untuk cucian kiloan, per buah untuk bed cover.</p>
        <div className="prices">
          {layanan.map((l) => (
            <div className="row" key={l.id}>
              <div className="n">
                {l.n}
                {l.d && <span className="d">{l.d}</span>}
              </div>
              <div className="p">
                {rp(l.p)}
                {l.u && <small> / {l.u}</small>}
              </div>
            </div>
          ))}
        </div>
        <div className="note">
          <span>3 jam selesai</span>
          <span>Tidak menerima antar jemput</span>
        </div>
      </div>
    </section>
  )
}

function Hitung() {
  const [id, setId] = useState('cl')
  const [kg, setKg] = useState(5)
  const l = layanan.find((x) => x.id === id)
  const jumlah = Math.max(1, Number(kg) || 0)
  const unit = Math.max(1, Math.ceil((Number(kg) || 0) / 5))
  const total = l.fixed ? l.p * jumlah : l.p * unit

  return (
    <section id="hitung" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <h2>Hitung perkiraan biaya</h2>
        <p className="sub">
          Perkiraan dihitung per kelipatan 5 kg. Total pasti ditentukan saat cucian ditimbang di kasir.
        </p>
        <div className="calc">
          <div className="card">
            <label htmlFor="lay">Layanan</label>
            <select id="lay" value={id} onChange={(e) => setId(e.target.value)}>
              {layanan.map((x) => (
                <option key={x.id} value={x.id}>{x.n} ({rp(x.p)})</option>
              ))}
            </select>
            <label htmlFor="kg">{l.fixed ? 'Jumlah bed cover' : 'Berat cucian (kg)'}</label>
            <input
              id="kg"
              type="number"
              min={1}
              step={l.fixed ? 1 : 0.5}
              value={kg}
              onChange={(e) => setKg(e.target.value)}
            />
          </div>
          <div className="card">
            <p style={{ margin: '0 0 4px', color: 'var(--muted)' }}>
              {l.fixed ? `${jumlah} buah` : `${unit} × 5 kg`}
            </p>
            <div className="total" aria-live="polite">{rp(total)}</div>
            <p style={{ margin: '12px 0 0', color: 'var(--muted)' }}>
              {l.n}{l.d ? ` · ${l.d}` : ''}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Cara() {
  return (
    <section id="cara" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <h2>Cara kerja</h2>
        <p className="sub">Empat langkah dari cucian kotor ke lemari.</p>
        <div className="steps">
          {langkah.map(([judul, isi], i) => (
            <div className="card" key={judul}>
              <h3>{i + 1}. {judul}</h3>
              <p>{isi}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
function Info() {
  return (
    <section id="info" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <h2>Info Jam Buka</h2>
        <div className="info">
          <div className="card">
            <p style={{ margin: '0 0 6px', color: 'var(--muted)' }}>Jam buka</p>
            <div className="big">{C.jam}</div>
            <p style={{ margin: '8px 0 0' }}>
              Buka setiap hari kecuali untuk tanggal 25 November tutup , laundry full service only.
            </p>
          </div>
          <div className="card">
            <p style={{ margin: '0 0 6px', color: 'var(--muted)' }}>Lokasi & kontak</p>
            <div className="social">
              <a className="ig" href={C.ig} target="_blank" rel="noopener noreferrer" aria-label="Instagram MaXpress Coin Laundry">
                <InstagramIcon />
              </a>
              <a className="wa" href={waLink} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp MaXpress Coin Laundry">
                <WhatsAppIcon />
              </a>
            </div>
            <hr className="divider" />
            <div className="contact-row">
              <PinIcon />
              <span>{C.alamat}</span>
            </div>
            <div className="contact-row">
              <PhoneIcon />
              <a href={waLink} target="_blank" rel="noopener noreferrer">{C.telp}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Slogan />
      <Harga />
      <Hitung />
      <Cara />
      <Info />
      <footer>
        <div className="wrap">
          <b>{C.nama}</b>
          <div>Cepat – Bersih – Higienis – Tidak dicampur</div>
          <div style={{ opacity: 0.75, marginTop: 6 }}>Mesin Maytag Commercial Laundry</div>
        </div>
      </footer>
      <a
        className="wa-float"
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat via WhatsApp"
      >
        <WhatsAppIcon />
      </a>
    </>
  )
}
      