import { getFeaturedEvents } from "../../../dummy-data";
import EventList from "../../../component/event/event-list";


function AllEventsPage(){
	const featuredEvents = getFeaturedEvents();
	return(
		<div>
			<h1>All Events</h1>
			<EventList items={featuredEvents}/>
		</div>
	)
}


export default AllEventsPage;