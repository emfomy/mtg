<template>
  <div class="shadow-sm border-bottom bg-light w-100">
    <b-navbar variant="light" toggleable="sm" class="container">

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>

        <b-navbar-nav>
          <b-nav-item exact-active-class="active font-weight-bold" to="/">Home</b-nav-item>
          <b-nav-item active-class="active font-weight-bold" to="/deck/stasis">MonoBlue - Stasis</b-nav-item>
          <b-nav-item active-class="active font-weight-bold" to="/deck/humility">MonoWhite - Humility</b-nav-item>
          <b-nav-item active-class="active font-weight-bold" to="/deck/graveyard">Black - Graveyard</b-nav-item>
        </b-navbar-nav>

      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'Nav',
};
</script>
