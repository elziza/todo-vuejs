<template>
    <div class="container mt-5">
    
        <h1>Rentrez des choses à faire</h1>
        <form action="">
            <div class="form-group">
                <label for="action">Action</label>
                <input v-model="FormData.tache" type="text" id="action" class="form-control">
            </div>
            <button v-on:click.prevent="creationItem" class="btn btn-primary mb-3">Creer une tache</button>
        </form>
        <ul>
            <li v-bind:key="index" v-for="(tache,index) in tableauTaches">
            <item  v-bind:id="index" :tache="tache" :suppression="suppression"  ></item>
            </li>
        </ul>
    </div>
</template>

<script>

import ItemVue from './ItemVue.vue';

    export default {
    name: "ContenuComponents",
    data(){
        return{
            FormData:{
                tache:''
            },
            tableauTaches:['javascript','vue','python','react']
        }
    },
    methods:{
        creationItem:function(){
            this.tableauTaches.push(this.FormData.tache)
            this.FormData.tache=""
        },
        suppression:function(e){
            // console.log(e.target.parentNode.id)
            this.tableauTaches.splice(e.target.parentNode.id, 1)
        }
    },
    components:{
    "item": ItemVue,
    
}
   
  
}
</script>
<style>
    h1{
        margin-top: 100px!important;
    }
    ul{
        list-style: none;
        padding: 0;
    }
</style>