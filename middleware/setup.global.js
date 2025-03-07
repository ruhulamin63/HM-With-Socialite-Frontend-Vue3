import {useAuthStore} from "~/stores/auth";
import {defineNuxtRouteMiddleware, navigateTo} from "#app";

export default defineNuxtRouteMiddleware((to, from) => {
    const auth = useAuthStore();
    const guest_path = ['/login', '/callback'];

    if(guest_path.includes(to.path) && auth.isAuthenticated){
        return navigateTo('/hotels');
    }
    
    if(!auth.isAuthenticated && !guest_path.includes(to.path)){
        return navigateTo('/login');
    }
})