import React, { useEffect , useState } from 'react';
import MailchimpSubscribe from "react-mailchimp-subscribe";
import InputField from './InputField';
import styled from 'styled-components';

const FormDiv = styled.form`
    margin: auto;
    width: fit-content;
    display: flex;
`

const CustomForm = ({ status, message, onValidated }) => {

  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
    email.indexOf("@") > -1 &&
    onValidated({
        EMAIL: email
    });
  }

  useEffect(() => {
    if(status === "success") clearFields();
  }, [status])

  const clearFields = () => {
    setEmail('');
  }

  return (
      <div
        className="mc__form"
        onSubmit={(e) => handleSubmit(e)}>

        <FormDiv>
          <div className="mc__field-container">
            
            <InputField
              onChangeHandler={setEmail}
              type="email"
              value={email}
              placeholder="Email address"
              isRequired
            />

          </div>

          <InputField
            className="Input-submit"
            label="See You Soon"
            type="submit"
            formValues={[email]}
          />
        </FormDiv>

        {status === "sending" && (
          <div className="mc__alert mc__alert--sending">
            Subscribing...
          </div>
        )}
        {status === "error" && (
          <div 
            className="mc__alert mc__alert--error"
          >Please try a different email!</div>
        )}

        {status === "success" && (
          <div
            className="mc__alert mc__alert--success"
          >Woo hoo!</div>
        )}
      </div>
  );
};

const MailchimpFormContainer = props => {
  const postUrl = 'https://mildewmag.us20.list-manage.com/subscribe/post?u=037b6a8670c6cce5814bcd8ba&amp;id=8789398a33';

    return (
        <div className="mc__form-container">
          <MailchimpSubscribe
          url={postUrl}
          render={({ subscribe, status, message }) => (
              <CustomForm
                  status={status} 
                  message={message}
                  onValidated={formData => subscribe(formData)}
              />
          )}
      />
          </div>
    );
};

export default MailchimpFormContainer;