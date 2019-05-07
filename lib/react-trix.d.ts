import * as React from "react";
export interface MergeTag {
    tag: string;
    name: string;
}
export interface MergeTags {
    trigger: string;
    tags: Array<MergeTag>;
}
export interface TrixEditorProps {
    autoFocus?: boolean;
    placeholder?: string;
    value?: string;
    uploadURL?: string;
    uploadData?: {
        [key: string]: string;
    };
    bc?: any;
    mergeTags: Array<MergeTags>;
    onEditorReady?: (editor: any) => void;
    onChange: (html: string, text: string) => void;
}
export interface TrixEditorState {
    showMergeTags: boolean;
    tags: Array<MergeTag>;
}
export interface Editor {
    getSelectedRange: () => Array<number>;
    setSelectedRange: (range: Array<number>) => void;
    getClientRectAtPosition: (pos: number) => Rect;
    expandSelectionInDirection: (direction: "forward" | "backward") => void;
    insertString: (s: string) => void;
}
export interface Rect {
    top: number;
    left: number;
    right: number;
    bottom: number;
    width: number;
    height: number;
}
export declare class TrixEditor extends React.Component<TrixEditorProps, TrixEditorState> {
    private id;
    private container;
    private editor;
    private d;
    constructor(props: TrixEditorProps);
    private generateId;
    componentDidMount(): void;
    componentWillUnmount(): void;
    private handleChange;
    private handleUpload;
    private uploadAttachmentBC;
    private uploadAttachment;
    private handleTagSelected;
    private renderTagSelector;
    render(): JSX.Element;
}
