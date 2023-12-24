import { ArrowProps } from "../../interface/interfaces"


const NextArrow = ({className, style, onClick}: ArrowProps) => {
  return (
    <div
    className={`customNextArrow ${className}`}
      style={{ ...style }}
      onClick={onClick}
    />
  )
}

export default NextArrow