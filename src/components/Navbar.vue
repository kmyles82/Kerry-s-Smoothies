<template>
    <div class="navbar">
        <nav class="nav-extended indigo darken-2">
            <div class="nav-content">
                <router-link to="">
                    <span class="nav-title">Kerry's Smoothies</span>
                </router-link>
                <a href="#" class="btn-floating btn-large pink halfway-fab">
                    <router-link to="">
                        <i class="material-icons">add</i>
                    </router-link>
                </a>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'Navbar',
    date(){
        return {

        }
    }
}
</script>

<style>
    .navbar nav{
        padding: 0 20px;
    }
</style>
