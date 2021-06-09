
const Search = ({ search, onSearch }) => {
  const handleSearch = (e) => {
    onSearch(e.target.value)
  }
  return (
    <div>
      <input 
        className="form-control me-1" 
        type="search" 
        placeholder="Search Todo"
        value={search}
        onChange={handleSearch}
      />
    </div>
  )
}

export default Search;