<template>
        <div class="container-fluid page-body-wrapper">
              <section class="checkout_area section-margin--small">
    <div class="container">
        <div class="billing_details">
            <div class="row" v-on:submit.prevent="Save">
                <div class="col-lg-8">
                    <h3>Pasang Iklan</h3>
                    <form class="row contact_form" action="#" method="post" novalidate="novalidate">
                        <div class="col-md-6 form-group p_star">
                            <input type="text" class="form-control" id="nama_barang" name="nama_barang" placeholder="Nama Barang" v-model="nama_barang">
                            <span class="placeholder" data-placeholder="First name"></span>
                        </div>
                        <div class="col-md-6 form-group p_star">
                            <input type="number" class="form-control" id="harga" name="harga" placeholder="Harga" v-model="harga">
                        </div>
                        <div class="col-md-12 form-group">
                            <input type="text" class="form-control" id="alamat" name="alamat" placeholder="Alamat" v-model="alamat">
                        </div>
                        <div class="col-md-6 form-group p_star">
                            <input type="file" name="gambar" id="gambar">                        
                        </div>
                        <div class="col-md-6 form-group p_star">
                            <input type="number" class="form-control" id="no_telpon" name="no_telpon" placeholder="No Telepon" v-model="no_telpon">
                        </div>
                        <div class="col-md-12 form-group p_star">
                          <textarea type="text" class="form-control" name="deskripsi" id="deskripsi" rows="1" placeholder="Deksripsi" v-model="deskripsi"></textarea>
                        </div>
                    </form>
                </div>
                <div class="col-lg-4">
                    <div class="order_box">
                        <h2>Pasang Sekarang</h2>
                        <p>Aroma adalah web penyalur penjual dan pembeli</p>
                        <div class="text-center">
								<button  type="submit" name="submit" value="SAVE" class="button button-login w-100">Pasang</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </section>
        
        </div>
</template>

<script>
export default {
     data() {
      return {
        nama_barang: '',
        alamat: '',
        harga: '',
        no_telpon: '',
        deskripsi: '',
        gambar: ''

      }
    },

    methods: {

        Save : function(){
      let conf = { headers: { "Authorization" : 'Bearer ' + this.key } };
      this.$bvToast.show("loadingToast");
      if(this.action === "insert"){
        let form = new FormData();
        form.append("id", this.id);
        form.append("nama_barang", this.nama_barang);
        form.append("alamat", this.alamat);
        form.append("harga", this.harga);
        form.append("no_telpon", this.no_telpon);
        form.append("deskripsi", this.deskripsi);
        form.append("gambar", this.gambar);

        this.axios.post("/iklan", form, conf)
        .then(response => {
          this.$bvToast.hide("loadingToast");
          if(this.search == ""){
            this.getData();
          } else {
            this.searching();
          }
          this.message = response.data.message;
          this.$bvToast.show("message");
        })
        .catch(error => {
          console.log(error);
        });
      } else {
        let form = {
          nama_barang: this.nama_barang,
          alamat: this.alamat,
          harga: this.harga,
          no_telpon: this.no_telpon,
          deskripsi: this.deskripsi,
          gambar: this.gambar,

        }
        this.axios.put("/iklan/" + this.id, form, conf)
        .then(response => {
          this.$bvToast.hide("loadingToast");
          if(this.search == ""){
            this.getData();
          } else {
            this.searching();
          }
          this.message = response.data.message;
          this.$bvToast.show("message");
        })
        .catch(error => {
          console.log(error);
        });
      }
    },
    }
}
</script>