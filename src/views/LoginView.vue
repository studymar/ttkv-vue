<template>

    <article>
        <!-- Login -->
        <h2>Login</h2>
        <div>
            <form action="" method="post">
                <br/>
                <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <div class="form-group field-loginform-email required">
                        <input type="text" id="loginform-email" class="form-control" name="LoginForm[email]" aria-required="true">
                        <div class="form-text text-danger"></div>
                    </div>
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Passwort</label>
                    <div class="form-group field-loginform-password required">
                        <input type="password" id="loginform-password" class="form-control" name="LoginForm[password]" aria-required="true">
                        <div class="form-text text-danger"></div>
                    </div>
                </div>
                
                <div class="form-group">
                    <button type="submit" class="btn btn-block btn-primary">Login</button>
                </div>

                <br/>
                <div class="form-group">
                    <p class="text-muted">
                        <a href="" class="grey" id="pw-forgotten-link">Passwort vergessen?</a>
                    </p>
                </div>
                <div class="form-group">
                        Du hast noch keinen Account? Erste Anmeldung?
                    <p class="text-muted">
                        <a href="" class="grey" id="anmelde-link">Registrieren für Vereinsmeldung</a>
                    </p>
                </div>
                
            </form>   
        </div>
    </article>

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
    created() {
    },
    methods: {
    }    
}


</script>
