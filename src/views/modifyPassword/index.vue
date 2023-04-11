<template>
  <el-card>
    <el-form
        ref="formRef"
        :model="form"
        :rules="rules"
        label-width="150px"
    >
      <el-form-item label="用户名" prop="username">
        <el-input v-model="form.username" />
      </el-form-item>
      <el-form-item label="原密码" prop="oldPassword">
        <el-input v-model="form.oldPassword" type="password"/>
      </el-form-item>
      <el-form-item label="新密码" prop="newPassword">
        <el-input v-model="form.newPassword" type="password"/>
      </el-form-item>
      <el-form-item label="确认密码" prop="confirmPassword">
        <el-input v-model="form.confirmPassword" type="password"/>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">确认修改</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script setup>
import { ref } from 'vue'
import {ElMessage} from 'element-plus'
import axios from '@/util/axios'

const form=ref({
  username:"",
  password:"",
  oldPassword:"",
  newPassword:"",
  confirmPassword:""
})

const rules=ref({
  username:[
    { required: true,message:'请输入用户名！'}
  ],
  oldPassword:[
    { required: true,message:'请输入原密码！'}
  ],
  newPassword:[
    { required: true,message:'请输入新密码！'}
  ],
  confirmPassword:[
    { required: true,message:'请确认新密码！'}
  ]
})

const formRef=ref(null)

const initFormData=()=>{
  let userInfoJson=window.sessionStorage.getItem("userInfo");
  form.value=JSON.parse(userInfoJson);
}

initFormData();

const onSubmit=()=>{
  formRef.value.validate(async(valid)=>{
    if(valid){
      console.log("success")
      if(form.value.oldPassword!==form.value.password){
        ElMessage.error("原密码填写错误！")
      }else if(form.value.newPassword!==form.value.confirmPassword){
        ElMessage.error("两次密码填写不一致！")
      }else{
        try{
          let username = form.value.username;
          let password = form.value.newPassword;
          console.log(username);
          console.log(password);
          let result=await axios.post("admin/modifyPassword", {username,password});
          let data=result.data;
          if(data.code==0){
            ElMessage.success("密码修改成功，重新登陆后生效")
            formRef.value.resetFields();
          }else{
            ElMessage.error(data.message)
          }
        }catch (err) {
          ElMessage.error("系统运行出错，请联系管理员")
        }
      }
    }else{
      console.log("fail")
    }
  })
}

</script>

<style lang="scss" scoped>

.el-input{
  width: 300px;
}
</style>