<template>
    <div class="left-column hdfc-grievance-img-wrapper hidden-sm hidden-xs">
        <img :src="img">
    </div>
</template>
<script>

    import IMG from '~/assets/images/grievance.jpg';

    export default {
        data(){
            return {
                img : IMG,
            }
        }
    }
</script>