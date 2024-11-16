import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import DropdownMenu from './DropdownMenu.jsx'

const options = [
  { value: 'option1', label: 'tata' },
  { value: 'option2', label: 'tete' },
  { value: 'option3', label: 'titi' },
  { value: 'option3', label: 'titi' },
  { value: 'option3', label: 'titi' },
  { value: 'option4', label: 'toto' }
];

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DropdownMenu options={options}/>
  </StrictMode>,
)
