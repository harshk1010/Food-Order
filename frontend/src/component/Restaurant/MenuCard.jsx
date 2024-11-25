import React, { useState } from 'react'
import { Accordion, AccordionSummary,AccordionDetails, FormGroup,FormControlLabel,Checkbox, Button } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { categorizeIngredients } from '../util/categorizeIngredients';
import { useDispatch } from 'react-redux';


const demo = [
    {
        category:"Nuts & seeds",
        ingredients:["Cashews"]
    },
    {
        category:"Protein",
        ingredients:["Ground Beef","Bacon Strips"]
    }
]

const MenuCard = ({item}) => {

  const [selectedCategory, setSelectedCategory] = useState([])
  const dispatch = useDispatch();

  const handleCheckBoxChange=(itemName) => {
    console.log("value")
    if(selectedIngredients.includes(itemName)) {
      setSelectedIngredients(selectedIngredients.filter((item) =>
        item!==itemName))
    } else {
      setSelectedIngredients([...selectedIngredients,itemName])
    }
  };

  const handleAddItemToCart =(e) => {
    e.preventDefault()
    const reqData = {
      token : localStorage.getItem("jwt"),
      cartItem : {
        foodId : item.id,
        quantity : 1,
        ingredients: selectedIngredients,
      },
    };
    dispatch(addItemToCart(reqData))
    console.log("req data ",reqData);
  };

  return (
    <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
            <div className='lg:flex items-center justify-between'>
                <div className='lg:flex items-center lg:gap-5'>
                    <img className='w-[7rem] h-[7rem] object-cover'
                    src={item.images[0]}
                    alt=''/>
                    <div className='space-y-1 lg:space-y-5 lg:max-w-2xl'> 
                        <p className='font-semibold text-xl'>{item.name}</p>
                        <p>{item.price}</p>
                        <p className='text-gray-400'>{item.description}</p>
                    </div>
                </div>
            </div>
      
        </AccordionSummary>
        <AccordionDetails>
          <form onSubmit={handleAddItemToCart}>
            <div className='flex gap-5 flex-wrap'>
                {
                  Object.keys(categorizeIngredients(item.ingredients))
                  .map((category) =>
                    <div>
                      <p>{category}</p>
                    <FormGroup>
          { categorizeIngredients(item.ingredients)[category].map((item) =>
           <FormControlLabel key={item.id}
           control={<Checkbox  onChange={() =>
            handleCheckBoxChange(item)}/>} label={item.name} />)}
           
                  </FormGroup>
                  </div>
                   )}                
              </div>
              <div className='pt-5'>
                <Button variant='contained' disabled={false} type='submit'>
                  {true?"Ado to Cart": "Out of Stock"}</Button>
              </div>
          </form>
        </AccordionDetails>
      </Accordion>
  )
}

export default MenuCard

