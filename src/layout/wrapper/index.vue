<template>
    <div class="wrapper">
        <div class="header-wrapper">
            <top></top>
            <menu1></menu1>
        </div>
        <div class="page-wrapper">
            <div class="page-content">
                <router-view></router-view>
            </div>
        </div>
        <footer1></footer1>
    </div> 
</template>
<script>    
export default {
    name : "app",
    components : {
        menu1,
        top,
        footer1
    }
}
    import menu1 from "../components/menu.vue"
    import top from "../components/top_client.vue"
    import footer1 from "../components/footer.vue"
    import "../../assets/js/bootstrap.bundle.min.js";
    import "../../assets/js/jquery.min.js";
    import "../../assets/plugins/simplebar/js/simplebar.min.js";
    import "../../assets/plugins/metismenu/js/metisMenu.min.js";
    import "../../assets/plugins/perfect-scrollbar/js/perfect-scrollbar.js";
    import "../../assets/js/index.js";
    import "../../assets/js/app.js";
    import "../../assets/js/pace.min.js";
</script>
<style>
@import "../../assets/plugins/simplebar/css/simplebar.css";
@import "../../assets/plugins/perfect-scrollbar/css/perfect-scrollbar.css";
@import "../../assets/plugins/metismenu/css/metisMenu.min.css";
@import "../../assets/css/pace.min.css";
@import "../../assets/css/bootstrap.min.css";
@import "../../assets/css/bootstrap-extended.css";
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap");
@import "../../assets/css/app.css";
@import "../../assets/css/icons.css";
@import "../../assets/css/dark-theme.css";
@import "../../assets/css/semi-dark.css";
@import "../../assets/css/header-colors.css";
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css");
</style>