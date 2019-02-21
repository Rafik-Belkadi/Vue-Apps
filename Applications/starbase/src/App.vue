<template>
    <div id="app">
        <h1> {{title}} </h1> 
        <div class="row">  
            <div class="col-md-4" v-for="(id, index) in ids" :key="index">
                <Character :id="id" />
            </div>
        </div>     
    </div>
</template>

<script>
import Character from './components/Character.vue'

export default {
    name    :   'app',
    data() {
        return {
            title   :   'Generate Your Team',
            ids : [1,13,14]
        }
    },
    components : {
        Character
    }

}
</script>