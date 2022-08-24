import React from 'react'
import { Container, Content } from './style'
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa'
import ItemContact from '../../components/ItemContact'

export default function Contact() {
  return (
    <Container>
      <Content>
        <ItemContact 
          IconFa={FaLinkedin} 
          LinkContact="https://www.linkedin.com/in/patrick-louback-96880496/" 
        />
        <ItemContact 
          IconFa={FaGithub} 
          LinkContact="https://github.com/patricklouback" 
        />
        <ItemContact 
          IconFa={FaInstagram} 
          LinkContact="https://www.instagram.com/patricklouback/" 
        />
        <ItemContact 
          IconFa={FaEnvelope} 
          LinkContact="patrickmlouback@gmail.com" 
        />
      </Content>
    </Container>
  )
}