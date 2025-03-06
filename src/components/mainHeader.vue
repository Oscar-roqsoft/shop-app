<template>
    <div class="border-b fixed top-0 left-0 z-50 bg-[#F4F7FA] w-full">
      <div class="md:max-w-[1200px] mx-auto w-full h-full px-4 md:px-0">
        <div class="flex flex-wrap justify-between items-center py-5">
          <!-- Logo -->
          <div>
            <span class="text-[30px] font-bold">Exclusive</span>
          </div>

           <!-- Mobile Menu Button -->
           <div class="md:hidden">
            <button @click="toggleMenu" class="text-2xl focus:outline-none md:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                <path fill="currentColor" d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z"/>
              </svg>
            </button>
          </div>
  
          <!-- Desktop Navigation -->
          <div class="hidden md:flex items-center gap-6 cursor-pointer">
            <ul v-for="(i, index) in navItems" :key="index">
              <li>
                <n-button 
                  round
                  quaternary 
                  size="large"
                  class="capitalize"
                  @click="navigateToPath(i.href, i.label)"
                  :color="pinia.state.selectedNavMenu === i.label ? '#f17315' : 'black'">
                  {{ i.label }}
                </n-button>
              </li>
            </ul>
          </div>
  
          <!-- Icons & Search (Desktop Only) -->
          <div class="flex items-center mt-4 md:mt-0 gap-4">
            <n-input size="large" round placeholder="Search for items ...">
              <template #suffix>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                  <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" 
                  d="m21 21l-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314"/>
                </svg>
              </template>
            </n-input>

            <n-badge  processing :value="value">
              <n-button @click="navigateTo('/wishlist')" strong secondary circle size="large">
                <template #icon>
                  <n-icon>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 48 48">
                      <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" 
                      d="M15 8C8.925 8 4 12.925 4 19c0 11 13 21 20 23.326C31 40 44 30 44 19c0-6.075-4.925-11-11-11c-3.72 0-7.01 1.847-9 4.674A10.99 10.99 0 0 0 15 8"/>
                    </svg>
                  </n-icon>
                </template>
              </n-button>
            </n-badge>


            <n-badge  processing :value="value">
              <n-button @click="navigateTo('/cart')" strong secondary circle size="large">
                <template #icon>
                  <n-icon>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49A.996.996 0 0 0 20.01 4H5.21l-.94-2H1v2h2l3.6 7.59l-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2zM6.16 6h12.15l-2.76 5H8.53zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2s-.9-2-2-2m10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2s2-.9 2-2s-.9-2-2-2"/></svg>
                  </n-icon>
                </template>
              </n-button>
            </n-badge>

            <n-dropdown :options="options" @select="handleSelect">
                <n-button strong secondary circle size="large">
                <template #icon>
                    <n-icon>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12 12q-1.65 0-2.825-1.175T8 8t1.175-2.825T12 4t2.825 1.175T16 8t-1.175 2.825T12 12m-8 8v-2.8q0-.85.438-1.562T5.6 14.55q1.55-.775 3.15-1.162T12 13t3.25.388t3.15 1.162q.725.375 1.163 1.088T20 17.2V20zm2-2h12v-.8q0-.275-.137-.5t-.363-.35q-1.35-.675-2.725-1.012T12 15t-2.775.338T6.5 16.35q-.225.125-.363.35T6 17.2zm6-8q.825 0 1.413-.587T14 8t-.587-1.412T12 6t-1.412.588T10 8t.588 1.413T12 10m0 8"/></svg>                
                    
                    </n-icon>
                </template>
                </n-button>
            </n-dropdown>
            
           
          </div>
         
        </div>
      </div>
  
      <!-- Mobile Navigation Drawer (Slide from Left) -->
      <div ref="mobileMenu" class="fixed  left-0 w-3/4 h-screen bg-white shadow-lg transform -translate-x-full z-50 md:hidden">
        <div class="flex flex-col items-start gap-4 p-4">
          <!-- Close Button -->
           <!-- <div class="flex justify-between items-center  border-b pb-6 w-full">
                <div>
                    <span class="text-[30px] font-bold">Exclusive</span>
                </div>

               <button @click="toggleMenu" class="">
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M5 12H19"><animate fill="freeze" attributeName="d" dur="0.4s" values="M5 12H19;M12 12H12"/><set fill="freeze" attributeName="opacity" begin="0.4s" to="0"/></path><path d="M5 5L19 5M5 19L19 19" opacity="0"><animate fill="freeze" attributeName="d" begin="0.2s" dur="0.4s" values="M5 5L19 5M5 19L19 19;M5 5L19 19M5 19L19 5"/><set fill="freeze" attributeName="opacity" begin="0.2s" to="1"/></path></g></svg>
               </button>
           </div> -->
  
           <ul v-for="(i, index) in navItems" :key="index" class="text-lg w-full">
              <n-button  quaternary  strong round size="large"
              :color="pinia.state.selectedNavMenu === i.label ? '#f17315' : 'black'">
                  <li 
                    @click="navigateToPath(i.href, i.label), toggleMenu" 
                    class="py-3 w-full capitalize text-left px-4 cursor-pointer hover:text-orange-500"
                     >
                    {{ i.label }}
                  </li>
              </n-button>
          </ul>

        </div>
      </div>
  
      <!-- Overlay (Backdrop) -->
      <div 
        v-if="isMenuOpen" 
        @click="toggleMenu"
        class="fixed inset-0 z-40 md:hidden">
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import gsap from 'gsap'
  import { NButton, NInput, NIcon, NBadge,NDropdown } from 'naive-ui'
  import { useStore } from '@/stores/index'
  
  const pinia = useStore()
  const value = ref(2)
  const navItems = [
    { label: 'home', href: '/' },
    { label: 'contact', href: '/contact' },
    { label: 'about', href: '/about-us' },
    { label: 'sign up', href: '/account' },
  ]
  
  const mobileMenu = ref(null)
  let isMenuOpen = ref(false)
  
  // Toggle Menu with GSAP Animation (Slide Left)
  const toggleMenu = () => {
    if (!isMenuOpen.value) {
      gsap.to(mobileMenu.value, { duration: 0.5, x: '0%', ease: 'power3.out' })
    } else {
      gsap.to(mobileMenu.value, { duration: 0.5, x: '-100%', ease: 'power3.in' })
    }
    isMenuOpen.value = !isMenuOpen.value
  }
  
  // Navigate and close menu
  const navigateToPath = (path, label) => {
    useRouter().push(path)
    pinia.state.selectedNavMenu = label
    toggleMenu()
  }

  const renderIcon = (svgPath) => {
  return () =>
    h(NIcon, null, {
      default: () =>
        h('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: '18', height: '18' }, [
          h('path', { d: svgPath, fill: 'currentColor' })
        ])
    })
}

// Naive UI message instance

// Click event handler for dropdown items
const handleSelect = (key => {
  switch (key) {
    case 'profile':
      navigateTo('/account/update')
      break
    case 'order':
      navigateTo('/order')
      break
    case 'logout':
      console.log('Logging out...')
      break
    default:
    console.log('Unknown action')
  }
})

// Dropdown options with custom SVG icons
const options = [
  {
    label: 'My Account',
    key: 'profile',
    icon: renderIcon('M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v2h20v-2c0-3.3-6.7-5-10-5z')
  },
  {
    label: 'My Orders',
    key: 'order',
    icon: renderIcon('M21.7 7.3l-5-5c-.4-.4-1-.4-1.4 0l-11 11c-.2.2-.3.4-.3.7v5c0 .6.4 1 1 1h5c.3 0 .5-.1.7-.3l11-11c.4-.4.4-1 0-1.4zM7 18H5v-2l10-10 2 2-10 10zm12-12l-2-2 1.3-1.3 2 2L19 6z')
  },
  {
    label: 'Logout',
    key: 'logout',
    icon: renderIcon('M10.09 15.59L8.67 17l-5-5 5-5 1.41 1.41L6.83 11H16v2H6.83l3.26 3.29z M20 3H10c-1.1 0-2 .9-2 2v4h2V5h10v14H10v-4H8v4c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z')
  }
]
  </script>
  
  <style scoped>
  /* Ensure the menu is hidden off-screen initially */
  .transform {
    transform: translateX(-100%);
  }
  </style>
  