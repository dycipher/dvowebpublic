<template>
  <div class="background">
    <div class="">
      <section class="hero is-medium background">
        <div class="hero-body">
          <div class="container">
            <div class="columns is-desktop">
              <div class="column is-one-fourth">
                <div class="card  card-equal-height has-text-centered">
                  <div class="card-image py-4 px-4">
                    <figure class="image is-square">
                      <img src="warranty_credit.png" alt="Placeholder image">
                    </figure>
                  </div>
                  <div class="card-content">
                    <div class="content">
                      <p class="title is-4 has-text-white">Warranty Credit Request</p>
                      <p class="subtitle is-6  mt-2 has-text-white">
                        Create and review your credit requests for work you have performed on your customers DVO product
                        that is covered under warranty.
                      </p>
                    </div>
                  </div>
                  <div class="card-footer pb-6">
                    <p class="card-footer-item">
                      <button class="button is-dvogreen">Check It Out</button>
                    </p>
                  </div>
                </div>
              </div>
              <div class="column is-one-fourth">
                <div class="card  card-equal-height has-text-centered">
                  <div class="card-image py-4 px-4">
                    <figure class="image is-square">
                      <img src="marketing.png" alt="Placeholder image">
                    </figure>
                  </div>
                  <div class="card-content">
                    <div class="content">
                      <p class="title is-4 has-text-white">Marketing Material</p>
                      <p class="subtitle is-6  mt-2 has-text-white">
                        Get acces to all the visual tools to help you market and sell DVO Suspension. Manuals & tech
                        documents are included
                      </p>
                    </div>
                  </div>
                  <div class="card-footer pb-6">
                    <p class="card-footer-item">
                      <button class="button is-dvogreen">Check It Out</button>
                    </p>

                  </div>
                </div>
              </div>
              <div class="column is-one-fourth">
                <div class="card  card-equal-height has-text-centered">
                  <div class="card-image py-4 px-4">
                    <figure class="image is-square">
                      <img src="fork.png" alt="Placeholder image">
                    </figure>
                  </div>
                  <div class="card-content">
                    <div class="content">
                      <p class="title is-4 has-text-white">Latest Updates</p>
                      <p class="subtitle is-6  mt-2 has-text-white">
                        We're always working to improve user experience and product performance. Stay up to date with
                        the latest tech and service bulletins
                      </p>
                    </div>
                  </div>
                  <div class="card-footer pb-6">
                    <p class="card-footer-item">
                      <button class="button is-dvogreen">Check It Out</button>
                    </p>

                  </div>
                </div>
              </div>
              <div class="column is-one-fourth">
                <div class="card  card-equal-height has-text-centered">
                  <div class="card-image py-4 px-4">
                    <figure class="image is-square">
                      <img src="shocking.png" alt="Placeholder image">
                    </figure>
                  </div>
                  <div class="card-content">
                    <div class="content">
                      <p class="title is-4 has-text-white">Pricing & E-Catalogue</p>
                      <p class="subtitle is-6  mt-2 has-text-white">
                        Access the most recent price sheets, eCatalog and data import files
                      </p>
                    </div>
                  </div>
                  <div class="card-footer pb-6">
                    <p class="card-footer-item">
                      <button class="button is-dvogreen">Check It Out</button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {

  }
}
</script>

<style>
.background{
  background-image: url("/bike_background.png");
  background-position: center;
  background-size: cover;
}

.card {
  border-radius: 20px;

}

.title{
  font-family:  'Anton', sans-serif;
}

.subtitle{
  font-family: 'Roboto', sans-serif;
  font-weight: 100;
}

/* .{
  display: flex;
  flex-direction: column;
  height: 100%;
}

.columns button{
  margin-top: auto;
} */

.card-equal-height {
   display: flex;
   flex-direction: column;
   height: 100%;
}
.card-equal-height .card-footer {
  margin-top: auto;
}

.card-footer{
  border: none;
}

</style>
