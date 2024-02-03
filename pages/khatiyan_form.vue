<template>
    <MainLayout>
        <div class="flex flex-col border border-gray-300 rounded-md mx-4 mt-4">
            <div class="bg-[#F8F7FE] p-4">
                <h1 class="text-3xl">খতিয়ানের আবেদন</h1>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 p-5 gap-4">
                <!-- column 1  -->
                <div class="flex flex-col gap-4">
                    <div class="grid md:grid-cols-2 grid-cols-1">
                        <p>বিভাগ:</p> 
                        <USelect v-model="division" :options="divisions" />
                    </div>
                    <div class="grid md:grid-cols-2 grid-cols-1">
                        <p>জেলা:</p> 
                        <USelect v-model="division" :options="divisions" />
                    </div>
                    <div class="grid md:grid-cols-2 grid-cols-1">
                        <p>উপ‌জেলা:</p> 
                        <USelect v-model="division" :options="divisions" />
                    </div>
                    <div class="grid md:grid-cols-2 grid-cols-1">
                        <p>ইউনিয়ন:</p> 
                        <USelect v-model="division" :options="divisions" />
                    </div>
                   
                </div>
                <!-- column 2 -->
                <div class="flex flex-col gap-4">
                    <div class="grid md:grid-cols-2 grid-cols-1">
                        <p class="">আবেদনকারীর নাম:</p> 
                        <UInput />
                        <!-- <input type="text" class="border border-gray-300 rounded-md"> -->
                    </div>
                    <div class="grid md:grid-cols-2 grid-cols-1">
                        <p>পিতা নাম:</p> 
                        <UInput />
                    </div>
                    <div class="grid md:grid-cols-2 grid-cols-1">
                        <p>মাতার নাম:</p> 
                        <UInput />
                    </div>
                    <div class="grid md:md:grid-cols-2 grid-cols-1">
                        <p>জন্ম তা‌রিখ:</p> 
                        <UInput />
                    </div>
                    
                    <div class="grid md:grid-cols-2 grid-cols-1">
                        <p>মোবাইল নং:</p> 
                       <UInput />
                    </div>
                </div>
                <!-- column 3 -->
                <div class="flex flex-col gap-4">
                    <div class="grid md:grid-cols-2 grid-cols-1">
                        <p>ভোটার আইডি নং:</p> 
                       <UInput />
                    </div>
                    <div class="grid md:grid-cols-2 grid-cols-1">
                        <p>ইমেইল:</p> 
                       <UInput />
                    </div>
                    <div class="grid md:grid-cols-2 grid-cols-1">
                        <p>জরিপ:</p> 
                        <input type="text" class="w-full border border-gray-300 rounded-md">
                    </div>
                    <div class="grid md:grid-cols-2 grid-cols-1">
                        <p>বর্তমান পেশা:</p> 
                       <UInput />
                    </div>
                    <div class="grid md:grid-cols-2 grid-cols-1">
                        <p>রেফারেন্স নং:</p> 
                       <UInput />
                    </div>
                    <!-- <div class="grid md:grid-cols-2 grid-cols-1">
                        <p class="">মালিকের ঠিকানা:</p> 
                        <input type="text" class="border border-gray-300 rounded-md">
                    </div> -->
                   
                </div>
                <!-- Column 4 -->
                <!-- <div class="flex flex-col gap-4">
                    <div class="grid md:grid-cols-2 grid-cols-1">
                        <p>থানা:</p> 
                        <input type="text" class="w-full border border-gray-300 rounded-md">
                    </div>
                    <div class="grid md:grid-cols-2 grid-cols-1">
                        <p>মাতা:</p> 
                        <input type="text" class="border border-gray-300 rounded-md">
                    </div>
                    <div class="grid md:grid-cols-2 grid-cols-1">
                        <p>বর্তমান দাগ:</p> 
                        <input type="text" class="border border-gray-300 rounded-md">
                    </div>
                    <div class="grid md:grid-cols-2 grid-cols-1">
                        <p class="">স্বামী / স্ত্রী:</p> 
                        <input type="text" class="border border-gray-300 rounded-md">
                    </div>
                </div> -->
            </div>
            <div class="p-5 flex justify-end">
                <a class="bg-[#0069D9] text-white text-xl p-2 rounded-md" href="#">ফলাফল দেখাও</a>
            </div>
        </div>
    </MainLayout>
</template>

<script setup>
import MainLayout from '~/layouts/MainLayout.vue';

const countries = ['United States', 'Canada', 'Mexico']
const divisions = ['select','ঢাকা','চট্টগ্রাম','সিলেট','রাজশাহী','খুলনা','বরিশাল']
const district = ['']
const subdistrict = ['']
const country = ref(countries[0])
const division = ref(divisions[0])

</script>