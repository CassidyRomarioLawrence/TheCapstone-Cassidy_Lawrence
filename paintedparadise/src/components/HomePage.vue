<template>
<div class="d-flex align-items-center" style="height:100vh;">
    <div class="row">
        <h1 class="display-1">PaintedParadise</h1>
        <p class="lead">See the world through an artist's eyes.</p>
    </div>
</div>
<button class="btn">LOGIN</button>
</template>

<script>
    export default {
        name:'HomePage'
    }
</script>

<style scoped>
.display-1{
    color: white;
    font-weight: bold;
    text-shadow: 3px 3px 3px #52057B;
}
.lead{
    color: white;
    background-color: #BC6FF1;
}
.btn{
    position: absolute;
    top: 0;
    right: 0;
    margin: 10px;
    background-color: #BC6FF1;
    color: white;
}
</style>