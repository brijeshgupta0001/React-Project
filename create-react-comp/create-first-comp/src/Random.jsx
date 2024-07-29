function Random(){
  let number = Math.round(Math.random()*100);
  return <h1 style = {{'backgroundColor' : '#212121'}}>The Random Number : {number}</h1>
}
export default Random;