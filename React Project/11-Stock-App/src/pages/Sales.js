import {
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  Typography,
} from '@mui/material'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteSale, getSales } from '../store/sales'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import SaleModal from '../components/Modals/SaleModal'
import EditIcon from '@mui/icons-material/Edit'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import { getBrands } from '../store/brands'
import { getProducts } from '../store/products'
import { uiActions } from '../store/uiSlice'

const Sales = () => {
  const dispatch = useDispatch()

  const [open, setOpen] = useState(false)
  const [edit, setEdit] = useState(false)

  const sales = useSelector((state) => state.sales.data)
  const products = useSelector((state) => state.products.data)
  const brands = useSelector((state) => state.brands.data)

  const closeModal = () => {
    setOpen(false)
    setEdit(false)
  }

  const openModal = () => {
    setOpen(true)
  }

  useEffect(() => {
    dispatch(getBrands())
    dispatch(getProducts())
    dispatch(getSales())
  }, [])

  const handleEdit = (sale) => {
    setEdit(true)
    setOpen(true)

    const modalData = {
      brand_id: brands.find((b) => b.name === sale.brand).id,
      product_id: products.find((p) => p.name === sale.product).id,
      quantity: sale.quantity,
      price: sale.price,
      id: sale.id,
    }

    dispatch(uiActions.setModalData(modalData))
  }

  const handleDelete = (id) => {
    dispatch(deleteSale(id))
  }

  const columns = [
    { field: 'id', width: 50, headerClass: 'hidden-header' },
    { field: 'no', headerName: '#', width: 50 },
    { field: 'product', headerName: 'Product', width: 150 },
    { field: 'brand', headerName: 'Brand', width: 150 },
    { field: 'category', headerName: 'Category', width: 150 },
    { field: 'price', headerName: 'Price', width: 150 },
    { field: 'quantity', headerName: 'Quantity', width: 100 },
    { field: 'total_price', headerName: 'Total Price', width: 150 },
    { field: 'Date-Time', width: 150 },
    { field: 'Owner', width: 150 },
    {
      field: 'Actions',
      renderCell: (params) => (
        <Stack direction="row" spacing={2}>
          <IconButton onClick={() => handleEdit(params.row)}>
            <EditIcon sx={{ color: 'orange' }} />
          </IconButton>
          <IconButton onClick={() => handleDelete(params.row.id)}>
            <DeleteOutlineIcon sx={{ color: 'red' }} />
          </IconButton>
        </Stack>
      ),
    },
  ]

  const rows = sales.map((sale, index) => ({
    id: sale.id,
    no: index + 1,
    product: sale.product,
    brand: sale.brand,
    category: sale?.category[0]?.name,
    price: sale.price,
    quantity: sale.quantity,
    total_price: sale.price_total,
    'Date-Time': `${sale.created} - ${sale.time_hour}`,
    Owner: sale.user,
  }))

  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" p={5}>
        <Typography variant="h5" component="h1" color="inherit" noWrap>
          Sales
        </Typography>
        <Button variant="contained" onClick={openModal}>
          New Sale
        </Button>
      </Stack>

      <Container maxWidth="xl">
        <DataGrid
          columns={columns}
          rows={rows}
          slots={{ toolbar: GridToolbar }}
          disableRowSelectionOnClick
          sx={{
            bgColor: 'white',
            '&.MuiDataGrid-root .MuiDataGrid-cell': {
              outline: 'none !important',
            },
          }}
        />
      </Container>

      <SaleModal open={open} edit={edit} closeModal={closeModal} />
    </Box>
  )
}

export default Sales
