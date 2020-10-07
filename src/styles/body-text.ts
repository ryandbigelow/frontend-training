import { css } from '@emotion/core'
import { ThemeObj } from '../theme'

const BodyText = css`
  color: ${ThemeObj.colors.neutral900};
  font-size: 14px;
  line-height: 24px;
  text-decoration: none;
`

export const BodyBoldStyle = css`
  ${BodyText}
  font-weight: ${ThemeObj.fonts.weight.bold};
`

export const BodySemiboldStyle = css`
  ${BodyText}
  font-weight: ${ThemeObj.fonts.weight.semibold};
`

export const BodyRegularStyle = css`
  ${BodyText}
  font-weight: ${ThemeObj.fonts.weight.regular};
`
