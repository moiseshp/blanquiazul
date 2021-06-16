import { Box, Button } from '@material-ui/core'

type Props = {
  item?: Number
  color?: any
  variant?: any
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

const NumberItem: React.FC<Props> = ({ item, color, variant, onClick }) => {
  return (
    <Button
      onClick={onClick}
      variant={variant}
      color={color}
      disableElevation
      size="small"
      fullWidth
    >
      <Box
        fontSize={25}
        fontWeight="bold"
      >
        {item}
      </Box>
    </Button>
  )
}

export default NumberItem
