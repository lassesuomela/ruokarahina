const axios = require("axios")
const GetFoodByName = (req, res) => {
    
    const name = req.params.foodName
    const url = "https://fineli.fi/fineli/api/v1/foods?q=" + name

    axios.get(url)
    .then(response => {

        const data = response.data

        if(data.length === 0) {
            return res.json({status:"error", error:"No data found"})
        }

        let foodData = data.filter(food => {

            if(food.type.code === "FOOD"){
                return true
            }
        })

        if(foodData.length === 0){
            return res.json({status:"error", error:"No data found"})
        }

        const stats = {
            name: name,
            hp: foodData[0].energyKcal.toFixed(1),
            attack: foodData[0].carbohydrate.toFixed(1),
            defence: foodData[0].protein.toFixed(1),
            attackDelay: (foodData[0].carbohydrate + foodData[0].protein + foodData[0].fat).toFixed(1)
        }

        res.json({status:"success", foodStats:stats})
    })
    .catch(err => {
        console.log(err)

        res.json({status:"error", error:err.message})
    })
}

module.exports = {
    GetFoodByName
}
