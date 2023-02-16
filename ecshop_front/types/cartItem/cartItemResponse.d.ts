
// CartItemを取得した時のレスポンスの型定義
export type CartItemResponse = {
	// 各々商品の情報
	cartItemDtos : CartItemDto[]
	// 商品の合計額(税抜き)
	productCost:number
	// 配送料(4000円だと無料)
	shippingCost:number
	// ？？？
	subTotal:number
	// 消費税の合計額
	tax:number
	// お客様が支払う金額
	total:number
}