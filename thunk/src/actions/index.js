
// action creators!!
// action = plain object that has a required 'type' and optional 'payload'
export const getQuote = () => {
  // ? ? ?
}


//       state             action       new state
// noerror,noq,notfetch    getQuote()   error,noq,notfetch
// noerror,noq,notfetch    getQuote()   noerror,hasq,notfetch
// noerror,yesq,notfetch   getQuote()
// ...
// error,noq,notfetch      reload()
// noerror,hasq,notfetch      reload()