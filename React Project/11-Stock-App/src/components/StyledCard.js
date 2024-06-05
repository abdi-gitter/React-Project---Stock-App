import { Card, CardHeader, CardMedia, Box } from '@mui/material'
import { useState } from 'react'
import EditIcon from '@mui/icons-material/Edit'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'

const StyledCard = ({ item, onEdit, onDelete, selected }) => {
  const [editVisible, setEditVisible] = useState(false)
  console.log(selected, item.id)

  return (
    <Card
      onMouseOver={() => setEditVisible(true)}
      onMouseOut={() => setEditVisible(false)}
      sx={{
        position: 'relative',
        border: selected === item.id ? '2px solid red' : '',
      }}
    >
      <CardHeader
        title={item.name}
        sx={{ color: 'dodgerblue', textAlign: 'center' }}
      />
      <CardMedia
        component="img"
        src={item.image}
        height="250px"
        title={item.name}
        alt={item.name}
        sx={{ objectFit: 'cover', p: 2 }}
      />

      {editVisible && (
        <Box sx={{ position: 'absolute', mt: '10px', mr: '10px' }}>
          <EditIcon
            sx={{ cursor: 'pointer', color: 'orange' }}
            onClick={() => onEdit(item)}
          />
          <DeleteOutlineIcon
            sx={{ cursor: 'pointer', color: 'red' }}
            onClick={() => onDelete(item.id)}
          />
        </Box>
      )}
    </Card>
  )
}

export default StyledCard
