import { Box, Button, IconButton, Typography } from '@mui/material';
import { useState } from 'react';

import CommunityIcon from '../../public/Icons/communityIcon';
import CopyTemplateIcon from '../../public/Icons/copyTemplateIcon';
import DotsIcon from '../../public/Icons/dotsIcon';

import CustomPopover from './CustomPopover';

import EditIcon from '@mui/icons-material/Edit'
import PoolIcon from '@mui/icons-material/Pool'

export const popoverItems = [
  { text: 'Edit template', icon: <EditIcon /> },
  { text: 'Duplicate template', icon: <PoolIcon /> },
  { text: 'Delete template', icon: <PoolIcon /> }
]

interface TemplateCardProps {
  title: string;
  description: string;
  isPublished?: boolean;
  maxWidth?: string; 
  onClick?: () => void;
}

const CardWithHover: React.FC<TemplateCardProps> = ({
  title,
  description,
  isPublished,
  maxWidth,
  onClick
}) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        borderRadius: '16px',
        background: '#ffffff',
        padding: 2,
        cursor: 'pointer',
        maxWidth: maxWidth, 
        '&:hover .hover-it': {
          display: 'block'
        }
      }}
    >
      <Box display='flex' flexDirection='column' justifyContent='space-between' minHeight={170}>
        <Box display='flex' justifyContent='space-between' alignItems='center' mb={2}>
          <CommunityIcon />
          <IconButton className='hover-it' sx={{ display: 'none' }} onClick={isPublished ? handleClick : () => {}}>
            {isPublished ? <DotsIcon /> : <CopyTemplateIcon />}
          </IconButton>
        </Box>
        <Box>
          <Typography variant='body1' fontWeight={500}>
            {title}
          </Typography>
          <Typography variant='caption' sx={{ color: '#6B7280' }}>
            {description}
          </Typography>
        </Box>
        <Box className='hover-it' sx={{ display: 'none', width: '100%', mt: 2 }}>
          <Button fullWidth variant='contained' sx={{ borderRadius: '100px' }} onClick={onClick}>
            {isPublished ? 'Use Template' : 'Preview Template'}
          </Button>
        </Box>
      </Box>
      {isPublished && <CustomPopover items={popoverItems} anchorEl={anchorEl} onClose={handleClose} />}
    </Box>
  );
};

export default CardWithHover;
