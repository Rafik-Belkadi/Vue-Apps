<template>
    <div id="app">
        <h1> {{title}} </h1>
        <h4>
            <router-link class="link" to="/data/people">Meet The Characters</router-link> |
            <router-link class="link" to="/data/planets">Explore The Planets</router-link>
        </h4>
        <router-view></router-view>
    </div>
</template>



<script>
export default {
    data() {
        return {
            title : 'Starbase-router'
        }
    }
}
</script>