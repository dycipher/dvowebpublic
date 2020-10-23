<template>
  <div id="app">
    <Navbar>
    </Navbar>
    <router-view/>
    <Footer>
    </Footer>
  </div>
</template>


<script>
import Navbar from './components/Navbar'
import Footer from './components/Footer'
export default {
  components: {
    Navbar,
    Footer
  }
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Anton&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
@import "~bulma/sass/utilities/_all";

// Set your colors
$primary: #8c67ef;
$primary-invert: findColorInvert($primary);
$twitter: #4099FF;
$twitter-invert: findColorInvert($twitter);
$dvoblack: #111900;
$dvogreen: #82bc00;
$dvogreen-invert: findColorInvert($dvogreen);
$dvodark: #1a1a1a;
$dvodark-invert: findColorInvert($dvodark);

// Setup $colors to use as bulma classes (e.g. 'is-twitter')
$colors: (
    "white": ($white, $black),
    "black": ($black, $white),
    "light": ($light, $light-invert),
    "dark": ($dark, $dark-invert),
    "primary": ($primary, $primary-invert),
    "info": ($info, $info-invert),
    "success": ($success, $success-invert),
    "warning": ($warning, $warning-invert),
    "danger": ($danger, $danger-invert),
    "twitter": ($twitter, $twitter-invert),
    "dvogreen": ($dvogreen, $dvogreen-invert),
    "dvodark": ($dvodark, $dvodark-invert)
);
// Links
$link: $dvogreen;
$link-invert: $dvogreen;
$link-focus-border: $dvogreen;

$card-background-color: $dvodark;
$card-color: $white;
$card-header-color: $white;

$background: #222222;

$label-color: $white;

$navbar-background-color:$dvodark;
$navbar-item-color: #d0cfce;
$navbar-item-hover-background-color: #2e2e2e;

$footer-background-color: $black;
$footer-color: white;


// Import Bulma and Buefy styles
@import "~bulma";
@import "~buefy/src/scss/buefy";

html{
  background-color: #222222;
}

.background{
  background-image: url("/bike_background.png");
  background-position: center;
  background-size: cover;
}
.full{
  min-height: 75vh;
}
</style>