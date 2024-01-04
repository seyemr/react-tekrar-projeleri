import './App.css'
import Card from './Card'

function App() {

  return (
    <>
      <div className='wrapper'>
        <Card
          img="https://cdn.ankaramasasi.com/2023/4/21/ali-kuscu-kimdir-xt0gahgv.jpg"
          title="Ali Kuşçu"
          description="Ali Kuşçu (Özbekçe: Ali Qushchi Samarqandiy) veya asıl adıyla Ali bin Muhammed (1403, Semerkand - 16 Aralık 1474, İstanbul), Timur İmparatorluğu ile Osmanlı İmparatorluğu'nda yaşamış olan astronom, matematikçi, fizikçi, filozof ve dil bilimcidir. En önemli tanınma nedeni Ay'ın ilk haritasını çıkaran âlim olmasıdır."
        />
        <Card
          img="https://ia.tmgrup.com.tr/3222a4/0/0/0/0/0/0?u=https://i.tmgrup.com.tr/fikriyat/album/2019/09/05/biruni-kimdir-neyi-bulmustur-biruni-hakkinda-bilinmeyenler-1567663829556.jpg&mw=752"
          title="El Biruni"
          description="Tam adı Ebu Reyhan Muhammed bin Ahmed el-Birûnî'dir (Farsça: بیرونی, Arapça: ابو الريحان محمد بن احمد البيروني). 1973 yılında basılan Sovyet posta pulu. Batı dillerinde adı Alberuni veya Aliboron olarak geçer. Gökbilim, matematik, doğa bilimleri, astronomi, coğrafya ve tarih alanındaki çalışmalarıyla tanınır."
        />
        <Card
          img="https://www.insaniyet.net/wp-content/uploads/2020/12/farabinin-vizyonu-.jpg"
          title="Farabi"
          description="Fârâbî (Farsça: الفارابي) ya da Batı′da bilinen adıyla Alpharabius (872, Fârâb - 950/951, Şam), 8. ve 13. yüzyıllar arasındaki İslam'ın Altın Çağı'nda yaşamış ünlü filozof ve bilim insanıdır. Aynı zamanda gök bilimci, mantıkçı ve müzisyendir."
        />
      </div>
    </>
  )
}

export default App
