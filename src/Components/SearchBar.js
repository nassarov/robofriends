import React from "react";

const SearchBar= ({searchfield,searchChange})=>{
    return(
     <input type="text" placeholder="Search Robots" className="br3 bw1 pa2 mb2 ba b--green bg-lightest-blue" 
     onChange={searchChange}
     />
    )
}
export default SearchBar;