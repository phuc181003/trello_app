import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Tooltip from '@mui/material/Tooltip'
import PersonAddIcon from '@mui/icons-material/PersonAdd'

export default function BoardBar() {
  const MENU_STYLES = {
    color: 'primary.main',
    bgcolor: 'primary.bg',
    border: 'none',
    borderRadius: '4px',
    '& .MuiSvgIcon-root': {
      color: 'primary.main'
    },
    '&:hover': {

      backgroundColor: '#35374B'

    }
  }
  return (
    <Box px={2} sx={{
      bgcolor: 'primary.dark',
      width: '100%',
      height: (theme) => theme.trelloCumtom.appBoardHeight,
      display: 'flex', alignItems: 'center',
      justifyContent: 'space-between',
      gap: 2,
      overflowX: 'auto',
      borderTop: '1px solid #fff'
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Chip sx={MENU_STYLES} icon={<SpaceDashboardIcon />} clickable label="Dashboard" />
        <Chip sx={MENU_STYLES} icon={<VpnLockIcon />} clickable label="Public/Private Workspace" />
        <Chip sx={MENU_STYLES} icon={<AddToDriveIcon />} clickable label="Add to google Diver" />
        <Chip sx={MENU_STYLES} icon={<ElectricBoltIcon />} clickable label="Automation" />
        <Chip sx={MENU_STYLES} icon={<FilterListIcon />} clickable label="Filters" />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Button variant="outlined" startIcon={<PersonAddIcon />} href="#outlined-buttons">
          Invite
        </Button>
        <AvatarGroup max={6}
          sx={{
            '& .MuiAvatar-root': {
              width: 34,
              height: 34,
              fontSize: '16px'
            }
          }}>
          <Tooltip title='minh phuc'>
            <Avatar alt="Remy Sharp" src="https://scontent.fdad1-4.fna.fbcdn.net/v/t1.6435-9/167453618_442878390278807_4997655549510755049_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFO19xIrSMGrxU5gfBlKJ0P4JNJa3l8J-Xgk0lreXwn5RRHJ7vBhymSmFqLhvdF8eX93nArKx36nzBvp7nW-LB2&_nc_ohc=FToQdgjNN_IQ7kNvgHyK5El&_nc_ht=scontent.fdad1-4.fna&oh=00_AYDimwHFBCOy0AheimYFhWyGUmEgNIEZwUK1PPQ_tqvC2g&oe=6687D69D" />
          </Tooltip>
          <Tooltip title='minh phuc'>
            <Avatar alt="Remy Sharp" src="https://scontent.fdad2-1.fna.fbcdn.net/v/t39.30808-6/447697300_1176464923531039_7907443372175539157_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHh_7AJY6yvAR0_qV3Zyk8Wc8hwj9PdeEBzyHCP0914QMcZ3pKUXDiOos7THZckNrE8lfFYz_W2HBZ6sOz8LSt8&_nc_ohc=s2bG483280oQ7kNvgETu-3n&_nc_ht=scontent.fdad2-1.fna&oh=00_AYBNPYiwJscfi9RAtZRv5hJ63-8eEJsI6dUcw7EoOTVq7Q&oe=666A5380" />
          </Tooltip>
          <Tooltip title='minh phuc'>
            <Avatar alt="Remy Sharp" src="https://scontent.fdad1-1.fna.fbcdn.net/v/t39.30808-6/447495851_1227726901786305_5727327231065391446_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHKCNQMDNTqhkFdoh7GrPAT56fMkm1qi4nnp8ySbWqLiT4zy4SoLHpX7DzazoqE1UQwPBdivili7W0ik9OwJxNz&_nc_ohc=eiTKunja21IQ7kNvgGUWk-Y&_nc_ht=scontent.fdad1-1.fna&oh=00_AYDqs5EMW8NCwHtBN-bFQL4SdW7jMFOxueQ_yLwtSFTC6w&oe=666A251B" />
          </Tooltip>
          <Tooltip title='minh phuc'>
            <Avatar alt="Remy Sharp" src="https://scontent.fdad1-2.fna.fbcdn.net/v/t39.30808-6/441921396_1006221294204177_6998606136175862630_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFLbRv3Z59X-JXi7eU-JjnGJFZrXlQev2YkVmteVB6_ZsPj5T4cwzcZ02JRGxzLr--_BbXvjJLF3M53wkrffHfC&_nc_ohc=irp9ZqClFyYQ7kNvgFxbfmW&_nc_ht=scontent.fdad1-2.fna&oh=00_AYCxK0F038a-s1NTVwaNxutmcrAihXVzkepzh-mb2zBWzQ&oe=666A3CCA" />
          </Tooltip>
          <Tooltip title='minh phuc'>
            <Avatar alt="Remy Sharp" src="https://scontent.fdad1-1.fna.fbcdn.net/v/t39.30808-6/447969408_1014606260671311_197023030024423911_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEzVub8VtCRmwk-PoxyXGfy2vCR_k7nH9va8JH-Tucf259tIIeYuLYL0GzEt9UpenX-Gw5IB-il9AOC1XmkHbrD&_nc_ohc=0k9iODCjueQQ7kNvgEsq42i&_nc_ht=scontent.fdad1-1.fna&oh=00_AYA98oDq3MG0clmC27rsHuGRsqMTIeJsrQecf8k9d3_8hw&oe=666A3776" />
          </Tooltip>
          <Tooltip title='minh phuc'>
            <Avatar alt="Remy Sharp" src="https://scontent.fdad1-4.fna.fbcdn.net/v/t1.6435-9/167453618_442878390278807_4997655549510755049_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFO19xIrSMGrxU5gfBlKJ0P4JNJa3l8J-Xgk0lreXwn5RRHJ7vBhymSmFqLhvdF8eX93nArKx36nzBvp7nW-LB2&_nc_ohc=FToQdgjNN_IQ7kNvgHyK5El&_nc_ht=scontent.fdad1-4.fna&oh=00_AYDimwHFBCOy0AheimYFhWyGUmEgNIEZwUK1PPQ_tqvC2g&oe=6687D69D" />
          </Tooltip>
          <Tooltip title='minh phuc'>
            <Avatar alt="Remy Sharp" src="https://scontent.fdad1-4.fna.fbcdn.net/v/t1.6435-9/167453618_442878390278807_4997655549510755049_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFO19xIrSMGrxU5gfBlKJ0P4JNJa3l8J-Xgk0lreXwn5RRHJ7vBhymSmFqLhvdF8eX93nArKx36nzBvp7nW-LB2&_nc_ohc=FToQdgjNN_IQ7kNvgHyK5El&_nc_ht=scontent.fdad1-4.fna&oh=00_AYDimwHFBCOy0AheimYFhWyGUmEgNIEZwUK1PPQ_tqvC2g&oe=6687D69D" />
          </Tooltip>
          <Tooltip title='minh phuc'>
            <Avatar alt="Remy Sharp" src="https://scontent.fdad1-4.fna.fbcdn.net/v/t1.6435-9/167453618_442878390278807_4997655549510755049_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFO19xIrSMGrxU5gfBlKJ0P4JNJa3l8J-Xgk0lreXwn5RRHJ7vBhymSmFqLhvdF8eX93nArKx36nzBvp7nW-LB2&_nc_ohc=FToQdgjNN_IQ7kNvgHyK5El&_nc_ht=scontent.fdad1-4.fna&oh=00_AYDimwHFBCOy0AheimYFhWyGUmEgNIEZwUK1PPQ_tqvC2g&oe=6687D69D" />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  )
}
