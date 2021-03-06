/** @jsx jsx */
import { jsx, Flex, Box, Container } from 'theme-ui'
import { FC } from 'react'

import { GridIcon, ListIcon } from '../../components/Icons'
import { hoverStyle } from '../../gatsby-plugin-theme-ui/theme'

const iconButtonStyle = {
  ...hoverStyle,
  px: 3,
  '& svg': {
    fill: 'text',
    transition: 'color 200ms ease'
  },

  '&:hover svg': {
    fill: 'secondary'
  }
}

export interface BlogFilterBarProps {
  onChangeMode: (mode: boolean) => void
}

const BlogFilterBar: FC<BlogFilterBarProps> = ({ onChangeMode }) => (
  <Container variant="blog">
    <Flex sx={{ justifyContent: 'flex-end' }}>
      <Box sx={iconButtonStyle} onClick={() => onChangeMode(true)}>
        <GridIcon size={32} />
      </Box>
      <Box sx={iconButtonStyle} onClick={() => onChangeMode(false)}>
        <ListIcon size={32} />
      </Box>
    </Flex>
  </Container>
)

export default BlogFilterBar
