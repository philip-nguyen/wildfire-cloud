import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },

  {
    title: 'WildfireAnalysis',
    path: '/WildfireAnalysis',
    icon: <IoIcons.IoMdLocate />,
    cName: 'nav-text'
  },

  {
    title: 'WildfireDetection',
    path: '/WildfireDetection',
    icon: <IoIcons.IoIosFlame />,
    cName: 'nav-text'
  },

  {
    title: 'WildfirePrediction',
    path: '/WildfirePrediction',
    icon: <IoIcons.IoMdFastforward />,
    cName: 'nav-text'
  }
]
