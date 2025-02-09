import { Logo } from "components"
import { BoxStyled, LinkStyled, ParagraphStyled, TitleStyled } from "./styled"

export const NotFound = () => {
  return (
    <BoxStyled>
      <Logo sx={{mb: 2}}/>
      <TitleStyled variant="h4" gutterBottom>404 - Not Found</TitleStyled>
      <ParagraphStyled gutterBottom>Sorry, the page you are looking for does not exist.</ParagraphStyled>
      <ParagraphStyled>You can always go back to the <LinkStyled to="/">homepage</LinkStyled>.</ParagraphStyled>
    </BoxStyled>
  )
}
