<template>
    
    <div class="bg-[#030406]">

        <div class="md:max-w-[1200px] mx-auto w-full h-full px-4 py-20 md:px-0 text-white">


            <div class="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-20">
                <div class="block gap-10">
                    <span class="text-[24px]">Exclusive</span>
                    <p class="text-[16px] my-4">Subscribe</p>

                    <div>
                        <p class="mb-[8px]">Get 10% off your first order</p>
                        <n-input size="large" round placeholder="Enter your email">
                            <template #suffix>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path fill="currentColor" d="m476.59 227.05l-.16-.07L49.35 49.84A23.56 23.56 0 0 0 27.14 52A24.65 24.65 0 0 0 16 72.59v113.29a24 24 0 0 0 19.52 23.57l232.93 43.07a4 4 0 0 1 0 7.86L35.53 303.45A24 24 0 0 0 16 327v113.31A23.57 23.57 0 0 0 26.59 460a23.94 23.94 0 0 0 13.22 4a24.55 24.55 0 0 0 9.52-1.93L476.4 285.94l.19-.09a32 32 0 0 0 0-58.8"/></svg>
                            </template>
                        </n-input>
                    </div>
                </div>

                <div class="w-full mt-6 md:mt-0 ">
                    <h3 class="text-xl font-semibold flex items-center">
                    <span class="ml-">Contact</span>
                    </h3>
                    <nav>
                    <ul class="mt-4 space-y-2">
                        <li><a href="mailto:contact.laboiserie@gmail.com" class="hover:text-gray-400">
                            Email: exclusive@gmail.com
                        </a></li>
                        <li><a href="mailto:contact.laboiserie@gmail.com" class="hover:text-gray-400">
                            Phone No: +88015-88888-9999

                        </a></li>
                        <!-- <li><a href="mailto:contact.laboiserie@gmail.com" class="hover:text-gray-400">
                            : +44 7876 210359 

                        </a></li> -->
                        <li><a href="mailto:contact.laboiserie@gmail.com" class="hover:text-gray-400">
                            Address: 111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.
                        </a></li>
                    </ul>
                    </nav>
                </div>

                <div class="w-full mt-6 md:mt-0 ">
                    <h3 class="text-xl font-semibold flex items-center">
                    <span class="ml-">Account</span>
                    </h3>
                    <nav>
                    <ul class="mt-4 space-y-2">
                        <li><a href="" class="hover:text-gray-400">
                            My Account
                        </a></li>
                        <li><a href="" class="hover:text-gray-400">
                            Login / Register
                        </a></li>
                        <li><a href="" class="hover:text-gray-400">
                            Cart

                        </a></li>
                        <li><a href="" class="hover:text-gray-400">
                            Wishlist
                        </a></li>
                        <li><a href="" class="hover:text-gray-400">
                            Shop
                        </a></li>
                    </ul>
                    </nav>
                </div>

                <div class="w-full mt-6 md:mt-0 ">
                    <h3 class="text-xl font-semibold flex items-center">
                    <span class="ml-">Quick Link</span>
                    </h3>
                    <nav>
                    <ul class="mt-4 space-y-2">
                        <li><a href="" class="hover:text-gray-400">
                            Privacy Policy
                        </a></li>
                        <li><a href="" class="hover:text-gray-400">
                            Terms Of Use
                        </a></li>
                        <li><a href="" class="hover:text-gray-400">
                            FAQ

                        </a></li>
                        <li><a href="" class="hover:text-gray-400">
                            Contact
                        </a></li>
                       
                    </ul>
                    </nav>
                </div>
            </div>





        </div>

        <div class="border-t border-gray-700">
                <!-- Footer Copyright -->
        <div class="mt-8 p-4  text-center">
            <div class=" text-[#ffff] font-[400] flex item-center md:justify-center text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                        <path d="M22.4414 12.333C22.4414 17.8558 17.9642 22.333 12.4414 22.333C6.91856 22.333 2.44141 17.8558 2.44141 12.333C2.44141 6.81016 6.91856 2.33301 12.4414 2.33301C17.9642 2.33301 22.4414 6.81016 22.4414 12.333Z" stroke="#fff" stroke-width="1.5"/>
                        <path d="M15.4414 14.333C15.4414 15.4376 14.546 16.333 13.4414 16.333H12.4414C11.5095 16.333 11.0436 16.333 10.676 16.1808C10.186 15.9778 9.79664 15.5884 9.59365 15.0984C9.44141 14.7308 9.44141 14.2649 9.44141 13.333V11.333C9.44141 10.4011 9.44141 9.93519 9.59365 9.56764C9.79664 9.07759 10.186 8.68824 10.676 8.48525C11.0436 8.33301 11.5095 8.33301 12.4414 8.33301H13.4414C14.546 8.33301 15.4414 9.22844 15.4414 10.333" stroke="#fff" stroke-width="1.5" stroke-linecap="round"/>
                    </svg>
                    <p class=" ml-[4px]">Copyright Rimel 2025. All right reserved</p>
            </div> 
      
         </div>
        </div>

    </div>
    
</template>

<script setup>
  import { NButton, NInput, NIcon, NBadge } from 'naive-ui'

</script>