

<template>
    <header class="head">
        <p v-if="$store.state.user">Hello{{ $store.state.user.email }}!</p>
    </header>
</template>


<script>

export default{
    data(){
        return{
            path:'/', name:'Home'
        }
    }
}
</script>
