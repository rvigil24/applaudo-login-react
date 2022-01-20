import { useState } from 'react';
import GoogleLogin from 'react-google-login';
import useAdminGoogleAuthentication from './useAdminGoogleAuthentication';
import useCompanyGoogleAuthentication from './useCompanyGoogleAuthentication';

function GoogleButton() {
  const [companySlugInput, setCompanySlugInput] = useState('');

  const clientId = process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID;
  const { handleSuccess: handleAdminSuccess } = useAdminGoogleAuthentication();
  const { handleSuccess: handleCompanySuccess } =
    useCompanyGoogleAuthentication(companySlugInput);

  const handleFailure = (error) => {
    console.log(error);
  };

  return (
    <>
      <div style={{ marginTop: '10px' }}>
        <div>Admin login:</div>
        <GoogleLogin
          clientId={clientId}
          buttonText="Admin Google Log in"
          onSuccess={handleAdminSuccess}
          onFailure={handleFailure}
          cookiePolicy={'single_host_origin'}
        />
      </div>

      <br/><br/>
      <div>
      <div>Company login:</div>
        <input
          value={companySlugInput}
          placeholder='Enter company slug:'
          onInput={(e) => setCompanySlugInput(e.target.value.toLowerCase())}
        />
      </div>

      <GoogleLogin
        clientId={clientId}
        buttonText="Company Google Log in"
        onSuccess={handleCompanySuccess}
        onFailure={handleFailure}
        cookiePolicy={'single_host_origin'}
      />
    </>
  );
}

export default GoogleButton;
