import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  MenuItem,
  Stack,
  TextField,
  Tooltip,
} from '@mui/material';
import { AnyAction } from '@reduxjs/toolkit';
import React, { useCallback, useMemo, useState } from 'react';

export interface ColumnInterface {
  id: string;
  name: string;
  type: string;
}

export interface CreateModalProps {
  columns: ColumnInterface[];
  onClose: () => void;
  onSubmit: (values: any) => void;
  open: boolean;
  title: string;
}

//example of creating a mui dialog modal for creating new rows
const CreateModal = ({
  open,
  columns,
  onClose,
  onSubmit,
  title
}: CreateModalProps) => {
  const [values, setValues] = useState<Array<String>>(() =>
    columns.reduce((acc, column) => {
      acc[column.id] = '';
      return acc;
    }, {} as any),
  );

  const handleSubmit = () => {
    onSubmit(values);
    onClose();
  };

  return (
    <Dialog open={open}>
      <DialogTitle textAlign="center">Create New {title}</DialogTitle>
      <DialogContent>
        <form onSubmit={(e) => e.preventDefault()}>
          <Stack
            sx={{
              width: '100%',
              minWidth: { xs: '300px', sm: '360px', md: '400px' },
              gap: '1.5rem',
            }}
          >
            {columns.map((column) => (
              <TextField
                key={column.id}
                label={column.name}
                name={column.id}
                type={column.type}
                onChange={(e) =>
                  setValues({ ...values, [e.target.name]: e.target.value })
                }
              />
            ))}
          </Stack>
        </form>
      </DialogContent>
      <DialogActions sx={{ p: '1.25rem' }}>
        <Button onClick={onClose}>Cancel</Button>
        <Button color="secondary" onClick={handleSubmit} variant="contained">
          Create
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateModal;