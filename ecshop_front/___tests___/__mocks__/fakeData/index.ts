import { filenames, getJSONfromFile } from "../../../lib/db/db-utils";
import path from "path";
import type { Product } from "../../../types/product/product";

const JSON_FILEPATH = path.join(__dirname, "json");

export const readFakeData = async () => {
	const [fakeProducts] = await Promise.all(
		[
		getJSONfromFile(filenames.products,JSON_FILEPATH)
		]
	);

	return{
		fakeProducts: fakeProducts as Array<Product> 
	}
}


