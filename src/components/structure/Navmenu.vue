<template>

    <div>
        <!-- Menu -->
        <nav id="menu-box" class="cleaning-box">
            <ul id="menu">
                <li>
                    <RouterLink to="/">Home</RouterLink>
                </li>
                <li class="divider"></li>
                <li class="right-aligned user-menu submenu-parent">
                    <div v-if="!user.isGuest">
                        <RouterLink to="/about">Mein Menü</RouterLink>
                    </div>
                </li>
            </ul>
        </nav>
        <!-- Menu end -->
        
        <!-- Hauptmenu Responsive Start -->
        <nav id="menu-box-responsive" class="cleaning-box">
            <ul id="menuResponsive">
                <li class="submenu-parent">
                    <RouterLink to="/">Home</RouterLink>
                </li>
                <li class="divider"></li>
                <li class="right-aligned user-menu">
                    <div v-if="!user.isGuest">
                        <RouterLink to="/about">Mein Menü</RouterLink>
                    </div>
                </li>
            </ul>
        </nav>
    </div>

</template>

<style>

</style>

<script>
import { RouterLink, RouterView } from 'vue-router'
import axios from 'axios'
import { useUserStore } from '@/stores/user.js'

export default {
    data() {
        return {
        }
    },
    setup() {
        const user = useUserStore()

        return {
            user
        }

    },
    created() {
        this.getIsGuest()
    },
    methods: {
        getIsGuest(){
            axios
            .get('https://ttkv.localhost/account/get-is-guest/')
            .then((response) => {
                //console.log(response.data.isGuest)
                //im store speichern
                this.user.setIsGuest(response.data.isGuest)
            })
        }
    }    
}


</script>
