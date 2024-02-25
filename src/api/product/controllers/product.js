"use strict";

/**
 * product controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::product.product");

// module.exports = createCoreController("api::product.product", ({ strapi }) => ({
//   async find(ctx) {
//     console.log("find", ctx);
//     const products = await strapi.entityService.findMany(
//       "api::product.product"
//     );
//     console.log("products", products);
//     ctx.send(products);
//   },
// }));
