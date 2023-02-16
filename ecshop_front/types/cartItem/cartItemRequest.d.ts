// 買い物カゴの中の商品情報
export type CartItemRequest={
	// ID（データベースで使う）
	id:number;
	// お客様のID
	customerId:number;
	// 商品のID
	productId:number;
	// 商品の個数
	quantity:number;
}