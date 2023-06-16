<script setup>
import { useUserStore } from '@/stores/useUserStore'

const userInfo = useUserStore().userInfo
console.log(userInfo)
</script>

<template>
  <div>
    <!-- <NuxtWelcome /> -->
    <!-- 路由出口 -->
    <NuxtLayout name="header" />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <NuxtLayout name="footer" />
  </div>
</template>
