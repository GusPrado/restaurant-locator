import styled from 'styled-components'
import Slider from 'react-slick'

export const Wrapper = styled.div`
  display: flex;
`

export const Container = styled.aside`
  background-color: ${(props) => props.theme.colors.background};
  width: 360px;
  height: 100vh;
  overflow-y: auto;
`

export const Search = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fff;
  padding: 16px;
`

export const Logo = styled.img`
  margin-bottom: 16px;
`

export const CarouselTitle = styled.h1`
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.text};
  font-size: 24px;
  font-weight: bold;
  line-height: 30px;
  margin: 16px 0;
`

export const Carousel = styled(Slider)`
  .slick-slide {
    margin-right: 30px;
  }
`

export const ModalTitle = styled.p`
  margin-bottom: 10px;
  letter-spacing: 0.12px;
  font-family: ${props => props.theme.fonts.regular};
  color: ${props => props.theme.colors.text};
  line-height: 30px;
  font-size: 24px;
  font-weight: bold;
`

export const ModalContent = styled.p`
  margin-bottom: 10px;
  font-family: ${props => props.theme.fonts.regular};
  color: ${props => props.theme.colors.text};
  line-height: 30px;
  font-size: 20px;
  font-weight: normal;
`
