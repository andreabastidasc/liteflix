import React from 'react'
import { NotificationsIcon } from './notifications'
import { MenuIcon } from './menu'
import { PlusIcon } from './plus'
import { StarIcon } from './star'
import { CloseIcon } from './close'
import { PlayRoundedIcon } from './play-rounded'
import { PlayIcon } from './play'
import { ClipIcon } from './clip'
import { CheckIcon } from './check'
import { ArrowIcon } from './arrow'
import { TriangleIcon } from './triangle'

const icons = {
  notifications: NotificationsIcon,
  menu: MenuIcon,
  plus: PlusIcon,
  star: StarIcon,
  close: CloseIcon,
  playRounded: PlayRoundedIcon,
  play: PlayIcon,
  clip: ClipIcon,
  check: CheckIcon,
  arrow: ArrowIcon,
  triangle: TriangleIcon
}

const Icon = props => {
  const Component = icons[props.name]
  if (Component) {
    return <Component {...props} />
  }

  return null
}

export default Icon
