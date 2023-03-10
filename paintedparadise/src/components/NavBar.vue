<template>
<nav class="navbar navbar-expand-lg bg-transparent sticky-top">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav flex-column">
        <li class="nav-item">
          <a class="nav-link" href="/"><i class="bi bi-house-door"></i></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/#about"><i class="bi bi-info-circle"></i></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/#shop"><i class="bi bi-bag"></i></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/contact"><i class="bi bi-telephone"></i></a>
        </li>
      </ul>
    </div>
</nav>
</template>

<script>
    export default {
        name:'NavBar'
    }
</script>

<style scoped>
.navbar{
    min-height: 100vh;
    max-width: 5vw;
}
a{
  margin: 20px 0;
}

i{
  font-size: 30px;
  color: black;
  text-shadow: 3px 3px 3px white;
}

i:hover{
  color: #BC6FF1;
  text-shadow: 3px 3px 3px black;
}
</style>