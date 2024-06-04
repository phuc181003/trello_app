import Box from '@mui/material/Box'
import ModeSelect from '../ModeSelect'

export default function AppBar() {
  return (
    <Box sx={{ backgroundColor: 'primary.light', width: '100%', height: (theme) => theme.trelloCumtom.appBarHeight, display: 'flex', alignItems: 'center' }}> <ModeSelect /></Box>
  )
}
