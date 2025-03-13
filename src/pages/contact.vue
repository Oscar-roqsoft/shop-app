<template>
    <div class="min-h-[80vh] pt-[160px] pb-[50px] md:pt-[130px]">
        <div class="md:max-w-[1200px] mx-auto w-full h-full px-4 md:px-0">
            <n-breadcrumb class="mb-6">
                <n-breadcrumb-item> Home </n-breadcrumb-item>
                <n-breadcrumb-item> Contact </n-breadcrumb-item>
            </n-breadcrumb>

            <!-- <h1 class="text-3xl font-bold mb-6 text-center">Contact Us</h1> -->

            <!-- Contact Information -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class=" bg-white p-4 md:p-10 rounded-lg">

                    <div class="pb-4 space-y-4">
                        <div class="flex items-center gap-4">
                            <div class="h-[40px] w-[40px] bg-[#f17315] rounded-full flex justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><!-- Icon from All by undefined - undefined --><path fill="#fff" d="M19.95 21q-3.125 0-6.175-1.362t-5.55-3.863t-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3"/></svg>
                            </div>
                            <span class=" text-xl">Call To Us</span>
                        </div>
    
    
                        <p class="md:text-md">We are available 24/7, 7 days a week.</p>
                        <p class="md:text-md">📍 Address: 123 Business Street, Lagos, Nigeria</p>
                        <p class="md:text-md">📞 Phone: +234 900 123 4567</p>
                    </div>
                    
                    <n-divider></n-divider>

                    <div class="space-y-4">

                        <div class="flex items-center gap-4">
                            <div class="h-[40px] w-[40px] bg-[#f17315] rounded-full flex justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><!-- Icon from All by undefined - undefined --><path fill="#fff" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7L4 8v10h16V8zm0-2l8-5H4zM4 8V6v12z"/></svg>                            </div>
                            <span class=" text-xl">Write To US</span>
                        </div>
                        <p class="md:text-md">Fill out our form and we will contact  you <br> within 24 hours.</p>
                        
                        <p class="md:text-md">📧 Email: support@example.com</p>
                    </div>

                    <!-- Social Media Links -->
                    <!-- <div class="flex space-x-4 mt-4">
                        <a href="https://facebook.com" target="_blank">
                            <n-icon size="32"><i class="fab fa-facebook"></i></n-icon>
                        </a>
                        <a href="https://twitter.com" target="_blank">
                            <n-icon size="32"><i class="fab fa-twitter"></i></n-icon>
                        </a>
                        <a href="https://instagram.com" target="_blank">
                            <n-icon size="32"><i class="fab fa-instagram"></i></n-icon>
                        </a>
                        <a href="https://linkedin.com" target="_blank">
                            <n-icon size="32"><i class="fab fa-linkedin"></i></n-icon>
                        </a>
                    </div> -->
                </div>

                <div class="bg-white p-4 md:p-10 rounded-lg">

                    <!-- Contact Form -->
                    <n-form ref="contactFormRef" :model="contactForm" :rules="rules" 
                    class="gap-4 grid grid-cols-1 md:grid-cols-3">
                        <n-form-item path="name" label="Your Name">
                            <n-input v-model:value="contactForm.name" placeholder="Enter your full name" size="large" />
                        </n-form-item>
    
                        <n-form-item path="email" label="Your Email">
                            <n-input v-model:value="contactForm.email" placeholder="Enter your email" size="large" type="email" />
                        </n-form-item>
    
                        <n-form-item path="subject" label="Subject">
                            <n-input v-model:value="contactForm.subject" placeholder="Enter subject" size="large" />
                        </n-form-item>

                      
    
                        <n-form-item class="co md:col-span-3" path="message" label="Your Message">
                            <n-input v-model:value="contactForm.message" type="textarea" placeholder="Type your message" size="large" />
                        </n-form-item>
    
                        <n-button color="#f17315"  size="large" @click="sendMessage">
                            Send Message
                        </n-button>
                    </n-form>
                </div>
            </div>

            <div v-if="successMessage" class="mt-4 text-green-600 text-center">
                {{ successMessage }}
            </div>
        </div>
    </div>

    <MainFooter/>
</template>

<script setup>
import { ref } from 'vue';
import { NBreadcrumb, NBreadcrumbItem, NIcon, NForm, NFormItem, NInput, NButton,NDivider } from 'naive-ui';

// Contact Form Data
const contactForm = ref({
    name: '',
    email: '',
    subject: '',
    message: ''
});

const successMessage = ref('');

// Validation Rules
const rules = {
    name: [{ required: true, message: 'Name is required', trigger: 'blur' }],
    email: [{ required: true, message: 'Email is required', trigger: 'blur' }],
    subject: [{ required: true, message: 'Subject is required', trigger: 'blur' }],
    message: [{ required: true, message: 'Message cannot be empty', trigger: 'blur' }]
};

const sendMessage = () => {
    // Simulate sending message (replace with API request)
    console.log('Message Sent:', contactForm.value);

    successMessage.value = 'Your message has been sent successfully!';
};
</script>

<style scoped>
a {
    color: inherit;
}
i {
    font-size: 24px;
}
</style>
