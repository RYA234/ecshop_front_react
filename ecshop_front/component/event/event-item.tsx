/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { classicNameResolver } from 'typescript';
import classes from './event-item.module.css';
function EventItem(props: { title: any; image: any; date: any; location: any; id: any; }){
	const {title,image,date,location,id} = props;
	const humanReadableDate = new Date(date).toLocaleDateString('en-US',{
		day:'numeric',
		month:'long',
		year:'numeric',
	});
	const formattedAddress = location.replace(',','\n')
	const exporeLink =`/event/${id}`;
	return(<li className={classes.item}>
		<img src={'/' + image} alt={title}/>
		<div className={classes.content}>
			<div className={classes.summary}>
				<h2>{title}</h2>
				<div className={classes.date}>
					<time>{humanReadableDate}</time>
				</div>
				<div className={classes.addres}>
					<address>{formattedAddress}</address>
				</div>
			</div>
			<div className={classes.actions}>
				<Link href={exporeLink}>Explore Event</Link>
			</div>
		</div>

	</li>);
}
export default EventItem;