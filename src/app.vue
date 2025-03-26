<template>
  <div>
    <n-config-provider :theme-overrides="themeOverrides">

      <n-notification-provider>
        <NuxtLayout>
            <NuxtPage/>
        </NuxtLayout>
      </n-notification-provider>
    </n-config-provider>

      
  </div>
</template>

<script setup>
import { NNotificationProvider,NConfigProvider } from 'naive-ui'
import { useStore } from "@/stores";

const pinia = useStore()

const route = useRouter()

const path = ref(route.currentRoute.value.path)


// watch(()=>path.value,(newv)=>{

//     console.log(newv)

//     if (newv === '/wishlist' || newv ===  '/cart'|| newv === '/order') {
//         pinia.state.selectedNavMenu = '';
//     }
// })

onMounted(()=>{
  // pinia.updateData()
})

const themeOverrides = {
      common: {
        primaryColor: '#f17315',      // Orange for primary
        successColor: '#28A745',      // Green for success
        warningColor: '#FFC107',      // Amber for warning
        errorColor: '#DC3545',        // Red for error
        infoColor: '#17A2B8',         // Cyan for info
        primaryColorHover: '#FF8533', // Lighter orange on hover
        primaryColorPressed: '#E65C00', // Darker orange when pressed
},
Button: {
        textColor: 'black',         // White text on hover for default buttons
        textColorHover: '#FFFFFF',         // White text on hover for default buttons
        textColorHoverPrimary: '#FFFFFF',  // White text on primary hover
        textColorHoverSuccess: '#FFFFFF',  // White text on success hover
        textColorHoverWarning: '#333333',  // Dark gray text on warning hover
        textColorHoverError: '#FFFFFF',    // White text on error hover
    },
}

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');

/* *{
    margin: 0px;
    padding: 0px;
    box-sizing: content-box;
} */

 .n-carousel__arrow {
    color: black !important;
 }
 .n-carousel__dot[aria-selected=false]{
    background-color: black !important;
 }
 .n-carousel__dot[aria-selected=true]{
    background-color: rgb(208, 202, 202) !important;
 }


.n-base{
  border-radius: 20px !important;
}

.n-card-header{
    font-size: 14px !important;
}

/* .n-checkbox.n-checkbox--checked .n-checkbox-box {
    background-color: #f17315 !important;
    border:0.5px solid #f17315 !important;
}

.n-checkbox-box:hover {
    background-color: #f17315 !important;
    border:none !important;
}
.n-checkbox-box:focus {
    background-color: #f17315 !important;
    border:0.5px solid #f17315 !important;
}
.n-checkbox-box:focus {
    background-color: #f17315 !important;
    border:0.5px solid #f17315 !important;
    box-shadow: none !important;
} */
</style>
