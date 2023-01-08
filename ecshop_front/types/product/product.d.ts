
/**
 *  @remarks 商品情報です　ページネーション化されたprooduct.d.tsで使われます。
 * 
 *  @author RYA234 
 * 
 */
export type Product = {
	id:number
	name:string
	description:string
	inStock:boolean
	categoryId:number
	price:number
	taxRate:number
	discountPercent:number
	image:string
}