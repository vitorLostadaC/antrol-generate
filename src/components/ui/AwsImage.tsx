import React, { ImgHTMLAttributes } from 'react'

interface AwsImageProps
  extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  generationId: string
}

export const AwsImage: React.FC<AwsImageProps> = ({
  generationId,
  ...props
}) => {
  // eslint-disable-next-line jsx-a11y/alt-text
  return <img src={`/api/images/${generationId}`} {...props} />
}
