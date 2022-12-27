/**
 * @remarks 商品のカテゴリーを表す型です。
 * 
 * @auther RYA234 
 * 
 */

export  type Category = {
	/** MySQL側のIDです。*/
	id:number
	/** リンクとしてつかうので英語が入ります。  */
	alias:string
	/**　html上で表示されるカテゴリー名称です。日本語が入ることを想定してます。 */
	name:string
	/** サブカテゴリーです。サブカテゴリーを持つ場合対応するidが入ります。サブカテゴリーがない場合はnullが入ります。 */
	children:number[]
}