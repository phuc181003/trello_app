import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import { useColorScheme } from '@mui/material/styles'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'

function ModeSelect() {
  const { mode, setMode } = useColorScheme()
  const handleChange = (event) => {
    setMode(event.target.value)
  }

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="lable-select-dark-light-mode">Mode</InputLabel>
      <Select
        labelId="lable-select-dark-light-mode"
        id="select-dark-light-mode"
        value={mode}
        label="mode"
        onChange={handleChange}
      >
        <MenuItem value='light'>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <LightModeIcon fontSize='small' /> Light
          </Box>

        </MenuItem>
        <MenuItem value='dark'>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <DarkModeOutlinedIcon fontSize='small' /> Dark
          </Box>

        </MenuItem>
        <MenuItem value='system'>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <SettingsBrightnessIcon fontSize='small' /> System
          </Box>

        </MenuItem>
      </Select>
    </FormControl>
  )
}


function App() {

  return (
    <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
      <Box sx={{ backgroundColor: 'primary.light', width: '100%', height: (theme) => theme.trelloCumtom.appBarHeight, display: 'flex', alignItems: 'center' }}> <ModeSelect /></Box>
      <Box sx={{ backgroundColor: 'primary.dark', width: '100%', height: (theme) => theme.trelloCumtom.appBoardHeight, display: 'flex', alignItems: 'center' }}>Board bar</Box>
      <Box sx={{
        backgroundColor: 'primary.main', width: '100%',
        display: 'flex', alignItems: 'center', height: (theme) => `calc(100vh - ${theme.trelloCumtom.appBarHeight} - ${theme.trelloCumtom.appBoardHeight})`
      }}> content</Box>
    </Container>
  )
}

export default App
