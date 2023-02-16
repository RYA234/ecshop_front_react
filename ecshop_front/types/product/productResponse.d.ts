

export type ProductResponse = {
	content : Product[] 
	pageNo : number 
	pageSize : number
	totalElements : number
	totalPages : number 
	isLast : boolean
	categoryId : number
	categoryName : string
}