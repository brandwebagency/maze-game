type BrandVariableModel = {
  name: string;
  logos: {
    large: string;
    small: string;
    white: string;
    favicon: string;
    alt: string;
    tenant: string;
  };
  images: {
    auth: string;
    challenges?: string;
    zones?: string;
  };
  brandValue: string;
  tenantId?: string;
  theme: Object;
  defaultLanguage: string;
  meta: {
    title: string;
    description: string;
  };

  menuRoutes: {
    [key: string]: {
      title: string;
      link: string;
      icon?: string | React.ComponentType<any>;
      isExternal?: boolean;
    }[];
  };

  hasCreate?: {
    challenges?: boolean;
    zones?: boolean;
  };
};

export default BrandVariableModel;
