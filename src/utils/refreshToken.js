 
  
  export async function refreshAccessToken(refreshToken) {
    try {
      const response = await fetch(`http://localhost:5000/user/refresh-token`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ token: refreshToken })
      });
        const data = await response.json();
      return { success: true, accessToken:data?.accessToken,refreshToken:data?.refreshToken };
    } catch (error) {
      return { success: false, error: 'Error refreshing access token' };
    }
  }
  