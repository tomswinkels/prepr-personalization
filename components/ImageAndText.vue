<!-- ./components/ImageAndText.vue -->

<template>
    <div class="container mx-auto md:px-0">
        <section class="bg-white">
            <div
                class="items-center max-w-screen-xl gap-8 px-4 py-8 mx-auto  xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6"
            >
                <!-- Put image on page to the left or right based on the position defined in Prepr -->
                <img
                    :class="data.image_position === 'Right' ? 'order-last' : ''"
                    class="object-cover w-full rounded-lg shadow-xl  h-60 md:h-96"
                    :src="data.image[0]?.url"
                    alt="dashboard image"
                />
                <div class="mt-8 md:mt-4 md:mt-0">
                    <!--Text heading-->
                    <h2
                        class="mb-4 text-xl font-extrabold tracking-tight text-center text-gray-900  md:text-left md:text-4xl"
                    >
                        {{ data.title }}
                    </h2>
                    <!--Text body -->
                    <p
                        class="font-light text-center text-gray-500  md:mb-6 md:text-left md:text-lg"
                    >
                        {{ data.text }}
                    </p>
                </div>
            </div>
        </section>
    </div>
</template>

<!-- Add a script to fetch the data -->
<script setup>

import { computed } from "vue";

// Pass the data as props to the page
const props = defineProps(["data"]);
const data = computed(() => props.data);

</script>
