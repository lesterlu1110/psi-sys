<!--  -->
<template>
  <div>
    <el-row :gutter="12">
      <el-col :span="8">
        <el-card shadow="hover">
          <div slot="header" class="clearfix">
          <span>进货详情</span>
           </div>
          <el-button style="float: right; padding: 3px 0" type="text" @click="tap01">点击详情</el-button>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="hover">
          <div slot="header" class="clearfix">
          <span>销售详情</span>
          </div>
          <el-button style="float: right; padding: 3px 0" type="text" @click="tap02">点击详情</el-button>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="hover">
          <div slot="header" class="clearfix">
           <span>库存详情</span>
           </div>
          <el-button style="float: right; padding: 3px 0" type="text" @click="tap03">点击详情</el-button>
        </el-card>
      </el-col>
    </el-row>

     <!-- <div class="box"></div> -->

    <router-view/>

  </div>

 

</template>

<script>
export default {
  data() {
    return {};
  },
  methods:{
    tap01(){
      this.$router.push('/tap01')
    },
    tap02(){
      this.$router.push('/tap02')
    },
    tap03(){
      this.$router.push('/tap03')
    },
  }
};
</script>
<style  scoped>
.el-card{
  height: 100px;
}

</style>