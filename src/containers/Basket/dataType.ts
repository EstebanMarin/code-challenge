export interface Data {
  "basketId": string,
  "currency": string,
  "modifiedDate": string,
  "pricing": {
    "total": number,
    "baseTotal": number,
    "totalTax": number,
    "productTotal": number,
    "productTotalBeforeDiscounts": number,
    "productTotalBeforeOrderDiscounts": number,
    "shippingTotal": number,
    "shippingBaseTotal": number
  },
  "resourceState": number,
  "taxationPolicy": number,
  "totalProductCount": string,
  "messageList": [
    {
      "type": string,
    },
    {
      "type": string,
    },
    {
      "type": string,
      "details": {
        "shipmentId": string,
      }
    }
  ],
  "shipmentList": [
    {
      "shipmentId": string,
      "shipmentType": string,
      "productLineItemList": [
        {
          "itemId": string,
          "productId": string,
          "productName": string,
          "canonicalProductName": string,
          "productImage": string,
          "quantity": number,
          "pricing": {
            "baseUnitPrice": number,
            "unitPrice": number,
            "basePrice": number,
            "price": number,
            "priceAfterAllDiscounts": number,
            "unitPriceWithoutTax": number
          },
          "gender": string,
          "color": string,
          "size": string,
          "allowedActions": {
            "delete": boolean,
            "edit": boolean,
            "moveToWishlist": boolean,
          },
          "maxQuantityAllowed": 5,
          "isBonusProduct": false,
          "productType": string,
          "availableStock": number,
          "isFlashProduct": boolean
        }
      ],
      "shippingLineItem": {
        "name": string,
        "description": string,
        "id": string,
        "pricing": {
          "basePrice": number,
          "price": number
        },
        "carrierServiceName": number
      },
      "shippingOnDate": number
    }
  ],
  "customer": {
    "customerId": number,
    "isLoggedIn": boolean
  },
  "freeShippingThreshold": number
}
