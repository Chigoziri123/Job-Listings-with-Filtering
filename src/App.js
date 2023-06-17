import {useEffect, useState} from "react";
import ListingsData from "./data/data.json";
import Header from './components/Header';
import JobCard from "./components/JobCard";
import FilterItem from "./components/FilterItem";



function App() {
  const [listings, setListings] = useState([]);
  const [filters, setFilter] = useState([]);

  useEffect(() => {
    if(filters.length === 0)
      setListings(ListingsData);
    
}, [filters])
  
const filterListings = (filter_by = '') => {
  if(!filters.includes(filter_by) && filter_by !== '')
  setFilter([...filters, filter_by])

  setListings(listings.filter( listing => [...listing.languages, ...listing.tools].includes(filter_by)))
}
  return (
    <div>
      <Header/>
      <div className="flex justify-center items-center h-12">
        { filters.map( filter => <FilterItem item={filter}/>)}
      </div>
      <div className="grid p-16 justify-center items-center text-gray-900">
        {/* {listings.map((listing) => (<p key={listing.company}>{listing.company}</p>))} */}
        { listings.map( listing => <JobCard listing={listing} key={listing.id} filtering={filterListings} />)}
      </div>
    </div>
    
    
  )
}

export default App;
