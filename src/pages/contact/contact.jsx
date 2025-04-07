import {
  ContactInfo,
  ContactWrapper,
  InfoTitle,
  InfoItem,
  Form,
  SubmitButton,
  InputField,
} from './contact.styles.jsx';
import { Title } from '../home/home.styles.jsx';
import { useState } from 'react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here (e.g., send form data to an API)
    console.log('Form submitted', formData);
  };
  return (
    <ContactWrapper>
      <Title>CONTACT US</Title>
      <ContactInfo>
        <InfoTitle>Adresa</InfoTitle>
        <InfoItem>Brace Dronjak 5</InfoItem>
      </ContactInfo>
      <ContactInfo>
        <InfoTitle>Email</InfoTitle>
        <InfoItem>alexandra.kop</InfoItem>
      </ContactInfo>
      <ContactInfo>
        <InfoTitle>Telefon</InfoTitle>
        <InfoItem>0605523219</InfoItem>
      </ContactInfo>

      <Form onSubmit={handleSubmit}>
        <InputField
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <InputField
          type="text"
          name="email"
          placeholder="Email Adress"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <InputField
          type="tel"
          name="phone"
          placeholder="Phone number"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your message"
          value={formData.message}
          onChange={handleChange}
          rows="5"
          required
        />
        <SubmitButton type="submit">Send</SubmitButton>
      </Form>
    </ContactWrapper>
  );
}

export default ContactPage;
