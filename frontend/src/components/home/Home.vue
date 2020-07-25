<template>
    <div class="home">
        <PageTitle icon="fa fa-home" main=" Início" subTitle="Sistema de Cadastro de Alunos"/>

        <div>
  <b-jumbotron header="Bem Vindo!" lead="Desenvolvido com Vue.js 2">
    <!--<p>For more information visit website</p>-->
    <b-button variant="primary" href="#">Mais Info</b-button>
  </b-jumbotron>
</div>   
    </div>
</template>

<script>

import PageTitle from '../templates/PageTitle'
import { apiBaseURL } from '@/global'
//import Stat from './Stat'
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

export default {
    name: 'Home',
    components: { PageTitle },
    
    data: function() {
        return {
            stat: {}
        }
    },
    
    methods: {
        getStats() {
            axios.get(`${apiBaseURL}/stats`).then(res => {
                console.log(res)
                this.stat = res.data
            })
        }
    },
    mounted() {
        // ao carregar a página
        this.getStats()
    },
}
</script>

<style>
    .stats {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    .jumbotron {
        background-color: #ddd !important;
    }
</style>