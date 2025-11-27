import { brand } from "@/constants/brandVariables/brandVariables";

export const updateDocumentMeta = () => {
  {
    /* Update title */
  }
  if (brand.meta.title) {
    document.title = brand.meta.title;
  }

  {
    /* Update favicon*/
  }
  if (brand.logos.favicon) {
    const favicon = document.querySelector(
      'link[rel="icon"]'
    ) as HTMLLinkElement;
    if (favicon) {
      favicon.href = brand.logos.favicon;
    }
  }

  {
    /*Update description */
  }
  if (brand.meta.description) {
    let metaDescription = document.querySelector(
      'meta[name="description"]'
    ) as HTMLMetaElement;
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = brand.meta.description;
  }
};
