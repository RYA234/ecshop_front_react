


// このファイルは、Qiitaの記事を取得するためのファイルです。
// http://127.0.0.1:3000/develop/qiita_infoGet
export default function index(){
	// fetchでGETを取得する。
let infoResponse : any = "";
const getData= async () => {
		await fetch('https://qiita.com/api/v2/authenticated_user/items?page=1&per_page=100',
		{
		method: 'GET',
		credentials: 'include',
		headers: {
			'Content-Type': 'application/json',
			Authorization: 'Bearer 71d56394503e08016ea3fcd1eb1f883ee6c3c05b',
			'Access-Control-Allow-Origin': 'https://qiita.com/*',
			'Access-Control-Allow-Headers': '*',
			'Access-Control-Allow-Credentials': 'true'
		}
		})
		.then(response => response.json())
		.then(data => {
			data.reverse();
			data.map((content:any) => {
				// 参考例
				// 2022-01-02|[title](name)|
				const column :string = `${content.created_at.slice(0, 10)}|[${content.title}](${content.url})|`
				console.log(column)
			}
		);
	})}
	getData();

	return(
		<div>
			{infoResponse}
		</div>
	)
}