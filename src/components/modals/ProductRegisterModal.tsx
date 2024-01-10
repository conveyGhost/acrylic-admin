import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  TextField,
} from '@mui/material';
import ImageInput from '../ImageInput';
import { useState } from 'react';
import { ProductInterface } from '../../pages/ProductRegister/ProductRegister';

export interface CreateModalProps {
  onClose: () => void;
  onSubmit: (values: any) => void;
  open: boolean;
  defaultValue: ProductInterface;
}

//example of creating a mui dialog modal for creating new rows
const CreateModal = ({
  open,
  onClose,
  onSubmit,
  defaultValue
}: CreateModalProps) => {
  const [values, setValues] = useState<ProductInterface>({
    id: defaultValue.id,
    image_url: defaultValue.image_url,
    image_mode: defaultValue.image_mode,
    name: defaultValue.name,
    code: defaultValue.code,
    part_number: defaultValue.part_number,
    ancient_time: defaultValue.ancient_time,
    price: defaultValue.price
  });
  const [imageFile, setImageFile] = useState<File>();

  const handleImageSelect = (file: File)  => {
    setImageFile(file);
  }
  const handleSubmit = () => {
    onSubmit(values);
    onClose();
  };

  return (
    <Dialog open={open}>
      <DialogTitle textAlign="center">Create New Product</DialogTitle>
      <DialogContent>
        <form onSubmit={(e) => e.preventDefault()}>
          <Stack
            sx={{
              width: '100%',
              minWidth: { xs: '300px', sm: '360px', md: '400px' },
              gap: '1.5rem',
            }}
          >
            {values.id !== 0 &&
              <TextField
                key="id"
                label="ID"
                name="id"
                value={values.id}
                onChange={(e) =>
                  setValues({ ...values, [e.target.name]: e.target.value })
                }
                disabled
              />
            }
            <ImageInput onImageSelect={handleImageSelect}  />
            <TextField
              key="image_mode"
              label="絵型"
              name="image_mode"
              value={values.image_mode}
              onChange={(e) =>
                setValues({ ...values, [e.target.name]: e.target.value })
              }
            />
            <TextField
              key="code"
              label="商品コード"
              name="code"
              value={values.code}
              onChange={(e) =>
                setValues({ ...values, [e.target.name]: e.target.value })
              }
            />
            <TextField
              key="part_number"
              label="仮品番"
              name="part_number"
              value={values.part_number}
              onChange={(e) =>
                setValues({ ...values, [e.target.name]: e.target.value })
              }
            />
            <TextField
              key="name"
              label="商品名"
              name="name"
              value={values.name}
              onChange={(e) =>
                setValues({ ...values, [e.target.name]: e.target.value })
              }
            />
            <TextField
              key="ancient_time"
              label="上代"
              name="ancient_time"
              defaultValue={values.ancient_time}
              onChange={(e) =>
                setValues({ ...values, [e.target.name]: e.target.value })
              }
            />
            <TextField
              key="price"
              label="原価"
              name="price"
              defaultValue={values.price}
              onChange={(e) =>
                setValues({ ...values, [e.target.name]: e.target.value })
              }
            />
          </Stack>
        </form>
      </DialogContent>
      <DialogActions sx={{ p: '1.25rem' }}>
        <Button onClick={onClose}>Cancel</Button>
        <Button color="secondary" onClick={handleSubmit} variant="contained">
          {values.id === 0 ? "Create" : "Update"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateModal;