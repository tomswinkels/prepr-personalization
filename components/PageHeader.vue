<!-- ./components/PageHeader.vue -->

<template>
    <!-- Set background image -->
    <section
        :style="`background-image: url(${data.image[0].url})`"
        class="my-12 flex items-center h-[600px]"
        :class="`
        bg-no-repeat bg-cover
      `"
    >
        <div class="container mx-auto md:px-0">

            <h1
                class="mb-4 text-3xl font-extrabold leading-none tracking-tight text-white md:text-6xl md:text-5xl lg:text-6xl"
            >
                <!-- Set heading -->
                {{ data.heading }}
            </h1>

            <p
                class="mb-8 text-base font-normal text-white md:text-lg lg:text-xl"
            >
                <!-- Set main text of page header -->
                {{ data.text }}
            </p>
            <a
                href="#"
                class="
            inline-flex
            items-center
            px-6
            py-3.5
            text-sm
            font-medium
            text-center text-white
            rounded-lg
            bg-violet-700
            hover:bg-violet-800
            focus:ring-4 focus:outline-none focus:ring-violet-300
          "
            >
                <!-- Set the Call to action link in the page header-->
                {{ data.cta_label }}
                <svg
                    aria-hidden="true"
                    class="w-5 h-5 ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                ><path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                ></path></svg>
            </a>
        </div>
    </section>
</template>

<!-- Add a script to fetch the data -->
<script setup>

import { computed } from "vue";

// Pass the data as props to the page
const props = defineProps(["data"]);
const data = computed(() => props.data);
const hasImage = computed(() => "image" in props.data);

</script>
