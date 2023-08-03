export const setTokenInCookies = (token: string) => {
    document.cookie = `token=${token}; path=/;`;
  };
  
  export const clearTokenFromCookies = () => {
    document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
  };
  
  export const getTokenFromCookies = (): string | null => {
    const cookies = document.cookie.split(';');
    for (const cookie of cookies) {
      const [name, value] = cookie.trim().split('=');
      if (name === 'token') {
        return value;
      }
    }
    return null;
  };
  