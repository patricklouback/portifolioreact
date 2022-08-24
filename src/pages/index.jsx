import { FaArrowRight } from 'react-icons/fa'
import { Container, Content, Infos, Name, Function, Intro, LinkProjects, Logo, Img } from '../../styles/indexStyle'
import Link from 'next/link'

export default function Home() {
  return (
    <Container>
      <Content>
        <Infos>
          <Name>Olá, sou Patrick Louback</Name>
          <Function>Front-End Developer</Function>
          <Intro>Sou um engenheiro de controle e automação
            que tem atuado com projetos de eletrônica embarcada,
            e usa todo esse know-how para desenvolver aplicações
            fluidas, limpas e funcionais.
          </Intro>
          <Link href="projects">
            <LinkProjects>PROJETOS <FaArrowRight /></LinkProjects>
          </Link>
        </Infos>
        <Logo>
          <Img src="/images/perfil.png" alt="logo" />
        </Logo>
      </Content>
    </Container>
  )
}