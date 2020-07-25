<template>
    <header class="header">
        <a href="#" class="toggle" @click="menuToggle" v-if="!hideToggle">
            <i class="fa fa-lg" :class="icon"></i>
        </a>
        
        <h2 class="title">
            <router-link to="/">{{ title }}</router-link>
        </h2>
        
        <UserDropdown v-if="!hideUserDropdown" />
    </header>
</template>

<script>

export default {
    name: 'Header',
    components: { },
    props: {
        title: String,
        hideToggle: Boolean,
        hideUserDropdown: Boolean
    },
    computed: {
        icon() {
            return this.$store.state.isMenuVisible ? 'fa-angle-left' : 'fa-angle-down'
        }
    },
    methods: {
        menuToggle() {
            console.log('toggle menu')
            // chama o método na store p/ exibir ou ocultar a barra lateral
            this.$store.commit('menuToggle')
        }
    },
}
</script>

<style>
    .header {
        grid-area: header;
        background: linear-gradient(to right, #1e469a, #49a7d1);

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .title {
        font-size: 1.2rem;
        color: #fff;
        font-weight: 100;
        flex-grow: 1;
        text-align: center;
    }

    .title a {
        color: #fff;
        text-decoration: none;
    }

    .title a:hover {
        color: #fff;
        text-decoration: none;
    }

    header.header > a.toggle {
        width: 60px;
        height: 100px;
        color: #fff;
        justify-self: flex-start;
        text-decoration: none;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    header.header > a.toggle:hover {
        background: rgba(0, 0, 0, 0.2);
    }
</style>