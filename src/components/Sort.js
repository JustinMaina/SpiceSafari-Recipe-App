import React from "react"

function SortBar ({sortChoice, handleSortChoice}){

    return(
    
        <select onChange={handleSortChoice} value={sortChoice} className="form-select mt-3 mb-3">
            <option>SORT BY </option>
            <option value="bestrating">Best rating</option>
            <option value="alphabetical-order">Alphabetical order</option>
        </select>
    )
}
export default SortBar