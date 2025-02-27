import styled from '@emotion/styled'
import { calcRem } from 'components/utils/styles/calcRem'
import { SafeLink } from 'components/global/safeLink'
import { srOnly } from 'components/utils/styles/accessibility'
import { breakpoint } from 'components/utils/styles/breakpoints'
import { ArrowUpIcon } from 'components/global/Icons/ArrowUp'

export const StyledFooter = styled('footer')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'minmax(1rem, 1fr) minmax(0, 120ch) minmax(1rem, 1fr)',
  gridGap: calcRem(theme.metrics.md),
  padding: calcRem(80, 0, 0),
  marginTop: 'auto',

  '& > *': {
    gridColumn: 2,
  },

  backgroundColor: theme.colors.dddblue,
}))
StyledFooter.displayName = 'StyledFooter'

export const StyledSocialLinks = styled('ul')({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  listStyle: 'none',
  margin: 0,

  [breakpoint('md')]: {
    justifyContent: 'unset',
  },
})
StyledSocialLinks.displayName = 'StyledSocialLinks'

export const StyledSocialLink = styled(SafeLink)(({ theme }) => ({
  display: 'flex',
  margin: calcRem(theme.metrics.sm, theme.metrics.sm),
  outline: 0,

  svg: {
    display: 'block',
    width: calcRem(theme.metrics.xl),
    height: calcRem(theme.metrics.xl),
    fill: theme.colors.white,
    transition: 'fill 0.25s ease',
  },

  span: srOnly,

  '&:hover, &:focus :nth-of-type(odd)': {
    svg: {
      fill: Math.floor(Math.random() * 2) === 1 ? theme.colors.dddpink : theme.colors.dddorange,
    },
  },
}))
StyledSocialLink.displayName = 'StyledSocialLink'

export const StyledFooterContainer = styled('div')(({ theme }) => ({
  display: 'grid',
  gridColumn: '1 / -1',
  gridTemplateColumns: 'minmax(1rem, 1fr) minmax(0, 84ch) minmax(1rem, 1fr) minmax(1rem, 400px)',
  color: theme.colors.white,

  span: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  p: {
    gridColumn: '2 / span 2',
    gridRow: 2,
    padding: theme.metrics.lg,
    backgroundColor: theme.colors.dddbluedark,
    textAlign: 'left',
  },

  '&::before': {
    gridColumn: '1 / span 1',
    gridRow: 2,
    backgroundColor: theme.colors.dddbluedark,
    content: "' '",
  },
}))
StyledFooterContainer.displayName = 'StyledFooterContainer'

export const StyledTopAnchor = styled('a')(({ theme }) => ({
  gridColumn: '4 / span 1',
  gridRow: 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.metrics.lg,
  backgroundColor: theme.colors.dddbluedark,
  color: theme.colors.white,
  textTransform: 'uppercase',
  textDecoration: 'none',

  '&:hover, &:focus': {
    color: 'currentcolor',

    svg: {
      transform: 'translateY(-35%)',
    },
  },
}))

export const StyledArrowIcon = styled(ArrowUpIcon)(({ theme }) => ({
  width: calcRem(theme.metrics.lg),
  height: calcRem(theme.metrics.lg),
  fill: 'currentcolor',
  transition: 'transform 0.3s linear',
}))
