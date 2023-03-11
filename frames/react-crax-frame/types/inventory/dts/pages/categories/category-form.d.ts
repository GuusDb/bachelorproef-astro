import { ReactElement } from "react";
import { CategoryInput } from "../../graphql/generated";
export interface CategoryFormProps {
    categoryInput?: CategoryInput | undefined;
    isOpen: boolean;
    onSuccess: () => void;
    onClose: () => void;
    onError: (error: string) => void;
}
export declare function CategoryForm(props: CategoryFormProps): ReactElement;
