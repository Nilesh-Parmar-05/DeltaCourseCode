const mongoose = require("mongoose");
const { Schema } = mongoose;

main()
  .then(() => console.log("connection succesful"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

const orderSchema = new Schema({
  item: String,
  price: Number,
});

const customerSchema = new Schema({
  name: String,
  orders: [
    {
      
    }
  ]
})

const Order = mongoose.model("Order", orderSchema);

// const addOrders = async () => {
//   let res = await Order.insertMany([
//     {
//       item: "samosa",
//       price: 12,
//     },
//     {
//       item: "chips",
//       price: 10,
//     },
//     {
//       item: "chocolate",
//       price: 40,
//     },
//   ]);

//   console.log(res);
// };
// addOrders();
