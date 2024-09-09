import React, { useState } from 'react';
import { Button, Box } from '@mui/material';

const EditStudentToggleSwitch = ({ activeButton, setActiveButton, handleOne, handleTwo, handleThree }) => {

  return (
    <Box
      sx={{
        display: 'flex',
        borderRadius: '20px',
        overflow: 'hidden',
        padding: '4px',
        backgroundColor: '#F9F9F9',
      }}
    >
      <Button
        variant={activeButton === '1' ? 'contained' : 'outlined'}
        style={{
          minHeight: '50px',
          minWidth: '180px',
          backgroundColor: activeButton === '1' ? '#000000' : 'transparent',
          color: activeButton === '1' ? '#fff' : '#000000',
          border: 'none',
          borderRadius: '20px',
          marginRight: '4px',
        }}
        onClick={handleOne}
      >
        Basic Info
      </Button>
      <Button
        variant={activeButton === '2' ? 'contained' : 'outlined'}
        style={{
          minHeight: '50px',
          minWidth: '180px',
          backgroundColor: activeButton === '2' ? '#000000' : 'transparent',
          color: activeButton === '2' ? '#fff' : '#000000',
          border: 'none',
          borderRadius: '20px',
          marginRight: '4px',
        }}
        onClick={handleTwo}
      >
        Additional Info
      </Button>
      <Button
        variant={activeButton === '3' ? 'contained' : 'outlined'}
        style={{
          minHeight: '50px',
          minWidth: '180px',
          backgroundColor: activeButton === '3' ? '#000000' : 'transparent',
          color: activeButton === '3' ? '#fff' : '#000000',
          border: 'none',
          borderRadius: '20px',
          marginRight: '4px',
        }}
        onClick={handleThree}
      >
        Doc Uploads
      </Button>
    </Box>
  );
};

export default EditStudentToggleSwitch;
