export interface IPageSectionConfigData {
    Title?: string;
    Name?: string;
    Order?: number;
    Type: string;
    TargetObjectTypeId?: number;
    Fields: any;
    InputRequestObject: any;
    TabType?: string;
    Rules?: string;
    ShowTabsOnTop ?: boolean;
    IsNotDeletable ?: boolean;
    ShowSaveAndAdd?: boolean;
    ShowSaveAs?: boolean;
    ShowAdd?: boolean;
    ShowLink?: boolean;
    HideCommandColumn?: boolean;
    DeleteMessageSuffix?: string;
    MasterFields?: any;
}