// import React from "react";
// import {
//   Card,
//   CardBody,
//   CardHeader,
//   Typography,
//   Button,
//   IconButton,
//   Input,
//   Textarea,
//   Checkbox,
// } from "@material-tailwind/react";
// import { FingerPrintIcon, UsersIcon } from "@heroicons/react/24/solid";
// import { PageTitle, Footer } from "@/widgets/layout";
// import { FeatureCard, TeamCard } from "@/widgets/cards";
// import { featuresData, teamData, contactData } from "@/data";

// export function Home() {

//   return (
//     <>
//       <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
//         <div className="absolute top-0 h-full w-full bg-[url('/img/background-3.png')] bg-cover bg-center" />
//         <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
//         <div className="max-w-8xl container relative mx-auto">
//           <div className="flex flex-wrap items-center">
//             <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
//               <Typography
//                 variant="h1"
//                 color="white"
//                 className="mb-6 font-black"
//               >
//                 Your story starts with us.
//               </Typography>
//               <Typography variant="lead" color="white" className="opacity-80">
//                 This is a simple example of a Landing Page you can build using
//                 Material Tailwind. It features multiple components based on the
//                 Tailwind CSS and Material Design by Google.
//               </Typography>
//             </div>
//           </div>
//         </div>
//       </div>
//       <section className="-mt-32 bg-white px-4 pb-20 pt-4">
//         <div className="container mx-auto">
//           <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
//             {featuresData.map(({ color, title, icon, description }) => (
//               <FeatureCard
//                 key={title}
//                 color={color}
//                 title={title}
//                 icon={React.createElement(icon, {
//                   className: "w-5 h-5 text-white",
//                 })}
//                 description={description}
//               />
//             ))}
//           </div>
//           <div className="mt-32 flex flex-wrap items-center">
//             <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
//               <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-gray-900 p-2 text-center shadow-lg">
//                 <FingerPrintIcon className="h-8 w-8 text-white " />
//               </div>
//               <Typography
//                 variant="h3"
//                 className="mb-3 font-bold"
//                 color="blue-gray"
//               >
//                 Working with us is a pleasure
//               </Typography>
//               <Typography className="mb-8 font-normal text-blue-gray-500">
//                 Don't let your uses guess by attaching tooltips and popoves to
//                 any element. Just make sure you enable them first via
//                 JavaScript.
//                 <br />
//                 <br />
//                 The kit comes with three pre-built pages to help you get started
//                 faster. You can change the text and images and you're good to
//                 go. Just make sure you enable them first via JavaScript.
//               </Typography>
//               <Button variant="filled">read more</Button>
//             </div>
//             <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
//               <Card className="shadow-lg border shadow-gray-500/10 rounded-lg">
//                 <CardHeader floated={false} className="relative h-56">
//                   <img
//                     alt="Card Image"
//                     src="/img/teamwork.png"
//                     className="h-full w-full"
//                   />
//                 </CardHeader>
//                 <CardBody>
//                   <Typography variant="small" color="blue-gray" className="font-normal">Enterprise</Typography>
//                   <Typography
//                     variant="h5"
//                     color="blue-gray"
//                     className="mb-3 mt-2 font-bold"
//                   >
//                     Top Notch Services
//                   </Typography>
//                   <Typography className="font-normal text-blue-gray-500">
//                     The Arctic Ocean freezes every winter and much of the
//                     sea-ice then thaws every summer, and that process will
//                     continue whatever happens.
//                   </Typography>
//                 </CardBody>
//               </Card>
//             </div>
//           </div>
//         </div>
//       </section>
//       <section className="px-4 pt-20 pb-48">
//         <div className="container mx-auto">
//           <PageTitle section="Our Team" heading="Here are our heroes">
//             According to the National Oceanic and Atmospheric Administration,
//             Ted, Scambos, NSIDClead scentist, puts the potentially record
//             maximum.
//           </PageTitle>
//           <div className="mt-24 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-4">
//             {teamData.map(({ img, name, position, socials }) => (
//               <TeamCard
//                 key={name}
//                 img={img}
//                 name={name}
//                 position={position}
//                 socials={
//                   <div className="flex items-center gap-2">
//                     {socials.map(({ color, name }) => (
//                       <IconButton key={name} color={color} variant="text">
//                         <i className={`fa-brands text-xl fa-${name}`} />
//                       </IconButton>
//                     ))}
//                   </div>
//                 }
//               />
//             ))}
//           </div>
//         </div>
//       </section>
//       <section className="relative bg-white py-24 px-4">
//         <div className="container mx-auto">
//           <PageTitle section="Co-Working" heading="Build something">
//             Put the potentially record low maximum sea ice extent tihs year down
//             to low ice. According to the National Oceanic and Atmospheric
//             Administration, Ted, Scambos.
//           </PageTitle>
//           <div className="mx-auto mt-20 mb-48 grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
//             {contactData.map(({ title, icon, description }) => (
//               <Card
//                 key={title}
//                 color="transparent"
//                 shadow={false}
//                 className="text-center text-blue-gray-900"
//               >
//                 <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-blue-gray-900 shadow-lg shadow-gray-500/20">
//                   {React.createElement(icon, {
//                     className: "w-5 h-5 text-white",
//                   })}
//                 </div>
//                 <Typography variant="h5" color="blue-gray" className="mb-2">
//                   {title}
//                 </Typography>
//                 <Typography className="font-normal text-blue-gray-500">
//                   {description}
//                 </Typography>
//               </Card>
//             ))}
//           </div>
//           <PageTitle section="Contact Us" heading="Want to work with us?">
//             Complete this form and we will get back to you in 24 hours.
//           </PageTitle>
//           <form className="mx-auto w-full mt-12 lg:w-5/12">
//             <div className="mb-8 flex gap-8">
//               <Input variant="outlined" size="lg" label="Full Name" />
//               <Input variant="outlined" size="lg" label="Email Address" />
//             </div>
//             <Textarea variant="outlined" size="lg" label="Message" rows={8} />
//             <Checkbox
//               label={
//                 <Typography
//                   variant="small"
//                   color="gray"
//                   className="flex items-center font-normal"
//                 >
//                   I agree the
//                   <a
//                     href="#"
//                     className="font-medium transition-colors hover:text-gray-900"
//                   >
//                     &nbsp;Terms and Conditions
//                   </a>
//                 </Typography>
//               }
//               containerProps={{ className: "-ml-2.5" }}
//             />
//             <Button variant="gradient" size="lg" className="mt-8" fullWidth>
//               Send Message
//             </Button>
//           </form>
//         </div>
//       </section>
//       <div className="bg-white">
//         <Footer />
//       </div>
//     </>
//   );
// }

// export default Home;


// import React, { useState } from "react";
// import {
//   Card,
//   CardBody,
//   CardHeader,
//   Typography,
//   Button,
//   IconButton,
//   Input,
//   Textarea,
//   Checkbox,
// } from "@material-tailwind/react";
// import { FingerPrintIcon } from "@heroicons/react/24/solid";
// import { PageTitle, Footer } from "@/widgets/layout";
// import { FeatureCard, TeamCard } from "@/widgets/cards";
// import { featuresData, teamData, contactData } from "@/data";

// export function Home() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//     phone: "",
//   });
//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState(false);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setSuccess(false);

//     const formId = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdXibg963QMRoctFOJZ3VAqxeBEXxMS6Zn0NmD_dxw5KZae2g/formResponse";
//     const formDataGoogle = new FormData();

//     formDataGoogle.append("entry.2043925985", formData.name);     // Replace with actual field IDs
//     formDataGoogle.append("entry.1900205694", formData.email);    // Replace with actual field IDs
//     formDataGoogle.append("entry.313245533", formData.message);  // Replace with actual field IDs
//     formDataGoogle.append("entry.684456586", formData.phone);

//     try {
//       await fetch(formId, {
//         method: "POST",
//         mode: "no-cors",
//         body: formDataGoogle,
//       });

//       setSuccess(true);
//       setFormData({ name: "", email: "", message: "" });
//     } catch (error) {
//       console.error("Submission failed", error);
//     }

//     setLoading(false);
//   };


//   return (
//     <>
//       <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
//         <div className="absolute top-0 h-full w-full bg-[url('/img/background-3.png')] bg-cover bg-center" />
//         <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
//         <div className="max-w-8xl container relative mx-auto">
//           <div className="flex flex-wrap items-center">
//             <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
//               <Typography variant="h1" color="white" className="mb-6 font-black">
//                 Welcome to RK Balloons and Flower Decorations
//               </Typography>
//               <Typography variant="lead" color="white" className="opacity-80">

//               </Typography>
//             </div>
//           </div>
//         </div>
//       </div>

//       <section className="-mt-32 bg-white px-4 pb-20 pt-4">
//         <div className="container mx-auto">
//           <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
//             {featuresData.map(({ color, title, icon, description }) => (
//               <FeatureCard
//                 key={title}
//                 color={color}
//                 title={title}
//                 icon={React.createElement(icon, {
//                   className: "w-5 h-5 text-white",
//                 })}
//                 description={description}
//               />
//             ))}
//           </div>
//           <div className="mt-32 flex flex-wrap items-center">
//             <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
//               <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-gray-900 p-2 text-center shadow-lg">
//                 <FingerPrintIcon className="h-8 w-8 text-white " />
//               </div>
//               <Typography variant="h3" className="mb-3 font-bold" color="blue-gray">
//                 Working with us is a pleasure
//               </Typography>
//               <Typography className="mb-8 font-normal text-blue-gray-500">
//                 Don't let your users guess by attaching tooltips and popovers to
//                 any element. Just make sure you enable them first via JavaScript.
//                 <br />
//                 <br />
//                 The kit comes with three pre-built pages to help you get started
//                 faster. You can change the text and images and you're good to
//                 go.
//               </Typography>
//               <Button variant="filled">Read More</Button>
//             </div>
//             <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
//               <Card className="shadow-lg border shadow-gray-500/10 rounded-lg">
//                 <CardHeader floated={false} className="relative h-56">
//                   <img
//                     alt="Card Image"
//                     src="/img/teamwork.png"
//                     className="h-full w-full object-cover"
//                   />
//                 </CardHeader>
//                 <CardBody>
//                   <Typography variant="small" color="blue-gray" className="font-normal">
//                     Enterprise
//                   </Typography>
//                   <Typography variant="h5" color="blue-gray" className="mb-3 mt-2 font-bold">
//                     Top Notch Services
//                   </Typography>
//                   <Typography className="font-normal text-blue-gray-500">
//                     The Arctic Ocean freezes every winter and thaws every summer,
//                     and that process will continue whatever happens.
//                   </Typography>
//                 </CardBody>
//               </Card>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="px-4 pt-20 pb-48">
//         <div className="container mx-auto">
//           <PageTitle section="Our Team" heading="Here are our heroes">
//             According to the National Oceanic and Atmospheric Administration,
//             Scambos, NSIDC lead scientist, puts the potentially record maximum.
//           </PageTitle>
//           <div className="mt-24 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-4">
//             {teamData.map(({ img, name, position, socials }) => (
//               <TeamCard
//                 key={name}
//                 img={img}
//                 name={name}
//                 position={position}
//                 socials={
//                   <div className="flex items-center gap-2">
//                     {socials.map(({ color, name }) => (
//                       <IconButton key={name} color={color} variant="text">
//                         <i className={`fa-brands text-xl fa-${name}`} />
//                       </IconButton>
//                     ))}
//                   </div>
//                 }
//               />
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="relative bg-white py-24 px-4">
//         <div className="container mx-auto">
//           <PageTitle section="Co-Working" heading="Build something">
//             Build amazing experiences together with a powerful team and great
//             tools.
//           </PageTitle>
//           <div className="mx-auto mt-20 mb-48 grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
//             {contactData.map(({ title, icon, description }) => (
//               <Card
//                 key={title}
//                 color="transparent"
//                 shadow={false}
//                 className="text-center text-blue-gray-900"
//               >
//                 <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-blue-gray-900 shadow-lg shadow-gray-500/20">
//                   {React.createElement(icon, {
//                     className: "w-5 h-5 text-white",
//                   })}
//                 </div>
//                 <Typography variant="h5" color="blue-gray" className="mb-2">
//                   {title}
//                 </Typography>
//                 <Typography className="font-normal text-blue-gray-500">
//                   {description}
//                 </Typography>
//               </Card>
//             ))}
//           </div>

//           <PageTitle section="Contact Us" heading="Want to work with us?">
//             Complete this form and we will get back to you in 24 hours.
//           </PageTitle>

//           <form className="mx-auto w-full mt-12 lg:w-5/12" onSubmit={handleSubmit}>
//             <div className="mb-8 flex gap-8">
//               <Input
//                 variant="outlined"
//                 size="lg"
//                 label="Full Name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleInputChange}
//                 required
//               />
//             </div>
//             <div className="mb-8 flex gap-8">
//               <Input
//                 variant="outlined"
//                 size="lg"
//                 label="Phone"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleInputChange}
//                 required
//               />
//               <Input
//                 variant="outlined"
//                 size="lg"
//                 label="Email Address"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleInputChange}
//                 required
//               />
//             </div>
//             <Textarea
//               variant="outlined"
//               size="lg"
//               label="Message"
//               name="message"
//               rows={8}
//               value={formData.message}
//               onChange={handleInputChange}
//               required
//             />
//             <Checkbox
//               required
//               label={
//                 <Typography variant="small" color="gray" className="flex items-center font-normal">
//                   I agree to the
//                   <a
//                     href="#"
//                     className="font-medium transition-colors hover:text-gray-900"
//                   >
//                     &nbsp;Terms and Conditions
//                   </a>
//                 </Typography>
//               }
//               containerProps={{ className: "-ml-2.5" }}
//             />
//             <Button
//               variant="gradient"
//               size="lg"
//               className="mt-8"
//               fullWidth
//               type="submit"
//               disabled={loading}
//             >
//               {loading ? "Sending..." : "Send Message"}
//             </Button>
//             {success && (
//               <Typography color="green" className="mt-4 text-center">
//                 ✅ Message sent successfully!
//               </Typography>
//             )}
//           </form>
//         </div>
//       </section>

//       <div className="bg-white">
//         <Footer />
//       </div>
//     </>
//   );
// }

// export default Home;







// import React, { useState } from "react";
// import {
//   Card,
//   CardBody,
//   CardHeader,
//   Typography,
//   Button,
//   IconButton,
//   Input,
//   Textarea,
//   Checkbox,
// } from "@material-tailwind/react";
// import { FingerPrintIcon } from "@heroicons/react/24/solid";
// import { PageTitle, Footer } from "@/widgets/layout";
// import { FeatureCard, TeamCard } from "@/widgets/cards";
// import { featuresData, teamData, contactData } from "@/data";

// export function Home() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//     phone: "",
//   });
//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState(false);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setSuccess(false);

//     // Update with your actual form submission logic
//     const formId = "YOUR_FORM_ID_HERE";
//     const formDataGoogle = new FormData();

//     formDataGoogle.append("entry.2043925985", formData.name);
//     formDataGoogle.append("entry.1900205694", formData.email);
//     formDataGoogle.append("entry.313245533", formData.message);
//     formDataGoogle.append("entry.684456586", formData.phone);

//     try {
//       await fetch(formId, {
//         method: "POST",
//         mode: "no-cors",
//         body: formDataGoogle,
//       });

//       setSuccess(true);
//       setFormData({ name: "", email: "", message: "", phone: "" });
//     } catch (error) {
//       console.error("Submission failed", error);
//     }

//     setLoading(false);
//   };


//   return (
//     <>
//       <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32 bg-gradient-to-r from-pink-500 to-yellow-500">
//         <div className="absolute top-0 h-full w-full bg-black/60" />
//         <div className="max-w-8xl container relative mx-auto text-center">
//           <Typography variant="h1" color="white" className="mb-6 font-black">
//             Welcome to RK Balloons and Flower Decorations
//           </Typography>
//           <Typography variant="lead" color="white" className="opacity-80">
//             Your one-stop solution for all decorative needs!
//           </Typography>
//         </div>
//       </div>

//       <section className="bg-white px-4 pb-20 pt-4">
//         <div className="container mx-auto">
//           <PageTitle section="Our Categories" heading="Explore Our Services" />
//           <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
//             {featuresData.map(({ color, title, icon, description }) => (
//               <FeatureCard
//                 key={title}
//                 color={color}
//                 title={title}
//                 icon={React.createElement(icon, {
//                   className: "w-5 h-5 text-white",
//                 })}
//                 description={description}
//               />
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="bg-gray-100 py-24 px-4">
//         <div className="container mx-auto">
//           <PageTitle section="Gallery" heading="Our Beautiful Decorations" />
//           <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
//             {/* Replace with actual images for each category */}
//             {['Birthday', 'Marriage', 'Office Party', 'Home Decoration'].map((category) => (
//               <Card key={category} className="hover:shadow-lg transition-shadow duration-300">
//                 <CardHeader floated={false} className="relative h-56">
//                   <img
//                     alt={`${category} Decoration`}
//                     src={`/img/${category.toLowerCase().replace(' ', '-')}.jpg`} // Ensure images are named correctly
//                     className="h-full w-full object-cover"
//                   />
//                 </CardHeader>
//                 <CardBody>
//                   <Typography variant="h5" color="blue-gray" className="mb-3 font-bold">
//                     {category}
//                   </Typography>
//                   <Typography className="font-normal text-blue-gray-500">
//                     Discover our stunning decorations for {category.toLowerCase()} events.
//                   </Typography>
//                 </CardBody>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="relative bg-white py-24 px-4">
//         <div className="container mx-auto">
//           <PageTitle section="Contact Us" heading="Want to work with us?" />
//           <form className="mx-auto w-full mt-12 lg:w-5/12" onSubmit={handleSubmit}>
//             <div className="mb-8 flex gap-8">
//               <Input
//                 variant="outlined"
//                 size="lg"
//                 label="Full Name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleInputChange}
//                 required
//               />
//             </div>
//             <div className="mb-8 flex gap-8">
//               <Input
//                 variant="outlined"
//                 size="lg"
//                 label="Phone"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleInputChange}
//                 required
//               />
//               <Input
//                 variant="outlined"
//                 size="lg"
//                 label="Email Address"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleInputChange}
//                 required
//               />
//             </div>
//             <Textarea
//               variant="outlined"
//               size="lg"
//               label="Message"
//               name="message"
//               rows={8}
//               value={formData.message}
//               onChange={handleInputChange}
//               required
//             />
//             <Checkbox
//               required
//               label={
//                 <Typography variant="small" color="gray" className="flex items-center font-normal">
//                   I agree to the
//                   <a
//                     href="#"
//                     className="font-medium transition-colors hover:text-gray-900"
//                   >
//                     &nbsp;Terms and Conditions
//                   </a>
//                 </Typography>
//               }
//               containerProps={{ className: "-ml-2.5" }}
//             />
//             <Button
//               variant="gradient"
//               size="lg"
//               className="mt-8"
//               fullWidth
//               type="submit"
//               disabled={loading}
//             >
//               {loading ? "Sending..." : "Send Message"}
//             </Button>
//             {success && (
//               <Typography color="green" className="mt-4 text-center">
//                 ✅ Message sent successfully!
//               </Typography>
//             )}
//           </form>
//         </div>
//       </section>

//       <div className="bg-white">
//         <Footer />
//       </div>
//     </>
//   );
// }

// export default Home;

//adding corosoule

// import React, { useState } from "react";
// import Slider from "react-slick"; // Import the Slider component
// import {
//   Card,
//   CardBody,
//   CardHeader,
//   Typography,
//   Button,
//   IconButton,
//   Input,
//   Textarea,
//   Checkbox,
// } from "@material-tailwind/react";
// import { FingerPrintIcon } from "@heroicons/react/24/solid";
// import { PageTitle, Footer } from "@/widgets/layout";
// import { FeatureCard, TeamCard } from "@/widgets/cards";
// import { featuresData, teamData, contactData } from "@/data";

// // Import slick-carousel styles
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// export function Home() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//     phone: "",
//   });
//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState(false);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setSuccess(false);

//     // Update with your actual form submission logic
//     const formId = "YOUR_FORM_ID_HERE";
//     const formDataGoogle = new FormData();

//     formDataGoogle.append("entry.2043925985", formData.name);
//     formDataGoogle.append("entry.1900205694", formData.email);
//     formDataGoogle.append("entry.313245533", formData.message);
//     formDataGoogle.append("entry.684456586", formData.phone);

//     try {
//       await fetch(formId, {
//         method: "POST",
//         mode: "no-cors",
//         body: formDataGoogle,
//       });

//       setSuccess(true);
//       setFormData({ name: "", email: "", message: "", phone: "" });
//     } catch (error) {
//       console.error("Submission failed", error);
//     }

//     setLoading(false);
//   };

//   // Carousel settings
//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };

//   return (
//     <>
//       {/* Background Carousel Section */}
//       <div className="relative h-[75vh] flex items-center justify-center">
//         <Slider {...settings} className="absolute top-0 left-0 w-full z-0">
//           {/* Replace with your actual image paths */}
//           {['bg-1.jpg', 'bg-2.jpg', 'bg-3.jpg'].map((image, index) => (
//             <div key={index} className="h-full">
//               <img
//                 src={`/img/${image}`}
//                 alt={`Background ${index + 1}`}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           ))}
//         </Slider>
//         {/* <div className="absolute top-5 h-full w-full   " /> */}
//         <div className="max-w-8xl px-4  mx-auto text-center z-10 ">
//           <Typography variant="h1" color="white" className="mb-6 font-black drop-shadow-lg">
//             Welcome to RK Balloons and Flower Decorations
//           </Typography>
//           <Typography variant="lead" color="white" className="opacity-90 drop-shadow-md">
//             Your one-stop solution for all decorative needs!
//           </Typography>
//         </div>
//       </div>

  

//       <section className="relative bg-white py-24 px-4">
//         <div className="container mx-auto">
//           <PageTitle section="Contact Us" heading="Want to work with us?" />
//           <form className="mx-auto w-full mt-12 lg:w-5/12" onSubmit={handleSubmit}>
//             <div className="mb-8 flex gap-8">
//               <Input
//                 variant="outlined"
//                 size="lg"
//                 label="Full Name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleInputChange}
//                 required
//               />
//             </div>
//             <div className="mb-8 flex gap-8">
//               <Input
//                 variant="outlined"
//                 size="lg"
//                 label="Phone"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleInputChange}
//                 required
//               />
//               <Input
//                 variant="outlined"
//                 size="lg"
//                 label="Email Address"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleInputChange}
//                 required
//               />
//             </div>
//             <Textarea
//               variant="outlined"
//               size="lg"
//               label="Message"
//               name="message"
//               rows={8}
//               value={formData.message}
//               onChange={handleInputChange}
//               required
//             />
//             <Checkbox
//               required
//               label={
//                 <Typography variant="small" color="gray" className="flex items-center font-normal">
//                   I agree to the
//                   <a
//                     href="#"
//                     className="font-medium transition-colors hover:text-gray-900"
//                   >
//                     &nbsp;Terms and Conditions
//                   </a>
//                 </Typography>
//               }
//               containerProps={{ className: "-ml-2.5" }}
//             />
//             <Button
//               variant="gradient"
//               size="lg"
//               className="mt-8"
//               fullWidth
//               type="submit"
//               disabled={loading}
//             >
//               {loading ? "Sending..." : "Send Message"}
//             </Button>
//             {success && (
//               <Typography color="green" className="mt-4 text-center">
//                 ✅ Message sent successfully!
//               </Typography>
//             )}
//           </form>
//         </div>
//       </section>

//       <div className="bg-white">
//         <Footer />
//       </div>
//     </>
//   );
// }

// export default Home;




import React, { useState } from "react";
import Slider from "react-slick";
import Modal from "react-modal";
import {
  Typography,
  Input,
  Textarea,
  Checkbox,
  Button,
} from "@material-tailwind/react";
import { PageTitle, Footer } from "@/widgets/layout";
import { featuresData } from "@/data";
import { FeatureCard } from "@/widgets/cards";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
 
// Modal accessibility
Modal.setAppElement("#root");
 
export function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
 
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    const formId = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdXibg963QMRoctFOJZ3VAqxeBEXxMS6Zn0NmD_dxw5KZae2g/formResponse";
    const formDataGoogle = new FormData();
    formDataGoogle.append("entry.2043925985", formData.name);
    formDataGoogle.append("entry.1900205694", formData.email);
    formDataGoogle.append("entry.313245533", formData.message);
    formDataGoogle.append("entry.684456586", formData.phone);
 
    try {
      await fetch(formId, {
        method: "POST",
        mode: "no-cors",
        body: formDataGoogle,
      });
      setSuccess(true);
      setFormData({ name: "", email: "", message: "", phone: "" });
    } catch (error) {
      console.error("Submission failed", error);
    }
    setLoading(false);
  };
 
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
 
  const categories = [
    {
      title: "Birthday Decorations",
      images: ["/img/birthday-1.jpg", "/img/birthday-2.jpg", "/img/birthday-3.jpg"],
    },
    {
      title: "Wedding Decorations",
      images: ["/img/wedding-1.jpg", "/img/wedding-2.jpg", "/img/wedding-3.jpg"],
    },
    {
      title: "Baby Shower",
      images: ["/img/baby-1.jpg", "/img/baby-2.jpg", "/img/baby-3.jpg"],
    },
    {
      title: "Corporate Events",
      images: ["/img/corporate1.jpg", "/img/corporate2.jpg", "/img/corporate3.jpg"],
    },
    {
      title: "Housewarming",
      images: ["/img/house1.jpg", "/img/house2.jpg", "/img/house3.jpg"],
    },
    {
      title: "Engagements",
      images: ["/img/engagement1.jpg", "/img/engagement2.jpg", "/img/engagement3.jpg"],
    },
  ];
 
  return (
    <>
      {/* Background Section */}
      <div className="relative h-[75vh] flex items-center justify-center">
        <Slider {...settings} className="absolute top-0 left-0 w-full z-0 h-full">
          {["bg-1.jpg", "bg-2.jpg", "bg-3.jpg"].map((image, index) => (
            <div key={index} className="h-full">
              <img
                src={`/img/${image}`}
                alt={`Background ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </Slider>
        <div className="max-w-8xl px-4 mx-auto text-center z-10">
          <Typography variant="h1" color="white" className="mb-6 font-black drop-shadow-lg">
            Welcome to RK Balloons and Flower Decorations
          </Typography>
          <Typography variant="lead" color="white" className="opacity-90 drop-shadow-md">
            Your one-stop solution for all decorative needs!
          </Typography>
        </div>
      </div>
 
      {/* Category Section */}
      <section className="bg-white py-16 px-4 mt-10">
        <div className="container mx-auto">
          <PageTitle section="Our Gallery" heading="Browse by Category" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {categories.map((cat, idx) => (
              <div
                key={idx}
                className="rounded-lg shadow-lg overflow-hidden cursor-pointer border"
                onClick={() => {
                  setSelectedCategory(cat);
                  setIsModalOpen(true);
                }}
              >
                <Slider {...settings}>
                  {cat.images.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={`Category ${idx + 1}`}
                      className="w-full h-56 object-cover"
                    />
                  ))}
                </Slider>
                <div className="p-4 text-center bg-white">
                  <Typography variant="h6">{cat.title}</Typography>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
 
      {/* Contact Section */}
      <section className="relative bg-white py-24 px-4">
        <div className="container mx-auto">
          <PageTitle section="Contact Us" heading="Want to work with us?" />
          <form className="mx-auto w-full mt-12 lg:w-5/12" onSubmit={handleSubmit}>
            <div className="mb-8 flex gap-8">
              <Input
                variant="outlined"
                size="lg"
                label="Full Name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-8 flex gap-8">
              <Input
                variant="outlined"
                size="lg"
                label="Phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
              <Input
                variant="outlined"
                size="lg"
                label="Email Address"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <Textarea
              variant="outlined"
              size="lg"
              label="Message"
              name="message"
              rows={8}
              value={formData.message}
              onChange={handleInputChange}
              required
            />
            <Checkbox
              required
              label={
                <Typography variant="small" color="gray" className="flex items-center font-normal">
                  I agree to the
                  <a href="#" className="font-medium transition-colors hover:text-gray-900">
                    &nbsp;Terms and Conditions
                  </a>
                </Typography>
              }
              containerProps={{ className: "-ml-2.5" }}
            />
            <Button
              variant="gradient"
              size="lg"
              className="mt-8"
              fullWidth
              type="submit"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </Button>
            {success && (
              <Typography color="green" className="mt-4 text-center">
                ✅ Message sent successfully!
              </Typography>
            )}
          </form>
        </div>
      </section>
 
      {/* Footer */}
      <div className="bg-white">
        <Footer />
      </div>
 
      {/* Modal for Enlarged Slider */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Category Images"
        style={{
          content: {
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            maxWidth: "90vw",
            maxHeight: "90vh",
            overflow: "hidden",
            padding: 0,
          },
          overlay: {
            zIndex: 50,
            backgroundColor: "rgba(0,0,0,0.75)",
          },
        }}
      >
        <div className="bg-white p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">{selectedCategory?.title}</h2>
            <button
              onClick={() => setIsModalOpen(false)}
              className="text-red-500 font-bold text-lg"
            >
              ✖
            </button>
          </div>
          <Slider {...settings}>
            {selectedCategory?.images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt="Enlarged"
                className="w-full h-[70vh] object-contain"
              />
            ))}
          </Slider>
        </div>
      </Modal>
    </>
  );
}
 
export default Home;
 