import { GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';
 
function useCompanyGoogleAuthentication(companySlug = "") {
  const handleSuccess = (response) => {
    console.log('manejando success');
    
    if ('accessToken' in response) {
      const accessToken = response.accessToken;
      
      const data = fetch(`${process.env.REACT_APP_API_URL}/${companySlug}/api/user-auth`, {
        method: 'POST',
        body: JSON.stringify({
          token: accessToken
        }),
        headers: {
          'Content-Type': 'application/json'
        },
      });
      data.then( data => data.json() ).then( res => console.log(res)).catch( err => console.log(err) );

    }
  }
 
  return {
    handleSuccess,
  }
}
 
export default useCompanyGoogleAuthentication;