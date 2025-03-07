<template>

    <div class="min-h-[80vh] pt-[160px] pb-[50px] md:pt-[130px]">

        <div class="md:max-w-[1200px] mx-auto w-full h-full px-4 md:px-0">
            <n-breadcrumb class="mb-6">
                <n-breadcrumb-item> Home </n-breadcrumb-item>
                <n-breadcrumb-item> About us </n-breadcrumb-item>
            </n-breadcrumb>


            <div class="grid grid-cols-1 md:grid-cols-2 mt-[40px] gap-20 min-h-[500px]">

                <div class="flex justify-center items-center">

                    <div class=" space-y-4">

                        <h1 class="text-3xl font-bold">Our Story</h1>
                        <p class=" text-sm">
                            Launced in 2015, Exclusive is South Asia’s premier online shopping 
                            makterplace with an active presense in Bangladesh. Supported by wide range 
                            of tailored marketing, data and service solutions, Exclusive has 10,500 
                            sallers and 300 brands and serves 3 millioons customers across the region. 
                        </p>
                        <p>Exclusive has more than 1 Million products to offer, growing at a very fast.
                             Exclusive offers a diverse assotment in categories ranging  from consumer.
                        </p>
                    </div>
                    
                </div>

                <div class="bg-[url('/bg/bg-girls.png')] bg-cover rounded-md h-[400px] md:h-full">

                </div>

            </div>


            <div class="grid md:grid-cols-4 items-center grid-cols-1 gap-6 mt-[90px]">

                <div v-for="(i,index) in aboutInfo" :key="index"  ref="cards" >

                    <div class="h-[230px] w-[270] flex flex-col space-y-2 justify-center items-center border rounded-sm">
                        <div class="bg-gray-300 h-[80px] w-[80px] rounded-full flex justify-center items-center">
                            <div class="bg-[black] h-[60px] w-[60px] rounded-full flex justify-center items-center">
                                <div v-html="i.svg"></div>
                            </div>
                        </div>
                        <h1 class="text-lg font-bold">{{i.amount}}k</h1>
                        <p>{{ i.text }}</p>



                    </div>

                </div>

            </div>

            <div class="grid md:grid-cols-3 items-center grid-cols-1 gap-6 mt-[90px]">

                <div v-for="(i,index) in aboutInfo2" :key="index"  ref="cards" >

                    <div class="h-[230px] w-[270] flex flex-col space-y-2 justify-center items-center  rounded-sm">
                        <div class="bg-gray-300 h-[80px] w-[80px] rounded-full flex justify-center items-center">
                            <div class="bg-[black] h-[60px] w-[60px] rounded-full flex justify-center items-center">
                                <div v-html="i.svg"></div>
                            </div>
                        </div>
                        <h1 class="text-lg font-bold">{{i.title}}</h1>
                        <p>{{ i.text }}</p>



                    </div>

                </div>

            </div>



        </div>

    </div>

</template>

<script setup>
import gsap from 'gsap';
import {
    NBreadcrumb,
    NBreadcrumbItem,
  } from 'naive-ui';

const cards = ref([]);

onMounted(() => {
  gsap.from(cards.value, {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.2,
    ease: "power2.out"
  });
});

const aboutInfo = [
      {
        amount:23,
        text:'Sellers are active in our site',
        svg:`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from All by undefined - undefined --><path fill="#fff" d="M20 5c-.6 0-1 .5-1 1.1V16c0 .6.4 1 1 1.1c.6 0 1-.5 1-1.1V6.1c0-.6-.4-1.1-1-1.1m-3.6-3H4.6C3.7 2 3 2.7 3 3.6v13.8c0 .9.7 1.6 1.6 1.6H6v2c0 .6.4 1 1 1h6c.6 0 1-.4 1-1v-2h2.4c.9 0 1.6-.7 1.6-1.6V3.6c0-.9-.7-1.6-1.6-1.6M5 8h3v2H5zm7 3v2H9v-2zm-3-1V8h3v2zm3 4v2H9v-2zm-7-3h3v2H5zm0 5v-2h3v2zm3 5H7v-2h1zm5 0h-3v-2h3zm3-5h-3v-2h3zm0-3h-3v-2h3zm0-3h-3V8h3zm0-4H5V4h11z"/></svg>`
      },
      {
        amount:45,
        text:'Monthly productive sales',
        svg:`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from All by undefined - undefined --><g fill="none" stroke="#fff" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path stroke-linecap="round" d="M12 17v1m0-12v1m3 2.5C15 8.12 13.657 7 12 7S9 8.12 9 9.5s1.343 2.5 3 2.5s3 1.12 3 2.5s-1.343 2.5-3 2.5s-3-1.12-3-2.5"/></g></svg>`
      },
      {
        amount:28,
        text:'Customers active in our site',
        svg:`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from All by undefined - undefined --><path fill="#fff" fill-rule="evenodd" d="M12 2.75A2.25 2.25 0 0 0 9.75 5v.26c.557-.01 1.168-.01 1.84-.01h.821c.67 0 1.282 0 1.84.01V5A2.25 2.25 0 0 0 12 2.75m3.75 2.578V5a3.75 3.75 0 1 0-7.5 0v.328q-.214.018-.414.043c-1.01.125-1.842.387-2.55.974S4.168 7.702 3.86 8.672c-.3.94-.526 2.147-.81 3.666l-.021.11c-.402 2.143-.718 3.832-.777 5.163c-.06 1.365.144 2.495.914 3.422c.77.928 1.843 1.336 3.195 1.529c1.32.188 3.037.188 5.218.188h.845c2.18 0 3.898 0 5.217-.188c1.352-.193 2.426-.601 3.196-1.529s.972-2.057.913-3.422c-.058-1.331-.375-3.02-.777-5.163l-.02-.11c-.285-1.519-.512-2.727-.81-3.666c-.31-.97-.72-1.74-1.428-2.327c-.707-.587-1.54-.85-2.55-.974a11 11 0 0 0-.414-.043M8.02 6.86c-.855.105-1.372.304-1.776.64c-.403.334-.694.805-.956 1.627c-.267.84-.478 1.958-.774 3.537c-.416 2.217-.711 3.8-.764 5.013c-.052 1.19.14 1.88.569 2.399c.43.517 1.073.832 2.253 1c1.2.172 2.812.174 5.068.174h.72c2.257 0 3.867-.002 5.068-.173c1.18-.169 1.823-.484 2.253-1.001c.43-.518.621-1.208.57-2.4c-.054-1.211-.349-2.795-.765-5.012c-.296-1.58-.506-2.696-.774-3.537c-.262-.822-.552-1.293-.956-1.628s-.92-.534-1.776-.64c-.876-.108-2.013-.109-3.62-.109h-.72c-1.607 0-2.744.001-3.62.11m1.103 3.4a.75.75 0 0 1 .617.863l-1 6a.75.75 0 1 1-1.48-.246l1-6a.75.75 0 0 1 .863-.617m5.754 0a.75.75 0 0 1 .863.617l1 6a.75.75 0 1 1-1.48.246l-1-6a.75.75 0 0 1 .617-.863" clip-rule="evenodd"/></svg>`
      },
      {
        amount:55,
        text:'Anual gross sale in our site',
        svg:`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from All by undefined - undefined --><path fill="#fff" fill-rule="evenodd" d="M11.948 1.25h.104c.899 0 1.648 0 2.242.08c.628.084 1.195.27 1.65.725c.456.456.642 1.023.726 1.65c.06.44.075.964.079 1.57c.648.021 1.226.06 1.74.128c1.172.158 2.121.49 2.87 1.238c.748.749 1.08 1.698 1.238 2.87c.153 1.14.153 2.595.153 4.433v.112c0 1.838 0 3.294-.153 4.433c-.158 1.172-.49 2.121-1.238 2.87c-.749.748-1.698 1.08-2.87 1.238c-1.14.153-2.595.153-4.433.153H9.944c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433v-.112c0-1.838 0-3.294.153-4.433c.158-1.172.49-2.121 1.238-2.87c.749-.748 1.698-1.08 2.87-1.238a18 18 0 0 1 1.74-.128c.004-.606.02-1.13.079-1.57c.084-.627.27-1.194.725-1.65c.456-.455 1.023-.64 1.65-.725c.595-.08 1.345-.08 2.243-.08M8.752 5.252q.567-.003 1.192-.002h4.112q.625 0 1.192.002c-.004-.57-.018-1-.064-1.347c-.063-.461-.17-.659-.3-.789s-.328-.237-.79-.3c-.482-.064-1.13-.066-2.094-.066s-1.612.002-2.095.067c-.461.062-.659.169-.789.3s-.237.327-.3.788c-.046.346-.06.776-.064 1.347M5.71 6.89c-1.006.135-1.586.389-2.01.812c-.422.423-.676 1.003-.811 2.009c-.138 1.027-.14 2.382-.14 4.289s.002 3.262.14 4.29c.135 1.005.389 1.585.812 2.008s1.003.677 2.009.812c1.028.138 2.382.14 4.289.14h4c1.907 0 3.262-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812s.677-1.003.812-2.009c.138-1.027.14-2.382.14-4.289s-.002-3.261-.14-4.29c-.135-1.005-.389-1.585-.812-2.008s-1.003-.677-2.009-.812c-1.027-.138-2.382-.14-4.289-.14h-4c-1.907 0-3.261.002-4.29.14M12 9.25a.75.75 0 0 1 .75.75v.01c1.089.274 2 1.133 2 2.323a.75.75 0 0 1-1.5 0c0-.384-.426-.916-1.25-.916s-1.25.532-1.25.916s.426.917 1.25.917c1.385 0 2.75.96 2.75 2.417c0 1.19-.911 2.048-2 2.323V18a.75.75 0 0 1-1.5 0v-.01c-1.089-.274-2-1.133-2-2.323a.75.75 0 0 1 1.5 0c0 .384.426.916 1.25.916s1.25-.532 1.25-.916s-.426-.917-1.25-.917c-1.385 0-2.75-.96-2.75-2.417c0-1.19.911-2.049 2-2.323V10a.75.75 0 0 1 .75-.75" clip-rule="evenodd"/></svg>`
      },
]


const aboutInfo2 = [
    {
        title:"FREE AND FAST DELIVERY",
        text:"Free delivery for all orders over $5000",
        svg:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><!-- Icon from All by undefined - undefined --><path fill="#fff" d="M7 20q-1.25 0-2.125-.875T4 17H1.5l.45-2h2.825q.425-.475 1-.737T7 14t1.225.263t1 .737H13.4l2.1-9H4.55l.1-.425q.15-.7.687-1.137T6.6 4H18l-.925 4H20l3 4l-1 5h-2q0 1.25-.875 2.125T17 20t-2.125-.875T14 17h-4q0 1.25-.875 2.125T7 20m8.925-7h4.825l.1-.525L19 10h-2.375zm-.475-6.825L15.5 6l-2.1 9l.05-.175l.85-3.65zM.5 13.325l.5-2h5.5l-.5 2zm2-3.65l.5-2h6.5l-.5 2zM7 18q.425 0 .713-.288T8 17t-.288-.712T7 16t-.712.288T6 17t.288.713T7 18m10 0q.425 0 .713-.288T18 17t-.288-.712T17 16t-.712.288T16 17t.288.713T17 18"/></svg>`,
    },
    {
        title:'24/7 CUSTOMER SERVICE',
        text:"Friendly 24/7 customer support",
        svg:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><!-- Icon from All by undefined - undefined --><path fill="#fff" d="M2 11C2 5.477 6.477 1 12 1s10 4.477 10 10v5.154C22 17.8 20.58 19 19 19h-3v-8h4a8 8 0 1 0-16 0h4v8H6.063A2 2 0 0 0 8 20.5h1.564c.316-.453.841-.75 1.436-.75h2a1.75 1.75 0 1 1 0 3.5h-2c-.595 0-1.12-.297-1.436-.75H8a4 4 0 0 1-3.986-3.66C2.874 18.463 2 17.446 2 16.155z"/></svg>`,
    },
    {
        title:'MONEY BACK GUARANTEE',
        text:"We reurn money within 30 days",
        svg:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><!-- Icon from All by undefined - undefined --><path fill="#fff" d="M12 22q-3.475-.875-5.738-3.988T4 11.1V5l8-3l8 3v6.1q0 3.8-2.262 6.913T12 22m0-2.1q2.6-.825 4.3-3.3t1.7-5.5V6.375l-6-2.25l-6 2.25V11.1q0 3.025 1.7 5.5t4.3 3.3m0-7.9"/></svg>`,
    }
]
</script>