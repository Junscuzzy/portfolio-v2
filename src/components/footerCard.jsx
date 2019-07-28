import React, { useState } from 'react'
import { animated, useSpring } from 'react-spring'
import uniqid from 'uniqid'
import PropTypes from 'prop-types'

import { Flex, Heading, Link as RebassLink, Text } from '../utils/rebass'
import Link from './link'
import { shadows } from '../utils/theme'

function FooterCard({ titre, intro, links }) {
  const [hover, setHover] = useState(false)
  const hoverState = useSpring({
    transform: hover ? 'scale(1.05)' : 'scale(1)',
    borderWidth: hover ? 1 : 0,
    borderStyle: hover ? `solid` : `initial`
  })

  return (
    <animated.div
      style={{
        overflow: 'hidden',
        width: `100%`,
        boxShadow: shadows[3],
        ...hoverState
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Flex
        width={[1]}
        flexDirection="column"
        justifyContent="space-between"
        py={[4]}
        px={[3]}
        bg={hover ? `transparent` : `blue`}
        style={{ minHeight: `240px` }}
      >
        <div>
          <Heading fontSize={[4]} as="h3">
            {titre}
          </Heading>
          <Text>{intro}</Text>
        </div>
        <div>
          {links &&
            links.map(({ label, lien }, index) => (
              <Link
                as={RebassLink}
                to={lien}
                style={{ display: `block` }}
                key={uniqid(index)}
              >
                {label}
              </Link>
            ))}
        </div>
      </Flex>
    </animated.div>
  )
}

FooterCard.propTypes = {
  titre: PropTypes.string.isRequired,
  intro: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      lien: PropTypes.string.isRequired
    })
  )
}

FooterCard.defaultProps = {
  links: []
}

export default FooterCard