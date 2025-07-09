// import React, { useState } from "react";
// import Slider from "react-slick";
// import Modal from "react-modal";
// import {
//   Typography,
//   Input,
//   Textarea,
//   Checkbox,
//   Button,
// } from "@material-tailwind/react";
// import { PageTitle, Footer } from "@/widgets/layout";
// import { featuresData } from "@/data";
// import { FeatureCard } from "@/widgets/cards";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
 
// // Modal accessibility
// Modal.setAppElement("#root");
 
// export function Home() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//     phone: "",
//   });
//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState(false);
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
 
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
 
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 1000,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };
 
//   const categories = [
//     {
//       title: "Birthday Decorations",
//       images: ["/img/birthday-1.jpg", "/img/birthday-2.jpg", "/img/birthday-3.jpg"],
//     },
//     {
//       title: "Wedding Decorations",
//       images: ["/img/wedding-1.jpg", "/img/wedding-2.jpg", "/img/wedding-3.jpg"],
//     },
//     {
//       title: "Baby Shower",
//       images: ["/img/baby-1.jpg", "/img/baby-2.jpg", "/img/baby-3.jpg"],
//     },
//     {
//       title: "Corporate Events",
//       images: ["/img/corporate1.jpg", "/img/corporate2.jpg", "/img/corporate3.jpg"],
//     },
//     {
//       title: "Housewarming",
//       images: ["/img/house1.jpg", "/img/house2.jpg", "/img/house3.jpg"],
//     },
//     {
//       title: "Engagements",
//       images: ["/img/engagement1.jpg", "/img/engagement2.jpg", "/img/engagement3.jpg"],
//     },
//   ];
 
//   return (
//     <>
//       {/* Background Section */}
//       <div className="relative h-[75vh] flex items-center justify-center">
//         <Slider {...settings} className="absolute top-0 left-0 w-full z-0 h-full">
//           {["bg-1.jpg", "bg-2.jpg", "bg-3.jpg"].map((image, index) => (
//             <div key={index} className="h-full">
//               <img
//                 src={`/img/${image}`}
//                 alt={`Background ${index + 1}`}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           ))}
//         </Slider>
//         <div className="max-w-8xl px-4 mx-auto text-center z-10">
//           <Typography variant="h1" color="white" className="mb-6 font-black drop-shadow-lg">
//             Welcome to RK Balloons and Flower Decorations
//           </Typography>
//           <Typography variant="lead" color="white" className="opacity-90 drop-shadow-md">
//             Your one-stop solution for all decorative needs!
//           </Typography>
//         </div>
//       </div>
 
//       {/* Category Section */}
//       <section className="bg-white py-16 px-4 mt-10">
//         <div className="container mx-auto">
//           <PageTitle section="Our Gallery" heading="Browse by Category" />
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
//             {categories.map((cat, idx) => (
//               <div
//                 key={idx}
//                 className="rounded-lg shadow-lg overflow-hidden cursor-pointer border"
//                 onClick={() => {
//                   setSelectedCategory(cat);
//                   setIsModalOpen(true);
//                 }}
//               >
//                 <Slider {...settings}>
//                   {cat.images.map((img, i) => (
//                     <img
//                       key={i}
//                       src={img}
//                       alt={`Category ${idx + 1}`}
//                       className="w-full h-56 object-cover"
//                     />
//                   ))}
//                 </Slider>
//                 <div className="p-4 text-center bg-white">
//                   <Typography variant="h6">{cat.title}</Typography>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
 
//       {/* Contact Section */}
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
//                   <a href="#" className="font-medium transition-colors hover:text-gray-900">
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
 
//       {/* Footer */}
//       <div className="bg-white">
//         <Footer />
//       </div>
 
//       {/* Modal for Enlarged Slider */}
//       <Modal
//         isOpen={isModalOpen}
//         onRequestClose={() => setIsModalOpen(false)}
//         contentLabel="Category Images"
//         style={{
//           content: {
//             top: "50%",
//             left: "50%",
//             transform: "translate(-50%, -50%)",
//             maxWidth: "90vw",
//             maxHeight: "90vh",
//             overflow: "hidden",
//             padding: 0,
//           },
//           overlay: {
//             zIndex: 50,
//             backgroundColor: "rgba(0,0,0,0.75)",
//           },
//         }}
//       >
//         <div className="bg-white p-4">
//           <div className="flex justify-between items-center mb-4">
//             <h2 className="text-xl font-bold">{selectedCategory?.title}</h2>
//             <button
//               onClick={() => setIsModalOpen(false)}
//               className="text-red-500 font-bold text-lg"
//             >
//               ✖
//             </button>
//           </div>
//           <Slider {...settings}>
//             {selectedCategory?.images.map((img, i) => (
//               <img
//                 key={i}
//                 src={img}
//                 alt="Enlarged"
//                 className="w-full h-[70vh] object-contain"
//               />
//             ))}
//           </Slider>
//         </div>
//       </Modal>
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
import { Instagram, MessageCircle } from "lucide-react";

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
        <div className="max-w-8xl px-4 mx-auto text-center z-10 backdrop-blur-sm bg-black/30 border border-white/20 rounded-lg p-8">
          <Typography variant="h1" color="white" className="mb-6 font-black drop-shadow-lg">
            Welcome to RK Balloons and Flower Decorations
          </Typography>
          <Typography variant="lead" color="white" className="opacity-90 drop-shadow-md">
            Your one-stop solution for all decorative needs!
          </Typography>
        </div>
      </div>

      <div className="max-w-8xl px-4  text-center z-10 backdrop-blur-sm bg-black/30 border border-white/20 rounded-lg p-8">

        {/* About Section */}
        <section className="bg-gray-50 py-20 px-4 mb-4">
          <div className="container mx-auto text-center max-w-4xl">
            <PageTitle section="About Us" heading="Who We Are" />
            <Typography variant="lead" className="mt-6 text-gray-700">
              RK Balloons and Flower Decorations has been a trusted name in event decorations for over a decade.
              From vibrant birthdays to elegant weddings, we turn your dream events into reality with creativity,
              passion, and attention to detail. Our team works hand-in-hand with you to craft memorable experiences.
            </Typography>
          </div>
        </section>

      </div>


      <div className="max-w-8xl px-4  text-center z-10 backdrop-blur-sm border border-white/20 rounded-lg p-8">

        {/* Category Section */}
        <section className=" py-16 px-4 mt-10">
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

      </div>


      {/* Why Choose Us Section */}
      <section className="bg-white ">
        <div className="container mx-auto text-center max-w-6xl">
          <PageTitle section="Why Choose Us" heading="What Makes Us Special?" />
          <div className="grid gap-8 mt-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: "🎨", title: "Creative Designs", desc: "Unique and personalized themes for every event." },
              { icon: "⏱️", title: "Timely Execution", desc: "On-time setup with zero hassle." },
              { icon: "💰", title: "Affordable Pricing", desc: "High-quality decorations that suit your budget." },
              { icon: "🌟", title: "Experienced Team", desc: "10+ years of experience in event decoration." },
              { icon: "📞", title: "24/7 Support", desc: "Always available for planning and emergencies." },
              { icon: "👍", title: "Happy Clients", desc: "1000+ successful events and smiling customers." },
            ].map((item, index) => (
              <div key={index} className="bg-gray-100 rounded-xl p-6 shadow-md">
                <div className="text-4xl mb-4">{item.icon}</div>
                <Typography variant="h6" className="mb-2">{item.title}</Typography>
                <Typography variant="small" className="text-gray-600">{item.desc}</Typography>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Testimonials Section */}
      <section className="bg-gray-400 mt-4 py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <PageTitle section="Testimonials" heading="What Our Clients Say" />
          <Slider
            {...{
              dots: true,
              infinite: true,
              speed: 500,
              slidesToShow: 1,
              slidesToScroll: 1,
              autoplay: true,
              autoplaySpeed: 4000,
            }}
            className="mt-12"
          >
            {[
              {
                name: "Anusha R.",
                feedback: "They made my daughter’s birthday unforgettable! The decorations were magical and colorful!",
              },
              {
                name: "Rahul K.",
                feedback: "Our wedding stage looked like a fairytale setup. RK Decorations nailed it!",
              },
              {
                name: "Sneha M.",
                feedback: "They’re affordable, creative, and professional. I recommend them to everyone!",
              },
            ].map((t, i) => (
              <div key={i} className="px-4">
                <div className="bg-white shadow-lg rounded-xl p-8">
                  <Typography variant="lead" className="italic text-gray-700 mb-4">
                    “{t.feedback}”
                  </Typography>
                  <Typography variant="h6" className="text-primary-500">{t.name}</Typography>
                </div>
              </div>
            ))}
          </Slider>
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

      {/* Floating Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
        <a
          href="https://wa.me/918688810980"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg flex items-center justify-center"
        >
          <MessageCircle className="w-6 h-6" />
        </a>

        <a
          href="https://www.instagram.com/your_instagram_username"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 hover:opacity-90 text-white p-3 rounded-full shadow-lg flex items-center justify-center"
        >
          <Instagram className="w-6 h-6" />
        </a>
      </div>
    </>
  );
}

export default Home;