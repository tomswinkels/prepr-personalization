<!-- ./pages/index.vue -->

<template>
    <component
        v-for="element in stack"
        :key="element._id"
        :is="getComponent(element.__typename)"
        :data="element"
    ></component>
</template>

<script setup>
import { computed } from "vue";
import { reactive } from "vue";
import PageHeader from "@/components/PageHeader";
import ImageAndText from "@/components/ImageAndText";
import { GetPageBySlug } from "@/queries/get-page-by-slug";

// Add this import to access the URL values like the UTM campaign
import { useRoute } from "vue-router";

// Get the utm campaign value from the URL
const route = useRoute();
const utm_campaign = (route.query.utm_campaign === undefined) ? "None" : route.query.utm_campaign;

const components = [
    { name: "PageHeader", comp: PageHeader },
    { name: "ImageAndText", comp: ImageAndText },
];

const getComponent = (name) => {
    const component = components.find((component) => component.name === name);
    return component ? component.comp : null;
};

const { data } = await useAsyncQuery(
    GetPageBySlug,
    {
        slug: "home",

        // Set the segment to the utm_campaign value assigned above
        segment: utm_campaign,
    }
);

const page = data.value.Page;

const stack = computed(() => {
    return page.stack;
});
</script>
