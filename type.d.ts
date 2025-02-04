import { internalGroqTypeReferenceTo, SanityImageCrop, SanityImageHotspot, Slug } from "./sanity.types";

type Product = {
    image(image: any): unknown;
    id: Key | null | undefined;
    category: ReactI18NextChildren | Iterable<ReactI18NextChildren>;
    name: string;
    map(arg0: (product: { imageUrl: string | import("next/dist/shared/lib/get-img-props").StaticImport; title: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | Promise<React.AwaitedReactNode> | null | undefined; price: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | Iterable<React.ReactNode> | null | undefined; }, index: React.Key | null | undefined) => React.JSX.Element): React.ReactNode | Iterable<React.ReactNode>;
    discount: ReactI18NextChildren | Iterable<ReactI18NextChildren>;
    _id: string;
    title: string;
    slug?: Slug;
    price: number;
    description: string;
    dicountParcentage: number;
    imageUrl: string;
    productImage: {
      asset: {
        _ref: string;
      };
    };
    tags: string[];
    isNew: boolean;
}
