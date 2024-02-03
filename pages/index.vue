<template>
    <MainLayout>
    <!-- Hero Section -->
    <section class="grid grid-cols-1 md:flex md:mt-4">
        <!-- left section -->
        <div class="p-4 md:p-0 md:w-2/3">
            <img class="rounded-lg" src="/pi_banking.jpg" alt="">
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
                <a href="#" class="bg-[#305477] text-white text-center rounded-lg mt-4 p-1">কুমিল্লা</a>
                <a href="#" class="bg-[#305477] text-white text-center rounded-lg mt-4 p-1">ফেনী</a>
                <a href="#" class="bg-[#305477] text-white text-center rounded-lg mt-4 p-1">ব্রাহ্মণবাড়িয়া</a>
                <a href="#" class="bg-[#305477] text-white text-center rounded-lg mt-4 p-1">রাঙ্গামাটি</a>
                <a href="#" class="bg-[#305477] text-white text-center rounded-lg mt-4 p-1">নোয়াখালী</a>
                <a href="#" class="bg-[#305477] text-white text-center rounded-lg mt-4 p-1">চাঁদপুর</a>
                <a href="#" class="bg-[#305477] text-white text-center rounded-lg mt-4 p-1">লক্ষ্মীপুর</a>
                <a href="#" class="bg-[#305477] text-white text-center rounded-lg mt-4 p-1">চট্টগ্রাম</a>
                <a href="#" class="bg-[#305477] text-white text-center rounded-lg mt-4 p-1">কক্সবাজার</a>
                <a href="#" class="bg-[#305477] text-white text-center rounded-lg mt-4 p-1">খাগড়াছড়ি</a>
                <a href="#" class="bg-[#305477] text-white text-center rounded-lg mt-4 p-1">বান্দরবান</a>
                <a href="#" class="bg-[#305477] text-white text-center rounded-lg mt-4 p-1">সিরাজগঞ্জ</a>
                <a href="#" class="bg-[#305477] text-white text-center rounded-lg mt-4 p-1">পাবনা</a>
                <a href="#" class="bg-[#305477] text-white text-center rounded-lg mt-4 p-1">বগুড়া</a>
                <a href="#" class="bg-[#305477] text-white text-center rounded-lg mt-4 p-1">রাজশাহী</a>
                <a href="#" class="bg-[#305477] text-white text-center rounded-lg mt-4 p-1">নাটোর</a>
                <a href="#" class="bg-[#305477] text-white text-center rounded-lg mt-4 p-1">জয়পুরহাট</a>
                <a href="#" class="bg-[#305477] text-white text-center rounded-lg mt-4 p-1">চাঁপাইনবাবগঞ্জ</a>
                <a href="#" class="bg-[#305477] text-white text-center rounded-lg mt-4 p-1">নওগাঁ</a>

                <a href="#" class="bg-[#305477] text-white text-center rounded-lg mt-4 p-1">যশোর</a>
                <a href="#" class="bg-[#305477] text-white text-center rounded-lg mt-4 p-1">সাতক্ষীরা</a>
                <a href="#" class="bg-[#305477] text-white text-center rounded-lg mt-4 p-1">মেহেরপুর</a>
                <a href="#" class="bg-[#305477] text-white text-center rounded-lg mt-4 p-1">নড়াইল</a>
                <a href="#" class="bg-[#305477] text-white text-center rounded-lg mt-4 p-1">চুয়াডাঙ্গা</a>
                <a href="#" class="bg-[#305477] text-white text-center rounded-lg mt-4 p-1">কুষ্টিয়া</a>
                <a href="#" class="bg-[#305477] text-white text-center rounded-lg mt-4 p-1">মাগুরা</a>
                <a href="#" class="bg-[#305477] text-white text-center rounded-lg mt-4 p-1">খুলনা</a>
                <a href="#" class="bg-[#305477] text-white text-center rounded-lg mt-4 p-1">বাগেরহাট</a>
                <a href="#" class="bg-[#305477] text-white text-center rounded-lg mt-4 p-1">ঝিনাইদহ</a>

                <a href="#" class="bg-[#305477] text-white text-center rounded-lg mt-4 p-1">ঝালকাঠি</a>
                <a href="#" class="bg-[#305477] text-white text-center rounded-lg mt-4 p-1">পটুয়াখালী</a>
                <a href="#" class="bg-[#305477] text-white text-center rounded-lg mt-4 p-1">পিরোজপুর</a>
                <a href="#" class="bg-[#305477] text-white text-center rounded-lg mt-4 p-1">বরিশাল</a>
                <a href="#" class="bg-[#305477] text-white text-center rounded-lg mt-4 p-1">ভোলা</a>
                <a href="#" class="bg-[#305477] text-white text-center rounded-lg mt-4 p-1">বরগুনা</a>

                <a href="#" class="bg-[#305477] text-white text-center rounded-lg mt-4 p-1">সিলেট</a>
                <a href="#" class="bg-[#305477] text-white text-center rounded-lg mt-4 p-1">মৌলভীবাজার</a>
                <a href="#" class="bg-[#305477] text-white text-center rounded-lg mt-4 p-1">হবিগঞ্জ</a>
                <a href="#" class="bg-[#305477] text-white text-center rounded-lg mt-4 p-1">সুনামগঞ্জ</a>

                <a href="#" class="bg-[#305477] text-white text-center rounded-lg mt-4 p-1">নরসিংদী</a>
                <a href="#" class="bg-[#305477] text-white text-center rounded-lg mt-4 p-1">গাজীপুর</a>
                <a href="#" class="bg-[#305477] text-white text-center rounded-lg mt-4 p-1">শরীয়তপুর</a>
                <a href="#" class="bg-[#305477] text-white text-center rounded-lg mt-4 p-1">নারায়ণগঞ্জ</a>
                <a href="#" class="bg-[#305477] text-white text-center rounded-lg mt-4 p-1">টাঙ্গাইল</a>
                <a href="#" class="bg-[#305477] text-white text-center rounded-lg mt-4 p-1">কিশোরগঞ্জ</a>
                <a href="#" class="bg-[#305477] text-white text-center rounded-lg mt-4 p-1">মানিকগঞ্জ</a>
                <a href="#" class="bg-[#305477] text-white text-center rounded-lg mt-4 p-1">ঢাকা</a>
                <a href="#" class="bg-[#305477] text-white text-center rounded-lg mt-4 p-1">মুন্সিগঞ্জ</a>
                <a href="#" class="bg-[#305477] text-white text-center rounded-lg mt-4 p-1">রাজবাড়ী</a>
                <a href="#" class="bg-[#305477] text-white text-center rounded-lg mt-4 p-1">মাদারীপুর</a>
                <a href="#" class="bg-[#305477] text-white text-center rounded-lg mt-4 p-1">গোপালগঞ্জ</a>
                <a href="#" class="bg-[#305477] text-white text-center rounded-lg mt-4 p-1">ফরিদপুর</a>

                <a href="#" class="bg-[#305477] text-white text-center rounded-lg mt-4 p-1">পঞ্চগড়</a>
                <a href="#" class="bg-[#305477] text-white text-center rounded-lg mt-4 p-1">দিনাজপুর</a>
                <a href="#" class="bg-[#305477] text-white text-center rounded-lg mt-4 p-1">লালমনিরহাট</a>
                <a href="#" class="bg-[#305477] text-white text-center rounded-lg mt-4 p-1">নীলফামারী</a>
                <a href="#" class="bg-[#305477] text-white text-center rounded-lg mt-4 p-1">গাইবান্ধা</a>
                <a href="#" class="bg-[#305477] text-white text-center rounded-lg mt-4 p-1">ঠাকুরগাঁও</a>
                <a href="#" class="bg-[#305477] text-white text-center rounded-lg mt-4 p-1">রংপুর</a>
                <a href="#" class="bg-[#305477] text-white text-center rounded-lg mt-4 p-1">কুড়িগ্রাম</a>

                <a href="#" class="bg-[#305477] text-white text-center rounded-lg mt-4 p-1">শেরপুর</a>
                <a href="#" class="bg-[#305477] text-white text-center rounded-lg mt-4 p-1">ময়মনসিংহ</a>
                <a href="#" class="bg-[#305477] text-white text-center rounded-lg mt-4 p-1">জামালপুর</a>
                <a href="#" class="bg-[#305477] text-white text-center rounded-lg mt-4 p-1">নেত্রকোণা</a>

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