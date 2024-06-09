import Box from '@mui/material/Box'
export default function BoardContent() {
  return (
    <Box sx={{
      backgroundColor: 'primary.container',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      borderTop: '1px solid #F64A8A',
      height: (theme) => `calc(100vh - ${theme.trelloCumtom.appBarHeight} - ${theme.trelloCumtom.appBoardHeight})`
    }}> content</Box>
  )
}
