<template>
<section class="section container mx-auto mt-39 mb-100 lg:mb-200">
    <div v-for="(item, index) in item" :key="item._id">
        <div v-if="index % 2 == 0">
            <card-show-leave :click="() => btnDataAct(item)" :img="item.img" :title="item.title" :subTitle="item.sub_title" :desc="item.desc" :type="item.type"/>
        </div>
        <div v-else>
            <card-show-right :click="() => btnDataAct(item)" :img="item.img" :title="item.title" :subTitle="item.sub_title" :desc="item.desc" :type="item.type"/>
        </div>
    </div>
    <div v-if="dataAct" class="absolute z-9999 h-[100vh] w-[100vw] flex justify-center fixed items-center top-0 left-0">
        <div class="absolute bg-black/50 w-full h-full"></div>
        <div class="absolute w-80% h-90% bg-white p-10 rounded-bl-[100px] rounded-tr-[100px]">
             <div class="flex justify-between items-center">
                <div class="h3-bold mb-10">{{ dataAct.title }}</div>
                 <NuxtLink @click="btnClose()">
                  <img src='/svg/Close-icon.svg'/>
                 </NuxtLink>
              </div>
            <div class="flex justify-between items-center">
                <div class="flex gap-4 w-full lg:justify-start justify-center ">
                    <NuxtLink @click="btnActive('Variasi')" :class="activ == 'Variasi' ? 'btn-paper bg-primary20 text-white' : 'btn-paper btn-outline border-primary text-primary'">Variasi</NuxtLink>
                    <NuxtLink @click="btnActive('Produk')" :class="activ == 'Produk' ? 'btn-paper bg-primary20 text-white' : 'btn-paper btn-outline border-primary text-primary'">Foto Produk</NuxtLink>
                </div>
                <!-- <NuxtLink @click="btnClose()" class="btn-paper btn-outline border-red text-red">Close</NuxtLink> -->
            </div>
            <div class="mt-10 w-full h-90%">
                <div v-if="activ == 'Variasi'">
                    <div class="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-1">
                        <div v-if="dataAct.detail.length > 0" v-for="(item, index) in dataAct.detail" class=" rounded-tr-[30px] rounded-bl-[30px] hover:bg-netral30 flex-1 min-h-50 p-4">
                            <div class="flex items-center gap-5">
                                <h4 class="font-size-6 font-600">GSM : </h4>
                                <p class="font-size-5 text-netral10">{{ item.gsm }}</p>
                            </div>
                            <p>Ukuran in sheets:</p>
                            <ul v-if="item.sheet" v-for="(sheet, index) in item.sheet">
                                <li>{{ index+1 }}. {{sheet}}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div v-else>
                    <div class="rounded-tr-[40px] rounded-bl-[40px] h-130 w-full overflow-hidden">
                        <img :src="dataAct.img_product" class="h-auto w-full bg-cover"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</template>
<script setup>
const activ = ref('Variasi')
const btnActive = (idx) => {
    activ.value = idx;
}

const dataAct = ref(null)
const btnDataAct = (data) => {
    console.log(data)
    dataAct.value = data
}

const btnClose = () => {
    dataAct.value = null
    console.log(dataAct.value)
}
const item = [
    {
        '_id': 1,
        img : '/img/product/img-duplex-board.png',
        img_product: '/img/product/img-product.png',
        title: 'Duplex Board',
        desc: "Duplex memiliki 2 warna yang berbeda di kedua sisinya (1 sisi berwarna abu-abu dan 1 sisi berwarna putih). 1 sisi luar sudah tercoating putih sehingga finishing setelah cetak bisa diaplikasikan menjadi berbagai macam. Dengan harga yang relatif cukup murah, sebagian besar digunakan untuk kemasan industri seperti snack, obat-obatan, makanan, dan barang-barang finished good lainnya.",
        type: "packaging",
        detail: [
            {
                gsm: 250,
                sheet: ['65 x 100', '72 x 102','70 x 100' , '79 x 109', '89 x 120']
            },
            {
                gsm: 270,
                sheet: ['79 x 109', '89 x 120']
            },
            {
                gsm: 310,
                sheet: ['70 x 100', '79 x 109','89 x 120']
            },
            {
                gsm: 350,
                sheet: ['70 x 100', '79 x 109','89 x 120']
            },
            {
                gsm: 400,
                sheet: ['70 x 100', '79 x 109','89 x 120']
            },
            {
                gsm: 450,
                sheet: ['79 x 109', '89 x 120']
            },
        ]
    },
    {
        '_id': 2,
        img : '/img/product/img-ivory-board.png',
        img_product: '/img/product/triplex-board.png',
        title: 'Ivory Board',
        desc: "Kertas packaging yang memiliki 1 sisi coating dan 1 sisi tidak dicoating. Sangat cocok untuk kebutuhan packaging sehari-hari Anda. Kertas yang memiliki kandungan virgin pulp 100% ini cocok untuk dicetak offset secara high speed di mesin offset Anda. Aplikasi finishing juga bisa di-apply-kan banyak di jenis kertas ini, mulai dari laminating, UV spot, lem lipat, dan sebagainya sehingga hasil packaging bisa terlihat premium.",
        type: "paper bag, packaging rokok, packaging komestik, packaging finished good untuk barang-barang industri",
        detail: [
            {
                gsm: 210,
                sheet: ['79 x 109']
            },
            {
                gsm: 230,
                sheet: ['79 x 109']
            },
            {
                gsm: 250,
                sheet: ['79 x 109']
            },
            {
                gsm: 270,
                sheet: ['79 x 109']
            },
            {
                gsm: 300,
                sheet: ['65 x 100','79 x 109', '89 x 120']
            },
            {
                gsm: 350,
                sheet: ['65 x 100','79 x 109', '89 x 120']
            },
        ]
    },
    {
        '_id': 3,
        img : '/img/product/img-kertas-kraft.png',
        title: 'Kertas Kraft',
        img_product: '/img/product/ivory-board.png',
        desc: "Kertas yang memiliki warna dasar coklat 2 sisi. 1 sisi luar lebih halus, 1 sisi dalam lebih sedikit kasar. Kertas kraft adalah kertas 100% recycled dari waste kertas yang didaur ulang kembali menjadi kertas industri, sehingga sangat ramah lingkungan. Permukaan kasar yang menghasilkan kesan kertas yang klasik, memiliki sifat elastis dan tahan akan kerusakan serta benturan.",
        type: " paper bag, outer packaging, kotak makan",
        detail: [
            {
                gsm: 125,
                sheet: ['90 x 120'],
                roll: ['L90cm']
            },
            {
                gsm: 150,
                sheet: ['90 x 120'],
                roll: ['L90cm']
            },
            {
                gsm: 200,
                sheet: ['90 x 120'],
                roll: ['L90cm']
            },
            {
                gsm: 275,
                sheet: ['79 x 109', '90 x 120']
            },
            {
                gsm: 300,
                sheet: ['79 x 109', '90 x 120']
            },
            {
                gsm: 325,
                sheet: ['90 x 120']
            },
            {
                gsm: 350,
                sheet: ['79 x 109', '90 x 120']
            },
        ]
    },
    {
        '_id': 4,
        img : '/img/product/img-triplex-board.png',
        title: 'Triplex Board',
        img_product: '/img/product/img-product-triplex-board.png',
        desc: "Salah satu jenis kertas karton, yang dibuat dari kertas daur ulang. Yang dilapisi dengan white liner. Lapisan putih yang membuat triplex memiliki warna berbeda di kedua sisinya. Sisi putih sering digunakan untuk media cetak atau sebagai tampilan depan.",
        type: "cover buku, packaging",
        detail: [
            {
                gsm: 200,
                sheet: ['61 x 86' ,'65 x 100','79 x 109'],
            },
            {
                gsm: 230,
                sheet: ['79 x 109'],
            },
        ]
    },
    {
        '_id': 5,
        img : '/img/product/img-harsizedv-ivory.png',
        title: 'Harsized Ivory',
        img_product: '/img/product/img-product-Harsized-Ivory.png',
        sub_title: 'Food Grade',
        desc: "Kertas yang aman bersentuhan dengan makanan dan dapat diaplikasikan untuk kotak packaging makanan premium. Memiliki sertifikat food grade dan food contact safe. Sisi dalam dilapisi dengan plastik extrusion 15 micron sehingga tahan bocor (air, minyak, dsb).",
        type: "Segala kotak packaging makanan, bisa untuk makanan berkuah dan berminyak. Anti bocor.",
        detail: [
            {
                gsm: 230,
                mikron: 15,
                sheet: ['79 x 109'],
                roll: ['L79cm']
            },
            {
                gsm: 245,
                mikron: 15,
                sheet: ['79 x 109'],
                roll: ['L79cm']
            },
            {
                gsm: 260,
                mikron: 15,
                sheet: ['79 x 109']
            },
            {
                gsm: 280,
                mikron: 15,
                sheet: ['79 x 109'],
                roll: ['L65cm', 'L79cm']
            },
            {
                gsm: 305,
                mikron: 15,
                sheet: ['79 x 109']
            },
            {
                gsm: 330,
                mikron: 15,
                sheet: ['79 x 109'],
                roll: ['L65cm', 'L79cm']
            },
        ]
    },
    {
        '_id': 6,
        img : '/img/product/img-Kertas-roti.png',
        title: 'Kertas Roti',
        img_product : '/img/product/img-product-Kertas-Roti.png',
        desc: "Kertas yang diproduksi khusus untuk makanan. Terbuat dari bahan food grade dan tidak menimbulkan kontaminasi dari zat kimia berbahaya. Kertas ini bersifat tahan minyak, biasa digunakan untuk pembungkus makanan ringan, kue serta makanan berminyak.",
        type: "Alas untuk kue dalam oven, pembungkus makanan",
        detail: [
            {
                gsm: 400,
                sheet: ['75 x 100', '70 x 100'],
                color: ['putih', 'coklat']
            }
        ]
    },
    {
        '_id': 7,
        img : '/img/product/img-hvs.png',
        title: 'HVS',
        img_product : '/img/product/img-product-hvs.png',
        desc: "Kertas yang sering digunakan untuk buku bacaan, memiliki spek printability yang tinggi, sehingga kualitas hasil cetak beresolusi tinggi dan tajam.",
        type: "kertas dokumen perkantoran, buku, skripsi, buku paket pelajaran, buku tulis, lemek meja di restoran",
        detail: [
            {
                gsm: 58,
                sheet: ['61 x 86', '65 x 87' ,'65 x 90' ,'65 x 100', '79 x 109'],
                roll: ['L65cm', 'L75cm', 'L84cm', 'L85cm' ,'L86cm']
            },
            {
                gsm: 60,
                sheet: ['61 x 86' ,'65 x 90' ,'65 x 100', '79 x 109'],
            },
            {
                gsm: 70,
                sheet: ['61 x 86' ,'65 x 90' ,'65 x 100', '72 x 102','79 x 109'],
                roll: ['L73cm', 'L84cm', 'L86cm']
            },
            {
                gsm: 80,
                sheet: ['61 x 86', '65 x 90' ,'65 x 100', '79 x 109']
            },
            {
                gsm: 100,
                sheet: ['61 x 86', '65 x 90' ,'65 x 100', '79 x 109']
            },
        ]
    },
    {
        '_id': 8,
        img : '/img/product/img-art-paper.png',
        title: 'Art Paper',
        img_product : '/img/product/img-product-Art-Paper.png',
        desc: "Kertas yang memiliki permukaan licin/gloss di kedua sisinya dan berwarna putih. Gramasi mulai dari 80-150 GSM. Digunakan untuk bahan etiket, bahan-bahan promosi seperti brosur. Sering juga dipakai sebagai paper bag untuk kemasan yang lebih elite.",
        type: "brosur, Flyer, tiket konser, katalog, e-tiket",
        detail: [
            {
                gsm: 80,
                sheet: ['65 x 100'],
            },
            {
                gsm: 85,
                sheet: ['61 x 86', '65 x 90' ,'65 x 100', '79 x 109']
            },
            {
                gsm: 100,
                sheet: ['61 x 86','65 x 90' ,'65 x 100', '79 x 109']
            },
            {
                gsm: 120,
                sheet: ['61 x 86', '61 x 92' ,'65 x 90' ,'65 x 100', '79 x 109'],
                roll: ['L65cm', 'L79cm']
            },
            {
                gsm: 150,
                sheet: ['61 x 86', '61 x 92' ,'65 x 90' ,'65 x 100', '79 x 109'],
                roll: ['L65cm', 'L79cm']
            },
        ]
    },
    {
        '_id': 9,
        img : '/img/product/img-art-carton.png',
        title: 'Art Carton',
        img_product : '/img/product/img-product-Art-Carton.png',
        desc: "Kertas yang memiliki permukaan licin di kedua sisi, sama seperti kertas Art Paper namun gramatur lebih tebal. Dari GSM 190-400. Sering digunakan untuk cover buku, packaging paper, dll.",
        type: "Cover buku/majalah, kotak packaging makanan/finished good seperti masker",
        detail: [
            {
                gsm: 190,
                sheet: ['61 x 86', '65 x 90' ,'65 x 100', '79 x 109']
            },
            {
                gsm: 210,
                sheet: ['61 x 86','65 x 90' ,'65 x 100', '79 x 109'],
            },
            {
                gsm: 230,
                sheet: ['61 x 86','65 x 90' ,'65 x 100', '79 x 109'],
            },
            {
                gsm: 260,
                sheet: ['61 x 86','65 x 90' ,'65 x 100', '79 x 109'],
                roll: ['L65cm', 'L79cm']
            },
            {
                gsm: 310,
                sheet: ['61 x 86','65 x 90' ,'65 x 100', '79 x 109'],
                roll: ['L65cm', 'L79cm']
            },
            {
                gsm: 360,
                sheet: ['65 x 100', '79 x 109']
            },
            {
                gsm: 400,
                sheet: ['65 x 100', '79 x 109']
            },
        ]
    },
    {
        '_id': 10,
        img : '/img/product/img-kertas-NCR.png',
        title: 'Kertas NCR',
        img_product : '/img/product/img-product-Kertas-NCR.png',
        sub_title: 'Non Carbon Required',
        desc: "Kertas yang memiliki tekstur halus, tipis, dan mempunyai partikel karbon untuk bisa tindas tanpa menggunakan karbon. Sering digunakan untuk nota-nota kontan dan cetak surat jalan menggunakan dot matrix.",
        type: "continuous form untuk dot metric (printing rangkap tanpa memerlukan carbon), tagihan, kuitansi, invoice, dokumen perjalanan",
        detail: [
            {
                roll: ['24.1', '37.8' ,'48.2']
            },
        ]
    },
    {
        '_id': 11,
        img : '/img/product/img-kertas-manila.png',
        title: 'Kertas Manila',
        img_product : '/img/product/img-product-Kertas-Manila.png',
        sub_title: 'Brief Card',
        desc: "Kertas yang 2 sisinya sama, 1 sisi memiliki tekstur agak kasar dan tekstur halus pada sisi lainnya. Seperti kertas HVS namun lebih tebal. Memiliki banyak pilihan warna yang cerah dengan ketebalan yang beragam. Biasa digunakan untuk prakarya, majalah dinding, ataupun kebutuhan-kebutuhan alat tulis dan sekolah.",
        type: "cover laporan, prakarya, mading dan menggambar",
        detail:{
            paperplus: [
                {
                    gsm: 150,
                    sheet: ['61 x 86', '65 x 100']
                },
                {
                    gsm: 200,
                    sheet: ['61 x 86', '65 x 100']
                }
            ],
            jangkar: [
                {
                    gsm: 150,
                    sheet: ['61 x 86', '65 x 100'],
                    roll: ['L86cm'],
                    color: ['Merah muda', 'kuning muda', 'hijau muda', 'biru muda']
                }
            ],
            golden_coin: [
                {
                    gsm: 160,
                    sheet: ['61 x 86', '65 x 100'],
                    roll: ['L86cm'],
                    color: ['Merah muda', 'kuning muda', 'hijau muda', 'biru muda', 'merah tua', 'kuning tua', 'hijau sedang', 'hijau tua', 'biru benhur', 'biru tua', 'orange', 'putih']
                },
                {
                    gsm: 200,
                    sheet: ['79 x 109'],
                    color: ['Putih', 'merah muda', 'kuning muda', 'biru muda', 'hijau muda']
                },
                {
                    gsm: 250,
                    sheet: ['65 x 100', '79 x 109']
                }
            ]
        }
    },
    {
        '_id': 12,
        img : '/img/product/img-kertas-samson.png',
        title: 'Kertas Samson',
        img_product : '/img/product/img-product-Kertas-Samson.png',
        desc: "Kertas berwarna coklat yang terbuat dari hasil daur ulang sehingga sering disebut kertas ramah lingkungan. Kertas dengan gramasi tipis yang memiliki permukaan halus dan tidak mudah robek.",
        type: "amplop, ban uang, keset mobil, sampul buku",
        detail: [
            {
                gsm: 80,
                sheet: ['90 x 120'],
                roll: ['90cm']
            },
        ]
    },
    {
        '_id': 13,
        img : '/img/product/img-kertas-koran.png',
        title: 'CD / Kertas Koran',
        img_product : '/img/product/img-product-Kertas-Koran.png',
        desc: "Kertas buram hasil full recycled sehingga menghasilkan warna putih gelap/redup. Bersifat tipis 50 GSM dan tidak tahan terhadap air.",
        type: "dokumentasi, koran, surat kabar, majalah, novel, kertas buram, LKS soal ulangan dan buku segmen murah",
        detail: [
            {
                gsm: 50,
                sheet: ['65 x 100', '61 x 86' ,'79 x 109'],
                roll: ['65cm', '79cm', '86cm', '109cm']
            },
        ]
    },
    {
        '_id': 14,
        img : '/img/product/img-kertas-litho.png',
        title: 'Kertas Litho',
        img_product : '/img/product/img-product-Kertas-Litho.png',
        sub_title: 'Machine Glazed',
        desc: "Kertas tipis semi transparan yang memiliki lapisan laminasi halus di salah satu sisinya, sehingga membuat kertas menjadi anti minyak, anti air dan lebih tahan terhadap goresan. Kertas ini cocok untuk pembungkus makanan karena food grade.",
        type: "Food wrapper, cupcake case, cover dalam rokok yang telah dilaminasi terhadap foil kertas ban",
        detail: [
            {
                gsm: 30,
                sheet: ['88 x 69', '44 x 59'],
                roll: ['77.5', '80.5' ,'92 cm']
            },
            {
                gsm: 40,
                sheet: ['79 x 109'],
                roll: ['77.5', '80.5' ,'92 cm']
            },
        ]
    },
    {
        '_id': 15,
        img : '/img/product/img-sticker.png',
        title: 'Sticker',
        img_product : '/img/product/img-product-Kertas-Sticker.png',
        desc: "Kertas hasil sintetis yang memiliki tekstur licin, halus, mengkilap, lentur dan terdapat lapisan lem pada bagian belakang. Kertas stiker sendiri memiliki banyak jenis seperti stiker yang anti air, tidak mudah robek, transparan dan masih banyak lagi sesuai penggunaannya.",
        type: "label box, label makanan, dan label minuman",
        detail: {
            camel: [
                {
                    type_kertas: 'HVS',
                    sheet: ['54 x 70', '65 x 100', '70 x 108']
                },
                {
                    type_kertas: 'Cast Coat Camel',
                    sheet: ['54 x 70', '65 x 100', '70 x 108']
                },
                {
                    type_kertas: 'Vinyl Transparent',
                    sheet: ['49 x 79', '98 x 79']
                },
                {
                    type_kertas: 'Vinyl Susu',
                    sheet: ['53 x 86', '106 x 86']
                },
            ],
            pindo: [
            {
                    type_kertas: 'Cast Coat Agna',
                    sheet: ['70 x 108']
                },
                {
                    type_kertas: 'HVS UTRA',
                    sheet: ['70 x 108']
                },
            ]
        }
    },
]
</script>