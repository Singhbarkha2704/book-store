import React, {useState, useEffect} from 'react'
import './style.css'
import { Helmet } from 'react-helmet'
// import {Link} from 'react-router-dom'
import axios from 'axios'

const Shop = () => {
      const [results, setResults] = useState([]);
    const [searchValue, setSearchValue] = useState([]);
    const [sortValue, setSortValue] = useState()


     useEffect(()=>{
         loadBooksData();
     }, [])
    
    const loadBooksData = async () => {
        return await axios.get(`http://localhost:3000/books`).then(res => {
            console.log(res.data);
            setResults(res.data)
        }).catch(err=>console.log(err))
    }

  const searchHandle=async (e)=>{
      e.preventDefault()
      return await axios.get(`http://localhost:3000/books?q=${searchValue}`)
          .then(res => {
              setResults(res.data)
              setSearchValue('')
          })
          .catch(err => console.log(err));
    }
    
    const resetHandle = () => {
       loadBooksData()
    } 
    
    const sortOptions = ['title', 'authors']

    const sortHandle = async(e) => {
        let value = e.target.value
        setSortValue(value)
        console.log(sortValue);
        return await axios.get(`http://localhost:3000/books?_sort=${value}&_order=asc`)
            .then(res => {
              console.log(res.data);
              setResults(res.data)
          })
          .catch(err => console.log(err));
    }

  return (
    <div>
          <Helmet><title>Shopping</title></Helmet>
          <h1 className='heading'>Books</h1>
          
             {/* Sort DropDown */}
          <div className='select-container'>
              <h5>Sort By:</h5>
              <select className='btn btn-outline-success select'  value={sortValue} onChange={sortHandle}>
                  <option>Please Select</option>
                  {sortOptions.map((item, index) => (
                      <option value={item}>{item}</option>
                  ))}
              </select>
          </div>

            {/* Search Bar */}
          <div className='search-container'>                 
              <form className='form-outline input-group ' onSubmit={searchHandle}>             
              <input
                  type='text'
                  className='form-control custom-search'
                  placeholder='Search'
                  value={searchValue}
                  onChange={(e) =>{setSearchValue(e.target.value) }} />
                <button type='submit' className='btn btn-dark btn-lg fa fa-search' ></button>
                <button className='btn btn-danger btn-lg ms-2 me-5'  onClick={()=>resetHandle()}>Reset</button>
                  </form>
            </div>

          {/* container to display books */}
            {console.log(results) }
            <div className='ms-3 me-3'>
            <div className='products'>
                {results.map(item => (
                    <div className="cards" >  
                        <div className='img-container'>           
                            <img
                                src={item.image_url}
                                className="product-image"
                                alt={item.title}
                            />
                            
                        </div> 
                <div>
                    <h6 className="product-name">{item.title}</h6> 
                    <p className='product-price'>{item.authors}</p>
                    <div><button className='product-add-btn'>Add to Wishlist</button></div>
                </div> 
                </div>
                       ))} 
                    </div>
                    </div>
    </div>
  )
}

export default Shop
