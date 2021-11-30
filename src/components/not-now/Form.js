
import Mailchimp from 'react-mailchimp-form'

const Form = () => {
  return (
    <Mailchimp
        action='https://mildewmag.us20.list-manage.com/subscribe/post?u=037b6a8670c6cce5814bcd8ba&amp;id=8789398a33'
        fields={[
          {
            name: 'EMAIL',
            placeholder: 'Email',
            type: 'email',
            required: true
          }
        ]}
        className='mailchimp-form'
        />
  )
}

export default Form;