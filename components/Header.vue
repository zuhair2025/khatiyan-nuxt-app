<template>
<div class="flex justify-between bg-[#4F985F] text-xs text-white p-4 gap-2 md:text-lg md:p-2">
      <p>ভূমি রেকর্ড ও জরিপ অধিদপ্তর</p>
      <p>শুক্রবার, ২০ মাঘ, ১৪৩০ / 3 ফেব্রুয়ারি, 2024</p>
    </div>
    <div class="flex flex-col md:grid md:grid-cols-3">
        <div class="flex justify-between">
        <NuxtLink class="w-2/3 h-auto mt-2" to="/">
            <img  src="/settlement-banner.svg" alt="">
          </NuxtLink>
          <!-- <img class="w-2/3 h-auto" src="/settlement-banner.svg" alt=""> -->
          <img class="h-[55px]" src="/smartloog.png" alt="">
        </div>
        <div class="flex justify-center gap-2 mt-2">
          <div class="flex flex-col gap-1">
            <a class="rounded-lg bg-[#000000] text-white font-b text-sm p-1" href="">বিভাগ</a>
            <a class="rounded-lg bg-[#090654] text-white text-center font-b text-sm p-1" href="">৮</a>
          </div>
          <div class="flex flex-col gap-1">
            <a class="rounded-lg bg-[#000000] text-white font-b text-sm p-1" href="">জোন সংখ্যা</a>
            <a class="rounded-lg bg-[#090654] text-white text-center font-b text-sm p-1" href="">১৮</a>
          </div>
          <div class="flex flex-col gap-1">
            <a class="rounded-lg bg-[#000000] text-white font-b text-sm p-1" href="">জেলা</a>
            <a class="rounded-lg bg-[#090654] text-white text-center font-b text-sm p-1" href="">৬৪</a>
          </div>
          <div class="flex flex-col gap-1">
            <a class="rounded-lg bg-[#000000] text-white font-b text-sm p-1" href="">উপজেলা/থানা</a>
            <a class="rounded-lg bg-[#090654] text-white text-center font-b text-sm p-1" href="">৪৯২</a>
          </div>
        </div>
    </div>
    <!-- Menu -->
    <div class="px-4 py-4 bg-[#FAFFFE]">
        <ul class="flex flex-col md:flex-row gap-4 text-[#5E6B2B] text-xl border-b border-green-600 pb-2">
            <NuxtLink class="hover:bg-[#5E6B2B] hover:text-white hover:p-1 hover:rounded-md" to="/"> <UIcon name="i-heroicons-home" /> </NuxtLink>
            <!-- <UDropdown :items="items" mode="hover" :popper="{ placement: 'bottom-start' }"> -->
                <!-- <ULink class="hover:bg-[#5E6B2B] hover:text-white hover:p-1 hover:rounded-md">
                    সাধারণ তথ্য
                </ULink> -->
                <!-- <UButton color="white" label="সাধারণ তথ্য" trailing-icon="i-heroicons-chevron-down-20-solid" /> -->
            <!-- </UDropdown> -->
            <!-- <NuxtLink class="hover:bg-[#5E6B2B] hover:text-white hover:p-1 hover:rounded-md" to="/">সাধারণ তথ্য</NuxtLink> -->
            <!-- <NuxtLink class="hover:bg-[#5E6B2B] hover:text-white hover:p-1 hover:rounded-md border-r border-gray-300 pr-1 border-dotted" to="/">ম্যাপ প্রদর্শন</NuxtLink> -->
            <NuxtLink class="hover:bg-[#5E6B2B] hover:text-white hover:p-1 hover:rounded-md border-r border-gray-300 pr-1 border-dotted" to="/jobapplication">চাক‌রির আবেদন</NuxtLink>
            <NuxtLink class="hover:bg-[#5E6B2B] hover:text-white hover:p-1 hover:rounded-md border-r border-gray-300 pr-1 border-dotted" to="/">হেল্প লাইন</NuxtLink>
            <NuxtLink class="hover:bg-[#5E6B2B] hover:text-white hover:p-1 hover:rounded-md border-r border-gray-300 pr-1 border-dotted" to="/contact">যোগাযোগ</NuxtLink>
            <UDropdown :items="login" :popper="{ placement: 'bottom-start' }">
              <UButton class="bg-[#5E6B2B] text-white px-2 hover:bg-[#5E6B2B] hover:text-white pr-1" color="white" label="লগিন" trailing-icon="i-heroicons-chevron-down-20-solid" />
            </UDropdown>
        </ul>
    </div>
</template>

<script setup>
const items = [
  [{
    label: 'অফিস সমূহ',
    to: 'offices'
  }],
  [{
    label: 'মৌজা তালিকা',
  }]
]
const login = [[{label: 'নাগরিক',to:'login-civil'}],[{label: 'অফিস',to:'login-office'}]]
</script>