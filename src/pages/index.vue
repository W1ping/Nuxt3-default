<template>
  <div>
    <NuxtLayout name="header"/>
    <NuxtLink to="/list">进入列表页====>>></NuxtLink>
  </div>
</template>

<script setup>
  const foo = useFoo()
  console.log('foo==========>>', foo.value)
  const route = useRoute()
  const { data: mountain } = await useFetch(`https://api.nuxtjs.dev/mountains/${route.params.slug}`)
  console.log(mountain)
</script>