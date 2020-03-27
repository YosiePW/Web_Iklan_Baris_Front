<template>
	<header class="header_area">
    <div class="main_menu">
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container">
          <a class="navbar-brand logo_h" href="index.html"><img src="img/logo.png" alt=""></a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <div class="collapse navbar-collapse offset" id="navbarSupportedContent">
            <ul class="nav navbar-nav menu_nav ml-auto mr-auto">
              <li class="nav-item"><a class="nav-link" href="/homeuser">Home</a></li>
              <li class="nav-item"><a class="nav-link" href="/kategori">Kategori</a></li>
              <li class="nav-item"><a class="nav-link" href="/iklan">Iklan Saya</a></li>
              <li class="nav-item"><a class="nav-link" href="/form">Pasang Iklan</a></li>
            </ul>

            <ul class="nav-shop">
              <li class="nav-item"><button><i class="ti-search"></i></button></li>
              <li class="nav-item"><a class="button button-header" @click="logout">Logout</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
    name: 'navbar',
    computed : {
        isLoggedIn : function(){ return this.$store.getters.isLoggedIn}
    },
    methods:{
      logout:function(){
          let conf = { headers : {"Authorization" : "Bearer " + localStorage.getItem("Authorization")} };
          let form = new FormData();
          this.axios.post('/logout', form, conf).then(response => {
            if (response.data.logged === false || response.data.status === 0) {
                this.$store.commit('logout')
                localStorage.removeItem("Authorization")
                this.$router.push({name: 'login'})
            }
          }).catch(error => {

        });
      },
  },
}
</script>