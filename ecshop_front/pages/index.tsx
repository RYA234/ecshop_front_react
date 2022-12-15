import Footer from '../component/footer'
import Header from '../component/header'

export default function Home() {
	return (
		<>
			<Header left={0} top={0} color='yellow' bgColor='green' width={1000} height={50} />
			{/* Number型は{}で囲みString型は''で囲む下参照 */}
			<Footer left={0} top={300} color='yellow' bgColor='purple' width={1000} height={50} />
		</>
	)
}
