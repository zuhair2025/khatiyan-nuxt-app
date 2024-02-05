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
                    <div class="grid md:grid-cols-2 grid-cols-1">
                        <p>Nid নং:</p> 
                        <UInput />
                    </div>
                    <div class="grid md:md:grid-cols-2 grid-cols-1">
                        <p>জন্ম তা‌রিখ:</p> 
                        <USelect v-model="year" :options="years" />
                    </div>
                    <div class="grid md:md:grid-cols-2 grid-cols-1">
                        <p></p>
                        <USelect v-model="month" :options="months" />
                    </div>
                    <div class="grid md:md:grid-cols-2 grid-cols-1">
                        <p></p>
                        <USelect v-model="day" :options="days" />
                    </div>
                    <div class="grid md:grid-cols-2 grid-cols-1">
                        <p>মোবাইল নং:</p> 
                       <UInput />
                    </div>
                </div>
                <!-- column 3 -->
                <div class="flex flex-col gap-4">
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
const years = ['বছর','1950','1951','1952','1953','1954','1955','1956','1957','1958','1959','1960','1961','1962','1963','1964',
'1965','1966','1967','1968','1969','1970','1971','1972','1973','1974','1975','1976','1977','1978','1979','1980','1981',
'1982','1983','1984','1985','1986','1987','1988','1989','1990','1991','1992','1993','1994','1995','1996','1997','1998','1999',
'2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2018','2019','2020','2021','2022','2023','2024']

const months = ['মাস','January','February','March','April','May','June','July','August','September','October','November','December']

const days = ['দিন','1','2','3','4','5','6','7','8','9','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30']
const district = ['']
const subdistrict = ['']
const country = ref(countries[0])
const division = ref(divisions[0])
const month = ref(months[0])
const year = ref(years[0])
const day = ref(days[0])


</script>