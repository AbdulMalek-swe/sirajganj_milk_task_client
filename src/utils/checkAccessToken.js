 
  
  export async function checkValidAccessToken(accessToken )
   {
    if (!accessToken) {
      return { valid: false, error: 'No access token provided' };
    }
    try {
 const response = await fetch(`http://localhost:5000/user/veryfi-token`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`
        }
      });
 
      
        const error = await response.json();
       
        if(!error.valid){
        return { valid: false, error: error.message };

        }
 
      // If the response is okay, the access token is valid
      return { valid: true };
    } catch (error) {
        
      return { valid: false, error: 'Error validating access token' };
    }
  }
  