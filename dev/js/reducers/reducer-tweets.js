export default function(prevState=null, action){
	if(!prevState) {
		prevState = [
		{
			userid:"iambeyoncealways",
			first: "Michael",
	        last: "Scott",
	        description: "Regional Manager at Dunder Mifflin, Scranton, Pensylvania",
	        thumbnail: "http://www.fanaticspace.com/wp-content/uploads/2007/11/michael-scott.jpg",
			tweetText:"I declare bankruptcy"
		},
		{
			userid:"jimhalpert",
			first: "Jim",
	        last: "Halpert",
	        description: "Assistant Regional Manager at Dunder Mifflin. Husband  and father.",
	        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVWzCVcnJ4VacbQcqq_yLsBD7ByrWSvq00ym_d-rtMEDgVrEh7gQ",
			tweetText:"Technically they are doing parkour, if point A is delusion and point B is the hospital."
		},
		{
			userid:"dwightkschrute",
			first: "Dwight",
	        last: "Schrute",
	        description: "Assistant to the Regional Manager Dunder Mifflin, Owner at Schrute farms.",
	        thumbnail: "https://pbs.twimg.com/profile_images/549268771484229632/WnatiHzT_bigger.jpeg",
			tweetText:"Identity theft is not a joke Jim! Millions of families suffer every year."
		},
		{
			userid:"thefireguy",
			first: "Ryan",
	        last: "Howard",
	        description: "Junior Sales associate at Dunder Mifflin. Ex director of sales at Dunder Mifflin.",
	        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDjZd1h8jscEg5CDTVulA__gBcT5Vkzprs-xv_4w1RmS4xFWSA",
			tweetText:"I am no more a temp."
		}];
	}
	switch (action.type) {
        case 'TWEET_POST':
        var state = [];
        state.push(action.payload);
        prevState.map((item) => {
        	state.push(item);
        });
            return state;
            break;
    	default:
    		return	prevState;
	}
}