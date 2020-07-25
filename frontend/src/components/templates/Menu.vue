<template>
    <aside class="menu" v-show="isMenuVisible">
        <ul>
            <li>
                <router-link to="/">
                    <i class="fa fa-home"></i> Início
                </router-link>
            </li>
        </ul>
        <ul>
            <li>
                <router-link to="/alunos">
                    <i class="fa fa-users"></i> Alunos
                </router-link>
            </li>
        </ul>
    </aside>
</template>

<script>

import { mapState } from 'vuex'

export default {
    name: 'Menu',
    computed: mapState(['isMenuVisible']),
}
</script>

<style>
    .menu {
        grid-area: menu;
        background: linear-gradient(to right, #232526, #414345);

        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
    }

    .menu ul {
        margin-top: 20px;
    }

    .menu a {
        color: #fff;
    }
</style>