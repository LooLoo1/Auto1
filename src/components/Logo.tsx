import { Box, BoxProps } from '@mui/material'

export const Logo = ({sx, ...rest}: BoxProps) => (
  <Box
    component="img"
    src="/logo.svg"
    alt="Logo"
    sx={{ width: 200, height: 50, ...sx }}
    {...rest}
  />
)
