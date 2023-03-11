import { UseMutationOptions, UseQueryOptions } from "react-query";
export declare type Maybe<T> = T | null;
export declare type InputMaybe<T> = Maybe<T>;
export declare type Exact<T extends {
    [key: string]: unknown;
}> = {
    [K in keyof T]: T[K];
};
export declare type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>;
};
export declare type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export declare type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    DateTime: any;
};
export declare type ActiveFilterInput = {
    accessor: Scalars["String"];
    filterType: CrFilterType;
    value: Scalars["String"];
};
export declare type Category = {
    __typename?: "Category";
    _id: Scalars["String"];
    createdAt: Scalars["DateTime"];
    name: Scalars["String"];
    updatedAt: Scalars["DateTime"];
};
export declare type CategoryInput = {
    _id?: InputMaybe<Scalars["String"]>;
    name: Scalars["String"];
};
/** the type of a condition */
export declare enum ConditionState {
    APlaceholder = "APlaceholder",
    Broken = "Broken",
    Missing = "Missing",
    New = "New",
    Used = "Used"
}
export declare type Contract = {
    __typename?: "Contract";
    _id: Scalars["String"];
    conditionState: ConditionState;
    contractType: ContractType;
    createdAt: Scalars["DateTime"];
    firstName: Scalars["String"];
    fullName?: Maybe<Scalars["String"]>;
    hardware?: Maybe<Hardware>;
    hardwareBrand?: Maybe<Scalars["String"]>;
    hardwareProduct?: Maybe<Scalars["String"]>;
    hasSignedDocument?: Maybe<Scalars["Boolean"]>;
    lastName: Scalars["String"];
    notes?: Maybe<Scalars["String"]>;
    relatedContract?: Maybe<Scalars["String"]>;
    signed: Scalars["Boolean"];
    signedDate?: Maybe<Scalars["DateTime"]>;
    updatedAt: Scalars["DateTime"];
    user?: Maybe<User>;
    userId: Scalars["String"];
};
export declare type ContractDocumentUpload = {
    contractId: Scalars["String"];
    document: Scalars["String"];
};
export declare type ContractInput = {
    _id?: InputMaybe<Scalars["String"]>;
    conditionState: ConditionState;
    contractType: ContractType;
    hardwareId: Scalars["String"];
    notes?: InputMaybe<Scalars["String"]>;
    relatedContract?: InputMaybe<Scalars["String"]>;
    signed: Scalars["Boolean"];
    signedDate?: InputMaybe<Scalars["DateTime"]>;
    signedDocument?: InputMaybe<Scalars["String"]>;
    userId: Scalars["String"];
};
/** the type of a contract */
export declare enum ContractType {
    APlaceholder = "APlaceholder",
    End = "End",
    Start = "Start"
}
/** the state of the filtering */
export declare enum CrFilterType {
    DateInput = "DateInput",
    NumberInput = "NumberInput",
    RangeInput = "RangeInput",
    Select = "Select",
    TextInput = "TextInput"
}
/** the order of the sorting */
export declare enum CrSortOrder {
    Ascending = "Ascending",
    Descending = "Descending",
    UnTouched = "UnTouched"
}
export declare type Hardware = {
    __typename?: "Hardware";
    _id: Scalars["String"];
    brand: Scalars["String"];
    category?: Maybe<Category>;
    categoryName?: Maybe<Scalars["String"]>;
    conditionDescription?: Maybe<Scalars["String"]>;
    conditionState: ConditionState;
    contracts?: Maybe<Array<Contract>>;
    contractsCount?: Maybe<Scalars["Float"]>;
    craxId: Scalars["Float"];
    createdAt: Scalars["DateTime"];
    hasInvoiceDocument?: Maybe<Scalars["Boolean"]>;
    price?: Maybe<Scalars["Float"]>;
    product: Scalars["String"];
    serialNumber?: Maybe<Scalars["String"]>;
    status: StatusType;
    updatedAt: Scalars["DateTime"];
};
export declare type HardwareInput = {
    _id?: InputMaybe<Scalars["String"]>;
    brand: Scalars["String"];
    categoryId: Scalars["String"];
    conditionDescription?: InputMaybe<Scalars["String"]>;
    conditionState: ConditionState;
    invoiceDocument?: InputMaybe<Scalars["String"]>;
    price?: InputMaybe<Scalars["Float"]>;
    product: Scalars["String"];
    serialNumber?: InputMaybe<Scalars["String"]>;
};
export declare type Mutation = {
    __typename?: "Mutation";
    CreateOrUpdateCategory: Category;
    createOrUpdateContract: Contract;
    createOrUpdateHardware: Hardware;
    deleteCategory: Category;
    deleteContract: Array<Contract>;
    deleteHardware: Array<Hardware>;
    uploadContract: Scalars["Boolean"];
};
export declare type MutationCreateOrUpdateCategoryArgs = {
    input: CategoryInput;
};
export declare type MutationCreateOrUpdateContractArgs = {
    input: ContractInput;
};
export declare type MutationCreateOrUpdateHardwareArgs = {
    input: HardwareInput;
};
export declare type MutationDeleteCategoryArgs = {
    input: CategoryInput;
};
export declare type MutationDeleteContractArgs = {
    input: ContractInput;
};
export declare type MutationDeleteHardwareArgs = {
    input: HardwareInput;
};
export declare type MutationUploadContractArgs = {
    input: ContractDocumentUpload;
};
export declare type PaginationInput = {
    accessor: Scalars["String"];
    activeFilters: Array<ActiveFilterInput>;
    pageIndex: Scalars["Float"];
    pageSize: Scalars["Float"];
    sortOrder?: InputMaybe<CrSortOrder>;
};
export declare type PdfDocument = {
    __typename?: "PdfDocument";
    document: Scalars["String"];
    id: Scalars["String"];
};
export declare type Query = {
    __typename?: "Query";
    getAllCategories: Array<Category>;
    getAllContracts: Array<Contract>;
    getAllHardware: Array<Hardware>;
    getAllUsers: Array<User>;
    getCategoriesCount: Scalars["Float"];
    getCategoryById: Category;
    getContractById: Contract;
    getContractDocumentById: PdfDocument;
    getContractsCount: Scalars["Float"];
    getHardwareById: Hardware;
    getHardwareCount: Scalars["Float"];
    getHardwareInvoiceById: PdfDocument;
};
export declare type QueryGetAllCategoriesArgs = {
    paginationInput?: InputMaybe<PaginationInput>;
};
export declare type QueryGetAllContractsArgs = {
    paginationInput?: InputMaybe<PaginationInput>;
};
export declare type QueryGetAllHardwareArgs = {
    onlyInStock?: InputMaybe<Scalars["Boolean"]>;
    paginationInput?: InputMaybe<PaginationInput>;
};
export declare type QueryGetCategoriesCountArgs = {
    paginationInput?: InputMaybe<PaginationInput>;
};
export declare type QueryGetCategoryByIdArgs = {
    id: Scalars["String"];
};
export declare type QueryGetContractByIdArgs = {
    id: Scalars["String"];
};
export declare type QueryGetContractDocumentByIdArgs = {
    id: Scalars["String"];
};
export declare type QueryGetContractsCountArgs = {
    paginationInput?: InputMaybe<PaginationInput>;
};
export declare type QueryGetHardwareByIdArgs = {
    id: Scalars["String"];
};
export declare type QueryGetHardwareCountArgs = {
    paginationInput?: InputMaybe<PaginationInput>;
};
export declare type QueryGetHardwareInvoiceByIdArgs = {
    id: Scalars["String"];
};
/** the type of a status */
export declare enum StatusType {
    APlaceholder = "APlaceholder",
    InStock = "InStock",
    LoanedOut = "LoanedOut",
    Reserved = "Reserved"
}
export declare type User = {
    __typename?: "User";
    email: Scalars["String"];
    firstName: Scalars["String"];
    lastName: Scalars["String"];
    userId: Scalars["String"];
};
export declare type CategoriesQueryVariables = Exact<{
    paginationInput?: InputMaybe<PaginationInput>;
}>;
export declare type CategoriesQuery = {
    __typename?: "Query";
    getAllCategories: Array<{
        __typename?: "Category";
        _id: string;
        name: string;
        createdAt: any;
        updatedAt: any;
    }>;
};
export declare type CreateOrUpdateCategoryMutationVariables = Exact<{
    categoryInput: CategoryInput;
}>;
export declare type CreateOrUpdateCategoryMutation = {
    __typename?: "Mutation";
    CreateOrUpdateCategory: {
        __typename?: "Category";
        _id: string;
        name: string;
        createdAt: any;
        updatedAt: any;
    };
};
export declare type CategoriesCountQueryVariables = Exact<{
    [key: string]: never;
}>;
export declare type CategoriesCountQuery = {
    __typename?: "Query";
    getCategoriesCount: number;
};
export declare type CategoriesAndCountQueryVariables = Exact<{
    paginationInput?: InputMaybe<PaginationInput>;
}>;
export declare type CategoriesAndCountQuery = {
    __typename?: "Query";
    getCategoriesCount: number;
    getAllCategories: Array<{
        __typename?: "Category";
        _id: string;
        name: string;
        createdAt: any;
        updatedAt: any;
    }>;
};
export declare type ContractsQueryVariables = Exact<{
    paginationInput?: InputMaybe<PaginationInput>;
}>;
export declare type ContractsQuery = {
    __typename?: "Query";
    getContractsCount: number;
    getAllContracts: Array<{
        __typename?: "Contract";
        _id: string;
        userId: string;
        firstName: string;
        lastName: string;
        createdAt: any;
        updatedAt: any;
        signed: boolean;
        signedDate?: any | null;
        hasSignedDocument?: boolean | null;
        conditionState: ConditionState;
        notes?: string | null;
        contractType: ContractType;
        relatedContract?: string | null;
        hardwareBrand?: string | null;
        hardwareProduct?: string | null;
        user?: {
            __typename?: "User";
            userId: string;
            firstName: string;
            lastName: string;
            email: string;
        } | null;
        hardware?: {
            __typename?: "Hardware";
            _id: string;
            product: string;
            serialNumber?: string | null;
            brand: string;
            conditionState: ConditionState;
            hasInvoiceDocument?: boolean | null;
            price?: number | null;
            status: StatusType;
            conditionDescription?: string | null;
            categoryName?: string | null;
            contractsCount?: number | null;
            createdAt: any;
            updatedAt: any;
            craxId: number;
        } | null;
    }>;
};
export declare type ContractsCountQueryVariables = Exact<{
    [key: string]: never;
}>;
export declare type ContractsCountQuery = {
    __typename?: "Query";
    getContractsCount: number;
};
export declare type ContractsAndCountQueryVariables = Exact<{
    paginationInput?: InputMaybe<PaginationInput>;
}>;
export declare type ContractsAndCountQuery = {
    __typename?: "Query";
    getContractsCount: number;
    getAllContracts: Array<{
        __typename?: "Contract";
        _id: string;
        userId: string;
        firstName: string;
        lastName: string;
        signed: boolean;
        signedDate?: any | null;
        hasSignedDocument?: boolean | null;
        conditionState: ConditionState;
        notes?: string | null;
        contractType: ContractType;
        relatedContract?: string | null;
        hardwareBrand?: string | null;
        hardwareProduct?: string | null;
        fullName?: string | null;
        createdAt: any;
        updatedAt: any;
        user?: {
            __typename?: "User";
            userId: string;
            firstName: string;
            lastName: string;
            email: string;
        } | null;
        hardware?: {
            __typename?: "Hardware";
            _id: string;
            product: string;
            serialNumber?: string | null;
            brand: string;
            conditionState: ConditionState;
            hasInvoiceDocument?: boolean | null;
            price?: number | null;
            status: StatusType;
            conditionDescription?: string | null;
            categoryName?: string | null;
            contractsCount?: number | null;
            createdAt: any;
            updatedAt: any;
            craxId: number;
        } | null;
    }>;
};
export declare type UsersQueryVariables = Exact<{
    [key: string]: never;
}>;
export declare type UsersQuery = {
    __typename?: "Query";
    getAllUsers: Array<{
        __typename?: "User";
        userId: string;
        firstName: string;
        lastName: string;
        email: string;
    }>;
};
export declare type ContractDocumentByIdQueryVariables = Exact<{
    id: Scalars["String"];
}>;
export declare type ContractDocumentByIdQuery = {
    __typename?: "Query";
    getContractDocumentById: {
        __typename?: "PdfDocument";
        id: string;
        document: string;
    };
};
export declare type CreateOrUpdateContractMutationVariables = Exact<{
    contract: ContractInput;
}>;
export declare type CreateOrUpdateContractMutation = {
    __typename?: "Mutation";
    createOrUpdateContract: {
        __typename?: "Contract";
        _id: string;
        signed: boolean;
        signedDate?: any | null;
        hasSignedDocument?: boolean | null;
        conditionState: ConditionState;
        notes?: string | null;
        contractType: ContractType;
        hardwareBrand?: string | null;
        hardwareProduct?: string | null;
        fullName?: string | null;
        createdAt: any;
        updatedAt: any;
        hardware?: {
            __typename?: "Hardware";
            _id: string;
            product: string;
            serialNumber?: string | null;
            brand: string;
            conditionState: ConditionState;
            hasInvoiceDocument?: boolean | null;
            price?: number | null;
            status: StatusType;
            conditionDescription?: string | null;
            categoryName?: string | null;
            contractsCount?: number | null;
            createdAt: any;
            updatedAt: any;
            craxId: number;
        } | null;
        user?: {
            __typename?: "User";
            userId: string;
            firstName: string;
            lastName: string;
            email: string;
        } | null;
    };
};
export declare type UploadContractMutationVariables = Exact<{
    input: ContractDocumentUpload;
}>;
export declare type UploadContractMutation = {
    __typename?: "Mutation";
    uploadContract: boolean;
};
export declare type CreateOrUpdateHardwareMutationVariables = Exact<{
    hardware: HardwareInput;
}>;
export declare type CreateOrUpdateHardwareMutation = {
    __typename?: "Mutation";
    createOrUpdateHardware: {
        __typename?: "Hardware";
        _id: string;
        product: string;
        brand: string;
        conditionState: ConditionState;
        conditionDescription?: string | null;
        createdAt: any;
        updatedAt: any;
        craxId: number;
    };
};
export declare type GetAllHardwareForContractQueryVariables = Exact<{
    [key: string]: never;
}>;
export declare type GetAllHardwareForContractQuery = {
    __typename?: "Query";
    getAllHardware: Array<{
        __typename?: "Hardware";
        _id: string;
        product: string;
        serialNumber?: string | null;
        brand: string;
        conditionState: ConditionState;
        hasInvoiceDocument?: boolean | null;
        price?: number | null;
        status: StatusType;
        conditionDescription?: string | null;
        categoryName?: string | null;
        contractsCount?: number | null;
        createdAt: any;
        updatedAt: any;
        craxId: number;
    }>;
};
export declare type HardwareInvoiceByIdQueryVariables = Exact<{
    id: Scalars["String"];
}>;
export declare type HardwareInvoiceByIdQuery = {
    __typename?: "Query";
    getHardwareInvoiceById: {
        __typename?: "PdfDocument";
        id: string;
        document: string;
    };
};
export declare type HardwareAndCountQueryVariables = Exact<{
    onlyInStock?: InputMaybe<Scalars["Boolean"]>;
    paginationInput?: InputMaybe<PaginationInput>;
}>;
export declare type HardwareAndCountQuery = {
    __typename?: "Query";
    getHardwareCount: number;
    getAllHardware: Array<{
        __typename?: "Hardware";
        _id: string;
        product: string;
        serialNumber?: string | null;
        brand: string;
        conditionState: ConditionState;
        hasInvoiceDocument?: boolean | null;
        price?: number | null;
        status: StatusType;
        conditionDescription?: string | null;
        categoryName?: string | null;
        contractsCount?: number | null;
        createdAt: any;
        updatedAt: any;
        craxId: number;
        category?: {
            __typename?: "Category";
            _id: string;
            name: string;
            createdAt: any;
            updatedAt: any;
        } | null;
        contracts?: Array<{
            __typename?: "Contract";
            _id: string;
            userId: string;
            firstName: string;
            lastName: string;
            signed: boolean;
            signedDate?: any | null;
            hasSignedDocument?: boolean | null;
            conditionState: ConditionState;
            notes?: string | null;
            contractType: ContractType;
            fullName?: string | null;
            hardwareBrand?: string | null;
            hardwareProduct?: string | null;
            createdAt: any;
            updatedAt: any;
            user?: {
                __typename?: "User";
                userId: string;
                firstName: string;
                lastName: string;
                email: string;
            } | null;
        }> | null;
    }>;
};
export declare type GetAllHardwareAndUsersQueryVariables = Exact<{
    onlyInStock?: InputMaybe<Scalars["Boolean"]>;
}>;
export declare type GetAllHardwareAndUsersQuery = {
    __typename?: "Query";
    getAllHardware: Array<{
        __typename?: "Hardware";
        _id: string;
        product: string;
        serialNumber?: string | null;
        brand: string;
        conditionState: ConditionState;
        hasInvoiceDocument?: boolean | null;
        price?: number | null;
        status: StatusType;
        conditionDescription?: string | null;
        categoryName?: string | null;
        contractsCount?: number | null;
        createdAt: any;
        updatedAt: any;
        craxId: number;
        category?: {
            __typename?: "Category";
            _id: string;
            name: string;
            createdAt: any;
            updatedAt: any;
        } | null;
    }>;
    getAllUsers: Array<{
        __typename?: "User";
        userId: string;
        firstName: string;
        lastName: string;
        email: string;
    }>;
};
export declare type GetAllHardwareAndCategoriesQueryVariables = Exact<{
    [key: string]: never;
}>;
export declare type GetAllHardwareAndCategoriesQuery = {
    __typename?: "Query";
    getAllHardware: Array<{
        __typename?: "Hardware";
        _id: string;
        product: string;
        serialNumber?: string | null;
        brand: string;
        conditionState: ConditionState;
        hasInvoiceDocument?: boolean | null;
        price?: number | null;
        status: StatusType;
        conditionDescription?: string | null;
        categoryName?: string | null;
        contractsCount?: number | null;
        createdAt: any;
        updatedAt: any;
        craxId: number;
        category?: {
            __typename?: "Category";
            _id: string;
            name: string;
            createdAt: any;
            updatedAt: any;
        } | null;
        contracts?: Array<{
            __typename?: "Contract";
            _id: string;
            userId: string;
            firstName: string;
            lastName: string;
            signed: boolean;
            signedDate?: any | null;
            hasSignedDocument?: boolean | null;
            conditionState: ConditionState;
            notes?: string | null;
            contractType: ContractType;
            fullName?: string | null;
            hardwareBrand?: string | null;
            hardwareProduct?: string | null;
            createdAt: any;
            updatedAt: any;
            user?: {
                __typename?: "User";
                userId: string;
                firstName: string;
                lastName: string;
                email: string;
            } | null;
            hardware?: {
                __typename?: "Hardware";
                _id: string;
                product: string;
                serialNumber?: string | null;
                brand: string;
                conditionState: ConditionState;
                hasInvoiceDocument?: boolean | null;
                price?: number | null;
                status: StatusType;
                conditionDescription?: string | null;
                categoryName?: string | null;
                contractsCount?: number | null;
            } | null;
        }> | null;
    }>;
    getAllCategories: Array<{
        __typename?: "Category";
        _id: string;
        createdAt: any;
        updatedAt: any;
        name: string;
    }>;
};
export declare type HardwareCountQueryVariables = Exact<{
    [key: string]: never;
}>;
export declare type HardwareCountQuery = {
    __typename?: "Query";
    getHardwareCount: number;
};
export declare const CategoriesDocument = "\n    query categories($paginationInput: PaginationInput) {\n  getAllCategories(paginationInput: $paginationInput) {\n    _id\n    name\n    createdAt\n    updatedAt\n  }\n}\n    ";
export declare const useCategoriesQuery: <TData = CategoriesQuery, TError = unknown>(variables?: CategoriesQueryVariables, options?: UseQueryOptions<CategoriesQuery, TError, TData, import("react-query").QueryKey>) => import("react-query").UseQueryResult<TData, TError>;
export declare const CreateOrUpdateCategoryDocument = "\n    mutation CreateOrUpdateCategory($categoryInput: CategoryInput!) {\n  CreateOrUpdateCategory(input: $categoryInput) {\n    _id\n    name\n    createdAt\n    updatedAt\n  }\n}\n    ";
export declare const useCreateOrUpdateCategoryMutation: <TError = unknown, TContext = unknown>(options?: UseMutationOptions<CreateOrUpdateCategoryMutation, TError, Exact<{
    categoryInput: CategoryInput;
}>, TContext>) => import("react-query").UseMutationResult<CreateOrUpdateCategoryMutation, TError, Exact<{
    categoryInput: CategoryInput;
}>, TContext>;
export declare const CategoriesCountDocument = "\n    query categoriesCount {\n  getCategoriesCount\n}\n    ";
export declare const useCategoriesCountQuery: <TData = CategoriesCountQuery, TError = unknown>(variables?: CategoriesCountQueryVariables, options?: UseQueryOptions<CategoriesCountQuery, TError, TData, import("react-query").QueryKey>) => import("react-query").UseQueryResult<TData, TError>;
export declare const CategoriesAndCountDocument = "\n    query categoriesAndCount($paginationInput: PaginationInput) {\n  getAllCategories(paginationInput: $paginationInput) {\n    _id\n    name\n    createdAt\n    updatedAt\n  }\n  getCategoriesCount(paginationInput: $paginationInput)\n}\n    ";
export declare const useCategoriesAndCountQuery: <TData = CategoriesAndCountQuery, TError = unknown>(variables?: CategoriesAndCountQueryVariables, options?: UseQueryOptions<CategoriesAndCountQuery, TError, TData, import("react-query").QueryKey>) => import("react-query").UseQueryResult<TData, TError>;
export declare const ContractsDocument = "\n    query contracts($paginationInput: PaginationInput) {\n  getAllContracts(paginationInput: $paginationInput) {\n    _id\n    userId\n    firstName\n    lastName\n    createdAt\n    updatedAt\n    user {\n      userId\n      firstName\n      lastName\n      email\n    }\n    hardware {\n      _id\n      product\n      serialNumber\n      brand\n      conditionState\n      hasInvoiceDocument\n      price\n      status\n      conditionDescription\n      categoryName\n      contractsCount\n      createdAt\n      updatedAt\n      craxId\n    }\n    signed\n    signedDate\n    hasSignedDocument\n    conditionState\n    notes\n    contractType\n    relatedContract\n    hardwareBrand\n    hardwareProduct\n  }\n  getContractsCount\n}\n    ";
export declare const useContractsQuery: <TData = ContractsQuery, TError = unknown>(variables?: ContractsQueryVariables, options?: UseQueryOptions<ContractsQuery, TError, TData, import("react-query").QueryKey>) => import("react-query").UseQueryResult<TData, TError>;
export declare const ContractsCountDocument = "\n    query contractsCount {\n  getContractsCount\n}\n    ";
export declare const useContractsCountQuery: <TData = ContractsCountQuery, TError = unknown>(variables?: ContractsCountQueryVariables, options?: UseQueryOptions<ContractsCountQuery, TError, TData, import("react-query").QueryKey>) => import("react-query").UseQueryResult<TData, TError>;
export declare const ContractsAndCountDocument = "\n    query contractsAndCount($paginationInput: PaginationInput) {\n  getAllContracts(paginationInput: $paginationInput) {\n    _id\n    userId\n    firstName\n    lastName\n    user {\n      userId\n      firstName\n      lastName\n      email\n    }\n    hardware {\n      _id\n      product\n      serialNumber\n      brand\n      conditionState\n      hasInvoiceDocument\n      price\n      status\n      conditionDescription\n      categoryName\n      contractsCount\n      createdAt\n      updatedAt\n      craxId\n    }\n    signed\n    signedDate\n    hasSignedDocument\n    conditionState\n    notes\n    contractType\n    relatedContract\n    hardwareBrand\n    hardwareProduct\n    fullName\n    createdAt\n    updatedAt\n  }\n  getContractsCount(paginationInput: $paginationInput)\n}\n    ";
export declare const useContractsAndCountQuery: <TData = ContractsAndCountQuery, TError = unknown>(variables?: ContractsAndCountQueryVariables, options?: UseQueryOptions<ContractsAndCountQuery, TError, TData, import("react-query").QueryKey>) => import("react-query").UseQueryResult<TData, TError>;
export declare const UsersDocument = "\n    query users {\n  getAllUsers {\n    userId\n    firstName\n    lastName\n    email\n  }\n}\n    ";
export declare const useUsersQuery: <TData = UsersQuery, TError = unknown>(variables?: UsersQueryVariables, options?: UseQueryOptions<UsersQuery, TError, TData, import("react-query").QueryKey>) => import("react-query").UseQueryResult<TData, TError>;
export declare const ContractDocumentByIdDocument = "\n    query contractDocumentById($id: String!) {\n  getContractDocumentById(id: $id) {\n    id\n    document\n  }\n}\n    ";
export declare const useContractDocumentByIdQuery: <TData = ContractDocumentByIdQuery, TError = unknown>(variables: ContractDocumentByIdQueryVariables, options?: UseQueryOptions<ContractDocumentByIdQuery, TError, TData, import("react-query").QueryKey>) => import("react-query").UseQueryResult<TData, TError>;
export declare const CreateOrUpdateContractDocument = "\n    mutation createOrUpdateContract($contract: ContractInput!) {\n  createOrUpdateContract(input: $contract) {\n    _id\n    hardware {\n      _id\n      product\n      serialNumber\n      brand\n      conditionState\n      hasInvoiceDocument\n      price\n      status\n      conditionDescription\n      categoryName\n      contractsCount\n      createdAt\n      updatedAt\n      craxId\n    }\n    user {\n      userId\n      firstName\n      lastName\n      email\n    }\n    signed\n    signedDate\n    hasSignedDocument\n    conditionState\n    notes\n    contractType\n    hardwareBrand\n    hardwareProduct\n    fullName\n    createdAt\n    updatedAt\n  }\n}\n    ";
export declare const useCreateOrUpdateContractMutation: <TError = unknown, TContext = unknown>(options?: UseMutationOptions<CreateOrUpdateContractMutation, TError, Exact<{
    contract: ContractInput;
}>, TContext>) => import("react-query").UseMutationResult<CreateOrUpdateContractMutation, TError, Exact<{
    contract: ContractInput;
}>, TContext>;
export declare const UploadContractDocument = "\n    mutation uploadContract($input: ContractDocumentUpload!) {\n  uploadContract(input: $input)\n}\n    ";
export declare const useUploadContractMutation: <TError = unknown, TContext = unknown>(options?: UseMutationOptions<UploadContractMutation, TError, Exact<{
    input: ContractDocumentUpload;
}>, TContext>) => import("react-query").UseMutationResult<UploadContractMutation, TError, Exact<{
    input: ContractDocumentUpload;
}>, TContext>;
export declare const CreateOrUpdateHardwareDocument = "\n    mutation CreateOrUpdateHardware($hardware: HardwareInput!) {\n  createOrUpdateHardware(input: $hardware) {\n    _id\n    product\n    brand\n    conditionState\n    conditionDescription\n    createdAt\n    updatedAt\n    craxId\n  }\n}\n    ";
export declare const useCreateOrUpdateHardwareMutation: <TError = unknown, TContext = unknown>(options?: UseMutationOptions<CreateOrUpdateHardwareMutation, TError, Exact<{
    hardware: HardwareInput;
}>, TContext>) => import("react-query").UseMutationResult<CreateOrUpdateHardwareMutation, TError, Exact<{
    hardware: HardwareInput;
}>, TContext>;
export declare const GetAllHardwareForContractDocument = "\n    query getAllHardwareForContract {\n  getAllHardware {\n    _id\n    product\n    serialNumber\n    brand\n    conditionState\n    hasInvoiceDocument\n    price\n    status\n    conditionDescription\n    categoryName\n    contractsCount\n    createdAt\n    updatedAt\n    craxId\n  }\n}\n    ";
export declare const useGetAllHardwareForContractQuery: <TData = GetAllHardwareForContractQuery, TError = unknown>(variables?: GetAllHardwareForContractQueryVariables, options?: UseQueryOptions<GetAllHardwareForContractQuery, TError, TData, import("react-query").QueryKey>) => import("react-query").UseQueryResult<TData, TError>;
export declare const HardwareInvoiceByIdDocument = "\n    query hardwareInvoiceById($id: String!) {\n  getHardwareInvoiceById(id: $id) {\n    id\n    document\n  }\n}\n    ";
export declare const useHardwareInvoiceByIdQuery: <TData = HardwareInvoiceByIdQuery, TError = unknown>(variables: HardwareInvoiceByIdQueryVariables, options?: UseQueryOptions<HardwareInvoiceByIdQuery, TError, TData, import("react-query").QueryKey>) => import("react-query").UseQueryResult<TData, TError>;
export declare const HardwareAndCountDocument = "\n    query hardwareAndCount($onlyInStock: Boolean, $paginationInput: PaginationInput) {\n  getAllHardware(onlyInStock: $onlyInStock, paginationInput: $paginationInput) {\n    _id\n    product\n    serialNumber\n    brand\n    conditionState\n    hasInvoiceDocument\n    price\n    status\n    conditionDescription\n    categoryName\n    contractsCount\n    createdAt\n    updatedAt\n    craxId\n    category {\n      _id\n      name\n      createdAt\n      updatedAt\n    }\n    contracts {\n      _id\n      userId\n      user {\n        userId\n        firstName\n        lastName\n        email\n      }\n      firstName\n      lastName\n      signed\n      signedDate\n      hasSignedDocument\n      conditionState\n      notes\n      contractType\n      fullName\n      hardwareBrand\n      hardwareProduct\n      createdAt\n      updatedAt\n    }\n  }\n  getHardwareCount(paginationInput: $paginationInput)\n}\n    ";
export declare const useHardwareAndCountQuery: <TData = HardwareAndCountQuery, TError = unknown>(variables?: HardwareAndCountQueryVariables, options?: UseQueryOptions<HardwareAndCountQuery, TError, TData, import("react-query").QueryKey>) => import("react-query").UseQueryResult<TData, TError>;
export declare const GetAllHardwareAndUsersDocument = "\n    query getAllHardwareAndUsers($onlyInStock: Boolean) {\n  getAllHardware(onlyInStock: $onlyInStock) {\n    _id\n    product\n    serialNumber\n    brand\n    conditionState\n    hasInvoiceDocument\n    price\n    status\n    conditionDescription\n    categoryName\n    contractsCount\n    createdAt\n    updatedAt\n    craxId\n    category {\n      _id\n      name\n      createdAt\n      updatedAt\n    }\n  }\n  getAllUsers {\n    userId\n    firstName\n    lastName\n    email\n  }\n}\n    ";
export declare const useGetAllHardwareAndUsersQuery: <TData = GetAllHardwareAndUsersQuery, TError = unknown>(variables?: GetAllHardwareAndUsersQueryVariables, options?: UseQueryOptions<GetAllHardwareAndUsersQuery, TError, TData, import("react-query").QueryKey>) => import("react-query").UseQueryResult<TData, TError>;
export declare const GetAllHardwareAndCategoriesDocument = "\n    query GetAllHardwareAndCategories {\n  getAllHardware {\n    _id\n    product\n    serialNumber\n    brand\n    conditionState\n    hasInvoiceDocument\n    price\n    status\n    conditionDescription\n    categoryName\n    contractsCount\n    createdAt\n    updatedAt\n    craxId\n    category {\n      _id\n      name\n      createdAt\n      updatedAt\n    }\n    contracts {\n      _id\n      userId\n      firstName\n      lastName\n      user {\n        userId\n        firstName\n        lastName\n        email\n      }\n      hardware {\n        _id\n        product\n        serialNumber\n        brand\n        conditionState\n        hasInvoiceDocument\n        price\n        status\n        conditionDescription\n        categoryName\n        contractsCount\n      }\n      signed\n      signedDate\n      hasSignedDocument\n      conditionState\n      notes\n      contractType\n      fullName\n      hardwareBrand\n      hardwareProduct\n      createdAt\n      updatedAt\n    }\n  }\n  getAllCategories {\n    _id\n    createdAt\n    updatedAt\n    name\n  }\n}\n    ";
export declare const useGetAllHardwareAndCategoriesQuery: <TData = GetAllHardwareAndCategoriesQuery, TError = unknown>(variables?: GetAllHardwareAndCategoriesQueryVariables, options?: UseQueryOptions<GetAllHardwareAndCategoriesQuery, TError, TData, import("react-query").QueryKey>) => import("react-query").UseQueryResult<TData, TError>;
export declare const HardwareCountDocument = "\n    query hardwareCount {\n  getHardwareCount\n}\n    ";
export declare const useHardwareCountQuery: <TData = HardwareCountQuery, TError = unknown>(variables?: HardwareCountQueryVariables, options?: UseQueryOptions<HardwareCountQuery, TError, TData, import("react-query").QueryKey>) => import("react-query").UseQueryResult<TData, TError>;
