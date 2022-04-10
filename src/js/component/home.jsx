import React from "react";
import Navbar from "./Navbar.jsx";
import { Jumbotron } from "./Jumbotron.jsx";
import { Cards } from "./Cards.jsx";

//create your first component
const randomArray = [
	{
		title: "Family",
		text: "Family is the most important thing in my life",
		image: "https://scontent.fslc3-1.fna.fbcdn.net/v/t39.30808-6/273485523_468556528223953_7297033406882429842_n.jpg?stp=c0.17.206.206a_dst-jpg_p206x206&_nc_cat=109&ccb=1-5&_nc_sid=da31f3&_nc_ohc=SrJHxN5C6ggAX9-Mhxz&_nc_ht=scontent.fslc3-1.fna&oh=00_AT_DCsRBj8F_qSYag7BVwjKierDZ_lYUJ3dFaz_ES8bTgw&oe=6258315A",
	},
	{
		title: "Softball",
		text: "Softball is definitly my favorite hobby. We love winning",
		image: "https://scontent.fslc3-1.fna.fbcdn.net/v/t1.6435-9/127166544_185076419905300_5017769771539958_n.jpg?stp=c34.0.206.206a_dst-jpg_p206x206&_nc_cat=100&ccb=1-5&_nc_sid=da31f3&_nc_ohc=dyhXHpzfh9oAX_xXCxA&_nc_ht=scontent.fslc3-1.fna&oh=00_AT8KDFEZi1pjT6kKPeZKmZTfU5d6tJDEil-D1PFQUwO-og&oe=62774C49",
	},

	{
		title: "Camping",
		text: "Love taking my family out into the mountains.",
		image: "https://scontent.fslc3-1.fna.fbcdn.net/v/t1.6435-9/182193861_288415792904695_7088929943316973092_n.jpg?stp=c34.0.206.206a_dst-jpg_p206x206&_nc_cat=104&ccb=1-5&_nc_sid=da31f3&_nc_ohc=Dm39q4nEE_0AX9m8MOQ&tn=eqxneUrLKGjNU4J8&_nc_ht=scontent.fslc3-1.fna&oh=00_AT_6HrfsYvJ0wbkPBPfb60UP7Z_BSPUibSqyBT45aZgW2g&oe=6277FEBD",
	},
	{
		title: "Hunting",
		text: "Love all types of hunting. Waterfowl, deer, elk. Love it all",
		image: "https://scontent.fslc3-2.fna.fbcdn.net/v/t1.6435-9/127117886_185076219905320_4142099835972861647_n.jpg?stp=c0.33.206.206a_dst-jpg_p206x206&_nc_cat=106&ccb=1-5&_nc_sid=da31f3&_nc_ohc=B50LU2FSZfAAX8QBlLa&_nc_ht=scontent.fslc3-2.fna&oh=00_AT-8E3P8SVhjRxHaT74yXEhZBSq_9Ay2Qz2h9F61jSl51g&oe=627813A2",
	},
];
const Home = () => {
	return (
		<div className="body">
			<Navbar />
			<div className="container">
				<Jumbotron />
			</div>
			<div className="container">
				<div className="row">
					{randomArray.map((element, index) => {
						return (
							<div className="col-3" key={index}>
								<Cards
									image={element.image}
									title={element.title}
									text={element.text}
								/>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Home;
