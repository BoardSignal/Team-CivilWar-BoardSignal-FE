const getApiBaseUrl =
  import.meta.env.VITE_BASE_URL || import.meta.env.STORYBOOK_BASE_URL;

export default getApiBaseUrl;
