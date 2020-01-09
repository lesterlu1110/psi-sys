<!--  -->
<template>
  <div>
    <el-container height="100%">
      <el-header>后台管理系统</el-header>
      <el-container>
        <el-aside width="200px">
          <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
            <el-radio-button :label="false">展开</el-radio-button>
            <el-radio-button :label="true">收起</el-radio-button>
          </el-radio-group> -->
          <el-menu
            default-active="1-4-1"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            :collapse="isCollapse"
          >
            <el-menu-item index="1" @click="nav01">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title">进销存</span>
              </template>
            </el-menu-item>
            <el-menu-item index="2" @click="nav02">
              <i class="el-icon-menu"></i>
              <span slot="title">员工信息</span>
            </el-menu-item>
            <el-menu-item index="3" >
              <i class="el-icon-document"></i>
              <span slot="title">产品损耗列表</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">组合产品</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-container>
          <el-main>

            <router-view/>

          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: false
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    nav01() {
      this.$router.push("/home");
    },
    nav02() {
      this.$router.push("/people");
    },
  }
};
</script>



<style  scoped>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
 
}

body > .el-container {
  margin-bottom: 40px;
  height: 100%;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 630px;
}
</style>