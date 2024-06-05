import {
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  Typography,
} from '@mui/material'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import EditIcon from '@mui/icons-material/Edit'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import { getBrands } from '../store/brands'
import { getProducts } from '../store/products'
import { getFirms } from '../store/firms'
import { uiActions } from '../store/uiSlice'
import { deletePurchase, getPurchases } from '../store/purchases'
import PurchaseModal from '../components/Modals/PurchaseModal'

const Purchases = () => {
  const dispatch = useDispatch()

  const [open, setOpen] = useState(false)
  const [edit, setEdit] = useState(false)

  const purchases = useSelector((state) => state.purchases.data)
  const products = useSelector((state) => state.products.data)
  const brands = useSelector((state) => state.brands.data)
  const firms = useSelector((state) => state.firms.data)

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
    dispatch(getFirms())
    dispatch(getPurchases())
  }, [])

  const handleEdit = (purchase) => {
    setEdit(true)
    setOpen(true)

    const modalData = {
      brand_id: brands.find((b) => b.name === purchase.brand).id,
      product_id: products.find((p) => p.name === purchase.product).id,
      firm_id: firms.find((f) => f.name === purchase.firm).id,
      quantity: purchase.quantity,
      price: purchase.price,
      id: purchase.id,
    }

    dispatch(uiActions.setModalData(modalData))
  }

  const handleDelete = (id) => {
    dispatch(deletePurchase(id))
  }

  const columns = [
    { field: 'id', headerClass: 'hidden-header' },
    { field: 'no', headerName: '#', width: 50 },
    { field: 'product', headerName: 'Product', width: 120 },
    { field: 'firm', headerName: 'Firm', width: 120 },
    { field: 'brand', headerName: 'Brand', width: 120 },
    { field: 'category', headerName: 'Category', width: 120 },
    { field: 'price', headerName: 'Price', width: 120 },
    { field: 'quantity', headerName: 'Quantity', width: 120 },
    { field: 'total_price', headerName: 'Total Price', width: 120 },
    { field: 'Date-Time', width: 100 },
    { field: 'Owner', width: 100 },
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

  const rows = purchases.map((purchase, index) => ({
    id: index,
    no: index + 1,
    product: purchase.product,
    firm: purchase.firm,
    brand: purchase.brand,
    category: purchase?.category[0]?.name,
    price: purchase.price,
    quantity: purchase.quantity,
    total_price: purchase.price_total,
    'Date-Time': `${purchase.created} - ${purchase.time_hour}`,
    Owner: purchase.user,
  }))

  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" p={5}>
        <Typography variant="h5" component="h1" color="inherit" noWrap>
          Purchases
        </Typography>
        <Button variant="contained" onClick={openModal}>
          New Purchases
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

      <PurchaseModal open={open} edit={edit} closeModal={closeModal} />
    </Box>
  )
}

export default Purchases
