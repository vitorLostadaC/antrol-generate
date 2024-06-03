import React, { ImgHTMLAttributes } from 'react'

interface AwsImageProps
  extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  generationId: string
  width?: number
  height?: number
}

export const AwsImage: React.FC<AwsImageProps> = ({
  generationId,
  width = 200,
  height = 200,
  ...props
}) => {
  // eslint-disable-next-line jsx-a11y/alt-text
  return (
    <img
      src={`/api/images/${generationId}?width=${width}&height=${height}`}
      {...props}
    />
  )
}
