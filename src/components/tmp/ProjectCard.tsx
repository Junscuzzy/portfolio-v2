/** @jsx jsx */
import { jsx, Flex, Styled } from 'theme-ui'

import { PrismicText, PrismicTechTag } from '../../utils/types'
import Html from './Html'
import TagList from './TagList'

const style = {
  root: {
    flexDirection: 'column',
    justifyContent: 'center',
    px: 3,
    mx: [0, 0, -3]
  },
  category: {
    color: 'primary',
    fontFamily: 'mono'
  },
  title: {
    mt: 2
  },
  html: {
    boxShadow: 3,
    bg: 'blue',
    p: 3,
    ml: -3,
    my: 3
  },
  tags: {
    my: 3
  }
}

type Props = {
  title: PrismicText
  html?: PrismicText
  projectType?: PrismicText
  tags?: PrismicTechTag[]
}

export default function ProjectCard({ title, projectType, tags, html }: Props) {
  return (
    <Flex sx={style.root}>
      <Styled.p sx={style.category}>
        {projectType ? projectType.text : ''}
      </Styled.p>
      <Styled.h2 sx={style.title}>{title && title.text}</Styled.h2>
      <div sx={style.html}>{html && <Html html={html.html} />}</div>
      <div sx={style.tags}>{tags && <TagList tags={tags} />}</div>
    </Flex>
  )
}