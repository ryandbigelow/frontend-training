import { css } from '@emotion/core'
import { ThemeObj } from '../theme'

const CaptionText = css`
  color: ${ThemeObj.colors.neutral900};
  font-size: 12px;
  line-height: 16px;
  text-decoration: none;
`

export const CaptionBoldStyle = css`
  ${CaptionText}
  font-weight: ${ThemeObj.fonts.weight.bold};
`

export const CaptionSemiboldStyle = css`
  ${CaptionText}
  font-weight: ${ThemeObj.fonts.weight.semibold};
`

export const CaptionRegularStyle = css`
  ${CaptionText}
  font-weight: ${ThemeObj.fonts.weight.regular};
`
