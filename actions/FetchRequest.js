function FetchRequest() {
  const FETCH_REQUEST = 'FETCH_REQUEST'
  return(dispatch) => {
    
      dispatch({
        type: FETCH_REQUEST,
        status: "loading"
      })
    
  }
}

export default FetchRequest