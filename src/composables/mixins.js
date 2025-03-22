import { useNotification } from 'naive-ui';


// using naive ui toast
export function useNotify() {
  const notification = useNotification();

  // Main notify function with required content
  const notify = (type, content, options = {}) => {
    if (!content || typeof content !== 'string') {
      throw new Error('Content is required and must be a string');
    }

    const defaults = {
      meta: 'Details',
      duration: 2500,
      keepAliveOnHover: true,
    };

    notification[type]({
      content, // Use the provided content
      ...defaults,
      ...options, // Override defaults with custom options
    });
  };

  // Preset functions with content as the first argument
  const info = (content, options) => notify('info', content, options);
  const success = (content, options) => notify('success', content, options);
  const warning = (content, options) => notify('warning', content, options);
  const error = (content, options) => notify('error', content, options);

  return { notify, info, success, warning, error };
}




export const numberWithCommas = (number) =>{
    // Convert the number to a string
    let numStr = `${number}`;
  
    // Split the string into integer and fractional parts
    let [integerPart, fractionalPart] = numStr.split('.');
  
    // Use a regular expression to add commas to the integer part
    integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  
    // Reconstruct the number with the modified integer part and the original fractional part
    return fractionalPart ? `${integerPart}.${fractionalPart}` : integerPart;
  }
  
  export const getUserId = ()=>{
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get('userId');
    return userId
  }
  
  
  
  
  //uploading to cloudinary
  export const asyncRequest = async (url, options, json = true) => {
     const pinia = useStore();
    return fetch(url, options)
    .then(response => {
      const statusCode = response.status;
      if(statusCode == 401){
        // if(pinia.currentNavMenu === 'home') return  pinia.state.isAuthenticated = false
        navigateTo("/account");
        return;
      }
      return json ? response.json() : response.text();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return error;
    });
  };
  

  export const filterDuplicatesById = (array, key = '_id') =>{
    const seen = new Set();
    return array.filter(item => {
      const productId = item.product[key]; // Access the id inside the product object
      if (seen.has(productId)) {
        return false; // Skip if already seen
      }
      seen.add(productId);
      return true; // Keep if first occurrence
    });
  }