<template>
  <d2-container class="page">
    <!-- <d2-page-cover> -->
      <!-- <d2-icon-svg class="logo" name="d2-admin"/> -->
      <div class="content">浩东净化</div>
    <!-- </d2-page-cover> -->
  </d2-container>
</template>

<script>
import D2HelpBtn from './components/d2-help-btn/index'
import D2Badge from './components/d2-badge/index'
import D2PageCover from './components/d2-page-cover/index'
export default {
  components: {
    D2HelpBtn,
    D2Badge,
    D2PageCover
  }
}
</script>

<style lang="scss" scoped>
.page {

  .btn-group {
    color: $color-text-placehoder;
    font-size: 12px;
    margin-top: 10px;
    margin-bottom: 10px;
    .btn-group__btn {
      color: $color-text-sub;
      &:hover {
        color: $color-text-main;
      }
      &.btn-group__btn--link {
        color: $color-primary;
      }
    }
  }
  .content{
    height: 100%;
    font-size:30px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
