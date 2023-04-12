const fruitmixin ={
    data()
    {
        return{
            cars:['Toyota','Honda','Suzuki','Mitsubishi'],
            findtext:''
        }
    },
    computed:{
      filteredcars()
      {
        return this.cars.filter((element)=>{
           return element.match(this.findtext);
        })
      }
    }
}