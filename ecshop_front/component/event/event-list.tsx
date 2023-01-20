/* eslint-disable react/jsx-key */
import EventItem from './event-item';
import classes from './event-list.module.css';

export type Event = {
	id:number;	// 買い物かごのID
	key:string
	title:string
	location:string
	date:string
	image:string
}

function EventList(props: { items: any; }){
	const{items}=props;
	return<ul className={classes.list}>
		{items.map((event: Event) =>
		<EventItem
          key={event.id}
          id={event.id}
          title={event.title}
          location={event.location}
          date={event.date}
          image={event.image}
        />)}
	</ul>
}
	export default EventList;
