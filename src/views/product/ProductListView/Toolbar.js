import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon,
  makeStyles
} from '@material-ui/core';
import { Search as SearchIcon } from 'react-feather';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles((theme) => ({
  root: {},
  importButton: {
    marginRight: theme.spacing(1)
  },
  exportButton: {
    marginRight: theme.spacing(1)
  }
}));

const Toolbar = ({ className, ...rest }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Box
        display="flex"
        justifyContent="flex-end"
      >
        <Button
          className={classes.editButton}
          startIcon={<EditIcon />}
          onClick={handleClickOpen}
        >
          Edit
        </Button>
        <Button className={classes.importButton}>
          Import
        </Button>
        <Button className={classes.exportButton}>
          Export
        </Button>
        <Button
          color="primary"
          variant="contained"
          onClick={handleClickOpen}
        >
          Add product
        </Button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">New Product</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please Add New Product
            </DialogContentText>
            <Button
              variant="contained"
              color="default"
              className={classes.button}
              fullWidth
              startIcon={<CloudUploadIcon />}
            >
              Upload Image
            </Button>
            <TextField required id="standard-required-sku" label="SKU" margin="normal" />
            <TextField required id="standard-required-name" label="Name" margin="normal" />
            <TextField
              autoFocus
              id="category"
              label="Category"
              type="category"
              fullWidth
              margin="normal"
            />
            <TextField
              autoFocus
              id="brand"
              label="Brand"
              type="brand"
              fullWidth
              margin="normal"
            />
            <TextField
              autoFocus
              id="manufacture"
              label="Manufacture"
              type="manufacture"
              fullWidth
              margin="normal"
            />
            <TextField
              required
              id="selling_price"
              label="Selling Price"
            />
            <TextField
              required
              id="cost_price"
              label="Cost Price"
            />
            <TextField
              autoFocus
              id="discount"
              label="Discount"
              type="discount"
              fullWidth
              margin="normal"
            />
            <TextField
              autoFocus
              id="stock"
              label="Stock"
              type="stock"
              fullWidth
              margin="normal"
            />
            <TextField
              id="discription"
              label="Discription"
              multiline
              rows={4}
              variant="outlined"
              fullWidth
              margin="normal"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleClose} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
      <Box mt={3}>
        <Card>
          <CardContent>
            <Box maxWidth={500}>
              <TextField
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SvgIcon
                        fontSize="small"
                        color="action"
                      >
                        <SearchIcon />
                      </SvgIcon>
                    </InputAdornment>
                  )
                }}
                placeholder="Search product"
                variant="outlined"
              />
            </Box>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

Toolbar.propTypes = {
  className: PropTypes.string
};

export default Toolbar;
