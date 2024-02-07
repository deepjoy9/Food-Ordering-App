import React from "react";
import food_img from "../../assets/about-page-food-img.jpg";

const About = (props) => {
  return (
    <div className=" m-0 flex justify-center">
      <div className="w-3/5 h-auto p-10 bg-white my-5">
        <div className="sec-1 flex">
          <div className="">
            <div className="heading text-3xl font-semibold font-serif">
              About Us
            </div>
            <p className="my-3">
              At MealMaster, we're passionate about making every mealtime a
              delightful experience. Founded on the belief that good food should
              be easily accessible and enjoyed by all, we've crafted a platform
              that seamlessly connects food lovers with a diverse array of
              culinary delights.
            </p>
          </div>
          <img className="rounded shadow-md w-2/5 m-3" src={food_img}></img>
        </div>
        <div className="section-2 my-10">
          <div>
            <h2 className="heading text-3xl text-center font-semibold font-serif">
              Our Story
            </h2>
            <p className="m-5">
              Our journey began with a simple vision: to revolutionize the way
              people discover, order, and savor their favorite dishes. Whether
              you're craving a comforting bowl of ramen, a gourmet pizza, or a
              refreshing salad, MealMaster is your ultimate destination for
              culinary satisfaction. What sets us apart? It's our unwavering
              commitment to excellence in every aspect of the dining experience.
              From our carefully curated selection of restaurants and eateries
              to our intuitive interface designed for effortless ordering, we
              prioritize quality, convenience, and customer satisfaction above
              all else.
            </p>
            <p className="m-5">
              But MealMaster is more than just a food ordering platform – it's a
              community of food enthusiasts united by their love for great
              flavors and memorable dining experiences. We're dedicated to
              fostering connections, celebrating diversity, and supporting local
              businesses, one delicious meal at a time.
            </p>
            <p className="m-5">
              Join us on this gastronomic adventure, where every bite is a
              celebration and every meal is an opportunity to explore new
              tastes, share delightful moments, and create lasting memories.
            </p>
            <p className="m-5">
              Thank you for choosing MealMaster – your trusted companion on your
              culinary journey!
            </p>
          </div>
        </div>
        <div className="m-5 bg-zinc-800 text-white text-center">
          Deepjoy Sarkar
        </div>
      </div>
    </div>
  );
};

export default About;
