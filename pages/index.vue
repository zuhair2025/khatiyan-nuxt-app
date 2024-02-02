<template>
    <MainLayout>
    <!-- Hero Section -->
    <section class="grid grid-cols-1 md:flex md:mt-4">
        <!-- left section -->
        <div class="p-4 md:p-0 md:w-2/3">
            <img class="rounded-lg" src="/front_img.png" alt="">
        </div>
        <!-- right section -->
        <div class="md:w-1/3">
            <div class="my-1 mx-4 border border-green-600 rounded-lg">
            <p class="p-4 text-sm text-blue-900">এই ওয়েব পোর্টালে দৃশ্যমান সকল খতিয়ানই খসড়া খতিয়ান অর্থাৎ চূড়ান্ত খতিয়ান নয়। জরিপের যেকোন স্তরেই এই খতিয়ানসমূহের যে কোন তথ্য় পরিবর্তন হতে পারে। এখানে শুধুমাত্র দেশের বিভিন্ন এলাকায় চলমান ভূমি জরিপের মৌজাগুলির স্তরভিত্তিক (খসড়া প্রকাশনা স্তর থেকে চূড়ান্ত প্রকাশনা স্তর পর্যন্ত) খতিয়ানসমূহ প্রদর্শন করা হচ্ছে।</p>
            </div>
            <div class="my-1 mx-4 border border-green-600 rounded-lg">
            <p class="p-4 text-sm text-blue-900">জরিপ সম্পন্ন হয়ে জেলা প্রশাসক বরাবর হস্তান্তর করা হয়েছে এমন খতিয়ানসমূহ দেখতে www.land.gov.bd লিংক-এ ভিজিট করুন।</p>
            </div>
            <div class="mx-4 mt-8">
            <p class="bg-[#053B69] text-white text-center py-2 rounded-lg">এক নজরে জোনভিত্তিক মৌজা তালিকা</p>
            <div class="grid grid-cols-3 gap-x-8">
                <a href="#" class="bg-[#305477] text-white text-center rounded-lg mt-4 p-1">ঢাকা</a>
                <a href="#" class="bg-[#305477] text-white text-center rounded-lg mt-4 p-1">খুলনা</a>
                <a href="#" class="bg-[#305477] text-white text-center rounded-lg mt-4 p-1">চট্টগ্রাম</a>
                <a href="#" class="bg-[#305477] text-white text-center rounded-lg mt-4 p-1">রাজশাহী</a>
                <a href="#" class="bg-[#305477] text-white text-center rounded-lg mt-4 p-1">সিলেট</a>
                <a href="#" class="bg-[#305477] text-white text-center rounded-lg mt-4 p-1">বরিশাল</a>
                <a href="#" class="bg-[#305477] text-white text-center rounded-lg mt-4 p-1">রংপুর</a>
                <a href="#" class="bg-[#305477] text-white text-center rounded-lg mt-4 p-1">ময়মনসিংহ</a>
                <a href="#" class="bg-[#305477] text-white text-center rounded-lg mt-4 p-1">কুমিল্লা</a>
                <a href="#" class="bg-[#305477] text-white text-center rounded-lg mt-4 p-1">দিনাজপুর</a>
                <a href="#" class="bg-[#305477] text-white text-center rounded-lg mt-4 p-1">যশোর</a>
                <a href="#" class="bg-[#305477] text-white text-center rounded-lg mt-4 p-1">নোয়াখালী</a>
                <a href="#" class="bg-[#305477] text-white text-center rounded-lg mt-4 p-1">বগুড়া</a>
                <a href="#" class="bg-[#305477] text-white text-center rounded-lg mt-4 p-1">ফরিদপুর</a>
                <a href="#" class="bg-[#305477] text-white text-center rounded-lg mt-4 p-1">জামালপুর</a>
                <a href="#" class="bg-[#305477] text-white text-center rounded-lg mt-4 p-1">পাবনা</a>
                <a href="#" class="bg-[#305477] text-white text-center rounded-lg mt-4 p-1">পটুয়াখালী</a>
                <a href="#" class="bg-[#305477] text-white text-center rounded-lg mt-4 p-1">টাঙ্গাইল</a>
            </div>
            </div>
        </div>

    </section>
    <!-- Service Section -->
    <section class="mt-4">
        <div class="flex flex-col md:grid md:grid-cols-4 mx-4 gap-2">
        <div class="flex border border-gray-300 rounded-md p-4 justify-between">
            <div class="flex flex-col gap-2">
            <p class="text-sm">মৌজা তালিকা</p>
            <a href="" class="text-xs w-16 py-1 px-0 rounded-md text-center bg-[#FFC107]">বিস্তারিত</a>
            </div>
            <img class="w-12 h-12" src="/office-icon.png" alt="">
        </div>
        <div class="flex border border-gray-300 rounded-md p-4 justify-between">
            <div class="flex flex-col gap-2">
            <p class="text-sm">খতিয়ান তথ্য অনুসন্ধান</p>
            <NuxtLink to="khatiyan_form" class="text-xs w-16 py-1 px-0 rounded-md text-center bg-[#FFC107]">বিস্তারিত</NuxtLink>
            </div>
            <img class="w-12 h-12" src="/search3.png" alt="">
        </div>
        <div class="flex border border-gray-300 rounded-md p-4 justify-between">
            <div class="flex flex-col gap-2">
            <p class="text-sm">ম্যাপ প্রদর্শন</p>
            <a href="" class="text-xs w-16 py-1 px-0 rounded-md text-center bg-[#FFC107]">বিস্তারিত</a>
            </div>
            <img class="w-12 h-12" src="/mapicon.png" alt="">
        </div>
        <div class="flex border border-gray-300 rounded-md p-4 justify-between">
            <div class="flex flex-col gap-2">
            <p class="text-sm">ই-সেবা</p>
            <a href="" class="text-xs w-16 py-1 px-0 rounded-md text-center bg-[#FFC107]">বিস্তারিত</a>
            </div>
            <img class="w-12 h-12" src="/eseba22.png" alt="">
        </div>
        </div>
    </section>
    <!-- Slider Section -->
    <section class="my-4">
        <UCarousel v-slot="{ item }" :items="items" :ui="{ item: 'basis-full' }" class="rounded-lg overflow-hidden" arrows>
           <img src="/slider1.jpg" alt="">
           <img src="/slider2.gif" alt="">
           <img src="/slider3.gif" alt="">
        </UCarousel>
       
    </section>
    </MainLayout>
</template>

<script setup>
import MainLayout from '~/layouts/MainLayout.vue';

const items = [
  'https://picsum.photos/1920/1080?random=1',
  'https://picsum.photos/1920/1080?random=2',
  'https://picsum.photos/1920/1080?random=3',
  'https://picsum.photos/1920/1080?random=4',
  'https://picsum.photos/1920/1080?random=5',
  'https://picsum.photos/1920/1080?random=6'
]
</script>