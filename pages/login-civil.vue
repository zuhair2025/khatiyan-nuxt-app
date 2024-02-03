<template>
    <MainLayout>
        <div class="mx-4 border border-stela py-8 px-4 my-10 rounded-md md:max-w-sm md:mx-auto">
            <h1 class="text-3xl mb-5 text-green-600">নাগরিক লগইন</h1>
            <UFormGroup label="মোবাইল নম্বর">
                <UInput />
            </UFormGroup>
            <UFormGroup class="mt-5" label="পাসওয়ার্ড">
                <UInput placeholder="পাসওয়ার্ড" />
            </UFormGroup>
            <h1></h1>
            <UButton color="primary" class="mt-4" variant="solid" block>লগইন</UButton>

        </div>
    </MainLayout>
</template>

<script setup>
import MainLayout from '~/layouts/MainLayout.vue';
</script>
