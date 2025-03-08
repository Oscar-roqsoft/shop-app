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