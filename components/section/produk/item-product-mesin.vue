<template>
    <section class="container mx-auto mt-39 ">
        <div v-for="(item, index) in item" :key="item._id">
            <div v-if="index % 2 == 0">
                <card-show-leave-mesin :desc2="item.desc2" :img_desc="item.img_desc" :point_desc="item.point_desc" :click="() => btnDataAct(item)" :img="item.img" :title="item.title" :subTitle="item.sub_title" :desc="item.desc" :type="item.type"/>
            </div>
            <div v-else>
                <card-show-right-mesin :desc2="item.desc2" :img_desc="item.img_desc" :click="() => btnDataAct(item)" :img="item.img" :point_desc="item.point_desc" :img2="item.img2" :title="item.title" :subTitle="item.sub_title" :desc="item.desc" :type="item.type"/>
            </div>
        </div>
        <div v-if="dataAct" class="absolute z-999 py-60 overflow-y-auto h-[100vh] w-full flex justify-center top-0 left-0">
            <div class="fixed top-0 left-0 bg-black/50 w-full h-full"></div>
            <div class="absolute w-full flex justify-center items-center">
            <div class="w-90% min-h-100 bg-white p-10 mb-100 rounded-bl-[100px] rounded-tr-[100px]">
              <div class="flex justify-between items-center">
                <div class="h3-bold mb-10">{{ dataAct.title }}</div>
                 <NuxtLink @click="btnClose()">
                  <img src='/svg/Close-icon.svg'/>
                 </NuxtLink>
              </div>
                <div class="flex justify-between items-center">
                    <div class="flex gap-4 w-full lg:justify-start justify-center ">
                        <NuxtLink @click="btnActive('Technical Parameters')" :class="activ == 'Technical Parameters' ? 'btn-paper bg-primary20 text-white' : 'btn-paper btn-outline border-primary text-primary'">Technical Parameters</NuxtLink>
                        <NuxtLink v-if="dataAct.box_framing" @click="btnActive('Box Forming Process')" :class="activ == 'Box Forming Process' ? 'btn-paper bg-primary20 text-white' : 'btn-paper btn-outline border-primary text-primary'">Box Forming Process</NuxtLink>
                        <NuxtLink v-if="dataAct.box_types" @click="btnActive('Box Types')" :class="activ == 'Box Types' ? 'btn-paper bg-primary20 text-white' : 'btn-paper btn-outline border-primary text-primary'">Box Types</NuxtLink>
                        <NuxtLink v-if="dataAct.machine_section" @click="btnActive('Machine Section')" :class="activ == 'Machine Section' ? 'btn-paper bg-primary20 text-white' : 'btn-paper btn-outline border-primary text-primary'">Machine Section</NuxtLink>
                        <NuxtLink v-if="dataAct.applicable_paper" @click="btnActive('Applicable Paper')" :class="activ == 'Applicable Paper' ? 'btn-paper bg-primary20 text-white' : 'btn-paper btn-outline border-primary text-primary'">Applicable Papper</NuxtLink>
                        <NuxtLink v-if="dataAct.window_styles" @click="btnActive('Window Styles')" :class="activ == 'Window Styles' ? 'btn-paper bg-primary20 text-white' : 'btn-paper btn-outline border-primary text-primary'">Window Styles</NuxtLink>
                        <NuxtLink v-if="dataAct.flow_chart" @click="btnActive('Flow Chart')" :class="activ == 'Flow Chart' ? 'btn-paper bg-primary20 text-white' : 'btn-paper btn-outline border-primary text-primary'">Flow Chart</NuxtLink>
                         <NuxtLink v-if="dataAct.paper_cup_dimension" @click="btnActive('Paper Cup Dimension')" :class="activ == 'Paper Cup Dimension' ? 'btn-paper bg-primary20 text-white' : 'btn-paper btn-outline border-primary text-primary'">Paper Cup Dimension</NuxtLink>
                        <NuxtLink @click="btnActive('Foto Produk')" :class="activ == 'Foto Produk' ? 'btn-paper bg-primary20 text-white' : 'btn-paper btn-outline border-primary text-primary'">Foto Produk</NuxtLink>
                    </div>
                </div>
                <div class="mt-10 w-full h-90%">
                    <div v-if="activ == 'Technical Parameters'" class="">
                        <div v-html=" dataAct.technical_parameters"></div>
                    </div>
                    <div v-if="activ == 'Box Forming Process'" class="">
                        <img :src="dataAct.box_framing" class="w-full h-auto"/>
                    </div>
                    <div v-if="activ == 'Box Types'" class="">
                        <div v-html="dataAct.box_types"></div>
                    </div>
                    <div v-if="activ == 'Machine Section'" class=" grid gap-20 grid-cols-3">
                        <div v-if="dataAct.machine_section" v-for="(item, index) in dataAct.machine_section" class=" rounded-tr-[30px] rounded-bl-[30px] hover:bg-netral30 flex-1 min-h-50 p-8">
                            <p class="paragraph-24-bold mb-5">{{ item.title }}</p>
                            <img :src="item.img" :alt="item.img" class="rounded-tr-[20px] rounded-bl-[20px] mb-3"/>
                            <p>{{item.desc}}</p>
                        </div>
                    </div>
                     <div v-if="activ == 'Applicable Paper'">
                        <div class="h-100 w-full overflow-hidden  flex justify-center items-center">
                            <img :src="dataAct.applicable_paper" class="max-h-full w-auto bg-cover"/>
                        </div>
                    </div>
                     <div v-if="activ == 'Paper Cup Dimension'">
                        <div class="h-100 w-full overflow-hidden  flex justify-center items-center">
                            <img :src="dataAct.paper_cup_dimension" class="max-h-full w-auto bg-cover"/>
                        </div>
                    </div>
                     <div v-if="activ == 'Window Styles'">
                        <div class="h-100 w-full overflow-hidden  flex justify-center items-center">
                            <img :src="dataAct.window_styles" class="max-h-full w-auto bg-cover"/>
                        </div>
                    </div>
                     <div v-if="activ == 'Flow Chart'">
                        <div class="h-100 w-full overflow-hidden  flex justify-center items-center">
                            <img :src="dataAct.flow_chart" class="max-h-full w-auto bg-cover"/>
                        </div>
                    </div>
                    <div v-if="activ == 'Foto Produk'">
                        <div class="h-100 w-full overflow-hidden  flex justify-center items-center">
                            <img :src="dataAct.img" class="max-h-full w-auto bg-cover"/>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </section>
    </template>
  <style scoped>
  </style>
    <script setup>
    const activ = ref('Technical Parameters')
    const btnActive = (idx) => {
        activ.value = idx;
    }
    
    const dataAct = ref(null)
    const btnDataAct = (data) => {
      dataAct.value = 'Technical Parameters'
      document.body.style.overflow = 'hidden';
       document.body.style.height = '100vh';
        console.log(data)
        dataAct.value = data
    }
    
    const btnClose = () => {
        dataAct.value = null
        document.body.style.overflow = '';
         document.body.style.height = '';
        console.log(dataAct.value)
    }
    const item = [
        {
            '_id': 1,
            img : '/img/product/img-CartonTANK-650S.png',
            img_product: '/img/product/img-product.png',
            sub_title: 'Offline Quality Inspection and Ink-jet Equipment',
            title: 'CartonTANK-650S',
            desc: "Specially developed for carton packaging inspection such as pharmaceutical packaging, food and beverage packaging, 3C electronic products packaging, cosmetics packaging, etc. Its wide adaptability allows automatic inspection of highly reflective materials as well as normal ones, for instance gold and silver paper, bright offset, holographic paperboard, laminated material and stamping material.  It is able to inspect defects like ink-shedding, ink dirt, misprint, display spot, stains, scratches, as well as embossing defects. Machine can do 100% defective inspection and verification of variable data with both ink-jet and inspection function. Multipurpose machine can also be used as an independent ink-jet printing machine or an all-in-one machine with both ink-jet and inspection function, especially for ink-jet printing industries less than 100,000 sheets per order.",
            technical_parameters : `<table class="table-header">
    <thead>
        <tr>
            <th colspan="1" class="border-1 border-netral10 p-2 font-bold">ITEMS</th>
            <th colspan="2" class="border-1 border-netral10 p-2 font-bold">DESCRIPTION</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan="4" class="border-1 border-netral10 p-2 align-middle">Defect type</td>
            <td class="border-1 border-netral10 p-2">Front Side (Regular detection)</td>
            <td class="border-1 border-netral10 p-2">dirty spot, missing print, mis-registation, deckle, color aberration</td>
        </tr>
        <tr>
            <td class="border-1 border-netral10 p-2">Front Side (3D detection)</td>
            <td class="border-1 border-netral10 p-2">concave-convex, streak, scratch, bubbles, foil stamping difference</td>
        </tr>
        <tr>
            <td class="border-1 border-netral10 p-2">Front Side (Gold stamping)</td>
            <td class="border-1 border-netral10 p-2">high flection material, silver or gold stamping errors</td>
        </tr>
        <tr>
            <td class="border-1 border-netral10 p-2">Back side (Dirt)</td>
            <td class="border-1 border-netral10 p-2">Black dot, dirt, foreign objective</td>
        </tr>
        <tr>
            <td class="border-1 border-netral10 p-2">Maximum sheet size</td>
            <td colspan="2" class="border-1 border-netral10 p-2">650 x 550mm</td>
        </tr>
        <tr>
            <td class="border-1 border-netral10 p-2">Minimum sheet size</td>
            <td colspan="2" class="border-1 border-netral10 p-2">100 x 100mm</td>
        </tr>
        <tr>
            <td class="border-1 border-netral10 p-2">Paper weight</td>
            <td colspan="2" class="border-1 border-netral10 p-2">90 - 400 g/m²</td>
        </tr>
        <tr>
            <td class="border-1 border-netral10 p-2">Maximum delivery speed</td>
            <td colspan="2" class="border-1 border-netral10 p-2">Friction feeding: 300m/min (depending on the thickness of the products)</td>
        </tr>
        <tr>
            <td class="border-1 border-netral10 p-2">Minimum defect size (as a pot)</td>
            <td colspan="2" class="border-1 border-netral10 p-2">0.15 square millimeter</td>
        </tr>
        <tr>
            <td class="border-1 border-netral10 p-2">Minimum defect size (as a line)</td>
            <td colspan="2" class="border-1 border-netral10 p-2">0.13 mm x 5 mm</td>
        </tr>
        <tr>
            <td class="border-1 border-netral10 p-2">Mix-registration</td>
            <td colspan="2" class="border-1 border-netral10 p-2">Accuracy ± 0.15 mm</td>
        </tr>
        <tr>
            <td class="border-1 border-netral10 p-2">Minimum color Variation(△E)</td>
            <td colspan="2" class="border-1 border-netral10 p-2">≥ 3</td>
        </tr>
        <tr>
            <td class="border-1 border-netral10 p-2">Feeding method</td>
            <td class="border-1 border-netral10 p-2">Friction feeding</td>
            <td class="border-1 border-netral10 p-2">Fast Speed, specially designed for normal printed paperboard</td>
        </tr>
        <tr>
            <td rowspan="2" class="border-1 border-netral10 p-2 align-middle">Collecting Method</td>
            <td class="border-1 border-netral10 p-2">Accepted products handling</td>
            <td class="border-1 border-netral10 p-2">Single stream, automatic counting</td>
        </tr>
        <tr>
            <td class="border-1 border-netral10 p-2">Rejected products handling</td>
            <td colspan="2" class="border-1 border-netral10 p-2">Single stream, automatic counting</td>
        </tr>
        <tr>
            <td class="border-1 border-netral10 p-2">Dimension (L x W x H)</td>
            <td colspan="2" class="border-1 border-netral10 p-2">8500 x 1800 x 2000 mm</td>
        </tr>
        <tr>
            <td class="border-1 border-netral10 p-2">Gross Weight</td>
            <td colspan="2" class="border-1 border-netral10 p-2">4.8 T</td>
        </tr>
        <tr>
            <td class="border-1 border-netral10 p-2">Total Power</td>
            <td colspan="2" class="border-1 border-netral10 p-2">20 kW/380 V/50 Hz</td>
        </tr>
    </tbody>
</table>
`
        },
        {
            '_id': 2,
            img: '/img/product/GS-650.png',
            img2: '/img/product/GS-650-2.png',
            title: 'GS-650/800/1100',
            sub_title: 'Automatic High Speed Folder Gluer Machine',
            desc: "GS series automatic folder gluer machine is suitable for straight-line, crash-lock bottom, double wall, 4 & 6-corner boxes. It can run from small to large size boxes with accuracy in fast job change to meet to the demand of wide range of packaging companies, commercial printers and finishers. Driven by ribbed V belt, which is more steady and accurate. Feeding part with motor control, which improves machine adjusting speed. We offer our best solutions for complicated boxes by creative ideas to make the operation and adjustment easier.",
            technical_parameters: `<table class="table-header">
  <tbody>
    <tr class="table-body">
      <td class="table-body">GS Series</td>
      <td class="table-body">650 GS</td>
      <td class="table-body">800 GS</td>
      <td class="table-body">1100 GS</td>
    </tr>
    <tr class="table-body">
      <td class="fw-bold text-center border-1 border-netral10" colspan="4">Processed Material</td>
    </tr>
    <tr class="table-body">
      <td class="table-body">Carton board max.</td>
      <td class="table-body">650 MM</td>
      <td class="table-body">800 MM</td>
      <td class="table-body">1100 MM</td>
    </tr>
    <tr class="table-body">
      <td class="table-body">GS Series</td>
      <td class="table-body" colspan="3"><p>Cardboard 210 - 800 gsm<span style="margin-left: 15px">A/B/E Flute</span></p></td>
    </tr>
    <tr class="table-body">
      <td class="fw-bold text-center border-1 border-netral10" colspan="4">Capability</td>
    </tr>
    <tr class="table-body">
      <td class="table-body">Speed max.</td>
      <td class="table-body">400 m/min</td>
      <td class="table-body">400 m/min</td>
      <td class="table-body">400 m/min</td>
    </tr>
    <tr class="table-body">
      <td class="table-body">Inching speed</td>
      <td class="table-body">10 m/min</td>
      <td class="table-body">10 m/min</td>
      <td class="table-body">10 m/min</td>
    </tr>
    <tr class="table-body">
      <td class="table-body">Thickness of folded box max.</td>
      <td class="table-body">12 mm</td>
      <td class="table-body">12 mm</td>
      <td class="table-body">12 mm</td>
    </tr>
    <tr class="table-body">
      <td class="table-body">Blank width</td>
      <td class="table-body">650 mm</td>
      <td class="table-body">800 mm</td>
      <td class="table-body">1100 mm</td>
    </tr>
    <tr class="table-body">
      <td class="table-body">Electrical connected load</td>
      <td class="table-body">28 kW</td>
      <td class="table-body">31 kW</td>
      <td class="table-body">31 kW</td>
    </tr>
    <tr class="table-body">
      <td class="table-body">Compressed air</td>
      <td class="table-body">6 bar</td>
      <td class="table-body">6 bar</td>
      <td class="table-body">6 bar</td>
    </tr>
    <tr class="table-body">
      <td class="table-body">Way of folding</td>
      <td class="table-body" colspan="3">Fold 1 and fold 3 are 180° and 165°</td>
    </tr>
    <tr class="table-body">
      <td class="table-body">Power supply</td>
      <td class="table-body" colspan="3">3P 380V 50HZ</td>
    </tr>
    <tr class="table-body">
      <td class="fw-bold text-center border-1 border-netral10" colspan="4">Dimensions &amp; Weight</td>
    </tr>
    <tr class="table-body">
      <td class="table-body">Length * Width * Height</td>
      <td class="table-body">12 * 1.4 * 1.8 m</td>
      <td class="table-body">16.5 * 1.4 * 1.8 m</td>
      <td class="table-body">16.5 * 1.7 * 1.9 m</td>
    </tr>
    <tr class="table-body">
      <td class="table-body">Net Weight</td>
      <td class="table-body">5 T</td>
      <td class="table-body">6.6 T</td>
      <td class="table-body">7.6 T</td>
    </tr>
  </tbody>
</table>
`,
box_framing: '/img/product/GS-650-box-forming.jpg',
box_types: `<table class="table-header">
  <thead>
    <tr>
      <th class="table-body" scope="col" colspan="5" width="">
        Common Type (mm)
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="table-body" rowspan="1" colspan="1">Model</td>
      <td class="table-body" rowspan="1" colspan="1">650 Type</td>
      <td class="table-body" rowspan="1" colspan="1">800 Type</td>
      <td class="table-body" rowspan="1" colspan="1">1100 Type</td>
      <td class="table-body" rowspan="4" colspan="1" width="30%">
        <img
         src="/img/product/GS-650-box-type.jpeg"
          class="img-fluid w-100"
          alt="GS-650/800/1100Common Type"
          style=""
        />
      </td>
    </tr>
    <tr>
      <td class="table-body" rowspan="1" colspan="1">A</td>
      <td class="table-body" rowspan="1" colspan="1">75 - 650</td>
      <td class="table-body" rowspan="1" colspan="1">75 - 800</td>
      <td class="table-body" rowspan="1" colspan="1">75 - 1100</td>
    </tr>
    <tr>
      <td class="table-body" rowspan="1" colspan="1">B</td>
      <td class="table-body" rowspan="1" colspan="1">60 - 650</td>
      <td class="table-body" rowspan="1" colspan="1">60 - 800</td>
      <td class="table-body" rowspan="1" colspan="1">60 - 800</td>
    </tr>
    <tr>
      <td class="table-body" rowspan="1" colspan="1">C (Min)</td>
      <td class="table-body" rowspan="1" colspan="1">35</td>
      <td class="table-body" rowspan="1" colspan="1">35</td>
      <td class="table-body" rowspan="1" colspan="1">35</td>
    </tr>
    <tr>
      <td class="table-body" rowspan="1" colspan="5">
        <b>Bottom Lock Type (mm)</b>
      </td>
    </tr>
    <tr>
      <td class="table-body" rowspan="1" colspan="1">Model</td>
      <td class="table-body" rowspan="1" colspan="1">650 Type</td>
      <td class="table-body" rowspan="1" colspan="1">800 Type</td>
      <td class="table-body" rowspan="1" colspan="1">1100 Type</td>
      <td class="align-middle" rowspan="6" colspan="1" width="30%">
        <img
          src="/img/product/GS-650-lock-type.jpeg"
          class="img-fluid w-100"
          alt="GS-650/800/1100Bottom Lock Type"
          style=""
        />
      </td>
    </tr>
    <tr>
      <td class="table-body" rowspan="1" colspan="1">A</td>
      <td class="table-body" rowspan="1" colspan="1">146 - 650</td>
      <td class="table-body" rowspan="1" colspan="1">146 - 800</td>
      <td class="table-body" rowspan="1" colspan="1">146 - 1100</td>
    </tr>
    <tr>
      <td class="table-body" rowspan="1" colspan="1">B</td>
      <td class="table-body" rowspan="1" colspan="1">90 - 650</td>
      <td class="table-body" rowspan="1" colspan="1">90 - 800</td>
      <td class="table-body" rowspan="1" colspan="1">90 - 800</td>
    </tr>
    <tr>
      <td class="table-body" rowspan="1" colspan="1">C (Min)</td>
      <td class="table-body" rowspan="1" colspan="1">20</td>
      <td class="table-body" rowspan="1" colspan="1">20</td>
      <td class="table-body" rowspan="1" colspan="1">20</td>
    </tr>
    <tr>
      <td class="table-body" rowspan="1" colspan="1">D (Min)</td>
      <td class="table-body" rowspan="1" colspan="1">30</td>
      <td class="table-body" rowspan="1" colspan="1">30</td>
      <td class="table-body" rowspan="1" colspan="1">30</td>
    </tr>
    <tr>
      <td class="table-body" rowspan="1" colspan="1">E (Min)</td>
      <td class="table-body" rowspan="1" colspan="1">40</td>
      <td class="table-body" rowspan="1" colspan="1">40</td>
      <td class="table-body" rowspan="1" colspan="1">40</td>
    </tr>
    <tr>
      <td class="table-body" rowspan="1" colspan="5">
        <b>Carton Type (mm)</b>
      </td>
    </tr>
    <tr>
      <td class="table-body" rowspan="1" colspan="1">Model</td>
      <td class="table-body" rowspan="1" colspan="1">650 Type</td>
      <td class="table-body" rowspan="1" colspan="1">800 Type</td>
      <td class="table-body" rowspan="1" colspan="1">1100 Type</td>
      <td class="align-middle" rowspan="6" colspan="1" width="30%">
        <img
          src="/img/product/GS-650-carton-type.jpeg"
          class="img-fluid w-100"
          alt="GS-650/800/1100Carton Type"
          style=""
        />
      </td>
    </tr>
    <tr>
      <td class="table-body" rowspan="1" colspan="1">A</td>
      <td class="table-body" rowspan="1" colspan="1">160 - 650</td>
      <td class="table-body" rowspan="1" colspan="1">160 - 800</td>
      <td class="table-body" rowspan="1" colspan="1">160 - 1100</td>
    </tr>
    <tr>
      <td class="table-body" rowspan="1" colspan="1">B</td>
      <td class="table-body" rowspan="1" colspan="1">90 - 650</td>
      <td class="table-body" rowspan="1" colspan="1">90 - 800</td>
      <td class="table-body" rowspan="1" colspan="1">90 - 1100</td>
    </tr>
    <tr>
      <td class="table-body" rowspan="1" colspan="1">C (Min)</td>
      <td class="table-body" rowspan="1" colspan="1">40</td>
      <td class="table-body" rowspan="1" colspan="1">40</td>
      <td class="table-body" rowspan="1" colspan="1">40</td>
    </tr>
    <tr>
      <td class="table-body" rowspan="1" colspan="1">D (Min)</td>
      <td class="table-body" rowspan="1" colspan="1">35</td>
      <td class="table-body" rowspan="1" colspan="1">35</td>
      <td class="table-body" rowspan="1" colspan="1">35</td>
    </tr>
    <tr>
      <td class="table-body" rowspan="1" colspan="1">E (Min)</td>
      <td class="table-body" rowspan="1" colspan="1">20</td>
      <td class="table-body" rowspan="1" colspan="1">20</td>
      <td class="table-body" rowspan="1" colspan="1">20</td>
    </tr>
    <tr>
      <td class="table-body" rowspan="1" colspan="5">
        <b>4 Corners Box Type (mm)</b>
      </td>
    </tr>
    <tr>
      <td class="table-body" rowspan="1" colspan="1">Model</td>
      <td class="table-body" rowspan="1" colspan="1">650 Type</td>
      <td class="table-body" rowspan="1" colspan="1">800 Type</td>
      <td class="table-body" rowspan="1" colspan="1">1100 Type</td>
      <td class="align-middle" rowspan="6" colspan="1" width="30%">
        <img
           src="/img/product/GS-650-corners-cox-type.jpeg"
          class="img-fluid w-100"
          alt="GS-650/800/11004 Corners Box Type"
          style=""
        />
      </td>
    </tr>
    <tr>
      <td class="table-body" rowspan="1" colspan="1">A</td>
      <td class="table-body" rowspan="1" colspan="1">160 - 500</td>
      <td class="table-body" rowspan="1" colspan="1">160 - 800</td>
      <td class="table-body" rowspan="1" colspan="1">160 - 1100</td>
    </tr>
    <tr>
      <td class="table-body" rowspan="1" colspan="1">B</td>
      <td class="table-body" rowspan="1" colspan="1">120 - 650</td>
      <td class="table-body" rowspan="1" colspan="1">120 - 800</td>
      <td class="table-body" rowspan="1" colspan="1">120 - 1000</td>
    </tr>
    <tr>
      <td class="table-body" rowspan="1" colspan="1">C (Min)</td>
      <td class="table-body" rowspan="1" colspan="1">20 - 200</td>
      <td class="table-body" rowspan="1" colspan="1">20 - 200</td>
      <td class="table-body" rowspan="1" colspan="1">20 - 200</td>
    </tr>
    <tr>
      <td class="table-body" rowspan="1" colspan="1">D (Min)</td>
      <td class="table-body" rowspan="1" colspan="1">90</td>
      <td class="table-body" rowspan="1" colspan="1">90</td>
      <td class="table-body" rowspan="1" colspan="1">90</td>
    </tr>
    <tr>
      <td class="table-body" rowspan="1" colspan="1">E (Min)</td>
      <td class="table-body" rowspan="1" colspan="1">80</td>
      <td class="table-body" rowspan="1" colspan="1">80</td>
      <td class="table-body" rowspan="1" colspan="1">80</td>
    </tr>
    <tr>
      <td class="table-body" rowspan="1" colspan="5">
        <b>6 Corners Box Type (mm)</b>
      </td>
    </tr>
    <tr>
      <td class="table-body" rowspan="1" colspan="1">Model</td>
      <td class="table-body" rowspan="1" colspan="1">650 Type</td>
      <td class="table-body" rowspan="1" colspan="1">800 Type</td>
      <td class="table-body" rowspan="1" colspan="1">1100 Type</td>
      <td class="align-middle" rowspan="6" colspan="1" width="30%">
        <img
        src="/img/product/GS-650-6-Corner-box-Type.jpeg"
          class="img-fluid w-100"
          alt="GS-650/800/11006 Corners Box Type"
          style=""
        />
      </td>
    </tr>
    <tr>
      <td class="table-body" rowspan="1" colspan="1">A</td>
      <td class="table-body" rowspan="1" colspan="1">250 - 650</td>
      <td class="table-body" rowspan="1" colspan="1">250 - 800</td>
      <td class="table-body" rowspan="1" colspan="1">250 - 1100</td>
    </tr>
    <tr>
      <td class="table-body" rowspan="1" colspan="1">B</td>
      <td class="table-body" rowspan="1" colspan="1">120 - 650</td>
      <td class="table-body" rowspan="1" colspan="1">120 - 800</td>
      <td class="table-body" rowspan="1" colspan="1">120 - 1000</td>
    </tr>
    <tr>
      <td class="table-body" rowspan="1" colspan="1">C (Min)</td>
      <td class="table-body" rowspan="1" colspan="1">20 - 200</td>
      <td class="table-body" rowspan="1" colspan="1">20 - 200</td>
      <td class="table-body" rowspan="1" colspan="1">20 - 200</td>
    </tr>
    <tr>
      <td class="table-body" rowspan="1" colspan="1">D (Min)</td>
      <td class="table-body" rowspan="1" colspan="1">90</td>
      <td class="table-body" rowspan="1" colspan="1">90</td>
      <td class="table-body" rowspan="1" colspan="1">90</td>
    </tr>
    <tr>
      <td class="table-body" rowspan="1" colspan="1">E (Min)</td>
      <td class="table-body" rowspan="1" colspan="1">80</td>
      <td class="table-body" rowspan="1" colspan="1">80</td>
      <td class="table-body" rowspan="1" colspan="1">80</td>
    </tr>
  </tbody>
</table>
`
        },
        {
            '_id': 3,
            img : '/img/product/img-BC-1050S.png',
            title: 'BC-1050S',
            sub_title: 'Automatic Die Cutting and Stripping Machine',
            img_product: '/img/product/ivory-board.png',
            desc: "BC-1050S Automatic die cutting and stripping machine can be used for large format die cutting with stripping. Precise centering, high speed, easy operation, quick changeover, stable performance and other features make this series an ideal choice for customers.",
            technical_parameters: `<table class="table-header">
  <thead>
    <tr>
      <th class="table-body" scope="col" colspan="1" width="">ITEMS</th>
      <th class="table-body" scope="col" colspan="1" width="">DESCRIPTION</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="table-body" rowspan="1" colspan="1">Max. paper size</td>
      <td class="table-body" rowspan="1" colspan="1">1050 x 740 mm</td>
    </tr>
    <tr>
      <td class="table-body" rowspan="1" colspan="1">Min. paper size</td>
      <td class="table-body" rowspan="1" colspan="1">400 x 350 mm</td>
    </tr>
    <tr>
      <td class="table-body" rowspan="1" colspan="1">Paper thickness</td>
      <td class="table-body" rowspan="1" colspan="1">80 - 2000 g/m2</td>
    </tr>
    <tr>
      <td class="table-body" rowspan="1" colspan="1">Corrugated paper</td>
      <td class="table-body" rowspan="1" colspan="1">≤ 4 mm</td>
    </tr>
    <tr>
      <td class="table-body" rowspan="1" colspan="1">Max. die cutting speed</td>
      <td class="table-body" rowspan="1" colspan="1">7500 sheets/hr</td>
    </tr>
    <tr>
      <td class="table-body" rowspan="1" colspan="1">Max. die cutting size</td>
      <td class="table-body" rowspan="1" colspan="1">1040 x 730 mm</td>
    </tr>
    <tr>
      <td class="table-body" rowspan="1" colspan="1">Max. operating pressure</td>
      <td class="table-body" rowspan="1" colspan="1">300 T</td>
    </tr>
    <tr>
      <td class="table-body" rowspan="1" colspan="1">Min. gripping edge size</td>
      <td class="table-body" rowspan="1" colspan="1">9.5 mm</td>
    </tr>
    <tr>
      <td class="table-body" rowspan="1" colspan="1">Max. pile height at feeder</td>
      <td class="table-body" rowspan="1" colspan="1">1600 mm</td>
    </tr>
    <tr>
      <td class="table-body" rowspan="1" colspan="1">Max. pile height at delivery</td>
      <td class="table-body" rowspan="1" colspan="1">1300 mm</td>
    </tr>
    <tr>
      <td class="table-body" rowspan="1" colspan="1">Power Supply</td>
      <td class="table-body" rowspan="1" colspan="1">25 kW</td>
    </tr>
    <tr>
      <td class="table-body" rowspan="1" colspan="1">Weight</td>
      <td class="table-body" rowspan="1" colspan="1">16.5 T</td>
    </tr>
    <tr>
      <td class="table-body" rowspan="1" colspan="1">Dimension</td>
      <td class="table-body" rowspan="1" colspan="1">7000 x 4200 x 2350 mm</td>
    </tr>
  </tbody>
</table>
`,
machine_section: [
    {
        title : "Feeder Section",
        img: '/img/product/img-feeder-section.png',
        desc: "Automatic feeder with non-stop system, with pallet and cart direct load. 4 lift-up and 4 delivery suckers, designed to handle a wide range of materials from paper to corrugated board, guarantee the accuracy, reliability and smoothness of paper feeding. Double sheet detector."
    },
    {
        title : "Register Table",
        img: '/img/product/img-register-table.png',
        desc: "Side-register table with 8 belts. 2 register side guides working with pulling and pushing system. 4 register front lays independently adjustable."
    },
    {
        title : "Die Cutting Section",
         img: '/img/product/img-die-cutting-section.png',
        desc: "Closed chase with central positioning system device for fast positioning of the die. Cutting plate 5mm thickness. Pressure control system, can be easily adjusted through touch screen. Equipped with over pressure protection system. Manual and automatic lubrication system. 7 sets of light weight gripper bars. Turn-over bracket for cutting chase and honeycomb chase. Pneumatic lock and release system for cutting chase and honeycomb plate."
    },
    {
        title : "Stripping Section",
         img: '/img/product/img-stripping-section.png',
        desc: "Optimized cam movement curve that guarantees stripping stability and accuracy. Quick locking and central positioning system to assure the waste is cleared with accuracy."
    },
    {
        title : "Delivery Section",
        img: '/img/product/img-delivery-section.png',
        desc: "Non-stop device with automatic conveyor at delivery."
    }
]
        },
        {
            '_id': 4,
            img : '/img/product/img-BC-1050FC.png',
            title: 'BC-1050FC',
            sub_title: 'Automatic Die Cutting and Foil Stamping Machine',
            img_product: '/img/product/img-product-triplex-board.png',
            desc: "BC-1050FC Automatic die cutting and foil stamping machine can run large format die cutting and stamping with longitudinal and transversal foil pull system. High precision, high speed, easy to operate, quick changeover, durability and stable performance. Features that make this machine one of the best options available.",
            type: "cover buku, packaging",
            technical_parameters: `<table class="table-header">
  <thead>
    <tr>
      <th class="table-body" scope="col" colspan="1" width="">ITEMS</th>
      <th class="table-body" scope="col" colspan="1" width="">DESCRIPTION</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="table-body" rowspan="1" colspan="1">Max. paper size</td>
      <td class="table-body" rowspan="1" colspan="1">1050 x 740 mm</td>
    </tr>
    <tr>
      <td class="table-body" rowspan="1" colspan="1">Min. paper size</td>
      <td class="table-body" rowspan="1" colspan="1">400 x 350 mm</td>
    </tr>
    <tr>
      <td class="table-body" rowspan="1" colspan="1">Paper thickness</td>
      <td class="table-body" rowspan="1" colspan="1">80 - 2000 g/m2</td>
    </tr>
    <tr>
      <td class="table-body" rowspan="1" colspan="1">Corrugated paper</td>
      <td class="table-body" rowspan="1" colspan="1">≤ 4 mm</td>
    </tr>
    <tr>
      <td class="table-body" rowspan="1" colspan="1">Max. die cutting speed</td>
      <td class="table-body" rowspan="1" colspan="1">7500 sheets/hr</td>
    </tr>
    <tr>
      <td class="table-body" rowspan="1" colspan="1">Max. stamping speed</td>
      <td class="table-body" rowspan="1" colspan="1">6000 sheets/hr</td>
    </tr>
    <tr>
      <td class="table-body" rowspan="1" colspan="1">Max. operating pressure</td>
      <td class="table-body" rowspan="1" colspan="1">300 T</td>
    </tr>
    <tr>
      <td class="table-body" rowspan="1" colspan="1">Min. gripping edge size</td>
      <td class="table-body" rowspan="1" colspan="1">9.5 mm</td>
    </tr>
    <tr>
      <td class="table-body" rowspan="1" colspan="1">Max. die cutting size</td>
      <td class="table-body" rowspan="1" colspan="1">1040 x 730 mm</td>
    </tr>
    <tr>
      <td class="table-body" rowspan="1" colspan="1">Foil stamping shafts</td>
      <td class="table-body" rowspan="1" colspan="1">
        4 longitudinal and 2 transversal shafts
      </td>
    </tr>
    <tr>
      <td class="table-body" rowspan="2" colspan="1">
        Max. stamping &amp; embossing size
      </td>
      <td class="table-body" rowspan="1" colspan="1">720 x 1020 mm (Longitudinal)</td>
    </tr>
    <tr>
      <td class="table-body" rowspan="1" colspan="1">580 x 1020 mm (Transversal)</td>
    </tr>
    <tr>
      <td class="table-body" rowspan="1" colspan="1">Heating Plate Zone</td>
      <td class="table-body" rowspan="1" colspan="1">12 zones</td>
    </tr>
    <tr>
      <td class="table-body" rowspan="1" colspan="1">Highest Temperature</td>
      <td class="table-body" rowspan="1" colspan="1">200° C</td>
    </tr>
    <tr>
      <td class="table-body" rowspan="1" colspan="1">Die cutting precision</td>
      <td class="table-body" rowspan="1" colspan="1">± 0.075 mm</td>
    </tr>
    <tr>
      <td class="table-body" rowspan="1" colspan="1">Stamping precision</td>
      <td class="table-body" rowspan="1" colspan="1">± 0.12 mm</td>
    </tr>
    <tr>
      <td class="table-body" rowspan="1" colspan="1">Main machine power</td>
      <td class="table-body" rowspan="1" colspan="1">60 kW</td>
    </tr>
    <tr>
      <td class="table-body" rowspan="1" colspan="1">Weight</td>
      <td class="table-body" rowspan="1" colspan="1">19 T</td>
    </tr>
    <tr>
      <td class="table-body" rowspan="1" colspan="1">Dimension</td>
      <td class="table-body" rowspan="1" colspan="1">7100 x 4300 x 3300 mm</td>
    </tr>
  </tbody>
</table>
`,

machine_section: [
    {
        title : "Feeder Section",
        img: '/img/product/img-feeder-section.png',
        desc: "Automatic feeder with non-stop system, with pallet and cart direct load. 4 lift-up and 4 delivery suckers, designed to handle a wide range of materials from paper to corrugated board, guarantee the accuracy, reliability and smoothness of paper feeding. Double sheet detector."
    },
    {
        title : "Register Table",
        img: '/img/product/img-register-table.png',
        desc: "Quick changeover, easy to operate. 2 register side guides working with pulling and pushing system. 4 register front lays independently adjustable."
    },
     {
        title : "Foil Stamping System",
        img: '/img/product/img-foil-stamping-system.png',
        desc: "2 transversal and 4 longitudinal shafts working with independent servo motor. Heating system in 12 temperature zones with individual temperature control. Foil break detector. Films fasten device. Foil unwind device. Honeycomb chase."
    },
    {
        title : "Die Cutting Section",
         img: '/img/product/img-die-cutting-section.png',
        desc: "Closed chase with central positioning system device for fast positioning of the die. Cutting plate 5mm thickness. Pressure control system, can be easily adjusted through touch screen. It has a security system to avoid any damage in the press. Manual and automatic lubrication system. 7 sets of light weight gripper bars. Turn-over bracket for cutting chase and honeycomb chase. Pneumatic lock and release system for cutting chase and honeycomb plate."
    },
    {
        title : "Delivery Section",
        img: '/img/product/img-delivery-section.png',
        desc: "Non-stop device with automatic conveyor at delivery."
    },
    {
        title : "Longitudinal Shaft",
        img: '/img/product/img-longitudinal-shaft.png',
        desc: "4 foil rolls in a high precision longitudinal foil feeding system. Air blast foil separation system. Foil tension system."
    },
    {
        title : "Transversal Shaft",
        img: '/img/product/img-longitudinal-shaft.png',
        desc: "2 foil rolls in a high precision transversal foil feeding system."
    }
]
        },
        {
            '_id': 5,
            img : '/img/product/img-FMY-1080.png',
            title: 'FMY-1080',
            img_product: '/img/product/img-product-Harsized-Ivory.png',
            sub_title: 'Automatic Vertical Laminating Machine',
            desc: "Automatic vertical laminating machine (water-based glue coating dry laminating and thermal laminating dual functions machine), as a professional equipment used for plastic film laminating on the surface of paper printed matter. Widely applicable for laminating in advertising poster, picture books and magazine, display book, color paper box, calendars, and commercial cards fields, improving the printing matter grades, and achieve the purpose of dust-proof, water-proof, oil-proof. It’s the best choice for printing and laminating enterprises of all scales.",
             technical_parameters: `<table class="table-header">
  <thead>
    <tr>
      <th class="table-body" scope="col" colspan="1" width="">ITEMS</th>
      <th class="table-body" scope="col" colspan="1" width="">DESCRIPTION</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="table-body" rowspan="1" colspan="1">Max. paper size</td>
      <td class="table-body" rowspan="1" colspan="1">1080 x 1100 mm</td>
    </tr>
    <tr>
      <td class="table-body" colspan="1">Min. paper size</td>
      <td class="table-body" rowspan="1" colspan="1">360 x 290 mm</td>
    </tr>
    <tr>
      <td class="table-body" rowspan="1" colspan="1">Speed</td>
      <td class="table-body" rowspan="1" colspan="1">10 - 100 m/min</td>
    </tr>
    <tr>
      <td class="table-body" rowspan="1" colspan="1">Paper thickness</td>
      <td class="table-body" rowspan="1" colspan="1">80 - 500 g/m2</td>
    </tr>
    <tr>
      <td class="table-body" rowspan="1" colspan="1">Overlap precision</td>
      <td class="table-body" rowspan="1" colspan="1">≤ ± 2 mm</td>
    </tr>
    <tr>
      <td class="table-body" rowspan="1" colspan="1">Non-stop feeding height</td>
      <td class="table-body" rowspan="1" colspan="1">1300 mm</td>
    </tr>
    <tr>
      <td class="table-body" rowspan="1" colspan="1">Collector paper height</td>
      <td class="table-body" rowspan="1" colspan="1">1300 mm</td>
    </tr>
    <tr>
      <td class="table-body" rowspan="1" colspan="1">Whole machine power</td>
      <td class="table-body" rowspan="1" colspan="1">65 kW</td>
    </tr>
    <tr>
      <td class="table-body" rowspan="1" colspan="1">Working power</td>
      <td class="table-body" rowspan="1" colspan="1">35 - 45 kW</td>
    </tr>
    <tr>
      <td class="table-body" rowspan="1" colspan="1">Voltage</td>
      <td class="table-body" rowspan="1" colspan="1">380 V - 50 Hz - 3 P</td>
    </tr>
    <tr>
      <td class="table-body" rowspan="1" colspan="1">Working pressure</td>
      <td class="table-body" rowspan="1" colspan="1">15Mpa</td>
    </tr>
    <tr>
      <td class="table-body" rowspan="1" colspan="1">Machine weight</td>
      <td class="table-body" rowspan="1" colspan="1">9000 kg</td>
    </tr>
    <tr>
      <td class="table-body" rowspan="1" colspan="1">Machine size</td>
      <td class="table-body" rowspan="1" colspan="1">8500 x 2200 x 2600 mm</td>
    </tr>
  </tbody>
</table>
`
        },
        {
            '_id': 6,
            img : '/img/product/ZBY1260SF-450.png',
            img2: '/img/product/ZBY1260SF-450-2.png',
            title: 'ZBY1260SF-450',
            img_product : '/img/product/img-product-Kertas-Roti.png',
            sub_title: 'Full Automatic Sheet Feeding Paper Bag Making Machine',
            desc: "Full automatic sheet feeding paper bag making machine (independent innovation) adopts international advanced production process and management system. Humanized intelligence operation interface combines with PLC and Servo control system make this machine’s technology performance and production efficiency achieve the leading level in the world. The machine can in-line produce both twisted rope handle and flat handle. This machine has 3 different crafts as below:",
            point_desc: ['Paper handle making, handle pasting, top folding, tube forming, gusset forming, square bottom open, bottom gluing, bottom pasting, compaction output.', 'Paper handle making, handle pasting（without top folding), tube forming, gusset forming, square bottom open, bottom gluing, bottom pasting, compaction output.', 'Reinforce card making, reinforce card pasting, top folding, tube forming, gusset forming, hole punching, square bottom open, bottom gluing, bottom pasting, compaction output.'],
            desc2: 'This machine equips advanced compact servo handle cut-off system to replace the traditional complex mechanical structure, which reduced the setup time and supplied a comfortable operation space. The bag making machine and handle making unit have separate servo control systems to avoid the handle waste. Intelligent switch between twisted rope handle and flat handle provide a wider range of business scope for customers.', 
            technical_parameters: `<table class="table-header">
  <tbody>
    <tr>
      <td class="table-body" rowspan="1" colspan="1">Types</td>
      <td class="table-body" rowspan="1" colspan="1">
        <div class="items-center flex justify-center">
        <img
          src="/img/product/img-ZBY1260SF-450-icon-1.png"
          class="table-body"
          alt="ZBY1260SF-450Box Type 1"
          style="width: auto; max-height: 50px"
        />
        </div>
      </td>
      <td class="table-body" rowspan="1" colspan="1">
         <div class="items-center flex justify-center">
        <img
           src="/img/product/img-ZBY1260SF-450-icon-2.png"
          class="table-body"
          alt="ZBY1260SF-450Box Type 2"
          style="width: auto; max-height: 50px"
        />
        </div>
      </td>
      <td class="table-body" rowspan="1" colspan="1">
        <div class="items-center flex justify-center">
        <img
           src="/img/product/img-ZBY1260SF-450-icon-3.png"
          class="table-body"
          alt="ZBY1260SF-450Box Type 3"
          style="width: auto; max-height: 50px"
        />
        </div>
      </td>
      <td class="table-body " rowspan="1" colspan="1">
        <div class="items-center flex justify-center">
        <img
          src="/img/product/img-ZBY1260SF-450-icon-4.png"
          class="table-body"
          alt="ZBY1260SF-450Box Type 4"
          style="width: auto; max-height: 50px"
        />
        </div>
      </td>
    </tr>
    <tr>
      <td class="table-body" rowspan="1" colspan="1">Max. Sheet (L x W)</td>
      <td class="table-body" rowspan="1" colspan="1">1200 x 620 mm</td>
      <td class="table-body" rowspan="1" colspan="1">1200 x 620 mm</td>
      <td class="table-body" rowspan="1" colspan="1">1200 x 620 mm</td>
      <td class="table-body" rowspan="1" colspan="1">1200 x 620 mm</td>
    </tr>
    <tr>
      <td class="table-body" rowspan="1" colspan="1">Min. Sheet (L x W)</td>
      <td class="table-body" rowspan="1" colspan="1">600 x 320 mm</td>
      <td class="table-body" rowspan="1" colspan="1">600 x 320 mm</td>
      <td class="table-body" rowspan="1" colspan="1">600 x 320 mm</td>
      <td class="table-body" rowspan="1" colspan="1">600 x 320 mm</td>
    </tr>
    <tr>
      <td class="table-body" rowspan="1" colspan="1">Sheet Weight</td>
      <td class="table-body" rowspan="1" colspan="1">120 g - 190 g</td>
      <td class="table-body" rowspan="1" colspan="1">120 g - 190 g</td>
      <td class="table-body" rowspan="1" colspan="1">120 g - 190 g</td>
      <td class="table-body" rowspan="1" colspan="1">120 g - 190 g</td>
    </tr>
    <tr>
      <td class="table-body" rowspan="1" colspan="1">Bag Width</td>
      <td class="table-body" rowspan="1" colspan="1">220 - 450 mm</td>
      <td class="table-body" rowspan="1" colspan="1">220 - 450 mm</td>
      <td class="table-body" rowspan="1" colspan="1">220 - 450 mm</td>
      <td class="table-body" rowspan="1" colspan="1">220 - 450 mm</td>
    </tr>
    <tr>
      <td class="table-body" rowspan="1" colspan="1">Bottom Width</td>
      <td class="table-body" rowspan="1" colspan="1">70 - 170 mm</td>
      <td class="table-body" rowspan="1" colspan="1">70 - 170 mm</td>
      <td class="table-body" rowspan="1" colspan="1">70 - 170 mm</td>
      <td class="table-body" rowspan="1" colspan="1">70 - 170 mm</td>
    </tr>
    <tr>
      <td class="table-body" rowspan="1" colspan="1">Bag Length</td>
      <td class="table-body" rowspan="1" colspan="1">235 - 490 mm</td>
      <td class="table-body" rowspan="1" colspan="1">235 - 490 mm</td>
      <td class="table-body" rowspan="1" colspan="1">235 - 490 mm</td>
      <td class="table-body" rowspan="1" colspan="1">235 - 490 mm</td>
    </tr>
    <tr>
      <td class="table-body" rowspan="1" colspan="1">Top Folding Width</td>
      <td class="table-body" rowspan="1" colspan="1">40 - 60 mm</td>
      <td class="table-body" rowspan="1" colspan="1">----</td>
      <td class="table-body" rowspan="1" colspan="1">40 - 60 mm</td>
      <td class="table-body" rowspan="1" colspan="1">40 - 60 mm</td>
    </tr>
    <tr>
      <td class="table-body" rowspan="1" colspan="1">Handle Patch Length</td>
      <td class="table-body" rowspan="1" colspan="1">189 mm</td>
      <td class="table-body" rowspan="1" colspan="1">189 mm</td>
      <td class="table-body" rowspan="1" colspan="1">189 mm</td>
      <td class="table-body" rowspan="1" colspan="1">189 mm</td>
    </tr>
    <tr>
      <td class="table-body" rowspan="1" colspan="1">Handle Patch Width</td>
      <td class="table-body" rowspan="1" colspan="1">30 - 50 mm</td>
      <td class="table-body" rowspan="1" colspan="1">30 - 50 mm</td>
      <td class="table-body" rowspan="1" colspan="1">30 - 50 mm</td>
      <td class="table-body" rowspan="1" colspan="1">30 - 50 mm</td>
    </tr>
    <tr>
      <td class="table-body" rowspan="1" colspan="1">Handle Patch Weight</td>
      <td class="table-body" rowspan="1" colspan="1">140 g - 200 g</td>
      <td class="table-body" rowspan="1" colspan="1">140 g - 200 g</td>
      <td class="table-body" rowspan="1" colspan="1">140 g - 200 g</td>
      <td class="table-body" rowspan="1" colspan="1">140 g - 200 g</td>
    </tr>
    <tr>
      <td class="table-body" rowspan="1" colspan="1">Handle Patch Roll Diameter</td>
      <td class="table-body" rowspan="1" colspan="1">⌀ 1000 mm</td>
      <td class="table-body" rowspan="1" colspan="1">⌀ 1000 mm</td>
      <td class="table-body" rowspan="1" colspan="1">⌀ 1000 mm</td>
      <td class="table-body" rowspan="1" colspan="1">⌀ 1000 mm</td>
    </tr>
    <tr>
      <td class="table-body" rowspan="1" colspan="1">Handle Patch Roll Width</td>
      <td class="table-body" rowspan="1" colspan="1">60 - 100 mm</td>
      <td class="table-body" rowspan="1" colspan="1">60 - 100 mm</td>
      <td class="table-body" rowspan="1" colspan="1">60 - 100 mm</td>
      <td class="table-body" rowspan="1" colspan="1">60 - 100 mm</td>
    </tr>
    <tr>
      <td class="table-body" rowspan="1" colspan="1">Paper Rope Diameter</td>
      <td class="table-body" rowspan="1" colspan="1">4 - 6 mm</td>
      <td class="table-body" rowspan="1" colspan="1">4 - 6 mm</td>
      <td class="table-body" rowspan="1" colspan="1">----</td>
      <td class="table-body" rowspan="1" colspan="1">Flat rope width 15mm</td>
    </tr>
    <tr>
      <td class="table-body" rowspan="1" colspan="1">Handle Rope Height</td>
      <td class="table-body" rowspan="1" colspan="1">170 - 190 mm</td>
      <td class="table-body" rowspan="1" colspan="1">170 - 190 mm</td>
      <td class="table-body" rowspan="1" colspan="1">----</td>
      <td class="table-body" rowspan="1" colspan="1">145 mm</td>
    </tr>
    <tr>
      <td class="table-body" rowspan="1" colspan="1">Speed</td>
      <td class="table-body" rowspan="1" colspan="1">■</td>
      <td class="table-body" rowspan="1" colspan="2">40 - 70 bags/min</td>
      <td class="table-body" rowspan="1" colspan="1">■</td>
    </tr>
    <tr>
      <td class="table-body" rowspan="1" colspan="1">Total Power</td>
      <td class="table-body" rowspan="1" colspan="1">■</td>
      <td class="table-body" rowspan="1" colspan="2">20 kW</td>
      <td class="table-body" rowspan="1" colspan="1">■</td>
    </tr>
    <tr>
      <td class="table-body" rowspan="1" colspan="1">Total Weight</td>
      <td class="table-body" rowspan="1" colspan="1">■</td>
      <td class="table-body" rowspan="1" colspan="2">24.5 T</td>
      <td class="table-body" rowspan="1" colspan="1">■</td>
    </tr>
    <tr>
      <td class="table-body" rowspan="1" colspan="1">Machine Size</td>
      <td class="table-body" rowspan="1" colspan="1">■</td>
      <td class="table-body" rowspan="1" colspan="2">18400 x 5600 x 2600 mm</td>
      <td class="table-body" rowspan="1" colspan="1">■</td>
    </tr>
    <tr>
      <td class="table-body" rowspan="1" colspan="1">Glue Type</td>
      <td class="table-body" rowspan="1" colspan="1">■</td>
      <td class="table-body" rowspan="1" colspan="2">
        Water soluble cold glue (hot-melt glue)
      </td>
      <td class="table-body" rowspan="1" colspan="1">■</td>
    </tr>
  </tbody>
</table>
`,
applicable_paper: '/img/product/applicable-paper.png'
        },
        {
            '_id': 8,
            img : '/img/product/img-SYE-1200.png',
            title: 'SYE-1200',
            sub_title: 'Automatic UV Coating Machine',
            img_product : '/img/product/img-product-Art-Paper.png',
            desc: "Automatic UV coating machine is suitable for the varnishing and polishing process of various paper (80-600g/m²), machine for water-based oil, UV oil and blister varnish oil coating, after processing the print surface has the damp-proof and water-proof effects. Machine adopts the reversing mechanism to make the oil layer smooth and fine, save varnish oil and meets the high quality requirements.",
            desc2: 'This machine adopts air knife system which controlled by memory type PLC. It has the characteristics of beautiful appearance, stable and reliable performance, simple and convenient operation and high automation degree.',
            technical_parameters: `<table class="table-header">
  <tbody>
    <tr>
      <td class="table-body" rowspan="1" colspan="1">Max. paper size</td>
      <td class="table-body" rowspan="1" colspan="1">1150 x 1100 mm</td>
    </tr>
    <tr>
      <td class="table-body" rowspan="1" colspan="1">Min. paper size</td>
      <td class="table-body" rowspan="1" colspan="1">390 x 320 mm</td>
    </tr>
    <tr>
      <td class="table-body" rowspan="1" colspan="1">Length of roller</td>
      <td class="table-body" rowspan="1" colspan="1">1250 mm</td>
    </tr>
    <tr>
      <td class="table-body" rowspan="1" colspan="1">Paper thickness</td>
      <td class="table-body" rowspan="1" colspan="1">
        80-600 gsm (water-based oil: paper thickness ≥ 100 gsm)
      </td>
    </tr>
    <tr>
      <td class="table-body" rowspan="1" colspan="1">Oil type</td>
      <td class="table-body" rowspan="1" colspan="1">
        Water-based oil, UV oil, blister varnish oil, plastic oil
      </td>
    </tr>
    <tr>
      <td class="table-body" rowspan="1" colspan="1">Working speed</td>
      <td class="table-body" rowspan="1" colspan="1">10 - 80 m/min</td>
    </tr>
    <tr>
      <td class="table-body" rowspan="1" colspan="1">Feeding paper pile height</td>
      <td class="table-body" rowspan="1" colspan="1">1150 mm</td>
    </tr>
    <tr>
      <td class="table-body" rowspan="1" colspan="1">Collecting paper pile height</td>
      <td class="table-body" rowspan="1" colspan="1">1050 mm</td>
    </tr>
    <tr>
      <td class="table-body" rowspan="1" colspan="1">Power</td>
      <td class="table-body" rowspan="1" colspan="1">380 V - 50 Hxz - 3 P</td>
    </tr>
    <tr>
      <td class="table-body" rowspan="1" colspan="1">IR Lamps</td>
      <td class="table-body" rowspan="1" colspan="1">18 * 1.2 kW</td>
    </tr>
    <tr>
      <td class="table-body" rowspan="1" colspan="1">UV lamps</td>
      <td class="table-body" rowspan="1" colspan="1">3 * 8 kW</td>
    </tr>
    <tr>
      <td class="table-body" rowspan="1" colspan="1">Total power</td>
      <td class="table-body" rowspan="1" colspan="1">70 kW</td>
    </tr>
    <tr>
      <td class="table-body" rowspan="1" colspan="1">Machine weight</td>
      <td class="table-body" rowspan="1" colspan="1">6900 kg</td>
    </tr>
    <tr>
      <td class="table-body" rowspan="1" colspan="1">Overall dimension</td>
      <td class="table-body" rowspan="1" colspan="1">12800 x 2100 x 1800 mm</td>
    </tr>
  </tbody>
</table>
`
        },
        {
            '_id': 9,
            img : '/img/product/img-ZKT-750B.png',
            title: 'ZKT-750B',
            sub_title: 'Automatic Window Patching Machine',
            img_product : '/img/product/img-product-Art-Carton.png',
            desc: "Automatic Window Patching Machine can apply window film to all kinds of paper boxes. Based on the original window patching machines, it is a achievement by referring to customers’ feedback and our continual improvement and philosophy of humanized design. It is easy to operate and excellent in efficiency, accuracy and stability. It adopts a multi-servo control system. Our proprietary technology is embodied in both basic components and automation parts of this product. Therefore, it is in the position to meet customers’ requirements at a higher level.",
           technical_parameters: `<table class="table-header">
  <tbody>
    <tr>
      <td class="table-body" rowspan="1" colspan="1">Model</td>
      <td class="table-body" rowspan="1" colspan="1">ZKT-750B</td>
    </tr>
    <tr>
      <td class="table-body" rowspan="1" colspan="1">Speed</td>
      <td class="table-body" rowspan="1" colspan="1">
        6000 - 10000 pcs/h (Flat film patching)<br />4000 - 7000 pcs/h (V-cut
        and creasing)
      </td>
    </tr>
    <tr>
      <td class="table-body" rowspan="1" colspan="1">Paper length</td>
      <td class="table-body" rowspan="1" colspan="1">140 - 600 mm</td>
    </tr>
    <tr>
      <td class="table-body" rowspan="1" colspan="1">Paper width</td>
      <td class="table-body" rowspan="1" colspan="1">120 - 750 mm</td>
    </tr>
    <tr>
      <td class="table-body" rowspan="1" colspan="1">Film width</td>
      <td class="table-body" rowspan="1" colspan="1">30 - 400 mm</td>
    </tr>
    <tr>
      <td class="table-body" rowspan="1" colspan="1">Thickness of Film</td>
      <td class="table-body" rowspan="1" colspan="1">0.03 - 0.25 mm</td>
    </tr>
    <tr>
      <td class="table-body" rowspan="1" colspan="1">Main power</td>
      <td class="table-body" rowspan="1" colspan="1">2.2 kW</td>
    </tr>
    <tr>
      <td class="table-body" rowspan="1" colspan="1">Power of pump</td>
      <td class="table-body" rowspan="1" colspan="1">1.5 kW</td>
    </tr>
    <tr>
      <td class="table-body" rowspan="1" colspan="1">External dimension</td>
      <td class="table-body" rowspan="1" colspan="1">5000 x 1550 x 1770 mm</td>
    </tr>
    <tr>
      <td class="table-body" rowspan="1" colspan="1">Weight</td>
      <td class="table-body" rowspan="1" colspan="1">2800 kg</td>
    </tr>
  </tbody>
</table>
`,
window_styles : '/img/product/img-ZKT-750B-window-styles.png',
flow_chart : '/img/product/img-ZKT-750B-flow-chart.png',
        },
        {
            '_id': 10,
            img : '/img/product/img-YLB-60A.png',
            title: 'YLB-60A',
            img_product : '/img/product/img-product-Kertas-NCR.png',
            sub_title: 'Automatic Paper Cup Forming Machine',
            desc: "YLB-60A automatic paper cup forming machine comes with rectangle tube and channel steel welding structure, which is stronger and small deformation, automatic lubrication system, which makes all mechanical parts working much more smoothly. The cup bottom adopts the stretching die which make the bottom sealing quality better and less leaking percentage. It has PLC control, sensor failure detecting system, cup bottom paper feeding controlled by servo motor, bottom paper will be delivered when cup tube comes, otherwise no bottom paper delivery. The machine has safety guard to protect the people working safely, it is the best choice for making paper cups.",
             technical_parameters: `<table class="table-header">
  <tbody>
    <tr>
      <td class="table-body" rowspan="1" colspan="1">Size of cup</td>
      <td class="table-body" rowspan="1" colspan="1">
        6 - 22 Oz (can be adjusted by mold)
      </td>
    </tr>
    <tr>
      <td class="table-body" rowspan="1" colspan="1">Material of paper</td>
      <td class="table-body" rowspan="1" colspan="1">
        160 - 380 g/m2 (single or double PE-coated paper)
      </td>
    </tr>
    <tr>
      <td class="table-body" rowspan="1" colspan="1">Speed of production</td>
      <td class="table-body" rowspan="1" colspan="1">50 - 60 pcs/min</td>
    </tr>
    <tr>
      <td class="table-body" rowspan="1" colspan="1">Cup top diameter</td>
      <td class="table-body" rowspan="1" colspan="1">50 - 105 mm</td>
    </tr>
    <tr>
      <td class="table-body" rowspan="1" colspan="1">Cup bottom diameter</td>
      <td class="table-body" rowspan="1" colspan="1">45 - 80 mm</td>
    </tr>
    <tr>
      <td class="table-body" rowspan="1" colspan="1">Height diameter</td>
      <td class="table-body" rowspan="1" colspan="1">60 - 120 mm</td>
    </tr>
    <tr>
      <td class="table-body" rowspan="1" colspan="1">Bottom depth</td>
      <td class="table-body" rowspan="1" colspan="1">5 - 10 mm</td>
    </tr>
    <tr>
      <td class="table-body" rowspan="1" colspan="1">Power supply</td>
      <td class="table-body" rowspan="1" colspan="1">380 V/220 V 50 Hz 3 PH</td>
    </tr>
    <tr>
      <td class="table-body" rowspan="1" colspan="1">Total power</td>
      <td class="table-body" rowspan="1" colspan="1">6 kW</td>
    </tr>
    <tr>
      <td class="table-body" rowspan="1" colspan="1">Weight</td>
      <td class="table-body" rowspan="1" colspan="1">2500 kg</td>
    </tr>
    <tr>
      <td class="table-body" rowspan="1" colspan="1">Overall dimensions</td>
      <td class="table-body" rowspan="1" colspan="1">2300 x 1200 x 1600 mm</td>
    </tr>
  </tbody>
</table>
`,
paper_cup_dimension : '/img/product/paper_cup_dimension.png'
        },
        {
            '_id': 11,
            img : '/img/product/img-YLB-100A.png',
            title: 'YLB-100A',
            img_product : '/img/product/img-product-Kertas-Manila.png',
            sub_title: 'Automatic High Speed Paper Cup Forming Machine',
            desc: "YLB-100A Automatic high speed paper cup forming machine comes with two turn-plate, open intermittent cam mechanism and gear transmission, longitudinal axis structures. The whole machine adopts automatic lubrication system, which makes all mechanical parts working much more smoothly. Bottom sealing by hot air devices, so that the machine is efficient, there is extra Switzerland Leister hot air device for the side sealing, so side sealing is done by both hot air and ultrasonic. The machine comes with PLC control system, sensor failure detecting and it stops working automatically if the machine has any problem, it can greatly improve operation safety and reducing labor cost. The PLC, touch screen, Invertor, temperature controller and sensor is made in Korea.",
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
            img : '/img/product/img-ECY-800.png',
            title: 'ECY-800',
            sub_title: 'Automatic Paper Carton Erecting Machine',
            img_product : '/img/product/img-product-Kertas-Samson.png',
            desc: "Automatic paper carton erecting machine is an ideal choice to produce hamburger boxes, chips boxes, take away boxes etc. It adopts micro-computer, PLC, servo feeding, alternating current frequency converter, vacuum suction, auto gluing, automatic paper tape counting, chain drive. All of these main parts and electric control system adopt famous brand to guarantee steady working, precise positioning, smooth running, safety and reliability operation.",
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
            img : '/img/product/img-HJY-450.png',
            title: 'HJY-450',
            sub_title: 'Automatic Paper Lunch Box Making Machine',
            img_product : '/img/product/img-product-Kertas-Koran.png',
           point_desc: ['Mechanical transmission, energy saving, stable and simple operation, microcomputer detection. It has the monitor computer system. If the fault, the machine will stop and alarming.', 'The machine has the advantages of high speed, convenient operation etc. and adopts built-in hot air generator, suitable for single PE coated paper.', 'Through the automatic feeding paper, corner heating (comes with hot air generating device), fold the cover (by mechanical device), hot press molding (adhesive box four corners), automatic points collected, microcomputer control of continuous processes.', 'For the production of single disposable paper boxes, paper lunch boxes, food packaging boxes.'],
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
            img : '/img/product/img-FYB-250.png',
            title: 'FYB-250',
            img_product : '/img/product/img-product-Kertas-Litho.png',
            sub_title: 'Automatic Flat Bottom Paper Bag Making Machine',
            desc: "The machine for reel original colored paper or drum paper printing, such as kraft paper, glossy paper, medical paper roll consists of a paper bag process by puncture, center glue, color code length, raw material into a tube, set off long retreat, bottom folding, bottom gluing, pocket bottom forming, complete finished bag finishing. The machine operation more convenient, more efficient, more stable is in the production of a variety of different paper bags, fenestration bread bags, leisure food bags, bread bags, dried fruit bags and so on environmental friendly paper bag machine equipment.",
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
            img : '/img/product/img-FYD-330.png',
            title: 'FYD-330',
            sub_title: 'Automatic Square Bottom Paper Bag Making Machine',
            img_product : '/img/product/img-product-Kertas-Sticker.png',
            desc: "Automatic roll feeding square bottom paper bag making machine, it uses paper roll in blank or printed as raw material. Consists of automatic center forward glue, printing tracking, fixed length and cutting, bottom indentation, bottom folding, bottom gluing, bag bottom forming, finished bag collecting at one time. The machine is more convenient, more efficient, more stable, can produce a variety of different paper bags, leisure food bags, bread bags, dried fruit bags and so on environmentally friendly paper bag machine equipment.",
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
        {
            '_id': 16,
            img : '/img/product/img-YXD.png',
            title: 'YXD-970/1080/1200/1400',
            sub_title: 'Automatic Roll Die Cutting Machine',
            img_product : '/img/product/img-product-Kertas-Sticker.png',
            desc: "YXD series automatic roll die cutting machine has a high stability, high safety performance, high precision of the finished product, it’s widely used in printing, packaging and paper products industries. It adopts micro-computer, human-computer control interface, servo positioning, alternating current frequency converter, automatic counting, manual pneumatic lock plate, photoelectric correcting deviation system, electromagnetic clutch, centralized oil lubrication, overload protection and distinctive gearing. So it guarantees smooth operations of returning paper and feeding paper, precise positioning and orderly withdrawing. All the key parts and controls of the machine are imported. Such installation can realize the machine in steady pressure, precise positioning, smooth moving, safety and reliability.",
            detail: {
            }
        },
        {
            '_id': 17,
            img : '/img/product/img-YTQF-680.png',
            title: 'YTQF-680/920/1080',
            sub_title: 'Automatic Stripping Machine',
            img_product : '/img/product/img-product-Kertas-Sticker.png',
            desc: "This series of machines are suitable for the strip process after die cutting, it is used for stripping the finished cardboard, plastic and leathers which processed by die cutting machine. With compact structure, high pressure and precision, it is easy for operation with reliable quality to lower the working intensity and labor cost. This machine is suitable for printing, packaging and plastic industry.",
            detail: {
            }
        },
        {
            '_id': 18,
            img : '/img/product/img-SYC-1400.png',
            title: 'SYC-1400/1700/1900',
            sub_title: 'Servo Precision High Speed Sheet Cutter Machine',
            img_product : '/img/product/img-product-Kertas-Sticker.png',
            desc: "SYC series sheet cutting machine apply the advanced technique from Britain. The machine is transmitted by servo motor. The speed of cutting paper is fast and stable. Germany precise bear and cutting knife assure the high cutting precision. Touch screen computer interface control, simple operation, reasonable structure, anti-noise stands, to ensure smooth paper. This machine is the paper processing machine which is very popular in the paper making and printing industry and will improve the efficiency and benefit for every company to a large extent.",
            detail: {
            }
        },
        {
            '_id': 19,
            img : '/img/product/img-FZ-1200.png',
            title: 'FZ-1200',
            sub_title: 'Automatic Pile Turner Machine',
            img_product : '/img/product/img-product-Kertas-Sticker.png',
            desc: "This machine is mainly used in printing and packaging industry, for pile turning, aligning, dust removal etc. It is a necessary equipment to improve the work efficiency and printing quality. It can remove the impurities such as paper fibers, paper scraps, and printing powders. It can stop impurities such as paper fibers, paper scraps go into the printing machine to increase the service life of printing machine.",
            desc2: 'After the vibration and air jetting, the pile is fled with air cushion between the sheets by which the mis-feeding and double sheeting can be avoided. With the vibration platform and high pressure air jetting, the whole pile paper can be aligned at one time. For the piles of double-sided printing paper, the pile tuning will improve the work efficiency and lower the intensity of work. High efficiency and easy operation.',
            detail: {
            }
        },
        {
            '_id': 20,
            img : '/img/product/img-YK-78.png',
            title: 'YK-78/92/115/130',
            sub_title: 'Program Control Paper Cutter',
            img_product : '/img/product/img-product-Kertas-Sticker.png',
            desc: "It equipped AC digital servo controlling technology and 10 inches colorful touching screen, the data resolution rate is 0.01mm, full touch operating system for human computer interface, has self-diagnostic function of troubles and displays the operating pattern, 300 program units, over 30000 different cutting positions, it can memorize, store and dynamic follow-up. Its key parts adopt imported bearing of low maintenance. IR ray protective device is more convenient for cutting with optical knife-line alignment, button operated by two hands, single circulation cutting device etc.",
            detail: {
            }
        },
        {
            '_id': 21,
            img : '/img/product/img-ZFY-291.png',
            title: 'ZFY-291',
            sub_title: 'Automatic Envelope Making Machine',
            img_product : '/img/product/img-product-Kertas-Sticker.png',
            desc: "ZFY-291 Automatic envelope making machine is applicable to process pocket type code 1-7, wallet type code 2-7 international envelope, commercial envelope, first day celebration envelope and similar bags in national standard. This envelope making machine with high working efficiency, reliable performance and compact structure, adopts air suction type bottom paper extracting system and may supply paper without a pause.",
            detail: {
            }
        },
        {
            '_id': 22,
            img : '/img/product/img-JBY-720A.png',
            title: 'JBY-720A/800A/1020A',
            sub_title: 'Full Automatic Stop Cylinder Screen Press',
            img_product : '/img/product/img-product-Kertas-Sticker.png',
            desc: "JBY-A Series Full Automatic Stop Cylinder Screen Press which adopts the classical stop cylinder technology with the advantages such as: paper located exactly and steadily, high precision, high speed, low noise, high degree automatization and so on, it is suitable for printing on ceramic and glass applique, electron industry (film switch, flexible circuitry, meter panel, mobile telephone), advertisement, packing and printing, brand, textile transfer, special technics etc.",
            detail: {
            }
        },
        {
            '_id': 23,
            img : '/img/product/img-FMZ-G1300.png',
            title: 'FMZ-G1300/1480/1650',
            sub_title: 'Automatic High Speed Flute Laminating Machine',
            img_product : '/img/product/img-product-Kertas-Sticker.png',
            point_desc: [
                'With memory function, intelligent operation, fast change production.',
            'Intelligent automatic adjusting structure, automatic adjusting by input paper size.',
            'Servo motor compensation positioning to ensure front register laminating accuracy; heavy type structure to ensure machine high speed running and long lifespan.',
            'Cardboard and cardboard lamination, cardboard and corrugated board lamination, also suits for cardboard, heavy corrugated and thick paperboard, multi-purpose to save purchase cost.',
            'Remote control, fast and convenient.'
            ],
            detail: {
            }
        },
        {
            '_id': 24,
            img : '/img/product/img-YQFM-460.png',
            title: 'YQFM-460/600',
            sub_title: 'Automatic Case Maker Machine',
            img_product : '/img/product/img-product-Kertas-Sticker.png',
            point_desc: [
                'The feeder adopts back-push feeding system, which is controlled pneumatically and server motor.',
            'The particular function of positioning and correcting an error for cardboard can make it locating on the cover sheet accurately and the positioning error brought by glue paper excursion is settled completely.',
            'The air draft device of product line avoids powdery paper bend and air bubble, and its tail is equipped with an automatic smoother device.',
            'The delivery table is a lifting table of automatic control, smooth delivery.',
            'Intelligent touch screen display and operation. It is more expedient and direct for man-machine conversation.',
            'It adopts Japan OMRON PLC intelligence software control system, automatic checking trouble.'
            ],
            detail: {
            }
        },
        {
            '_id': 25,
            img : '/img/product/img-RBS-600.png',
            title: 'RBS-600',
            sub_title: 'Automatic Rigid Box Making Machine',
            img_product : '/img/product/img-product-Kertas-Sticker.png',
            desc: 'Fitur-fitur RBS-600:',
            img_desc: '/img/product/img-RBS-600-item.png',
            detail: {
            }
        },
        {
            '_id': 26,
            img : '/img/product/img-DCZ76-1310RS.png',
            title: 'DCZ76-1310RS',
            sub_title: 'High Speed Flatbed Digital Cutter Machine',
            img_product : '/img/product/img-product-Kertas-Sticker.png',
            desc: 'DCZ7XRS series high speed flatbed digital cutter is the new developed cutting system for the industries as packaging, printing, ads, display etc. It has two independent module design, very good expansibility and exchangeable tools. It equips versatile tools as vibrating knife, creasing wheel, drag knife, V cut knife, which can cut the materials up to 60mm thick, and capable with many kind of materials such as corrugated paper, honeycomb board, card paper, foam, grey board, KT board, PVC expansion. DCZ7XRS machine takes the whole new table design of steel frame and the table vacuum zone, which enables the stronger suction and more stable mechanical properties. Thanks to the auto tool height system, it makes the machine smarter, just by pressing one key, then the tool depth can be set automatically, therefore avoid the over cut of the table.',
            detail: {
            }
        },
        {
            '_id': 27,
            img : '/img/product/img-YTM-K1300.png',
            title: 'YTM-K1300',
            sub_title: 'Slitter Rewinder Machine',
            desc: 'The machine applies to slit cellophane, PET, OPP, CPP, PS, PVC, PE, metalized film, stamping foil, film roll, aluminum foil, laminated film, aluminum coated film, printing of various materials, from 12-400 Micron plastic film.',
            detail: {
            }
        },
        {
            '_id': 28,
            img : '/img/product/img-JYK-1224.png',
            title: 'JYK-1224',
            sub_title: 'Automatic Lead Feeder Flexo Four Colors Printing Slotting Die Cutting Machine',
            desc: 'This machine is designed and made to high quality and safety standard. With the advantages of high speed, auto control and quick order shift. Well hardened and ground transmission gears, hardness more than 60(HRC). Vacuum transfer system used in all printing sections. Use expansion sets tight link to reduce abrasion of the shaft, keep precision of the machine for long years. PLC control system with touch screen control. Able to save order, speed up the order shift. All electronic and pneumatic components are with European standards. Able to shift order of the idle printing section under production. Able to facilitate the production management.',
            detail: {
            }
        },
    ]
    </script>