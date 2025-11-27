import BrandVariableModel from "@/models/BrandVariables.model";
import { ELGIGANTEN_brandVariables, KEYCHRON_brandVariables } from "./brands";

const brands = {
  "localhost:5173": {
    // brandData: ELGIGANTEN_brandVariables,
    brandData: KEYCHRON_brandVariables,
  }, // Set for local development

  "localhost:5174": {
    // brandData: ELGIGANTEN_brandVariables,
    brandData: KEYCHRON_brandVariables,
  }, // Set for local development

  "192.168.1.153:5173": {
    brandData: ELGIGANTEN_brandVariables,
  }, // Set for local development

  "typingshooter.web.app": {
    brandData: KEYCHRON_brandVariables,
  }, // Production

  "typingshooter.iplay.dk": {
    brandData: KEYCHRON_brandVariables,
  }, // Production

  default: {
    brandData: KEYCHRON_brandVariables,
  }, // Fallback to WOG

  // Brands, can be called individualy with getBrandVariables(client)
  TEST: ELGIGANTEN_brandVariables,
};

export const getBrandVariables = (client?: string) => {
  if (client) {
    const brandVariables = brands[client];

    //

    return brandVariables as {
      brandData: BrandVariableModel;
    };
  } else {
    const hostname = window.location.host;
    const brandVariables = brands[hostname] || brands["default"];
    return brandVariables as {
      brandData: BrandVariableModel;
    };
  }
};

export const brand = getBrandVariables().brandData;

// Version that compares platform tenantId with profileTenantId to check if user can load data.
// export const brand = (profileTenantId) => {
//   const data = getBrandVariables().brandData;

//   const doesProfileTenantMatchPlatformTenant =
//     data.tenantId === profileTenantId;

//   if (data && doesProfileTenantMatchPlatformTenant) {
//     return data;
//   } else {
//     return toast.error(
//       "Permission to load info denied based on your profile data!"
//     );
//   }
// };
