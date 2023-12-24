import { ArrowProps } from "../../interface/interfaces"


const PrevArrow = ({className, style, onClick}: ArrowProps) => {
  return (
    <div
    className={`customPrevArrow ${className}`}
      style={{ ...style}}
      onClick={onClick}
    />
  )
}

export default PrevArrow