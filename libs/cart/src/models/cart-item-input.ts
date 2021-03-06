import { DaffProduct } from '@daffodil/product';

export enum DaffCartItemInputType {
	Simple = 'simple',
	Composite = 'composite'
}

export interface DaffCartItemInput {
	type: DaffCartItemInputType;
  productId: DaffProduct['id'];
	qty: number;
}

export interface DaffSimpleCartItemInput extends DaffCartItemInput {
	type: DaffCartItemInputType.Simple;
}

export interface DaffCompositeCartItemInput extends DaffCartItemInput {
	type: DaffCartItemInputType.Composite;
	options: DaffCompositeCartItemOption[];
}

export interface DaffCompositeCartItemOption {
	id: string | number;
	quantity: number;
	value: string;
}
