<template>
  <el-card>
    <el-table
        :data="tableData"
        style="width: 100%"
    >
      <el-table-column fixed prop="name" label="交易柜编号" width="150" />
      <el-table-column prop="image" label="展示图片" width="120" >
        <template v-slot="scope">
          <img :src="'http://localhost:8080/appletImages/'+scope.row.image" width="50" height="50">
        </template>
      </el-table-column>
      <el-table-column prop="state" label="使用状态" width="120" />
      <el-table-column prop="ifOpen" label="柜门状态" width="120" />
      <el-table-column prop="goodsTitle" label="商品名称" width="120" />
      <el-table-column prop="goodsType" label="商品类型" width="120" />
      <el-table-column prop="goodsComments" label="商品描述" width="200" />
      <el-table-column prop="goodsPrice" label="商品价格" width="120" />
      <el-table-column prop="useType" label="商品状态" width="120" />
      <el-table-column fixed="right" label="管理交易柜" width="120">
        <template #default>
          <el-button type="primary" size="small">禁用该交易柜</el-button>
          <el-button type="primary" size="small">删除该交易柜</el-button>
          <el-button type="primary" size="small">更改柜门状态</el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script setup>
import { ref } from 'vue'
import axios from '@/util/axios'

const tableData =ref([])

const initBoxList=async ()=>{
  const res = await axios.get("box/findBox")
  console.log(res.data)
  let resultData = res.data.data
  let goodsType=["鞋类","服饰","数码产品","护肤彩妆","食品饮料","运动器械","日常用品","其他"]

  console.log(resultData.length);
  for(let i=0; i<resultData.length; i++){
    if(resultData[i].state==0){
      resultData[i].state="未使用"
    }else{
      resultData[i].state="使用中"
    }
    if(resultData[i].ifOpen==0){
      resultData[i].ifOpen="关闭"
    }else{
      resultData[i].ifOpen="开启"
    }
    if(resultData[i].useType==1){
      resultData[i].useType="待出售"
    }else if(resultData[i].useType==2){
      resultData[i].useType="待取货"
    }
    if(resultData[i].goodsType==0){
      resultData[i].goodsType=""
    }else{
      resultData[i].goodsType=goodsType[resultData[i].goodsType-1]
    }
  }

  tableData.value=resultData
}

initBoxList();


</script>

<style lang="scss" scoped>
.header{
  padding-bottom: 16px;
  box-sizing: border-box;
}
.el-pagination{
  padding-top: 15px;
  box-sizing: border-box;
}
.el-button--small{
  margin-bottom: 2px;
}
.el-button+.el-button{
  margin-left: 0px;
  margin-bottom: 2px;
}
</style>