<script setup>
import { useUserStore } from '@/stores/useUserStore'

const userInfo = useUserStore().userInfo
// console.log(userInfo);
</script>

<template>
  <div>
    <h1>列表页面</h1>

    <ListItem />

    <div v-focus>
      focus
    </div>

    <strong>
      姓名：{{ userInfo.userName }}
      性别：{{ userInfo.sex }}
    </strong>
  </div>
</template>
