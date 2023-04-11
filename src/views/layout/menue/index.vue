<template>
  <el-menu
      active-text-color="#ffd04b"
      background-color="#9A2B1EFF"
      class="el-menu-vertical-demo"
      default-active="home"
      text-color="#fff"
      router
  >
    <el-menu-item index="home">
      <el-icon><home-filled /></el-icon>
      <span>首页</span>
    </el-menu-item>

    <el-menu-item index="notification">
      <el-icon><bell /></el-icon>
      <span>公告管理</span>
    </el-menu-item>

    <el-menu-item index="user">
      <el-icon><user /></el-icon>
      <span>用户管理</span>
    </el-menu-item>

    <el-menu-item index="product">
      <el-icon><message-box /></el-icon>
      <span>交易柜管理</span>
    </el-menu-item>

    <el-menu-item index="order">
      <el-icon><tickets /></el-icon>
      <span>订单管理</span>
    </el-menu-item>

    <el-sub-menu index="11">
      <template #title >
        <el-icon><management /></el-icon>
        <span>系统管理</span>
      </template>
      <el-menu-item index="modifyPassword">
        <el-icon><edit /></el-icon>
        <span>修改密码</span>
      </el-menu-item>
      <el-menu-item index="addAdmin">
        <el-icon><plus /></el-icon>
        <span>添加管理员</span>
      </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script setup>
import {
  HomeFilled,
    Bell,
    User,
    MessageBox,
    Tickets,
    Management,
    Edit,
    Plus
}from '@element-plus/icons-vue'

import { useStore } from 'vuex'
const store=useStore();
const logout=()=>{
  store.dispatch('logout')
}

</script>

<style lang="scss" scoped>

</style>