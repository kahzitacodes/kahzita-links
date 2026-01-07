'use client'

import Image, { ImageProps } from 'next/image'
import { useTheme } from 'next-themes'

import bgDark from '@/assets/bg-dark.jpg'
import bgLight from '@/assets/bg-light.jpg'
import React, { useEffect, useState } from 'react'

type ThemedImageProps = Omit<ImageProps, "src" | "alt"> & {
  src?: ImageProps["src"]
  alt?: ImageProps["alt"]
}

function ThemedImage({ src: _src, alt = '', ...rest }: ThemedImageProps) {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  let src

  useEffect(() => {
    setMounted(true)
  }, [])

  switch (resolvedTheme) {
    case 'light':
      src = bgLight
      break
    case 'dark':
      src = bgDark
      break
    default:
      break
  }

  if (!mounted || !src) {
    return <Image priority src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt={alt} width={1920} height={1080} {...rest} />
  }

  return <Image priority src={src} alt={alt} width={400} height={400} {...rest} />
}

export default ThemedImage