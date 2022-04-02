<template>
  <div class="px-6 py-10 lg:px-20">
    <h1
      class="text-gray-dark text-lg lg:text-3xl font-bold text-bold mb-10 text-center"
    >
      Buscador de noticias Scrapoli
    </h1>

    <!-- componente buscador -->
    <div class="flex mb-10">
      <input
        type="text"
        name="searching"
        placeholder="Buscar noticias"
        class="w-full h-12 rounded-lg px-4"
      />
      <button class="bg-blue text-white px-4 py-2 rounded-md mx-4">
        Buscar
      </button>
    </div>
    <!-- componente buscador -->
    <div class="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <CardComponent v-for="item in 6" :key="item" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CardComponent from "@/components/CardComponent";

export default {
  name: "Home",
  components: {
    CardComponent,
  },
};
</script>
