import { TestBed } from '@angular/core/testing';

import {
  DaffCart,
  MagentoCartShippingMethod
} from '@daffodil/cart';
import {
  MagentoCartFactory,
  DaffCartFactory,
  MagentoShippingAddressFactory,
  MagentoCartItemFactory,
  MagentoCartAddressFactory,
  MagentoCartShippingMethodFactory
} from '@daffodil/cart/testing';

import { DaffMagentoCartTransformer } from './cart.service';
import { DaffMagentoCartItemTransformer } from './cart-item.service';
import { DaffMagentoCartAddressTransformer } from './cart-address.service';
import { DaffMagentoCartPaymentTransformer } from './cart-payment.service';
import { DaffMagentoCartShippingInformationTransformer } from './cart-shipping-information.service';
import { MagentoCartAddress } from '../../models/outputs/cart-address';
import { MagentoShippingAddress } from '../../models/outputs/shipping-address';
import { MagentoCartItem } from '../../models/outputs/cart-item';
import { MagentoCartPaymentMethod } from '../../models/outputs/cart-payment-method';
import { DaffMagentoShippingAddressTransformer } from './shipping-address.service';
import { DaffMagentoCartShippingRateTransformer } from './cart-shipping-rate.service';

describe('Driver | Magento | Cart | Transformer | MagentoCart', () => {
  let service: DaffMagentoCartTransformer;

  let daffCartFactory: DaffCartFactory;
  let magentoCartFactory: MagentoCartFactory;
  let magentoShippingAddressFactory: MagentoShippingAddressFactory;
  let magentoCartAddressFactory: MagentoCartAddressFactory;
  let magentoCartItemFactory: MagentoCartItemFactory;
  let magentoShippingMethodFactory: MagentoCartShippingMethodFactory;

  let mockDaffCart: DaffCart;
  let mockMagentoCart;
  let mockBillingAddress: MagentoCartAddress;
  let mockShippingAddress: MagentoShippingAddress;
  let mockShippingMethod: MagentoCartShippingMethod;
  let mockCartItem: MagentoCartItem;
  let mockPaymentMethod: MagentoCartPaymentMethod;

  let cartItemTransformerSpy;
  let cartAddressTransformerSpy;
  let shippingAddressTransformerSpy;
  let cartPaymentTransformerSpy;
  let cartShippingInformationTransformerSpy;
  let cartShippingRateTransformerSpy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffMagentoCartTransformer,
        {
          provide: DaffMagentoCartItemTransformer,
          useValue: jasmine.createSpyObj('DaffMagentoCartItemTransformer', ['transform'])
        },
        {
          provide: DaffMagentoCartPaymentTransformer,
          useValue: jasmine.createSpyObj('DaffMagentoCartPaymentTransformer', ['transform'])
        },
        {
          provide: DaffMagentoCartShippingInformationTransformer,
          useValue: jasmine.createSpyObj('DaffMagentoCartShippingInformationTransformer', ['transform'])
        },
        {
          provide: DaffMagentoCartShippingRateTransformer,
          useValue: jasmine.createSpyObj('DaffMagentoCartShippingRateTransformer', ['transform'])
        },
        {
          provide: DaffMagentoCartAddressTransformer,
          useValue: jasmine.createSpyObj('DaffMagentoCartAddressTransformer', ['transform'])
        },
        {
          provide: DaffMagentoShippingAddressTransformer,
          useValue: jasmine.createSpyObj('DaffMagentoShippingAddressTransformer', ['transform'])
        }
      ]
    });

    service = TestBed.get(DaffMagentoCartTransformer);

    daffCartFactory = TestBed.get(DaffCartFactory);
    magentoCartFactory = TestBed.get(MagentoCartFactory);
    magentoShippingAddressFactory = TestBed.get(MagentoShippingAddressFactory);
    magentoCartAddressFactory = TestBed.get(MagentoCartAddressFactory);
    magentoCartItemFactory = TestBed.get(MagentoCartItemFactory);
    magentoShippingMethodFactory = TestBed.get(MagentoCartShippingMethodFactory);

    cartItemTransformerSpy = TestBed.get(DaffMagentoCartItemTransformer);
    cartAddressTransformerSpy = TestBed.get(DaffMagentoCartAddressTransformer);
    cartShippingInformationTransformerSpy = TestBed.get(DaffMagentoCartShippingInformationTransformer);
    shippingAddressTransformerSpy = TestBed.get(DaffMagentoShippingAddressTransformer);
    cartPaymentTransformerSpy = TestBed.get(DaffMagentoCartPaymentTransformer);
    cartShippingRateTransformerSpy = TestBed.get(DaffMagentoCartShippingRateTransformer);

    mockDaffCart = daffCartFactory.create();
    mockMagentoCart = magentoCartFactory.create();
    mockShippingAddress = {
      ...magentoShippingAddressFactory.create(),
      email: mockMagentoCart.email
    };
    mockBillingAddress = {
      ...magentoShippingAddressFactory.create(),
      email: mockMagentoCart.email
    };
    mockCartItem = magentoCartItemFactory.create();
    mockShippingMethod = magentoShippingMethodFactory.create();
    mockMagentoCart.shipping_addresses = [mockShippingAddress];
    mockMagentoCart.billing_address = mockBillingAddress;
    mockMagentoCart.items = [mockCartItem];
    mockPaymentMethod = mockMagentoCart.selected_payment_method;
    mockShippingAddress.selected_shipping_method = mockShippingMethod;
    mockShippingAddress.available_shipping_methods = [mockShippingMethod];

    cartItemTransformerSpy.transform.withArgs(mockCartItem).and.returnValue(mockDaffCart.items[0]);
    cartAddressTransformerSpy.transform.withArgs(mockBillingAddress).and.returnValue(mockDaffCart.billing_address);
    shippingAddressTransformerSpy.transform.and.returnValue(mockDaffCart.shipping_address);
    cartShippingInformationTransformerSpy.transform.withArgs(mockShippingMethod).and.returnValue(mockDaffCart.shipping_information);
    cartShippingRateTransformerSpy.transform.withArgs(mockShippingMethod).and.returnValue(mockDaffCart.shipping_information);
    cartPaymentTransformerSpy.transform.withArgs(mockPaymentMethod).and.returnValue(mockDaffCart.payment);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('transform | transforming a cart', () => {
    let transformedCart;

    describe('when the cart has all its fields defined', () => {
      let id;
      let subtotal;
      let grand_total;

      beforeEach(() => {
        id = 5;
        subtotal = 20;
        grand_total = 20.20;

        mockMagentoCart.id = id;
        mockMagentoCart.prices.subtotal_excluding_tax.value = subtotal;
        mockMagentoCart.prices.grand_total.value = grand_total;

        transformedCart = service.transform(mockMagentoCart);
      });

      it('should return an object with the correct values', () => {
        expect(String(transformedCart.id)).toEqual(String(id));
        expect(transformedCart.subtotal).toEqual(subtotal);
        expect(transformedCart.grand_total).toEqual(grand_total);
      });

      it('should call the cart address transformer with the billing address', () => {
        expect(cartAddressTransformerSpy.transform).toHaveBeenCalledWith(mockBillingAddress);
      });

      it('should call the shipping address transformer with the shipping address', () => {
        expect(shippingAddressTransformerSpy.transform).toHaveBeenCalledWith(jasmine.objectContaining({
          email: mockShippingAddress.email,
          street: mockShippingAddress.street,
          region: mockShippingAddress.region,
        }));
      });

      it('should call the cart item transformer with the cart item', () => {
        expect(cartItemTransformerSpy.transform).toHaveBeenCalledWith(mockCartItem);
      });

      it('should call the shipping information transformer with the shipping method', () => {
        expect(cartShippingInformationTransformerSpy.transform).toHaveBeenCalledWith(mockShippingMethod);
      });

      it('should call the shipping rate transformer with each of the available shipping methods', () => {
        mockShippingAddress.available_shipping_methods.forEach(method => {
          expect(cartShippingRateTransformerSpy.transform).toHaveBeenCalledWith(method);
        });
      });

      it('should call the cart payment transformer with the payment method', () => {
        expect(cartPaymentTransformerSpy.transform).toHaveBeenCalledWith(mockPaymentMethod);
      });

      it('should call the cart address transformer with the billing address', () => {
        expect(cartAddressTransformerSpy.transform).toHaveBeenCalledWith(mockBillingAddress);
      });

      it('should call the shipping address transformer with the shipping address', () => {
        expect(shippingAddressTransformerSpy.transform).toHaveBeenCalledWith(mockShippingAddress);
      });

      it('should set the magento_cart field', () => {
        expect(transformedCart.magento_cart).toEqual(mockMagentoCart);
      });
    });

    describe('when the argument is null', () => {
      beforeEach(() => {
        transformedCart = service.transform(null);
      });

      it('should return null and not throw an error', () => {
        expect(transformedCart).toBeNull();
      });
    });

    describe('when the billing address is null', () => {
      beforeEach(() => {
        mockMagentoCart.billing_address = null;
        transformedCart = service.transform(mockMagentoCart);
      });

      it('should not call the cart address transformer', () => {
        expect(cartAddressTransformerSpy.transform).not.toHaveBeenCalled();
      });
    });

    describe('when the shipping address is null', () => {
      beforeEach(() => {
        mockMagentoCart.shipping_addresses = [];
        transformedCart = service.transform(mockMagentoCart);
      });

      it('should not call the shipping address transformer', () => {
        expect(shippingAddressTransformerSpy.transform).not.toHaveBeenCalled();
      });

      it('should not call the shipping rate transformer', () => {
        expect(cartShippingRateTransformerSpy.transform).not.toHaveBeenCalled();
      });
    });

    describe('when the shipping methods are null', () => {
      beforeEach(() => {
        mockMagentoCart.shipping_addresses[0].available_shipping_methods = null;
        transformedCart = service.transform(mockMagentoCart);
      });

      it('should set available_shipping_methods to an empty array', () => {
        expect(transformedCart.available_shipping_methods).toEqual([]);
      });

      it('should not call the shipping rate transformer', () => {
        expect(cartShippingRateTransformerSpy.transform).not.toHaveBeenCalled();
      });
    });
  });
});
