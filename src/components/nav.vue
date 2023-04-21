<style scoped>
.el-row{
  height: 100%;
}

.el-menu{
  border-right:none;
}
.el-aside{
  border-right: 1px solid #f5f1f1;
}
</style>

<template>
  <el-aside width="200px">
    <el-row class="tac">
      <el-col>
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
        >
          <el-menu-item index="1" @click="goPage('home')">
            <i class="el-icon-menu"></i>
            <span slot="title">首页</span>
          </el-menu-item>

          <el-menu-item index="2" @click="goPage('busInfo')">
            <i class="el-icon-bank-card"></i>
            <span slot="title">公交车信息</span>
          </el-menu-item>

          <el-menu-item index="3" @click="goPage('busStationInfo')">
            <i class="el-icon-wallet"></i>
            <span slot="title">站点信息</span>
          </el-menu-item>

          <el-menu-item index="4" @click="goPage('driverInfo')">
            <i class="el-icon-user"></i>
            <span slot="title">司机信息</span>
          </el-menu-item>

          <el-menu-item index="5" @click="goPage('manage')">
            <i class="el-icon-setting"></i>
            <span slot="title">管理</span>
          </el-menu-item>

          <el-menu-item index="6" @click="goPage('chat')">
            <i class="el-icon-chat-dot-round"></i>
            <span slot="title">聊天</span>
          </el-menu-item>

          
        </el-menu>
      </el-col>
    </el-row>
  </el-aside>
</template>

<script>
var $this = {};
export default {
  data() {
    return {};
  },
  beforeCreate() {
    $this = this;
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },

    goPage(link) {
      if (link === "home") {
        $this.$router.push("/").catch(error => error);
      } else if ((link == "chat")) {
        $this.$router.push("/chat").catch(error => error);
      } else if ((link == "busInfo")) {
        $this.$router.push("/busInfo").catch(error => error);
      } else if ((link == "busStationInfo")) {
        $this.$router.push("/busStationInfo").catch(error => error);
      } else if ((link == "driverInfo")) {
        $this.$router.push("/driverInfo").catch(error => error);
      } else if ((link == "manage")) {
        $this.$router.push("/manage").catch(error => error);
      } else {}
    }
  }
};
</script>
