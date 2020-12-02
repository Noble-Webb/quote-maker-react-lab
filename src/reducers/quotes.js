export default (state = [], action) => {
  let update;
  switch (action.type){
    case "ADD_QUOTE":
      return [...state, action.quote];
    case "REMOVE_QUOTE":
      update = state.findIndex(quote => quote.update === action.update)
      return [...state.slice(0, update), ...state.slice(update +1) ];
    case "UPVOTE_QUOTE":
      update = state.map(q => {
        if(action.votes === undefined){
          return {
            ...q,
            votes: 1
          }
        }else if(q.id === action.quoteId){
          return {
            ...q,
            votes: q.votes += 1
          }
        }else{
          return q 
        }
      })

      return update

    case "DOWNVOTE_QUOTE":
      update = state.map(q => {
        if(action.votes === undefined){
          return {
            ...q,
            votes: 1
          }
        }else if(q.id === action.quoteId && q.votes > 0){
          return {
            ...q,
            votes: q.votes -= 1
          }
        }else{
          return q 
        }
      })

      return update


    default:
      return state;
  }
}