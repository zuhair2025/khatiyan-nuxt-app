<template>
    <MainLayout>
        <div class="flex flex-col border border-gray-300 rounded-md mx-4 mt-4">
            <div class="bg-[#F8F7FE] p-4">
                <h1 class="text-3xl">খতিয়ানের তথ্য অনুসন্ধান</h1>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-4 p-5 gap-4">
                <!-- column 1  -->
                <div class="flex flex-col gap-4">
                    <div class="grid md:grid-cols-2 grid-cols-1">
                        <p>বিভাগ:</p> 
                        <input type="text" class="w-full border border-gray-300 rounded-md">
                    </div>
                    <div class="grid md:grid-cols-2 grid-cols-1">
                        <p>মৌজা:</p> 
                        <input type="text" class="border border-gray-300 rounded-md">
                    </div>
                    <div class="grid md:grid-cols-2 grid-cols-1">
                        <p>বর্তমান খতিয়ান:</p> 
                        <input type="text" class="border border-gray-300 rounded-md">
                    </div>
                    <div class="grid md:grid-cols-2 grid-cols-1">
                        <p class="">এন. আইডি:</p> 
                        <input type="text" class="border border-gray-300 rounded-md">
                    </div>
                    <div class="grid md:grid-cols-2 grid-cols-1">
                        <p>সাবেক দাগ:</p> 
                        <input type="text" class="border border-gray-300 rounded-md">
                    </div>
                    <div class="grid md:grid-cols-2 grid-cols-1">
                        <p>মোবাইল নম্বর:</p> 
                        <input type="text" class="border border-gray-300 rounded-md">
                    </div>
                </div>
                <!-- column 2 -->
                <div class="flex flex-col gap-4">
                    <div class="grid md:md:grid-cols-2 grid-cols-1 grid-cols-1">
                        <p>জেলা:</p> 
                        <input type="text" class="border border-gray-300 rounded-md">
                    </div>
                    <div class="grid md:grid-cols-2 grid-cols-1">
                        <p>মালিক:</p> 
                        <input type="text" class="border border-gray-300 rounded-md">
                    </div>
                    <div class="grid md:grid-cols-2 grid-cols-1">
                        <p>জন্ম নিবন্ধন:</p> 
                        <input type="text" class="border border-gray-300 rounded-md">
                    </div>
                    <div class="grid md:grid-cols-2 grid-cols-1">
                        <p>সি.এস.দাগ:</p> 
                        <input type="text" class="border border-gray-300 rounded-md">
                    </div>
                </div>
                <!-- column 3 -->
                <div class="flex flex-col gap-4">
                    <div class="grid md:grid-cols-2 grid-cols-1">
                        <p>জরিপ:</p> 
                        <input type="text" class="w-full border border-gray-300 rounded-md">
                    </div>
                    <div class="grid md:grid-cols-2 grid-cols-1">
                        <p>পিতা:</p> 
                        <input type="text" class="border border-gray-300 rounded-md">
                    </div>
                    <div class="grid md:grid-cols-2 grid-cols-1">
                        <p>সাবেক খতিয়ান:</p> 
                        <input type="text" class="border border-gray-300 rounded-md">
                    </div>
                    <div class="grid md:grid-cols-2 grid-cols-1">
                        <p class="">মালিকের ঠিকানা:</p> 
                        <input type="text" class="border border-gray-300 rounded-md">
                    </div>
                   
                </div>
                <!-- Column 4 -->
                <div class="flex flex-col gap-4">
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
                </div>
            </div>
            <div class="p-5 flex justify-end">
                <a class="bg-[#0069D9] text-white text-xl p-2 rounded-md" href="#">ফলাফল দেখাও</a>
            </div>
        </div>
    </MainLayout>
</template>

<script setup>
import MainLayout from '~/layouts/MainLayout.vue';
</script>