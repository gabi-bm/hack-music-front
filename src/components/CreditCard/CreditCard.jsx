// import Cards from "react-credit-cards";
// import { useState } from "react";
// import { useForm } from "react-hook-form";

// function CreditCard() {
//   const {
//     register,
//     handleSubmit,
//     setValue,
//     reset,
//     formState: { errors },
//   } = useForm();
//   const onSubmit = async (data) => {
//     console.log("hola");
//   };

// }

// const CreditCard = () => {
//   state = {
//     cvc: "",
//     expiry: "",
//     focus: "",
//     name: "",
//     number: "",
//   };

//   handleInputFocus = (e) => {
//     this.setState({ focus: e.target.name });
//   };

//   handleInputChange = (e) => {
//     const { name, value } = e.target;

//     this.setState({ [name]: value });
//   };

//   return (
//     <div>
//       <div id="PaymentForm">
//         <Cards
//           cvc={this.state.cvc}
//           expiry={this.state.expiry}
//           focused={this.state.focus}
//           name={this.state.name}
//           number={this.state.number}
//         />
//         <form>
//           <input
//             type="tel"
//             name="number"
//             placeholder="Card Number"
//             onChange={this.handleInputChange}
//             onFocus={this.handleInputFocus}
//           />
//           ...
//         </form>
//       </div>
//     </div>
//   );
// };

// export default CreditCard;
