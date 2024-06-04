import Box from '@mui/material/Box'
export default function BoardContent() {
  return (
    <Box sx={{
      backgroundColor: 'primary.main', width: '100%',
      display: 'flex', alignItems: 'center', height: (theme) => `calc(100vh - ${theme.trelloCumtom.appBarHeight} - ${theme.trelloCumtom.appBoardHeight})`
    }}> content</Box>
  )
}
