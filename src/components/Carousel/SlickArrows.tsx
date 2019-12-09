/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Box } from 'rebass'

import Next from '../../images/next.svg'
import Back from '../../images/back.svg'

const style = {
  width: '32px',
  height: '32px',
  display: 'block',
  my: 0,
  mx: -4,
  fill: 'cyan',
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  cursor: 'pointer',
  svg: {
    display: ['none', 'none', 'block'],
    fill: 'cyan',
    transition: 'fill 200ms ease',
    '&:hover': {
      fill: 'pink'
    }
  }
}

type Props = {
  onClick?: () => void
}

// eslint-disable-next-line
export const NextArrow = ({ onClick, ...props }: Props) => (
  <Box {...props} sx={{ ...style, right: 0 }} onClick={onClick}>
    <Next />
  </Box>
)

// eslint-disable-next-line
export const BackArrow = ({ onClick, ...props }: Props) => (
  <Box {...props} sx={{ ...style, left: 0 }} onClick={onClick}>
    <Back />
  </Box>
)
